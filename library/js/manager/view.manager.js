console.log("view.manager.js booting");
var ViewManager = function () {
    this.CurrentView = null;
    this.Title = $('#title');
};

// 指定したビュークラスを描画
ViewManager.prototype.ChangeView = function (_targetClass) {
    console.log("ChangeView:" + _targetClass);
    this.CurrentViewName = _targetClass.Name;
    this.CurrentView = new _targetClass();
    this.Title.text(this.CurrentView.Title);
    console.log(this);
    this.CurrentView.StartView();
};
