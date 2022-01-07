import { useState } from "react";
import styled, { css } from "styled-components";
import Icons from './icon';

export default function Input({
    value: Value, helperText, 
    startIcon, endIcon, ...props
  }) {
  const mappedProps = {
    disabled: !!props.disabled,
    error: !!props.error,
    fullWidth: !!props.fullWidth,
    multiline: !!props.multiline,
    hover: !!props.hover,
    focus: !!props.focus,
    startIcon: !!startIcon,
    endIcon: !!endIcon,
    rows: props.row || 3,
    size: props.size || "md",
    helperText: props.helperText || "",
    placeholder: props.placeholder || "Placeholder"
  }
  const label = props.label || 'Label'
  const [value, setValue] = useState(Value || '');

  return <Container {...mappedProps}>
    <Label>
      <span>{label}</span>
      <div style={{position: 'relative', width: 'max-content'}}>
        {startIcon && <Icon position='start' children={<Icons icon={startIcon}/>}/>}
        {
          props.multiline
          ?
          <MultiText {...mappedProps} value={value} onChange={(e) => setValue(e.target.value)} />
          :
          <Text type='text' {...mappedProps} value={value} onChange={(e) => setValue(e.target.value)} />
        }

        {endIcon && <Icon position='end' children={<Icons icon={endIcon}/>}/>}
      </div>
    </Label>
    {helperText && <Helper children={helperText}/>}
  </Container>
}


const Container = styled.div`
  ${({error}) => error &&
    `--border-color: var(--error-color);
    --border-color-hover: var(--error-hover-color);
    --border-color-focus: var(--error-focus-color);
    `}
  ${({disabled}) => disabled &&
    `opacity: 0.5;
    --border-color: var(--disabled-color);
    --border-color-hover: var(--disabled-hover-color);
    --border-color-focus: var(--disabled-focus-color);
    `}

  ${({hover}) => hover &&
    '--border-color: var(--border-color-hover);'}
  ${({focus}) => focus &&
    '--border-color: var(--border-color-focus);'}
`
const Label = styled.label`
  position: relative;
  display: flex;
  flex-flow: column;
  row-gap: .2rem;
  color: var(--border-color);
`
const genericinput = css`
  border: 1.5px solid var(--border-color);
  border-radius: 3px;
  padding: .75rem 0.5rem;
  outline: none;

  ${({size}) => {
    switch(size) {
      case 'sm':
        return 'width: 20ch;'
      case 'md':
        return 'width: 25ch;'
      default:
        return 'width: 25ch;'
    }
  }}
  ${({fullWidth}) => fullWidth && 'width: 100%;'}

  &:hover {
    --border-color: var(--border-color-hover)
  }
  &:focus {
    --border-color: var(--border-color-focus)
  }
  ${({startIcon}) => startIcon && 'padding-left: 2rem'}
  ${({endIcon}) => endIcon && 'padding-right: 2rem'}
  ${({disabled}) => disabled && 'cursor: not-allowed;'}}
`
const Text = styled.input`
  ${genericinput}
`
const MultiText = styled.textarea`
  ${genericinput}
  resize: none;
`
const Helper = styled.span`
  color: var(--border-color);
  font-size: .8rem;
`
const Icon = styled.span`
  position: absolute;
  bottom: .4rem;
  color: var(--border-color);
  ${({position}) => {
    switch(position) {
      case 'start': return 'left: .3em';
      case 'end': return 'right: .5em';
      default: return ''
    }
  }}
`
