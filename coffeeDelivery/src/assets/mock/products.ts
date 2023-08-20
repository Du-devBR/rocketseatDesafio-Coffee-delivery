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
  id?: number,
  picture: string,
  types: string[],
  name: string,
  description: string,
  price: number,
}


export const products: IProducts[] = [
  {
    id: 1,
    picture: cafeExpresso,
    types: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
  },
  {
    id: 2,
    picture: cafeAmericano,
    types: ["tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  },
  {
    id: 3,
    picture: cafeExpressoCremoso,
    types: ["tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
  },
  {
    id: 4,
    picture: cafegelado,
    types: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
  },
  {
    id: 5,
    picture: cafeLeite,
    types: ["tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
  },
  {
    id: 6,
    picture: cafeLatte,
    types: ["tradicional", "com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
  },
  {
    id: 7,
    picture: capuccino,
    types: ["tradicional", "com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
  },
  {
    id: 8,
    picture: macciato,
    types: ["tradicional", "com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
  },
  {
    id: 9,
    picture: mochaccino,
    types: ["tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
  },
  {
    id: 10,
    picture: chocolateQuente,
    types: ["especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
  },
  {
    id: 11,
    picture: cafeCubano,
    types: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
  },
  {
    id: 12,
    picture: cafeHavaiano,
    types: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
  },
  {
    id: 13,
    picture: cafeArabe,
    types: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
  },
  {
    id: 14,
    picture: cafeIrlandes,
    types: ["especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
  },
]
