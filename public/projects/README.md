# 專案圖片資料夾

此資料夾存放所有專案的圖片資源。

## 資料夾結構

每個專案都有自己獨立的資料夾，建議的圖片檔案命名如下：

### 必需圖片
- `hero.jpg` - 專案列表頁面顯示的主要圖片（必需）
- `thumbnail.jpg` - 縮圖（可選）

### 可選圖片
根據專案類型，可以添加以下圖片：
- `login.jpg`, `labels.jpg`, `issue-list.jpg` 等（數位專案）
- `plan-1f.jpg`, `plan-2f.jpg` 等（空間專案平面圖）
- `section-1.jpg`, `section-2.jpg` 等（空間專案剖面圖）
- `render-*.jpg` 等（渲染圖）

## 專案資料夾列表

- `104-redesign/` - 104 工作快找改版
- `github-mockup/` - GitHub Issue 復刻
- `tr-plus/` - 家居電商 App
- `rain-hill/` - 雨坵
- `leaf-boat/` - 一葉輕舟
- `breaking-cocoon/` - 層層・破繭
- `dream-distance/` - 與夢的距離
- `blurred-boundary/` - 模糊邊界
- `food-color/` - 食物色彩學

## 圖片規格建議

- **格式**: JPG 或 PNG
- **尺寸**: 建議寬度至少 1200px
- **比例**: 專案列表圖片建議 4:3 比例
- **檔案大小**: 建議每個圖片不超過 500KB（可使用圖片壓縮工具優化）

## 使用方式

在 `lib/data/portfolio.ts` 中設定圖片路徑：

```typescript
{
  id: 'your-project-id',
  image: "/projects/your-project-id/hero.jpg",  // 專案列表顯示
  imagesObj: {
    hero: "/projects/your-project-id/hero.jpg",
    thumbnail: "/projects/your-project-id/thumbnail.jpg",
    // ... 其他圖片
  }
}
```

