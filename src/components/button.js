import styled from 'styled-components';
import { isValidElement } from 'react';
const ButtonStyled = styled.button`
  align-items: center;
  background: var(--buttonBG);
  border: 1px solid var(--grey);
  border-radius: .5rem;
  color: var(--white);
  display: inline-flex;
  cursor: pointer;
  font: var(--button);
  gap: .5rem;
  min-inline-size: 135px;
  justify-content: center;
  padding-block: .25rem;
  text-decoration: none !important;
  &:hover {
    background: var(--white);
    color: var(--buttonBG);
  }
`;

function Button({text, link, className, icon}) {
  const component = link ? 'a' : 'button';
  let iconComponent = null;
  if(icon) {
    if(isValidElement(icon)){
      iconComponent = icon;
    }
  }

  return (
    <ButtonStyled as={component} href={link} className={className}>
      {iconComponent}
      {text}
    </ButtonStyled>
  )
}

export default Button;