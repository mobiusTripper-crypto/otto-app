import { useQuery } from '@apollo/client'
import ArrowDown from 'assets/ui/arrow_down.svg'
import Button from 'components/Button'
import { useMyOttos, useOttos } from 'hooks/useOtto'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import styled from 'styled-components/macro'
import { ContentMedium, Headline } from 'styles/typography'
import { useRarityEpoch } from 'contexts/RarityEpoch'
import { createSearchParams } from 'utils/url'
import { useRouter } from 'next/router'
import { LIST_RANKED_OTTOS } from 'graphs/otto'
import { ListRankedOttos, ListRankedOttosVariables } from 'graphs/__generated__/ListRankedOttos'
import LoadingGif from './loading.gif'
import ListRow from './ListRow'

const StyledRankList = styled.div`
  color: ${({ theme }) => theme.colors.otterBlack};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
`

const StyledTable = styled.section`
  width: 100%;
`

const StyledRow = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:nth-child(1) {
      // rank
      width: 80px;
      text-align: center;
    }
    &:nth-child(2) {
      flex: 1;
    }
    &:nth-child(3) {
      // reward
      width: 154px;
      text-align: center;
    }
    &:nth-child(4) {
      // rarity score
      width: 122px;
      text-align: center;
    }
    &:nth-child(5),
    &:nth-child(6) {
      // brs + rrs
      width: 64px;
      text-align: center;
    }
  }
`

const StyledTableHead = styled(StyledRow)`
  height: 47px;
  background: ${({ theme }) => theme.colors.lightGray200};
  padding: 10px 40px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }
`

const StyledMyOttoSection = styled.section<{ isLatestEpoch: boolean }>`
  padding: 10px 40px;
  background-color: ${({ isLatestEpoch, theme }) =>
    isLatestEpoch ? theme.colors.crownYellow : theme.colors.lightGray400};
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 10px;
  }

  > * {
    &:nth-child(2) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      overflow: hidden;
    }
    &:nth-last-child(2) {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      overflow: hidden;
    }
  }
`

const StyledHint = styled(ContentMedium)`
  margin-bottom: 10px;
`

const StyledExpandColumn = styled(ContentMedium)<{ expand: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  cursor: url('/cursor-pointer.png') 7 0, auto;
  margin-top: 10px;

  &:after {
    content: ' ';
    width: 24px;
    height: 24px;
    background-image: url(${ArrowDown.src});
    background-size: 100%;
    transform: rotate(${({ expand }) => (expand ? '180deg' : '0deg')});
  }
`

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
  }
`

const StyledTh = styled(ContentMedium).attrs({ as: 'div' })``

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin: 20px;
    gap: 20px;
  }
`

const StyledPaginationLink = styled.a<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex: 1;
    width: 100%;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
`

interface Props {
  className?: string
}

const PAGE = 20

export default function RankList({ className }: Props) {
  const { t } = useTranslation('', { keyPrefix: 'leaderboard.rank_list' })
  const router = useRouter()
  const page = Number(router.query.page || 0)
  const { epoch, isLatestEpoch } = useRarityEpoch()
  const {
    data,
    loading: loadingGraph,
    refetch,
  } = useQuery<ListRankedOttos, ListRankedOttosVariables>(LIST_RANKED_OTTOS, {
    variables: {
      skip: page * PAGE,
      first: PAGE,
      epoch,
    },
    skip: epoch === -1,
  })
  const ottoIds = useMemo(() => data?.ottos.map(o => o.tokenId) || [], [data])
  const { ottos, loading: loadingApi } = useOttos(ottoIds, { details: true, epoch })
  const { ottos: myOttos } = useMyOttos(epoch)
  const sortedMyOttos = useMemo(() => myOttos.sort((a, b) => a.ranking - b.ranking), [myOttos])
  const [expand, setExpand] = useState(false)
  const loading = loadingGraph || loadingApi

  useEffect(() => {
    refetch({ skip: page * PAGE, first: PAGE })
  }, [page])

  return (
    <StyledRankList className={className}>
      <StyledTable>
        {myOttos.length > 0 && (
          <StyledMyOttoSection isLatestEpoch={isLatestEpoch}>
            <StyledHint>{t('your_rank')}</StyledHint>
            {(expand ? sortedMyOttos : sortedMyOttos.slice(0, 1)).map(otto => (
              <ListRow key={otto.id} isMyOttoRow otto={otto} rank={otto.ranking} />
            ))}
            <StyledExpandColumn as="div" expand={expand} onClick={() => setExpand(expand => !expand)}>
              {expand ? t('show_less') : t('expand', { count: myOttos.length })}
            </StyledExpandColumn>
          </StyledMyOttoSection>
        )}
        <StyledTableHead>
          <StyledTh>{t('rank')}</StyledTh>
          <StyledTh>{t('name')}</StyledTh>
          <StyledTh>{t('est_reward')}</StyledTh>
          <StyledTh>{t('rarity_score')}</StyledTh>
          <StyledTh>{t('brs')}</StyledTh>
          <StyledTh>{t('rrs')}</StyledTh>
        </StyledTableHead>
        {loading && (
          <StyledLoading>
            <img src={LoadingGif.src} alt="loading" />
          </StyledLoading>
        )}
        {!loading && ottos.map((otto, index) => <ListRow key={otto.id} rank={page * PAGE + index + 1} otto={otto} />)}
      </StyledTable>
      {!loading && (
        <StyledPagination>
          <Link
            href={{
              pathname: '/leaderboard',
              search: `?${createSearchParams({ page: String(page - 1), epoch: String(epoch) })}`,
            }}
          >
            <StyledPaginationLink show={page > 0}>
              <StyledButton primaryColor="white" padding="20px" Typography={Headline}>
                {t('prev')}
              </StyledButton>
            </StyledPaginationLink>
          </Link>
          <Link
            href={{
              pathname: '/leaderboard',
              search: `?${createSearchParams({ page: String(page + 1), epoch: String(epoch) })}`,
            }}
          >
            <StyledPaginationLink show>
              <StyledButton primaryColor="white" padding="20px" Typography={Headline}>
                {t('next')}
              </StyledButton>
            </StyledPaginationLink>
          </Link>
        </StyledPagination>
      )}
    </StyledRankList>
  )
}
