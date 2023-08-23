import { ActionTypes } from "./action";

export interface IProduct {

  product: {
    id?: number;
    picture: string | undefined;
    name: string | undefined;
    price: number
  }
  quant: number
}

interface IProductstate {
  products: IProduct[];
  countItens: number;
}

export function productsReducer(state: IProductstate, action: any){
  switch(action.type){
    case ActionTypes.ADD_PRODUCT_CART:

      const teste = state.products.findIndex(product => product.product.id === action.payload.product.id);
      if(teste !== -1){
        const teste2 = [...state.products]
        teste2[teste].quant += action.payload.quant
        return{
          ...state,
          products: teste2,
          countItens: state.countItens + action.payload.quant,
        }
      }else{
        const newProduct = { ...action.payload, quant: action.payload.quant};
        return {
          ...state,
          products: [...state.products, newProduct],
          countItens: state.countItens + action.payload.quant
        };
      }

    case ActionTypes.REMOVE_PRODUCT_CART:
      const productRemove = state.products.find(product => product.product.id === action.payload);
      if (productRemove) {

        const newProducts = state.products.filter(product => product.product.id !== action.payload)
        return {
          ...state,
          products: newProducts,
          countItens: state.countItens - productRemove.quant,
        };
      }
      return state;

    case ActionTypes.REMOVE_QUANT_ITEM:

      const updatedItemsProductsAdd = state.products.map(product => {
        if (product.product.id === action.payload) {
          const updatedQuant = product.quant - 1;
          return {
            ...product,
            quant: updatedQuant >= 0 ? updatedQuant : 0,
          };
        }
        return product;
      });
    return {
      ...state,
      products: updatedItemsProductsAdd,
      countItens: state.countItens - 1
    }

    case ActionTypes.ADD_QUANT_ITEM:
      const updatedItemsProductsRemove = state.products.map(product => {
        if (product.product.id === action.payload) {
          const updatedQuant = product.quant + 1;
          return {
            ...product,
            quant: updatedQuant >= 0 ? updatedQuant : 0,
          };
        }
        return product;
      });
    return {
      ...state,
      products: updatedItemsProductsRemove,
      countItens: state.countItens + 1
    }
    default:
      return state
  }
}
