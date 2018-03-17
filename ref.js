let namespace = "pam";

/**
 * @author Frank Dip
 * @desc Pixel Art Maker
 * Not using JS design pattern Module yet.
 * TODO: Refactor to DRY code
 * @version 1.4
 */

/********************************************//**
 *  DOM Selectors jQuery
 ***********************************************/

const $body = $("body");

const $savePNG = $(`#pam-save-png`);
const $saveJPEG = $(`#pam-save-jpeg`);
const $deleteButton = $(`#pam-delete--button`);

const $borderDefault = $(`#pam-border--default`);
const $borderLess = $(`#pam-border--less`);
const $borderColor = $(`#pam-border--color`);

const $navPixelArt = $(`#pam-pixel-art`);

const $colorPicker = $(`#pam-color-picker`);

const $sizePicker = $(`#${namespace}-size-picker`);
const $sizePickerWidth = $(`#${namespace}-size-picker--width`);
const $sizePickerHeight = $(`#${namespace}-size-picker--height`);
const $sizePickerSubmit= $(`#${namespace}-size-picker--submit`);

const $toolPaint = $(`#${namespace}-tool--paint`);
const $toolDipper = $(`#${namespace}-tool--dipper`);
const $toolEraser = $(`#${namespace}-tool--eraser`);

const $table = $(`#${namespace}-table`);

const $helpViewBody = $(`#${namespace}-help--view--body`);

const $tooltip = $("[data-toggle='tooltip']");

/********************************************//**
 * Model
 ***********************************************/

/**
 * @desc Holds the pixel art
 */
const pixel = [
  {
    name: "ピカチュー",
    modal: {
      id: `${namespace}-pixel-art--modal--pikachu`
    },
    width: 28,
    height: 24,
    color: {
      picker: "#FFEA00",
      background: "#FFEA00"
    },
    art: [
      {
        // Black
        color: "#000000",
        pixel: [
          {tr: 1, td: 1},
          {tr: 1, td: 2},
    
        ]
      },
      // Yellow
      {
        color: "#FFEA00",
        pixel: [
          {tr: 3, td: 4},
     
        ]
      },
      // Red
      {
        color: "#FF0000",
        pixel: [

        ]
      },
      // White
      {
        color: "#FFFFFF",
        pixel: [
          {tr: 14, td: 8},
          {tr: 14, td: 21},
        ]
      }
    ]
  },
  {
    name: "Pokeball",
    modal: {
      id: `${namespace}-pixel-art--modal--pokeball`
    },
    width: 14,
    height: 14,
    color: {
      picker: "#FF0000",
      background: "#FF0000"
    },
    art: [
      {
        color: "#000000",
        pixel: [
          {tr: 1, td: 6},
          {tr: 1, td: 7},
          {tr: 14, td: 9}
        ]
      },
      {
        color: "#FF0000",
        pixel: [
          {tr: 2, td: 6},
          
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
      primary: "File > ",
      sub: "Delete "
    },
    fa: ["fas", "fa-trash-alt"],
    text: "will delete the canvas."
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
      primary: "Pixel Art > ",
      sub: "ピカチュー "
    },
    fa: ["fas", "fa-th-large"],
    text: "will draw Pikachu."
  },
  {
    nav: {
      primary: "Pixel Art > ",
      sub: "Pokeball "
    },
    fa: ["fas", "fa-th-large"],
    text: "will draw a pokeball."
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
    $(`#${namespace}-table`).css("border", "");
    $(`#${namespace}-table tr`).css("border", "");
    $(`#${namespace}-table td`).css("border", "");
});

/**
 * @desc Removes border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderLess.click(_ => {
  $(`#${namespace}-table tr`).css("border", "none");
  $(`#${namespace}-table td`).css("border", "none");
});

/**
 * @desc Changes the colors of the border
 * Can't use saved DOM selectors yet
 * TODO: Figure out how to use save DOM selectors
 */
$borderColor.on("click change", _ => {
  $(`#${namespace}-table`).css("border-color", $borderColor.val());
  $(`#${namespace}-table tr`).css("border-color", $borderColor.val());
  $(`#${namespace}-table td`).css("border-color", $borderColor.val());
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
