/*=========================================
 Head Mask Compatibility - No UI

 功能：
 修正新版 Head Mask 對舊版頭部服裝模組造成的顯示異常。

 模式：
 vanilla：使用原版 Head Mask
 compat ：僅保留手持物遮罩
 off    ：完全停用 Head Mask
=========================================*/

(function () {
    "use strict";

    // 獨立版預設模式
    // 若偵測到 Cheat Extended 的設定，則以 CE 設定為主。
    const HEAD_MASK_MODE = "compat";

    // 取得目前 Head Mask 模式
    function getHeadMaskMode() {

        // 優先使用 Cheat Expansion 的設定
        if (V.CE_HeadMaskMode !== undefined) {
            return V.CE_HeadMaskMode;
        }

        // 使用獨立版預設設定
        return HEAD_MASK_MODE;
    }

    // Head Mask 相容處理
    function headMaskOnlyHandheld(options) {

        switch (getHeadMaskMode()) {

            // 原版：使用完整 Head Mask
            case "vanilla":
                return options.headMask;

            // 相容模式：僅保留手持物遮罩
            case "compat": {
                const handheld = options.worn?.handheld;

                if (
                    handheld?.setup?.mask_img === 1 &&
                    handheld?.setup?.variable
                ) {
                    return `img/clothes/handheld/${handheld.setup.variable}/mask.png`;
                }

                return null;
            }

            // 停用 Head Mask
            case "off":
                return null;
        }

        // 未知模式時回退原版
        return options.headMask;
    }

    // 覆寫 Head 相關圖層的遮罩來源
    maplebirch.char.use({
        head: { masksrcfn: headMaskOnlyHandheld },
        head_acc: { masksrcfn: headMaskOnlyHandheld },
        head_detail: { masksrcfn: headMaskOnlyHandheld },
        head_back_acc: { masksrcfn: headMaskOnlyHandheld },
        head_back: { masksrcfn: headMaskOnlyHandheld },
    });

})();