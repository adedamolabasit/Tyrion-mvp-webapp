import eth from "../assets/eth.svg";
import btc from "../assets/btc.svg";
import usdt from "../assets/usdt.svg";
import near from "../assets/near.svg";

const walletObjects = [
  {
    id: 1,
    name: "TYR",
    icon: eth,
    price: "20,000 tyrion",
    inDollar: "$ 19,600",
  },
  {
    id: 2,
    name: "ETH",
    icon: eth,
    price: "0.25 ETH",
    inDollar: "$ 20,000",
  },
  {
    id: 3,
    icon: btc,
    name: "BTC",
    price: "0.3 BTC",
    inDollar: "$ 2,400",
  },
  {
    id: 4,
    name: "USDT",
    icon: usdt,
    price: "100 USDT",
    inDollar: "$ 100",
  },
  {
    id: 4,
    name: "NEAR",
    icon: near,
    price: "25 NEAR",
    inDollar: "$ 340",
  },
];

export default walletObjects;
