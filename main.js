function cekNilai() {
  //menganbil value dari elemen input nilai
  //simpan ke dalam variabet bernama "nilai"
   let nilai = Number(document.getElementById('nilai').value)
   
   // menginisiasi variabelb"hasil" isinya atring kosong ""
  let hasil=""
  
   // menentukan angka A B C D bersasarkan isi variabe "nilai"
   // menggunakan percabangan if (jika)
   //dan membandingkan variabel "nilai"
   if (nilai>=88) {
      hasil="nilai A (Sabgat Baik)"
   } else if(nilai>=75) {
      hasil= "Nilai B (baik)"
   } else if (nilai>=74) {
     hasil="nuali c (cukup)"
   } else if (nilai>=45) {
      hasil="nilai D (kurang)"
   }
   //tampilkan isi variabel "hasul" ke elemen "hasil" di html
   document.getElementById('hasil').innerText=hasil
}