# 訂單金額總和計算



**背景說明**

你負責開發一個電商後台系統的報表功能。當前端查詢某段期間內的訂單資料時，後端 API 會回傳一筆複雜的 JSON 結構，內容包含：

- 銷售通路（如：網站、APP、實體門市）

- 商品類別（包含主分類與次分類）

- 商品明細（品項、金額、加購品）

- 加購品或附加服務（如保險、包裝）

該資料是由多來源整合而來，巢狀層級、格式可能不完全一致。

 
 
**資料結構特性**

- 結構非固定：陣列與物件交錯出現，巢狀層級可能任意深。

- 包含多層分類資訊，如：通路、分類、商品清單、加購品等。

- 金額資訊以欄位 amount 或 orderAmount 呈現，出現在不同層級中。

**任務目標**

請撰寫一個函式 sumOrderAmount(data)，功能如下：

1. 遍歷整份資料中所有巢狀結構

2. 找出所有 key 為 amount 或 orderAmount 的欄位，將其數值加總。

3. 回傳金額總和（數值）


**輸入資料範例**
```javascript
const orders = [
  {
    channel: 'online',
    category: { main: '服飾', sub: '男裝' },
    products: [
      { product: 'T-shirt', amount: 500 },
      { product: 'Jeans', amount: 1200, addons: [{ name: 'Gift Wrap', amount: 50 }] }
    ]
  },
  {
    channel: 'online',
    category: { main: '配件', sub: '帽子' },
    products: [
      { product: 'Hat', amount: 300 }
    ]
  },
  {
    channel: 'retail',
    store: '台北門市',
    category: { main: '鞋類', sub: '運動鞋' },
    products: [
      { product: 'Shoes', amount: 2000 }
    ]
  },
  {
    channel: 'retail',
    store: '高雄門市',
    category: { main: '包包', sub: '手提包' },
    products: [
      { product: 'Bag', amount: 1500, addons: [{ name: 'Insurance', amount: 100 }] }
    ]
  }
];


sumOrderAmount(orders); // 預期結果：500 + 1200 + 50 + 300 + 2000 + 1500 + 100 = 5650

```