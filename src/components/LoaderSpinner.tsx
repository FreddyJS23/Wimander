import style from '../styles/loaderSpinner.module.css'

const LoaderSpinner = () => {
  return (
    <div id='spinner' className={`${style['spinner']}`}></div>
  )
}

export default LoaderSpinner