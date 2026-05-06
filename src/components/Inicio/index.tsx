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
  ImageSection,
  ImageContent,
  TextContent,
  GallerySection,
  GalleryGrid,
  GalleryItem,
} from './styles'

export default function Inicio() {
  return (
    <>
      <Navbar />
      <Container>
        {/* Hero Section com imagem fullscreen e overlay */}
        <Hero>
          <HeroImage>
            <img 
              src="/fundo.jpeg" 
              alt="Estudantes em sala de aula moderna"
            />
          </HeroImage>
          <HeroContent>
            <Title>PEI E.E MARIA ANTONIETA FERRAZ BIBLIOTECARIA</Title>
            <Subtitle>
              Formando cidadãos preparados para o amanhã através de uma educação 
              inovadora, tecnológica e humanizada.
            </Subtitle>
          </HeroContent>
        </Hero>
        <Section style={{ background: '#f8f9fa', padding: '3rem 2rem' }}>
          <ExternalLinks
            title="Acesso Rápido"
            subtitle="Links úteis para alunos, responsáveis e comunidade escolar"
            show={['sptrans', 'govbr', 'govestadual', 'instagram']}
            columns={4}
          />
        </Section>
        {/* Diferenciais Section */}
        <Section>
          <SectionTitle>Nossos Diferenciais</SectionTitle>
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
          
          <Grid $columns={3}>
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" 
                alt="Anos Finais"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
              />
              <CardTitle>Anos Finais</CardTitle>
              <CardDescription>
                Do 6º ao 9º ano. Base sólida em todas as disciplinas com metodologias 
                ativas, projetos interdisciplinares e desenvolvimento de competências.
              </CardDescription>
            </Card>
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                alt="Ensino Médio"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
              />
              <CardTitle>Ensino Médio</CardTitle>
              <CardDescription>
                Do 1º ao 3º ano. Preparação completa para o ENEM e vestibulares, 
                com foco no desenvolvimento crítico e protagonismo juvenil.
              </CardDescription>
            </Card>
            <Card>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                alt="Ensino Técnico"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
              />
              <CardTitle>Ensino Técnico</CardTitle>
              <CardDescription>
                Formação profissional integrada ao ensino médio, preparando os 
                alunos para o mercado de trabalho com habilidades práticas e técnicas.
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
                src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?w=600&h=400&fit=crop" 
                alt="Sala de Recurso"
              />
              <div className="overlay">
                <h3>Sala de Recurso</h3>
                <p>Atendimento educacional especializado</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop" 
                alt="Sala Maker"
              />
              <div className="overlay">
                <h3>Sala Maker</h3>
                <p>Criatividade e inovação na prática</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop" 
                alt="Sala de Informática"
              />
              <div className="overlay">
                <h3>Sala de Informática</h3>
                <p>Tecnologia acessível a todos os alunos</p>
              </div>
            </GalleryItem>
          </GalleryGrid>
        </GallerySection>
      </Container>
      <Footer />
    </>
  )
}