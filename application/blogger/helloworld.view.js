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
    var input = this.AppendInlineInputAndButton(function (_input) {
        console.log(_input.val());
        apiManager.ExecApi("sample/AddComment", { "Content": _input.val() });
        _input.val("");
    });
    input.keypress(function (e) {
        if (input.val() && e.which == 13) {
            apiManager.ExecApi("sample/AddComment", { "Content": input.val() });
            input.val("");
        }
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