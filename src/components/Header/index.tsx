import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />

        <nav>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#servico">Serviços</a>
            </li>

            <li>
              <a href="#perguntas">Perguntas Frequentes</a>
            </li>
            <li>
              <a href="#footer">Fale Conosco</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}
