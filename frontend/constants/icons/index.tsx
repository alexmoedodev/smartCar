import {
    BookOpenCheck,
    Car,
    Home,
    Info,
    Mail,
    MapPinCheckInside,
    Menu,
    PhoneCall,
    X
} from "lucide-react"

/**
 * Centraliza os ícones utilizados pela aplicação.
 *
 * O objetivo deste arquivo é manter os ícones organizados em um único local,
 * facilitando a manutenção, substituição e padronização da aparência dos ícones.
 *
 * Os ícones são organizados de acordo com sua finalidade dentro da aplicação,
 * evitando que diferentes partes do projeto precisem definir individualmente
 * propriedades que devem seguir um padrão.
 *
 * ATENÇÃO:
 * Alterações realizadas neste arquivo podem afetar todos os componentes que
 * utilizam os ícones aqui definidos.
 *
 * Caso um componente precise de uma configuração específica, como tamanho,
 * espessura ou outra propriedade diferente do padrão, considere utilizar o
 * ícone diretamente do lucide-react em vez de alterar a configuração global.
 */

/**
 * Tamanho padrão utilizado pelos ícones da aplicação.
 *
 * Centralizar esse valor permite alterar o tamanho padrão dos ícones
 * sem precisar modificar cada utilização individualmente.
 */
const sizeDefaultIcon: number = 20

const iconDefault = {

    /**
     * Ícones utilizados principalmente na navegação lateral
     * (sidebar) da aplicação.
     */
    sidebar: {
        home: <Home size={sizeDefaultIcon} />,
    },

    /**
     * Ícones relacionados à navegação geral da aplicação.
     */
    navigation: {
    },

    /**
     * Ícones relacionados às informações de contato.
     */
    contact: {
        phone: <PhoneCall size={sizeDefaultIcon} />,
        email: <Mail size={sizeDefaultIcon} />,
    },

    /**
     * Ícones relacionados aos veículos.
     */
    vehicle: {
        car: <Car size={sizeDefaultIcon} />,
    },

    /**
     * Ícones utilizados principalmente em botões
     * e elementos que possuem comportamento de ação.
     */
    button: {
        menu: <Menu size={sizeDefaultIcon} />,
        close: <X size={sizeDefaultIcon} />,
    },

    /**
     * Ícones de uso geral que não pertencem
     * especificamente a outro grupo.
     */
    others: {
        info: <Info size={sizeDefaultIcon} />,
        map: <MapPinCheckInside size={sizeDefaultIcon} />,
        about: <BookOpenCheck size={sizeDefaultIcon} />,
    },
}

export default iconDefault