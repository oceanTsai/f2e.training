# 分批載入用戶資料的 ID 產生器（User Batch ID Iterator）


**背景說明**

📌 你正在開發一個後台管理系統，用於處理大量用戶資料。由於資料量龐大，API 設計成分批（batch）查詢用戶 ID，每次請求都需要一組用戶 ID，例如：

```text
GET /api/users?ids=1000,1002,1004
```

為了便於控制每次要查詢的 ID，你打算實作一個自訂的 Iterator，來產出所需的 ID 序列。



**任務說明**

🎯 請實作一個函式 createUserIdIterator(start, end)，它會回傳一個 Iterator 物件，用來依序產生從 start 到 end 間的偶數用戶 ID（含兩端），每次 .next() 回傳一個 ID。



**輸出範例**


```javascript
const idIterator = createUserIdIterator(1000, 1006);

console.log(idIterator.next()); // { value: 1000, done: false }
console.log(idIterator.next()); // { value: 1002, done: false }
console.log(idIterator.next()); // { value: 1004, done: false }
console.log(idIterator.next()); // { value: 1006, done: false }
console.log(idIterator.next()); // { value: undefined, done: true }

```

**需求**
- 使用 Symbol

**實務應用情境**

- 批次查詢用戶資料（如報表匯出）

- 控制 API 呼叫頻率（避免一次查詢過多）

- 處理大量資料時的分段載入


