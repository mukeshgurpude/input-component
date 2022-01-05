import styled from 'styled-components';
import Input from './input';

export default function Main() {
  return <Container>
    <h3>Inputs</h3>
    <Input />
    <Input multiline />
  </Container>
}

const Container = styled.main`
  padding: 1rem;
  color: #656565;
`
