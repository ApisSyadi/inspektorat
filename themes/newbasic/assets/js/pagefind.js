/* ======================================================
   Pagefind Configuration
====================================================== */
const PAGEFIND_CONFIG = {
    selector: ".searchBox",
    showSubResults: false,
    pageSize: 8,
    useWebWorker: true,
    translations: {
        placeholder: "Cari...",
        zero_results: "Tidak ditemukan",
        clear_search: "Hapus",
    },
};

/* ======================================================
   Preload function (for faster Pagefind)
====================================================== */
function preloadPagefindAssets() {
    const assets = [
        { href: "/pagefind/pagefind.js", as: "script" },
        { href: "/pagefind/pagefind-ui.css", as: "style" },
        { href: "/pagefind/wasm/pagefind.wasm", as: "fetch", type: "application/wasm" },
    ];

    assets.forEach(asset => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = asset.href;
        link.as = asset.as;
        if (asset.type) link.type = asset.type;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
    });
}


/* ======================================================
   Initialize Pagefind UI
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    preloadPagefindAssets();

    const searchBox = document.querySelector(PAGEFIND_CONFIG.selector);
    if (!searchBox) return;

    new PagefindUI({
        element: searchBox,
        showSubResults: PAGEFIND_CONFIG.showSubResults,
        pageSize: PAGEFIND_CONFIG.pageSize,
        useWebWorker: PAGEFIND_CONFIG.useWebWorker,
        translations: PAGEFIND_CONFIG.translations,
    });
});
