import axios from 'axios'
import BorderContainer from 'components/BorderContainer'
import ProgressBar from 'components/ProgressBar'
import { formatDuration, intervalToDuration } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { theme } from 'styles'
import { Caption, ContentMedium, ContentSmall } from 'styles/typography'
import ClockImage from './clock.png'
import { ListMyPortals_ottos } from './__generated__/ListMyPortals'

const StyledPortalCard = styled(BorderContainer)`
  width: 265px;
  height: 448px;
  display: flex;
  flex-direction: column;

  padding: 15px;
  gap: 12px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    height: 363px;
    padding: 8px 5px;
    gap: 8px;
    align-items: center;
  }

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.lightGray100};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

const StyledPortalImage = styled.img`
  width: 225px;
  height: 225px;
  border: 4px solid ${({ theme }) => theme.colors.otterBlack};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 90%;
    height: unset;
  }
`

const StyledPortalTitle = styled.div`
  color: ${({ theme }) => theme.colors.otterBlack};
`

const StyledPortalStatus = styled.div`
  color: ${({ theme }) => theme.colors.otterBlack};
`

const StyledCountdown = styled.div`
  width: 90%;
  display: flex;
  color: ${({ theme }) => theme.colors.darkGray200};
  align-items: center;

  &::before {
    content: '';
    background: url(${ClockImage});
    background-size: contain;
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
    margin-right: 10px;
    display: block;
  }
`

const StyledProgressBar = styled(ProgressBar)`
  width: 90%;
`

interface PortalMeta {
  name: string
  image: string
}

interface Props {
  portal: ListMyPortals_ottos
}

export default function PortalCard({ portal: { tokenURI, portalStatus, canOpenAt } }: Props) {
  const { t } = useTranslation()
  const [now, setNow] = useState(Date.now())
  const [portalMeta, setPortalMeta] = useState<PortalMeta | null>(null)
  canOpenAt *= 1000
  const openProgress = useMemo(
    () => 100 - Math.round(((Number(canOpenAt) - now) / (7 * 86400 * 1000)) * 100),
    [canOpenAt, now]
  )
  const duration = useMemo(
    () =>
      formatDuration(
        intervalToDuration({
          start: now,
          end: Number(canOpenAt),
        })
      ),
    [canOpenAt, now]
  )

  useEffect(() => {
    axios.get<PortalMeta>(tokenURI).then(res => {
      setPortalMeta(res.data)
    })
  }, [tokenURI])
  useEffect(() => {
    setTimeout(() => setNow(Date.now()), 1000)
  }, [now])

  return (
    <StyledPortalCard borderColor={theme.colors.clamPink}>
      <StyledPortalImage src={portalMeta?.image} />
      <StyledPortalTitle>
        <ContentMedium>{portalMeta?.name}</ContentMedium>
      </StyledPortalTitle>
      <StyledPortalStatus>
        <ContentSmall>{t(`my_portals.status.${portalStatus}`)}</ContentSmall>
      </StyledPortalStatus>
      <StyledProgressBar height="12px" progress={openProgress} />
      <StyledCountdown>
        <Caption>{t('my_portals.open_duration', { duration })}</Caption>
      </StyledCountdown>
    </StyledPortalCard>
  )
}