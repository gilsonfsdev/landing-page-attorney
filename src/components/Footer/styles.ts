import styled from 'styled-components'

export const Container = styled.footer`
  background: ${(props) => props.theme['footer-blue']};
`

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 1100px;
`

export const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  color: white;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 30%;
      bottom: 30%;
      right: -1.5rem;
      width: 1px;
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  h5 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    text-align: center;
  }
`
export const Div2 = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style-type: none;

  li {
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 100%;
  }

  a {
    color: white;
  }
`

export const Div3 = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  img {
    height: 2rem;
  }
`
export const Div4 = styled.div`
  margin: 0 auto;
  padding: 1.5rem 0;
  text-align: center;
  color: white;
  background-color: ${(props) => props.theme['footer-blue-dark']};
  font-size: 0.8rem;

  span {
    color: ${(props) => props.theme['base-label']};
  }
`
