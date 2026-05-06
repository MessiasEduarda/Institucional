import styled from 'styled-components'

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
    background: rgba(0, 0, 0, 0.5);
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  max-width: 700px;
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
  font-size: 4.5rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  
  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }
  
  @media (max-width: 968px) {
    font-size: 3rem;
  }
  
  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;
  
  @media (max-width: 1200px) {
    font-size: 1.35rem;
  }
  
  @media (max-width: 968px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const Section = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
  
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
  font-size: 3rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 1200px) {
    font-size: 2.6rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1200px) {
    font-size: 1.2rem;
    margin-bottom: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`

// Welcome Section - Layout split inovador
export const WelcomeSection = styled.section`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 0;
  background: #f8f9fa;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export const WelcomeImage = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    min-height: 700px;
    object-fit: cover;
  }
  
  @media (max-width: 968px) {
    img {
      min-height: 400px;
    }
  }
  
  @media (max-width: 640px) {
    img {
      min-height: 300px;
    }
  }
`

export const WelcomeContent = styled.div`
  padding: 5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 1200px) {
    padding: 4rem 4rem;
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const WelcomeText = styled.div`
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    margin-bottom: 2.5rem;
  }
`

export const WelcomeTitle = styled.h2`
  font-size: 2.8rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1200px) {
    font-size: 2.4rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`

export const WelcomeDescription = styled.p`
  font-size: 1.15rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const WelcomeFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    gap: 1.2rem;
  }
`

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`

export const FeatureIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3F693B 0%, #5a8a54 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  
  @media (max-width: 640px) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const FeatureText = styled.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

// Tab Section - Sistema de abas criativo
export const TabSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
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
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    gap: 0.7rem;
  }
`

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 1rem 2.5rem;
  border: none;
  background: ${props => props.$active ? 'linear-gradient(135deg, #3F693B 0%, #5a8a54 100%)' : '#f0f0f0'};
  color: ${props => props.$active ? 'white' : '#666'};
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$active ? '0 4px 15px rgba(63, 105, 59, 0.3)' : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 640px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`

export const TabContent = styled.div`
  position: relative;
`

export const TabPanel = styled.div<{ $active: boolean }>`
  display: ${props => props.$active ? 'block' : 'none'};
  animation: ${props => props.$active ? 'fadeIn 0.5s ease-in' : 'none'};
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 968px) {
    gap: 2rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const BenefitCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 2.5rem;
  border-radius: 20px;
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3F693B;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(63, 105, 59, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.8rem;
  }
`

export const BenefitIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3F693B 0%, #5a8a54 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
  
  svg {
    width: 32px;
    height: 32px;
    stroke: white;
  }
  
  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-bottom: 1.2rem;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const BenefitDescription = styled.p`
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

// Activities Carousel - Carrossel fullwidth
export const ActivitiesSection = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
  overflow: hidden;
  
  ${SectionTitle}, ${SectionSubtitle} {
    padding-left: calc(80px + 4rem);
    padding-right: 4rem;
  }
  
  @media (max-width: 1200px) {
    padding: 4rem 0;
    
    ${SectionTitle}, ${SectionSubtitle} {
      padding-left: calc(80px + 3rem);
      padding-right: 3rem;
    }
  }
  
  @media (max-width: 968px) {
    padding: 3rem 0;
    
    ${SectionTitle}, ${SectionSubtitle} {
      padding-left: calc(80px + 2rem);
      padding-right: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    ${SectionTitle}, ${SectionSubtitle} {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 0;
    
    ${SectionTitle}, ${SectionSubtitle} {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`

export const ActivityCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  
  @media (max-width: 968px) {
    height: 550px;
  }
  
  @media (max-width: 640px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 450px;
  }
`

export const ActivitySlide = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => props.$active ? 'grid' : 'none'};
  grid-template-columns: 1.3fr 1fr;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 0.5s ease;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export const ActivityImage = styled.div`
  position: relative;
  overflow: hidden;
  
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
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 100%);
  }
  
  @media (max-width: 968px) {
    height: 300px;
    
    &::after {
      background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%);
    }
  }
`

export const ActivityInfo = styled.div`
  background: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 1200px) {
    padding: 3.5rem;
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const ActivityCategory = styled.span`
  display: inline-block;
  background: #3F693B;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const ActivityTitle = styled.h3`
  font-size: 2.5rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const ActivityDescription = styled.p`
  font-size: 1.15rem;
  color: #666;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const CarouselControls = styled.div``

export const CarouselButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$position}: 2rem;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 10;
  color: #3F693B;
  
  &:hover {
    background: #3F693B;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 968px) {
    ${props => props.$position}: 1rem;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 480px) {
    ${props => props.$position}: 0.5rem;
    width: 45px;
    height: 45px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  z-index: 10;
  
  @media (max-width: 968px) {
    bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    bottom: 1rem;
    gap: 0.6rem;
  }
`

export const CarouselDot = styled.button<{ $active: boolean }>`
  width: ${props => props.$active ? '40px' : '12px'};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${props => props.$active ? '#3F693B' : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: ${props => props.$active ? '#3F693B' : 'rgba(255, 255, 255, 0.9)'};
  }
  
  @media (max-width: 480px) {
    width: ${props => props.$active ? '32px' : '10px'};
    height: 10px;
  }
`

// Resources Section - Grid de recursos
export const ResourcesSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
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
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 968px) {
    gap: 2rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const ResourceCard = styled.div`
  background: #f8f9fa;
  padding: 2.5rem;
  border-radius: 20px;
  border-left: 5px solid #3F693B;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.8rem;
  }
`

export const ResourceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }
`

export const ResourceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #3F693B 0%, #5a8a54 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  
  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
`

export const ResourceTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ResourceItem = styled.li`
  position: relative;
  padding-left: 1.8rem;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #3F693B;
    font-weight: 700;
    font-size: 1.2rem;
  }
`

export const ResourceLink = styled.a`
  font-size: 1.05rem;
  color: #555;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: #3F693B;
    padding-left: 0.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

// Student Life Section - Cards com imagem
export const StudentLifeSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
  background: #f8f9fa;
  
  @media (max-width: 1200px) {
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const LifeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 968px) {
    gap: 2rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
`

export const LifeCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    border-radius: 16px;
  }
`

export const LifeImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${LifeCard}:hover & img {
    transform: scale(1.1);
  }
  
  @media (max-width: 968px) {
    height: 220px;
  }
  
  @media (max-width: 640px) {
    height: 200px;
  }
`

export const LifeContent = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.7rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

export const LifeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const LifeDescription = styled.p`
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

// Support Section - Cards de suporte
export const SupportSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
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
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const SupportContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const SupportCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px;
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3F693B;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(63, 105, 59, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.8rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`

export const SupportIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #3F693B 0%, #5a8a54 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  
  @media (max-width: 640px) {
    width: 85px;
    height: 85px;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
  
  @media (max-width: 480px) {
    width: 75px;
    height: 75px;
    margin-bottom: 1.5rem;
    
    svg {
      width: 36px;
      height: 36px;
    }
  }
`

export const SupportTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const SupportDescription = styled.p`
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const SupportContact = styled.div`
  font-size: 1.1rem;
  color: #3F693B;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

// Testimonials Section
export const TestimonialsSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
  background: #f8f9fa;
  
  @media (max-width: 1200px) {
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const TestimonialCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.8rem;
  }
`

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const TestimonialAvatar = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid #3F693B;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
`

export const TestimonialInfo = styled.div``

export const TestimonialName = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.3rem;
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`

export const TestimonialGrade = styled.div`
  font-size: 0.95rem;
  color: #3F693B;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const TestimonialText = styled.p`
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  font-style: italic;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const TestimonialRating = styled.div`
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`

// FAQ Section - Accordion melhorado
export const FAQSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
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
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    gap: 1.2rem;
  }
`

export const FAQItem = styled.div<{ $isOpen: boolean }>`
  background: #f8f9fa;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${props => props.$isOpen ? '#3F693B' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isOpen ? '0 4px 20px rgba(63, 105, 59, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`

export const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.8rem 2rem;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  text-align: left;
  transition: all 0.2s ease;
  gap: 1.5rem;
  
  svg {
    flex-shrink: 0;
    transition: transform 0.3s ease;
    color: #3F693B;
    min-width: 24px;
  }
  
  ${FAQItem}:hover & {
    color: #3F693B;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.3rem 1.3rem;
    font-size: 1rem;
    gap: 1rem;
  }
`

export const FAQAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease, opacity 0.3s ease;
  opacity: 0;
  padding: 0 2rem;
  
  ${FAQItem}[data-is-open="true"] & {
    max-height: 500px;
    opacity: 1;
    padding: 0 2rem 1.8rem;
  }
  
  font-size: 1.05rem;
  color: #666;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1.5rem;
    
    ${FAQItem}[data-is-open="true"] & {
      padding: 0 1.5rem 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0 1.3rem;
    
    ${FAQItem}[data-is-open="true"] & {
      padding: 0 1.3rem 1.3rem;
    }
  }
`

// CTA Section
export const CTASection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
  background: linear-gradient(135deg, #3F693B 0%, #5a8a54 100%);
  
  @media (max-width: 1200px) {
    padding: 4rem 3rem;
    padding-left: calc(80px + 3rem);
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`

export const CTATitle = styled.h2`
  font-size: 3rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  
  @media (max-width: 640px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`

export const CTADescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

export const PrimaryButton = styled.a`
  display: inline-block;
  background: white;
  color: #3F693B;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 640px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2.2rem;
    font-size: 1rem;
    width: 90%;
    max-width: 280px;
  }
`

export const SecondaryButton = styled.a`
  display: inline-block;
  background: transparent;
  color: white;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.15rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #3F693B;
    transform: translateY(-3px);
  }
  
  @media (max-width: 640px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2.2rem;
    font-size: 1rem;
    width: 90%;
    max-width: 280px;
  }
`