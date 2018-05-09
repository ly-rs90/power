/**
 * Created by lenovo on 2016/12/21.
 */
define(['./user'], function (u) {
    var ui = {
        rows: [
            {
                view: 'template',
                css: 'electricity-head',
                borderless: true,
                template: "<img src='../assets/pic1.png' style='width: 100%;height: 100%;'>",
                height: 200
            },
            {
                view: 'scrollview',
                scroll: 'y',
                body: {
                    view: 'dataview',
                    xCount: 3,
                    type: {
                        width: 'auto',
                        height: 100,
                        template: "<div style='text-align: center;padding-top: 15px;'><div><span class='webix_icon fa-#icon#'></span></div><div>#name#</div>" +
                        "</div>"
                    },
                    data: [
                        {id: 1, icon: 'clock-o', name: '电量电费'},
                        {id: 2, icon: 'bar-chart', name: '用电趋势'},
                        {id: 3, icon: 'cc-visa', name: '网上缴费'},
                        {id: 4, icon: 'wifi', name: '预留1'},
                        {id: 5, icon: 'mobile', name: '预留2'}
                    ],
                    click: function (id) {
                        switch(id){
                            case '1':
                                u.Show('charge');
                                break;
                            case '2':
                                u.Show('trend');
                                break;
                            case '3':
                                break;
                            case '4':
                                break;
                            case '5':
                                break;
                        }
                    }
                }
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (view) {
            view.adjust();
        }
    };
});