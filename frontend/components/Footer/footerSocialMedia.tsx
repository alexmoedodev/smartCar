import iconDefault from "@/constants/icons"
/**
 * REDES SOCIAS 
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

const footerSocialMedia = [
    {
        label: "Instagran",
        title: "Redes do sociais Instagran.",
        href: "#",
        icon: iconDefault.socialMedia.instagran,
        iconSize: iconSizeDefault
    },
    {
        label: "Faceboock",
        title: "Redes do sociais Faceboock.",
        href: "#",
        icon: iconDefault.socialMedia.faceboock,
        iconSize: iconSizeDefault
    },
    {
        label: "WhatsApp",
        title: "Redes do sociais WhatsApp.",
        href: "#",
        icon: iconDefault.socialMedia.whatsApp,
        iconSize: iconSizeDefault
    },
    {
        label: "TikTok",
        title: "Redes do sociais TikTok.",
        href: "#",
        icon: iconDefault.socialMedia.tiktok,
        iconSize: iconSizeDefault
    },
    {
        label: "X",
        title: "Redes do sociais X.",
        href: "#",
        icon: iconDefault.socialMedia.x,
        iconSize: iconSizeDefault
    },

]

export default footerSocialMedia