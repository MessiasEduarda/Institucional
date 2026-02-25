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
  font-size: 4rem;
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

export const CTAButton = styled.a`
  display: inline-block;
  background: white;
  color: #3F693B;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
  }
  
  @media (max-width: 640px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 375px) {
    padding: 0.75rem 1.5rem;
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
    img {
      height: 500px;
    }
  }
  
  @media (max-width: 968px) {
    img {
      height: 400px;
      border-radius: 16px;
    }
  }
  
  @media (max-width: 640px) {
    img {
      height: 320px;
    }
  }
  
  @media (max-width: 480px) {
    img {
      height: 280px;
      border-radius: 12px;
    }
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
    h2 {
      font-size: 2.2rem;
    }
    
    p {
      font-size: 1.05rem;
    }
  }
  
  @media (max-width: 968px) {
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
  
  @media (max-width: 640px) {
    h2 {
      font-size: 1.75rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 1.2rem;
    }
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    gap: 1.2rem;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    padding: 2rem 1.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    color: white;
    
    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 0.95rem;
      opacity: 0.9;
    }
  }
  
  &:hover {
    img {
      transform: scale(1.1);
    }
    
    .overlay {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 968px) {
    height: 280px;
    border-radius: 12px;
  }
  
  @media (max-width: 640px) {
    height: 250px;
    
    .overlay {
      padding: 1.5rem 1.2rem;
      
      h3 {
        font-size: 1.15rem;
      }
      
      p {
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    height: 220px;
    
    .overlay {
      padding: 1.2rem 1rem;
      
      h3 {
        font-size: 1.05rem;
        margin-bottom: 0.3rem;
      }
      
      p {
        font-size: 0.85rem;
      }
    }
  }
`

export const TestimonialSection = styled.section`
  padding: 5rem 4rem;
  padding-left: calc(80px + 1rem);
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
    padding: 3rem 2rem;
    padding-left: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`

export const TestimonialCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #3F693B;
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-left-width: 3px;
  }
`

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
`

export const TestimonialAuthor = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const TestimonialRole = styled.div`
  font-size: 0.95rem;
  color: #888;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const CTASection = styled.section`
  background: #3F693B;
  padding: 5rem 4rem;
  padding-left: calc(80px + 1rem);
  margin: 0;
  
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

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`

export const CTATitle = styled.h2`
  font-size: 2.8rem;
  font-family: var(--font-cabourg-bold);
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
`

export const CTAText = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.95;
  
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.8rem;
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
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.05rem;
  }
  
  @media (max-width: 640px) {
    padding: 1rem 2.2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
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
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #3F693B;
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.05rem;
  }
  
  @media (max-width: 640px) {
    padding: 1rem 2.2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
    width: 90%;
    max-width: 280px;
  }
`