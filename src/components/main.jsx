import styled from 'styled-components';
import Input from './input';

function Child ({text, children}) {
  return <div>
    <h4>{text}</h4>
    {children}
  </div>
}

export function InputContainer ({children: Children, emulate, text, ...props}) {
  if (!!emulate) {
    return <Parent>
      <Child text={`<Input ${text} />`} >
        <Children {...props} />
      </Child>
      <Child text={'&:hover'}>
        <Children {...props} hover />
      </Child>
      <Child text={'&:focus'}>
        <Children {...props} focus />
      </Child>
    </Parent>
  }
  return <>
    <Child text={`<Input ${text} />`}>
      <Children {...props} />
    </Child>
  </>
}

export default function Main() {
  return <Container>
    <h3>Inputs</h3>
    <InputContainer children={Input} emulate text='' />
    <InputContainer children={Input} error emulate text='error' />
    <InputContainer children={Input} disabled text='disabled' />
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
  justify-content: space-between;
  flex-flow: wrap;
`
