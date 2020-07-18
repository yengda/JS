let _isModelOpen = false;
document.getElementById("modal").style.display = "none";
document.getElementById("data").style.display = "none";
var dataHeader = "";

function actionModal(header) {
    _isModelOpen = !_isModelOpen;
    if (header) {
        dataHeader = header;
    }
    
    resetModal();
    if (_isModelOpen == true) {
        document.getElementById("modal").style.display = "block";
        document.getElementById("section").style.display = "none";
        document.getElementById("data").style.display = "none";

    }
    else {
        document.getElementById("modal").style.display = "none";
        document.getElementById("section").style.display = "flex";
        document.getElementById("data").style.display = "flex";
    }

}

function resetModal() {
    const TEXT1 = document.getElementById("text1");
    const TEXT2 = document.getElementById("text2");
    const TEXT3 = document.getElementById("text3");
    TEXT1.value = "";
    TEXT2.value = "";
    TEXT3.value = "";
}

function submitModal() {
    const TEXT1 = document.getElementById("text1");
    const TEXT2 = document.getElementById("text2");
    const TEXT3 = document.getElementById("text3");
    const VALUE1 = document.getElementById("value1");
    const VALUE2 = document.getElementById("value2");
    const VALUE3 = document.getElementById("value3");
    VALUE1.value = TEXT1.value;
    VALUE2.value = TEXT2.value;
    VALUE3.value = TEXT3.value;
    
    actionModal();
    if (VALUE1.value == "" && VALUE2.value == "" && VALUE3.value == "") {
        document.getElementById("data").style.display = "none";
    }
    document.getElementById("data_header").innerText = dataHeader;
    
}