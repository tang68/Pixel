
/*
* jQuery Selectors
*/
const $body = $('body');
const $savePNG = $('#pam-save-png');
const $saveJPEG = $(`#pam-save-jpeg`);
const $deleteButton = $(`#pam-delete--button`);
const $borderDefault = $(`#pam-border--default`);
const $borderLess = $(`#pam-border--less`);
const $borderColor = $(`#pam-border--color`);
const $navPixelArt = $(`#pam-pixel-art`);
const $colorPicker = $(`#pam-color-picker`);
const $sizePicker = $(`#pam-size-picker`);
const $sizePickerWidth = $(`#pam-size-picker--width`);
const $sizePickerHeight = $(`#pam-size-picker--height`);
const $sizePickerSubmit= $(`#pam-size-picker--submit`);
const $toolPaint = $(`#pam-tool--paint`);
const $toolDipper = $(`#pam-tool--dipper`);
const $toolEraser = $(`#pam-tool--eraser`);
const $table = $(`#pam-table`);
const $helpViewBody = $(`#pam-help--view--body`);
const $tooltip = $("[data-toggle='tooltip']");

/*
* Help Menu
*/


/*
* Active tool
*/
const tool = {
  paint: true,
  dipper: false,
  eraser: false,
  painting: function() {
    this.paint = true,
    this.dipper = false,
    this.eraser = false
  },
  dipping: function() {
    this.paint = false;
    this.dipper = true;
    this.eraser = false;
  },
  erasing: function() {
    this.paint = false;
    this.dipper = false;
    this.eraser = true;
  }
};

/*
* Initialize table
*/
$(function() {
	
});

$savePNG.click( function() {
	alert("hey ");
});







