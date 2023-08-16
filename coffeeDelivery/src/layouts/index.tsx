import {Outlet} from 'react-router-dom'

export function DefaultLayout(){
  return(
    <div>
      <h1>Hello word</h1>
      <Outlet />
    </div>
  )
}
