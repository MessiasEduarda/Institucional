'use client';

import { useState } from 'react';
import { IoHomeOutline, IoInformationCircleOutline, IoBriefcaseOutline, IoMailOutline, IoSchoolOutline } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';

import {
  LogoButton,
  LogoText,
  Nav,
  NavLink,
  NavLinkIcon,
  NavLinkText,
  NavbarContainer,
  LogoImage,
  Divider,
} from './styles';

const Navbar = () => {
  const pathname = usePathname() ?? '';
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const isInicio = pathname === '/' || pathname.startsWith('/inicio');

  const handleMouseEnter = () => {
    setExpanded(true);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
    setTimeout(() => {
      setShowLogo(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setShowContent(false);
    setShowLogo(false);
    setExpanded(false);
  };

  const handleLogoClick = () => {
    router.push('/inicio');
  };

  return (
    <NavbarContainer
      $expanded={expanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LogoButton onClick={handleLogoClick}>
        <LogoImage>
          <img 
            src="/logo.png" 
            alt="Logo" 
          />
        </LogoImage>
        {showLogo && (
          <LogoText $expanded={expanded} $show={showLogo}>
            <span style={{ color: '#000000' }}>E.E Instituto Lumina</span>
          </LogoText>
        )}
      </LogoButton>

      <Nav $expanded={expanded}>
        <NavLink href="/inicio" $selected={isInicio}>
          <NavLinkIcon $selected={isInicio}>
            <IoHomeOutline />
          </NavLinkIcon>
          {showContent && (
            <NavLinkText $selected={isInicio}>
              Início
            </NavLinkText>
          )}
        </NavLink>

        <NavLink href="/sobre" $selected={pathname.startsWith('/sobre')}>
          <NavLinkIcon $selected={pathname.startsWith('/sobre')}>
            <IoInformationCircleOutline />
          </NavLinkIcon>
          {showContent && (
            <NavLinkText $selected={pathname.startsWith('/sobre')}>
              Sobre
            </NavLinkText>
          )}
        </NavLink>

        <NavLink href="/projetos" $selected={pathname.startsWith('/projetos')}>
          <NavLinkIcon $selected={pathname.startsWith('/projetos')}>
            <IoBriefcaseOutline />
          </NavLinkIcon>
          {showContent && (
            <NavLinkText $selected={pathname.startsWith('/projetos')}>
              Projetos
            </NavLinkText>
          )}
        </NavLink>

        <NavLink href="/alunos" $selected={pathname.startsWith('/alunos')}>
          <NavLinkIcon $selected={pathname.startsWith('/alunos')}>
            <IoSchoolOutline />
          </NavLinkIcon>
          {showContent && (
            <NavLinkText $selected={pathname.startsWith('/alunos')}>
              Alunos
            </NavLinkText>
          )}
        </NavLink>
      </Nav>

      <Divider />

      <NavLink href="/contatos" $selected={pathname.startsWith('/contatos')}>
        <NavLinkIcon $selected={pathname.startsWith('/contatos')}>
          <IoMailOutline />
        </NavLinkIcon>
        {showContent && (
          <NavLinkText $selected={pathname.startsWith('/contatos')}>
            Contatos
          </NavLinkText>
        )}
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;