import SearchHeader from "C/SearchHeader"
import './../globals.css'
import { Toaster } from "react-hot-toast"
const layout = ( { children } ) => {
  return (
    <div>
        <SearchHeader />
      { children }
      <Toaster toastOptions={
      {duration: 700,}
      }/>
    </div>
  )
}

export default layout
