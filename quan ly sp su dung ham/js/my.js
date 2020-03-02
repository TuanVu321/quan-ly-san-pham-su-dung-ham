let arr = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6'];
function showlist() {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html = html + '<tr>';
        html = html + '<td>';
        html = html + arr[i];
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button onclick='delete1(this,"+i+")'>delete</button>";
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button onclick='edit(this,"+i+")'>edit</button>";
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
   let r= confirm('Ban co muon xoa hay khong?');
   if(r==true){
       arr.splice(id, 1);
   }
    showlist();
}

function edit(deletebtn, index) {
  let e = prompt("ban muon doi thanh : ",arr[index]);
  if(e!==null){
      arr[index] = e;
  }
  showlist();
}