import Tooltip from "../../HOC/Tooltip/Tooltip"
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"

const ProductCard = ({ data, ind}) => {
  return (
    <div className="product-card-1 cursor-pointer flex-col gap-4 rounded aspect-video p-6 tracking-widest">
      <h1 className="text-2xl">{`${data?.rocket_name}`}</h1>
      <div className="flex flex-wrap gap-6 text-gray-200">
        <span>{data?.engines?.propellant_1}</span>
        <span>{data?.engines?.propellant_2}</span>
      </div>
      <div className="flex gap-6 flex-wrap text-gray-200">
        <span><Tooltip content="Total Production Cost"><CurrencyConverter /></Tooltip></span>
        <span>-</span>
        <span><Tooltip content={`Height of the Rocket : ${data?.height?.feet} Feet / ${data?.height?.meters} Meter`}>{data?.height?.feet}Feet</Tooltip></span>
        <span>-</span>
        <span><Tooltip content={`Total Weight : ${data?.mass?.kg} KG / ${data?.mass?.lb} LB`}>{data?.mass?.kg} KG</Tooltip></span>
      </div>
      <span className="bg-green-600 w-fit text-sm px-2 py-1 rounded-md">ACTIVE</span>
      <p>Country : <b>{data?.country}</b></p>
    </div>
  )
}

export default ProductCard