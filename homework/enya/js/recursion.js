const orders = [
  {
    channel: "online",
    category: { main: "服飾", sub: "男裝" },
    products: [
      { product: "T-shirt", amount: 500 },
      {
        product: "Jeans",
        amount: 1200,
        addons: [{ name: "Gift Wrap", amount: 50 }],
      },
    ],
  },
  {
    channel: "online",
    category: { main: "配件", sub: "帽子" },
    products: [{ product: "Hat", amount: 300 }],
  },
  {
    channel: "retail",
    store: "台北門市",
    category: { main: "鞋類", sub: "運動鞋" },
    products: [{ product: "Shoes", amount: 2000 }],
  },
  {
    channel: "retail",
    store: "高雄門市",
    category: { main: "包包", sub: "手提包" },
    products: [
      {
        product: "Bag",
        amount: 1500,
        addons: [{ name: "Insurance", amount: 100 }],
      },
    ],
  },
];

const calculateFields = ["amount", "orderAmount", "money"];

function sumOrderAmount(orders) {
  let total = 0;

  if (Array.isArray(orders)) {
    orders.forEach((order) => (total += sumOrderAmount(order)));
  } else if (typeof orders === "object" && orders !== null) {
    for (let key in orders) {
      total +=
        calculateFields.indexOf(key) > -1
          ? orders[key]
          : sumOrderAmount(orders[key]);
    }
  }

  return total;
}

sumOrderAmount(orders);
