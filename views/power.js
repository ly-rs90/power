/**
 * Created by lenovo on 2016/12/16.
 */
define([], function () {
    var ui = {
        rows: [
            {
                view: 'toolbar',
                id: 'power:top',
                cols: [
                    {
                        view: 'button',
                        type: 'icon',
                        icon: 'map-marker',
                        width: 80,
                        label: '成都'
                    },
                    {
                        view: 'label',
                        id: 'power:title',
                        align: 'center',
                        icon: 'cog',
                        label: '电网主动服务'
                    },
                    {
                        view: 'button',
                        id: 'power:login',
                        type: 'icon',
                        width: 80,
                        label: '登录',
                        click: function () {
                            var cer = webix.storage.cookie.get('user');
                            if(cer){
                                this.$scope.show('./customer');
                            }
                            else{
                                this.$scope.show('./login');
                            }
                        }
                    }
                ]
            },
            {
                rows: [
                    {$subview: true}
                ]
            },
            {
                view: 'toolbar',
                id: 'power:bottom',
                height: 60,
                cols: [
                    {
                        view: 'button',
                        id: 'power:home',
                        type: 'iconTop',
                        icon: 'home',
                        label: '首页',
                        click: function () {
                            this.$scope.show('./home');
                        }
                    },
                    {
                        view: 'button',
                        id: 'power:electricity',
                        type: 'iconTop',
                        icon: 'clock-o',
                        label: '用电',
                        click: function () {
                            this.$scope.show('./electricity');
                        }
                    },
                    {
                        view: 'button',
                        id: 'power:service',
                        type: 'iconTop',
                        icon: 'headphones',
                        label: '服务',
                        click: function () {
                            this.$scope.show('./service');
                        }
                    },
                    {
                        view: 'button',
                        id: 'power:customer',
                        type: 'iconTop',
                        icon: 'user',
                        label: '用户',
                        click: function () {
                            var cer = webix.storage.cookie.get('user');
                            if(cer){
                                this.$scope.show('./customer');
                            }
                            else{
                                this.$scope.show('./login');
                            }
                        }
                    }
                ]
            }
        ]
    };
    return {
        $ui: ui,
        $onurlchange: function(config, url){
            var url_inner = url[0].page;
            var label = $$('power:title');
            var pages = {'charge': '电量电费', 'trend': '用电趋势', 'repair': '报修',
                'outage': '停电信息', 'outage_info': '停电信息', 'service': '服务',
                'electricity': '用电', 'customer': '用户', 'login': '用户登录'};

            var cer = webix.storage.cookie.get('user');
            if(cer){
                $$('power:login').config.label = cer.username;
            }
            else{
                $$('power:login').config.label = '登录';
            }

            if(url_inner in pages){
                label.config.label = pages[url_inner];
            }
            else{
                label.config.label = '电网主动服务';
            }
            label.refresh();
            $$('power:login').refresh();
        }
    };
});