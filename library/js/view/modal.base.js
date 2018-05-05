var ModalBase = function () {
    this.Modal = $('#myModal');
    this.Body = this.Modal.find('.modal-body');
    this.Footer = this.Modal.find('.modal-footer');
    this.Close = this.Modal.find('.close');
};
ModalBase.prototype.StartModal = function (onStartModal) {
    this.Body.empty();
    this.Footer.empty();
    this.Close.show();
    this.Modal.modal({
        backdrop: 'static',
        keyboard: false
    });
    onStartModal(this);

};
ModalBase.prototype.SetTitle = function (text) {
    this.Modal.find("h4").text(text);
};
ModalBase.prototype.AppendInput = function (header, text, help) {
    var listCode = `
  <div class="form-group">
    <label>${header}</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="${text}">
    <small id="emailHelp" class="form-text text-muted">${help}</small>
  </div>`;
    var input = $(listCode);
    this.Body.append(input);
    return input.find("input");
}
ModalBase.prototype.AppendFooterButtonClose = function () {
    var tag = '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    this.Footer.append($(tag));
};
ModalBase.prototype.AppendFooterButton = function (text, callback) {
    var button = $(`<button type="button" class="btn btn-primary">${text}</button>`);
    button.click(callback);
    this.Footer.append(button);
};
ModalBase.prototype.AppendListGroup = function (elements) {
    var tag = $(`
<ul class="list-group">
</ul>`);
    elements.forEach(function (element) {
        tag.append($(`<li class="list-group-item">${element}</li>`))
    });

    this.Body.append(tag);
};
ModalBase.prototype.AppendText = function (text) {
    this.Body.append(text);
};
ModalBase.prototype.HideClose = function () {
    this.Close.hide();
};
