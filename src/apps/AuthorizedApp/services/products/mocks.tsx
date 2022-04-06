import Avocado from "../../../../components/Icons/products/Avocado"
import ChilliPepper from "../../../../components/Icons/products/ChilliPepper"
import Cucumber from "../../../../components/Icons/products/Cucumber"
import Eggplant from "../../../../components/Icons/products/Eggplant"
import Garlic from "../../../../components/Icons/products/Garlic"
import Kiwi from "../../../../components/Icons/products/Kiwi"
import Lemon from "../../../../components/Icons/products/Lemon"
import Lettuce from "../../../../components/Icons/products/Lettuce"
import Onion from "../../../../components/Icons/products/Onion"
import Peach from "../../../../components/Icons/products/Peach"
import Peas from "../../../../components/Icons/products/Peas"
import Pepper from "../../../../components/Icons/products/Pepper"
import Tomato from "../../../../components/Icons/products/Tomato"
import { Product } from "./types"

const mockedProducts: Product[] = [
  {
    id: 1,
    name: "Tomato",
    description: null,
    price: 15.0,
    unit: "kg",
    image: <Tomato />,
  },
  {
    id: 2,
    name: "Peas",
    description: null,
    price: 14.0,
    unit: "kg",
    image: <Peas />,
  },
  {
    id: 3,
    name: "Pepper",
    description: null,
    price: 12.0,
    unit: "piece",
    image: <Pepper />,
  },
  {
    id: 4,
    name: "Avocado",
    description: null,
    price: 20.0,
    unit: "piece",
    image: <Avocado />,
  },
  {
    id: 5,
    name: "Chilli Pepper",
    description: null,
    price: 8.0,
    unit: "kg",
    image: <ChilliPepper />,
  },
  {
    id: 6,
    name: "Cucumber",
    description: null,
    price: 12.0,
    unit: "kg",
    image: <Cucumber />,
  },
  {
    id: 7,
    name: "Eggplant",
    description: null,
    price: 9.5,
    unit: "kg",
    image: <Eggplant />,
  },
  {
    id: 8,
    name: "Garlic",
    description: null,
    price: 4.0,
    unit: "kg",
    image: <Garlic />,
  },
  {
    id: 9,
    name: "Kiwi",
    description: null,
    price: 13.2,
    unit: "piece",
    image: <Kiwi />,
  },
  {
    id: 10,
    name: "Lemon",
    description: null,
    price: 6.8,
    unit: "kg",
    image: <Lemon />,
  },
  {
    id: 11,
    name: "Lettuce",
    description: null,
    price: 2.2,
    unit: "piece",
    image: <Lettuce />,
  },
  {
    id: 12,
    name: "Onion",
    description: null,
    price: 2.4,
    unit: "kg",
    image: <Onion />,
  },
  {
    id: 13,
    name: "Peach",
    description: null,
    price: 7.8,
    unit: "kg",
    image: <Peach />,
  },
]

export { mockedProducts }
