/**
 * Created by lenovo on 2016/12/16.
 */
define(['./user'], function (u) {
    var ui = {
        rows: [
            {
                view: 'carousel',
                id: 'home:carousel',
                height: 120,
                cols: [
                    {css: 'nav-pic', template: '<img src="../assets/pic003.jpg" style="width: 100%;height: 100%;">'},
                    {css: 'nav-pic', template: '<img src="../assets/pic2.jpg" style="width: 100%;height: 100%;">'},
                    {css: 'nav-pic', template: '<img src="../assets/pic8.jpg" style="width: 100%;height: 100%;">'}
                ],
                navigation: {
                    type: 'side',
                    buttons: false
                }
            },
            {
                type: 'space',
                css: 'home-nav',
                cols: [
                    {
                        view: 'button',
                        type: 'iconTop',
                        height: 60,
                        icon: 'clock-o',
                        label: '电量电费',
                        click: function () {
                            u.Show('charge');
                        }
                    },
                    {
                        view: 'button',
                        type: 'iconTop',
                        icon: 'bar-chart',
                        label: '用电趋势',
                        click: function () {
                            u.Show('trend');
                        }
                    },
                    {
                        view: 'button',
                        type: 'iconTop',
                        icon: 'volume-up',
                        label: '停电信息',
                        click: function () {
                            u.Show('outage');
                        }
                    },
                    {
                        view: 'button',
                        type: 'iconTop',
                        icon: 'wrench',
                        label: '报修',
                        click: function () {
                            u.Show('repair');
                        }
                    }
                ]
            },
            {
                view: 'scrollview',
                scroll: 'y',
                body: {
                    type: 'wide',
                    rows: [
                        {template: '<img src="../assets/pic002.jpeg" style="width: 100%;height: 100%;">', height: 200},
                        {template: '<img src="../assets/pic001.jpg" style="width: 100%;height: 100%;">', height: 200},
                        {template: '<img src="../assets/pic004.jpg" style="width: 100%;height: 100%;">', height: 200}
                    ]
                }
            }
        ]
    };
    var timer;
    var index = 0;
    return {
        $ui: ui,
        $oninit: function (view) {
            view.adjust();
            index = 1;
            timer = setInterval(function () {
                var nav = $$('home:carousel');
                nav.setActiveIndex(index%3);
                index += 1;
            }, 3000);
        },
        $ondestroy: function () {
            clearInterval(timer);
        }
    };
});