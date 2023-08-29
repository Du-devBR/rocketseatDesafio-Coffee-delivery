import { IDataPayment } from "../../components/Forms";

export enum ActionTypes {
  SUBMIT_ORDER = 'SUBMIT_ORDER',
}

export function submitOrderProducts(order: IDataPayment){
  return{
    type: ActionTypes.SUBMIT_ORDER,
    payload: order
  }
}
