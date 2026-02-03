'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
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
  FormSection,
  FormContainer,
  FormGrid,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
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
    answer: 'Nossa secretaria funciona de segunda a sexta-feira, das 7h às 18h, e aos sábados das 8h às 12h. Durante o período de férias escolares, o horário pode sofrer alterações.'
  },
  {
    question: 'Como agendar uma visita à escola?',
    answer: 'Você pode agendar uma visita através do nosso formulário de contato, por telefone ou WhatsApp. Nossa equipe entrará em contato para confirmar o melhor horário para você conhecer nossa estrutura.'
  },
  {
    question: 'Vocês oferecem bolsas de estudo?',
    answer: 'Sim, oferecemos programas de bolsas de estudo por mérito acadêmico e também bolsas sociais. Entre em contato conosco para saber mais sobre os critérios e processo de seleção.'
  },
  {
    question: 'Qual o processo de matrícula?',
    answer: 'O processo de matrícula inclui agendamento de visita, entrevista com a coordenação, apresentação de documentos e assinatura do contrato. Nossa equipe estará disponível para orientar em todas as etapas.'
  },
  {
    question: 'A escola oferece transporte escolar?',
    answer: 'Temos parceria com empresas de transporte escolar credenciadas que atendem diversas regiões. Entre em contato para informações sobre rotas e valores.'
  }
]

export default function Contatos() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Função para formatar o telefone
  const formatarTelefone = (valor: string) => {
    // Remove tudo que não é número
    const numeros = valor.replace(/\D/g, '')
    
    // Limita a 11 dígitos
    const numeroLimitado = numeros.slice(0, 11)
    
    // Aplica a máscara
    if (numeroLimitado.length <= 2) {
      return numeroLimitado
    } else if (numeroLimitado.length <= 6) {
      return `(${numeroLimitado.slice(0, 2)}) ${numeroLimitado.slice(2)}`
    } else if (numeroLimitado.length <= 10) {
      return `(${numeroLimitado.slice(0, 2)}) ${numeroLimitado.slice(2, 6)}-${numeroLimitado.slice(6)}`
    } else {
      return `(${numeroLimitado.slice(0, 2)}) ${numeroLimitado.slice(2, 7)}-${numeroLimitado.slice(7, 11)}`
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Se for o campo telefone, aplica a máscara
    if (name === 'telefone') {
      const telefoneFormatado = formatarTelefone(value)
      setFormData(prev => ({
        ...prev,
        [name]: telefoneFormatado
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação adicional
    if (!formData.nome || !formData.email || !formData.telefone || !formData.assunto || !formData.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios!')
      return
    }
    
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
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
                <ContactLink href="tel:+551134567890">(11) 3456-7890</ContactLink>
                <ContactLink href="tel:+551134567891">(11) 3456-7891</ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Seg a Sex: 7h às 18h<br />Sáb: 8h às 12h
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
                <ContactLink href="mailto:contato@escolafuturo.com.br">
                  contato@escolafuturo.com.br
                </ContactLink>
                <ContactLink href="mailto:secretaria@escolafuturo.com.br">
                  secretaria@escolafuturo.com.br
                </ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Resposta em até 24h úteis
              </p>
            </ContactCard>

            <ContactCard>
              <ContactIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </ContactIcon>
              <ContactTitle>WhatsApp</ContactTitle>
              <ContactInfo>
                <ContactLink href="https://wa.me/5511987654321" target="_blank">
                  (11) 98765-4321
                </ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Atendimento rápido<br />Seg a Sex: 7h às 18h
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
                  href="https://maps.google.com/?q=Av.+Paulista,+1000+-+São+Paulo" 
                  target="_blank"
                >
                  Av. Paulista, 1000<br />
                  Bela Vista - São Paulo/SP<br />
                  CEP: 01310-100
                </ContactLink>
              </ContactInfo>
              <p style={{ fontSize: '0.95rem', color: '#888', marginTop: '0.5rem' }}>
                Clique para abrir no mapa
              </p>
            </ContactCard>
          </ContactGrid>
        </Section>

        {/* Formulário de Contato */}
        <FormSection>
          <SectionTitle>Envie sua Mensagem</SectionTitle>
          <SectionSubtitle>
            Preencha todos os campos abaixo e entraremos em contato o mais breve possível
          </SectionSubtitle>
          
          <FormContainer onSubmit={handleSubmit}>
            <FormGrid>
              <FormGroup>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input 
                  type="text" 
                  id="nome" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required 
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">E-mail *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required 
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="telefone">Telefone *</Label>
                <Input 
                  type="tel" 
                  id="telefone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(11) 91234-5678"
                  required 
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="assunto">Assunto *</Label>
                <Select 
                  id="assunto" 
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="matricula">Informações sobre Matrícula</option>
                  <option value="visita">Agendar Visita</option>
                  <option value="bolsas">Bolsas de Estudo</option>
                  <option value="pedagogico">Questões Pedagógicas</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="outros">Outros</option>
                </Select>
              </FormGroup>
            </FormGrid>

            <FormGroup>
              <Label htmlFor="mensagem">Mensagem *</Label>
              <Textarea 
                id="mensagem" 
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Digite sua mensagem aqui..."
                rows={6}
                required
              />
            </FormGroup>

            <p style={{ 
              textAlign: 'center', 
              color: '#666', 
              fontSize: '0.95rem', 
              marginTop: '1rem',
              fontStyle: 'italic'
            }}>
              * Todos os campos são obrigatórios
            </p>

            <SubmitButton type="submit">
              Enviar Mensagem
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </SubmitButton>
          </FormContainer>
        </FormSection>

        {/* Mapa */}
        <MapSection>
          <SectionTitle>Como Chegar</SectionTitle>
          <SectionSubtitle>
            Estamos localizados em uma região de fácil acesso
          </SectionSubtitle>
          
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.096558150183!2d-46.65629068502207!3d-23.56288446791374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <MapOverlay>
              <InfoCard>
                <InfoTitle>Escola Futuro</InfoTitle>
                <InfoText>
                  📍 Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo/SP - CEP: 01310-100<br />
                  🚇 Estação Brigadeiro (Linha 2-Verde)<br />
                  🚌 Várias linhas de ônibus
                </InfoText>
              </InfoCard>
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
            <SocialCard href="https://facebook.com/escolafuturo" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>Facebook</SocialTitle>
              <SocialHandle>@escolafuturo</SocialHandle>
            </SocialCard>

            <SocialCard href="https://instagram.com/escolafuturo" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>Instagram</SocialTitle>
              <SocialHandle>@escolafuturo</SocialHandle>
            </SocialCard>

            <SocialCard href="https://youtube.com/@escolafuturo" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>YouTube</SocialTitle>
              <SocialHandle>@escolafuturo</SocialHandle>
            </SocialCard>

            <SocialCard href="https://linkedin.com/company/escolafuturo" target="_blank">
              <SocialIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
              <SocialTitle>LinkedIn</SocialTitle>
              <SocialHandle>/escolafuturo</SocialHandle>
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
    </>
  )
}