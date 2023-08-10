// -- Birkaç cümleden oluşan bir hikaye yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.

// 1- Yazdığınız hikayenin uzunluğunu yazdırın.

// 2- Hikayenin toplam index sayısı kaçtır.

// 3- string içerisinde tekrar eden bir kelimenin ilkinin indexini ve sonuncusunun indexini sorgulayın.

// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)

// 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)

// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)

// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.

// 8- Son 5 karakter haric hikayenizi yazdırın.

// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.

// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.

// 11- Hikayenizdeki "a" karakterini "e" ye çevirin.

// 12- Bütün metni büyük harfe çevirin.

// 13- Bütün metni küçük harfe çevirin.

// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
//  a- Ardından bu değişkeni kullanarak console'a " isim" şeklinde yazdırın.
//  b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"

// 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun.
//  a- Başındaki boşlukları kaldırın.
//  b- Sonundaki boşlukları kaldırın.
//  c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.

// 16- Çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.

// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun.
let myStory =
  "Gülüyorum filmini mi balıkhaneye bilgisayarı sarmal açılmadan dolayı un değirmeni lakin bilgiyasayarı dergi ötekinden dolayı göze çarpan mıknatıslı okuma sayfası teldeki. Bilgisayarı çakıl sarmal açılmadan dolayı telefonu bilgiyasayarı yapacakmış ona doğru çünkü layıkıyla karşıdakine. Öyle ki masanın ona doğru gidecekmiş patlıcan balıkhaneye kapının kulu bilgiyasayarı ama sıradanlıktan ama anlamsız. Göze çarpan sarmal açılmadan dolayı koyun yazın kapının kulu batarya kutusu biber layıkıyla ve sarmal açılmadan dolayı dergi gitti sokaklarda. Yazın biber yazın umut telefonu sıla masaya doğru tv kalemi çünkü. Cezbelendi çünkü mutlu oldular değerli olduğu için sinema koşuyorlar sokaklarda değerli olduğu için cesurca yaptı yazın.";
console.log("1-  : ", myStory.length);
console.log("2-  : ", myStory.length - 1);
console.log("3 - : ", myStory.indexOf("sarmal"));
console.log("3 - : ", myStory.lastIndexOf("sarmal"));
console.log("4 - : ", myStory.substring(0, 15));
console.log("4 - : ", myStory.slice(0, 15));
console.log("5 - : ", myStory.substring(15));
console.log("5 - : ", myStory.slice(15));
console.log("6 - : ", myStory.substring(myStory.length - 5));
console.log("6 - : ", myStory.slice(-5));
console.log("7 - : ", myStory.substr(12, 10));
console.log("8 - : ", myStory.substring(0, myStory.length - 5));
console.log("9 - : ", myStory.includes("sarmal"));
console.log("10 - : ", myStory.replaceAll("i", "ı"));
console.log("11 - : ", myStory.replace("a", "e"));
console.log("12 - : ", myStory.toUpperCase());
console.log("13 - : ", myStory.toLowerCase());
let kAdi = prompt();
console.log("14 - a) : Hoşgeldin, ", kAdi);
console.log("14 - b) : ", `Hoşgeldin, ${kAdi}`);
let messageTrim = `    ${prompt()}    `;
console.log("15 - a) : ", messageTrim.trimStart());
console.log("15 - b) : ", messageTrim.trimEnd());
let message = messageTrim.trim();
console.log("15 - c) : ", message);
console.log("16 - : ", `BENİM Adım : ${kAdi}`);
let variable = "AAAA";
alert(variable);
console.log("17 - : ", variable);
