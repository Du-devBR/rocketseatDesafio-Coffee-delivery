import { ContainerCounter } from "./style";

export function Counter({onSome}){
  return(
    <ContainerCounter>
      <button></button>
      <span>0</span>
      <button onClick={onSome}></button>
    </ContainerCounter>
  )
}
