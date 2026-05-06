'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import { 
  Container, 
  Hero, 
  HeroContent,
  HeroImage,
  Title, 
  Subtitle,
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
  ProcessSection,
  ProcessTimeline,
  ProcessStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  CTASection,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton
} from './styles'

export default function Projetos() {
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

        {/* CTA Final */}
        <CTASection>
          <CTAContent>
            <CTATitle>Faça Parte da Transformação</CTATitle>
            <CTADescription>
              Nossos projetos estão sempre abertos para novos participantes. 
              Venha fazer parte dessa jornada de aprendizagem ativa e transformadora.
            </CTADescription>
            <CTAButton href="/alunos">
              Conheça Mais Sobre Nossos Projetos
            </CTAButton>
          </CTAContent>
        </CTASection>

      </Container>
      <Footer />
    </>
  )
}