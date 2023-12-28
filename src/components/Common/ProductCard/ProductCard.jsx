import Tooltip from "../../HOC/Tooltip/Tooltip"

const ProductCard = ({ data, ind}) => {
  return (
    <div className="product-card-1 cursor-pointer flex-col gap-4 rounded aspect-video p-6 tracking-widest">
      <h1 className="text-2xl">{`${data?.rocketName}`}</h1>
      <div className="flex flex-wrap gap-6 text-gray-200">
        <span>Liquid Oxygen</span>
        <span>RP-1 Kerosene</span>
      </div>
      <div className="flex gap-6 flex-wrap text-gray-200">
        <span><Tooltip content="Total Production Cost">$6.7M</Tooltip></span>
        <span>-</span>
        <span><Tooltip content="Height of the Rocket">73 Feet</Tooltip></span>
        <span>-</span>
        <span><Tooltip content="Total Weight">30.1KG</Tooltip></span>
      </div>
      <span className="bg-green-600 w-fit text-sm px-2 py-1 rounded-md">ACTIVE</span>
      <p>Country : <b>United States</b></p>
    </div>
  )
}

export default ProductCard