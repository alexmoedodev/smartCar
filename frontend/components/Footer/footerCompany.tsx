import uiIcons from "@/constants/uiIcons";

/**
 * EMPRESA
 * Configuração dos itens de navegação exibidos no Footer.
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
 * `href`  - URL destino.
 * `icon`  - Ícone correspondente ao item de navegação.
 * `iconSize` - Define o tamanho do ícone.
 */

/**
 * Tamanho padrão definido para os icones.
 */
const iconSizeDefault: number = 15
const footerCompany = [
     {
        label: "Site",
        title: "Visite nosso Site.",
        href: "#",
        icon: uiIcons.others.globe,
        iconSize: iconSizeDefault
    },
     {
        label: "Eventos",
        title: "Saiba mais sobre os nosso evento.",
        href: "#",
        icon: uiIcons.others.calendar,
        iconSize: iconSizeDefault
    },
     {
        label: "E-mail",
        title: "Envie nos um e-mail caso necessário.",
        href: "#",
        icon: uiIcons.contact.email,
        iconSize: iconSizeDefault
    },
   
]

export default footerCompany
