import { useDispatch, useSelector } from 'react-redux'
import { hideSideMenu, selectShowSideMenu } from 'store/uiSlice'
import styled from 'styled-components'
import LanguagePicker from './LanguagePicker'
import Logo from './Logo.png'

interface StyledProps {
  show: boolean
}

const StyledSideMenu = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ show }) => (show ? 100 : -1)};
  transition: all 0.25s;
`

const Background = styled.button<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ show }) => (show ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)')};
  backdrop-filter: blur(10px);
  transition: all 0.25s;
`

const Container = styled.div<StyledProps>`
  position: absolute;
  width: 300px;
  height: 100%;
  right: ${({ show }) => (show ? 0 : '-300px')};
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray200};
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
`

export default function SideMenu() {
  const dispatch = useDispatch()
  const show = useSelector(selectShowSideMenu)
  return (
    <StyledSideMenu show={show}>
      <Background show={show} onClick={() => dispatch(hideSideMenu())} />
      <Container show={show}>
        <StyledLogo src={Logo} />
        <LanguagePicker />
      </Container>
    </StyledSideMenu>
  )
}