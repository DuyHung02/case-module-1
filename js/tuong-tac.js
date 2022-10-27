//thêm sản phẩm//
class Sanpham {
    imgsanpham;
    namesanpham;
    pricesanpham;

    constructor(imgsanpham, namesanpham, pricesanpham) {
        this.imgsanpham = imgsanpham;
        this.namesanpham = namesanpham;
        this.pricesanpham = pricesanpham;
    }
}

let sp1 = new Sanpham("img/banh-thuong.png", "Bánh thưởng cho cún vị cá", "50000đ");

let listsanpham = JSON.parse(localStorage.getItem("sp1"));//
let table22 = document.getElementById('table2')

function table2() {
    let str = ""
    for (let i = 0; i < listsanpham.length; i++) {
        str += `<tr>
                    <td rowspan="2" id="imgsanpham"><img src="${listsanpham[i].imgsanpham}" width="200" height="200" </td> 
                    <td id="namesanpham">${listsanpham[i].namesanpham}</td>   
                    <td rowspan="2" id="cotedit"><button id="edit" onclick="edit(${i})">Edit</button></td>
                    <td rowspan="2" id="cotdelete"><button id="delete" onclick="xoa(${i})">Delete</button></td>
                </tr>`
        str += `<tr>
                    <td id="pricesanpham">${listsanpham[i].pricesanpham}</td>
                </tr>`
    }
    table22.innerHTML = str;
}
table2();

    function edit(index) {
        let imgsanpham = prompt("Ảnh muốn thay: ");
        let namesanpham = prompt("Tên muốn đổi: ");
        let pricesanpham = prompt("Thay đổi giá: ");
        let newSanpham = new Sanpham(imgsanpham, namesanpham, pricesanpham);
        listsanpham.splice(index, 1, newSanpham);
        table2();
        clear()
        localStorage.setItem("sp1",JSON.stringify(listsanpham));
    }

    function add() {
        let imgsanpham = document.getElementById("inputImg").value;
        let namesanpham = document.getElementById("inputName").value;
        let pricesanpham = document.getElementById("inputPrice").value;
        let newSanpham = new Sanpham(imgsanpham, namesanpham, pricesanpham);
        listsanpham.push(newSanpham);
        table2();
        clear()
        localStorage.setItem("sp1",JSON.stringify(listsanpham));
    }
        function xoa(index) {
        listsanpham.splice(index, 1);
        table2();
        localStorage.setItem("sp1",JSON.stringify(listsanpham));
        }

        function clear() {
        let imgsanpham = document.getElementById("inputImg").value = "";
        let namesanpham = document.getElementById("inputName").value = "";
        let pricesanpham = document.getElementById("inputPrice").value = "";

        }