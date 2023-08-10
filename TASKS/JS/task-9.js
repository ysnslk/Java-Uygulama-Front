// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpim = (a, b) => a * b;
console.log("Çarpım", carpim(2, 4));
// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
let metin = "Lorem ipsum dolor sit.";
const bol = (metin) => metin.split(" ").length;
console.log("Kelime Sayısı : ", bol(metin));
// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
const faktoriyel = (sayi) => {
  let carpim = 1;
  for (let i = sayi; i > 0; i--) {
    carpim *= i;
  }
  return carpim;
};

console.log("Faktöriyel : ", faktoriyel(5));
// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
const asalKontrol = function (sayi) {
  if (sayi <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(sayi); i++) {
    if (sayi % i === 0) {
      return false;
    }
  }

  return true;
};
console.log("Asal mı? ", asalKontrol(13));
// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
const numbers = [100, 50, 24, 65, 35, 458, 25, 45];
const topNumber = (numbers) => {
  let enBuyuk = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > enBuyuk) enBuyuk = numbers[i];
  }
  return enBuyuk;
};
console.log("En Büyük Sayı : ", topNumber(numbers));
// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
const toplam = numbers.reduce((toplam, eleman) => {
  return toplam + eleman;
});
console.log("Toplam  : ", toplam);
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.

// Buradan itibaren yalnızca arrow function kullanıyoruz.

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
let kelime = "abcde";
const reverse = (kelime) => kelime.split("").reverse().join("");
console.log("Ters Hali : ", reverse(kelime));
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın. (Kopya çekmek yok. Mantık kurmaya çalışın)
const diziKaristir = (dizi) => {
  let j;
  for (let i = dizi.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
  }
  return dizi;
};
console.log("Karıştıt: ", diziKaristir([1, 2, 3, 4, 5]));
// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
let istenenSayi = 12;
const bolenBulma = (istenenSayi) => {
  let bolenler = [];

  for (let i = 1; i <= istenenSayi; i++) {
    if (istenenSayi % i === 0) {
      bolenler.push(i);
    }
  }

  return bolenler;
};
console.log(istenenSayi, " Sayısının bölenleri : ", bolenBulma(istenenSayi));
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
let stringIfade = "Yasama yürütme hazırlık";
let hangiHarf = "a";

const harfSayac = (stringIfade, hangiHarf) => {
  let sayac = 0;

  for (let i = 0; i < stringIfade.length; i++) {
    if (stringIfade[i] === hangiHarf) {
      sayac++;
    }
  }
  return sayac;
};
console.log(
  `${hangiHarf} harfinden ifade içinde ${harfSayac(
    stringIfade,
    hangiHarf
  )} kadar vardır.`
);
// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.
const arrayNumbers = [100, 50, 24, 65, 35, 458, 25, 45, 65, 123, 245];
const toplamTum = arrayNumbers.reduce((toplam, eleman) => {
  return toplam + eleman;
});
console.log("Toplam  : ", toplamTum);
