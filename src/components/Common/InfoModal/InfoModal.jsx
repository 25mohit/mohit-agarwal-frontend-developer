import { useEffect, useState } from "react"
import { getSingleRocketByRocketId } from "../../../API"
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"
import Tooltip from "../../HOC/Tooltip/Tooltip"
import Button from "../../HOC/Button/Button"
import Loading from "../../HOC/Loading/Loading"

const InfoModal = ({ setShowInfoModal, rocketID }) => {

  const [modalData, setModalData] = useState({})
  const [currentImage, setCurrentImage] = useState('')

  useEffect(() => {
    if(rocketID !==null){
      getSingleRocketByRocketId(rocketID, setModalData)
    }
  },[rocketID])

  useEffect(() => {
    if(modalData){
      setCurrentImage(modalData?.flickr_images?.[0])
    }
  },[modalData])

  return (
    <div className="fixed z-10 flex items-center justify-center w-full h-full top-0 left-0 info-modal" onClick={() => setShowInfoModal(false)}>
        <div className="inner justify-center rounded-2xl p-8 flex-col gap-3 cursor-default" onClick={e => e.stopPropagation()}>
          <button className="close" onClick={() => setShowInfoModal(false)}>X</button>
          {modalData && Object.keys(modalData)?.length > 0 ? <div className="scrollable">
            <section className="flex gap-4 modal-stats-section">
              <div className="w-3/5 flex flex-col full-on-mobile">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-4xl">{modalData?.rocket_name}</h1>
                    <p className="text-sm text-gray-200 leading-6">{modalData?.description}</p>
                  </div>
                  <div className="text-gray-200 text-md flex flex-col gap-1">
                    <p>{modalData?.country}</p>
                    <div className="flex flex-wrap gap-7">
                      <p><Tooltip content="Project Cost Per Launch"><CurrencyConverter amount={modalData?.cost_per_launch}/></Tooltip></p>
                      <p><Tooltip content="First Flight Date">{modalData?.first_flight}</Tooltip></p>
                      <p>{modalData?.stages} Stage</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="capitalize"><Tooltip content="Rocket Leg's Material">{modalData?.landing_legs?.material}</Tooltip></p>
                      <p className="text-white"><Tooltip content="Project Success Rate"><b>{modalData?.success_rate_pct}%</b></Tooltip></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 flex flex-col gap-4 full-on-mobile">
                <img src={currentImage} alt="SpaceX Rocket Image" />
                <div className="flex gap-2 img-container">
                  {
                    modalData?.flickr_images?.map((img, ind) => <img onClick={() => setCurrentImage(img)} src={img} key={ind} alt={`Rocket Flicker Image ${ind}`} className="cursor-pointer"/>)
                  }
                </div>
              </div>
            </section>

            <section className="my-2 modal-stats-section">
              <h3 className="text-sm tracking-widest">ENGINES</h3>
              <div className="flex gap-6 flex-wrap">
                <Tooltip content="Maximun Loss"><span>Loss : {modalData?.engines?.engine_loss_max}</span></Tooltip>
                <span className="flex">ISP :&nbsp;
                  <Tooltip content="Engine ISP Sea Level"> {modalData?.engines?.isp?.sea_level}&nbsp;</Tooltip> / 
                  <Tooltip content="Engine ISP Vacuum">&nbsp;{modalData?.engines?.isp?.vacuum}</Tooltip>
                </span>
                <span><Tooltip content="Engine's 1 Propellant">{modalData?.engines?.propellant_1}</Tooltip></span>
                <span><Tooltip content="Engine's 2 Propellant">{modalData?.engines?.propellant_2}</Tooltip></span>
                <span className="flex">TSL : <Tooltip content={`Thrust Sea Level : ${modalData?.engines?.thrust_sea_level?.kN}kN / ${modalData?.engines?.thrust_sea_level?.lbf}lbf`} > &nbsp;{modalData?.engines?.thrust_sea_level?.kN} kN</Tooltip></span>
                <span className="flex">TV : <Tooltip content={`Thrust Vacume : ${modalData?.engines?.thrust_vacuum?.kN}kN / ${modalData?.engines?.thrust_vacuum?.lbf}lbf`}> &nbsp;{modalData?.engines?.thrust_vacuum?.kN} kN</Tooltip></span>
                <span className="flex">Type : <Tooltip content="Engine Type"> &nbsp;{modalData?.engines?.type}</Tooltip></span>
                <span className="flex">Version : <Tooltip content="Engine Version"> &nbsp;{modalData?.engines?.version}</Tooltip></span>
              </div>
            </section>

            {modalData?.first_stage && Object.keys(modalData?.first_stage)?.length > 0 &&
            <section className="my-2 modal-stats-section">
              <h3 className="text-sm tracking-widest">FIRST STAGE</h3>
              <div className="flex gap-6 flex-wrap">
                <span className="flex">Burn Time : <Tooltip content="Burn Time in sec">&nbsp;{modalData?.first_stage?.burn_time_sec}</Tooltip></span>
                {modalData?.first_stage?.cores && <span className="flex">Cores : <Tooltip content="Total Cores Avaiable in First Stage">&nbsp;{modalData?.first_stage?.cores}</Tooltip></span>}
                <span className="flex">Engines : <Tooltip content="Total no. of Engines in First Stage">&nbsp;{modalData?.first_stage?.engines}</Tooltip></span>
                <span className="flex">Fuel Amount : <Tooltip content="Fuel Amount Consumption in Tons">&nbsp;{modalData?.first_stage?.fuel_amount_tons}</Tooltip></span>
                <span className="flex">TSL : <Tooltip content={`Thrust Sea Level : ${modalData?.first_stage?.thrust_sea_level?.kN}kn / ${modalData?.first_stage?.thrust_sea_level?.lbf}lbf`}>&nbsp;{modalData?.first_stage?.thrust_sea_level?.kN}kN</Tooltip></span>
                <span className="flex">Thrust Vacuum : <Tooltip content={`Thrust Volume : ${modalData?.first_stage?.thrust_vacuum?.kN}kn / ${modalData?.first_stage?.thrust_vacuum?.lbf}lbf`}>&nbsp;{modalData?.first_stage?.thrust_vacuum?.kN}kN</Tooltip></span>
              </div>
            </section>}

            {modalData?.second_stage && Object.keys(modalData?.second_stage)?.length > 0 &&
            <section className="my-2 modal-stats-section">
              <h3 className="text-sm tracking-widest">SECOND STAGE</h3>
              <div className="flex gap-6 flex-wrap">
                <span className="flex">Burn Time : <Tooltip content="Burn Tim in sec">&nbsp;{modalData?.second_stage?.burn_time_sec}</Tooltip></span>
                <span className="flex">Engines : <Tooltip content="Total no. of Engines in Second Stage">&nbsp;{modalData?.second_stage?.engines}</Tooltip></span>
                <span className="flex">Fuel Amount : <Tooltip content="Fuel Amount Consumption in Tons">&nbsp;{modalData?.second_stage?.fuel_amount_tons}</Tooltip></span>
                <span className="flex">Thrust : <Tooltip content={`Thrust : ${modalData?.second_stage?.thrust?.kN}kn / ${modalData?.second_stage?.thrust?.lbf}lbf`}>&nbsp;{modalData?.second_stage?.thrust?.kN}kN</Tooltip></span>
                <span className="flex">Payload : <Tooltip content="Payload Option Name">&nbsp;{modalData?.second_stage?.payloads?.option_1}</Tooltip></span>
                <span>
                  <Tooltip content={`Second Stage Payload Diameter : 
                    ${modalData?.second_stage?.payloads?.composite_fairing?.diameter?.feet}Feet / 
                    ${modalData?.second_stage?.payloads?.composite_fairing?.diameter?.meters}meters`}>
                      D : {modalData?.second_stage?.payloads?.composite_fairing?.diameter?.feet}Feet
                  </Tooltip>
                </span>
                <span>
                  <Tooltip content={`Second Stage Payload Height : 
                    ${modalData?.second_stage?.payloads?.composite_fairing?.height?.feet}Feet / 
                    ${modalData?.second_stage?.payloads?.composite_fairing?.height?.meters}meters`}>
                      H : {modalData?.second_stage?.payloads?.composite_fairing?.height?.feet}Feet
                  </Tooltip>
                </span>
                <span><Tooltip content="Project Success Rate">{modalData?.success_rate_pct}%</Tooltip></span>
              </div>
            </section>}

            <Button><a href={modalData?.wikipedia} target="_blank">MORE INFO</a></Button>
          </div> :
          <Loading />}
        </div>
    </div>
  )
}

export default InfoModal