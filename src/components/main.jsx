import styled from 'styled-components';
import Input from './input';

export function InputContainer ({children: Children, ...props}) {
  return <>
    <Children {...props} />
  </>
}

export default function Main() {
  return <Container>
    <h3>Inputs</h3>
    <InputContainer children={Input} />
    <InputContainer children={Input} error />
    <InputContainer children={Input} disabled />
    <InputContainer children={Input} fullWidth />
    <InputContainer children={Input} multiline />
  </Container>
}

const Container = styled.main`
  padding: 1rem;
  color: #656565;
  width: 100%;
`
