import { IProduct } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_CART = 'ADD_PRODUCT_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
}


export function addProductToCart(products: IProduct){
  return{
    type: ActionTypes.ADD_PRODUCT_CART,
    payload: products
  }
}

export function removeProductToCart(id: number){
  return{
    type: ActionTypes.REMOVE_PRODUCT_CART,
    payload: id
  }
}
