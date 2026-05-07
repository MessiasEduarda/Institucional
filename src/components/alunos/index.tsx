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
  { id: 'anosfinais', label: 'Anos Finais' },
  { id: 'medio', label: 'Ensino Médio' },
  { id: 'tecnico', label: 'Ensino Técnico' }
]

const activities = [
  {
    id: 1,
    category: 'Esportes',
    title: 'Educação Física e Esportes',
    description: 'Aulas de educação física com práticas esportivas coletivas como futsal, vôlei e basquete. Desenvolvimento da saúde, do trabalho em equipe e da disciplina.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=800&fit=crop'
  },
  {
    id: 2,
    category: 'Arte e Cultura',
    title: 'Aulas de Arte',
    description: 'Atividades de artes visuais integradas ao currículo escolar. Os alunos exploram diferentes formas de expressão artística orientados pelos professores.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=800&fit=crop'
  },
  {
    id: 3,
    category: 'Tecnologia',
    title: 'Sala de Informática',
    description: 'Uso da sala de informática para pesquisas, atividades digitais e iniciação à tecnologia, com acesso supervisionado e orientado pelos professores.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop'
  },
  {
    id: 4,
    category: 'Projetos',
    title: 'Feiras e Mostras Escolares',
    description: 'Feiras de ciências e mostras culturais organizadas pelos alunos com apoio dos professores, estimulando a pesquisa e o protagonismo estudantil.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop'
  },
  {
    id: 5,
    category: 'Leitura',
    title: 'Biblioteca e Leitura',
    description: 'Acesso ao acervo da biblioteca escolar com empréstimo de livros, espaço para estudo e atividades de incentivo à leitura ao longo do ano letivo.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=800&fit=crop'
  }
]

const testimonials = [
  {
    name: 'Julia Martins',
    grade: '3º ano do Ensino Médio',
    text: 'A escola me ajudou muito a me preparar para o ENEM. Os professores são dedicados e sempre dispostos a tirar dúvidas. Me sinto bem aqui.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    name: 'Pedro Henrique',
    grade: '8º ano — Anos Finais',
    text: 'Gosto muito das aulas de educação física e dos projetos que a escola faz. Os professores explicam bem e o ambiente é bom para estudar.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    rating: 5
  },
  {
    name: 'Maria Eduarda',
    grade: '2º ano do Ensino Técnico',
    text: 'O curso técnico integrado está me dando uma base muito boa. Aprendo conteúdos do ensino médio junto com a formação profissional, o que abre muitas portas.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
    rating: 5
  }
]

const faqs = [
  {
    question: 'Como faço para realizar minha matrícula?',
    answer: 'A matrícula é realizada presencialmente na secretaria da escola, dentro do período definido pela Secretaria de Educação. Fique atento ao calendário e aos documentos necessários divulgados pela escola.'
  },
  {
    question: 'Quais documentos são necessários para a matrícula?',
    answer: 'RG e CPF do aluno e do responsável, comprovante de residência atualizado, certidão de nascimento, histórico escolar ou declaração de transferência e carteira de vacinação atualizada (para menores).'
  },
  {
    question: 'Como funciona a reposição de aulas em caso de falta?',
    answer: 'Em caso de falta, o aluno deve buscar o conteúdo com o professor responsável ou com colegas. A escola orienta os estudantes sobre as atividades e avaliações perdidas conforme as normas do regimento escolar.'
  },
  {
    question: 'A escola oferece transporte escolar?',
    answer: 'O transporte escolar público é oferecido pela prefeitura para alunos que residem em áreas mais distantes. Para verificar a disponibilidade e as rotas, entre em contato com a secretaria da escola.'
  },
  {
    question: 'Como funciona a recuperação escolar?',
    answer: 'A escola oferece recuperação paralela e final para alunos com dificuldades de aprendizagem ou notas abaixo da média, conforme o regimento escolar. Procure a coordenação para entender como funciona no seu caso.'
  }
]

export default function Alunos() {
  const [activeTab, setActiveTab] = useState('anosfinais')
  const [currentActivity, setCurrentActivity] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
              Informações, recursos e suporte para você aproveitar ao máximo 
              sua jornada aqui na escola.
            </Subtitle>
          </HeroContent>
        </Hero>

        {/* Links Úteis para Alunos */}
        <Section style={{ background: '#ffffff', padding: '3rem 2rem' }}>
          <ExternalLinks
            title="Links úteis"
            subtitle="Acesse os principais serviços e recursos da rede pública"
            show={['apostilas', 'salafuturo', 'sptrans', 'cras', 'universidades', 'instagram']}
            columns={3}
          />
        </Section>

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
              <WelcomeTitle>Bem-vindo à escola!</WelcomeTitle>
              <WelcomeDescription>
                Aqui você faz parte de uma comunidade escolar comprometida com seu 
                aprendizado e bem-estar. Nossa equipe de professores e funcionários 
                está sempre disponível para apoiar você durante sua trajetória escolar.
              </WelcomeDescription>
              <WelcomeDescription>
                Participe das atividades, mantenha presença nas aulas, busque os 
                professores quando tiver dúvidas e aproveite tudo o que a escola 
                tem a oferecer para o seu desenvolvimento.
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
                <FeatureText>Professores dedicados ao seu aprendizado</FeatureText>
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
                <FeatureText>Equipe de coordenação e apoio disponível</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </FeatureIcon>
                <FeatureText>Atividades e projetos ao longo do ano</FeatureText>
              </Feature>
            </WelcomeFeatures>
          </WelcomeContent>
        </WelcomeSection>

        {/* Tab Section */}
        <TabSection>
          <SectionTitle>Informações por segmento</SectionTitle>
          <SectionSubtitle>
            Saiba mais sobre cada etapa de ensino oferecida pela escola
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

            {/* ANOS FINAIS */}
            <TabPanel $active={activeTab === 'anosfinais'}>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Base Curricular do 6º ao 9º ano</BenefitTitle>
                  <BenefitDescription>
                    Ensino das disciplinas obrigatórias como Português, Matemática, 
                    Ciências, História e Geografia, com foco em desenvolver o raciocínio 
                    e preparar para o ensino médio.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8"/>
                      <path d="M12 17v4"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Sala de Informática</BenefitTitle>
                  <BenefitDescription>
                    Acesso à sala de informática para pesquisas escolares, atividades 
                    digitais e iniciação ao uso das tecnologias de forma orientada 
                    pelos professores.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Projetos e Feiras Escolares</BenefitTitle>
                  <BenefitDescription>
                    Participação em feiras de ciências, mostras culturais e projetos 
                    interdisciplinares que incentivam a pesquisa, a curiosidade e o 
                    trabalho em equipe.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Recuperação e Reforço</BenefitTitle>
                  <BenefitDescription>
                    Suporte pedagógico para alunos com dificuldades, com atividades 
                    de recuperação e orientação dos professores para garantir que 
                    nenhum aluno fique para trás.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </TabPanel>

            {/* ENSINO MÉDIO */}
            <TabPanel $active={activeTab === 'medio'}>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Preparação para o ENEM</BenefitTitle>
                  <BenefitDescription>
                    Aulas voltadas ao conteúdo cobrado no ENEM, com orientação dos 
                    professores para que os alunos estejam preparados para a prova 
                    e para o acesso ao ensino superior.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="10 8 16 12 10 16 10 8"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Orientação Profissional</BenefitTitle>
                  <BenefitDescription>
                    Conversas e orientações sobre escolha de carreira, cursos superiores, 
                    mercado de trabalho e caminhos disponíveis após a conclusão do 
                    ensino médio.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Projeto de Vida</BenefitTitle>
                  <BenefitDescription>
                    Atividades voltadas ao autoconhecimento, planejamento do futuro e 
                    desenvolvimento de habilidades pessoais e sociais para a vida adulta 
                    e o mercado de trabalho.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Olimpíadas do Conhecimento</BenefitTitle>
                  <BenefitDescription>
                    Incentivo à participação em olimpíadas como OBMEP e OBA — 
                    competições educacionais gratuitas e abertas a todos os 
                    alunos da rede pública.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </TabPanel>

            {/* ENSINO TÉCNICO */}
            <TabPanel $active={activeTab === 'tecnico'}>
              <BenefitsGrid>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Formação Técnica e Profissional</BenefitTitle>
                  <BenefitDescription>
                    Curso técnico integrado ao ensino médio, com aulas práticas que 
                    preparam o aluno diretamente para atuar no mercado de trabalho 
                    ao concluir o curso.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Estágio Supervisionado</BenefitTitle>
                  <BenefitDescription>
                    Oportunidade de realizar estágio supervisionado em empresas e 
                    organizações parceiras, colocando em prática os conhecimentos 
                    adquiridos durante o curso.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Aulas Práticas</BenefitTitle>
                  <BenefitDescription>
                    Atividades práticas realizadas em laboratórios e espaços adequados 
                    ao curso técnico, complementando o conteúdo teórico com experiências 
                    reais da área.
                  </BenefitDescription>
                </BenefitCard>
                <BenefitCard>
                  <BenefitIcon>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  </BenefitIcon>
                  <BenefitTitle>Diploma Técnico Reconhecido</BenefitTitle>
                  <BenefitDescription>
                    Ao concluir o curso, o aluno recebe o diploma de técnico reconhecido 
                    pelo MEC, além do certificado de conclusão do ensino médio, com 
                    dupla habilitação.
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </TabPanel>

          </TabContent>
        </TabSection>

        {/* Student Life */}
        <StudentLifeSection>
          <SectionTitle>Vida na escola</SectionTitle>
          <SectionSubtitle>
            Momentos e experiências que fazem parte da nossa rotina escolar
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
                <LifeTitle>Eventos e datas comemorativas</LifeTitle>
                <LifeDescription>
                  Festa junina, semana da consciência negra, dia do estudante e outras 
                  datas importantes que fazem parte do calendário escolar e fortalecem 
                  a identidade da nossa comunidade.
                </LifeDescription>
              </LifeContent>
            </LifeCard>

            <LifeCard>
              <LifeImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop" 
                  alt="Visitas"
                />
              </LifeImageContainer>
              <LifeContent>
                <LifeTitle>Visitas pedagógicas</LifeTitle>
                <LifeDescription>
                  Saídas de campo a museus e espaços culturais da cidade, 
                  organizadas pelos professores para complementar o conteúdo 
                  visto em sala de aula.
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
                <LifeTitle>Grêmio estudantil</LifeTitle>
                <LifeDescription>
                  Espaço de participação dos alunos na vida da escola. O grêmio 
                  representa os estudantes, organiza atividades e contribui com 
                  sugestões para a gestão escolar.
                </LifeDescription>
              </LifeContent>
            </LifeCard>

            <LifeCard>
              <LifeImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop" 
                  alt="Campeonatos Interescolares"
                />
              </LifeImageContainer>
              <LifeContent>
                <LifeTitle>Campeonatos interescolares</LifeTitle>
                <LifeDescription>
                  Competições esportivas entre escolas da rede pública em modalidades 
                  como futsal, vôlei e basquete. Os campeonatos promovem fair play, 
                  espírito de equipe e representação da nossa escola com orgulho.
                </LifeDescription>
              </LifeContent>
            </LifeCard>

          </LifeGrid>
        </StudentLifeSection>

        {/* FAQ */}
        <FAQSection>
          <SectionTitle>Dúvidas Frequentes</SectionTitle>
          <SectionSubtitle>
            Respostas para as perguntas mais comuns dos alunos e responsáveis
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
            <CTATitle>Ficou com alguma dúvida?</CTATitle>
            <CTADescription>
              Entre em contato com a secretaria ou venha pessoalmente à escola. 
              Estamos aqui para te ajudar no que precisar.
            </CTADescription>
            <CTAButtons>
              <PrimaryButton href="/contatos">Fale Conosco</PrimaryButton>
              <SecondaryButton href="/sobre">Conheça a Escola</SecondaryButton>
            </CTAButtons>
          </CTAContent>
        </CTASection>

      </Container>
      <Footer />
    </>
  )
}