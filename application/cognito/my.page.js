var json = JSON;
console.log(json);
var MyPageView = function () {
    ViewBase.call(this);
    this.Title = "Index";
    this.Name = "IndexView";
};
inherits(MyPageView, ViewBase);
MyPageView.prototype.StartView = function () {
    ViewBase.prototype.StartView.call(this);
    this.Container.append($("<p>" + json.stringify() + "</p>"));
};
viewManager.ChangeView(MyPageView);