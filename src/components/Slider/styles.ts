'use client'

import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

export const Slide = styled.div`
  min-width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`
