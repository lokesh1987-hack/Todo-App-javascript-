let input = document.getElementById("input");
let addbtn = document.getElementById("add");
showtask();

addbtn.addEventListener("click", function () {
    inputval = input.value;
    if (inputval.trim() != 0) {
        checkdata();
        taskobj.push(inputval);
        localStorage.setItem("localtask", JSON.stringify(taskobj));
    }
    input.value = "";
    showtask();
    
})

function checkdata() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
    }
}

function showtask() {
    checkdata();
    html = '';
    let tabletask = document.getElementById("table");
    taskobj.forEach((item, index) => {
        html += ` <tr>
                        <th id="index">${index + 1}</th>
                        <td id="item">${item} </td>
                        <td id=delelebtn><button onclick="deleteItem(${index})" >Delete</button></td>
                    </tr>`
    });
    tabletask.innerHTML = html;

}

function deleteItem(index) {
    let webtask = localStorage.getItem('localtask');
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask()
}

let deleteAll = document.getElementById("deleteAll");

 deleteAll.addEventListener("click", function () {
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);

    if (taskobj != null) {
        taskobj = [];
        localStorage.setItem("localtask", JSON.stringify(taskobj));
        showtask();
    }
})

function background(index) {
    let table = document.getElementById("table");
    
    if(index/2==0)
    {
       table.style.backgroundColor="black"; 
}}

