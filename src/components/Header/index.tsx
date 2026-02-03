'use client'

import Link from 'next/link'
import { HeaderContainer, Nav } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Escola</h1>
      <Nav>
        <Link href="/inicio">Início</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/alunos">Alunos</Link>
      </Nav>
    </HeaderContainer>
  )
}
