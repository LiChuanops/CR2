import type { Product } from "@/types";

export const initialProducts: Product[] = [
  {
    barcode: "40648",
    name: "彩虹鱼饼 FISH CAKE",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "彩虹鱼饼 FISH CAKE", packaging: "500g x 20pkt", itemCode: "40648" },
      { type: "PKT", name: "彩虹鱼饼 FISH CAKE", packaging: "500g/pkt", itemCode: "40649" },
    ],
    scanned: false,
  },
  {
    barcode: "40665",
    name: "SP 海鲜卷 SEAFOOD ROLL",
    packaging: "750g x 14pkt",
    skus: [
      { type: "CTN", name: "SP 海鲜卷 SEAFOOD ROLL", packaging: "750g x 14pkt", itemCode: "40665" },
      { type: "PKT", name: "SP 海鲜卷 SEAFOOD ROLL", packaging: "750g", itemCode: "40665.1" },
    ],
    scanned: false,
  },
  {
    barcode: "50702",
    name: "春卷 SPRING ROLL",
    packaging: "8pkts x 10's",
    skus: [
      { type: "CTN", name: "春卷 SPRING ROLL", packaging: "8pkts x 10's", itemCode: "50702" },
      { type: "PKT", name: "春卷 SPRING ROLL", packaging: "10's/pkt", itemCode: "50703" },
    ],
    scanned: false,
  },
  {
    barcode: "61006",
    name: "(E)四色卷 FOUR COLOUR ROLL",
    packaging: "5's x 15pkt",
    skus: [
      { type: "CTN", name: "(E)四色卷 FOUR COLOUR ROLL", packaging: "5's x 15pkt", itemCode: "61006" },
      { type: "PKT", name: "(E)四色卷 FOUR COLOUR ROLL", packaging: "5's/pkt", itemCode: "62006" },
    ],
    scanned: false,
  },
  {
    barcode: "NA1",
    name: "苏东丸 CUTTLEFISH BALL",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "苏东丸 CUTTLEFISH BALL", packaging: "1kg x 10pkt", itemCode: "NA1" },
      { type: "PKT", name: "苏东丸 CUTTLEFISH BALL", packaging: "1kg/pkt", itemCode: "10903" },
    ],
    scanned: false,
  },
  {
    barcode: "25000",
    name: "海鲜条 SEAFOOD STICK",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "海鲜条 SEAFOOD STICK", packaging: "250g x 40pkt", itemCode: "25000" },
      { type: "PKT", name: "海鲜条 SEAFOOD STICK", packaging: "250g/pkt", itemCode: "25001" },
    ],
    scanned: false,
  },
  {
    barcode: "30100",
    name: "干贝 SURIMI SCALLOP",
    packaging: "50's x 10pkt",
    skus: [
      { type: "CTN", name: "干贝 SURIMI SCALLOP", packaging: "50's x 10pkt", itemCode: "30100" },
      { type: "PKT", name: "干贝 SURIMI SCALLOP", packaging: "50's/pkt", itemCode: "30101" },
    ],
    scanned: false,
  },
  {
    barcode: "40628",
    name: "蟹味柳 KANIMI CHUNK",
    packaging: "180g x 20pkt",
    skus: [
      { type: "CTN", name: "蟹味柳 KANIMI CHUNK", packaging: "180g x 20pkt", itemCode: "40628" },
      { type: "PKT", name: "蟹味柳 KANIMI CHUNK", packaging: "180g/pkt", itemCode: "40629" },
    ],
    scanned: false,
  },
  {
    barcode: "25010",
    name: "人造蟹条 FLAVOURED CRAB STICKS",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "人造蟹条 FLAVOURED CRAB STICKS", packaging: "250g x 40pkt", itemCode: "25010" },
      { type: "PKT", name: "人造蟹条 FLAVOURED CRAB STICKS", packaging: "250g/pkt", itemCode: "25011" },
    ],
    scanned: false,
  },
  {
    barcode: "40600",
    name: "人造蟹钳 IMITATION CRAB CLAW",
    packaging: "250g x 30pkt",
    skus: [
      { type: "CTN", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g x 30pkt", itemCode: "40600" },
      { type: "PKT", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g/pkt", itemCode: "40601" },
    ],
    scanned: false,
  },
  {
    barcode: "50101",
    name: "(奥)蟹柳 CRAB NUGGET",
    packaging: "1kg/pkt",
    skus: [
      { type: "PKT", name: "(奥)蟹柳 CRAB NUGGET", packaging: "1kg/pkt", itemCode: "50101" },
    ],
    scanned: false,
  },
  {
    barcode: "50111",
    name: "(奥)鱼蛋卷 FISH CRAB ROLL",
    packaging: "1kg/pkt",
    skus: [
      { type: "PKT", name: "(奥)鱼蛋卷 FISH CRAB ROLL", packaging: "1kg/pkt", itemCode: "50111" },
    ],
    scanned: false,
  },
  {
    barcode: "50131",
    name: "(奥)富贵鱼 GOLDENFISH SOLO",
    packaging: "1kg/pkt",
    skus: [
      { type: "PKT", name: "(奥)富贵鱼 GOLDENFISH SOLO", packaging: "1kg/pkt", itemCode: "50131" },
    ],
    scanned: false,
  },
  {
    barcode: "50141",
    name: "(奥)三文鱼 SALMON FISH",
    packaging: "1kg/pkt",
    skus: [
      { type: "PKT", name: "(奥)三文鱼 SALMON FISH", packaging: "1kg/pkt", itemCode: "50141" },
    ],
    scanned: false,
  },
  {
    barcode: "50151",
    name: "(奥)三文治豆腐 SANDWICH TOFU",
    packaging: "1kg/pkt",
    skus: [
      { type: "PKT", name: "(奥)三文治豆腐 SANDWICH TOFU", packaging: "1kg/pkt", itemCode: "50151" },
    ],
    scanned: false,
  },
  {
    barcode: "50161",
    name: "(奥)半圆海鲜豆腐 SEAFOOD TOFU",
    packaging: "1kg/pkt",
    skus: [
      { type: "PKT", name: "(奥)半圆海鲜豆腐 SEAFOOD TOFU", packaging: "1kg/pkt", itemCode: "50161" },
    ],
    scanned: false,
  },
  {
    barcode: "10900",
    name: "苏东丸 CUTTLEFISH BALL 500g",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "苏东丸 CUTTLEFISH BALL", packaging: "500g x 20pkt", itemCode: "10900" },
      { type: "PKT", name: "苏东丸 CUTTLEFISH BALL", packaging: "500g/pkt", itemCode: "10901" },
    ],
    scanned: false,
  },
  {
    barcode: "24000",
    name: "香菇丸 MUSHROOM BALL",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "香菇丸 MUSHROOM BALL", packaging: "1kg x 10pkt", itemCode: "24000" },
      { type: "PKT", name: "香菇丸 MUSHROOM BALL", packaging: "1kg/pkt", itemCode: "24001" },
    ],
    scanned: false,
  },
  {
    barcode: "24020",
    name: "香菇丸 MUSHROOM BALL (17g)",
    packaging: "200g x 40pkt",
    skus: [
      { type: "CTN", name: "香菇丸 MUSHROOM BALL (17g)", packaging: "200g x 40pkt", itemCode: "24020" },
      { type: "PKT", name: "香菇丸 MUSHROOM BALL (17g)", packaging: "200g/pkt", itemCode: "24021" },
    ],
    scanned: false,
  },
  {
    barcode: "40670",
    name: "海贝 IMITATION SCALLOP",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "海贝 IMITATION SCALLOP", packaging: "250g x 40pkt", itemCode: "40670" },
      { type: "PKT", name: "海贝 IMITATION SCALLOP", packaging: "250g/pkt", itemCode: "40671" },
    ],
    scanned: false,
  },
  {
    barcode: "40650",
    name: "虾仁卷 SHRIMP ROLL",
    packaging: "320g x 28pkt",
    skus: [
      { type: "CTN", name: "虾仁卷 SHRIMP ROLL", packaging: "320g x 28pkt", itemCode: "40650" },
      { type: "PKT", name: "虾仁卷 SHRIMP ROLL", packaging: "320g/pkt", itemCode: "40651" },
    ],
    scanned: false,
  },
  {
    barcode: "40503",
    name: "豆香鱼片 SOY FISH PILLOW",
    packaging: "500g x 15pkt",
    skus: [
      { type: "CTN", name: "豆香鱼片 SOY FISH PILLOW", packaging: "500g x 15pkt", itemCode: "40503" },
      { type: "PKT", name: "豆香鱼片 SOY FISH PILLOW", packaging: "500g/pkt", itemCode: "40504" },
    ],
    scanned: false,
  },
  {
    barcode: "28040",
    name: "爱心豆腐 CHEESY LOVE",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "爱心豆腐 CHEESY LOVE", packaging: "1kg x 10pkt", itemCode: "28040" },
      { type: "PKT", name: "爱心豆腐 CHEESY LOVE", packaging: "1kg/pkt", itemCode: "28041" },
    ],
    scanned: false,
  },
  {
    barcode: "28004",
    name: "甜心鱼豆腐 Sweet Heart Fish Tofu",
    packaging: "50's x 12pkt",
    skus: [
      { type: "CTN", name: "甜心鱼豆腐 Sweet Heart Fish Tofu", packaging: "50's x 12pkt", itemCode: "28004" },
      { type: "PKT", name: "甜心鱼豆腐 Sweet Heart Fish Tofu", packaging: "50's", itemCode: "28005" },
    ],
    scanned: false,
  },
  {
    barcode: "50360",
    name: "热狗 CHICKEN FRANKS",
    packaging: "340g x 28pkt",
    skus: [
      { type: "CTN", name: "热狗 CHICKEN FRANKS", packaging: "340g x 28pkt", itemCode: "50360" },
      { type: "PKT", name: "热狗 CHICKEN FRANKS", packaging: "340g/pkt", itemCode: "50361" },
    ],
    scanned: false,
  },
  {
    barcode: "40676",
    name: "炸豆皮卷 FRIED BEAN CURD ROLL",
    packaging: "825g x 8pkt",
    skus: [
      { type: "CTN", name: "炸豆皮卷 FRIED BEAN CURD ROLL", packaging: "825g x 8pkt", itemCode: "40676" },
      { type: "PKT", name: "炸豆皮卷 FRIED BEAN CURD ROLL", packaging: "825g/pkt", itemCode: "40677" },
    ],
    scanned: false,
  },
  {
    barcode: "40634",
    name: "芝士丸 Melted Cheese Meat BALL",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "芝士丸 Melted Cheese Meat BALL", packaging: "500g x 20pkt", itemCode: "40634" },
      { type: "PKT", name: "芝士丸 Melted Cheese Meat BALL", packaging: "500g/pkt", itemCode: "40635" },
    ],
    scanned: false,
  },
  {
    barcode: "28042",
    name: "芝士鱼豆腐 CHEESE FISH TOFU",
    packaging: "200g x 40pkt",
    skus: [
      { type: "CTN", name: "芝士鱼豆腐 CHEESE FISH TOFU", packaging: "200g x 40pkt", itemCode: "28042" },
      { type: "PKT", name: "芝士鱼豆腐 CHEESE FISH TOFU", packaging: "200g/pkt", itemCode: "28043" },
    ],
    scanned: false,
  },
  {
    barcode: "29000",
    name: "鱼蛋卷 FISH EGG ROLL",
    packaging: "200g x 40pkt",
    skus: [
      { type: "CTN", name: "鱼蛋卷 FISH EGG ROLL", packaging: "200g x 40pkt", itemCode: "29000" },
      { type: "PKT", name: "鱼蛋卷 FISH EGG ROLL", packaging: "200g/ pkt", itemCode: "29001" },
    ],
    scanned: false,
  },
  {
    barcode: "20301",
    name: "火锅拼盘 HOT POT COMBO",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "火锅拼盘 HOT POT COMBO", packaging: "500g x 20pkt", itemCode: "20301" },
      { type: "PKT", name: "火锅拼盘 HOT POT COMBO", packaging: "500g/pkt", itemCode: "20302" },
    ],
    scanned: false,
  },
  {
    barcode: "26000",
    name: "蟹丸 FLAVOURED CRAB BALL",
    packaging: "50's x 10pkt",
    skus: [
      { type: "CTN", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "50's x 10pkt", itemCode: "26000" },
      { type: "PKT", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "50's/pkt", itemCode: "26001" },
    ],
    scanned: false,
  },
  {
    barcode: "40678",
    name: "海鲜粒 SEAFOOD BALL",
    packaging: "50's x 8pkt",
    skus: [
      { type: "CTN", name: "海鲜粒 SEAFOOD BALL", packaging: "50's x 8pkt", itemCode: "40678" },
      { type: "PKT", name: "海鲜粒 SEAFOOD BALL", packaging: "50's/pkt", itemCode: "40679" },
    ],
    scanned: false,
  },
  {
    barcode: "40662",
    name: "人造蟹粒 IMITATION CRAB BITE",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "人造蟹粒 IMITATION CRAB BITE", packaging: "1kg x 10pkt", itemCode: "40662" },
      { type: "PKT", name: "人造蟹粒 IMITATION CRAB BITE", packaging: "1kg/pkt", itemCode: "40663" },
    ],
    scanned: false,
  },
  {
    barcode: "26010",
    name: "蟹丸 FLAVOURED CRAB BALL 250g",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "250g x 40pkt", itemCode: "26010" },
      { type: "PKT", name: "蟹丸 FLAVOURED CRAB BALL", packaging: "250g/pkt", itemCode: "26011" },
    ],
    scanned: false,
  },
  {
    barcode: "26110",
    name: "皇帝蟹丸 FLAVOURED KING CRAB BALL 250g",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "250g x 40pkt", itemCode: "26110" },
      { type: "PKT", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "250g/pkt", itemCode: "26111" },
    ],
    scanned: false,
  },
  {
    barcode: "26100",
    name: "皇帝蟹丸 FLAVOURED KING CRAB BALL",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "500g x 20pkt", itemCode: "26100" },
      { type: "PKT", name: "皇帝蟹丸 FLAVOURED KING CRAB BALL", packaging: "500g/pkt", itemCode: "26101" },
    ],
    scanned: false,
  },
  {
    barcode: "90003.1",
    name: "NTUC鱼丸 28G NTUC FISH BALL 28G",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "NTUC鱼丸 28G NTUC FISH BALL 28G", packaging: "1kg x 10pkt", itemCode: "90003.1" },
      { type: "PKT", name: "NTUC鱼丸 28G NTUC FISH BALL 28G", packaging: "1kg", itemCode: "NA2" },
    ],
    scanned: false,
  },
  {
    barcode: "40310",
    name: "中鱼丸 COOKED FISH BALL (M)",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "中鱼丸 COOKED FISH BALL (M)", packaging: "1kg x 10pkt", itemCode: "40310" },
      { type: "PKT", name: "中鱼丸 Fish Ball M", packaging: "1kg", itemCode: "NA3" },
    ],
    scanned: false,
  },
  {
    barcode: "30200",
    name: "金带子 BREADED SURIMI SCALLOP",
    packaging: "160g x 20pkts",
    skus: [
      { type: "CTN", name: "金带子 BREADED SURIMI SCALLOP", packaging: "160g x 20pkts", itemCode: "30200" },
      { type: "PKT", name: "金带子 BREADED SURIMI SCALLOP", packaging: "160g/tray", itemCode: "30210" },
    ],
    scanned: false,
  },
  {
    barcode: "10603",
    name: "竹轮 CHIKUWA 1kg",
    packaging: "1kg x 8pkt",
    skus: [
      { type: "CTN", name: "竹轮 CHIKUWA", packaging: "1kg x 8pkt", itemCode: "10603" },
      { type: "PKT", name: "竹轮 CHIKUWA", packaging: "1kg/pkt", itemCode: "10601" },
    ],
    scanned: false,
  },
  {
    barcode: "10604",
    name: "竹轮 CHIKUWA 200g",
    packaging: "200g x 40pkt",
    skus: [
      { type: "CTN", name: "竹轮 CHIKUWA", packaging: "200g x 40pkt", itemCode: "10604" },
      { type: "PKT", name: "竹轮 CHIKUWA", packaging: "200g/pkt", itemCode: "10605" },
    ],
    scanned: false,
  },
  {
    barcode: "40693",
    name: "泰式鱼饼 THAI FISH CAKE",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "泰式鱼饼 THAI FISH CAKE", packaging: "1kg x 10pkt", itemCode: "40693" },
      { type: "PKT", name: "泰式鱼饼 THAI FISH CAKE", packaging: "1kg/pkt", itemCode: "40694" },
    ],
    scanned: false,
  },
  {
    barcode: "28010",
    name: "鱼豆腐 FISH TOFU 250g",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "鱼豆腐 FISH TOFU", packaging: "250g x 40pkt", itemCode: "28010" },
      { type: "PKT", name: "鱼豆腐 FISH TOFU", packaging: "250g/pkt", itemCode: "28011" },
    ],
    scanned: false,
  },
  {
    barcode: "28020",
    name: "鱼豆腐 FISH TOFU",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "鱼豆腐 FISH TOFU", packaging: "1kg x 10pkt", itemCode: "28020" },
      { type: "PKT", name: "鱼豆腐 FISH TOFU", packaging: "1kg/pkt", itemCode: "28021" },
    ],
    scanned: false,
  },
  {
    barcode: "40668",
    name: "海鲜粒 SEAFOOD BALL 500g",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "海鲜粒 SEAFOOD BALL", packaging: "500g x 20pkt", itemCode: "40668" },
      { type: "PKT", name: "海鲜粒 SEAFOOD BALL", packaging: "500g/pkt", itemCode: "40669" },
    ],
    scanned: false,
  },
  {
    barcode: "40690",
    name: "蟹味鱼饼 FLAVOURED CRAB MEAT CAKE",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "蟹味鱼饼 FLAVOURED CRAB MEAT CAKE", packaging: "500g x 20pkt", itemCode: "40690" },
      { type: "PKT", name: "蟹味鱼饼 FLAVOURED CRAB MEAT CAKE", packaging: "500g/pkt", itemCode: "40691" },
    ],
    scanned: false,
  },
  {
    barcode: "28023",
    name: "鱼芙 FISH PUFFY",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "鱼芙 FISH PUFFY", packaging: "500g x 20pkt", itemCode: "28023" },
      { type: "PKT", name: "鱼芙 FISH PUFFY", packaging: "500g/pkt", itemCode: "28024" },
    ],
    scanned: false,
  },
  {
    barcode: "40666",
    name: "海鲜卷 SEAFOOD ROLL",
    packaging: "750g x 14pkt",
    skus: [
      { type: "CTN", name: "海鲜卷 SEAFOOD ROLL", packaging: "750g x 14pkt", itemCode: "40666" },
      { type: "PKT", name: "海鲜卷 SEAFOOD ROLL", packaging: "750g/pkt", itemCode: "40667" },
    ],
    scanned: false,
  },
  {
    barcode: "28034",
    name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE",
    packaging: "1kg x 10pkt",
    skus: [
      { type: "CTN", name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE", packaging: "1kg x 10pkt", itemCode: "28034" },
      { type: "PKT", name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE", packaging: "1kg/pkt", itemCode: "28035" },
    ],
    scanned: false,
  },
  {
    barcode: "26114",
    name: "芝士皇帝蟹味丸 CHEESE FLAVOURED KING CRAB BALLL",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "芝士皇帝蟹味丸 CHEESE FLAVOURED KING CRAB BALLL", packaging: "250g x 40pkt", itemCode: "26114" },
      { type: "PKT", name: "芝士皇帝蟹味丸 CHEESE FLAVOURED KING CRAB BALLL", packaging: "250g/pkt", itemCode: "26115" },
    ],
    scanned: false,
  },
  {
    barcode: "28032",
    name: "顶级芝士鱼豆腐 PREMIUM CHEESE FISH TOFU",
    packaging: "200g x 25 pkt",
    skus: [
      { type: "CTN", name: "顶级芝士鱼豆腐 PREMIUM CHEESE FISH TOFU", packaging: "200g x 25pkt", itemCode: "28032" },
      { type: "PKT", name: "顶级芝士鱼豆腐 PREMIUM CHEESE FISH TOFU", packaging: "200g/pkt", itemCode: "28033" },
    ],
    scanned: false,
  },
  {
    barcode: "28002",
    name: "鱼豆腐(500g) FISH TOFU",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "鱼豆腐(500g) FISH TOFU", packaging: "500g x 20pkt", itemCode: "28002" },
      { type: "PKT", name: "鱼豆腐(500g) FISH TOFU", packaging: "500g/pkt", itemCode: "28009" },
    ],
    scanned: false,
  },
  {
    barcode: "40680",
    name: "墨鱼条(500g) CUTTLEFISH STICK",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "墨鱼条(500g) CUTTLEFISH STICK", packaging: "500g x 20pkt", itemCode: "40680" },
      { type: "PKT", name: "墨鱼条(500g) CUTTLEFISH STICK", packaging: "500g/pkt", itemCode: "40681" },
    ],
    scanned: false,
  },
  {
    barcode: "40682",
    name: "虾味条(500g) SHRIMP FLAVOURED STICK",
    packaging: "500g x 20pkt",
    skus: [
      { type: "CTN", name: "虾味条(500g) SHRIMP FLAVOURED STICK", packaging: "500g x 20pkt", itemCode: "40682" },
      { type: "PKT", name: "虾味条(500g) SHRIMP FLAVOURED STICK", packaging: "500g/pkt", itemCode: "40683" },
    ],
    scanned: false,
  },
  {
    barcode: "26112",
    name: "皇帝蟹粒 FLAVOURED KING CRAB BITE",
    packaging: "250g x 40pkt",
    skus: [
      { type: "CTN", name: "皇帝蟹粒 FLAVOURED KING CRAB BITE", packaging: "250g x 40pkt", itemCode: "26112" },
      { type: "PKT", name: "皇帝蟹粒 FLAVOURED KING CRAB BITE", packaging: "250g/pkt", itemCode: "26113" },
    ],
    scanned: false,
  },
];
