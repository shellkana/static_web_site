var json = JSON;
console.log(json);
modalManager.OpenModal(function (_modal) {
    _modal.SetTitle("認証成功");
    _modal.AppendText("認証に成功したくさいで");
    _modal.bind('hide', function () {
        viewManager.ChangeView(IndexView);
    });
});