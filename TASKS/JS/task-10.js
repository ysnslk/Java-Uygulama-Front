// Kullanılacak diziler

const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dizi1 = ["elma", "armut", "kiraz", "üzüm"];

const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
console.log("Soru 1");
dizi.forEach((eleman) => {
  console.log(eleman);
});
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
console.log("Soru 2");
dizi3.forEach((sayi) => {
  if (sayi % 2 == 0) {
    console.log(sayi);
  }
});
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
console.log("Soru 3");
const yeniDizi = [];
dizi2.forEach((element) => {
  yeniDizi.push(element * 2);
});
console.log(yeniDizi);
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
console.log("Soru 4");
let toplam = 0;
dizi3.forEach((sayi) => {
  toplam += sayi;
});
console.log(toplam);
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
console.log("Soru 5");
let index = 0;
dizi1.forEach((eleman) => {
  if (index == dizi1.length - 1) {
    console.log("Dizinin son elemanı : ", eleman);
  } else {
    console.log(eleman);
    index++;
  }
});
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
console.log("Soru 6");
const yeniDizi2 = [];
dizi1.map((element) => yeniDizi2.push(element.toUpperCase()));
console.log(yeniDizi2);
// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
console.log("Soru 7");
const yeniDiziTopla = [];
dizi3.map((sayi) => {
  let yeniSayi = 0;
  yeniSayi = Math.ceil(Math.random(1, 10) * sayi);
  return yeniDiziTopla.push(yeniSayi);
});
console.log(yeniDiziTopla);
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
console.log("Soru 8");
const reverse = [];
dizi1.map((element) => reverse.push(element.split("").reverse().join("")));
console.log(reverse);
// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
console.log("Soru 9");
const str = "sdasdasdas";
const tersKel = str
  .split("")
  .map((eleman) => eleman.split("").reverse().join(""));
console.log(tersKel);
// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
console.log("Soru 10");
const tersCevir = (string) => {
  let tersString = "";
  for (let i = string.length; i >= 0; i--) {
    tersString += string[i];
  }
  return tersString;
};
const tersDizi = dizi1.map((eleman) => tersCevir(eleman));
console.log(tersDizi);
// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
console.log("Soru 11");
const filteredSinif = dizi.filter((element) => {
  return element % 2 == 0;
});
console.log(filteredSinif);
// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
console.log("Soru 12");
const filteredLenght = dizi1.filter((element) => {
  return element.length > 4;
});
console.log(filteredLenght);
// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
console.log("Soru 13");
const toplamReduce = dizi2.reduce((total, element) => {
  return total + element;
});
console.log(toplamReduce);
// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
console.log("Soru 14");
const ilkCift = dizi.find((element) => element % 2 == 0);
console.log(ilkCift);
// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
console.log("Soru 15");
const sonCift = dizi.findLast((element) => element % 2 == 0);
console.log(sonCift);
// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek // ---------------every-------------------
console.log("Soru 16");
const negatifChech = dizi2.some((element) => {
  const check = element < 0;
  return check;
});
console.log(negatifChech);
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek // ---------------sort-------------------
console.log("Soru 17");
const pozitifCheck = dizi2.every((element) => element > 0);
console.log(pozitifCheck);
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
console.log("Soru 18");
dizi2.sort((a, b) => a - b);
console.log(dizi2);
