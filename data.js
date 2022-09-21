const nama = 'farel alfarisi';
let usia = 15;

const biodata = document.getElementById("biodata")
console.log(biodata)

let generasi;

function generateBiodata() {

    if(usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi tua";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "generasi anak anak";
    }
    else {
        generasi = "generasi bayi";
    }
    biodata.innerHTML = generasi
    return console.log('generasi saya adalah' , generasi);
}

console.log(nama);
console.log(usia);

generateBiodata();

