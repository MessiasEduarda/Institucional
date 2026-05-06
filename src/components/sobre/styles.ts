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
    background: rgba(0, 0, 0, 0.65);
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

export const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 4rem;
  padding-left: calc(80px + 4rem);
  background: #f8f9fa;
  
  @media (max-width: 1200px) {
    padding: 3.5rem 3rem;
    padding-left: calc(80px + 3rem);
    gap: 1.5rem;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 2rem;
    padding-left: calc(80px + 2rem);
  }
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  
  @media (max-width: 640px) {
    padding: 2.5rem 1.5rem;
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
  }
`

export const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 640px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.3rem;
  }
`

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #3F693B;
  margin-bottom: 0.5rem;
  
  @media (max-width: 968px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

export const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
  
  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

// Timeline Styles
export const TimelineSection = styled.section`
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

export const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #3F693B, #5a8a54);
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`

export const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #3F693B;
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #3F693B;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    flex-direction: row !important;
    padding-left: 60px;
    
    &::before {
      left: 30px;
    }
  }
`

export const TimelineYear = styled.div`
  width: 45%;
  text-align: right;
  padding-right: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #3F693B;
  font-family: var(--font-cabourg-bold);
  
  @media (max-width: 768px) {
    width: auto;
    position: absolute;
    left: 0;
    top: 0;
    padding-right: 0;
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const TimelineContent = styled.div`
  width: 45%;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

export const TimelineTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.8rem;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const TimelineDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

// Values Section
export const ValuesSection = styled.section`
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

export const ValueCard = styled.div`
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`

export const ValueIcon = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    
    svg {
      width: 56px;
      height: 56px;
    }
  }
`

export const ValueTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #3F693B;
  margin-bottom: 1.5rem;
  font-family: var(--font-cabourg-bold);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
`

export const ValueDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

// Team Section - CAROUSEL PROFISSIONAL SEM CORTES
export const TeamSection = styled.section`
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

export const CarouselWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 968px) {
    max-width: 650px;
  }
  
  @media (max-width: 640px) {
    max-width: 90%;
  }
`

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`

export const CarouselSlide = styled.div<{ $active: boolean }>`
  display: ${props => props.$active ? 'block' : 'none'};
  width: 100%;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`

export const TeamMember = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`

export const MemberImage = styled.div`
  width: 100%;
  height: 550px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 968px) {
    height: 420px;
  }
  
  @media (max-width: 640px) {
    height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
  }
`

export const MemberInfo = styled.div`
  padding: 2.5rem;
  text-align: center;
  background: white;
  
  @media (max-width: 640px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

export const MemberName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`

export const MemberRole = styled.div`
  font-size: 1.2rem;
  color: #3F693B;
  font-weight: 600;
  margin-bottom: 1.5rem;
  
  @media (max-width: 640px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const MemberBio = styled.p`
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
  
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const CarouselButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 275px;
  ${props => props.$position}: -60px;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 10;
  color: #3F693B;
  
  &:hover {
    background: #3F693B;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 968px) {
    top: 210px;
    ${props => props.$position}: -15px;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 640px) {
    top: 175px;
    ${props => props.$position}: -10px;
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 480px) {
    top: 150px;
    ${props => props.$position}: 5px;
    width: 36px;
    height: 36px;
  }
`

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-top: 1.5rem;
  }
`

export const CarouselDot = styled.button<{ $active: boolean }>`
  width: ${props => props.$active ? '40px' : '12px'};
  height: 12px;
  border-radius: 6px;
  border: none;
  background: ${props => props.$active ? '#3F693B' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? '#3F693B' : '#bbb'};
  }
  
  @media (max-width: 480px) {
    width: ${props => props.$active ? '32px' : '10px'};
    height: 10px;
  }
`

// Quote Section
export const QuoteSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #1a3a18 0%, #2d5c28 40%, #3F693B 70%, #5a8a54 100%);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 4.5rem 3rem;
    padding-left: calc(80px + 3rem);
  }

  @media (max-width: 968px) {
    padding: 3.5rem 2rem;
    padding-left: calc(80px + 2rem);
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`

export const QuoteContent = styled.div`
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`

export const QuoteText = styled.blockquote`
  font-size: 1.65rem;
  font-style: italic;
  line-height: 1.75;
  margin: 0 0 2rem;
  font-weight: 300;
  letter-spacing: 0.01em;

  &::before {
    content: '';
    display: block;
    width: 48px;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 auto 2rem;
    border-radius: 2px;
  }

  @media (max-width: 968px) {
    font-size: 1.4rem;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`

export const QuoteAuthor = styled.cite`
  display: inline-block;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 2rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`