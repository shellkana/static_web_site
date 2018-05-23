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
    var table = $('<table class="table table-bordered"></table>');
    var file = $(`<input type="file" class="form-control-file" id="exampleFormControlFile1">`);
    file.on("change",function(_e){
        table.empty();
        var reader = new FileReader();
        reader.readAsText(_e.target.files[0]);
        reader.onload = function ()
        {
            console.log(reader.result);
            var array = reader.result.split("\\n");
            var csvArray = [];
            array.forEach(element=>{
                csvArray.push(element.split(","));
            });
            console.log(csvArray);
            var thead = $("<thead></thead>");
            var theadtr = $("<tr></tr>");
            var tbody = $("<tbody></tbody>");
            tbody.css({
                "height":"1000px",
                "overflow-y": "auto"
            });
            csvArray[0].forEach(element=>{
                theadtr.append($("<td>"+element+"</td>"));
            });
            thead.append(theadtr);
            table.append(thead);
            csvArray.forEach(element=>{
                var tr = $("<tr></tr>");
                element.forEach(element2=>{
                    tr.append($("<td>"+element2+"</td>"));
                });
                tbody.append(tr);
            });
            table.append(tbody);
            _this.Container.append(table);
        };
    });
    this.Container.append(file);

};
IndexView.prototype.UpdateUl = function (_json) {
    this.Ul.empty();
    _json.forEach(element => {
        this.Ul.append($("<li><a href='" + location.href + "&project=" + element + "'>" + element + "</a></li>"));
    });

};
viewManager.ChangeView(IndexView);