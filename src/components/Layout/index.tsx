'use client'

import Header from '../Header'
import Footer from '../Footer'
import { Container } from './styles'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
