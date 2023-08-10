// 1-) Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.

// 2-) Kullanıcıdan temsili bir oy verme ve aday olma durumlarını sorgulamak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.

// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.

// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.

// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.

// 3-) Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

// 4-) BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.

// Soru 1
console.log("Soru 1 ");
let word = "akka";
let reverse = "";
for (let i = word.length; i >= 0; i--) {
  reverse = reverse + word.charAt(i);
}
if (word === reverse) {
  console.log(`${word} kelimesi bir palindromdur.`);
} else {
  console.log(`${word} kelimesi bir palindrom değildir.`);
}
// 2. Yol
const kelime = "baka";
const cevir = kelime.split("").reverse().join("");
if (kelime === cevir) {
  console.log(`${kelime} kelimesi bir palindromdur.`);
} else {
  console.log(`${kelime} kelimesi bir palindrom değildir.`);
}

// Soru 2
console.log("Soru 2 ");
const infos = {
  uyruk: "", // prompt("Uyruğunuz"),
  yas: "", //  prompt("Yaşınız"),
};

if (infos.uyruk === "Turk" && infos.yas >= 30) {
  console.log("Aday olabilirsiniz");
} else if (infos.uyruk === "Turk" && infos.yas >= 18) {
  console.log("Oy kullanabilrsiniz");
} else if (!infos.uyruk.includes("Turk") && infos.yas >= 18) {
  console.log("Oy kullanabilrsiniz ama aday olamazsınız.");
} else {
  console.log("Hem oy kullanamazsınız hemde aday olamazsınız.");
}

// Soru 3
console.log("Soru 3 ");
const ay = "Ocak"; // prompt("Lütfen bir ay giriniz");
switch (ay) {
  case "Ocak":
  case "Mart":
  case "Mayıs":
  case "Temmuz":
  case "Eylül":
  case "Kasım":
    console.log(`${ay} 'ın gün sayısı 31 dir.`);
    break;
  case "Nisan":
  case "Haziran":
  case "Ağustos":
  case "Ekim":
  case "Aralık":
    console.log(`${ay} 'ın gün sayısı 30 dur.`);
    break;
  case "Şubat":
    console.log(`${ay} 'ın gün sayısı 28 dir.`);
  default:
    console.log("Lütfen geçerli bir ay giriniz.");
    break;
}

// Soru 4
console.log("Soru 4 ");
const marka = ""; //prompt("Araç markasını giriniz.");
const renk = ""; //prompt("Araç rengini giriniz.");
switch (marka) {
  case "BMW":
    switch (renk) {
      case "Kırmızı":
        console.log("Stokta yok.");
        break;
      case "Siyah":
        console.log("Stokta var.");
        break;
      case "Beyaz":
        console.log("Stokta var.");
        break;
      case "Mavi":
        console.log("Stokta var.");
        break;

      default:
        console.log(
          `Lütfen ${marka} marka araç için sisteme geçerli bir renk girin..!`
        );
        break;
    }
    break;
  case "Mercedes":
    switch (renk) {
      case "Kırmızı":
        console.log("Stokta yok.");
        break;
      case "Siyah":
        console.log("Stokta var.");
        break;
      case "Beyaz":
        console.log("Stokta yok.");
        break;
      case "Mavi":
        console.log("Stokta yok.");
        break;

      default:
        console.log(
          `Lütfen ${marka} marka araç için sisteme geçerli bir renk girin..!`
        );
        break;
    }
    break;
  case "Audi":
    switch (renk) {
      case "Kırmızı":
        console.log("Stokta var.");
        break;
      case "Siyah":
        console.log("Stokta var.");
        break;
      case "Beyaz":
        console.log("Stokta var.");
        break;
      case "Mavi":
        console.log("Stokta var.");
        break;

      default:
        console.log(
          `Lütfen ${marka} marka araç için sisteme geçerli bir renk girin..!`
        );
        break;
    }
    break;

  default:
    console.log("Lütfen geçerli bir araç markası girin");
    break;
}

// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.

// 3- dizinin uzunluğunu konsola yazdırın.

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.

// 10- myArray içerisinde eleman olarak "Veli" var mı ?

// 11- myArray içersinide 4.elemandan itibaren patates var mı?

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.

// 15- son diziniz 4 elemanlı olmuş olmalı. tek metot ile 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

// Soru 1
console.log("Soru 1 ");
let myArray = [
  "Yasin",
  "Solak",
  27,
  "Şeftali",
  "Muz",
  "Çilek",
  "Kayısı",
  "A",
  "B",
  "C",
];
console.log("Default", myArray);
if (myArray.includes("Yasin")) {
  myArray[myArray.indexOf("Yasin")] = "Mert";
  console.log(myArray);
}
console.log("Uzuluk : ", myArray);
let sona = myArray.push("AKBABA");
console.log(sona);
let basa = myArray.unshift("KARTAL");
console.log(basa);
let ilkElemanSil = myArray.splice(0, 1);
console.log(ilkElemanSil);
console.log(myArray);
let newArray = [ilkElemanSil[0], ilkElemanSil.length];
console.log(newArray);
let mixedArray = myArray.concat(newArray);
console.log(mixedArray);
console.log(mixedArray.includes("Yasin") ? "Var" : "Yok");
for (let i = 3; i < mixedArray.length; i++) {
  if (mixedArray[i] === "patates") {
    console.log("Patates Var");
  } else {
    console.log("Patates Yok");
  }
}
console.log(mixedArray.includes("patates",3));
console.log(mixedArray.indexOf("Şeftali"));
let lastArray = [];
for (let i = 0; i < 3; i++) {
 lastArray.push(mixedArray[i]);
}
lastArray.splice(1,2,"YENİ-1","YENİ-2");

console.log(lastArray);
console.log(lastArray.join(" + "));