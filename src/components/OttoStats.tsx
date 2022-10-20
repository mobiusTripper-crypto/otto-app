import Constellations from 'assets/constellations'
import format from 'date-fns/format'
import Otto from 'models/Otto'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components/macro'
import { Note } from 'styles/typography'
import ClassicIcon from 'assets/badge/classic.png'
import LegendaryIcon from 'assets/badge/legendary.png'
import { useAdventureOtto } from 'contexts/AdventureOtto'
import { useAdventureLocation } from 'contexts/AdventureLocation'
import { useMemo } from 'react'
import BoostIcon from 'components/BoostIcon'

const StyledContainer = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20px;
`

const StyledAttr = styled(Note)<{ icon: string }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: center / cover url(${({ icon }) => icon});
  }
`

const StyledBoostIcon = styled(BoostIcon)`
  position: absolute;
  right: 0;
  bottom: 0;
`

export default function OttoStats() {
  const location = useAdventureLocation()
  const { draftOtto: otto } = useAdventureOtto()
  const { t } = useTranslation()

  const attributes = [
    { key: 'generation', icon: '/trait-icons/Generation.png', value: t('otto.first_gen') },
    { key: 'zodiac', icon: Constellations[otto?.zodiacSign ?? ''], value: otto?.zodiacSign },
    {
      key: 'birthday',
      icon: '/trait-icons/Birthday.png',
      value: format(otto?.birthday ?? new Date(0), 'MMM dd, yyyy'),
    },
    { key: 'gender', icon: '/trait-icons/Gender.png', value: otto?.gender },
    { key: 'personality', icon: '/trait-icons/Personality.png', value: otto?.personality },
    { key: 'arms', icon: `/arms/${otto?.armsImage}.png`, value: otto?.coatOfArms },
    {
      key: 'legendary',
      icon: otto?.legendary ? LegendaryIcon.src : ClassicIcon.src,
      value: t(otto?.legendary ? 'otto.legendary' : 'otto.classic'),
    },
    { key: 'items', icon: '/trait-icons/Items.png', value: otto?.wearableTraits.length ?? 0 },
    { key: 'voice', icon: '/trait-icons/Voice.png', value: otto?.voiceName },
  ]

  const hasBoost = useMemo(() => {
    return (location?.conditionalBoosts ?? [])
      .filter(boost => boost.effective)
      .reduce(
        (map, boost) =>
          Object.assign(map, {
            [boost.type]: true,
          }),
        {} as { [k: string]: boolean }
      )
  }, [location?.conditionalBoosts])

  return (
    <StyledContainer>
      {attributes.map(attr => (
        <StyledAttr key={attr.key} icon={attr.icon}>
          {attr.value}
          {hasBoost[attr.key] && <StyledBoostIcon />}
        </StyledAttr>
      ))}
    </StyledContainer>
  )
}