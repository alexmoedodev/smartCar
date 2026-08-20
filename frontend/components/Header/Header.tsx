"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../ux/Button'
import iconDefault from '@/constants/icons'
import headerNavigation from './Navegation'
import Link from 'next/link'

/**
 * Componente responsável pela estrutura e navegação principal
 * do Header da aplicação.
 *
 * O Header possui duas apresentações:
 *
 * - Desktop — exibe os links de navegação diretamente no Header.
 * - Mobile — exibe um botão que controla a abertura e o fechamento
 *   do menu lateral de navegação.
 *
 * Os itens de navegação são centralizados em `headerNavigation`,
 * permitindo adicionar, remover ou alterar links em um único local.
 *
 * As classes CSS específicas do Header são definidas no arquivo
 * global `globals.css`.
 *
 * Classes principais:
 *
 * - `header` — define o layout principal do Header.
 * - `header__content` — organiza o conteúdo interno do Header.
 * - `header__nav__desktop` — controla a navegação exibida no desktop.
 * - `header__ul__desktop` — estiliza a lista de navegação desktop.
 * - `header__ul__moblie` — estiliza a lista de navegação mobile.
 * - `header__li` — define o estilo dos itens de navegação.
 */
const Header = () => {

    const [showMenuNav, setShowMenuNav] = useState<boolean>(false)
    function handleToggleNavigation() {
        setShowMenuNav((prev) => !prev)
    }

    return (
        <header className='header'>
            <div className='header__content'>
                {/* ------- IMAGE LOGOTIPO ------- */}
                <div className='relative w-20 h-full'>
                    <Image
                        src={"/logo.png"}
                        alt='Imagem icone do logotipo.'
                        title='Logotipo'
                        fill
                        className='object-contain cursor-pointer'
                    />
                </div>

                {/* ------- NAVEGATION DESKTOP ------- */}
                <nav className='header__nav__desktop'>
                    <ul className='header__ul__desktop'>
                        {headerNavigation.map((nav)=> (
                            <li 
                            className='header__li'
                            key={nav.label}>
                                <Link href={"#"} className='flex items-center gap-2'>{nav.icon}{nav.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ------- NAVEGATION MOBLIE ------- */}
                <div className='flex flex-col md:hidden relative'>
                    {/* ----- Button responsável pela abertura do menu de navegação MOBLIE. -------  */}
                    <Button
                        title='Abrir menu de navegação.'
                        type='button'
                        variant='outline'
                        aria-label="Abrir menu de navegação."
                        onClick={handleToggleNavigation}
                    >
                        {iconDefault.button.menu}
                    </Button>

                    {/* ----- Menu lateral de navegação MOBLIE ------- */}
                    <div
                        className={`fixed inset-0 z-20 bg-neutral-950/90 transition-opacity duration-500
                            ${showMenuNav ? "opacity-100" : "opacity-0 pointer-events-none"}
                            `}
                            onClick={handleToggleNavigation}
                            >

                        <nav 
                        onClick={(e)=> e.stopPropagation()}
                        className={`bg-neutral-100 w-50 h-full absolute top-0 right-0 flex flex-col gap-4 transform transition-transform duration-500 ease-in-out
                               ${showMenuNav ? "translate-x-0" : "translate-x-full"
                            }
                                `}>
                            <div className='flex border-b border-gray-300 p-2'>
                                <Button
                                    title='Fechar menu de navegação.'
                                    type='button'
                                    variant='outline'
                                    aria-label="Fechar menu de navegação."
                                    onClick={handleToggleNavigation}
                                >
                                    <span className='text-red-600'>{iconDefault.button.close}</span>
                                </Button>
                            </div>
                            <ul className='header__ul__moblie'>
                                {headerNavigation.map((nav)=> (
                            <li 
                            className='header__li'
                            key={nav.label}>
                                <Link href={"#"} className='flex items-center gap-2'>{nav.icon} - {nav.label}</Link>
                            </li>
                        ))}
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
