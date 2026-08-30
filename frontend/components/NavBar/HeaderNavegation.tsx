import uiIcons from "@/constants/uiIcons"

/**
 * Configuração dos itens de navegação exibidos no Header.
 *
 * Centraliza as informações utilizadas para renderizar os links
 * de navegação, permitindo adicionar, remover ou alterar um item
 * em um único local. As alterações realizadas nesta configuração
 * são refletidas automaticamente nos componentes que a utilizam.
 *
 * Propriedades:
 *
 * `label` - Texto exibido no link de navegação.
 * `title` - Texto exibido como tooltip ao passar o cursor sobre o link.
 * `icon` - Ícone correspondente ao item de navegação.
 */

const sizeIconDefault:number = 20
const headerNavigation = [
    {
        label: "Veiculos",
        title: "Explore nossos veicúlos.",
        icon: uiIcons.vehicle.car,
        sizeIcon: sizeIconDefault,
    },
    {
        label: "Contatos",
        title: "Nossos numero de contatos.",
        icon: uiIcons.contact.phone,
        sizeIcon: sizeIconDefault,
    },
    {
        label: "Localização",
        title: "Nossa localização.",
        icon: uiIcons.others.map,
        sizeIcon: sizeIconDefault,
    },
    {
        label: "Sobre-nós",
        title: "Click e saiba mais sobre nós",
        icon: uiIcons.others.about,
        sizeIcon: sizeIconDefault,
    },
]

export default headerNavigation
