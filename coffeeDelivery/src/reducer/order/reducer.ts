
import { IDataPayment } from "../../pages/Checkout";
import { ActionTypes } from "./action";


interface IOrderState {
  user: IDataPayment;

}

export function orderReducer(state:IOrderState , action: any){
  switch(action.type){
    case ActionTypes.SUBMIT_ORDER:
      localStorage.setItem('order', JSON.stringify(action.payload))
      return{
        ...state,
        user: action.payload,
      }
      default: {
        return state
      }
  }

}
