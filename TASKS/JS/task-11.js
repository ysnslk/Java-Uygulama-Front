// 1- myObject isimli boş bir nesne oluşturun.
console.log("Soru 1");
const myObject = {};
console.log(myObject);
// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
console.log("Soru - 2");
myObject.isim = "Yasin";
myObject.yas = 27;
myObject.cinsiyet = "Erkek";
myObject.meslek = "Back-End Dev";
console.log(myObject);
// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
console.log("Soru - 3");
delete myObject.cinsiyet;
// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.
console.log("Soru - 4");
const myObjectCopy = {};
const copy = Object.assign(myObjectCopy, myObject);
console.log(myObjectCopy);
// 5- nesnenizin anahtarlarını konsola yazdırın.
console.log("Soru - 5");
console.log(Object.keys(myObject));
// 6- nesnenizin değerlerini konsola yazdırın.
console.log("Soru - 6");
for (const value of Object.values(myObject)) {
  console.log(value);
}
// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.
console.log("Soru - 7");
for (const [key, value] of Object.entries(myObject)) {
  console.log(`${key}:  ${value}`);
}
// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin
console.log("Soru - 8");
if (myObject.hasOwnProperty("yas")) {
  console.log(myObject.yas);
}
// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
console.log("Soru - 9");
Object.freeze(myObjectCopy);
myObjectCopy.yas = 25;
console.log(myObjectCopy);
// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
console.log("Soru - 10");
Object.seal(myObject);
myObject.yas = 25;
console.log(myObject);

// SORU

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.

/*(örn çıktı:

05.01.2020 balata değişimi - 1700 TL

05.01.2020 yağ değişimi - 700 TL

05.01.2020 boya koruma - 700 TL

...

...

...

28.08.2022 seramik kaplama - 4500 TL

)

*/
const aracBilgileri = {
  id: "audiA6_123",
  model: "audiA6",
  yil: 2019,
  renk: "kırmızı",
  servisKayitlari: [
    {
      id: "audiA6_123_1",
      tarih: "05.01.2020",
      km: 2500,
      ucret: 3000,
      detay: [
        {
          id: "audiA6_123_1_1",
          aciklama: "balata değişimi",
          ucret: 1700,
        },
        {
          id: "audiA6_123_1_2",
          aciklama: "yağ değişimi",
          ucret: 700,
        },
        {
          id: "audiA6_123_1_3",
          aciklama: "boya koruma",
          ucret: 600,
        },
      ],
    },
    {
      id: "audiA6_123_2",
      tarih: "25.06.2021",
      km: 10500,
      ucret: 5000,
      detay: [
        {
          id: "audiA6_123_2_1",
          aciklama: "balata değişimi",
          ucret: 2700,
        },
        {
          id: "audiA6_123_2_2",
          aciklama: "yağ değişimi",
          ucret: 1700,
        },
        {
          id: "audiA6_123_2_3",
          aciklama: "boya koruma",
          ucret: 600,
        },
      ],
    },
    {
      id: "audiA6_123_3",
      tarih: "28.08.2022",
      km: 25400,
      ucret: 10000,
      detay: [
        {
          id: "audiA6_123_3_1",
          aciklama: "balata değişimi",
          ucret: 3500,
        },
        {
          id: "audiA6_123_3_2",
          aciklama: "yağ değişimi",
          ucret: 2000,
        },
        {
          id: "audiA6_123_3_3",
          aciklama: "seramik kaplama",
          ucret: 4500,
        },
      ],
    },
  ],
};
console.log("Soru 11");
for (const servisKaydi of aracBilgileri.servisKayitlari) {
  const tarih = servisKaydi.tarih;

  for (const detay of servisKaydi.detay) {
    const aciklama = detay.aciklama;
    const ucret = detay.ucret;

    console.log(`${tarih} ${aciklama} - ${ucret} TL`);
  }
}

// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

const student = {
  isim: "Yasin",
  yas: 27,
  cinsiyet: "Erkek",
};
for (const st in student) {
  console.log(`${st}: ${student[st]}`);
}

// İçerisinde 3 adet öğrenci bulunan bir nesne oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)
const students = [
  { isim: "Ahmet", notlar: [45, 80, 30] },
  { isim: "Murat", notlar: [20, 69, 83] },
  { isim: "Zeynep", notlar: [23, 98, 64] },
];

for (const student of students) {
  const notOrt =
    student.notlar.reduce((topla, not) => topla + not, 0) /
    student.notlar.length;

  console.log(`${student.isim}: Ortalama Not - ${notOrt}`);

  if (notOrt >= 60) {
    console.log(`${student.isim}derten ${notOrt} ile geçtiniz.`);
  } else {
    console.log(`${student.isim} ${notOrt} ile kaldınızı.`);
  }
}
