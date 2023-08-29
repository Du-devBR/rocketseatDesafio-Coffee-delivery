
import { useContext, useEffect, useReducer, useState } from "react";
import { Forms } from "../../components/Forms"
import { Summary } from "../../components/Summary"
import { CheckoutContainer } from "./style"
import { orderReducer } from "../../reducer/order/reducer";
import { submitOrderProducts } from "../../reducer/order/action";
import { ProductsContext } from "../../context/ProductsContext";
import { IDataUser } from "../../components/Forms/components/Address";
import { IProduct } from "../../reducer/products/reducer";

export interface IDataPayment extends IDataUser {
  payment: string;
  products: IProduct[]
}

export function Checkout(){

  const {products} = useContext(ProductsContext)

  const [orderState, dispatch] = useReducer(orderReducer, {
    user: {
      id: '',
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      region: '',
      city: '',
      state: '',
      payment: '',
      products: []
    },
  });

  const {user} = orderState

  const [dataPayment, setDataPayment] = useState<IDataPayment>({
    id: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    region: '',
    city: '',
    state: '',
    payment: '',
    products: []
  });

  useEffect(() => {
    setDataPayment({ ...dataPayment, products: products })
  }, [products])

  function submitOrderUser(){
    dispatch(submitOrderProducts(dataPayment))
  }

  function handleDataAddress(dataAddress: IDataUser){
    setDataPayment((prevData) => ({ ...prevData, ...dataAddress }));
  }

  function handleDataPayment(paymentMethod: string){
    setDataPayment((prevData) => ({ ...prevData, payment: paymentMethod }));
  }


  return(
    <CheckoutContainer>
      <Forms
        onHandleDataAddress={handleDataAddress}
        onHandleDataPayment={handleDataPayment}
      />
      <Summary onDispatch={submitOrderUser} />
    </CheckoutContainer>
  )
}
