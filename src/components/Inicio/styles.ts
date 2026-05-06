import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
`

export const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 10vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    min-height: 500px;
  }
  
  @media (max-width: 480px) {
    min-height: 450px;
  }
`

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  max-width: 600px;
  margin-left: calc(80px + 4rem);
  padding-right: 4rem;
  
  @media (max-width: 1200px) {
    margin-left: calc(80px + 3rem);
    padding-right: 3rem;
  }
  
  @media (max-width: 968px) {
    margin-left: calc(80px + 2rem);
    padding-right: 2rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    margin-left: 2rem;
    padding-right: 2rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    margin-left: 1.5rem;
    padding-right: 1.5rem;
    gap: 1.2rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  
  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 968px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.6rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;
  
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 968px) {
    font-size: 1.15rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.05rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
`

export const Section = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 1rem);
  
  @media (max-width: 1200px) {
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1200px) {
    font-size: 1.15rem;
    margin-bottom: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`

export const Grid = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 3}, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    gap: 2rem;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
  }
  
  @media (max-width: 640px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 1200px) {
    padding: 2.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

export const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const ImageSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 5rem 4rem;
  padding-left: calc(80px + 1rem);
  align-items: center;
  background: white;
  
  @media (max-width: 1200px) {
    gap: 3rem;
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
    gap: 2.5rem;
  }
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
    gap: 2rem;
  }
`

export const ImageContent = styled.div`
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 1200px) {
    img { height: 500px; }
  }
  
  @media (max-width: 968px) {
    img { height: 400px; border-radius: 16px; }
  }
  
  @media (max-width: 640px) {
    img { height: 320px; }
  }
  
  @media (max-width: 480px) {
    img { height: 280px; border-radius: 12px; }
  }
`

export const TextContent = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 2rem;
    font-family: var(--font-cabourg-bold);
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 1200px) {
    h2 { font-size: 2.2rem; }
    p { font-size: 1.05rem; }
  }
  
  @media (max-width: 968px) {
    h2 { font-size: 2rem; margin-bottom: 1.5rem; }
    p { font-size: 1rem; line-height: 1.7; }
  }
  
  @media (max-width: 640px) {
    h2 { font-size: 1.75rem; }
    p { font-size: 0.95rem; }
  }
  
  @media (max-width: 480px) {
    h2 { font-size: 1.5rem; margin-bottom: 1.2rem; }
    p { font-size: 0.9rem; margin-bottom: 1.2rem; }
  }
`

export const GallerySection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 1rem);
  background: white;
  
  @media (max-width: 1200px) {
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`

export const GalleryItem = styled.div`
  background: #ffffff;
  border: 2px solid #e8f0e8;
  border-radius: 16px;
  padding: 2rem 1.8rem;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: all 0.3s ease;
  cursor: default;

  .icon-wrap {
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: #f0f7f0;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: #3F693B;
      margin: 0;
      line-height: 1.3;
    }

    p {
      font-size: 0.92rem;
      color: #555;
      margin: 0;
      line-height: 1.6;
    }
  }

  &:hover {
    border-color: #3F693B;
    box-shadow: 0 8px 30px rgba(63, 105, 59, 0.12);
    transform: translateY(-4px);

    .icon-wrap {
      background: #3F693B;
      svg { stroke: #ffffff; }
    }

    .content h3 { color: #2d4f2a; }
  }

  @media (max-width: 968px) {
    padding: 1.6rem 1.4rem;
    .icon-wrap { width: 54px; height: 54px; }
    .content h3 { font-size: 1.05rem; }
    .content p { font-size: 0.88rem; }
  }

  @media (max-width: 480px) {
    padding: 1.3rem 1.1rem;
    gap: 1rem;
    .icon-wrap { width: 48px; height: 48px; border-radius: 10px; }
    .content h3 { font-size: 1rem; }
    .content p { font-size: 0.85rem; }
  }
`

/* ─── Avisos & Comunicados ──────────────────────────────── */

const pulseRing = keyframes`
  0%   { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
`

export const AvisosSection = styled.section`
  background: #f4f8f4;
  padding: 5rem 4rem;
  padding-left: calc(80px + 1rem);
  border-top: 3px solid #3F693B;

  @media (max-width: 1200px) {
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }

  @media (max-width: 968px) {
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
    padding-left: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const AvisosWrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
`

export const AvisosBoardCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 4px 32px rgba(63, 105, 59, 0.10), 0 1px 4px rgba(0,0,0,0.04);
  overflow: hidden;
  border: 1px solid #e3ede3;
`

export const AvisosBoardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem 2.4rem 1.6rem;
  border-bottom: 1px solid #eef3ee;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding: 1.6rem 1.6rem 1.2rem;
    flex-direction: column;
    gap: 0.8rem;
  }
`

export const AvisosBoardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const AvisosBoardTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a2e1a;
  margin: 0;
  font-family: var(--font-cabourg-bold);

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const AvisosBoardSubtitle = styled.p`
  font-size: 0.9rem;
  color: #6b7f6b;
  margin: 0;
  line-height: 1.5;
`

export const AvisoPulse = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: #3F693B;
  white-space: nowrap;
  background: #edf7ed;
  border: 1px solid #c6e0c5;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  margin-top: 0.2rem;

  span {
    position: relative;
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #3F693B;
    border-radius: 50%;
    flex-shrink: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #3F693B;
      animation: ${pulseRing} 1.8s ease-out infinite;
    }
  }
`

export const AvisosLista = styled.div`
  padding: 0.4rem 0;
`

export const AvisosListaDivider = styled.div`
  height: 1px;
  background: #f0f5f0;
  margin: 0 2.4rem;

  @media (max-width: 600px) {
    margin: 0 1.6rem;
  }
`

export const AvisoItem = styled.div<{ $urgente?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem 2.4rem;
  transition: background 0.2s ease;
  position: relative;

  ${({ $urgente }) =>
    $urgente &&
    `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #3F693B;
      border-radius: 0 2px 2px 0;
    }
  `}

  &:hover {
    background: #f9fcf9;
  }

  @media (max-width: 600px) {
    padding: 1.2rem 1.6rem;
    gap: 1rem;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`

export const AvisoItemIconWrap = styled.div<{ $color: string }>`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $color }) => $color}12;
  color: ${({ $color }) => $color};
  margin-top: 0.1rem;

  svg {
    stroke: ${({ $color }) => $color};
  }

  @media (max-width: 420px) {
    width: 38px;
    height: 38px;
    border-radius: 10px;
  }
`

export const AvisoItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
  min-width: 0;
`

export const AvisoItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const AvisoItemTag = styled.span<{ $color: string }>`
  display: inline-block;
  padding: 0.18rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({ $color }) => $color}14;
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => $color}28;
`

export const AvisoItemData = styled.span`
  font-size: 0.8rem;
  color: #9ca3af;
  font-weight: 500;
`

export const AvisoItemTitulo = styled.h3<{ $urgente?: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ $urgente }) => ($urgente ? '#1a2e1a' : '#2d3748')};
  margin: 0;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const AvisoItemDescricao = styled.p`
  font-size: 0.88rem;
  color: #6b7280;
  line-height: 1.65;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`