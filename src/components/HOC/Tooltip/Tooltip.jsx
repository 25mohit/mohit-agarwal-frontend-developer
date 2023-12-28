const Tooltip = props => {
  return (
    <div className="tooltip ">
      <span className="content rounded-lg">{props?.content}</span>
      <>{props?.children}</>
    </div>
  )
}

export default Tooltip