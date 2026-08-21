import Image from 'next/image'
import Link from 'next/link'
/**
 * Componente responsável por renderizar imagem de logo tipo,
 * manter a consistencia de estilzação e padronização.
 * 
 * ATENÇÃO:
 * Alteração nesse componente pode refletir em todos os
 * outros componentes que os utilizam.
 * @returns - Componete de Imagem utilizado para renderizar logo tipo da empresa.
 */
const ImageLogo = () => {
    return (
        <Link href={"/"} className='relative w-20 h-full'>
            <Image
                src={"/logo.png"}
                alt='Imagem icone do logotipo.'
                title='Logotipo'
                fill
                priority
                quality={75}
                sizes='100vh'
                className=' object-contain cursor-pointer '
            />
        </Link>
    )
}

export default ImageLogo
