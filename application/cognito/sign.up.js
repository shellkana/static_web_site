var json = JSON;
console.log(json);
var ConfirmView = function () {
    ViewBase.call(this);
    this.Title = "Index";
    this.Name = "ConfirmView";
};
inherits(ConfirmView, ViewBase);
ConfirmView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    var _this = this;
    var uri = new URI();
    var code = this.AppendInput("認証コード", "xxxxxx", "メアドに届いたコードを入力や！");
    this.AppendButton("認証する", function () {
        apiManager.ExecApi("cognito/Confirm", {
            Name: tempData.cognitoUserName,
            Password: code.val()
        })
    });
};
viewManager.ChangeView(ConfirmView);