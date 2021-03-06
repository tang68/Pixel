
/********************************************//**
 *  DOM Selectors jQuery
 ***********************************************/

const $body = $('body');
const $savePNG = $('#pam-save-png');
const $saveJPEG = $(`#pam-save-jpeg`);
const $deleteButton = $(`#pam-tool--clear`);
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
const $toolClear = $('#pam-tool--clear');
const $table = $(`#pam-table`);
const $helpViewBody = $(`#pam-help--view--body`);
const $tooltip = $("[data-toggle='tooltip']");

/********************************************//**
 * Model
 ***********************************************/

/**
 * @desc Holds the pixel art
 */
const pixel = [
  {
    name: "earth",
    modal: {
      id: `pam-pixel-art--modal--pikachu`
    },
    width: 25,
    height: 25,
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      {
        // Brown
        color: "#362222",
        pixel: [
          {tr: 25, td: 8},
          {tr: 25, td: 9},
          {tr: 25, td: 10},
          {tr: 25, td: 11},
          {tr: 25, td: 12},
          {tr: 25, td: 13},
          {tr: 25, td: 14},
          {tr: 25, td: 15},
          {tr: 25, td: 16},
          {tr: 24, td: 8},
          {tr: 24, td: 9},
          {tr: 24, td: 10},
          {tr: 24, td: 11},
          {tr: 24, td: 12},
          {tr: 24, td: 13},
          {tr: 24, td: 14},
          {tr: 24, td: 15},
          {tr: 24, td: 16},
          {tr: 23, td: 9},
          {tr: 23, td: 10},
          {tr: 23, td: 11},
          {tr: 23, td: 12},
          {tr: 23, td: 13},
          {tr: 23, td: 14},
          {tr: 23, td: 15},
          {tr: 23, td: 9},
          {tr: 23, td: 10},
          {tr: 23, td: 11},
          {tr: 23, td: 12},
          {tr: 23, td: 13},
          {tr: 23, td: 14},
          {tr: 23, td: 15},
          {tr: 22, td: 10},
          {tr: 22, td: 11},
          {tr: 22, td: 12},
          {tr: 22, td: 13},
          {tr: 22, td: 14},
          {tr: 21, td: 10},
          {tr: 21, td: 11},
          {tr: 21, td: 12},
          {tr: 21, td: 13},
          {tr: 21, td: 14},
          {tr: 20, td: 10},
          {tr: 20, td: 11},
          {tr: 20, td: 12},
          {tr: 20, td: 13},
          {tr: 20, td: 14},
          {tr: 19, td: 10},
          {tr: 19, td: 11},
          {tr: 19, td: 12},
          {tr: 19, td: 13},
          {tr: 19, td: 14},
          {tr: 18, td: 10},
          {tr: 18, td: 11},
          {tr: 18, td: 12},
          {tr: 18, td: 13},
          {tr: 18, td: 14},
          {tr: 17, td: 10},
          {tr: 17, td: 11},
          {tr: 17, td: 12},
          {tr: 17, td: 13},
          {tr: 17, td: 14},
          {tr: 16, td: 11},
          {tr: 16, td: 12},
          {tr: 16, td: 13},
          {tr: 15, td: 11},
          {tr: 15, td: 12},
          {tr: 15, td: 13},
          {tr: 14, td: 11},
          {tr: 14, td: 12},
          {tr: 14, td: 13},
          {tr: 13, td: 11},
          {tr: 13, td: 12},
          {tr: 13, td: 13}

        ]
      },
      // Green
      {
        color: "#40910A",
        pixel: [
          {tr: 25, td: 1},
          {tr: 25, td: 2},
          {tr: 25, td: 3},
          {tr: 25, td: 4},
          {tr: 25, td: 5},
          {tr: 25, td: 6},
          {tr: 25, td: 7},
          {tr: 25, td: 17},
          {tr: 25, td: 18},
          {tr: 25, td: 19},
          {tr: 25, td: 20},
          {tr: 25, td: 22},
          {tr: 25, td: 23},
          {tr: 25, td: 24},
          {tr: 25, td: 25},
          {tr: 24, td: 1},
          {tr: 24, td: 2},
          {tr: 24, td: 3},
          {tr: 24, td: 4},
          {tr: 24, td: 6},
          {tr: 24, td: 7},
          {tr: 24, td: 17},
          {tr: 24, td: 18},
          {tr: 24, td: 19},
          {tr: 24, td: 20},
          {tr: 24, td: 21},
          {tr: 24, td: 22},
          {tr: 24, td: 23},
          {tr: 24, td: 24},
          {tr: 24, td: 25},
          {tr: 23, td: 1},
          {tr: 23, td: 2},
          {tr: 23, td: 3},
          {tr: 23, td: 4},
          {tr: 23, td: 5},
          {tr: 23, td: 6},
          {tr: 23, td: 7},
          {tr: 23, td: 8},
          {tr: 23, td: 16},
          {tr: 23, td: 17},
          {tr: 23, td: 18},
          {tr: 23, td: 19},
          {tr: 23, td: 20},
          {tr: 23, td: 21},
          {tr: 23, td: 22},
          {tr: 23, td: 23},
          {tr: 23, td: 24},
          {tr: 23, td: 25},

          {tr: 1,td: 10},
          {tr: 1,td: 11},
          {tr: 1,td: 12},
          {tr: 1,td: 14},
          {tr: 1,td: 13},
          {tr: 1,td: 15},
          {tr: 1,td: 16},
          {tr: 2,td: 8},
          {tr: 2,td: 9},
          {tr: 2,td: 10},
          {tr: 2,td: 11},
          {tr: 2,td: 12},
          {tr: 2,td: 13},
          {tr: 2,td: 14},
          {tr: 2,td: 15},
          {tr: 2,td: 16},
          {tr: 2,td: 17},
          {tr: 2,td: 18},
          {tr: 3,td: 6},
          {tr: 3,td: 7},
          {tr: 3,td: 8},
          {tr: 3,td: 9},
          {tr: 3,td: 10},
          {tr: 3,td: 11},
          {tr: 3,td: 12},
          {tr: 3,td: 13},
          {tr: 3,td: 15},
          {tr: 3,td: 16},
          {tr: 3,td: 17},
          {tr: 3,td: 18},
          {tr: 3,td: 19},
          {tr: 3,td: 20},
          {tr: 4,td: 5},
          {tr: 4,td: 6},
          {tr: 4,td: 7},
          {tr: 4,td: 8},
          {tr: 4,td: 9},
          {tr: 4,td: 10},
          {tr: 4,td: 11},
          {tr: 4,td: 12},
          {tr: 4,td: 13},
          {tr: 4,td: 14},
          {tr: 4,td: 15},
          {tr: 4,td: 17},
          {tr: 4,td: 18},
          {tr: 4,td: 19},
          {tr: 4,td: 20},
          {tr: 4,td: 21},
          {tr: 5,td: 5},
          {tr: 5,td: 6},
          {tr: 5,td: 7},
          {tr: 5,td: 8},
          {tr: 5,td: 9},
          {tr: 5,td: 10},
          {tr: 5,td: 11},
          {tr: 5,td: 12},
          {tr: 5,td: 13},
          {tr: 5,td: 14},
          {tr: 5,td: 15},
          {tr: 5,td: 16},
          {tr: 5,td: 17},
          {tr: 5,td: 18},
          {tr: 5,td: 19},
          {tr: 5,td: 20},
          {tr: 5,td: 21},

          {tr: 6,td: 5},
          {tr: 6,td: 6},
          {tr: 6,td: 7},
          {tr: 6,td: 8},
          {tr: 6,td: 9},
          {tr: 6,td: 10},
          {tr: 6,td: 11},
          {tr: 6,td: 12},
          {tr: 6,td: 13},
          {tr: 6,td: 14},
          {tr: 6,td: 15},
          {tr: 6,td: 16},
          {tr: 6,td: 17},
          {tr: 6,td: 18},
          {tr: 6,td: 19},
          {tr: 6,td: 20},
          {tr: 6,td: 21},
          {tr: 6,td: 22},

          {tr: 7,td: 4},
          {tr: 7,td: 5},
          {tr: 7,td: 6},
          {tr: 7,td: 7},
          {tr: 7,td: 8},
          {tr: 7,td: 9},
          {tr: 7,td: 10},
          {tr: 7,td: 11},
          {tr: 7,td: 12},
          {tr: 7,td: 13},
          {tr: 7,td: 14},
          {tr: 7,td: 15},
          {tr: 7,td: 16},
          {tr: 7,td: 17},
          {tr: 7,td: 18},
          {tr: 7,td: 19},
          {tr: 7,td: 20},
          {tr: 7,td: 21},
          {tr: 7,td: 22},

          {tr: 8,td: 4},
          {tr: 8,td: 5},
          {tr: 8,td: 6},
          {tr: 8,td: 7},
          {tr: 8,td: 8},
          {tr: 8,td: 9},
          {tr: 8,td: 10},
          {tr: 8,td: 11},
          {tr: 8,td: 13},
          {tr: 8,td: 14},
          {tr: 8,td: 15},
          {tr: 8,td: 16},
          {tr: 8,td: 17},
          {tr: 8,td: 18},
          {tr: 8,td: 19},
          {tr: 8,td: 20},
          {tr: 8,td: 21},
          {tr: 8,td: 22},

          {tr: 9,td: 3},
          {tr: 9,td: 4},
          {tr: 9,td: 5},

          {tr: 9,td: 7},
          {tr: 9,td: 8},
          {tr: 9,td: 9},
          {tr: 9,td: 10},
          {tr: 9,td: 11},
          {tr: 9,td: 12},
          {tr: 9,td: 13},
          {tr: 9,td: 14},
          {tr: 9,td: 15},
          {tr: 9,td: 16},
          {tr: 9,td: 17},
          {tr: 9,td: 18},
          {tr: 9,td: 19},
          {tr: 9,td: 20},
          {tr: 9,td: 21},
          {tr: 9,td: 22},

          {tr: 10,td: 3},
          {tr: 10,td: 4},
          {tr: 10,td: 5},
          {tr: 10,td: 6},
          {tr: 10,td: 7},
          {tr: 10,td: 8},
          {tr: 10,td: 9},
          {tr: 10,td: 10},
          {tr: 10,td: 11},
          {tr: 10,td: 12},
          {tr: 10,td: 14},
          {tr: 10,td: 15},
          {tr: 10,td: 16},
          {tr: 10,td: 17},
          {tr: 10,td: 18},
          {tr: 10,td: 19},
          {tr: 10,td: 20},
          {tr: 10,td: 21},
          {tr: 10,td: 22},
          {tr: 10,td: 23},
          {tr: 11,td: 3},
          {tr: 11,td: 4},
          {tr: 11,td: 5},
          {tr: 11,td: 6},
          {tr: 11,td: 7},
          {tr: 11,td: 8},
          {tr: 11,td: 9},
          {tr: 11,td: 10},
          {tr: 11,td: 11},
          {tr: 11,td: 12},
          {tr: 11,td: 13},
          {tr: 11,td: 14},
          {tr: 11,td: 15},
          {tr: 11,td: 16},
          {tr: 11,td: 17},
          {tr: 11,td: 18},
          {tr: 11,td: 19},
          {tr: 11,td: 20},
          {tr: 11,td: 21},
          {tr: 11,td: 22},
          {tr: 11,td: 23},

          {tr: 12,td: 4},
          {tr: 12,td: 5},
          {tr: 12,td: 6},
          {tr: 12,td: 7},
          {tr: 12,td: 9},
          {tr: 12,td: 10},
          {tr: 12,td: 11},
          {tr: 12,td: 12},
          {tr: 12,td: 13},
          {tr: 12,td: 14},
          {tr: 12,td: 15},
          {tr: 12,td: 16},
          {tr: 12,td: 17},
          {tr: 12,td: 19},
          {tr: 12,td: 20},
          {tr: 12,td: 21},
          {tr: 12,td: 22},
 
          {tr: 13,td: 4},
          {tr: 13,td: 5},
          {tr: 13,td: 6},
          {tr: 13,td: 7},
          {tr: 13,td: 8},
          {tr: 13,td: 9},
          {tr: 13,td: 10},
          {tr: 13,td: 14},
          {tr: 13,td: 15},
          {tr: 13,td: 16},
          {tr: 13,td: 17},
          {tr: 13,td: 18},
          {tr: 13,td: 19},
          {tr: 13,td: 20},
          {tr: 13,td: 21},
          {tr: 13,td: 22},


          {tr: 14,td: 6},
          {tr: 14,td: 7},
          {tr: 14,td: 8},
          {tr: 14,td: 9},
          {tr: 14,td: 10},
          {tr: 14,td: 15},
          {tr: 14,td: 16},
          {tr: 14,td: 17},
          {tr: 14,td: 18},
          {tr: 14,td: 19},
          {tr: 14,td: 20},
          {tr: 14,td: 21},

          {tr: 15,td: 8},
          {tr: 15,td: 9},
          {tr: 15,td: 10},
          {tr: 15,td: 14},
          {tr: 15,td: 15},
          {tr: 15,td: 16},
          {tr: 15,td: 17},
          {tr: 15,td: 18},
          {tr: 15,td: 19},



          {tr: 16,td: 8},
          {tr: 16,td: 9},
          {tr: 16,td: 10},
          {tr: 16,td: 14},
          {tr: 16,td: 15},
          {tr: 16,td: 16},
          {tr: 16,td: 17},
 

          {tr: 17,td: 9},
          {tr: 17,td: 10},
          {tr: 17,td: 14},
          {tr: 17,td: 15},
          {tr: 17,td: 16}
    

        ]
      },
      // Red
      {
        color: "#F63C17",
        pixel: [
          {tr: 25, td: 21},
          {tr: 10,td: 13},
          {tr: 8,td: 12},
          {tr: 3,td: 14},
          {tr: 12,td: 8},
          {tr: 9,td: 6},
        ]
      },
      // Orange
      {
        color: "#F69517",
        pixel: [
          {tr: 12,td: 18},
          {tr: 14,td: 14},
          {tr: 4,td: 16},
          {tr: 24, td: 5},
     
        ]
      }
    ]
  }
];

/**
 * @desc Keeps track of which tool is active
 * TODO: Test if JS design module can be used.
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

/**
 * @desc
 */
const helpViewBody = [
  {
    nav: {
      primary: "File > ",
      sub: "Save PNG "
    },
    fa: ["fas", "fa-download"],
    text: "will save a png file of the drawn pixel art."
  },
  {
    nav: {
      primary: "File > ",
      sub: "Save JPEG "
    },
    fa: ["fas", "fa-download"],
    text: "will save a jpeg file of the drawn pixel art."
  },
  {
    nav: {
      primary: "Border > ",
      sub: "Default "
    },
    fa: ["fas", "fa-table"],
    text: "will delete the canvas."
  },
  {
    nav: {
      primary: "Border > ",
      sub: "Borderless "
    },
    fa: ["fas", "fa-square"],
    text: "will color the border white."
  },
  {
    nav: {
      primary: "Border > ",
      sub: "Color "
    },
    fa: ["far", "fa-square"],
    text: "will color the border to selected color."
  },
  {
    nav: {
      primary: "Help > ",
      sub: "View Help "
    },
    fa: ["fas", "fa-question-circle"],
    text: "will display the help documentation."
  },
  {
    nav: {
      primary: "Help > ",
      sub: "About "
    },
    fa: ["fas", "fa-info-circle"],
    text: "will display the description."
  },
  {
    nav: {
      sub: "Color "
    },
    fa: ["far", "fa-square"],
    text: "will color the paint to selected color."
  },
  {
    nav: {
      sub: "Width "
    },
    fa: ["far", "fa-square"],
    text: "will set the width of the canvas."
  },
  {
    nav: {
      sub: "Height "
    },
    fa: ["far", "fa-square"],
    text: "will set the height of the canvas."
  },
  {
    nav: {
      sub: "Submit "
    },
    fa: ["far", "fa-square"],
    text: "will submit the form with the width and height information."
  },
  {
    nav: {
      sub: "Paint "
    },
    fa: ["fas", "fa-paint-brush"],
    text: "will select the paint brush."
  },
  {
    nav: {
      sub: "Dipper "
    },
    fa: ["fas", "fa-eye-dropper"],
    text: "will select the dipper to copy the selected color."
  },
  {
    nav: {
      sub: "Erase "
    },
    fa: ["fas", "fa-eraser"],
    text: "will select the eraser to erase the selected target."
  },
    {
    nav: {
      sub: "Clear Table "
    },
    fa: ["fas", "fa-trash-alt"],
    text: "will delete the canvas."
  },
  {
    nav: {
      sub: "Double Click "
    },
    fa: ["fas", "fa-eraser"],
    text: "will erase the selected target with a double click."
  }
];

/**
 * @desc Converts rgb to hex
 * @param {string} color_value Takes a string in rgb format
 */
function rgba2hex(color_value) {
  if (!color_value) return false;
  let parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
      length = color_value.indexOf('rgba') ? 3 : 2; // Fix for alpha values
  delete(parts[0]);
  for (var i = 1; i <= length; i++) {
    parts[i] = parseInt( parts[i] ).toString(16);
    if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  return '#' + parts.join('').toUpperCase(); // #F7F7F7
}

/********************************************//**
 * Controller
 ***********************************************/

 /**
  * @desc Creates the pixel art links
  * Creates the table on load
  * Creates the help documentation
  * Makes the bootstrap tooltip work
  */
$(_ => {
  pixel.forEach(ele => makeNavPixelArt(ele));
  drawPixel(pixel[0]);
  helpViewBody.forEach(ele => makeHelpViewBody(ele));
  $tooltip.tooltip();
});

/**
 * @desc Saves the file to a png
 */
$savePNG.click(_ => {
  html2canvas($table, {
    onrendered: function (canvas) {
      const a = document.createElement('a');
      a.href = canvas.toDataURL();
      a.download = 'pixelart.png';
      a.click();
    }
  });
});

/**
 * @desc Saves the file to a jpeg
 */
$saveJPEG.click(_ => {
  html2canvas($table, {
    onrendered: function (canvas) {
      const a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = 'pixelart.jpeg';
      a.click();
    }
  });
});

/**
 * @desc Deletes the table children
 */
$deleteButton.click(_ => clearTableChildren());

/**
 * @desc Restores border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderDefault.click(_ => {
    $(`#pam-table`).css("border", "");
    $(`#pam-table tr`).css("border", "");
    $(`#pam-table td`).css("border", "");
});

/**
 * @desc Removes border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderLess.click(_ => {
  $(`#pam-table tr`).css("border", "none");
  $(`#pam-table td`).css("border", "none");
});

/**
 * @desc Changes the colors of the border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderColor.on("click change", _ => {
  $(`#pam-table`).css("border-color", $borderColor.val());
  $(`#pam-table tr`).css("border-color", $borderColor.val());
  $(`#pam-table td`).css("border-color", $borderColor.val());
});

/**
 * @desc Submits the form
 */
$sizePickerSubmit.click(_ => $sizePicker.submit());

/**
 * @desc On submit of the form, creates a table
 * @param {event} event Uses the event to prevent default of the form
 */
$sizePicker.on("submit", event => {
  event.preventDefault();
  setTable($sizePickerWidth.val(), $sizePickerHeight.val());
});

/**
 * @desc Sets the paint tool to true and active
 */
$toolPaint.on("click", _ => {
  tool.painting();
  toolSetClass(tool);
});

/**
 * @desc Sets the dipper tool to true and active
 */
$toolDipper.on("click", _ => {
  tool.dipping();
  toolSetClass(tool);
});

/**
 * @desc Sets the erase tool to true and active
 */
$toolEraser.on("click", _ => {
  tool.erasing();
  toolSetClass(tool);
});

/**
 * @desc Allows to paint on the table
 * @param {event} event Uses the event target to select each td
 * @param {boolean} down Used to determine if the paintTool should be active
 * @param {object} tool Used to determine which tool is active
 */
(_ => {
  let down = false;
  $table.on("mousedown", "td", event => {
    down = true;
    toolBar(event, down, tool);
  }).on("mouseover", "td", event => toolBar(event, down, tool))
  .on("mouseup", _ => down = false)
  .on("mouseleave", _ => down = false);
})();

/**
 * @desc Erases the background color to default on double click
 */
$table.on("dblclick", "td", event => {
  $(event.target).css("background-color", "");
});

/********************************************//**
 * View
 ***********************************************/

/**
 * @desc Makes drop down links for the art.
 * Make the modal body for pixel art
 * @param {object} ele Takes an object to make the links
 */
function makeNavPixelArt(ele) {
  const a = document.createElement("a");
  const i = document.createElement("i");
  const textNode = document.createTextNode(ele.name);
  const spacer = document.createTextNode(" ");

  const modal = document.createElement("div");
  const modalDialog = document.createElement("div");
  const modalDialogContent = document.createElement("div");
  const modalDialogContentHeader = document.createElement("div");
  const modalDialogContentHeaderH5 = document.createElement("h5");
  const modalDialogContentHeaderH5TextNode = document.createTextNode(` ${ele.name}?`);
  const modalDialogContentHeaderBtn = document.createElement("button");
  const modalDialogContentHeaderBtnSpan = document.createElement("span");
  const modalDialogContentBody = document.createElement("div");
  const modalDialogContentFooter = document.createElement("div");
  const modalDialogContentFooterBtnClose = document.createElement("button");
  const modalDialogContentFooterBtnDraw = document.createElement("button");
  const modalDialogContentFooterBtnDrawTextNode = document.createTextNode(` ${ele.name}`);

  const iWarning = document.createElement("i");

  a.classList.add("dropdown-item");
  a.href = "#";
  a.setAttribute("data-toggle", "modal");
  a.setAttribute("data-target", `#${ele.modal.id}`);
  a.appendChild(i);
  a.appendChild(spacer);
  a.appendChild(textNode);

  i.classList.add("fas", "fa-th-large");

  modal.id = `${ele.modal.id}`;
  modal.classList.add("modal", "fade");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exampleModalLabel");
  modal.setAttribute("aria-hidden", "true");
  modal.appendChild(modalDialog);

  modalDialog.classList.add("modal-dialog");
  modalDialog.setAttribute("role", "document");
  modalDialog.appendChild(modalDialogContent);

  modalDialogContent.classList.add("modal-content")
  modalDialogContent.appendChild(modalDialogContentHeader);
  modalDialogContent.appendChild(modalDialogContentBody);
  modalDialogContent.appendChild(modalDialogContentFooter);

  modalDialogContentHeader.classList.add("modal-header", "bg-warning");
  modalDialogContentHeader.appendChild(modalDialogContentHeaderH5);
  modalDialogContentHeader.appendChild(modalDialogContentHeaderBtn);

  modalDialogContentHeaderH5.classList.add("modal-title");
  modalDialogContentHeaderH5.appendChild(iWarning);
  modalDialogContentHeaderH5.appendChild(modalDialogContentHeaderH5TextNode);

  modalDialogContentHeaderBtn.classList.add("close");
  modalDialogContentHeaderBtn.setAttribute("type", "button");
  modalDialogContentHeaderBtn.setAttribute("data-dismiss", "modal");
  modalDialogContentHeaderBtn.setAttribute("aria-label", "close");
  modalDialogContentHeaderBtn.appendChild(modalDialogContentHeaderBtnSpan);

  modalDialogContentHeaderBtnSpan.setAttribute("aria-hidden", "true");
  modalDialogContentHeaderBtnSpan.innerHTML = "&times;";

  modalDialogContentBody.classList.add("modal-body");
  modalDialogContentBody.innerText = `Do you want to recreate the table elements with a ${ele.name} pixel art?`;

  modalDialogContentFooter.classList.add("modal-footer");
  modalDialogContentFooter.appendChild(modalDialogContentFooterBtnClose);
  modalDialogContentFooter.appendChild(modalDialogContentFooterBtnDraw);

  modalDialogContentFooterBtnClose.classList.add("btn", "btn-secondary");
  modalDialogContentFooterBtnClose.setAttribute("type", "button");
  modalDialogContentFooterBtnClose.setAttribute("data-dismiss", "modal");
  modalDialogContentFooterBtnClose.innerText = "Close";

  modalDialogContentFooterBtnDraw.classList.add("btn", "btn-warning");
  modalDialogContentFooterBtnDraw.setAttribute("type", "button");
  modalDialogContentFooterBtnDraw.setAttribute("data-dismiss", "modal");
  modalDialogContentFooterBtnDraw.appendChild(iWarning);
  modalDialogContentFooterBtnDraw.appendChild(modalDialogContentFooterBtnDrawTextNode);
  modalDialogContentFooterBtnDraw.addEventListener("click", _ => drawPixel(ele));

  iWarning.classList.add("fas", "fa-exclamation-circle");

  $navPixelArt.append(a);
  $body.append(modal);
}

/**
 * @desc Changes the classes tools
 */
function toolSetClass(ele) {
  if (ele.paint === true) {
    $toolPaint.addClass("active");
  } else if (ele.paint === false) {
    $toolPaint.removeClass("active");
  }

  if (ele.dipper === true) {
    $toolDipper.addClass("active");
  } else if (ele.dipper === false) {
    $toolDipper.removeClass("active");
  }

  if (ele.eraser === true) {
    $toolEraser.addClass("active");
  } else if (ele.eraser === false) {
    $toolEraser.removeClass("active");
  }
}

/**
 * @desc Paints the canvas table
 * @param {event} event Sets the event from the target
 * @param {boolean} down Sets if the tool should be active
 * @param {object} tool Uses data from the object for which to use
 */
function toolBar(event, down, tool) {
  if (down) {
    if (tool.paint === true) {
      $(event.target).css("background-color", $colorPicker.val());
    } else if (tool.dipper === true) {
      const hex = rgba2hex($(event.target).css("background-color"));
      $colorPicker.val(hex);
    } else if (tool.eraser === true) {
      $(event.target).css("background-color", "");
    }
  }
}

/**
 * @desc Removes table children
 */
function clearTableChildren() {$table.empty();}


/**
 * @desc Creates the table
 * @param {number} width Takes a number to create the columns
 * @param {number} height Takes a number to create the rows
 */
function setTable(width, height) {
  const tbody = document.createElement("tbody");
  clearTableChildren();
  for (let i = 0; i < height; i++) {
    const row = tbody.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
    }
  }
  $table.append(tbody);
}

/**
 * @desc Makes the pixel art.
 * @param {object} ele Takes an object to draw the art.
 */
function drawPixel(ele) {
  $sizePickerWidth.val(ele.width);
  $sizePickerHeight.val(ele.height);
  $colorPicker.val(ele.color.picker);
  setTable(ele.width, ele.height);
  ele.art.forEach(ele1 => {
    ele1.pixel.forEach(ele2 => {
      $(`tr:nth-child(${ele2.tr}) td:nth-child(${ele2.td})`).css("background", ele1.color);
    });
  });
}

/**
 * @desc Populates the help doc
 * @param {oject} ele Takes an object to make the help doc
 */
function makeHelpViewBody(ele) {
  const $p = $("<p></p>");
  const $span = $("<span class='font-weight-bold'></span>")
  if (ele.nav.hasOwnProperty("primary")) {
    const navPrimary = document.createTextNode(ele.nav.primary);
    $p.append(navPrimary);
  }
  if (ele.hasOwnProperty("fa")) {
    const spacer = document.createTextNode(" ");
    const $i = $("<i></i>");
    ele.fa.forEach(ele => $i.addClass(ele));
    $p.append($i);
    $p.append(spacer);
  }
  $p.append($span);
  $p.append(ele.text);
  $span.append(ele.nav.sub);
  $helpViewBody.append($p);
}
