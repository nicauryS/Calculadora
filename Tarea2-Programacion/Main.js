
var historyList = document.getElementById('historyList');

function appendToResult(value) {
    resultElement.value += value;
}

function clearResult() {
    resultElement.value = '';
}

function calculate() {
    var result = eval(resultElement.value);
    resultElement.value = result;
    addToHistory(resultElement.value);
}

function addToHistory(operation) {
    var listItem = document.createElement('li');
    listItem.textContent = operation;
    historyList.appendChild(listItem);
    saveHistory();
}
