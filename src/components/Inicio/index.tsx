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
  AvisosSection,
  AvisosWrapper,
  AvisosBoardCard,
  AvisosBoardHeader,
  AvisosBoardHeaderLeft,
  AvisosBoardTitle,
  AvisosBoardSubtitle,
  AvisosLista,
  AvisosListaDivider,
  AvisoItem,
  AvisoItemIconWrap,
  AvisoItemContent,
  AvisoItemTitulo,
  AvisoItemDescricao,
  AvisoItemMeta,
  AvisoItemTag,
  AvisoItemData,
  AvisoPulse,
} from './styles'

const avisos = [
  {
    id: 1,
    tag: 'Reunião',
    tagColor: '#3F693B',
    data: '15 Mai 2025',
    titulo: 'Reunião de Pais e Mestres — 1º Bimestre',
    descricao: 'Presença obrigatória dos responsáveis. Informes sobre desempenho, frequência e projetos do bimestre.',
    urgente: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 2,
    tag: 'Evento',
    tagColor: '#2563EB',
    data: '22 Mai 2025',
    titulo: 'Feira de Ciências 2025',
    descricao: 'Alunos do Ensino Médio apresentarão projetos científicos. Comunidade escolar está convidada.',
    urgente: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    id: 3,
    tag: 'Comunicado',
    tagColor: '#B45309',
    data: '10 Mai 2025',
    titulo: 'Calendário de Provas — 2º Bimestre',
    descricao: 'O calendário já está disponível no portal do aluno. Consulte as datas e organize-se com antecedência.',
    urgente: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    id: 4,
    tag: 'Reunião',
    tagColor: '#3F693B',
    data: '28 Mai 2025',
    titulo: 'Conselho de Classe — Ensino Médio',
    descricao: 'Avaliação do desempenho dos alunos do Ensino Médio. Professores e coordenadores devem confirmar presença.',
    urgente: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    id: 5,
    tag: 'Evento',
    tagColor: '#7C3AED',
    data: '05 Jun 2025',
    titulo: 'Mostra Cultural Estudantil',
    descricao: 'Apresentações artísticas, dança, teatro e exposições visuais produzidas pelos alunos de todos os anos.',
    urgente: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

export default function Inicio() {
  return (
    <>
      <Navbar />
      <Container>
        {/* Hero Section */}
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

        {/* Avisos & Comunicados */}
        <AvisosSection>
          <AvisosWrapper>
            <AvisosBoardCard>
              <AvisosBoardHeader>
                <AvisosBoardHeaderLeft>
                  <AvisosBoardTitle>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    Avisos e Comunicados
                  </AvisosBoardTitle>
                  <AvisosBoardSubtitle>
                    Fique por dentro de reuniões, eventos e informes da escola
                  </AvisosBoardSubtitle>
                </AvisosBoardHeaderLeft>
                <AvisoPulse>
                  <span />
                  Atualizado
                </AvisoPulse>
              </AvisosBoardHeader>

              <AvisosLista>
                {avisos.map((aviso, index) => (
                  <div key={aviso.id}>
                    <AvisoItem $urgente={aviso.urgente}>
                      <AvisoItemIconWrap $color={aviso.tagColor}>
                        {aviso.icon}
                      </AvisoItemIconWrap>
                      <AvisoItemContent>
                        <AvisoItemMeta>
                          <AvisoItemTag $color={aviso.tagColor}>{aviso.tag}</AvisoItemTag>
                          <AvisoItemData>{aviso.data}</AvisoItemData>
                        </AvisoItemMeta>
                        <AvisoItemTitulo $urgente={aviso.urgente}>{aviso.titulo}</AvisoItemTitulo>
                        <AvisoItemDescricao>{aviso.descricao}</AvisoItemDescricao>
                      </AvisoItemContent>
                    </AvisoItem>
                    {index < avisos.length - 1 && <AvisosListaDivider />}
                  </div>
                ))}
              </AvisosLista>
            </AvisosBoardCard>
          </AvisosWrapper>
        </AvisosSection>

        <Section style={{ background: '#f8f9fa', padding: '3rem 2rem' }}>
          <ExternalLinks
            title="Acesso Rápido"
            subtitle="Links úteis, responsáveis e comunidade escolar"
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
                Instalações de ponta com salas confortáveis, laboratórios equipados, 
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
                essenciais.
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
              src="/foto1.jpeg" 
              alt="Campus da escola"
            />
          </ImageContent>
          <TextContent>
            <h2>Nossa História e Missão</h2>
            <p>
              Localizada na Rua Rafael Della Mônica, 300, no bairro Cidade Tiradentes,
              Zona Leste de São Paulo, a E.E. Bibliotecária Maria Antonieta Ferraz é uma
              escola estadual com décadas de história na comunidade. Nosso nome homenageia
              uma bibliotecária dedicada à cultura e à leitura, e nossa Associação de Pais
              e Mestres existe desde março de 1987.
            </p>
            <p>
              Atendemos alunos nos segmentos de Ensino Fundamental II,
              Ensino Médio e Ensino Técnico, com um corpo docente de
              professores comprometidos com o desenvolvimento de cada estudante.
            </p>
            <p>
              Nossa missão é oferecer educação pública de qualidade, formando cidadãos
              críticos e conscientes. Acreditamos que a escola é um espaço de
              transformação real para os jovens da Cidade Tiradentes e da Zona Leste.
            </p>
          </TextContent>
        </ImageSection>

        {/* Segmentos de Ensino */}
        <Section style={{ background: '#f8f9fa' }}>
          <SectionTitle>Segmentos de Ensino</SectionTitle>
          <Grid $columns={3}>
            <Card>
              <img 
                src="/foto2.jpg" 
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
                src="/foto3.jpg" 
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
                src="/foto4.jpg" 
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
              <div className="icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <div className="content">
                <h3>Biblioteca</h3>
                <p>Acervo com mais de 15 mil volumes para pesquisa e leitura</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <div className="icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
                </svg>
              </div>
              <div className="content">
                <h3>Laboratórios</h3>
                <p>Equipamentos de última geração para experimentos científicos</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <div className="icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <div className="content">
                <h3>Esporte</h3>
                <p>Quadras poliesportivas e espaços para atividade física</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <div className="icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="content">
                <h3>Sala de Recurso</h3>
                <p>Atendimento educacional especializado e inclusivo</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <div className="icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className="content">
                <h3>Sala Maker</h3>
                <p>Criatividade e inovação na prática com ferramentas modernas</p>
              </div>
            </GalleryItem>
            <GalleryItem>
              <div className="icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3F693B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8"/>
                  <path d="M12 17v4"/>
                </svg>
              </div>
              <div className="content">
                <h3>Sala de Informática</h3>
                <p>Tecnologia acessível a todos os alunos da instituição</p>
              </div>
            </GalleryItem>
          </GalleryGrid>
        </GallerySection>
      </Container>
      <Footer />
    </>
  )
}