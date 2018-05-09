/**
 * Created by lenovo on 2016/12/20.
 */
define([], function () {
    var ui = {
        view: 'scrollview',
        scroll: 'y',
        body: {
            type: 'space',
            css: 'charge-top',
            rows: [
                {
                    cols: [
                        {
                            view: 'datepicker',
                            type: 'month',
                            label: '月份:',
                            value: new Date(),
                            format: '%Y年%m月'
                        },
                        {
                            view: 'button',
                            value: '查询',
                            maxWidth: 80,
                            click: function () {

                            }
                        }
                    ]
                },
                {
                    rows: [
                        {
                            view: 'template',
                            type: 'header',
                            template: '<div class="charge-bill-date">#date#</div><div class="charge-bill-state"><span class="webix_icon fa-#icon#"></span>#state#</div>',
                            data: [
                                {date: '2016年12月', state: '已结清', icon: 'check-circle'}
                            ]
                        },
                        {
                            cols: [
                                {
                                    css: 'charge-left-value',
                                    rows: [
                                        {
                                            view: 'template',
                                            borderless: true,
                                            height: 30,
                                            template: '电量合计：'
                                        },
                                        {
                                            view: 'template',
                                            borderless: true,
                                            css: 'charge-value',
                                            height: 100,
                                            template: function (obj) {
                                                var v = obj.value;
                                                if(v <= 300){
                                                    return "<div class='charge-value-normal'>" + v + "<span>度</span></div>";
                                                }
                                                else{
                                                    return "<div class='charge-value-warn'>" + v + "<span>度</span></div>";
                                                }
                                            },
                                            data: [
                                                {value: 700}
                                            ]
                                        }
                                    ]
                                },
                                {
                                    css: 'charge-right-value',
                                    rows: [
                                        {
                                            view: 'template',
                                            borderless: true,
                                            height: 30,
                                            template: '电费合计：'
                                        },
                                        {
                                            view: 'template',
                                            borderless: true,
                                            height: 100,
                                            css: 'charge-value',
                                            template: function (obj) {
                                                var v = obj.value;
                                                if(v <= 150){
                                                    return "<div class='charge-value-normal'>" + v + "<span>元</span></div>";
                                                }
                                                else{
                                                    return "<div class='charge-value-warn'>" + v + "<span>元</span></div>";
                                                }
                                            },
                                            data: [
                                                {value: 101.2}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            view: 'template',
                            type: 'header',
                            template: '<div>余额：<span class="webix_icon fa-rmb"></span>#remain#</div>',
                            data: [
                                {remain: 23.16}
                            ]
                        }
                    ]
                },
                {
                    view: 'label',
                    label: '用电明细：'
                },
                {
                    view: 'datatable',
                    autoheight: true,
                    scroll: false,
                    columns: [
                        {id: 'type', header: '阶梯分档', fillspace: true},
                        {id: 'count', header: '电量', fillspace: true},
                        {id: 'price', header: '电价', fillspace: true},
                        {id: 'charge', header: '电费', fillspace: true}
                    ],
                    data: [
                        {type: '第一档', count: 120.51, price: 0.513, charge: (120.51*0.513).toFixed(2)},
                        {type: '第二档', count: 40.98, price: 0.593, charge: (40.98*0.593).toFixed(2)},
                        {type: '第三档', count: 21.67, price: 0.613, charge: (21.67*0.613).toFixed(2)}
                    ]
                }
            ]
        }
    };
    return {
        $ui: ui,
        $oninit: function (view) {
            view.adjust();
        }
    };
});