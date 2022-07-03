import { getId } from "../utils/index";

export const list = [
  {
    label: "União Sugar",
    countdown_label: "",
    additional_information: "1kg",
    category: "Non Perishable",
    weight: 1,
    weightUnit: "kg",
    img_url:
      "https://pitangabrasil.se/____impro/1/webshopmedia/Acucar%20uniao-1524043011382.jpg?&withoutEnlargement&resize=960,9999",
  },
  {
    label: "Färsk milk",
    additional_information: "3% fat",
    countdown_label: "14 days left",
    category: "Dairy",
    weight: 1,
    weightUnit: "liter",
    img_url:
      "https://assets.icanet.se/t_product_large_v1,f_auto/7310865000194.jpg",
  },
  {
    label: "Prarie Gold Wheat",
    weight: 1,
    weightUnit: "kg",
    category: "Non Perishable",
    img_url: "http://sc04.alicdn.com/kf/HTB18rnFRVXXXXXvaFXXq6xXFXXXn.jpg",
  },
  {
    label: "Coffee Brazil",
    img_url: "https://m.media-amazon.com/images/I/71ua8UmizRL._SL1400_.jpg",
    category: "Non Perishable",
    weight: 1,
    weightUnit: "kg",
  },
  {
    label: "Färsk milk",
    additional_information: "3% fat",
    countdown_label: "14 days left",
    category: "Dairy",
    weight: 1,
    weightUnit: "liter",
    isConsumed: true,
    img_url:
      "https://assets.icanet.se/t_product_large_v1,f_auto/7310865000194.jpg",
  },
  {
    label: "Garlic",
    additional_information: "fat 0.0g, calories 4.5",
    countdown_label: "16 days left",
    category: "Perishable",
    weight: 420,
    weightUnit: "g",
    img_url: "https://i.imgur.com/FOo9Pfb.png",
  },
  {
    label: "Aloe Vera",
    additional_information: "calories 8, fat 0.7",
    countdown_label: "21 days left",
    category: "Perishable",
    weight: 120,
    weightUnit: "g",
    img_url: "https://i.imgur.com/FGlbwEF.png",
  },
  {
    label: "Broccoli",
    additional_information: "fat 0.4g, calories 31",
    countdown_label: "1 day left",
    category: "Perishable",
    weight: 850,
    weightUnit: "g",
    img_url: "https://i.imgur.com/xjrGJyK.png",
  },
  {
    label: "Blue band butter",
    additional_information: "fat 14.1g",
    countdown_label: "9 months left",
    category: "Perishable",
    weight: 400,
    weightUnit: "g",
    img_url: "https://i.imgur.com/u9PwVpz.png",
  },
  {
    label: "Heinz Baked Beans",
    additional_information: "calories 140g, fats 0.2g",
    countdown_label: "18 days left",
    category: "Perishable",
    weight: 1,
    weightUnit: "kg",
    img_url: "https://i.imgur.com/IjLIkRx.png",
  },
  {
    label: "Indomie Instant Noodles",
    additional_information: "fat 16g, sugar 6g",
    category: "Non Perishable",
    weight: 300,
    weightUnit: "g",
    img_url: "https://i.imgur.com/DnvrGlG.png",
  },
  {
    label: "Canned Tuna",
    additional_information: "31 calories",
    category: "Non Perishable",
    weight: 300,
    weightUnit: "g",
    img_url: "https://i.imgur.com/ZtK00ZT.png",
  },
  {
    label: "Apple",
    additional_information: "calories 52, fat 0.2g",
    countdown_label: "9 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url: "https://i.imgur.com/1fjkbqY.png",
  },
  {
    label: "Onions",
    additional_information: "calories 40, fat 0.1g",
    countdown_label: "16 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url: "https://i.imgur.com/3tTq3rU.png",
  },
  {
    label: "Egg",
    additional_information: "calories 155g, vitamin B2 and B12",
    countdown_label: "10 days left",
    category: "Dairy",
    weight: 10,
    weightUnit: "g",
    img_url: "https://i.imgur.com/V3c8d3h.png",
  },
  {
    label: "Eggplants",
    additional_information: "0.2g, sugar 3.5g",
    countdown_label: "11 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url: "https://i.imgur.com/NawPQQy.png",
  },
  {
    label: "Avocados",
    additional_information: "calories 884",
    countdown_label: "6 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url: "https://i.imgur.com/3RRWhng.png",
  },
  {
    label: "Carrots",
    additional_information: "calories 41g",
    countdown_label: "15 days left",
    category: "Produce",
    weight: 10,
    weightUnit: "g",
    img_url: "https://i.imgur.com/GByhoVu.png",
  },
  {
    label: "Cilantro",
    additional_information: "vitamin A,C and K",
    countdown_label: "5 days left",
    category: "Produce",
    weight: 10,
    weightUnit: "g",
    img_url: "https://i.imgur.com/vIeOvtQ.png",
  },
  {
    label: "Bell Peppers",
    additional_information: "calories 31g",
    countdown_label: "7 days left",
    category: "Produce",
    weight: 100,
    weightUnit: "g",
    img_url: "https://i.imgur.com/rnqu4lg.png",
  },
  {
    label: "White Cabbage",
    additional_information: "fat 0.1g, calories 25",
    countdown_label: "11 days left",
    category: "Produce",
    weight: 10,
    weightUnit: "g",
    img_url: "https://i.imgur.com/kUVXEcO.png",
  },
  {
    label: "Tomatoes",
    additional_information: "fat 0.4g, calories 32g per",
    countdown_label: "2 days left",
    category: "Produce",
    weight: 40,
    weightUnit: "g",
    img_url: "https://i.imgur.com/2iybi5S.png",
  },
  {
    label: "Banana",
    additional_information: "fat 0.3 grams ,sugar 12 grams",
    countdown_label: "5 days left",
    category: "Produce",
    weight: 60,
    weightUnit: "g",
    img_url:
      "https://cdn.shopify.com/s/files/1/0521/2677/7526/products/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpg?v=1613499062",
  },
].map((item, index) => {
  item.id = (index + 1).toString();
  item.barcode = item.label.replace(/ /i, "-").toLowerCase() + "-" + item.id;

  item.subtitle = [
    item.category === "Non Perishable" && item.category,
    item.countdown_label,
    item.additional_information,
  ]
    .filter((o) => o)
    .join("\n");

  return item;
});

export const weightUnits = ["kg", "oz", "gallon", "liter", "g"];

export const pantryList = list.filter((item) => !item.isConsumed);
export const pantryListConsumed = list.filter((item) => item.isConsumed);

const preDefinedCategories = [
  "Fish",
  "Seafood",
  "Meat",
  "Poultry",
  "Dairy",
  "Fruit",
  "Vegetable",
  "Leftover",
  "Frozen food",
  "Pasta",
];
export const categories = Object.keys(
  pantryList
    .map((o) => o.category)
    .concat(preDefinedCategories)
    .filter((o) => o) // Remove null
    .sort((a, b) => (b > a ? -1 : 1)) // Sort
    .reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {})
);

const receipts = [
  {
    id: "0001",
    items: [pantryList[2], pantryList[1], pantryList[0]],
  },
];

export const getReceipt = (id) => {
  const receipt = receipts.find((r) => r.id === id);

  if (receipt) {
    return {
      ...receipt,
      items: receipt.items.map((item) => ({
        ...item,
        id: getId(),
      })),
    };
  }
};
