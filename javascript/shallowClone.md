# 切換商品的收藏狀態

📌 **背景說明**

你正在開發一個電商網站的「商品收藏」功能。使用者可以在商品列表中點擊愛心圖示，將某個商品標記為「已收藏」或「取消收藏」。

這些商品資料來自一個陣列 products，你必須在點擊時產出一份新的商品物件（不可直接改動原資料），以便更新 UI 狀態，並保持資料不可變（immutable）。

因為商品物件是單層結構（沒有巢狀資料），你可以使用 淺拷貝 的方式來產生新的商品資料。

🎯 ***任務說明***

請實作一個函式 toggleFavorite(product)，接收一筆商品資料，回傳一個新的物件，除了 isFavorite 被反轉，其餘屬性不變。


🧪 ***範例輸入與輸出***
```javascript
const product = {
  id: 101,
  name: 'T-shirt',
  price: 500,
  isFavorite: false
};

const updatedProduct = toggleFavorite(product);

console.log(updatedProduct);
// {
//   id: 101,
//   name: 'T-shirt',
//   price: 500,
//   isFavorite: true
// }

console.log(product.isFavorite); // 輸出 false（原始物件未被改動）

```

💡 ***應用情境補充***

- 在商品列表中，切換「最愛」狀態（或「已讀」、「勾選」等 UI 狀態）時，常需要針對單一項目建立新物件，以觸發 UI 更新。

- 為了符合 Vue 的響應式系統，我們通常會透過 computed 或 reactive 生成新的資料來源。

- 搭配 v-for 渲染畫面時，若要更新陣列中特定項目，常會使用 Array.prototype.map()，並以「不可變」的方式（immutable）產生新的陣列與物件，避免直接修改原資料。