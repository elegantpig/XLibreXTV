const CUSTOMER_SITES = {
    hongniu: {
        api: 'https://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '红牛资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
