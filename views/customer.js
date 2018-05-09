/**
 * Created by lenovo on 2016/12/21.
 */
define([], function () {
    var ui = {
        rows: [
            {
                view: 'template',
                css: 'customer-head',
                borderless: true,
                template: "<img src='../assets/pic2.png' style='width: 100%;height: 100%;'>",
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
                        {id: 1, icon: 'info-circle', name: '常见问题'},
                        {id: 2, icon: 'cog', name: '账户设置'},
                        {id: 3, icon: 'question-circle', name: '关于我们'},
                        {id: 4, icon: 'comment', name: '我的消息'},
                        {id: 5, icon: 'power-off', name: '退出'},
                        {id: 6, icon: 'mobile', name: '预留1'}
                    ],
                    click: function (id) {
                        switch(id){
                            case '1':
                                break;
                            case '2':
                                break;
                            case '3':
                                break;
                            case '4':
                                break;
                            case '5':
                                webix.storage.cookie.remove('user');
                                this.getParentView().$scope.show('/home');
                                break;
                            case '6':
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