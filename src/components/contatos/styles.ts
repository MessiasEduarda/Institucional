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

export const ContactGrid = styled.div`
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

export const ContactCard = styled.div`
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`

export const ContactIcon = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  
  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContactLink = styled.a`
  color: #3F693B;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    color: #2d4d2a;
    text-decoration: underline;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const MapSection = styled.section`
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

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 968px) {
    height: 450px;
  }
  
  @media (max-width: 640px) {
    height: 400px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    height: 350px;
  }
`

export const MapOverlay = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
  
  @media (max-width: 640px) {
    top: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
  }
`

export const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  max-width: 350px;
  
  @media (max-width: 640px) {
    padding: 1.5rem;
    max-width: 100%;
    border-radius: 12px;
  }
`

export const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`

export const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const SocialSection = styled.section`
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

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`

export const SocialCard = styled.a`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 2px solid #f0f0f0;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    border-color: #3F693B;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(63, 105, 59, 0.15);
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`

export const SocialIcon = styled.div`
  color: #3F693B;
  transition: transform 0.3s ease;
  
  ${SocialCard}:hover & {
    transform: scale(1.1);
  }
`

export const SocialTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const SocialHandle = styled.div`
  font-size: 1rem;
  color: #666;
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const FAQSection = styled.section`
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
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${props => props.$isOpen ? '#3F693B' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isOpen ? '0 4px 20px rgba(63, 105, 59, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
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