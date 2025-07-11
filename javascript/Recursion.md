# 訂單金額總和計算



**背景說明**

你負責開發一個電商系統後台的報表功能。當前端查詢某段時間內的訂單時，後端會回傳一份包含多層分類的巢狀資料，例如：

- 銷售通路（如網站、門市、APP）
- 商品類別
- 商品本身
- 加購品等

每一層級可能包含對應的「銷售金額（amount）」
 
 
**資料結構特性**

- 結構不固定

- 有時是物件（Object）

- 有時是陣列（Array）

- 可能巢狀多層（Nested）

**任務目標**

請撰寫一個函式 sumOrderAmount(data)，功能如下：

1. 遍歷整份資料中所有巢狀結構

2. 將所有出現的金額欄位（例如 key 為 amount 或 orderAmount）進行加總

3. 回傳金額總和（數值）


**輸入資料範例**
```javascript
const orders = {
  online: {
    categoryA: [
      { product: 'T-shirt', amount: 500 },
      { product: 'Jeans', amount: 1200, addons: [{ name: 'Gift Wrap', amount: 50 }] }
    ],
    categoryB: {
      item: { product: 'Hat', amount: 300 }
    }
  },
  retail: [
    {
      store: 'Taipei',
      sales: [{ product: 'Shoes', amount: 2000 }]
    },
    {
      store: 'Kaohsiung',
      sales: [{ product: 'Bag', amount: 1500, extras: { insurance: 100 } }]
    }
  ],
  meta: { generatedAt: '2025-07-11T10:00:00Z', note: '包含門市與線上' }
};

sumOrderAmount(orders); // 預期結果：500 + 1200 + 50 + 300 + 2000 + 1500 + 100 = 5650

```