import Image from 'next/image'
import Button from '../ux/Button'

/**
 * Componente responsável pela estrutura visual
 * da seção Hero da página.
 *
 * As classes CSS utilizadas neste componente são definidas
 * no arquivo global `globals.css` e são responsáveis pela
 * estilização e pelo layout de cada elemento.
 *
 * Classes utilizadas:
 *
 * - `hero` — define o layout principal da seção Hero.
 * - `hero__content` — organiza o conteúdo textual da seção.
 * - `hero__title` — define a estilização do título principal.
 * - `hero__description` — define a estilização da descrição.
 * - `hero__image` — define o layout e a estilização da imagem.
 */
const Hero = () => {
  return (
    /* ------- HERO ------ */
    <div className='hero'>

      {/* -------- HERO TITTLE ------- */}
      <div className='hero__content '>
        <h1 className='hero__title'>
          Mais que carros, confiança para seguir em frente.
        </h1>
        <p className='hero__description'>
          Seu próximo carro começa aqui.
        </p>

       
        <Button
          type='button'
          title='Click-me e explore mais carros.'
          variant='primary'
        >
          Explorar Carros
        </Button>

      </div>

      {/* -------- HERO IMAGE -------- */}
      <div className='hero__image'>
        <Image
          src={"/hero.png"}
          alt='hero'
          fill
          className='object-contain z-10'
        />
        <Image
          src={"/hero-bg.png"}
          alt='hero'
          fill
          className='object-contain z-0'
        />
      </div>
    </div>
  )
}

export default Hero
