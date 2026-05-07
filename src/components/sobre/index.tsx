'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import ExternalLinks from '@/components/ExternalLinks'
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
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  TimelineSection,
  TimelineContainer,
  TimelineItem,
  TimelineYear,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  ValuesSection,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  TeamSection,
  CarouselWrapper,
  CarouselContainer,
  CarouselSlide,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberBio,
  CarouselButton,
  CarouselDots,
  CarouselDot,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel,
  QuoteSection,
  QuoteContent,
  QuoteText,
  QuoteAuthor
} from './styles'

// Hook para animação de contagem
function useCountAnimation(end: number, duration: number = 2000, shouldStart: boolean = false): number {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (!shouldStart) return

    let cancelled = false
    let startTime: number | undefined

    const step = (timestamp: number) => {
      if (cancelled) return
      
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      const newCount = Math.floor(end * easeOutQuart)
      
      setCount(newCount)

      if (percentage < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(step)

    return () => {
      cancelled = true
    }
  }, [end, duration, shouldStart])

  return count
}

// Componente para cada stat card animado
interface AnimatedStatCardProps {
  endNumber: number
  label: string
  suffix?: string
}

function AnimatedStatCard({ endNumber, label, suffix = '' }: AnimatedStatCardProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = cardRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  const count = useCountAnimation(endNumber, 2000, isVisible)

  return (
    <StatCard ref={cardRef}>
      <StatNumber>{count}{suffix}</StatNumber>
      <StatLabel>{label}</StatLabel>
    </StatCard>
  )
}

// Dados da equipe
const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
    name: "Dra. Helena Rodrigues",
    role: "Diretora Geral",
    bio: "Doutora em Educação com 30 anos de experiência em gestão educacional. Lidera a escola com visão inovadora e compromisso com a excelência."
  },
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
    name: "Prof. Ricardo Santos",
    role: "Coordenador Pedagógico",
    bio: "Mestre em Pedagogia com especialização em metodologias ativas. Responsável pela coordenação e inovação dos processos educacionais."
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
    name: "Profa. Mariana Costa",
    role: "Coordenadora de Ensino Fundamental",
    bio: "Especialista em desenvolvimento infantil e alfabetização. Conduz projetos pedagógicos inovadores com foco no protagonismo estudantil."
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop",
    name: "Prof. Carlos Mendes",
    role: "Coordenador de Ensino Médio",
    bio: "Doutor em Física com ampla experiência em preparação para vestibulares. Orienta alunos rumo às melhores universidades do país."
  }
]

export default function Sobre() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <Hero>
          <HeroImage>
            <img 
              src="/escolaaprof.jpg" 
              alt="Sobre a Escola Maria Antonieta"
            />
          </HeroImage>
          <HeroContent>
            <Title>Nossa Trajetória</Title>
            <Subtitle>
              Mais de duas décadas dedicadas à formação de cidadãos conscientes, 
              críticos e preparados para transformar o mundo.
            </Subtitle>
          </HeroContent>
        </Hero>

        {/* História */}
        <Section>
          <SectionTitle>Nossa Trajetória</SectionTitle>
          <SectionSubtitle>
            Uma escola pública enraizada na Cidade Tiradentes, formando cidadãos da Zona Leste de São Paulo
          </SectionSubtitle>

          <Grid>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </CardIcon>
              <CardTitle>Raízes na Comunidade</CardTitle>
              <CardDescription>
                Situada na Rua Rafael Della Mônica, 300, no bairro Cidade Tiradentes, a escola
                leva o nome de Maria Antonieta Ferraz em homenagem a uma bibliotecária dedicada
                à cultura e à leitura. Nossa Associação de Pais e Mestres existe desde março
                de 1987, refletindo décadas de parceria com as famílias da região.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </CardIcon>
              <CardTitle>Atendimento e Estrutura</CardTitle>
              <CardDescription>
                Atendemos alunos distribuídos no Ensino Fundamental II e Ensino
                Médio. Contamos com quadra esportiva,
                sala de leitura com biblioteca, laboratório de informática com internet e
                refeições fornecidas diariamente.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                </svg>
              </CardIcon>
              <CardTitle>Educação Integral</CardTitle>
              <CardDescription>
                Com um corpo docente formado por excelentes professores, a escola desenvolve projetos
                interdisciplinares que conectam diferentes saberes, como a reinterpretação
                de obras literárias em todas as disciplinas. Também oferece modalidades
                de educação profissional, ampliando as perspectivas dos nossos estudantes.
              </CardDescription>
            </Card>
          </Grid>
        </Section>

        {/* Missão, Visão e Valores */}
        <ValuesSection>
          <SectionTitle>Missão, Visão e Valores</SectionTitle>
          <SectionSubtitle>
            Os pilares que guiam nossa atuação educacional
          </SectionSubtitle>
          
          <Grid>
            <ValueCard>
              <ValueIcon>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </ValueIcon>
              <ValueTitle>Missão</ValueTitle>
              <ValueDescription>
                Promover educação de excelência, formando cidadãos éticos, críticos e 
                preparados para os desafios do futuro, desenvolvendo suas potencialidades 
                acadêmicas, socioemocionais e culturais.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </ValueIcon>
              <ValueTitle>Visão</ValueTitle>
              <ValueDescription>
                Ser referência em educação transformadora, reconhecida pela excelência 
                acadêmica, inovação pedagógica e formação integral de cidadãos protagonistas 
                de suas histórias.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </ValueIcon>
              <ValueTitle>Valores</ValueTitle>
              <ValueDescription>
                Ética, respeito, responsabilidade, inovação, excelência, colaboração, 
                sustentabilidade e compromisso com o desenvolvimento integral de cada 
                estudante e suas famílias.
              </ValueDescription>
            </ValueCard>
          </Grid>
        </ValuesSection>

        {/* Quote Inspiradora — logo após Missão, Visão e Valores */}
        <QuoteSection>
          <QuoteContent>
            <QuoteText>
              &quot;Educação não transforma o mundo. Educação muda as pessoas.
              Pessoas transformam o mundo.&quot;
            </QuoteText>
            <QuoteAuthor>Paulo Freire</QuoteAuthor>
          </QuoteContent>
        </QuoteSection>

        {/* Equipe de Gestão */}
        <TeamSection>
          <SectionTitle>Equipe Gestora</SectionTitle>
          <SectionSubtitle>
            Profissionais dedicados à excelência educacional
          </SectionSubtitle>
          
          <CarouselWrapper>
            <CarouselButton 
              onClick={prevSlide}
              $position="left"
              aria-label="Anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </CarouselButton>

            <CarouselContainer>
              {teamMembers.map((member, index) => (
                <CarouselSlide key={index} $active={currentSlide === index}>
                  <TeamMember>
                    <MemberImage>
                      <img 
                        src={member.image} 
                        alt={member.name}
                      />
                    </MemberImage>
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                      <MemberBio>{member.bio}</MemberBio>
                    </MemberInfo>
                  </TeamMember>
                </CarouselSlide>
              ))}
            </CarouselContainer>

            <CarouselButton 
              onClick={nextSlide}
              $position="right"
              aria-label="Próximo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </CarouselButton>

            <CarouselDots>
              {teamMembers.map((_, index) => (
                <CarouselDot 
                  key={index}
                  $active={currentSlide === index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </CarouselDots>
          </CarouselWrapper>
        </TeamSection>

        {/* Diferenciais */}
        <Section style={{ background: '#f8f9fa' }}>
          <SectionTitle>O Que Nos Torna Únicos</SectionTitle>
          <SectionSubtitle>
            Diferenciais que fazem da Maria Antonieta uma escola especial
          </SectionSubtitle>

          <Grid>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </CardIcon>
              <CardTitle>Acompanhamento Individualizado</CardTitle>
              <CardDescription>
                Cada aluno recebe atenção personalizada através de tutoria, orientação
                pedagógica e psicológica, respeitando seu ritmo e potencial único.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </CardIcon>
              <CardTitle>Visão de Mundo</CardTitle>
              <CardDescription>
                Incentivamos nossos alunos a conhecerem realidades além da sua comunidade
                por meio de debates, acesso a conteúdos digitais, projetos culturais e
                atividades que ampliam horizontes sem sair do bairro.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </CardIcon>
              <CardTitle>Educação Financeira</CardTitle>
              <CardDescription>
                Desenvolvemos consciência financeira desde cedo, preparando jovens para
                decisões econômicas responsáveis e empreendedorismo.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </CardIcon>
              <CardTitle>Projetos Interdisciplinares</CardTitle>
              <CardDescription>
                Aprendizagem conectada com a realidade através de projetos que integram
                diferentes áreas do conhecimento e desenvolvem pensamento crítico.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </CardIcon>
              <CardTitle>Responsabilidade Social</CardTitle>
              <CardDescription>
                Projetos comunitários e ações sociais que desenvolvem empatia, cidadania
                e compromisso com a transformação social.
              </CardDescription>
            </Card>

            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </CardIcon>
              <CardTitle>Parceria com Famílias</CardTitle>
              <CardDescription>
                Comunicação transparente e participação ativa das famílias no processo
                educativo através de reuniões, workshops e plataformas digitais.
              </CardDescription>
            </Card>
          </Grid>
        </Section>

      </Container>
      <Footer />
    </>
  )
}