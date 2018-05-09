/**
 * Created by lenovo on 2016/12/21.
 */
define(['app'], function (app) {
    function Show(url) {
        var user = webix.storage.cookie.get('user');
        if(!user){
            app.show('/power/login');
        }
        else{
            app.show('/power/'+ url);
        }

    }
    return {
        Show: Show
    };
});