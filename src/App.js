import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from './components/main';
import ThemeToggle from "./components/theme";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto");

  useEffect(() => {
    const element = document.documentElement;
    if(theme === "auto") {
      element.removeAttribute('color-scheme')
    } else {
      element.setAttribute('color-scheme', theme)
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <Container>
    <Sidebar />
    <Main />
    <ThemeToggle changer={setTheme} theme={theme} />
  </Container>
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  psoition: relative;
`

export default App;
