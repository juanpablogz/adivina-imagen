console.log('ml5 version:', ml5.version);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
            classifier.classify(document.getElementById('imageResult'), (err, results) => {
                console.log(results);
                resultado.innerText = results[0].label;
                probabilidad.innerText = `${results[0].confidence.toFixed(4) * 100}%`;
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById('upload');
var infoArea = document.getElementById('upload-label');
input.addEventListener('change', showFileName);
function showFileName(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
}
/* =================================
    IA
* ============================== */

// Initialize the Image Classifier method with MobileNet
console.log('ml5 version:', ml5.version);
const x = document.getElementById("imageResult")
const resultado = document.getElementById("resultado")
const probabilidad = document.getElementById("probabilidad")
function modelLoaded() {
    console.log('Modelo cargado');
}
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
