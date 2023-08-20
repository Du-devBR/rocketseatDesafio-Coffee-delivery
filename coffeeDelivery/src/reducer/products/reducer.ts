import { ActionTypes } from "./action";

export interface IProduct {
  id: number | undefined;
  picture: string | undefined;
  name: string | undefined;
  price: number | undefined
}

interface IProductstate {
  products: IProduct[]
}

export function productsReducer(state: IProductstate, action: any){
  switch(action.type){
    case ActionTypes.ADD_PRODUCT_CART:
      return{
        ...state,
        products: [...state.products, action.payload]
      }
    default:
      return state
  }
}
