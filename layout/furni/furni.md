# 🛠️ 測驗：切版實戰 - Furni 首頁

## 🎯 測驗目標

請根據以下網址，完成 Furni 首頁的靜態切版：

🔗 https://themewagon.github.io/furni/

---

## ✅ 必做項目

- [ ] 完整切出首頁所有區塊（Header ~ Footer）
- [ ] HTML + CSS（可使用 SCSS）
- [ ] 使用 Google Fonts 匯入 `Inter` 字型
- [ ] 使用原始網站的圖片與 icon（可使用 Font Awesome）
- [ ] RWD：至少支援 **3 個斷點**
  - 手機版：`max-width: 767px`
  - 平板版：`768px ~ 1023px`
  - 桌機版：`min-width: 1024px`
- [ ] ✅ **實作 menu 的漢堡按鈕功能**：
  - 手機寬度下顯示漢堡按鈕
  - 點擊後展開與收合導覽選單


---

## ❌ 不需要實作的互動功能（可略過 JavaScript）

以下區塊的「互動功能」可略過，只需切出畫面樣式即可：

- Testimonials 區塊：輪播效果（Carousel）可略過，只保留靜態內容即可

---

## 📁 資源說明

### 字型匯入（Google Fonts）

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

// css
body {
  font-family: 'Inter', sans-serif;
}
```

### Icon 使用（Font Awesome）
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<i class="fa-brands fa-linkedin"></i>