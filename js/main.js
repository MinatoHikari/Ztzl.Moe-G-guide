//定义标签模板
Vue.component("card-link", {
    template: "#link",
})

//新实例
var app = new Vue({
    el: "#erogeGuidePage",
    data: {
        isVisiable: false,
        iconX: false,
        iconCircle: true,


        cardlist1: [
            //1
            {
                name: "黄油公司",
                sortlists: [{
                        name: "Yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "Nitro+",
                        link: "https://www.nitroplus.co.jp/",
                        pic: "./img/nplus.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                    {
                        name: "yuzusoft",
                        link: "http://www.yuzu-soft.com",
                        pic: "./img/logo.png",
                    },
                ],
                ID: "H1",
            },
            //2
            {
                name: "国内社区",
              sortlists:  [{
                    name: "绯月Galgame",
                    link: "http://bbs.9moe.com/",
                    pic: "./img/kf.jpg",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
            ],
                ID: "H2",
            },
            //3
            {
                name: "国外社区",
                sortlists:  [{
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },

            ],
                ID: "H3",
            },
            //4
            {
                name: "国内团体",
                sortlists:  [{
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },

            ],
                ID: "H4",
            },
            //5
            {
                name: "国外团体",
                sortlists:  [{
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },

            ],
                ID: "H5",
            },
            //6
            {
                name: "黄油店铺",
                sortlists:  [{
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
                },
                {
                    name: "yuzusoft",
                    link: "http://www.yuzu-soft.com",
                    pic: "./img/logo.png",
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

    ]
    },

    methods: {
        menuBar: function() {
            if (this.iconCircle === true) {
                this.isVisiable = true;
                this.iconX = true;
                this.iconCircle = false;
            } else {
                this.isVisiable = false;
                this.iconX = false;
                this.iconCircle = true;
            }
        },

    }
});