//定义标签模板
Vue.component("card-link", {
    template: "#link",
    data: function () {
        //卡片浮动效果
        return {
            linkUP: false,
        }
    },
    methods: {
        //卡片浮动效果
        floatLink: function () {
            this.linkUP = true;
        },
        floatLinkLeave: function () {
            this.linkUP = false;
        },
    }
})

//新实例
var app = new Vue({
    el: "#erogeGuidePage",
    data: {
        //全局渲染
        isVisiable: false,
        isRight: false,
        //导航菜单显隐
        iconX: false,
        iconCircle: true,
        //卡片检索
        searchname: "",
        backgroundChange: false,
        cardloop: true,

        cardlist1: [
            //1
            {
                name: "黄油公司",
                sortlists: [{
                        name: "Yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "Nitro+",
                        link: "https://www.nitroplus.co.jp/",
                        pic: "./img/nplus.webp",
                    },
                    {
                        name: "Aquaplus",
                        link: "https://aquaplus.jp/",
                        pic: "./img/aquaplus.webp",
                    },
                    {
                        name: "Purplesoftware",
                        link: "http://www.purplesoftware.jp",
                        pic: "./img/purple.webp",
                    },
                    {
                        name: "GIGA",
                        link: "http://www.web-giga.com",
                        pic: "./img/giga.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                ],
                ID: "H1",
            },
            //2
            {
                name: "国内社区",
                sortlists: [{
                        name: "绯月Galgame",
                        link: "http://bbs.9moe.com/",
                        pic: "./img/kf.webp",
                    },
                    {
                        name: "Purplesoftware",
                        link: "http://www.purplesoftware.jp",
                        pic: "./img/purple.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                ],
                ID: "H2",
            },
            //3
            {
                name: "国外社区",
                sortlists: [{
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "Purplesoftware",
                        link: "http://www.purplesoftware.jp",
                        pic: "./img/purple.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },

                ],
                ID: "H3",
            },
            //4
            {
                name: "国内团体",
                sortlists: [{
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "Purplesoftware",
                        link: "http://www.purplesoftware.jp",
                        pic: "./img/purple.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },

                ],
                ID: "H4",
            },
            //5
            {
                name: "国外团体",
                sortlists: [{
                        name: "5年目の放課後",
                        link: "http://5-y.2-d.jp/",
                        pic: "./img/5y.webp",
                    },
                    {
                        name: "Purplesoftware",
                        link: "http://www.purplesoftware.jp",
                        pic: "./img/purple.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },

                ],
                ID: "H5",
            },
            //6
            {
                name: "黄油店铺",
                sortlists: [{
                        name: "Melonbooks",
                        link: "https://www.melonbooks.co.jp/",
                        pic: "./img/melonbooks.webp",
                    },
                    {
                        name: "Getchu",
                        link: "http://www.getchu.com",
                        pic: "./img/getchu.webp",
                    },
                    {
                        name: "Sofmap",
                        link: "https://www.sofmap.com/",
                        pic: "./img/sofmap.webp",
                    },
                    {
                        name: "Gamers",
                        link: "https://www.gamers.co.jp",
                        pic: "./img/gamers.webp",
                    },
                    {
                        name: "Booth",
                        link: "https://booth.pm",
                        pic: "./img/booth.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/yuzu.webp",
                    },

                ],
                ID: "H6",
            },
        ],

        cardlist2: [{
                name: "贴吧首页",
                link: "https://tieba.baidu.com/f?kw=galgame&fr=index",
            },
            {
                name: "枕套脏了",
                link: "https://ztzl.moe",
            },
            {
                name: "Discord群组",
                link: "https://discord.gg/AdzWbhM",
            },
        ],

        cardlist3: [],
    },
    //侧栏收缩
    methods: {
        menuBar: function () {
            if (this.iconCircle === true) {
                this.isVisiable = true;
                this.iconX = true;
                this.iconCircle = false;
                this.isRight = true;
            } else {
                this.isVisiable = false;
                this.iconX = false;
                this.iconCircle = true;
                this.isRight = false;
            }
        },
        //卡片检索
        search: function () {
            var r = /\s+/g;
            var newName = new RegExp(this.searchname.toLowerCase().replace(r, ' ').split(' ').join('|'));
            for (var i = 0; i < app.cardlist1.length; i++) {
                app.cardlist1[i].sortlists.sort(function (a, b) {
                    if (a.name.toLowerCase().search(newName) === -1 && b.name.toLowerCase().search(newName) !== -1) {
                        return 1;
                    } else if (a.name.toLowerCase().search(newName) === -1 && b.name.toLowerCase().search(newName) === -1) {
                        return 0;
                    } else if (a.name.toLowerCase().search(newName) !== -1 && b.name.toLowerCase().search(newName) !== -1) {
                        return 0;
                    } else {
                        return -1;
                    }
                });
                var newarray = app.cardlist1[i].sortlists.filter(function (val) {
                    if (val.name.toLowerCase().search(newName) === -1) {
                        return false;
                    } else {
                        return true;
                    }
                });
            }
            console.log(newarray);
            this.cardlist1 = [{
                name: "搜索结果",
                sortlists: []
            }];
            for (i = 0; i < newarray.length; i++) {
                app.cardlist1[0].sortlists.push(newarray[i]);
            }

            this.backgroundChange = true;
        },
    }
});