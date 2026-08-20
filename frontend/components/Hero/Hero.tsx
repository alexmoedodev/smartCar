import Image from 'next/image'
import Button from '../ux/Button'

/**
 * Componente responsável por layout do Hero da página.
 * @param hero - class css está no arquivo global.css responsavel pela style do layout
 * @param hero__content - class css esta no arquivo glogal.css 
 * @param hero__title
 * @param hero__description
 * @param hero__image
 * 
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

        {/* ------- BUTTON VIEW MORE ------ */}
        <Button
          type='button'
          ariaLabel='Ver mais detalhes.'
          title='Ver mais detalhes.'
          variant='primary'
        >
          Ver mais detalhes
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
