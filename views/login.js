/**
 * Created by lenovo on 2016/12/21.
 */
define([], function () {
    var ui = {
        rows: [
            {
                template: "<img src='assets/logo.jpg' style='text-align: center;width: 100%;height: 100%;'>",
                css: 'login-head',
                borderless: true,
                gravity: 0.6
            },
            {
                view: 'form',
                id: 'login:form',
                elements: [
                    {
                        view: 'text',
                        label: '用户',
                        value: 'user1',
                        name: 'username',
                        labelPosition: 'top',
                        required: true,
                        suggest: [
                            {id: 1, value: 'user1'},
                            {id: 2, value: 'admin'},
                            {id: 3, value: 'root'}
                        ]
                    },
                    {
                        view: 'text',
                        label: '密码',
                        name: 'password',
                        labelPosition: 'top',
                        required: true,
                        type: 'password'
                    },
                    {
                        view: 'button',
                        value: '登录',
                        click: function () {
                            this.getParentView().refresh();
                            var users = {'user1': 123, 'admin': 123, 'root': 123};
                            var username = $$('login:form').getValues().username;
                            var password = $$('login:form').getValues().password;
                            if((username in users) && users[username] == password){
                                webix.storage.cookie.put('user', {'username': username});
                                this.getParentView().$scope.show('/home');
                            }
                            else{
                                webix.storage.cookie.remove('user');
                                alert('用户名或密码错误。');
                            }
                        }
                    },
                    {
                        cols: [
                            {
                                view: 'label',
                                label: '忘记密码？',
                                align: 'right',
                                click: function () {

                                }
                            },
                            {
                                view: 'label',
                                align: 'center',
                                label: '|'
                            },
                            {
                                view: 'label',
                                label: '立即注册',
                                align: 'left',
                                click: function () {

                                }
                            }
                        ]
                    },
                    {

                    }
                ]

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