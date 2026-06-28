# 頭部遮罩相容(Legacy Head Mask Compatibility)

## 功能

修正新版頭飾遮罩設定導致部分舊版頭部服裝模組顯示異常的問題。

## 相容模式

目前提供三種模式（於程式內修改 `HEAD_MASK_MODE`）：

- `compat`（預設）
  - 僅保留手持物（Handheld）遮罩。
  - 建議搭配舊版頭部服裝模組使用。

- `vanilla`
  - 使用遊戲原版 Head Mask 行為。

- `off`
  - 完全停用 Head Mask。

## 安裝

將模組加入遊戲即可，無需額外設定。

如需切換模式，修改：

```js
const HEAD_MASK_MODE = "compat";
```

可選值：

```js
"compat"
"vanilla"
"off"
```

## 說明
* 需搭配`maplebirch `框架。
* 本模組僅覆寫 Head 相關圖層的 `masksrcfn`，不修改其他渲染邏輯，因此與其他圖層修改模組相容性較高。