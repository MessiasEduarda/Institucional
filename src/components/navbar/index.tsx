'use client';

import { useState } from 'react';
import { IoHomeOutline, IoInformationCircleOutline, IoBriefcaseOutline, IoMailOutline, IoSchoolOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
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
  MobileMenuButton,
  MobileOverlay,
  MobileNav,
  MobileNavLink,
  MobileNavLinkIcon,
  MobileNavLinkText,
} from './styles';

const Navbar = () => {
  const pathname = usePathname() ?? '';
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Desktop Navbar - unchanged */}
      <NavbarContainer
        $expanded={expanded}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <LogoButton onClick={handleLogoClick}>
          <LogoImage>
            <img 
              src="/logo11.jpeg" 
              alt="Logo" 
            />
          </LogoImage>
          {showLogo && (
            <LogoText $expanded={expanded} $show={showLogo}>
              <span style={{ color: '#000000' }}>BIBLIOTECARIA</span>
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

      {/* Mobile Hamburger Button */}
      <MobileMenuButton onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </MobileMenuButton>

      {/* Mobile Overlay */}
      {mobileOpen && <MobileOverlay onClick={() => setMobileOpen(false)} />}

      {/* Mobile Nav Drawer */}
      <MobileNav $open={mobileOpen}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.5rem 1.5rem 1rem' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-cabourg-bold)', fontWeight: 700, fontSize: '1rem', color: '#000' }}>E.E Instituto Lumina</span>
        </div>

        <MobileNavLink onClick={() => handleMobileNav('/inicio')} $selected={isInicio}>
          <MobileNavLinkIcon><IoHomeOutline /></MobileNavLinkIcon>
          <MobileNavLinkText $selected={isInicio}>Início</MobileNavLinkText>
        </MobileNavLink>

        <MobileNavLink onClick={() => handleMobileNav('/sobre')} $selected={pathname.startsWith('/sobre')}>
          <MobileNavLinkIcon><IoInformationCircleOutline /></MobileNavLinkIcon>
          <MobileNavLinkText $selected={pathname.startsWith('/sobre')}>Sobre</MobileNavLinkText>
        </MobileNavLink>

        <MobileNavLink onClick={() => handleMobileNav('/projetos')} $selected={pathname.startsWith('/projetos')}>
          <MobileNavLinkIcon><IoBriefcaseOutline /></MobileNavLinkIcon>
          <MobileNavLinkText $selected={pathname.startsWith('/projetos')}>Projetos</MobileNavLinkText>
        </MobileNavLink>

        <MobileNavLink onClick={() => handleMobileNav('/alunos')} $selected={pathname.startsWith('/alunos')}>
          <MobileNavLinkIcon><IoSchoolOutline /></MobileNavLinkIcon>
          <MobileNavLinkText $selected={pathname.startsWith('/alunos')}>Alunos</MobileNavLinkText>
        </MobileNavLink>

        <div style={{ height: '1px', background: '#e5e5e5', margin: '0.5rem 1.5rem' }} />

        <MobileNavLink onClick={() => handleMobileNav('/contatos')} $selected={pathname.startsWith('/contatos')}>
          <MobileNavLinkIcon><IoMailOutline /></MobileNavLinkIcon>
          <MobileNavLinkText $selected={pathname.startsWith('/contatos')}>Contatos</MobileNavLinkText>
        </MobileNavLink>
      </MobileNav>
    </>
  );
};

export default Navbar;