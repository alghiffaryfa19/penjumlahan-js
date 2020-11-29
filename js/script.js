alert("Selamat Datang")

function calc() {
    var satu = document.getElementById("satu").value;
    var dua = document.getElementById("dua").value;
    if (satu == "" || dua == "") {
        alert("Inputan harus diisi");
        document.getElementById("back").style.backgroundColor = "#F9672B";
        return false;
    } else {
        var hasil = parseInt(satu) + parseInt(dua);
        document.getElementById("sum").innerHTML = hasil;
        document.getElementById("back").style.backgroundColor = "green";
    }
}
