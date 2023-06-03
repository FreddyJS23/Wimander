import { Backdrop } from '@mui/material'
import LoaderSpinner from './LoaderSpinner'


const DisplayLoader = () => {
  return (
    <Backdrop open={true}>  <LoaderSpinner /> </Backdrop>
  )
}

export default DisplayLoader