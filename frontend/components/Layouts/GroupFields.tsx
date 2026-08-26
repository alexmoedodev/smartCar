import React from "react"

type Props = {
    children: React.ReactNode
}
/**
 * Componente responsável por rederizar um layout padrão
 * para agrupar os elementos um ao lado do outro,
 * ocupando todo o espaçamento da linha.
 * 
 * Em telas pequenas os itens quebram a linha `(flex-wrap)`.
 * Apartir do brackpoint `sm` os elementos ficam uma ao lado do outro 
 * utilizando `(flex-nowrap)`
 * 
 * ATENÇÃO:
 * A alteração desse componente pode afetar todo o layout dos componentes
 * que renderizam o `GroupFields`.
 * 
 * @param children - Renderizar elementos um ao lado do outro conforme documentação a cima. 
 */

const GroupFields = ({ children }: Props) => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap w-full items-center gap-4">
            {children}
        </div>
    )
}

export default GroupFields