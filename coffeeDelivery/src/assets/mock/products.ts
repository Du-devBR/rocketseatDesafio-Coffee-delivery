import cafeAmericano from '../img/imgProducts/Type=Americano.png'
import cafegelado from '../img/imgProducts/Type=Café Gelado.png'
import cafeLeite from '../img/imgProducts/Type=Café com Leite.png'
import capuccino from '../img/imgProducts/Type=Capuccino.png'
import chocolateQuente from '../img/imgProducts/Type=Chocolate Quente.png'
import cafeCubano from '../img/imgProducts/Type=Cubano.png'
import cafeExpressoCremoso from '../img/imgProducts/Type=Expresso Cremoso.png'
import cafeExpresso from '../img/imgProducts/Type=Expresso.png'
import cafeHavaiano from '../img/imgProducts/Type=Havaiano.png'
import cafeIrlandes from '../img/imgProducts/Type=Irlandês.png'
import cafeLatte from '../img/imgProducts/Type=Latte.png'
import macciato from '../img/imgProducts/Type=Macchiato.png'
import mochaccino from '../img/imgProducts/Type=Mochaccino.png'
import cafeArabe from '../img/imgProducts/Type=Árabe.png'


export interface IProducts {
  picture: string,
  type: string[],
  name: string,
  description: string,
  price: number,
}


export const products: IProducts[] = [
  {
    picture: cafeExpresso,
    type: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
  },
  {
    picture: cafeAmericano,
    type: ["tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  },
  {
    picture: cafeExpressoCremoso,
    type: ["tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
  },
  {
    picture: cafegelado,
    type: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
  }
]
