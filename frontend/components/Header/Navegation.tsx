import iconDefault from "@/constants/icons"

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
const headerNavigation = [
    {
        label: "Veiculos",
        title: "Explore nossos veicúlos.",
        icon: iconDefault.vehicle.car
    },
    {
        label: "Contatos",
        title: "Nossos numero de contatos.",
        icon: iconDefault.contact.phone
    },
    {
        label: "Localização",
        title: "Nossa localização.",
        icon: iconDefault.others.map
    },
    {
        label: "Sobre-nós",
        title: "Click e saiba mais sobre nós",
        icon: iconDefault.others.about
    },
]

export default headerNavigation