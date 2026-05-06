import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 40px;
  background: #0b1c2d;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
