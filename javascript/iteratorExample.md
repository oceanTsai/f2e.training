# 分頁載入器 (導師示範)

**背景情境** 
你正在開發一個前台商品清單頁。後端一次只會回傳一頁資料（例如 10 筆），你需要實作一個「分頁載入器」，讓前端可以一筆一筆地讀取商品，類似滑動到最底下會自動載入更多商品。

為了模擬這樣的資料流，你設計一個客製的 Iterator，模擬每次載入一頁商品，並可以用 for...of 或手動呼叫 next() 來取得下一筆商品。


**任務要求**
請實作一個 createProductPaginator(products, pageSize) 函式，它會回傳一個實作了 [Symbol.iterator] 的物件。

每次 iterator 的 next() 會從目前的「頁面資料」中回傳一筆商品，直到這一頁商品耗盡，再自動切換到下一頁資料。

當所有商品取完時，done 為 true。


**模擬資料**

```javascript
const products = [
  'Shoes', 'Socks', 'Shirt', 'Pants', 'Hat',
  'Bag', 'Watch', 'Glasses', 'Belt', 'Jacket',
  'Scarf', 'Gloves', 'Sweater', 'Shorts'
];

```

**使用範例**

```javascript
const paginator = createProductPaginator(products, 5);

for (const product of paginator) {
  console.log(product);
}
// 輸出順序：Shoes, Socks, Shirt, Pants, Hat, ..., Shorts
```

