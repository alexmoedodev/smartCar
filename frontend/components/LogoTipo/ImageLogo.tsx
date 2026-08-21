import Image from 'next/image'
import Link from 'next/link'
/**
 * Componente responsável por renderizar imagem de logo tipo,
 * manter a consistencia de estilzação e padronização.
 * 
 * Pode ser utilizado em diversos locais diferentes.
 * 
 * ATENÇÃO:
 * Alteração nesse componente pode refletir em todos os
 * outros componentes que os utilizam.
 */
const ImageLogo = () => {
    return (
        <Link href={"/"} className='w-20 h-auto'>
            <Image
                src={"/logo.png"}
                alt='Imagem icone do logotipo.'
                title='Logotipo'
                 width={150}
                 height={150}
                className=' object-contain cursor-pointer '
            />
        </Link>
    )
}

export default ImageLogo
