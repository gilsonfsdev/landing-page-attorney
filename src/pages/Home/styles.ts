import styled from 'styled-components'

export const Container = styled.main`
  margin: 50px auto 0 auto;
  background-color: ${(props) => props.theme['blue-home']};
  color: ${(props) => props.theme['base-white']};

  h1 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 1.3;
  }
`

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 600px;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      width: 80%;
    }
  }

  img {
    max-height: 100%;
  }

  a {
    text-decoration: none;
    border: 1px transparent black;
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    width: 250px;
    font-weight: 700;
    background-color: ${(props) => props.theme['base-nav']};
    color: ${(props) => props.theme['base-white']};

    text-align: center;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['base-white']};
      color: ${(props) => props.theme['base-nav']};
    }
  }
`
