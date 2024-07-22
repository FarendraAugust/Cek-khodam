function cekKhodam(event) {
    event.preventDefault();
    let nama = $("#cek").val();
    if (nama === "") {
        alert("Masukkan nama terlebih dahulu!");
    } else {
        nama = nama.toLowerCase();
        let rng = new Math.seedrandom(nama);
        let status = ["isi", "kosong"];
        const randomStatus = Math.floor(rng() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                "Sumpit Gacoan",
                "Taplak Meja",
                "Koala Ngesot",
                "Kuda Nil Jawa",
                "Gajah Mekanik",
                "Nyamuk Gendut",
                "Pocong Ngantuk",
            ];
            const random = Math.floor(rng() * khodam.length);
            $("#result").html(`${nama.toUpperCase()} - ${khodam[random]}`);
            $("#cek").val("");
        } else {
            $("#result").html(`${nama.toUpperCase()} - KOSONG`);
            $("#cek").val("");
        }
    }
}

$(document).ready(function () {
    $("#button-cek").click(cekKhodam);
});
