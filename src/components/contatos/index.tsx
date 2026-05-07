'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import { 
  Container, 
  Hero, 
  HeroContent,
  HeroImage,
  Title, 
  Subtitle,
  Section,
  SectionTitle,
  SectionSubtitle,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactTitle,
  ContactInfo,
  ContactLink,
  MapSection,
  MapContainer,
  MapOverlay,
  InfoCard,
  InfoTitle,
  InfoText,
  FAQSection,
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  SocialSection,
  SocialGrid,
  SocialCard,
  SocialIcon,
  SocialTitle,
  SocialHandle
} from './styles'

const faqs = [
  {
    question: 'Qual o horário de atendimento da secretaria?',
    answer: 'Nossa secretaria funciona de segunda a sexta-feira, das 7h às 17h. Durante o período de férias escolares, o horário pode sofrer alterações.'
  },
  {
    question: 'Como agendar uma visita à escola?',
    answer: 'Você pode agendar uma visita através do nosso formulário de contato ou por telefone. Nossa equipe entrará em contato para confirmar o melhor horário para você conhecer nossa estrutura.'
  },
  {
    question: 'Qual o processo de matrícula?',
    answer: 'O processo de matrícula segue as diretrizes da Secretaria de Educação do Estado de São Paulo — Diretoria de Ensino Leste 3. Entre em contato conosco para saber mais sobre os critérios e processo de seleção.'
  },
  {
    question: 'A escola oferece transporte escolar?',
    answer: 'Temos parceria com empresas de transporte escolar credenciadas que atendem diversas regiões de Cidade Tiradentes. Entre em contato para informações sobre rotas e valores.'
  },
  {
    question: 'Como entrar em contato com a Diretoria de Ensino?',
    answer: 'A escola é vinculada à Diretoria de Ensino Leste 3 da Secretaria de Educação do Estado de São Paulo. Para assuntos administrativos mais complexos, pode-se acionar a Diretoria diretamente.'
  }
]

export default function Contatos() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showMapCard, setShowMapCard] = useState(true)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Navbar />

      <Container>
        {/* Hero Section */}
        <Hero>
          <HeroImage>
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop" 
              alt="Entre em contato"
            />
          </HeroImage>
          <HeroContent>
            <Title>Fale Conosco</Title>
            <Subtitle>
              Estamos prontos para atender você. Entre em contato e tire suas dúvidas 
              sobre matrículas, infraestrutura ou qualquer informação sobre nossa escola.
            </Subtitle>
          </HeroContent>
        </Hero>

        {/* Informações de Contato */}
        <Section>
          <SectionTitle>Canais de Atendimento</SectionTitle>
          <SectionSubtitle>
            Escolha o canal mais conveniente para entrar em contato conosco
          </SectionSubtitle>
          
          <ContactGrid>
            <ContactCard>
              <ContactIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </ContactIcon>
              <ContactTitle>Telefone</ContactTitle>
              <ContactInfo>
                <ContactLink href="tel:+551122820464">(11) 2282-0464</ContactLink>
                <ContactLink href="tel:+551129642875">(11) 2964-2875</ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Seg a Sex: 7h às 17h
              </p>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </ContactIcon>
              <ContactTitle>E-mail</ContactTitle>
              <ContactInfo>
                <ContactLink href="mailto:e904582a@educacao.sp.gov.br">
                  e904582a@educacao.sp.gov.br
                </ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Resposta em até 24h úteis
              </p>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </ContactIcon>
              <ContactTitle>Endereço</ContactTitle>
              <ContactInfo>
                <ContactLink 
                  href="https://maps.google.com/?q=Rua+Rafael+Della+Monica,+300,+Cidade+Tiradentes,+São+Paulo,+SP" 
                  target="_blank"
                >
                  Rua Rafael Della Mônica, 300<br />
                  Cidade Tiradentes — São Paulo/SP<br />
                  CEP: 08470-480
                </ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Clique para abrir no mapa
              </p>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </ContactIcon>
              <ContactTitle>Atendimento</ContactTitle>
              <ContactInfo>
                <span style={{ fontSize: '0.95rem', color: '#555' }}>Segunda a Sexta</span>
                <span style={{ fontSize: '0.95rem', color: '#555' }}>7h às 17h</span>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Diretoria de Ensino Leste 3
              </p>
            </ContactCard>
          </ContactGrid>
        </Section>

        {/* Mapa */}
        <MapSection>
          <SectionTitle>Como Chegar</SectionTitle>
          <SectionSubtitle>
            Rua Rafael Della Mônica, 300 — Cidade Tiradentes, São Paulo/SP
          </SectionSubtitle>
          
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1234567890!2d-46.3929!3d-23.5523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66c8b0e0b0b1%3A0x0!2sR.+Rafael+Della+M%C3%B4nica%2C+300+-+Cidade+Tiradentes%2C+S%C3%A3o+Paulo+-+SP%2C+08470-480!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <MapOverlay>
              {showMapCard && (
                <InfoCard style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowMapCard(false)}
                    aria-label="Fechar"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#888',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                      borderRadius: '4px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#333')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#888')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                  <InfoTitle>E.E. Bibliotecária Maria Antonieta Ferraz</InfoTitle>
                  <InfoText>
                    📍 Rua Rafael Della Mônica, 300<br />
                    Cidade Tiradentes — São Paulo/SP<br />
                    CEP: 08470-480<br />
                    📞 (11) 2282-0464 / (11) 2964-2875
                  </InfoText>
                </InfoCard>
              )}
            </MapOverlay>
          </MapContainer>
        </MapSection>

        {/* Redes Sociais */}
        <SocialSection>
          <SectionTitle>Siga-nos nas Redes Sociais</SectionTitle>
          <SectionSubtitle>
            Acompanhe nossas novidades, eventos e conteúdos educacionais
          </SectionSubtitle>
          
          <SocialGrid>
            <SocialCard href="https://facebook.com" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>Facebook</SocialTitle>
              <SocialHandle>@eemariaantonietaferraz</SocialHandle>
            </SocialCard>

            <SocialCard href="https://instagram.com" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>Instagram</SocialTitle>
              <SocialHandle>@eemariaantonietaferraz</SocialHandle>
            </SocialCard>

            <SocialCard href="https://youtube.com" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>YouTube</SocialTitle>
              <SocialHandle>@eemariaantonietaferraz</SocialHandle>
            </SocialCard>
          </SocialGrid>
        </SocialSection>

        {/* FAQ */}
        <FAQSection>
          <SectionTitle>Perguntas Frequentes</SectionTitle>
          <SectionSubtitle>
            Respostas rápidas para as dúvidas mais comuns
          </SectionSubtitle>
          
          <FAQContainer>
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                $isOpen={openFAQ === index}
                data-is-open={openFAQ === index}
              >
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    style={{
                      transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </FAQQuestion>
                <FAQAnswer>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
        </FAQSection>
      </Container>
      <Footer />
    </>
  )
}