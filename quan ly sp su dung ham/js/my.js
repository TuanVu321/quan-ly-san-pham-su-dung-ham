let arr = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6'];
function showlist() {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html = html + '<tr>';
        html = html + '<td>';
        html = html + arr[i];
        html = html + '</td>';
        html = html + '<td>';
        html = html + '<button id = "i" type = "button" onclick = "delete1(this.id)"  >Delete</button>';
        html = html + '</td>';
        html = html + '<td>';
        html = html + '<button id = "i" type = "button" onclick = "edit(this.id)"  >Edit</button>';
        html = html + '</td>';
        html = html + '</tr>';
    }
    document.getElementById('table').innerHTML = html;
}

showlist();

function add() {
    arr.unshift(document.getElementById('display').value);
    showlist();
}

function delete1(id) {
    arr.splice(id, 1);
    showlist();
}

function edit(id) {
  arr[id] = prompt('ten hien gio dang la: '+arr[id]+' Hay nhap ten muon sua:');
}