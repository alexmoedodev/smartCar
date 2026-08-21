
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


const Footer = () => {
    /**
     * Responsável por renderizar ano que a
     * empresa foi fundada
     */
    const dateAgency = 2026

    return (
        <footer className="flex flex-col p-8 w-full mx-auto">
            <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 md:gap-8 px-6 ">

                {/* ------- LOGO TIPO -------- */}
                <div className="flex flex-col text-black text-sm md:w-1/3">
                    <ImageLogo />
                    <p>LA Soluções -  Smart Agency {dateAgency}</p>
                    <p>&copy; Todos os Direitos Reservados.</p>
                </div>


                {/* ------- NAVEGATION -------- */}
                <div className="flex flex-col gap-8 sm:flex-row sm:justify-between  p-4 mx-auto w-full md:max-w-2/3">
                    {/* -------- COMPANY ------- */}
                    <nav>
                        <ul className="flex flex-col gap-4">
                            <span className="font-bold text-black">Empresa</span>
                            {footerCompany.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.label}>
                                        <Link title={item.title} href={item.href} className="flex items-center justify-start gap-2 text-black text-sm">
                                            <Icon size={item.iconSize} />
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* -------- SOCIAL MEDIA ------- */}
                    <nav>
                        <ul className="flex flex-col gap-4">
                            <span className="font-bold text-black">Redes Sociais</span>
                            {footerSocialMedia.map((item) => {
                                return (
                                    <li key={item.label}>
                                        <Link title={item.title} href={item.href} className="flex items-center justify-start gap-2 text-black text-sm">
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

                    {/* ------- ABOUT -------- */}
                    <nav>
                        <ul className="flex flex-col gap-4">
                            <span className="font-bold text-black">Sobre-nós</span>
                            {footerAbout.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.label} className="">
                                        <Link title={item.title} href={item.href} className="flex items-center justify-start gap-2 text-black text-sm">
                                            <Icon size={item.iconSize} /> {item.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </div>


            </div>

            <div className="flex flex-wrap items-center justify-center text-center mt-18 mx-auto text-xs md:text-sm text-gray gap-1">
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