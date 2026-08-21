import {
    BookOpenCheck,
    Building2,
    Calendar,
    Car,
    Globe,
    Home,
    Info,
    Mail,
    MapPinCheckInside,
    Menu,
    PhoneCall,
    Timer,
    X
} from "lucide-react"

/**
 * SVG - Icones Redes sociais 
 */
import Instagram from "@/constants/icons/socialMedia/instagram.svg"
import Facebook from "@/constants/icons/socialMedia/facebook.svg"
import X_SocialMedia from "@/constants/icons/socialMedia/x.svg"
import TikTok from "@/constants/icons/socialMedia/tiktok.svg"
import WhatsApp from "@/constants/icons/socialMedia/whatsapp.svg"

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


const iconDefault = {
    /**
     * Ícones utilizados principalmente na navegação lateral
     * (sidebar) da aplicação.
     */
    sidebar: {
        home: Home ,
        company: Building2 
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
        phone: PhoneCall ,
        email: Mail,
    },

    /**
     * Ícones relacionados aos veículos.
     */
    vehicle: {
        car: Car ,
    },

    /**
     * Ícones utilizados principalmente em botões
     * e elementos que possuem comportamento de ação.
     */
    button: {
        menu:Menu ,
        close: X,
    },

    /**
     * Ícones de uso geral que não pertencem
     * especificamente a outro grupo.
     */
    others: {
        info: Info,
        map: MapPinCheckInside ,
        about: BookOpenCheck ,
        timer: Timer,
        calendar: Calendar ,
        globe: Globe,
    },


     /**
      * Icons em SVG 
      * Necessário ser componente imagem para renderização.
      */
    socialMedia: {
        instagran: Instagram, 
        faceboock: Facebook,
        whatsApp: WhatsApp,
        x: X_SocialMedia,
        tiktok: TikTok,
        
    }
}

export default iconDefault