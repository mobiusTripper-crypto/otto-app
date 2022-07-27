import styled from 'styled-components/macro'
import useIsAtTop from 'hooks/useIsAtTop'
import Logo from './Logo'
import Wallet from './Wallet'
import Title from './Title'
import { PageHeaderProps } from './type'
import { ClamBalance, FishBalance } from './Balance'
import MenuButton from './MenuButton'
import WalletPopup from './WalletPopup'

const StyledContainer = styled.div<{ isAtTop: boolean }>`
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 5px 5% 10px;
  box-sizing: border-box;

  &::after {
    content: '';
    background: linear-gradient(180deg, #5c3317 0%, #45240d 100%);
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }

  ${({ isAtTop }) =>
    !isAtTop &&
    `
    &::after {
      opacity: 1;
    }
  `}
`

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const StyledClamBalanceContainer = styled.div``

const StyledWalletPopup = styled(WalletPopup)`
  position: absolute;
  left: calc(50% - 160px);
  /* display: none; */

  ${StyledClamBalanceContainer}:hover, ${StyledClamBalanceContainer}:active & {
    display: block;
  }
`

export default function PageHeader({ title }: PageHeaderProps) {
  const isAtTop = useIsAtTop()

  return (
    <StyledContainer isAtTop={isAtTop}>
      <StyledRow>
        <Logo />
        <StyledClamBalanceContainer>
          <ClamBalance />
          <StyledWalletPopup />
        </StyledClamBalanceContainer>
        <FishBalance />
        <Wallet />
      </StyledRow>
      <StyledRow>
        <Title>{title}</Title>
        <MenuButton />
      </StyledRow>
    </StyledContainer>
  )
}
