import styled from 'styled-components'

// ─── Largura da navbar lateral fixa ───────────────────────────────────────────
// Ajuste esse valor se a sua navbar tiver largura diferente
const NAVBAR_WIDTH = '72px'

// ─── Largura máxima de cada botão ─────────────────────────────────────────────
const BUTTON_MAX_WIDTH = '280px'

// ─── Wrapper da seção ─────────────────────────────────────────────────────────

export const LinksWrapper = styled.div`
  width: 100%;
  /* Margem esquerda compensa a navbar fixa; direita fica igual */
  padding: 2rem calc(${NAVBAR_WIDTH} + 1.5rem) 2rem calc(${NAVBAR_WIDTH} + 1.5rem);

  @media (max-width: 1280px) {
    padding: 2rem 2rem 2rem calc(${NAVBAR_WIDTH} + 1rem);
  }

  @media (max-width: 1024px) {
    padding: 2rem 1.5rem 2rem calc(${NAVBAR_WIDTH} + 0.75rem);
  }

  @media (max-width: 768px) {
    /* Em tablet/mobile a navbar some ou vira hambúrguer — padding simétrico */
    padding: 2rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`

export const LinksTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.4rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

export const LinksSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
  }
`

// ─── Grid de botões ───────────────────────────────────────────────────────────
// justify-content: center garante que poucos botões não estiquem até a borda

export const ButtonsGrid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${({ $columns }) => Math.min($columns, 5)},
    minmax(0, ${BUTTON_MAX_WIDTH})
  );
  gap: 0.875rem;
  justify-content: center;

  /* ── Monitor grande (1280px+): até 5 colunas, máx 280px cada ── */
  @media (max-width: 1280px) {
    grid-template-columns: repeat(
      ${({ $columns }) => Math.min($columns, 4)},
      minmax(0, ${BUTTON_MAX_WIDTH})
    );
  }

  /* ── Notebook/tablet grande (1024px): até 3 colunas ── */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(
      ${({ $columns }) => Math.min($columns, 3)},
      minmax(0, ${BUTTON_MAX_WIDTH})
    );
  }

  /* ── Tablet (768px): até 2 colunas ── */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, ${BUTTON_MAX_WIDTH}));
  }

  /* ── Celular grande (480px): 2 colunas menores ── */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.625rem;
  }

  /* ── Celular pequeno (360px): 1 coluna ── */
  @media (max-width: 360px) {
    grid-template-columns: minmax(0, ${BUTTON_MAX_WIDTH});
  }
`

// ─── Botão individual ─────────────────────────────────────────────────────────

export const LinkButton = styled.a<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  /* Impede que o botão cresça além do máximo definido no grid */
  width: 100%;

  &:hover {
    border-color: ${({ $color }) => $color};
    box-shadow: 0 4px 12px ${({ $color }) => $color}30;
    transform: translateY(-2px);
    background: ${({ $color }) => $color}08;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.75rem;
    gap: 0.5rem;
    border-radius: 10px;
  }
`

export const LinkButtonIcon = styled.div<{ $color: string }>`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: ${({ $color }) => $color}18;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 8px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export const LinkButtonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
`

export const LinkButtonLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

export const LinkButtonDescription = styled.span`
  font-size: 0.75rem;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`