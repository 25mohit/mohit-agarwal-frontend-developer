const CurrencyConverter = () => {
  return (
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
        67000000,
      )
  )
}

export default CurrencyConverter