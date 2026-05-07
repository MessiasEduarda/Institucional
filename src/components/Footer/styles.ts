import styled from 'styled-components'

const GREEN_DARK = '#222222'
const GREEN_MID = '#dddddd'
const GREEN_LIGHT = '#dddddd'

const NAVBAR_WIDTH = '80px'

export const FooterWrapper = styled.footer`
  background: linear-gradient(160deg, ${GREEN_DARK} 0%, #222222 100%);
  color: white;
  width: 100%;
  padding-left: ${NAVBAR_WIDTH};

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

export const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;

  @media (max-width: 968px) {
    padding: 2.5rem 1.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1.5rem;
  }
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FooterSchoolName = styled.div`
  font-family: var(--font-cabourg-bold);
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
`

export const FooterSchoolSubtitle = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 2px;
`

export const FooterTagline = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  margin: 0;
`

export const FooterColumnTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 0.75rem;
`

export const FooterColumnDivider = styled.div`
  width: 24px;
  height: 2px;
  background: ${GREEN_LIGHT};
  border-radius: 2px;
  margin-bottom: 1.25rem;
`

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FooterLink = styled.a`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`

export const FooterContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

export const FooterContactIcon = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${GREEN_LIGHT};
  flex-shrink: 0;
  margin-top: 2px;
`

export const FooterContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`

export const FooterContactLabel = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
`

export const FooterContactValue = styled.span`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
`

export const FooterDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 2.5rem 0 1.75rem;
`

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const FooterBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const FooterCopyright = styled.p<{ $small?: boolean }>`
  font-size: ${props => props.$small ? '0.75rem' : '0.85rem'};
  color: ${props => props.$small ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.5)'};
  margin: 0;
`

export const FooterSocialLinks = styled.div`
  display: flex;
  gap: 0.6rem;
`

export const FooterSocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${GREEN_MID};
    border-color: ${GREEN_MID};
    color: white;
    transform: translateY(-2px);
  }
`