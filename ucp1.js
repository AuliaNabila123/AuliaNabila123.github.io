const nama = document.querySelector('#nama');
nama.addEventListener('click', updateName);
function updateName() {
    const name = prompt('Masukkan nama:');
    nama.textContent = name;
}

const NIM = document.querySelector('#NIM');
NIM.addEventListener('click', updateNIM);
function updateNIM() {
    const NIm = prompt('Masukkan NIM:');
    NIM.textContent = NIm;
}

Date()
let tanggal = new Date()
document.getElementById("tanggal").innerHTML = tanggal.toDateString();

function halo(){
    alert("Barang siapa bersungguh-sungguh, maka dia akan mendapatkan kesuksesan");
}

