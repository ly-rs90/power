/**
 * Created by lenovo on 2016/12/18.
 */
define(['./user'], function (u) {
    var ui = {
        rows: [
            {
                template: '请选择计划停电时间',
                type: 'header'
            },
            {
                type: 'space',
                css: 'outage-date',
                rows: [
                    {
                        view: 'datepicker',
                        label: '开始时间:',
                        readonly: true,
                        format: '%Y-%m-%d',
                        value: new Date()
                    },
                    {
                        view: 'datepicker',
                        label: '结束时间:',
                        format: '%Y-%m-%d',
                        value: new Date(Date.now() + 7*24*3600*1000)
                    }
                ]
            },
            {
                template: '请选择停电地区',
                type: 'header'
            },
            {
                view: 'list',
                select: true,
                template: '#area#',
                data: [
                    {area: '锦江区'},
                    {area: '金牛区'},
                    {area: '成华区'},
                    {area: '武侯区'},
                    {area: '温江区'},
                    {area: '龙泉驿'},
                    {area: '高新区'},
                    {area: '高新西区'}
                ]
            },
            {
                view: 'button',
                value: '查询',
                click: function () {
                    u.Show('outage_info');
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