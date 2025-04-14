let grade = [ 
    { nama : "aldien", grade : "A"},
    { nama : "Gani", grade : "B"},
    { nama : "Mahansa", grade : "B"},
    { nama : "Silvesman", grade : "F"}
];

grade.forEach(function(item) {
    let hasilGrade = "";

    switch (item.grade) {
        case "A":
            hasilGrade = "nilai sangat baik";
            break;
        case "B":
            hasilGrade = "nilai baik";
            break;
        case "C":
            hasilGrade = "nilai cukup";
            break;
        case "D":
            hasilGrade = "nilai kurang baik";
            break;
        case "F":
            hasilGrade = "nilai sangat kurang baik";
            break;
        default:
    }

    console.log(`${item.nama} mendapat ${hasilGrade}`);
});
