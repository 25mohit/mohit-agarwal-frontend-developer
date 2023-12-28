const ScreenLayout = props => {
  return (
    <section className='flex items-center screen-layout' style={{padding: props.noPadding && '0'}}>{props.children}</section>
  )
}

export default ScreenLayout