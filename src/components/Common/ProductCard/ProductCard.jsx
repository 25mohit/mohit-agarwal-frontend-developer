import Tooltip from "../../HOC/Tooltip/Tooltip"
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"

const ProductCard = ({ data, handeModal,setRocketID }) => {

  const handleOpen = (rocketID) => {
    console.log(rocketID);
    handeModal(true)
    setRocketID(rocketID)
  }

  return (
    <div className="product-card-1 cursor-pointer flex-col gap-4 rounded aspect-video p-6 tracking-widest">
      <nav className="flex justify-between  items-center">
        <h1 className="text-2xl">{`${data?.rocket_name}`}</h1>
        <button className="open-btn" onClick={() => handleOpen(data?.rocket_id)}>&gt;</button>
      </nav>
      <div className="flex flex-wrap gap-6 text-gray-200">
        <span><Tooltip content="Engine Propellant 1">{data?.engines?.propellant_1}</Tooltip></span>
        <span><Tooltip content="Engine Propellant 2">{data?.engines?.propellant_2}</Tooltip></span>
      </div>
      <div className="flex gap-3 flex-wrap text-gray-200">
        <span><Tooltip content="Cost per Launch"><CurrencyConverter amount={data?.cost_per_launch}/></Tooltip></span>
        <span>-</span>
        <span><Tooltip content={`Height of the Rocket : ${data?.height?.feet} Feet / ${data?.height?.meters} Meter`}>{data?.height?.feet}Feet</Tooltip></span>
        <span>-</span>
        <span><Tooltip content={`Total Weight : ${data?.mass?.kg} KG / ${data?.mass?.lb} LB`}>{data?.mass?.kg} KG</Tooltip></span>
      </div>
      <span className={`${data?.active ? 'bg-green-600' : 'bg-red-500'} w-fit text-sm px-2 py-1 rounded-md"`}>{data?.active ? 'ACTIVE' : "INACTIVE"}</span>
      <p>Country : <b>{data?.country}</b></p>
    </div>
  )
}

export default ProductCard