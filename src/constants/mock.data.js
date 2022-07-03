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
    img_url:
      "https://lh4.googleusercontent.com/vrOwGuYx-i1PUP-X0PvujVgUA2uTztOoLIhFLDikLCpiU8ilcmgpq_yUio4OWMZNPbJn0TLoz0jK0Kh7t63a=w1920-h975",
  },
  {
    label: "Aloe Vera",
    additional_information: "calories 8, fat 0.7",
    countdown_label: "21 days left",
    category: "Perishable",
    weight: 120,
    weightUnit: "g",
    img_url:
      "https://lh6.googleusercontent.com/wb4dc8h4b_sqR5lzkcrYA6VX_e06rDcSedavzwLQu6afwX_2Gwjo_U3rCyLx4fcCZDdywBh0DfX8JBEU5kbV=w1920-h975",
  },
  {
    label: "Broccoli",
    additional_information: "fat 0.4g, calories 31",
    countdown_label: "1 day left",
    category: "Perishable",
    weight: 850,
    weightUnit: "g",
    img_url:
      "https://lh5.googleusercontent.com/xWV95yIRNHDn5kYkyEXBQpcWfA3jmMackYyZNlS43VGjXAeeVeOuLNeX9-729HIpNgcwV93me5Vvb50-h_tP=w1920-h975-rw",
  },
  {
    label: "Blue band butter",
    additional_information: "fat 14.1g",
    countdown_label: "9 months left",
    category: "Perishable",
    weight: 400,
    weightUnit: "g",
    img_url:
      "https://lh5.googleusercontent.com/vH3Zy5a_soUHlxKD-_cn_1khXhlXylrX5VR_6f0e12BogMUYX0RRMu1Pc-eHmmuXceYnstJdxy2h6reIeTC0=w1920-h975",
  },
  {
    label: "Heinz Baked Beans",
    additional_information: "calories 140g, fats 0.2g",
    countdown_label: "18 days left",
    category: "Perishable",
    weight: 1,
    weightUnit: "kg",
    img_url:
      "https://lh5.googleusercontent.com/B6_Z0cEVsJvF9mQrSI9s8g3lodUrHl9LNORD3kBgiG_tb42OmvDYrMAyogw9_FqH5HvlFsDzhih2_eV5Fzwj=w1920-h975",
  },
  {
    label: "Indomie Instant Noodles",
    additional_information: "fat 16g, sugar 6g",
    category: "Non Perishable",
    weight: 300,
    weightUnit: "g",
    img_url:
      "https://lh4.googleusercontent.com/QTV0NFGUeBEeYyDD6GtAf6DAld0yUgtfvEdelnzkkZ8Sr8ScGnA1yd_opYNbUK-_pDBP8J_u5ui72P70iR37=w1920-h975",
  },
  {
    label: "Canned Tuna",
    additional_information: "31 calories",
    category: "Non Perishable",
    weight: 300,
    weightUnit: "g",
    img_url:
      "https://lh5.googleusercontent.com/iypifYOO9eTcJZJNWoquFlPWbEChRJMe8CaLz8ZUG1ffmiuBMC5iVIBRSku4EL0hkekOXgdu0rknNpLe4S2I=w1920-h975",
  },
  {
    label: "Apple",
    additional_information: "calories 52, fat 0.2g",
    countdown_label: "9 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url:
      "https://lh6.googleusercontent.com/dRYs3CJEfLnkR-6DhRal2dhCx1tOpqWzSPxVfRnqJFLrRgvLiDl3ztDhYLTUswDBDth642C4KMGu1Q3QzYdt=w1920-h975",
  },
  {
    label: "Onions",
    additional_information: "calories 40, fat 0.1g",
    countdown_label: "16 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url:
      "https://lh6.googleusercontent.com/WFs7nZnzcvVldvnCOiscokIvvPOr8sKzoNl-dk9aW7f5RN6jcg33YaOOgCF_NhVELQpcD_f2XFaGVWtkAaKL=w1920-h975",
  },
  {
    label: "Egg",
    additional_information: "calories 155g, vitamin B2 and B12",
    countdown_label: "10 days left",
    category: "Dairy",
    weight: 10,
    weightUnit: "g",
    img_url:
      "https://lh6.googleusercontent.com/-yxH0rbpSNu7i3RVRTDGUHez57Nmj3sDfA60fUULNvr11NUIeUknJkOT-0VbvCQs7H_objUmkSmRD_QbVs-0=w1920-h975",
  },
  {
    label: "Eggplants",
    additional_information: "0.2g, sugar 3.5g",
    countdown_label: "11 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url:
      "https://lh3.googleusercontent.com/kaJflEUHKnh8PhpX0ikMGQcTxArOBmPUoy-hDX-VZn__Li8qQtKKn7_lw-3fPe80AoKsNKpG6CoKVs39THcS=w1920-h975",
  },
  {
    label: "Avocados",
    additional_information: "calories 884",
    countdown_label: "6 days left",
    category: "Produce",
    weight: 20,
    weightUnit: "g",
    img_url:
      "https://lh6.googleusercontent.com/urCuytq4y-TBUAU0_wRenxwzLDlHR0j3murh4nDLkN9xI6KBDP6vOVod5r86m3tuSxGowizosMQguy7VmDa5=w1920-h975",
  },
  {
    label: "Carrots",
    additional_information: "calories 41g",
    countdown_label: "15 days left",
    category: "Produce",
    weight: 10,
    weightUnit: "g",
    img_url: "https://lh3.googleusercontent.com/nxVLAYhEAivCOfHIDJkaE6sVChGjmUqHezBt9_U2Jgem0dkX_YI9UR9ueqvCm4USJz8LeRPG1QeLcdEtj4pu=w1920-h975",
  },
  {
    label: "Cilantro",
    additional_information: "vitamin A,C and K",
    countdown_label: "5 days left",
    category: "Produce",
    weight: 10,
    weightUnit: "g",
    img_url: "https://lh6.googleusercontent.com/myaekt8VW27Wg03q8K6g6RgZ8--kYpoM66ZVIaNsorf4Mk1f4ODQyMTAlL9E_ptLnbK01aJFYUlv0TYvo8F4=w1920-h975",
  },
  {
    label: "Bell Peppers",
    additional_information: "calories 31g",
    countdown_label: "7 days left",
    category: "Produce",
    weight: 100,
    weightUnit: "g",
    img_url: "https://lh4.googleusercontent.com/r_2CcORINeuIxu65f66zod13PJa3B5y9UIRhymJ_k868bsmwzXKuOlBHQMB4kwDc9VgAXEEhBPwwXBsqVTAW=w1920-h975",
  },
  {
    label: "White Cabbage",
    additional_information: "fat 0.1g, calories 25",
    countdown_label: "11 days left",
    category: "Produce",
    weight: 10,
    weightUnit: "g",
    img_url: "https://lh3.googleusercontent.com/n203M5PkfSjSZ_iZkmsnViq9OWNFAqIuBOig5kTf_NLo9jY1CCbFVo0eWdEUB-H1jF_NOh3wUo8vLM7y5fIM=w1920-h975",
  },
  {
    label: "Tomatoes",
    additional_information: "fat 0.4g, calories 32g per",
    countdown_label: "2 days left",
    category: "Produce",
    weight: 40,
    weightUnit: "g",
    img_url: "https://lh3.googleusercontent.com/dQesYSCBgfmWDkgR3zVl2uuN8gcjns1m-Zyo-ByXQRTKRv0ZN163qSOOaHB_-q_xXCnjagp75USkdFQWXy8N=w1920-h975",
  },
  {
    label: "Banana",
    additional_information: "fat 0.3 grams ,sugar 12 grams",
    countdown_label: "5 days left",
    category: "Produce",
    weight: 60,
    weightUnit: "g",
    img_url: "https://lh6.googleusercontent.com/d9ZwD0YcESrHgImnO00aGocivZnP8XwPeMAW4HM2BeVLFIIdnKADzuOIredPIpBW4LjcBkKnnEAE56VLMCdM=w1920-h975",
  },
].map((item, index) => {
  item.id = (index + 1).toString();
  item.barcode = item.label.replace(/ /i, "-").toLowerCase() + "-" + item.id;

  item.subtitle = [item.category === 'Non Perishable' && item.category, item.countdown_label, item.additional_information]
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
