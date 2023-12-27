const ToogleSwitch = ({ currentState, changeState }) => {
  return (
    <div className='toogle-switch border-white border-2 w-fit p-1'>
        <button className={`${currentState === 'rocket' ? 'bg-slate-600' : 'bg-slate-400'} p-3`} onClick={() => changeState('rocket')}>R</button>
        <button className={`${currentState === 'capsule' ? 'bg-slate-600' : 'bg-slate-400'} p-3`} onClick={() => changeState('capsule')}>C</button>
    </div>
  )
}

export default ToogleSwitch