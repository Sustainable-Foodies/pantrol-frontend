import { getId } from "../utils/index";

export const list = [
  {
    id: "0001",
    barcode: "sugar-uniao-1kg",
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
    id: "0002",
    barcode: "farsk-milk-1l",
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
    id: "0003",
    barcode: "wheat-prarie-gold",
    label: "Prarie Gold Wheat",
    countdown_label: "18 days left",
    weight: 1,
    weightUnit: "kg",
    category: "Non Perishable",
    img_url: "http://sc04.alicdn.com/kf/HTB18rnFRVXXXXXvaFXXq6xXFXXXn.jpg",
  },
  {
    id: "0004",
    barcode: "coffee-brazil-1kg",
    label: "Coffee Brazil",
    img_url: "https://m.media-amazon.com/images/I/71ua8UmizRL._SL1400_.jpg",
    category: "Non Perishable",
    countdown_label: "20 days left",
    weight: 1,
    weightUnit: "kg",
  },
  {
    id: "0005",
    barcode: "farsk-milk-1l",
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
].map((item) => {
  item.subtitle = [item.countdown_label, item.additional_information]
    .filter((o) => o)
    .join("\n");

  return item;
});

export const weightUnits = ["kg", "oz", "gallon", "liter"];

export const pantryList = list.filter((item) => !item.isConsumed);
export const pantryListConsumed = list.filter((item) => item.isConsumed);

const preDefinedCategories = ['Fish', 'Seafood', 'Meat', 'Poultry', 'Dairy', 'Fruit', 'Vegetable', 'Leftover', 'Frozen food', 'Pasta']
export const categories = Object.keys(
  pantryList
    .map((o) => o.category)
    .concat(preDefinedCategories)
    .filter((o) => o) // Remove null
    .sort((a,b) => b > a ? -1 : 1) // Sort
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
