import { IProduct } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_CART = 'ADD_PRODUCT_CART',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
  REMOVE_QUANT_ITEM = 'REMOVE_QUANT_ITEM',
  ADD_QUANT_ITEM = 'ADD_QUANT_ITEM',
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

export function removeQuantityItems(id: number){
  return{
    type: ActionTypes.REMOVE_QUANT_ITEM,
    payload: id
  }
}


export function addQuantityItems(id: number){
  return{
    type: ActionTypes.ADD_QUANT_ITEM,
    payload: id
  }
}
