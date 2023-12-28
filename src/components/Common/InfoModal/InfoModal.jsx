const InfoModal = ({ setShowInfoModal }) => {
  return (
    <div className="fixed z-10 flex items-center justify-center w-full h-full top-0 left-0 info-modal" onClick={() => setShowInfoModal(false)}>
        <div className="inner rounded-2xl p-8 flex flex-col gap-3" onClick={e => e.stopPropagation()}>
          <section className="flex gap-4">
            <div className="w-3/5 flex flex-col">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-5">
                  <h1 className="text-4xl">Falcone 1 Rocket</h1>
                  <p className="text-sm text-gray-600 leading-6">The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."</p>
                </div>
                <div className="text-gray-500 text-md flex flex-col gap-1">
                  <p>Republic of the Marshall</p>
                  <div className="flex gap-7">
                    <p>$67,00,000</p>
                    <p>03-Jul-2023</p>
                    <p>2 Stage</p>
                  </div>
                  <div className="flex justify-between">
                    <p>P : Low Earth Orbit</p>
                    <p className="text-white"><b>40%</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 flex flex-col gap-4">
              <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2V0fGVufDB8fDB8fHww" alt="" />
              <div className="flex gap-2 img-container">
                <img className="rounded" src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2V0fGVufDB8fDB8fHww" alt="" />
                <img className="rounded" src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2V0fGVufDB8fDB8fHww" alt="" />
                <img className="rounded" src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2V0fGVufDB8fDB8fHww" alt="" />
              </div>
            </div>
          </section>
          <section className="my-2">
            <h3 className="text-sm tracking-widest">ENGINES</h3>
            <div className="flex gap-6 flex-wrap">
              <span>Engine Loss : 0</span>
              <span>ISP : Sea Level = 267 / Vacuum = 304</span>
            </div>
          </section>
          <section className="my-2">
            <h3 className="text-sm tracking-widest">FIRST STAGE</h3>
            <div className="flex gap-6 flex-wrap">
              <span>Engine Loss : 0</span>
              <span>ISP : Sea Level = 267 / Vacuum = 304</span>
            </div>
          </section>
          <section className="my-2">
            <h3 className="text-sm tracking-widest">SECOND STAGE</h3>
            <div className="flex gap-6 flex-wrap">
              <span>Engine Loss : 0</span>
              <span>ISP : Sea Level = 267 / Vacuum = 304</span>
            </div>
          </section>
        </div>
    </div>
  )
}

export default InfoModal