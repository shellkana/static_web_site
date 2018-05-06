var HelloWorldView = function () {
    ViewBase.call(this);
    this.Title = "HelloWorld";
    this.Name = "HelloWorldView";
};
inherits(HelloWorldView, ViewBase);
HelloWorldView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    var _this = this;
    this.AppendInput("header","text","help");
    this.AppendButton("Hello! World!", function () {
        modalManager.OpenModal(function (_modal) {
            console.log(_modal);
            _modal.SetTitle("Hello World");
            json = JSON;
            _modal.AppendText("モーダルサンプルー"+json[0].Content);

        });
    });

};
viewManager.ChangeView(HelloWorldView);