import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />

        <nav>
          <ul>
            <li>Início</li>
            <li>Vlv Advogados</li>
            <li>Nossos Serviços</li>
            <li>Equipe</li>
            <li>Fale Conosco</li>
          </ul>
        </nav>
      </div>{' '}
    </HeaderContainer>
  )
}
