'use client'

import {
  LinksWrapper,
  LinksTitle,
  LinksSubtitle,
  ButtonsGrid,
  LinkButton,
  LinkButtonIcon,
  LinkButtonText,
  LinkButtonLabel,
  LinkButtonDescription,
} from './styles'

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type LinkVariant =
  | 'apostilas'
  | 'salafuturo'
  | 'sptrans'
  | 'cras'
  | 'govestadual'
  | 'govbr'
  | 'universidades'
  | 'instagram'
  | 'ure'
  | 'seduc'

export interface ExternalLinksProps {
  /** Quais botões exibir. Se omitido, exibe todos. */
  show?: LinkVariant[]
  /** Título opcional da seção */
  title?: string
  /** Subtítulo opcional da seção */
  subtitle?: string
  /** Número de colunas do grid (padrão: automático) */
  columns?: 2 | 3 | 4 | 5
}

// ─── Dados dos links ───────────────────────────────────────────────────────────

const LINKS: Record<LinkVariant, {
  label: string
  description: string
  href: string
  color: string
  icon: React.ReactNode
}> = {
  apostilas: {
    label: 'Apostilas',
    description: 'Material didático oficial',
    href: 'https://efape.educacao.sp.gov.br/curriculopaulista/',
    color: '#3F693B',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  salafuturo: {
    label: 'Sala do Futuro',
    description: 'Plataforma de aprendizagem digital',
    href: 'https://saladofuturo.educacao.sp.gov.br/escolha-de-perfil',
    color: '#1565C0',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
      </svg>
    ),
  },
  sptrans: {
    label: 'SPTrans Bilhete',
    description: 'Bilhete do estudante',
    href: 'https://estudante.sptrans.com.br/',
    color: '#E53935',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  cras: {
    label: 'CRAS',
    description: 'Assistência social',
    href: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/assistencia_social/servicos/index.php?p=31397',
    color: '#6A1B9A',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  govestadual: {
    label: 'Governo Estadual',
    description: 'Portal do Governo de SP',
    href: 'https://www.saopaulo.sp.gov.br/',
    color: '#2E7D32',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  govbr: {
    label: 'Gov.br',
    description: 'Portal do Governo Federal',
    href: 'https://www.gov.br/',
    color: '#1565C0',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <path d="M9 22V12h6v10"/>
        <path d="M12 2v3"/>
      </svg>
    ),
  },
  universidades: {
    label: 'Universidades Públicas',
    description: 'USP, UNICAMP, UNESP e outras',
    href: 'https://www.educacao.sp.gov.br/sobre-educacao-superior/',
    color: '#BF360C',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  instagram: {
    label: 'Instagram da Escola',
    description: '@peibibliotecaria',
    href: 'https://www.instagram.com/peibibliotecaria',
    color: '#C2185B',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  ure: {
    label: 'URE',
    description: 'Unidade Regional de Ensino',
    href: 'https://deleste3.educacao.sp.gov.br/',
    color: '#00695C',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  seduc: {
    label: 'SEDUC-SP',
    description: 'Secretaria de Educação do Estado',
    href: 'https://www.educacao.sp.gov.br/',
    color: '#283593',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function ExternalLinks({
  show,
  title,
  subtitle,
  columns,
}: ExternalLinksProps) {
  const keys = (show ?? Object.keys(LINKS)) as LinkVariant[]

  return (
    <LinksWrapper>
      {title && <LinksTitle>{title}</LinksTitle>}
      {subtitle && <LinksSubtitle>{subtitle}</LinksSubtitle>}

      <ButtonsGrid $columns={columns ?? keys.length}>
        {keys.map((key) => {
          const link = LINKS[key]
          if (!link) return null
          return (
            <LinkButton
              key={key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              $color={link.color}
            >
              <LinkButtonIcon $color={link.color}>{link.icon}</LinkButtonIcon>
              <LinkButtonText>
                <LinkButtonLabel>{link.label}</LinkButtonLabel>
                <LinkButtonDescription>{link.description}</LinkButtonDescription>
              </LinkButtonText>
            </LinkButton>
          )
        })}
      </ButtonsGrid>
    </LinksWrapper>
  )
}