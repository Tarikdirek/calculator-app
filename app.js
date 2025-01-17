
const input = document.querySelector("input");
const backSpace = document.querySelector(".btn-backspace")
const callItems = document.querySelector(".cal-items")
const resultParagraph = document.querySelector("p")
let result = "";

function calResult() {
    let calculateResult = math.evaluate(result);
    resultParagraph.innerText = calculateResult ? calculateResult : calculateResult === Infinity ? "infinity" : "";
}

callItems.addEventListener("click",(e) => {
    if( e.target.tagName === "BUTTON" && e.target.dataset.btnNum){
        handleNumSignEvent(e.target.dataset.btnNum)
    }
    if (e.target.classList.contains("btn-equal")) {
        calResult()
    }
    if (e.target.classList.contains("btn-clear")) {
        input.value = "";
        resultParagraph.innerText = "";
    }
})


const handleNumSignEvent = (num) => {
    const cursorPos = input.selectionStart;
    input.value = input.value.slice(0,cursorPos) + num + input.value.slice(cursorPos)
    input.setSelectionRange(cursorPos+1,cursorPos+1);
    result = input.value;
    input.focus();
}

const handleBackspaceEvent = () => {
    const cursorPos = input.selectionStart;
    if (cursorPos > 0) {
        input.value = input.value.slice(0, cursorPos - 1) + input.value.slice(cursorPos);
        input.setSelectionRange(cursorPos - 1, cursorPos - 1);
        result = input.value
    }
    input.focus();
}
backSpace.addEventListener("click",() => {
    if(resultParagraph.innerText){
    handleBackspaceEvent()
    calResult()}else{
        handleBackspaceEvent()
    }
});
input.addEventListener('keydown', (e) => {
    if (!/[\d+\-*/.]/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
    }
});