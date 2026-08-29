/**
 * Função REJEX responsável por renderizar layout da kilometragem do veiculo.
 * Objetivo é criar uma separação nas casas decimais exibindo uma separação nos digitos.
 * 
 * Estrutura esperada:
 *  - 1 = 1
 *  - 10 = 10
 *  - 100 = 100
 *  - 1000 = 1.000
 *  - 10000 = 10.000
 *  - 100000 = 100.000
 * 
 * ATENÇÃO:
 * Alteração desse arquivo reflete em todos os arquivos que utilizam esse compoanente.
 * 
 * @param value - Valor do texto 
 */

const formattedKm = (value: string) => {
    const km = String(value).replace(/\D/g, "").slice(0, 6)

    return km.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export default formattedKm
