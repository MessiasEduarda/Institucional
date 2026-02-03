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
  Section,
  SectionTitle,
  SectionSubtitle,
  WelcomeSection,
  WelcomeContent,
  WelcomeImage,
  WelcomeText,
  WelcomeTitle,
  WelcomeDescription,
  WelcomeFeatures,
  Feature,
  FeatureIcon,
  FeatureText,
  TabSection,
  TabNavigation,
  TabButton,
  TabContent,
  TabPanel,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  ActivitiesSection,
  ActivityCarousel,
  ActivitySlide,
  ActivityImage,
  ActivityInfo,
  ActivityCategory,
  ActivityTitle,
  ActivityDescription,
  CarouselControls,
  CarouselButton,
  CarouselIndicators,
  CarouselDot,
  ResourcesSection,
  ResourcesGrid,
  ResourceCard,
  ResourceHeader,
  ResourceIcon,
  ResourceTitle,
  ResourceList,
  ResourceItem,
  ResourceLink,
  StudentLifeSection,
  LifeGrid,
  LifeCard,
  LifeImageContainer,
  LifeContent,
  LifeTitle,
  LifeDescription,
  SupportSection,
  SupportContainer,
  SupportCard,
  SupportIconWrapper,
  SupportTitle,
  SupportDescription,
  SupportContact,
  TestimonialsSection,
  TestimonialGrid,
  TestimonialCard,
  TestimonialHeader,
  TestimonialAvatar,
  TestimonialInfo,
  TestimonialName,
  TestimonialGrade,
  TestimonialText,
  TestimonialRating,
  FAQSection,
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  CTASection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButtons,
  PrimaryButton,
  SecondaryButton
} from './styles'

const tabs = [
  { id: 'infantil', label: 'Educação Infantil' },
  { id: 'fundamental', label: 'Ensino Fundamental' },
  { id: 'medio', label: 'Ensino Médio' }
]

const activities = [
  {
    id: 1,
    category: 'Esportes',
    title: 'Natação e Esportes Aquáticos',
    description: 'Aulas de natação em piscina olímpica com instrutores certificados. Desenvolvimento físico, coordenação motora e disciplina.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=800&fit=crop'
  },
  {
    id: 2,
    category: 'Arte e Cultura',
    title: 'Teatro e Artes Cênicas',
    description: 'Oficinas de teatro, expressão corporal e produção de espetáculos. Desenvolvimento da criatividade e confiança.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=800&fit=crop'
  },
  {
    id: 3,
    category: 'Tecnologia',
    title: 'Robótica e Programação',
    description: 'Criação de robôs, desenvolvimento de games e aplicativos. Pensamento computacional e resolução de problemas.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop'
  },
  {
    id: 4,
    category: 'Música',
    title: 'Aulas de Instrumentos',
    description: 'Violão, piano, bateria, flauta e canto. Desenvolvimento musical com professores especializados.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop'
  },
  {
    id: 5,
    category: 'Idiomas',
    title: 'Clubes de Conversação',
    description: 'Inglês, espanhol e francês. Prática conversacional em ambiente imersivo e descontraído.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=800&fit=crop'
  }
]

const testimonials = [
  {
    name: 'Julia Martins',
    grade: '3º ano do Ensino Médio',
    text: 'A escola me proporcionou oportunidades incríveis! Participei de olimpíadas científicas, projetos de robótica e fiz amizades que vou levar pra vida toda.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    name: 'Pedro Henrique',
    grade: '8º ano do Fundamental',
    text: 'Amo as atividades extracurriculares! Faço natação, teatro e programação. Os professores são super atenciosos e a estrutura é incrível.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    name: 'Maria Eduarda',
    grade: '5º ano do Fundamental',
    text: 'A escola é muito legal! Tenho muitos amigos, os professores explicam tudo direitinho e tem muitas atividades divertidas.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
    rating: 5
  }
]

const faqs = [
  {
    question: 'Como acesso a plataforma digital de estudos?',
    answer: 'Todos os alunos recebem login e senha no início do ano letivo. A plataforma pode ser acessada através do site da escola na área do aluno. Em caso de dúvidas, entre em contato com a secretaria.'
  },
  {
    question: 'Quais documentos preciso para matrícula?',
    answer: 'RG e CPF do aluno e responsável, comprovante de residência, certidão de nascimento, histórico escolar (transferência), carteira de vacinação atualizada e 2 fotos 3x4.'
  },
  {
    question: 'Como funciona o sistema de reposição de aulas?',
    answer: 'Aulas perdidas por falta podem ser repostas através de material disponibilizado na plataforma digital, aulas extras agendadas ou atividades complementares orientadas pelos professores.'
  },
  {
    question: 'A escola oferece transporte escolar?',
    answer: 'Sim, temos parceria com empresas de transporte escolar credenciadas. Entre em contato com a secretaria para informações sobre rotas, valores e disponibilidade.'
  },
  {
    question: 'Como são as atividades extracurriculares?',
    answer: 'Oferecemos mais de 20 atividades extracurriculares incluídas na mensalidade ou com valores acessíveis. As inscrições são feitas no início de cada semestre através da plataforma online.'
  }
]

export default function Alunos() {
  const [activeTab, setActiveTab] = useState('infantil')
  const [currentActivity, setCurrentActivity] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToActivity = (index: number) => {
    setCurrentActivity(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

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
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop" 
              alt="Área do Aluno"
            />
          </HeroImage>
          <HeroContent>
            <Title>Área do Aluno</Title>
            <Subtitle>
              Tudo que você precisa para aproveitar ao máximo sua jornada educacional. 
              Recursos, atividades e suporte para seu desenvolvimento integral.
            </Subtitle>
          </HeroContent>
        </Hero>

        {/* Welcome Section */}
        <WelcomeSection>
          <WelcomeImage>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop" 
              alt="Bem-vindo"
            />
          </WelcomeImage>
          <WelcomeContent>
            <WelcomeText>
              <WelcomeTitle>Bem-vindo à sua segunda casa!</WelcomeTitle>
              <WelcomeDescription>
                Aqui você não é apenas um número de matrícula - você é parte de uma 
                comunidade que acredita no seu potencial. Nossa missão é proporcionar 
                experiências que vão além da sala de aula, desenvolvendo suas habilidades, 
                talentos e preparando você para os desafios do futuro.
              </WelcomeDescription>
              <WelcomeDescription>
                Explore todos os recursos disponíveis, participe das atividades, conecte-se 
                com colegas e professores, e construa memórias que durarão para sempre.
              </WelcomeDescription>
            </WelcomeText>
            <WelcomeFeatures>
              <Feature>
                <FeatureIcon>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </FeatureIcon>
                <FeatureText>Acesso 24/7 à plataforma digital</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </FeatureIcon>
                <FeatureText>Suporte pedagógico personalizado</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </FeatureIcon>
                <FeatureText>Mais de 20 atividades extracurriculares</FeatureText>
              </Feature>
            </WelcomeFeatures>
          </WelcomeContent>
        </WelcomeSection>

        {/* Tab Section - Benefícios por segmento */}
        <TabSection>
          <SectionTitle>Benefícios por Segmento</SectionTitle>
          <SectionSubtitle>
            Descubra as vantagens exclusivas para cada etapa da sua jornada educacional
          </SectionSubtitle>
          
          <TabNavigation>
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                $active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabNavigation>

          <TabContent>
            <TabPanel $active={activeTab === 'infantil'}>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>🎨</BenefitIcon>
                  <BenefitTitle>Aprendizado Lúdico</BenefitTitle>
                  <BenefitDescription>
                    Metodologias baseadas em brincadeiras, jogos e atividades que estimulam 
                    a criatividade e o desenvolvimento cognitivo de forma natural.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>👶</BenefitIcon>
                  <BenefitTitle>Ambiente Seguro</BenefitTitle>
                  <BenefitDescription>
                    Instalações adaptadas, monitoramento constante e equipe especializada 
                    em educação infantil para garantir segurança e bem-estar.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>🤝</BenefitIcon>
                  <BenefitTitle>Socialização</BenefitTitle>
                  <BenefitDescription>
                    Desenvolvimento de habilidades sociais através da interação com colegas 
                    e atividades em grupo orientadas por profissionais.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>📚</BenefitIcon>
                  <BenefitTitle>Alfabetização Integral</BenefitTitle>
                  <BenefitDescription>
                    Processo de alfabetização respeitando o ritmo individual, com materiais 
                    pedagógicos modernos e acompanhamento personalizado.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </TabPanel>

            <TabPanel $active={activeTab === 'fundamental'}>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>🔬</BenefitIcon>
                  <BenefitTitle>Laboratórios Equipados</BenefitTitle>
                  <BenefitDescription>
                    Aulas práticas em laboratórios de ciências, informática e maker space 
                    para experimentação e aprendizagem hands-on.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>🌍</BenefitIcon>
                  <BenefitTitle>Programa Bilíngue</BenefitTitle>
                  <BenefitDescription>
                    Ensino de inglês integrado ao currículo, com aulas imersivas e 
                    preparação para certificações internacionais.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>🎯</BenefitIcon>
                  <BenefitTitle>Projetos Interdisciplinares</BenefitTitle>
                  <BenefitDescription>
                    Aprendizagem por projetos conectando diferentes disciplinas e 
                    desenvolvendo pensamento crítico e criativo.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>💪</BenefitIcon>
                  <BenefitTitle>Desenvolvimento Socioemocional</BenefitTitle>
                  <BenefitDescription>
                    Programas de inteligência emocional, resolução de conflitos e 
                    desenvolvimento de competências para o século XXI.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </TabPanel>

            <TabPanel $active={activeTab === 'medio'}>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>🎓</BenefitIcon>
                  <BenefitTitle>Preparação Vestibular</BenefitTitle>
                  <BenefitDescription>
                    Simulados regulares, aulas específicas para ENEM e vestibulares, 
                    com análise de desempenho e orientação individualizada.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>🧭</BenefitIcon>
                  <BenefitTitle>Orientação Vocacional</BenefitTitle>
                  <BenefitDescription>
                    Acompanhamento profissional para descoberta de aptidões, visitas a 
                    universidades e conexão com profissionais de diversas áreas.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>💼</BenefitIcon>
                  <BenefitTitle>Projeto de Vida</BenefitTitle>
                  <BenefitDescription>
                    Desenvolvimento de plano de carreira, empreendedorismo, educação 
                    financeira e preparação para o mercado de trabalho.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>🏆</BenefitIcon>
                  <BenefitTitle>Olimpíadas e Competições</BenefitTitle>
                  <BenefitDescription>
                    Participação em olimpíadas científicas, competições de robótica e 
                    eventos acadêmicos nacionais e internacionais.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </TabPanel>
          </TabContent>
        </TabSection>

        {/* Activities Carousel */}
        <ActivitiesSection>
          <SectionTitle>Atividades Extracurriculares</SectionTitle>
          <SectionSubtitle>
            Desenvolva seus talentos além da sala de aula
          </SectionSubtitle>
          
          <ActivityCarousel>
            {activities.map((activity, index) => (
              <ActivitySlide key={activity.id} $active={currentActivity === index}>
                <ActivityImage>
                  <img src={activity.image} alt={activity.title} />
                </ActivityImage>
                <ActivityInfo>
                  <ActivityCategory>{activity.category}</ActivityCategory>
                  <ActivityTitle>{activity.title}</ActivityTitle>
                  <ActivityDescription>{activity.description}</ActivityDescription>
                </ActivityInfo>
              </ActivitySlide>
            ))}
            
            <CarouselControls>
              <CarouselButton onClick={prevActivity} $position="left">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </CarouselButton>
              <CarouselButton onClick={nextActivity} $position="right">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </CarouselButton>
            </CarouselControls>

            <CarouselIndicators>
              {activities.map((_, index) => (
                <CarouselDot
                  key={index}
                  $active={currentActivity === index}
                  onClick={() => goToActivity(index)}
                />
              ))}
            </CarouselIndicators>
          </ActivityCarousel>
        </ActivitiesSection>

        {/* Resources Section */}
        <ResourcesSection>
          <SectionTitle>Recursos e Ferramentas</SectionTitle>
          <SectionSubtitle>
            Acesse plataformas e materiais que potencializam seu aprendizado
          </SectionSubtitle>
          
          <ResourcesGrid>
            <ResourceCard>
              <ResourceHeader>
                <ResourceIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </ResourceIcon>
                <ResourceTitle>Plataforma Digital</ResourceTitle>
              </ResourceHeader>
              <ResourceList>
                <ResourceItem>
                  <ResourceLink href="#">Material didático digital</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Aulas gravadas</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Exercícios interativos</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Simulados online</ResourceLink>
                </ResourceItem>
              </ResourceList>
            </ResourceCard>

            <ResourceCard>
              <ResourceHeader>
                <ResourceIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </ResourceIcon>
                <ResourceTitle>Biblioteca Virtual</ResourceTitle>
              </ResourceHeader>
              <ResourceList>
                <ResourceItem>
                  <ResourceLink href="#">Acervo digital completo</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">E-books e audiobooks</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Periódicos acadêmicos</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Reserva de livros físicos</ResourceLink>
                </ResourceItem>
              </ResourceList>
            </ResourceCard>

            <ResourceCard>
              <ResourceHeader>
                <ResourceIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10 8 16 12 10 16 10 8"/>
                  </svg>
                </ResourceIcon>
                <ResourceTitle>Videoaulas</ResourceTitle>
              </ResourceHeader>
              <ResourceList>
                <ResourceItem>
                  <ResourceLink href="#">Conteúdo por disciplina</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Revisão para provas</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Tutoriais e experimentos</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Lives e eventos online</ResourceLink>
                </ResourceItem>
              </ResourceList>
            </ResourceCard>

            <ResourceCard>
              <ResourceHeader>
                <ResourceIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </ResourceIcon>
                <ResourceTitle>Suporte Acadêmico</ResourceTitle>
              </ResourceHeader>
              <ResourceList>
                <ResourceItem>
                  <ResourceLink href="#">Plantão de dúvidas online</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Monitoria com alunos</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Atendimento psicopedagógico</ResourceLink>
                </ResourceItem>
                <ResourceItem>
                  <ResourceLink href="#">Canal direto com professores</ResourceLink>
                </ResourceItem>
              </ResourceList>
            </ResourceCard>
          </ResourcesGrid>
        </ResourcesSection>

        {/* Student Life */}
        <StudentLifeSection>
          <SectionTitle>Vida Estudantil</SectionTitle>
          <SectionSubtitle>
            Experiências que vão além do conteúdo acadêmico
          </SectionSubtitle>
          
          <LifeGrid>
            <LifeCard>
              <LifeImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop" 
                  alt="Eventos"
                />
              </LifeImageContainer>
              <LifeContent>
                <LifeTitle>Eventos e Celebrações</LifeTitle>
                <LifeDescription>
                  Festa junina, feira cultural, semana esportiva, formatura e muito mais! 
                  Momentos especiais que criam memórias inesquecíveis.
                </LifeDescription>
              </LifeContent>
            </LifeCard>

            <LifeCard>
              <LifeImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop" 
                  alt="Viagens"
                />
              </LifeImageContainer>
              <LifeContent>
                <LifeTitle>Viagens e Excursões</LifeTitle>
                <LifeDescription>
                  Viagens pedagógicas, intercâmbios culturais e passeios educativos que 
                  ampliam horizontes e proporcionam aprendizado vivencial.
                </LifeDescription>
              </LifeContent>
            </LifeCard>

            <LifeCard>
              <LifeImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" 
                  alt="Grêmio"
                />
              </LifeImageContainer>
              <LifeContent>
                <LifeTitle>Grêmio Estudantil</LifeTitle>
                <LifeDescription>
                  Participe ativamente das decisões da escola, organize eventos e 
                  desenvolva liderança e cidadania através do grêmio estudantil.
                </LifeDescription>
              </LifeContent>
            </LifeCard>

            <LifeCard>
              <LifeImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop" 
                  alt="Voluntariado"
                />
              </LifeImageContainer>
              <LifeContent>
                <LifeTitle>Ações Sociais</LifeTitle>
                <LifeDescription>
                  Projetos de voluntariado e responsabilidade social que desenvolvem 
                  empatia, solidariedade e consciência cidadã.
                </LifeDescription>
              </LifeContent>
            </LifeCard>
          </LifeGrid>
        </StudentLifeSection>

        {/* Support Section */}
        <SupportSection>
          <SectionTitle>Rede de Apoio</SectionTitle>
          <SectionSubtitle>
            Equipe multidisciplinar dedicada ao seu bem-estar e desenvolvimento
          </SectionSubtitle>
          
          <SupportContainer>
            <SupportCard>
              <SupportIconWrapper>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </SupportIconWrapper>
              <SupportTitle>Orientação Pedagógica</SupportTitle>
              <SupportDescription>
                Acompanhamento individual do desempenho acadêmico, estratégias de estudo 
                e suporte para dificuldades de aprendizagem.
              </SupportDescription>
              <SupportContact>pedagogico@escola.com.br</SupportContact>
            </SupportCard>

            <SupportCard>
              <SupportIconWrapper>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </SupportIconWrapper>
              <SupportTitle>Apoio Psicológico</SupportTitle>
              <SupportDescription>
                Atendimento psicológico individual e em grupo para questões emocionais, 
                ansiedade, relacionamentos e desenvolvimento pessoal.
              </SupportDescription>
              <SupportContact>psicologia@escola.com.br</SupportContact>
            </SupportCard>

            <SupportCard>
              <SupportIconWrapper>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </SupportIconWrapper>
              <SupportTitle>Coordenação Disponível</SupportTitle>
              <SupportDescription>
                Canal aberto com a coordenação para esclarecimento de dúvidas, 
                sugestões e resolução de questões do dia a dia escolar.
              </SupportDescription>
              <SupportContact>(11) 3456-7890</SupportContact>
            </SupportCard>
          </SupportContainer>
        </SupportSection>

        {/* Testimonials */}
        <TestimonialsSection>
          <SectionTitle>Depoimentos de Alunos</SectionTitle>
          <SectionSubtitle>
            Veja o que nossos estudantes têm a dizer sobre a experiência na escola
          </SectionSubtitle>
          
          <TestimonialGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <TestimonialHeader>
                  <TestimonialAvatar>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </TestimonialAvatar>
                  <TestimonialInfo>
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialGrade>{testimonial.grade}</TestimonialGrade>
                  </TestimonialInfo>
                </TestimonialHeader>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialRating>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </TestimonialRating>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </TestimonialsSection>

        {/* FAQ */}
        <FAQSection>
          <SectionTitle>Perguntas Frequentes</SectionTitle>
          <SectionSubtitle>
            Respostas para as dúvidas mais comuns dos alunos
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

        {/* CTA */}
        <CTASection>
          <CTAContent>
            <CTATitle>Pronto para começar?</CTATitle>
            <CTADescription>
              Acesse sua área exclusiva ou entre em contato conosco para saber mais 
              sobre como aproveitar ao máximo todos os recursos disponíveis.
            </CTADescription>
            <CTAButtons>
              <PrimaryButton href="#login">Acessar Portal do Aluno</PrimaryButton>
              <SecondaryButton href="#contato">Falar com Coordenação</SecondaryButton>
            </CTAButtons>
          </CTAContent>
        </CTASection>
      </Container>
    </>
  )
}