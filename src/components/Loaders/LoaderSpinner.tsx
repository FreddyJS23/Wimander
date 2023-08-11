import style from '../../styles/loaderSpinner.module.css'

export const LoaderSpinner = () => {
  return (
    <div id='spinner' className={`${style['spinner']}`}></div>
  )
}

