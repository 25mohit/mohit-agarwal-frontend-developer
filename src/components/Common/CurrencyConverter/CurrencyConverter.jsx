const CurrencyConverter = ({amount}) => {
  return (
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR', minimumFractionDigits:0, maximumFractionDigits:0 }).format(
        amount || 0,
      )
  )
}

export default CurrencyConverter