var slider;
var slider1;
let origImages = [
    { src: "./static/images/img1_input.png", label: "Input Images" },
    { src: "./static/images/img1_output.png", label: "Output Masks" },
];
let origImages1 = [
    { src: "./static/images/cc_img1_input.png", label: "Input Images" },
    { src: "./static/images/cc_img1_output.png", label: "Visulization" },
];

let origOptions = {
    makeResponsive: true,
    showLabels: true,
    mode: "horizontal",
    showCredits: true,
    animate: true,
    startingPosition: "50",
};
let origOptions1 = {
    makeResponsive: true,
    showLabels: true,
    mode: "horizontal",
    showCredits: true,
    animate: true,
    startingPosition: "50",
};

const juxtaposeSelector = "#juxtapose-embed";
const juxtaposeSelector1 = "#juxtapose-embed-1";
const transientSelector = "#juxtapose-hidden";
const transientSelector1 = "#juxtapose-hidden-1";

function tab_gallery_click(name) {
    let outputImage = {
        label: "Output Masks",
    };
    let inputImage = {
        label: "Input Images",
    };

    inputImage.src = "./static/images/".concat(name, "_input.png");
    outputImage.src = "./static/images/".concat(name, "_output.png");
    let images = [inputImage, outputImage];
    let options = slider.options;
    options.callback = function (obj) {
        var newNode = document.getElementById(obj.selector.substring(1));
        var oldNode = document.getElementById(juxtaposeSelector.substring(1));
        console.log(obj.selector.substring(1));
        console.log(newNode.children[0]);
        oldNode.replaceChild(newNode.children[0], oldNode.children[0]);
        //newNode.removeChild(newNode.children[0]);
    };
    slider = new juxtapose.JXSlider(transientSelector, images, options);
}

function tab_gallery_click_1(name) {
  let outputImage1 = {
      label: "Visulization",
  };
  let inputImage1 = {
      label: "Input Images",
  };

  inputImage1.src = "./static/images/".concat(name, "_input.png");
  outputImage1.src = "./static/images/".concat(name, "_output.png");
  let images1 = [inputImage1, outputImage1];
  let options1 = slider1.options;
  options1.callback = function (obj) {
      var newNode1 = document.getElementById(obj.selector.substring(1));
      var oldNode1 = document.getElementById(juxtaposeSelector1.substring(1));
      console.log(obj.selector.substring(1));
      console.log(newNode1.children[0]);
      oldNode1.replaceChild(newNode1.children[0], oldNode1.children[0]);
      console.log(newNode1.children[0], oldNode1.children[0]);
      newNode1.style.display = "none";
  };
  slider1 = new juxtapose.JXSlider(transientSelector1, images1, options1);
}

(function () {
    slider = new juxtapose.JXSlider(juxtaposeSelector, origImages, origOptions);
    slider1 = new juxtapose.JXSlider(
        juxtaposeSelector1,
        origImages1,
        origOptions1
    );
    //document.getElementById("left-button").onclick = replaceLeft;
    //document.getElementById("right-button").onclick = replaceRight;
})();

$(".flip-card").click(function () {
    console.log("fading in");
    div_back = $(this).children().children()[1];
    div_front = $(this).children().children()[0];
    // console.log($(this).children("div.flip-card-back"))
    console.log(div_back);
    $(div_front).addClass("out");
    $(div_front).removeClass("in");

    $(div_back).addClass("in");
    $(div_back).removeClass("out");
});

$(".flip-card").mouseleave(function () {
    console.log("fading in");
    div_back = $(this).children().children()[1];
    div_front = $(this).children().children()[0];
    // console.log($(this).children("div.flip-card-back"))
    console.log(div_back);
    $(div_front).addClass("in");
    $(div_front).removeClass("out");

    $(div_back).addClass("out");
    $(div_back).removeClass("in");
});
