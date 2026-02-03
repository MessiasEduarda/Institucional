'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/navbar'
import { 
  Container, 
  Hero, 
  HeroContent,
  HeroImage,
  Title, 
  Subtitle, 
  CTAButton,
  Section,
  SectionTitle,
  SectionSubtitle,
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  ImageSection,
  ImageContent,
  TextContent,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel,
  TestimonialSection,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  TestimonialRole,
  GallerySection,
  GalleryGrid,
  GalleryItem,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText,
  CTAButtons,
  PrimaryButton,
  SecondaryButton
} from './styles'

// Hook personalizado para animação de contagem
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
      
      // Easing function para suavizar a animação
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

export default function Inicio() {
  return (
    <>
      <Navbar />
      <Container>
        {/* Hero Section com imagem fullscreen e overlay */}
        <Hero>
          <HeroImage>
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop" 
              alt="Estudantes em sala de aula moderna"
            />
          </HeroImage>
          <HeroContent>
            <Title>Escola Futuro</Title>
            <Subtitle>
              Formando cidadãos preparados para o amanhã através de uma educação 
              inovadora, tecnológica e humanizada.
            </Subtitle>
            <CTAButton href="/contatos">Agende uma Visita</CTAButton>
          </HeroContent>
        </Hero>

        {/* Stats Section */}
        <StatsSection>
          <AnimatedStatCard endNumber={25} label="Anos de Excelência" suffix="+" />
          <AnimatedStatCard endNumber={2500} label="Alunos Ativos" suffix="+" />
          <AnimatedStatCard endNumber={98} label="Aprovação Vestibular" suffix="%" />
          <AnimatedStatCard endNumber={150} label="Professores Qualificados" suffix="+" />
        </StatsSection>

        {/* Diferenciais Section */}
        <Section>
          <SectionTitle>Nossos Diferenciais</SectionTitle>
          <SectionSubtitle>
            O que torna a Escola Futuro única na formação de jovens protagonistas
          </SectionSubtitle>
          <Grid>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </CardIcon>
              <CardTitle>Excelência Acadêmica</CardTitle>
              <CardDescription>
                Currículo rigoroso e atualizado, corpo docente altamente qualificado 
                e metodologias comprovadas que garantem resultados superiores em 
                avaliações nacionais e internacionais.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8"/>
                  <path d="M12 17v4"/>
                </svg>
              </CardIcon>
              <CardTitle>Infraestrutura Moderna</CardTitle>
              <CardDescription>
                Instalações de ponta com salas climatizadas, laboratórios equipados, 
                biblioteca completa, áreas esportivas e tecnologia integrada em 
                todos os ambientes de aprendizagem.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </CardIcon>
              <CardTitle>Educação Bilíngue</CardTitle>
              <CardDescription>
                Programa de ensino bilíngue português-inglês com certificações 
                internacionais, preparando nossos alunos para um mundo globalizado 
                e competitivo.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </CardIcon>
              <CardTitle>Formação Integral</CardTitle>
              <CardDescription>
                Desenvolvimento acadêmico aliado à formação de valores éticos, 
                cidadania, responsabilidade social e competências socioemocionais 
                essenciais para o século XXI.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </CardIcon>
              <CardTitle>Tecnologia e Inovação</CardTitle>
              <CardDescription>
                Integração de recursos tecnológicos no processo educativo, com 
                robótica, programação, laboratórios maker e plataformas digitais 
                de aprendizagem personalizada.
              </CardDescription>
            </Card>
            <Card>
              <CardIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </CardIcon>
              <CardTitle>Acompanhamento Personalizado</CardTitle>
              <CardDescription>
                Atendimento individualizado com orientação pedagógica, psicológica 
                e vocacional, respeitando o ritmo e as necessidades específicas de 
                cada estudante.
              </CardDescription>
            </Card>
          </Grid>
        </Section>

        {/* About Section with Image */}
        <ImageSection>
          <ImageContent>
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop" 
              alt="Campus da escola"
            />
          </ImageContent>
          <TextContent>
            <h2>Nossa História e Missão</h2>
            <p>
              Fundada em 1999, a Escola Futuro nasceu do sonho de transformar a 
              educação brasileira. Ao longo de mais de duas décadas, nos consolidamos 
              como referência em ensino de excelência, combinando tradição acadêmica 
              com inovação pedagógica.
            </p>
            <p>
              Nossa missão é formar cidadãos éticos, críticos e preparados para os 
              desafios do século XXI. Acreditamos que a educação vai além dos conteúdos 
              curriculares – ela deve desenvolver habilidades socioemocionais, 
              criatividade e consciência cidadã.
            </p>
            <p>
              Com uma equipe de educadores altamente qualificados e uma infraestrutura 
              moderna, oferecemos um ambiente acolhedor onde cada aluno é incentivado 
              a alcançar seu máximo potencial.
            </p>
          </TextContent>
        </ImageSection>

        {/* Segmentos de Ensino */}
        <Section style={{ background: '#f8f9fa' }}>
          <SectionTitle>Segmentos de Ensino</SectionTitle>
          <SectionSubtitle>
            Da educação infantil ao ensino médio, acompanhamos cada fase do desenvolvimento
          </SectionSubtitle>
          <Grid $columns={3}>
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop" 
                alt="Educação Infantil"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
              />
              <CardTitle>Educação Infantil</CardTitle>
              <CardDescription>
                Para crianças de 2 a 5 anos. Desenvolvimento através do brincar, 
                primeiras descobertas e socialização em ambiente seguro e estimulante.
              </CardDescription>
            </Card>
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" 
                alt="Ensino Fundamental"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
              />
              <CardTitle>Ensino Fundamental</CardTitle>
              <CardDescription>
                Do 1º ao 9º ano. Base sólida em todas as disciplinas com metodologias 
                ativas, projetos interdisciplinares e desenvolvimento de competências.
              </CardDescription>
            </Card>
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" 
                alt="Ensino Médio"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
              />
              <CardTitle>Ensino Médio</CardTitle>
              <CardDescription>
                Preparação completa para vestibulares e ENEM, com orientação 
                vocacional e desenvolvimento de projetos de vida.
              </CardDescription>
            </Card>
          </Grid>
        </Section>

        {/* Infraestrutura */}
        <GallerySection>
          <SectionTitle>Nossa Infraestrutura</SectionTitle>
          <SectionSubtitle>
            Ambientes modernos e inspiradores para aprendizagem de qualidade
          </SectionSubtitle>
          <GalleryGrid>
            <GalleryItem>
              <img 
                src="https://www.dombosco.com.br/content/dam/region-growth/brazil/dom-bosco/images/noticias/incentivar-alunos-bibliotecas.jpg" 
                alt="Biblioteca moderna"
              />
              <div className="overlay">
                <h3>Biblioteca</h3>
                <p>Acervo com mais de 15 mil volumes</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <img 
                src="https://atelieurbano.com.br/wp-content/uploads/2023/08/arquitetura-para-laboratorio-de-escola-04.jpg" 
                alt="Laboratório de ciências"
              />
              <div className="overlay">
                <h3>Laboratórios</h3>
                <p>Equipamentos de última geração</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <img 
                src="https://donaclara.com.br/blog/wp-content/uploads/2022/03/esporte-na-escola_01.jpg" 
                alt="Quadra esportiva"
              />
              <div className="overlay">
                <h3>Esporte</h3>
                <p>Quadras e piscina olímpica</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop" 
                alt="Teatro"
              />
              <div className="overlay">
                <h3>Teatro</h3>
                <p>Auditório para 400 pessoas</p>
              </div>
            </GalleryItem>
          </GalleryGrid>
        </GallerySection>

        {/* Depoimentos */}
        <TestimonialSection>
          <SectionTitle>O Que Dizem Sobre Nós</SectionTitle>
          <SectionSubtitle>
            Depoimentos de famílias que confiam na Escola Futuro
          </SectionSubtitle>
          <Grid $columns={3}>
            <TestimonialCard>
              <TestimonialText>
                &quot;A Escola Futuro transformou a vida da minha filha. Ela desenvolveu 
                não apenas conhecimento acadêmico, mas também valores e habilidades 
                para a vida. Estamos muito satisfeitos!&quot;
              </TestimonialText>
              <TestimonialAuthor>Maria Silva</TestimonialAuthor>
              <TestimonialRole>Mãe de aluna do 8º ano</TestimonialRole>
            </TestimonialCard>
            <TestimonialCard>
              <TestimonialText>
                &quot;O acompanhamento individualizado e a metodologia inovadora fazem 
                toda a diferença. Meu filho passou a amar estudar e está muito mais 
                confiante e preparado para o futuro.&quot;
              </TestimonialText>
              <TestimonialAuthor>João Santos</TestimonialAuthor>
              <TestimonialRole>Pai de aluno do 2º ano EM</TestimonialRole>
            </TestimonialCard>
            <TestimonialCard>
              <TestimonialText>
                &quot;A estrutura da escola é excelente e o corpo docente é extremamente 
                qualificado. Nossos filhos estão tendo uma formação completa, com 
                ética e responsabilidade social.&quot;
              </TestimonialText>
              <TestimonialAuthor>Ana e Carlos Oliveira</TestimonialAuthor>
              <TestimonialRole>Pais de alunos do 5º e 9º ano</TestimonialRole>
            </TestimonialCard>
          </Grid>
        </TestimonialSection>

        {/* CTA Final */}
        <CTASection id="contato">
          <CTAContent>
            <CTATitle>Faça Parte da Família Escola Futuro</CTATitle>
            <CTAText>
              Agende uma visita e conheça nossa estrutura, metodologia e equipe. 
              Venha descobrir como podemos fazer a diferença na educação do seu filho.
            </CTAText>
            <CTAButtons>
              <PrimaryButton href="/contatos">Agendar Visita</PrimaryButton>
              <SecondaryButton href="/alunos">Processo de Matrícula</SecondaryButton>
            </CTAButtons>
          </CTAContent>
        </CTASection>
      </Container>
    </>
  )
}