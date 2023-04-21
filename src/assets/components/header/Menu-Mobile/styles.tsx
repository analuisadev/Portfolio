import styled, { ThemedStyledProps } from "styled-components";

interface HamburgerProps {
    isOpen: boolean;
}

export const MenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .4rem;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ThinLine = styled.div<HamburgerProps>`
  width: 2.8rem;
  height: 0.1rem;
  background: var(--White);
  transition: transform 0.3s;

  ${({ isOpen }) => isOpen && `transform: rotate(45deg) translate(0.15rem, 0.25rem);`}
`

export const ThinLineTwo = styled(ThinLine)`
  
  ${({ isOpen }) => isOpen && `transform: rotate(-45deg) translate(0.15rem, -0.25rem);`}
  
`

export const SmallLine = styled(ThinLine) <HamburgerProps>`
  width: 1.4rem;

  ${({ isOpen }) => isOpen && `opacity: 0;`}
`
