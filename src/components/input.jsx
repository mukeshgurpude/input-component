import { useState } from "react";
import styled, { css } from "styled-components";

export default function Input(props) {
  const mappedProps = {
    disabled: !!props.disabled,
    error: !!props.error,
    fullWidth: !!props.fullWidth,
    multiline: !!props.multiline,
    hover: !!props.hover,
    focus: !!props.focus,
    rows: props.row || 3,
    size: props.size || "md",
    helperText: props.helperText || "",
    placeholder: props.placeholder || "Placeholder",
  }
  const label = props.label || 'Label'
  const [value, setValue] = useState(props.value || '');

  return <Container {...mappedProps}>
    <Label>
      <span>{label}</span>
      {
        props.multiline
        ?
        <MultiText {...mappedProps} value={value} onChange={(e) => setValue(e.target.value)} />
        :
        <Text type='text' {...mappedProps} value={value} onChange={(e) => setValue(e.target.value)} />
      }
    </Label>
  </Container>
}

const Container = styled.div`
  --border-color: #828282;
  --border-color-hover: #333333;
  --border-color-focus: #2962FF;
  ${({error}) => error && 
    '--border-color: #D84949;--border-color-hover: #333;--border-color-focus: #D32F2F;'}
  ${({disabled}) => disabled &&
    'opacity: 0.5;--border-color: #828282;--border-color-hover: #333333;--border-color-focus: #2962FF;'}

  ${({hover}) => hover &&
    '--border-color: var(--border-color-hover);'}
  ${({focus}) => focus &&
    '--border-color: var(--border-color-focus);'}
`
const Label = styled.label`
  display: flex;
  flex-flow: column;
  row-gap: .2rem;
  color: var(--border-color);
`
const genericinput = css`
  border: 1.5px solid var(--border-color);
  border-radius: 3px;
  padding: .75rem 0.5rem;
  margin-bottom: 1rem;
  outline: none;

  ${({size}) => {
    switch(size) {
      case 'sm':
        return 'width: 20ch;'
      case 'md':
        return 'width: 25ch;'
    }
  }}
  ${({fullWidth}) => fullWidth && 'width: 100%;'}

  &:hover {
    border-color: var(--border-color-hover)
  }
  &:focus {
    border-color: var(--border-color-focus)
  }
`
const Text = styled.input`
  ${genericinput}
`
const MultiText = styled.textarea`
  ${genericinput}
  resize: none;
`
