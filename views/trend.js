/**
 * Created by lenovo on 2016/12/18.
 */
define(['../models/trend_data'], function (options) {
    var ui = {
        rows: [
            {
                view: 'template',
                template: '',
                id: 'trend:chart',
                gravity: 2
            },
            {
                view: 'form',
                elements: [
                    {
                        view: 'datepicker',
                        type: 'month',
                        label: '开始月份',
                        value: new Date(2016, 0),
                        format: '%Y年%m月'
                    },
                    {
                        view: 'datepicker',
                        type: 'month',
                        label: '结束月份',
                        value: new Date(2016, 11),
                        format: '%Y年%m月'
                    },
                    {
                        view: 'radio',
                        id: 'trend:radio',
                        label: '类型',
                        options: ['柱状图', '曲线图'],
                        click: function () {
                            var type = this.getValue();
                            if('曲线图' == type){
                                echart.setOption(options.getOption(1));
                            }
                            else{
                                echart.setOption(options.getOption(0));
                            }
                        }
                    },
                    {
                        view: 'button',
                        value: '查询',
                        click: function () {

                        }
                    }
                ]
            }
        ]
    };
    var echart;
    function drawTrendChart(option) {
        echart = echarts.init($$('trend:chart').getNode());
        if(echart){
            echart.setOption(option);
        }
    }
    return {
        $ui: ui,
        $oninit: function (view) {
            view.adjust();
            drawTrendChart(options.getOption(0));
            $$('trend:radio').setValue('柱状图');
        },
        $ondestroy: function () {
            if(echart){
                echart.dispose();
                echart = null;
            }
        }
    };
});