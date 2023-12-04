import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`
export const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  h3 {
    align-self: center;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  strong {
    color: black;
  }
`
export const Div2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  box-sizing: border-box;

  div {
    img {
      max-width: 300px;
      height: auto;
      border-radius: 6px;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 1rem 2rem;

      p {
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 1.5;
        font-size: 0.9rem;
      }
    }
  }
`
