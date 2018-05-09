/**
 * Created by lenovo on 2016/12/19.
 */
define([], function () {
    var option = {
        title: {
            text: '用电趋势'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['电费', '用电量']
        },
        yAxis: [
            {
                name: '电费(元)',
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dotted'
                    }
                }
            },
            {
                name: '用电量(Kwh)',
                type: 'value'
            }
        ],
        xAxis: {
            axisLabel: {
                interval: 0,
                formatter: function (value, index) {
                    return index + 1;
                }
            },
            data: ['2016年1月', '2016年2月', '2016年3月', '2016年4月',
                '2016年5月', '2016年6月', '2016年7月', '2016年8月',
                '2016年9月', '2016年10月', '2016年11月', '2016年12月']
        },
        grid: {
            y: 52,
            y2: 25
        },
        series: [
            {
                name: '电费',
                type: 'bar',
                data: [20,32,35,33,31,45,56,54,56,59,57,58]
            },
            {
                name: '用电量',
                type: 'bar',
                yAxisIndex: 1,
                data: [64,68,70,66,42,90,98,108,100,110,104,102]
            }
        ]

    };
    function getOption(type) {
        if(1 == type){
            option.series[0].type = 'line';
            option.series[1].type = 'line';
        }
        else{
            option.series[0].type = 'bar';
            option.series[1].type = 'bar';
        }
        return option;
    }
    return {
        getOption: getOption
    };
});