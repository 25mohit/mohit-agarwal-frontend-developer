const CapsuleCard = ({ data }) => {
  return (
    <div className="capsule-card p-4 flex flex-col gap-2 rounded-md cursor-pointer">
        <nav className="flex gap-2 items-center">
            <h1 className="text-2xl">{data?.type} &nbsp; ${data?.capsule_serial}</h1>
            <span className={`text-white text-sm rounded-md p-1 px-2 ${data?.status === 'active' ? 'bg-green-500' : 'bg-red-500' }`}>active</span>
        </nav>
        <span className="text-gray-600 custom-bg">Landing : <b>{data?.landings}</b></span>
        {
            data?.missions?.map((mission, ind) => <span key={ind} className="text-gray-500 custom-bg">Mission {ind + 1} : {mission.name} / Flights : {mission?.flight}</span>)
        }
    </div>
  )
}

export default CapsuleCard