import { User } from "./types"

const mockedUser: User = {
  firstName: "Andrew",
  lastName: "Benedictsonn",
  wallet: {
    balance: 1412.32,
    address: "BEN-5647988444-LL",
  },
  transactionHistory: [
    {
      id: "R_WP_06_04_2022_13_54",
      amount: 154.98,
      date: new Date(2022, 3, 6, 13, 54),
    },
    {
      id: "R_WP_06_04_2022_10_14",
      amount: 154.98,
      date: new Date(2022, 3, 6, 10, 14),
    },
  ],
}

export { mockedUser }
