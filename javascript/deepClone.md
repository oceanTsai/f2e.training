# 表單暫存功能的陷阱 Shallow Clone

📌 **背景說明**

你正在開發一個用戶表單編輯功能。當使用者在畫面上修改表單內容時，你會先將原本的表單資料複製一份到 ```draftForm```，作為暫存的編輯用資料，避免直接變動原始資料。

你使用了 ```Object.assign``` 來進行複製，但使用者在 UI 上修改聯絡資訊（contact）時，原始表單資料（originalForm）也跟著被修改了，導致無法保留初始狀態。

 
程式碼如下

```javascript
const originalForm = {
  name: 'Alice',
  contact: {
    email: 'alice@example.com',
    phone: '12345678'
  }
};

const draftForm = Object.assign({}, originalForm);
draftForm.contact.email = 'new@example.com';

console.log(originalForm.contact.email); // ??


```

🎯 ***任務說明***

1. 說明為何 originalForm.contact.email 也被修改了？

2. 如何修改程式，才不會影響原始資料？ 請使用正確的深拷貝方式實作。


💡 ***應用情境補充***

- 編輯個人資料時，避免污染原始資料
- 編輯設定頁面、問卷暫存、草稿模式皆會遇到這種需求
- Vue 中表單綁定與 v-model 常配合深拷貝保護原資料