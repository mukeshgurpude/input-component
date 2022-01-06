import styled from 'styled-components';
import Input from './input';

function Child ({text, children, normal}) {
  return <div>
    <Heading normal={normal}>{text}</Heading>
    {children}
  </div>
}

export function InputContainer ({emulate, text, ...props}) {
  if (!!emulate) {  // Emulate hover and focus ui
    return <Parent>
      <Child text={`<Input ${text} />`} children={<Input {...props} />} />
      <Child text={'&:hover'} normal={true} children={<Input {...props} hover />} />
      <Child text={'&:focus'} normal={true} children={<Input {...props} focus />} />
    </Parent>
  }
  return <>
    <Child text={`<Input ${text} />`} children={<Input {...props} />} />
  </>
}

export default function Main() {
  const helper = 'Some interesting text'
  const label = 'Labeled input'
  return <Container>
    <h3>Inputs</h3>
    <InputContainer emulate text='' />
    <InputContainer emulate text={`label="${label}"`} label={label} />
    <InputContainer error emulate text='error' />
    <InputContainer disabled text='disabled' />
    <Parent>
      <InputContainer helperText={helper} text={`helperText="${helper}"`}/>
      <InputContainer helperText={helper} error text={`helperText="${helper}" error`}/>
    </Parent>
    <Parent>
      <InputContainer startIcon='phone' text='startIcon="phone"' />
      <InputContainer endIcon='lock' text='endIcon="lock"' />
    </Parent>
    <InputContainer value='Text' text='value="Text"' />
    <Parent>
      <InputContainer size='sm' text='size="sm"' />
      <InputContainer size='md' text='size="md"' />
    </Parent>
    <InputContainer fullWidth text='fullWidth' />
    <InputContainer fullWidth text='error fullWidth startIcon="android"' startIcon='android' error />
    <Parent>
    <InputContainer multiline text='multiline' />
    <InputContainer multiline text='multiline row="4"' row={4} />
    </Parent>
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
  gap: 3rem;
`
const Heading = styled.span`
  display: inline-block;
  font-weight: 500;
  margin-top: 1em;
  padding: .5em 0;
  font-family: ubuntu-mono, monspace;
  ${({normal}) => normal || 'color: #000;'}
`
