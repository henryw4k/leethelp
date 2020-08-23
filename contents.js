document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    showSolution();
    remapCmdS();
  }
};

function showSolution() {
  //show solution
  setTimeout(() => {
    console.log("Solution Unveiled");
    let solution = document.getElementById("solution");
    solution?.parentElement?.setAttribute("style", "filter: none !important");

    let parent = solution?.parentElement?.parentElement;
    parent?.removeChild(parent?.childNodes[0]);

    solution?.childNodes[1].setAttribute(
      "style",
      "overflow-y: inherit !important"
    );
  }, 2000);
}

function remapCmdS() {
  // cmd+S runs the code
  document.onkeydown = function (e) {
    e = e || window.event; //Get event
    if (!e.metaKey) return;

    var code = e.which || e.keyCode; //Get key code
    switch (code) {
      case 83: //Block Ctrl+S
        e.preventDefault();
        e.stopPropagation();
        console.log("Command + S = Run Code");
        document.querySelector("[data-cy=run-code-btn]")?.click();
        break;
    }
  };
}
