import Galaxy from "../../HOC/Galaxy/Galaxy"

const ScreenLayout = props => {
  return (
    <section className='flex items-center screen-layout' style={{padding: props.noPadding && '0'}}>
      {props?.showGalaxy === true  && props?.showGalaxy !== undefined && 
        <div className="wrapper">
          <Galaxy />
        </div>
      }
      {props.children}
    </section>
  )
}

export default ScreenLayout