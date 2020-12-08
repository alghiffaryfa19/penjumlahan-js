alert("Selamat Datang")

function calc() {
    var satu = document.getElementById("satu").value;
    var dua = document.getElementById("dua").value;
    var modal2 = document.getElementById("myModal2");
    var close2 = document.getElementsByClassName("closee")[0];
    var background = document.getElementById("back");

    var modal1 = document.getElementById("myModal");
    var close1 = document.getElementsByClassName("close")[0];

    var total = document.getElementById("sum");

    if (satu == "" || dua == "") {
        modal2.style.display = "block";
        close2.onclick = function() {
            modal2.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal2) {
                modal2.style.display = "none";
            }
        }
        background.style.backgroundColor = "#F9672B";
        return false;
    } else {
        modal1.style.display = "block";
        close1.onclick = function() {
            modal1.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal1) {
                modal1.style.display = "none";
            }
        }
        var hasil = parseInt(satu) + parseInt(dua);
        total.innerHTML = hasil;
        background.style.backgroundColor = "green";
    }
}