import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from './components/main';

function App() {
  return <Container>
    <Sidebar />
    <Main />
  </Container>
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export default App;
