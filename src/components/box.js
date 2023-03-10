import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #04072F66
`

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
//   border: 1px solid #04072F66
  
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
// border: 1px solid #04072F66;
//   border: black;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  
`

const StyledCheckbox = styled.div`
// border: 1px solid #04072F66
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;
//   border: 1px solid #04072F66
  color:black;
//   border:black;

  ${HiddenCheckbox}:focus + & {
    // box-shadow: 0 0 0 3px black;
    // border: 1px solid #04072F66
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  
  }
`

const CBox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default CBox
