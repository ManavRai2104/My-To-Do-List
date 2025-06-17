const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){
        alert("Please input the task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "li") {
        e.target.classList.toggle( "Checked");
        savedata();
    } 
    else if (e.target.tagName === "span") {
        e.target.parentElement.remove();
        savedata();
}
} , false);

function savedata(){
    localStorage.setItem("data" , listContainer.innerHTML);

}

function showdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();