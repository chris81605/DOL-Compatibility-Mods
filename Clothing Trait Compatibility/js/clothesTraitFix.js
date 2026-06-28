// 自动补全 setup.shopDetails 的函数

$(document).on(':passagedisplay', () => {
    console.log("[clothesTraitFix] === autoCompleteShopDetails 开始 ===");

    if (!setup.clothes || typeof setup.clothes !== "object") {
        console.warn("[clothesTraitFix] setup.clothes 未定义或不是对象，跳过补全特质");
        return;
    }

    if (setup.autoCompleteShopDetailsFixed === true) {
        console.log("[clothesTraitFix] 特质已补全过，跳过本次执行");
        return; 
    }

    console.log("开始收集所有服装特质...");

    const traitsInAllClothes = [
        ...new Set(
            Object.keys(setup.clothes)
                .filter(cat => Array.isArray(setup.clothes[cat]))
                .flatMap(cat => setup.clothes[cat])
                .filter(item => item)
                .flatMap(item => Array.isArray(item.type) ? item.type : [])
        )
    ];

    console.log(`[clothesTraitFix] 共收集到 ${traitsInAllClothes.length} 个特质`);

    let addedCount = 0;
    traitsInAllClothes.forEach(trait => {
        if (!setup.shopDetails[trait]) {
            setup.shopDetails[trait] = {
                name: trait,
                desc: "未定义描述",
                details: "无"
            };
            console.log(`[clothesTraitFix] 已补全特质: ${trait}`);
            addedCount++;
        }
    });

    console.log(`[clothesTraitFix] 本次补全特质数量: ${addedCount}`);
    console.log("[clothesTraitFix] === autoCompleteShopDetails 完成 ===");

    setup.autoCompleteShopDetailsFixed = true;
});