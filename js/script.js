alert("Selamat Datang")

function calc() {
    var satu = document.getElementById("satu").value;
    var dua = document.getElementById("dua").value;
    if (satu == "" || dua == "") {
        document.getElementById("myModal2").style.display = "block";
        document.getElementsByClassName("closee")[0].onclick = function() {
            document.getElementById("myModal2").style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == document.getElementById("myModal2")) {
                document.getElementById("myModal2").style.display = "none";
            }
        }
        document.getElementById("back").style.backgroundColor = "#F9672B";
        return false;
    } else {
        document.getElementById("myModal").style.display = "block";
        document.getElementsByClassName("close")[0].onclick = function() {
            document.getElementById("myModal").style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == document.getElementById("myModal")) {
                document.getElementById("myModal").style.display = "none";
            }
        }
        var hasil = parseInt(satu) + parseInt(dua);
        document.getElementById("sum").innerHTML = hasil;
        document.getElementById("back").style.backgroundColor = "green";
    }
}