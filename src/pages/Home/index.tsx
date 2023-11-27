import { Container, Wrapper } from './styles'
import blogueira from '../../assets/blogueira.webp'

export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Advogados Especializados</h1>
          <p>
            Nós da VLV Advogados, estamos prontos para oferecer a você os
            melhores serviços jurídicos e a representação legal que você merece.
          </p>
          <a
            href="https://wa.me/5544998505620"
            target="_blank"
            rel="noreferrer"
          >
            Fale com a nossa equipe
          </a>
        </div>
        <img src={blogueira} alt="" />
      </Wrapper>
    </Container>
  )
}
