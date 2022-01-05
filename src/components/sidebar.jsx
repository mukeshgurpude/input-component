import styled from 'styled-components';

export default function Sidebar() {
  const links = [
    {text: 'Typography', link: '/typography'},
    {text: 'Grid', link: '/grid'},
    {text: 'Buttons', link: '/buttons'},
    {text: 'Inputs', link: '/', active: true},
  ]
  return <Header role='header'>
    <Logo>Devchallenges.io</Logo>
    <NavList>
      {
        links.map((link, index) => {
          return <NavItem key={index} active={!!link.active}>
            <NavLink to={link.link}>{link.text}</NavLink>
          </NavItem>
        })
      }
    </NavList>
  </Header>
}

const Header = styled.header``
const Logo = styled.div``
const NavList = styled.ul``
const NavItem = styled.li``
const NavLink = styled.a``
