import style from '../../styles/buttonBurger.module.css'

export const ButtonBurger = ({handleClick,cheked}:any) => {
  return (
   <>
   
   <label  className={style["burger"]} htmlFor="burger">
        <input onClick={handleClick} type="checkbox" id="burger" checked={cheked}  />
    <span></span>
    <span></span>
            <span></span>
        </label>
   
   
   </>
   
  )
}

