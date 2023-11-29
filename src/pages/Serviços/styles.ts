import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  background-color: ${(props) => props.theme['base-background']};
  color: black;
`

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  gap: 2rem;
  padding: 5rem;
`
export const ServicesBloc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    border: 1px transparent black;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 700;
    background-color: ${(props) => props.theme['base-nav']};
    color: ${(props) => props.theme['base-white']};

    text-align: center;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-nav']};
      color: ${(props) => props.theme['base-white']};
    }
  }
`

export const DetailsBloc = styled.div`
  max-width: 50%;
`

export const ServicesLink = styled.button<{ selected: boolean }>`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;

  span {
    display: ${({ selected }) => (selected ? 'initial' : 'none')};
    position: absolute;
    left: -2rem;
  }
`

export const DivDetails = styled.div<{ transition: boolean }>`
  transition: opacity 1s linear;
  opacity: ${({ transition }) => (transition ? 1 : 0.5)};
  width: 480px;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  div {
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: ${(props) => props.theme['purple-base']};
    gap: 0.2rem;

    h3 {
      font-size: 0.9rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-white']};
    }

    p {
      color: ${(props) => props.theme['purple-light']};
      font-size: 0.8rem;
    }
  }
`
