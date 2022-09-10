if (document.addEventListener){
    window.addEventListener('load',allBar,false);
} else {
    window.attachEvent('onload',allBar);
}

// Call all the bar
function allBar() {
    // Programming
    dynamicProgressBar("python-bar", 100);              // Python bar
    dynamicProgressBar("html-bar", 80);                 // HTML bar
    dynamicProgressBar("css-bar", 80);                  // CSS bar
    dynamicProgressBar("javascript-bar", 70);           // JavaScript bar
    dynamicProgressBar("c#-bar", 40);                   // C# bar
    dynamicProgressBar("c-bar", 20);                    // C bar
    dynamicProgressBar("sql-bar", 80);                  // SQL bar
    dynamicProgressBar("tensorflow-bar", 10);           // TensorFlow bar
    //------------------------------------------
    dynamicProgressBar("git-bar", 70);                  // Git bar
    dynamicProgressBar("docker-bar", 20);               // Docker bar

    // 3D design
    dynamicProgressBar("modelado3D-bar", 100);          // Modelado 3D bar
    dynamicProgressBar("texturizado-bar", 60);          // Texturizado bar
    dynamicProgressBar("fotorrealismo-bar", 60);        // Fotorrealismo bar
    dynamicProgressBar("animacion-bar", 50);            // Animación bar
    dynamicProgressBar("rigging-bar", 10);              // Rigging bar
    //------------------------------------------
    dynamicProgressBar("blender-bar", 80);              // Blender bar
    dynamicProgressBar("inventor-bar", 80);             // Inventor bar
    dynamicProgressBar("3dsmax-bar", 40);               // 3ds Max bar
    dynamicProgressBar("vray-bar", 30);                 // Vray bar

    // Electricity
    dynamicProgressBar("eplanos-bar", 100);             // Elaboración de planos bar
    dynamicProgressBar("iplanos-bar", 100);             // Interpretación de planos bar
    dynamicProgressBar("siluminacion-bar", 80);         // Fotorrealismo bar
    dynamicProgressBar("logicacontrol-bar", 100);       // Animación bar
    //------------------------------------------
    dynamicProgressBar("autocadelectrical-bar", 80);    // AutoCAD electrical bar
    dynamicProgressBar("dialux-bar", 80);               // DIALux bar
}

// Function for animate progress bar charging
function dynamicProgressBar(barId, percent) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById(barId);
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= percent) {
                clearInterval(id);
                i = 0;
            } else {
                width ++;
                elem.style.width = width + "%";
            }
        }
    }
}
