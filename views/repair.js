/**
 * Created by lenovo on 2016/12/18.
 */
define([], function () {
    var ui = {
        view: 'scrollview',
        scroll: 'y',
        body: {
            rows: [
                {
                    view: 'form',
                    borderless: true,
                    elements: [
                        {
                            view: 'text',
                            label: '联系人:',
                            labelPosition: 'top',
                            required: true
                        },
                        {
                            view: 'text',
                            label: '联系电话:',
                            labelPosition: 'top',
                            required: true
                        },
                        {
                            view: 'text',
                            label: '故障地址:',
                            required: true,
                            labelPosition: 'top'
                        },
                        {
                            view: 'textarea',
                            label: '故障描述：',
                            height: 120,
                            labelPosition: 'top'
                        },
                        {
                            view: 'button',
                            value: '报修',
                            click: function () {
                                alert('您的报修申请已提交。');
                            }
                        }
                    ]
                },
                {

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