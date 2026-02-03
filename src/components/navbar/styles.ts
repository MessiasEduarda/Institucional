import Link from 'next/link';
import styled from 'styled-components';

interface NavbarContainerProps {
  $expanded: boolean;
}

export const NavbarContainer = styled.div<NavbarContainerProps>`
  height: 500px;
  width: ${({ $expanded }) => ($expanded ? '265px' : '80px')};
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #00000029;
  padding: 1.5rem 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: width 0.3s ease;
  z-index: 1000;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const LogoButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  gap: 0.75rem;
  height: 120px;
  min-height: 120px;
`;

export const LogoImage = styled.div`
  width: 130px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
  margin-left: -2.9rem;
  margin-top: 2rem;

  img {
    width: 35%;
    height: 100%;
    object-fit: contain;
  }
`;

interface LogoTextProps {
  $expanded: boolean;
  $show: boolean;
}

export const LogoText = styled.div<LogoTextProps>`
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-left: -2.5rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  font-family: var(--font-cabourg-bold);
  margin-bottom: -2rem;
  
  animation: ${({ $show }) => ($show ? 'slideInFromLeft 0.4s ease-out forwards' : 'none')};
  opacity: ${({ $show }) => ($show ? '1' : '0')};
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  span {
    font-size: 1.2rem;
  }
`;

interface NavLinkProps {
  $selected: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  position: relative;
  padding: 0.5rem 1rem;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ $selected }) => ($selected ? '#3F693B' : 'transparent')};
  text-decoration: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  transition: all 0.2s;

  &:hover {
    background: #3F693B;
  }

  &:hover svg {
    color: #f5f2f2;
  }

  &:hover span {
    color: #f5f2f2;
  }

  ${({ $selected }) =>
    $selected &&
    `
    svg {
      color: #f5f2f2 !important;
    }
    
    span {
      color: #f5f2f2 !important;
    }
  `}
`;

interface NavLinkIconProps {
  $selected: boolean;
}

export const NavLinkIcon = styled.div<NavLinkIconProps>`
  position: relative;
  height: 36px;
  width: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: transparent;

  svg {
    font-size: 1.45rem;
    color: #3F693B;
  }

  transition: all 0.2s;
`;

interface NavLinkTextProps {
  $selected: boolean;
}

export const NavLinkText = styled.span<NavLinkTextProps>`
  font-size: 0.95rem;
  font-weight: ${({ $selected }) => ($selected ? '600' : '500')};
  color: ${({ $selected }) => ($selected ? '#f5f2f2' : '#7a7a7a')};
  white-space: nowrap;
  margin: 0;
  margin-left: 0.5rem;
  padding-right: 0.5rem;
`;

interface NavProps {
  $expanded: boolean;
}

export const Nav = styled.nav<NavProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  margin-top: -1rem;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #87E07E;
  margin: -2rem 0 1.5rem 0;
`;

