var json = JSON;
var IndexView = function () {
    ViewBase.call(this);
    this.Title = "Index";
    this.Name = "IndexView";
};
inherits(IndexView, ViewBase);
IndexView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    var _this = this;
    var uri = new URI();
    this.AppendInput("Email", "xxxx@xxx.com", "メアドを入れるんやで");
    this.AppendInput("Password", "Xxxxx", "6文字以上頼んます");
    this.AppendButton("SignIn", function () {

    });
    this.AppendButton("SignUp", function () {
        viewManager.ChangeView(SignUpView);
    });
};
viewManager.ChangeView(IndexView);
var SignUpView = function () {
    ViewBase.call(this);
    this.Title = "SignUp";
    this.Name = "SignUpView";
};
inherits(SignUpView, ViewBase);
SignUpView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    var nameInput = this.AppendInput("Name", "太郎", "表示名");
    var emailInput = this.AppendInput("Email", "xxxx@xxx.com", "メアドを入れるんやで");
    var passwordInput = this.AppendInput("Password", "Xxxxx", "6文字以上頼んます");
    this.AppendButton("SignUp", function () {
        apiManager.ExecApi("cognito/SignUp", {
            Name: nameInput.val(),
            Password: passwordInput.val(),
            Email: emailInput.val()
        })
    });
};