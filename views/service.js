/**
 * Created by lenovo on 2016/12/21.
 */
define(['./user'], function (u) {
    var ui = {
        rows: [
            {
                view: 'template',
                css: 'service-head',
                borderless: true,
                template: "<img src='../assets/pic3.png' style='width: 100%;height: 100%;'>",
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
                        {id: 1, icon: 'volume-up', name: '停电信息'},
                        {id: 2, icon: 'wrench', name: '报修'},
                        {id: 3, icon: 'cc-visa', name: '预留1'},
                        {id: 4, icon: 'wifi', name: '预留2'},
                        {id: 5, icon: 'mobile', name: '预留3'}
                    ],
                    click: function (id) {
                        switch(id){
                            case '1':
                                u.Show('outage');
                                break;
                            case '2':
                                u.Show('repair');
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