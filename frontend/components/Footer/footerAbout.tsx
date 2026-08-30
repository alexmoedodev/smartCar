/**
 * SOBRE-NÓS
 * Configuração dos itens de navegação do Footer - Sobre-nós.
 * 
 * Centraliza as informação utilizadas para renderizar os links de navegação facilitando a adição
 * e remoção em um unico arquivo.
 * 
 * ATENÇÃO:
 * As alterções realizadas nesse arquivo são refletidas automaticamente nos 
 * componentes qye utilizam.
 * 
 * `label` - Texto exibido no link de navegação.
 * `title` - Texto exibido como tooltip ao passar o cursor sobre o link.
 * `href` -  URL destino.
 * `icon` - Ícone correspondente ao item de navegação.
 */

import uiIcons from "@/constants/uiIcons"
/**
 * Tamanho padrão do icone renderização.
 */
const iconSizeDefault: number = 18

const footerAbout = [
    {
        label: "Horários de Funcionamento",
        title: "Horários de funcionamento.",
        href: "/horarios-funcionamento-agencia",
        icon: uiIcons.others.timer,
        iconSize: iconSizeDefault
    },
    {
        label: "Contatos",
        title: "Número para contato.",
        href: "/contato-agencia",
        icon: uiIcons.contact.phone,
        iconSize: iconSizeDefault
    },
    {
        label: "Localização",
        title: "Nossa localização.",
        href: "/localizacao-agencia",
        icon: uiIcons.others.map,
        iconSize: iconSizeDefault
    },
    {
        label: "Sobre-nós",
        title: "Saiba mais sobre-nós.",
        href: "/sobre-nos-agencia",
        icon: uiIcons.others.about,
        iconSize: iconSizeDefault
    },
]

export default footerAbout
