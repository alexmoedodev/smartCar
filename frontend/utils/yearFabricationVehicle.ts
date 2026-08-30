/**
 * Função que reenderizar os anos de fabricação dos veiculos
 * iniciando pelo ano `initYear` até o ano atual que é gerado de forma dinamica e automatica
 * pegando o valor do ano atual.
 * @returns - Array com os anos apartir do ano inicial.
 */

const currentYear = new Date().getFullYear()
const initYear:number = 1950

const yearFabricationVehicle = Array.from(
    { length: currentYear - initYear + 1 },
    
    (_, index) => currentYear - index

)
export default yearFabricationVehicle

