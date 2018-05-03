console.log("modal.manager.js booting");
importJs("../js/view/modal.base.js");
var ModalManager = function () {

};
ModalManager.prototype.OpenModal = function (onStartModal) {
    var modal = new ModalBase();
    modal.StartModal(onStartModal);
};
