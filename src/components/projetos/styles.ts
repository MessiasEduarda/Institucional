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
    background: rgba(0, 0, 0, 0.6);
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

export const FeaturedProject = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0;
  margin: 0;
  background: white;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    min-height: 600px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
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

export const ProjectContent = styled.div`
  padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  
  @media (max-width: 1200px) {
    padding: 4rem 3rem;
  }
  
  @media (max-width: 968px) {
    padding: 3rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const ProjectTag = styled.span`
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

export const ProjectTitle = styled.h2`
  font-size: 2.8rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
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

export const ProjectDescription = styled.p`
  font-size: 1.15rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #666;
  font-size: 1rem;
  
  svg {
    color: #3F693B;
    flex-shrink: 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`

export const ProcessSection = styled.section`
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

export const ProcessTimeline = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  overflow-x: auto;
  padding-bottom: 2rem;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #3F693B;
    border-radius: 10px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #3F693B, #5a8a54);
    z-index: 0;
  }
  
  @media (max-width: 968px) {
    flex-direction: column;
    overflow-x: visible;
    
    &::before {
      display: none;
    }
  }
`

export const ProcessStep = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 968px) {
    min-width: 100%;
  }
`

export const StepNumber = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3F693B 0%, #5a8a54 100%);
  color: white;
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 20px rgba(63, 105, 59, 0.3);
  font-family: var(--font-cabourg-bold);
  
  @media (max-width: 640px) {
    width: 70px;
    height: 70px;
    font-size: 1.7rem;
  }
`

export const StepContent = styled.div`
  text-align: center;
`

export const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.8rem;
  
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  
  @media (max-width: 640px) {
    font-size: 0.95rem;
  }
`

export const CTASection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 4rem);
  background: #fff;
  
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
  color: #333;
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
  color: #666;
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

export const CTAButton = styled.a`
  display: inline-block;
  background: #3F693B;
  color: #ececec;
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
  }
`