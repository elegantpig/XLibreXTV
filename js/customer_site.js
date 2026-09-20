const CUSTOMER_SITES = {
    hongniu: {
        api: 'https://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '红牛资源',
    },
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360点播',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod/from/jsm3u8',
        name: '极速资源',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'ikun|点播',
    },
    feifan: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod/from/ffm3u8',
        name: '非凡资源',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风|点播',
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度|点播',
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '飘零|点播',
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速博|点播',
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '魔都|点播',
    },
    zuida: {
        api: 'https://zuidazy.me/api.php/provide/vod',
        name: '最大|点播',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/from/xlm3u8',
        name: '新浪资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
