import style from '../styles/radioButton.module.css'

interface RadioButtonInterface{
  titulo:string
  name:string,
  value:string | number
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const RadioButton = ({titulo,name,value,handleChange}:RadioButtonInterface) => {
  return (
    
 <div className={style['container']} >
     <label className={style['cl-checkbox']}>
        <input onChange={handleChange} name={name} value={value}  type="radio"/>
        <span> <span className={style['texto']}>{titulo}</span> </span>
    </label>
    
   
    
 </div>

  )
}

export default RadioButton