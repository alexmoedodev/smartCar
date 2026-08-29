const formattedCurrency = (value: number) => {
    const currency = new Number(value).toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency"
    })

    return currency
}

export default formattedCurrency