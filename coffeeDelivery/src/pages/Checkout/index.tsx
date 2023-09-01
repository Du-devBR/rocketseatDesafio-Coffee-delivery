
import { useContext, useEffect, useReducer, useState } from "react";
import { Forms } from "../../components/Forms"
import { Summary } from "../../components/Summary"
import { CheckoutContainer } from "./style"
import { orderReducer } from "../../reducer/order/reducer";
import { submitOrderProducts } from "../../reducer/order/action";
import { ProductsContext } from "../../context/ProductsContext";
import { IDataUser } from "../../components/Forms/components/Address";
import { IProduct } from "../../reducer/products/reducer";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export interface IDataPayment extends IDataUser {
  payment: string;
  products: IProduct[]
}

export function Checkout(){

  const navigate = useNavigate()

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

  const {} = orderState
  // console.log(user)

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

  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    setDataPayment({ ...dataPayment, products: products})
  }, [products])

  function submitOrderUser(){
    const { complement, ...fieldsWithoutComplement } = dataPayment;
    const isFildEmpty = Object.values(fieldsWithoutComplement).some(value => value === '')
    if(!isFildEmpty){
      dispatch(submitOrderProducts(dataPayment))
      setResetForm(true)
      toast.success("Compra efetuada com sucesso.")

      setTimeout(() => {
        navigate("/success")
      }, 1500);
    }else {
      toast.error("Por favor preencha todos os campos")
    }
  }

  function handleDataAddress(dataAddress: IDataUser){
    setDataPayment((prevData) => ({ ...prevData, ...dataAddress }));
    setResetForm(false)
  }

  function handleDataPayment(paymentMethod: string){
    setDataPayment((prevData) => ({ ...prevData, payment: paymentMethod }));
  }

  return(
    <CheckoutContainer>
      <ToastContainer autoClose={500} />
      <Forms
        onHandleDataAddress={handleDataAddress}
        onHandleDataPayment={handleDataPayment}
        onResetForm={resetForm}
      />
      <Summary onDispatch={submitOrderUser}/>
    </CheckoutContainer>
  )
}
