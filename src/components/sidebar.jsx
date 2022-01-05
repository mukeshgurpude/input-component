import styled from 'styled-components';

export default function Sidebar() {
  const links = [
    {text: 'Typography', link: '/typography'},
    {text: 'Grid', link: '/grid'},
    {text: 'Buttons', link: '/buttons'},
    {text: 'Inputs', link: '/', active: true},
  ]
  return <Header role='header'>
    <Logo><span style={{color: '#F7542E'}}>Dev</span>challenges.io</Logo>
    <NavList>
      {
        links.map((link, index) => {
          return <NavItem key={index}>
            <NavLink href={link.link} active={!!link.active}>{link.text}</NavLink>
          </NavItem>
        })
      }
    </NavList>
  </Header>
}

const Header = styled.header`
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
  padding: 1rem;
  background-color: #FAFBFD;
`
const Logo = styled.h2``
const NavList = styled.ul`
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
  list-style: none;
`
const NavItem = styled.li``
const NavLink = styled.a`
  color: #9E9E9E;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none !important;
  ${props => props.active ? ';color: #000;' : ''}
`
