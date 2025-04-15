let DaftarSiswa = [ 
    { nama : "aldien", nilai : 89},
    { nama : "Gani", nilai : 76},
    { nama : "Mahansa", nilai : 100},
    { nama : "Silvesman", nilai : 73}
];

DaftarSiswa.forEach(siswa => {
    let hasilgrade = "";
    switch (true) {
        case (siswa.nilai >= 90):
            hasilgrade = "A";
            break;
        case (siswa.nilai >= 80):
            hasilgrade = "B";
            break;
        case (siswa.nilai >= 70):
            hasilgrade = "C";
            break;
        case (siswa.nilai >= 60):
            hasilgrade = "D";
            break;
        default:
            hasilgrade = "F";
    }
    console.log(`${siswa.nama} mendapat Grade ${hasilgrade}`);
});
