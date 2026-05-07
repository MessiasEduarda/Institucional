'use client'

import {
  FooterWrapper,
  FooterContainer,
  FooterTop,
  FooterBrand,
  FooterSchoolName,
  FooterSchoolSubtitle,
  FooterTagline,
  FooterColumnTitle,
  FooterColumnDivider,
  FooterLink,
  FooterLinkList,
  FooterContactItem,
  FooterContactIcon,
  FooterContactText,
  FooterBottom,
  FooterBottomLeft,
  FooterCopyright,
  FooterSocialLinks,
  FooterSocialLink,
  FooterDivider,
  FooterContactLabel,
  FooterContactValue,
} from './styles'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop>

          {/* Brand / Logo */}
          <FooterBrand>
            <div>
              <FooterSchoolName>E.E. Bibliotecária Maria Antonieta Ferraz</FooterSchoolName>
              <FooterSchoolSubtitle>Escola Estadual</FooterSchoolSubtitle>
            </div>
            <FooterTagline>
              Educação pública de qualidade, comprometida com o aprendizado
              e o desenvolvimento de cada estudante de Cidade Tiradentes.
            </FooterTagline>
          </FooterBrand>

          {/* Links rápidos */}
          <div>
            <FooterColumnTitle>Navegação</FooterColumnTitle>
            <FooterColumnDivider />
            <FooterLinkList>
              <li><FooterLink href="/">Início</FooterLink></li>
              <li><FooterLink href="/sobre">Sobre a Escola</FooterLink></li>
              <li><FooterLink href="/alunos">Área do Aluno</FooterLink></li>
              <li><FooterLink href="/projetos">Projetos</FooterLink></li>
              <li><FooterLink href="/contatos">Contato</FooterLink></li>
            </FooterLinkList>
          </div>

          {/* Contato */}
          <div>
            <FooterColumnTitle>Contato</FooterColumnTitle>
            <FooterColumnDivider />
            <FooterLinkList as="div">
              <FooterContactItem>
                <FooterContactIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </FooterContactIcon>
                <FooterContactText>
                  <FooterContactLabel>Endereço</FooterContactLabel>
                  <FooterContactValue>
                    Rua Rafael Della Mônica, 300 — Cidade Tiradentes<br />
                    São Paulo — SP, CEP 08470-480
                  </FooterContactValue>
                </FooterContactText>
              </FooterContactItem>

              <FooterContactItem>
                <FooterContactIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </FooterContactIcon>
                <FooterContactText>
                  <FooterContactLabel>Telefone</FooterContactLabel>
                  <FooterContactValue>
                    (11) 2282-0464<br />
                    (11) 2964-2875
                  </FooterContactValue>
                </FooterContactText>
              </FooterContactItem>

              <FooterContactItem>
                <FooterContactIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </FooterContactIcon>
                <FooterContactText>
                  <FooterContactLabel>E-mail</FooterContactLabel>
                  <FooterContactValue>e904582a@educacao.sp.gov.br</FooterContactValue>
                </FooterContactText>
              </FooterContactItem>

              <FooterContactItem>
                <FooterContactIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </FooterContactIcon>
                <FooterContactText>
                  <FooterContactLabel>Atendimento</FooterContactLabel>
                  <FooterContactValue>Seg–Sex: 8h às 17h</FooterContactValue>
                </FooterContactText>
              </FooterContactItem>

              <FooterContactItem>
                <FooterContactIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </FooterContactIcon>
                <FooterContactText>
                  <FooterContactLabel>Diretoria de Ensino</FooterContactLabel>
                  <FooterContactValue>Leste 3 — Secretaria de Educação do Estado de SP</FooterContactValue>
                </FooterContactText>
              </FooterContactItem>
            </FooterLinkList>
          </div>

        </FooterTop>

        <FooterDivider />

        {/* Bottom bar */}
        <FooterBottom>
          <FooterBottomLeft>
            <FooterCopyright>
              © {currentYear} E.E. Bibliotecária Maria Antonieta Ferraz — Todos os direitos reservados.
            </FooterCopyright>
            <FooterCopyright $small>
              Secretaria de Educação do Estado de São Paulo — Diretoria de Ensino Leste 3
            </FooterCopyright>
          </FooterBottomLeft>

          <FooterSocialLinks>
            <FooterSocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </FooterSocialLink>

            <FooterSocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </FooterSocialLink>

            <FooterSocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </FooterSocialLink>
          </FooterSocialLinks>
        </FooterBottom>

      </FooterContainer>
    </FooterWrapper>
  )
}