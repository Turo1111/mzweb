import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
`

export const Container = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: #09f;

  animation: ${spin} 1s ease infinite;
`
