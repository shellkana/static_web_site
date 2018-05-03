console.log("view.base.js booting");
var ViewBase = function () {
    this.Container = $(".container");
};

ViewBase.prototype.StartView = function () {
    console.log("ViewBase.StartView");
    this.Container.empty();
};

ViewBase.prototype.AppendButton = function (text, callback) {
    console.log("appendButton");
    var button = $(`
<p><a class="btn btn-primary" href="#" role="button">${text}</a></p>`);
    this.Container.append(button);
    button.click(callback);
    return button;
};

ViewBase.prototype.AppendInput = function (header, text, help) {
    var listCode = `
  <div class="form-group">
    <label>${header}</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="${text}">
    <small id="emailHelp" class="form-text text-muted">${help}</small>
  </div>`;
    var input = $(listCode);
    this.Container.append(input);
    return input.find("input");
};

ViewBase.prototype.AppendPanel = function (title, text) {
    var panel = $(`
<div class="panel panel-success">
  <div class="panel-heading">${title}</div>
  <div class="panel-body">
    ${text}
  </div>
</div>`);
    this.Container.append(panel);
    return panel;
};
ViewBase.prototype.AppendWarningText = function (text) {
    var tag = `
<div class="alert alert-warning" role="alert">
  <a href="#" class="alert-link">${text}</a>
</div>`;
    this.Container.append($(tag));
};

ViewBase.prototype.AppendBr = function () {
    this.Container.append($("<br />"));
};

ViewBase.prototype.AppendHr = function () {
    this.Container.append($("<hr />"));
};

ViewBase.prototype.AppendTable = function (title, header) {
    var tag = `
<div class="panel panel-default">
  <div class="panel-heading">${title}</div>
  <table class="table">
    <thead>
      <tr>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>`
    var table = $(tag);
    this.Container.append(table);
    header.forEach(function (element) {
        table.find("tr").append($(`<th>${element}</th>`));
    });
    return table.find("table");
};

ViewBase.prototype.AppendTr = function (table, elements) {
    var tr = $("<tr></tr>");
    elements.forEach(function (element) {
        tr.append($(`<td>${element}</td>`));
    })
    table.find("tbody").append(tr);
    return tr;
};

ViewBase.prototype.AppendRadio = function (text) {
    var radio = $(`
<div class="radio">
  <label><input type="radio" name="optradio">${text}</label>
</div>
    `);
    this.Container.append(radio);
    return radio;
};
ViewBase.prototype.AppendCard = function (src, title, discription) {
    var card = $(`
      <div class="row">
        <div class="col-lg-5 col-md-4 col-sm-3 col-xs-2"></div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-8">
          <div class="panel panel-default my_panel">
            <div class="panel-body">
              <img src="${src}" alt="" class="img-responsive center-block" />
            </div>
            <div class="panel-footer">
              <h3>${title}</h3>
              <p>${discription}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-4 col-sm-3 col-xs-2"></div>
      </div>
    `);
    this.Container.append(card);
};
ViewBase.prototype.AppendSignIn = function (_callback) {
    var signIn = $(`
    <form class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    `);
    signIn.find("button").click(function () { _callback(signIn); });
    this.Container.append(signIn);
    return signIn;
};
