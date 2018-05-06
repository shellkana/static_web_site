var HelloWorldView = function () {
    ViewBase.call(this);
    this.Title = "HelloWorld";
    this.Name = "HelloWorldView";
};
inherits(HelloWorldView, ViewBase);
HelloWorldView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    var _this = this;
    this.AppendButton("OpenModal", function () {
        modalManager.OpenModal(function (_modal) {
            console.log(_modal);
            _modal.SetTitle("Hello World");
            _modal.AppendText("This is sample modal");
        });
    });
    var input = this.AppendInput("header", "text", "help");
    this.AppendButton("submit!", function () {
        console.log(input.val());
        apiManager.ExecApi("AddComment", { "Content": input.val() });
    });
    var json = JSON;
    var ul = $("<ul></ul>");
    this.Container.append(ul);
    this.Ul = ul;
    this.UpdateUl(json);
};
HelloWorldView.prototype.UpdateUl = function (_json) {
    this.Ul.empty();
    _json.forEach(element => {
        this.Ul.append($("<li>" + element.Content + "</li>"));
    });

};
viewManager.ChangeView(HelloWorldView);