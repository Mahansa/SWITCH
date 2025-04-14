let platNomor = ['B 2597 BTC'];

platNomor.forEach(function(plat) {
    let angka = plat.split(' ')[1]; 
    let angkaTerakhir = angka[angka.length - 1]; 

    switch (angkaTerakhir) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '8':
            console.log(`${plat} adalah plat GENAP`);
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '9':
            console.log(`${plat} adalah plat GANJIL`);
            break;
        default:
    }
});
