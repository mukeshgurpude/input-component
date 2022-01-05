import { useState } from "react";
import styled, { css } from "styled-components";

export default function Input(props) {
  const mappedProps = {
    disabled: !!props.disabled,
    error: !!props.error,
    fullWidth: !!props.fullWidth,
    multiline: !!props.multiline,
    rows: props.row || 3,
    size: props.size || "md",
    helperText: props.helperText || "",
    placeholder: props.placeholder || "Placeholder",
  }

  const [value, setValue] = useState(props.value || '');

  return <Container>
    {
      props.multiline
      ?
      <MultiText {...mappedProps} value={value} onChange={(e) => setValue(e.target.value)} />
      :
      <Text type='text' {...mappedProps} value={value} onChange={(e) => setValue(e.target.value)} />
    }
  </Container>
}

const Container = styled.div``
const genericinput = css`
  --border-color: #828282;
  --border-color-hover: #333333;
  --border-color-focus: #2962FF;
  border: 1.5px solid var(--border-color);
  border-radius: 3px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  outline: none;

  ${({fullWidth}) => fullWidth && 'width: 100%;'}

  &:hover {
    border-color: var(--border-color-hover)
  }
  &:focus {
    border-color: var(--border-color-focus)
  }
  ${({error}) => error && 
    '--border-color: #D84949;--border-color-hover: #333;--border-color-focus: #D32F2F;'}
  ${({disabled}) => disabled &&
    ';opacity: 0.5;--border-color: #828282;--border-color-hover: #333333;--border-color-focus: #2962FF;'}
`
const Text = styled.input`
  ${genericinput}
`
const MultiText = styled.textarea`
  ${genericinput}
  resize: none;
`
