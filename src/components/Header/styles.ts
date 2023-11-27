import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;

  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  color: ${(props) => props.theme['base-nav']};

  background: ${(props) => props.theme['base-white']};

  div {
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
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
    }
  }
`
