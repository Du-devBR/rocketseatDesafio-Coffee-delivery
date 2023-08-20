import { ActionTypes } from "./action";

export interface IProduct {
  id?: number;
  picture: string | undefined;
  name: string | undefined;
  price: number | undefined
}

interface IProductstate {
  products: IProduct[];
  countItens: number;
  quant: 0;
}

export function productsReducer(state: IProductstate, action: any){
  switch(action.type){
    case ActionTypes.ADD_PRODUCT_CART:
      const { products, quant } = action.payload;

      const productsToAdd = Array.from({ length: quant }, () => ({ ...products }));
      return{
        ...state,
        products: [...state.products, ...productsToAdd],
        countItens: state.countItens + quant
      }
    case ActionTypes.REMOVE_PRODUCT_CART:
      const indexToRemove = state.products.findIndex(product => product.id === action.payload);
      if (indexToRemove !== -1) {
        const newProducts = [...state.products.slice(0, indexToRemove), ...state.products.slice(indexToRemove + 1)];
        return {
          ...state,
          products: newProducts,
          countItens: state.countItens - 1
        };
      }
      return state;
    default:
      return state
  }
}
