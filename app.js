/**
 * Created by lenovo on 2016/12/16.
 */
define(['libs/webix-jet/core'], function (core) {
    webix.ui.fullScreen();
    webix.i18n.setLocale('zh-CN');
    return core.create({
        id: 'power',
        version: '1.0',
        debug: true,
        name: '电网主动服务',
        start: '/power/home'
    });
});