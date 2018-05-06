console.log("api.manager.js booting");
var ApiManager = function () {

};
ApiManager.prototype.ExecApi = function (_taskName, _postParam) {
    var uri = new URI();
    var url = uri.search(true)["uri"];
    console.log("=======START API=======");
    console.log("url=" + url);
    var postParam = "";
    if (_postParam != null) {
        postParam = JSON.stringify(_postParam);
        console.log("post=" + postParam);
    }
    return $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data: JSON.stringify({ TaskName: _taskName, JsonData: postParam }),
    }).done
        (
        function (_json) {
            console.log("exec_js=" + _json["exec_js"]);
            execJs(_json["exec_js"]);
            console.log("=======FINISH API=======");
        }
        ).fail(
        function (_msg) {
            console.log(_msg);
        });

};