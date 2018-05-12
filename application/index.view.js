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
    var ul = $("<ul></ul>");
    this.Container.append(ul);
    this.Ul = ul;
    this.UpdateUl(json);
    var uri = new URI();
    var project = uri.search(true)["project"];
    console.log(project);
    console.log(json);
};
IndexView.prototype.UpdateUl = function (_json) {
    this.Ul.empty();
    _json.forEach(element => {
        this.Ul.append($("<li>" + element + "</li>"));
    });

};
viewManager.ChangeView(IndexView);