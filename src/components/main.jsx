import styled from 'styled-components';
import Input from './input';

function Child ({text, children}) {
  return <div>
    <h5>{text}</h5>
    {children}
  </div>
}

export function InputContainer ({children: Children, emulate, text, ...props}) {
  if (!!emulate) {  // Emulate hover and focus ui
    return <Parent>
      <Child text={`<Input ${text} />`} children={<Children {...props} />} />
      <Child text={'&:hover'} children={<Children {...props} hover />} />
      <Child text={'&:focus'} children={<Children {...props} focus />} />
    </Parent>
  }
  return <>
    <Child text={`<Input ${text} />`} children={<Children {...props} />} />
  </>
}

export default function Main() {
  return <Container>
    <h3>Inputs</h3>
    <InputContainer children={Input} emulate text='' />
    <InputContainer children={Input} error emulate text='error' />
    <InputContainer children={Input} disabled text='disabled' />
    <InputContainer children={Input} value='Text' text='value="Text"' />
    <Parent>
      <InputContainer children={Input} size='sm' text='size="sm"' />
      <InputContainer children={Input} size='md' text='size="md"' />
    </Parent>
    <InputContainer children={Input} fullWidth text='fullWidth' />
    <InputContainer children={Input} multiline text='multiline' />
  </Container>
}

const Container = styled.main`
  padding: 1rem;
  color: #656565;
  width: 100%;
`

const Parent = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 2rem;
`
