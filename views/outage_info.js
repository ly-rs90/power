/**
 * Created by lenovo on 2016/12/20.
 */
define(['models/outage_data'], function (data) {
    var ui = {
        view: 'list',
        type: {
            height: 'auto',
            template:  "<div>" +
                            "<div class='outage-time'>停电时间：</div>" +
                            "<div class='outage-time-value'>#start#<br>#end#</div>" +
                        "</div>" +
                        "<div>" +
                            "<div class='outage-area'>停电范围：</div>" +
                            "<div class='outage-area-value'>#area#</div>" +
                        "</div>" +
                        "<div>" +
                            "<div class='outage-reason'>停电原因：</div>" +
                            "<div class='outage-reason-value'>#reason#</div>" +
                        "</div>"
        },
        data: data.data
    };
    return {
        $ui: ui,
        $oninit: function (view) {
            view.adjust();
        }
    };
});