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
    var uri = new URI();
    var project = uri.search(true)["project"];
    console.log(project);
    console.log(json);
    if (json.includes(project)) {
        apiManager.ExecApi(project + "/LoadIndex");
    } else {
        this.UpdateUl(json);
    }
};
IndexView.prototype.UpdateUl = function (_json) {
    this.Ul.empty();
    _json.forEach(element => {
        this.Ul.append($("<li><a href='" + location.href + "&project=" + element + "'>" + element + "</a></li>"));
    });

};
viewManager.ChangeView(IndexView);