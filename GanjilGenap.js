let platNomor = ['B 2935 BTC', 'B 1234 ABC', 'B 5679 XYZ'];

let tanggalHariIni = 11;

platNomor.forEach(function(plat) {
    let angka = plat.split(' ')[1]; 
    let angkaTerakhir = angka[angka.length - 1]; 
    let jenisPlat = '';

    switch (angkaTerakhir) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '8':
            jenisPlat = 'GENAP';
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '9':
            jenisPlat = 'GANJIL';
            break;
        default:
    }

   
    let jenisTanggal = (tanggalHariIni % 2 === 0) ? 'GENAP' : 'GANJIL';

 
    let bolehMelintas = (jenisPlat === jenisTanggal) ? 'BOLEH' : 'TIDAK BOLEH';

    console.log(`${plat} adalah plat ${jenisPlat} maka ${bolehMelintas} melintas karena hari ini tanggal ${tanggalHariIni}`);
});
