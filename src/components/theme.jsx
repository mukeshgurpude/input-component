import styled from "styled-components"
import Icons from "./icon";

export default function ThemeToggle({theme, changer}) {
  const next = theme === "light" ? "dark" : "light";
  return <Container>
    <Button onClick={()=>changer('auto')} children={<Icons icon='sync' />} />
    <Button onClick={()=>changer(next)}>
      <Icons icon={next === "light" ? "light_mode" : "dark_mode"} />
    </Button>
  </Container>
}

const Container = styled.aside`
  --side-padding: .4em;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  z-index: 100;
  right: 1em;
  background-color: var(--toggle-background);
  padding: 2em var(--side-padding) .8em var(--side-padding);
  border-radius: 0 0 2em 2em;
  box-shadow: 0 0 2em 4px var(--toggle-shadow);
`
const Button = styled.button`
  border-radius: 50%;
  border: none;
  font-size: 2em;
  background-color: var(--main-text-color);
  color: var(--sidebar-color);
  cursor: pointer;
  &:hover {
    background-color: var(--navlink-color);
    color: var(--text-color);
  }
`
