const Button = props => {
  return (
    <button className={`p-4 button hover:bg-slate-600 duration-200 uppercase tracking-widest`} {...props}>{props.children}</button>
  )
}

export default Button