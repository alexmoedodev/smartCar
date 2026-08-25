
// React - Next
import Image from "next/image"
import Link from "next/link"

// Component
import footerSocialMedia from "@/components/Footer/footerSocialMedia"
import footerAbout from "@/components/Footer/footerAbout"
import footerCompany from "@/components/Footer/footerCompany"
import ImageLogo from "@/components/LogoTipo/ImageLogo"

// Utils
import yearCurrent from "@/utils/formattedDateYear"

/**
 * Componente responsável pela estrutura e apresentação
 * do Footer da aplicação.
 *
 * Organiza as informações institucionais, navegação da empresa,
 * redes sociais, informações sobre a aplicação e copyright.
 *
 * Os conteúdos de navegação são definidos separadamente em
 * arquivos de configuração e renderizados dinamicamente,
 * permitindo adicionar ou alterar links sem modificar
 * a estrutura principal do componente.
 *
 * A estilização estrutural do Footer é centralizada no
 * `globals.css` por meio das classes `.footer` e seus elementos,
 * mantendo o JSX mais enxuto e consistente.
 */
const Footer = () => {
    /**
     * Responsável por renderizar ano que a
     * empresa foi fundada
     */
    const agencyFoundedYear = 2026

    return (
        <footer className="footer">
            <div className="footer__content">
               {/* Logo e identificação da empresa. */}
                <div className="footer__logoTipo">
                    <ImageLogo />
                    <p>LA Soluções -  Smart Agency {agencyFoundedYear}</p>
                    <p>&copy; Todos os Direitos Reservados.</p>
                </div>


                {/* ------- NAVEGATION -------- */}
                <div className="footer__navegation">
                    {/* Links institucionais e de navegação. */}
                    <nav>
                        <ul className="footer__ul">
                            <span className="footer__span">Empresa</span>
                            {footerCompany.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.label}>
                                        <Link title={item.title} href={item.href} className="footer__link">
                                            <Icon size={item.iconSize} />
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Links das redes sociais.*/}
                    <nav>
                        <ul className="footer__ul">
                            <span className="footer__span">Redes Sociais</span>
                            {footerSocialMedia.map((item) => {
                                return (
                                    <li key={item.label}>
                                        <Link title={item.title} href={item.href} className="footer__link">
                                            <Image
                                                src={item.icon}
                                                alt={item.label}
                                                width={item.iconSize}
                                                height={item.iconSize}
                                            />

                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Links sobre a nós. */}
                    <nav>
                        <ul className="footer__ul">
                            <span className="footer__span">Sobre-nós</span>
                            {footerAbout.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.label} className="">
                                        <Link title={item.title} href={item.href} className="footer__link">
                                            <Icon size={item.iconSize} /> {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer__copy">
                <span>
                    &copy;{yearCurrent()} - Desenvolvido por
                </span>

                <Link
                    className="font-semibold hover:text-primary"
                    href={"https://lasolucoes.com.br"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LA Soluções Comerciais
                </Link>
            </div>

        </footer>
    )
}

export default Footer