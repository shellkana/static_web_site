var HelloWorldView = function () {
    ViewBase.call(this);
    this.Title = "HelloWorld";
    this.Name = "HelloWorldView";
};
inherits(HelloWorldView, ViewBase);
HelloWorldView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    var _this = this;
    var input = this.AppendInput("header", "text", "help");
    this.AppendButton("Hello! World!", function () {
        modalManager.OpenModal(function (_modal) {
            console.log(_modal);
            _modal.SetTitle("Hello World");
            _modal.AppendText("モーダルサンプルー");
        });
        console.log(input.val());
        apiManager.ExecApi("AddComment", { "Content": input.val() });
    });
    var json = JSON;
    var li = $("<ul></ul>");
    json.forEach(element => {
        li.append($("<li>" + element.Content + "</li>"));
    });
    this.Container.append(li);
};
viewManager.ChangeView(HelloWorldView);