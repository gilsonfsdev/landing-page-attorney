import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 1.5rem;

  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  color: ${(props) => props.theme['base-nav']};

  background: ${(props) => props.theme['base-white']};
  z-index: 1;

  div {
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 1200px) {
      max-width: 900px;
    }
  }

  img {
    height: 40px;
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      margin-left: 1.5rem;
      font-weight: bold;
      cursor: pointer;

      @media (max-width: 600px) {
        margin-left: 0.6rem;
        font-size: 0.8rem;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-nav']};
      transition: 0.2s all ease-in-out;

      &:hover {
        color: ${(props) => props.theme['purple-base']};
      }
    }
  }
`
