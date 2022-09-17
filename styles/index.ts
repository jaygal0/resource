import styled from 'styled-components'

interface Main {
  theme?: string
  background?: string
}

export const IndexMainContainer = styled.main<Main>`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  gap: 3.2rem;
  padding: 4.8rem;
  background: #e3e3e3;

  @media screen and (max-width: ${({ theme }) => theme.bp.phone}) {
    padding: 1.6rem;
  }
`
