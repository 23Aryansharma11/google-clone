import SearchHeader from "C/SearchHeader"
import './../globals.css'
import { Toaster } from "react-hot-toast"
import { Suspense } from "react"
const layout = ( { children } ) => {
  return (
    <div>
      <Suspense>
        <SearchHeader />
      </Suspense>
      { children }
      <Toaster toastOptions={
      {duration: 700,}
      }/>
    </div>
  )
}

export default layout
