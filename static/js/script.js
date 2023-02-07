var result;
var p;

if (window.performance.getEntriesByType("navigation")){
    p=window.performance.getEntriesByType("navigation")[0].type;
 
    if (p=='navigate'){document.getElementById("formFile").value = null}
    if (p=='reload'){document.getElementById("formFile").value = null}
    if (p=='back_forward'){document.getElementById("formFile").value = null}
}

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("formFile").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        document.getElementById("uploadPreview").style.width = "100%";
        document.getElementById("uploadPreview").style.height = "100%";
    };

};