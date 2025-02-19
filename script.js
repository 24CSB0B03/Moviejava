
var showlist = [];
function remove(event) {
    let li = event.target
    showlist = showlist.filter(item => item !== li.innerHTML)
    li.remove()
    var c = document.getElementById('count');
    c.textContent = showlist.length;
}

function updatelist() {
    var newmovie = document.getElementById('name').value;
    if (newmovie === "") {
        return;
    }

    showlist.push(newmovie);

    document.getElementById('name').value = "";
    var ol = document.getElementById('list');
    var element = document.createElement('li');
    element.textContent = newmovie;

    element.addEventListener("click", remove)
    ol.appendChild(element);

    var c = document.getElementById('count');
    c.textContent = showlist.length;
}

function clearList() {
    showlist = [];
    document.getElementById('list').textContent = ""
    document.getElementById('count').textContent = 0
}
