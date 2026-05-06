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
  FeaturedProject,
  ProjectImage,
  ProjectContent,
  ProjectTag,
  ProjectTitle,
  ProjectDescription,
  ProjectMeta,
  MetaItem,
  ProjectsGrid,
  ProjectCard,
  ProjectCardImage,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardTags,
  Tag,
  CategoryFilter,
  FilterButton,
  ImpactSection,
  ImpactGrid,
  ImpactItem,
  ImpactNumber,
  ImpactLabel,
  ImpactDescription,
  ProcessSection,
  ProcessTimeline,
  ProcessStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  TestimonialSection,
  TestimonialSlider,
  TestimonialCard,
  TestimonialImage,
  TestimonialContent,
  TestimonialQuote,
  TestimonialAuthor,
  TestimonialRole,
  GallerySection,
  GalleryMasonry,
  GalleryItem,
  GalleryOverlay,
  CTASection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton
} from './styles'

const categories = ['Todos', 'Ciências', 'Tecnologia', 'Artes', 'Sustentabilidade', 'Esporte']

const projects = [
  {
    id: 1,
    category: 'Tecnologia',
    title: 'Robótica Educacional',
    description: 'Desenvolvimento de robôs autônomos e programação avançada para resolução de problemas do cotidiano.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    tags: ['Arduino', 'Python', 'Inovação'],
    year: '2024',
    participants: '45 alunos'
  },
  {
    id: 2,
    category: 'Sustentabilidade',
    title: 'Horta Orgânica Escolar',
    description: 'Cultivo de alimentos orgânicos e estudo sobre agricultura sustentável e alimentação saudável.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    tags: ['Meio Ambiente', 'Nutrição', 'Biologia'],
    year: '2024',
    participants: '60 alunos'
  },
  {
    id: 3,
    category: 'Artes',
    title: 'Festival de Teatro',
    description: 'Produções teatrais originais criadas e apresentadas pelos estudantes, explorando temas sociais.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop',
    tags: ['Teatro', 'Dramaturgia', 'Cultura'],
    year: '2024',
    participants: '80 alunos'
  },
  {
    id: 4,
    category: 'Ciências',
    title: 'Laboratório de Química Verde',
    description: 'Experimentos científicos focados em práticas sustentáveis e redução de impacto ambiental.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    tags: ['Química', 'Sustentabilidade', 'Pesquisa'],
    year: '2024',
    participants: '35 alunos'
  },
  {
    id: 5,
    category: 'Esporte',
    title: 'Campeonatos Interescolares',
    description: 'Competições esportivas entre escolas da rede pública em futsal, vôlei e basquete, promovendo fair play, espírito de equipe e representação da escola.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    tags: ['Esporte', 'Fair Play', 'Competição'],
    year: '2024',
    participants: '120 alunos'
  },
  {
    id: 6,
    category: 'Tecnologia',
    title: 'Desenvolvimento de Apps',
    description: 'Criação de aplicativos móveis para resolver problemas identificados pelos próprios alunos.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['Programação', 'Design', 'Empreendedorismo'],
    year: '2024',
    participants: '30 alunos'
  }
]

const testimonials = [
  {
    quote: 'O projeto de robótica mudou completamente minha visão sobre tecnologia. Aprendi a trabalhar em equipe e desenvolver soluções criativas para problemas reais.',
    author: 'Lucas Oliveira',
    role: 'Aluno do 9º ano - Projeto Robótica Educacional',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    quote: 'Participar da horta escolar me ensinou sobre responsabilidade ambiental e alimentação saudável. É gratificante ver nosso trabalho gerando resultados concretos.',
    author: 'Ana Carolina',
    role: 'Aluna do 7º ano - Projeto Horta Orgânica',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    quote: 'O festival de teatro me ajudou a superar a timidez e descobrir uma paixão pela arte. A experiência de criar e apresentar nossa própria peça foi transformadora.',
    author: 'Pedro Henrique',
    role: 'Aluno do 2º ano EM - Festival de Teatro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=600&fit=crop'
]

export default function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      <Container>

        {/* Hero Section */}
        <Hero>
          <HeroImage>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop" 
              alt="Projetos educacionais"
            />
          </HeroImage>
          <HeroContent>
            <Title>Nossos Projetos</Title>
            <Subtitle>
              Aprendizagem ativa através de projetos inovadores que transformam 
              conhecimento em ação e preparam nossos alunos para os desafios do futuro.
            </Subtitle>
          </HeroContent>
        </Hero>

        {/* Projeto em Destaque */}
        <FeaturedProject>
          <ProjectImage>
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop" 
              alt="Projeto em destaque"
            />
          </ProjectImage>
          <ProjectContent>
            <ProjectTag>Em Destaque</ProjectTag>
            <ProjectTitle>Escola Sustentável 2024</ProjectTitle>
            <ProjectDescription>
              Nossa iniciativa mais ambiciosa: transformar a escola em um modelo de 
              sustentabilidade com energia solar, sistema de captação de água da chuva, 
              compostagem e educação ambiental integrada ao currículo. O projeto envolve 
              todos os segmentos de ensino e já reduziu em 40% nosso consumo de energia 
              e 60% o desperdício de água.
            </ProjectDescription>
            <ProjectMeta>
              <MetaItem>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Iniciado em Janeiro 2024
              </MetaItem>
              <MetaItem>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Toda a comunidade escolar
              </MetaItem>
              <MetaItem>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
                Sustentabilidade & Ciências
              </MetaItem>
            </ProjectMeta>
          </ProjectContent>
        </FeaturedProject>

        {/* Impacto dos Projetos */}
        <ImpactSection>
          <SectionTitle>Impacto Real</SectionTitle>
          <SectionSubtitle>
            Resultados concretos que demonstram o poder da educação por projetos
          </SectionSubtitle>
          <ImpactGrid>
            <ImpactItem>
              <ImpactNumber>850+</ImpactNumber>
              <ImpactLabel>Alunos Envolvidos</ImpactLabel>
              <ImpactDescription>
                Participação ativa em projetos interdisciplinares ao longo do ano
              </ImpactDescription>
            </ImpactItem>
            <ImpactItem>
              <ImpactNumber>32</ImpactNumber>
              <ImpactLabel>Projetos Ativos</ImpactLabel>
              <ImpactDescription>
                Iniciativas em desenvolvimento nos diferentes segmentos de ensino
              </ImpactDescription>
            </ImpactItem>
            <ImpactItem>
              <ImpactNumber>15</ImpactNumber>
              <ImpactLabel>Premiações</ImpactLabel>
              <ImpactDescription>
                Reconhecimentos em feiras científicas e competições nacionais
              </ImpactDescription>
            </ImpactItem>
            <ImpactItem>
              <ImpactNumber>5.000h</ImpactNumber>
              <ImpactLabel>Voluntariado</ImpactLabel>
              <ImpactDescription>
                Horas dedicadas a ações sociais e projetos comunitários
              </ImpactDescription>
            </ImpactItem>
          </ImpactGrid>
        </ImpactSection>

        {/* Filtro de Categorias */}
        <Section>
          <SectionTitle>Explore Nossos Projetos</SectionTitle>
          <SectionSubtitle>
            Conheça as iniciativas que estão transformando a educação na prática
          </SectionSubtitle>
          
          <CategoryFilter>
            {categories.map((category) => (
              <FilterButton
                key={category}
                $active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </CategoryFilter>

          <ProjectsGrid>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectCardImage>
                  <img src={project.image} alt={project.title} />
                  <div className="category-badge">{project.category}</div>
                </ProjectCardImage>
                <ProjectCardContent>
                  <ProjectCardTitle>{project.title}</ProjectCardTitle>
                  <ProjectCardDescription>
                    {project.description}
                  </ProjectCardDescription>
                  <ProjectCardTags>
                    {project.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </ProjectCardTags>
                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                    <span>📅 {project.year}</span>
                    <span>👥 {project.participants}</span>
                  </div>
                </ProjectCardContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Section>

        {/* Processo de Desenvolvimento */}
        <ProcessSection>
          <SectionTitle>Como Desenvolvemos Projetos</SectionTitle>
          <SectionSubtitle>
            Metodologia estruturada que garante aprendizagem significativa
          </SectionSubtitle>
          
          <ProcessTimeline>
            <ProcessStep>
              <StepNumber>01</StepNumber>
              <StepContent>
                <StepTitle>Identificação do Problema</StepTitle>
                <StepDescription>
                  Alunos identificam desafios reais da escola ou comunidade que desejam resolver
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>02</StepNumber>
              <StepContent>
                <StepTitle>Pesquisa e Planejamento</StepTitle>
                <StepDescription>
                  Investigação aprofundada, análise de dados e elaboração de planos de ação
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>03</StepNumber>
              <StepContent>
                <StepTitle>Desenvolvimento</StepTitle>
                <StepDescription>
                  Trabalho colaborativo para criar soluções, protótipos e implementações
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>04</StepNumber>
              <StepContent>
                <StepTitle>Teste e Refinamento</StepTitle>
                <StepDescription>
                  Avaliação dos resultados, ajustes necessários e melhoria contínua
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>05</StepNumber>
              <StepContent>
                <StepTitle>Apresentação e Impacto</StepTitle>
                <StepDescription>
                  Compartilhamento dos resultados e medição do impacto gerado
                </StepDescription>
              </StepContent>
            </ProcessStep>
          </ProcessTimeline>
        </ProcessSection>

        {/* Depoimentos */}
        <TestimonialSection>
          <SectionTitle>Vozes dos Protagonistas</SectionTitle>
          <SectionSubtitle>
            O que nossos alunos têm a dizer sobre suas experiências
          </SectionSubtitle>
          
          <TestimonialSlider>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                $active={currentTestimonial === index}
              >
                <TestimonialImage>
                  <img src={testimonial.image} alt={testimonial.author} />
                </TestimonialImage>
                <TestimonialContent>
                  <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
                  <TestimonialRole>{testimonial.role}</TestimonialRole>
                </TestimonialContent>
              </TestimonialCard>
            ))}
          </TestimonialSlider>
        </TestimonialSection>

        {/* Galeria em Masonry */}
        <GallerySection>
          <SectionTitle>Projetos em Ação</SectionTitle>
          <SectionSubtitle>
            Momentos capturados durante o desenvolvimento das nossas iniciativas
          </SectionSubtitle>
          
          <GalleryMasonry>
            {galleryImages.map((image, index) => (
              <GalleryItem key={index}>
                <img src={image} alt={`Galeria ${index + 1}`} />
                <GalleryOverlay>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </GalleryOverlay>
              </GalleryItem>
            ))}
          </GalleryMasonry>
        </GallerySection>

        {/* CTA Final */}
        <CTASection>
          <CTAContent>
            <CTATitle>Faça Parte da Transformação</CTATitle>
            <CTADescription>
              Nossos projetos estão sempre abertos para novos participantes. 
              Venha fazer parte dessa jornada de aprendizagem ativa e transformadora.
            </CTADescription>
            <CTAButton href="#contato">
              Conheça Mais Sobre Nossos Projetos
            </CTAButton>
          </CTAContent>
        </CTASection>

        {/* Links Externos — Saiba Mais */}
        <Section style={{ background: '#f8f9fa', padding: '3rem 2rem' }}>
          <ExternalLinks
            title="Saiba Mais"
            subtitle="Acompanhe nossos projetos e plataformas"
            show={['instagram', 'salafuturo']}
            columns={2}
          />
        </Section>

      </Container>
      <Footer />
    </>
  )
}