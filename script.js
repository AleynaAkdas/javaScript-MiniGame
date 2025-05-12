alert(
  "Merhabalar bu karanlık yolculuğa çıkmak için bir kaç bilgiye ihtiyacım var..."
);
prompt("Adın Nedir?");
prompt("Kaç yaşındasın?");
let animal = prompt("En sevdiğin hayvan nedir?");

let sanity = 100;
let gun = false;

alert(
  "Zifir'e hoş geldin.\n\nGözlerini açtığında karanlık bir odadasın. Soğuk ve rutubetli duvarlar seni sarmış..."
);
alert("Akıl Sağlığı: " + sanity + "/100");

//sahne 1: Uyanış & Korku

let q1 = prompt(
  "Uzaktan bir fısıltı duyuyorsun. Ne yaparsın?\nA - Fısıltıya yaklaş\nB - Etrafı kontrol et\nC - Kendi kendine konuş"
);

if (q1.toLowerCase() === "a") {
  alert(
    "Fısıltı artıyor... seni çağırıyor gibi. Korkuyorsun.\nKorkuyla karışık buradan çıkman gerektiğini düşünüyorsun ve etrafı incelereyek bir çıkış yolu aramaya başlıyorsun."
  );
  sanity -= 25;
} else if (q1.toLowerCase() === "b") {
  alert(
    "Elinle duvarları yokladın, nemli ama güvenli. \nBuradan çıkman gerektiğini düşünüyorsun ve etrafı incelereyek bir çıkış yolu aramaya başlıyorsun."
  );
  sanity += 2;
} else if (q1.toLowerCase() === "c") {
  alert(
    "Kendi sesinle teselli bulmaya çalışıyorsun... ama bir ses daha eşlik ediyor. \nKafan bulanmaya başlıyor ve buradan çıkman gerektiğini düşünüyorsun etrafı incelereyek bir çıkış yolur aramaya başlıyorsun."
  );
  sanity -= 25;
} else {
  alert(
    "Kararsızlık zihnini bulandırıyor. \nburadan çıkman gerekiyor. etrafı inceleyerek yürümeye başlıyorsun."
  );
  sanity -= 10;
}

if (sanity >= 80) {
  alert("🧠 Zihnin berrak.\nAkıl Sağlığı: " + sanity + "/100");
} else if (sanity >= 50) {
  alert("😐 Düşüncelerin karışık.\nAkıl Sağlığı: " + sanity + "/100");
} else if (sanity >= 30) {
  alert("😨 Gerçeklik bükülüyor.\nAkıl Sağlığı: " + sanity + "/100");
} else {
  alert("💀 Deliliğin sınırındasın.\nAkıl Sağlığı: " + sanity + "/100");
}

//sahne 2: Pişmanlık
alert("Yerde eski bir mektup buluyorsun. Zarfsız. Üzerinde kendi adın.");
let q2 = prompt("Ne yapacaksın?\nA - Aç\nB - Görmezden gel");
if (q2.toLowerCase() === "a") {
  alert("Mektubu eline aldın. Zarf yok. Parmakların titriyor.");
  alert("✉️ Mektubu açmak için tıkladın...");
  alert(
    '"Ben suçluyum. Ama kimseye söylemedim.\nSaklandım, kaçtım... ve şimdi Zifir\'deyim.\nEğer bunu okuyorsan, sen de aynı yoldasın."\n\n- Çocukluk sesin'
  );
  alert(
    "Zihnin bulanıyor fakat geçmişinle yüzleşmen gerektiğini fark ediyorsun ve bunun senin akıl sağlığın ile oynamasına izin vermiyorsun.."
  );
  sanity += 0;
} else if (q2.toLowerCase() === "b") {
  alert("Geçmişten kaçamazsın. Mektup kendi kendine yanıyor.");
  sanity -= 20;
} else {
  alert("Zaman duruyor. Harfler havada asılı kalıyor.");
  sanity -= 20;
}

if (sanity >= 80) {
  alert("🧠 Zihnin berrak.\nAkıl Sağlığı: " + sanity + "/100");
} else if (sanity >= 50) {
  alert("😐 Düşüncelerin karışık.\nAkıl Sağlığı: " + sanity + "/100");
} else if (sanity >= 30) {
  alert("😨 Gerçeklik bükülüyor.\nAkıl Sağlığı: " + sanity + "/100");
} else {
  alert("💀 Deliliğin sınırındasın.\nAkıl Sağlığı: " + sanity + "/100");
}

// sahne 3: Şüphe
alert(
  "Etrafı incelerken yerde belli belirsiz paryalan bir şey görüyorsun \nBİR TABANCA! Soğuk ve paslı. Ama çalışıyor gibi."
);
silahVar = true;
alert(
  "Cebine koyuyorsun. İçini garip bir güven kaplıyor. yürümeye devam ediyorsun"
);
alert("Akıl Sağlığı: " + sanity + "/100");

// sahne 4: öfke
alert("Duvarlarda karalanmış bir yüz... Sana benziyor. Ama gözleri yok.");
let q4 = prompt(
  "Ne yapacaksın?\nA - Üzerine bağır\nB - Yok say\nC - Elinle silmeye çalış"
);
if (q4.toLowerCase() === "a") {
  alert("Sesin yankılanıyor. Duvar titriyor. Ama yüz kaybolmuyor.");
  sanity -= 12;
} else if (q4.toLowerCase() === "b") {
  alert("Gözlerini kapatıyorsun. Ama içinden çıkmıyor.");
  sanity -= 7;
} else if (q4.toLowerCase() === "c") {
  alert("Parmakların kanıyor. Ama yüz hâlâ orada.");
  sanity -= 12;
} else {
  alert("Tepkisiz kaldın. Delilik sessizdir bazen.");
  sanity -= 10;
}
if (sanity >= 80) {
  alert("🧠 Zihnin berrak.\nAkıl Sağlığı: " + sanity + "/100");
} else if (sanity >= 50) {
  alert("😐 Düşüncelerin karışık.\nAkıl Sağlığı: " + sanity + "/100");
} else if (sanity >= 30) {
  alert("😨 Gerçeklik bükülüyor.\nAkıl Sağlığı: " + sanity + "/100");
} else {
  alert("💀 Deliliğin sınırındasın.\nAkıl Sağlığı: " + sanity + "/100");
}

// Sahne 5: Yüzleşme
alert("Bir ayna. Kırık. İçinde kendi yansıman yok.");
let q6 = prompt(
  "Ne yapacaksın?\nA - Bakmaya devam et\nB - Aynayı kır\nC - Gözlerini kapa"
);
if (q6.toLowerCase() === "a") {
  alert("Gözlerin boşluğa alışıyor.\nSonunda bir yüz... ama tanımadığın biri.");
  sanity -= 15;
} else if (q6.toLowerCase() === "b") {
  alert("Cam parçalanıyor. Ama içindeki boşluk kalıyor.");
  sanity -= 7;
} else if (q6.toLowerCase() === "c") {
  alert("Görmemeyi seçtin. Bazen bu daha güvenli.");
  sanity += 3;
} else {
  alert("Kafandaki aynada hep sen varsın. Ama hangi sen?");
  sanity -= 10;
}
alert("Akıl Sağlığı: " + sanity + "/100");

//sahne 6: halisünasyon
if (sanity < 60 && silahVar) {
  alert(
    "Bir karaltı yaklaşıyor. bir insan. Sırtı dönük veya sen öyle olduğunu sanıyorsun."
  );
  let s1 = prompt("Silah elinde. Ne yapacaksın?\nA - Sık\nB - Seslen\nC - Kaç");

  if (s1.toLowerCase() === "a") {
    alert("Tetiği çekiyorsun. Karaltı yere düşüyor.");
    alert(
      "Yaklaştığında... bu bir adam değilmiş.\nKorkmuş bir " +
        animal +
        " sana bakıyor.."
    );
    alert("Yıkılıyorsun. Gerçeği göremedin.");
    sanity -= 30;
  } else if (s1.toLowerCase() === "b" || s1.toLowerCase() === "c") {
    alert("Karaltı sana doğru koşuyor!\nSilah elinde titriyor.");
    let s2 = prompt("Sıkacak mısın?!\nA - Evet\nB - Hayır");

    if (s2.toLowerCase() === "a") {
      alert(
        "Tetiği çekiyorsun. Varlık yere düşüyor.\n bir " +
          animal +
          ".\n pişmanlık duyuyorsun.. \n Akıl sağlığını iyice kaybediyorsun.."
      );
      sanity -= 20;
    } else if (s2.toLowerCase() === "b") {
      alert(
        "Silahı indiriyorsun. Karaltı yaklaşıyor.\nYaralı bir " +
          animal +
          " seni kokluyor.\nKorkmamış. Sadece yalnızmış."
      );
      alert("Gerçeği zamanında fark ettin.");
      sanity += 30;
    } else {
      alert("Kararsızlık ölümcül olabilir. Her şey bulanıklaştı.");
      sanity -= 25;
    }
  } else {
    alert("Tepkisiz kaldın. O şey artık sadece kafanda.");
    sanity -= 15;
  }
} else {
  alert(
    "Karanlıktan bir " +
      animal +
      " beliriyor.\nGözleri kocaman. Korkmuş ama zararsız."
  );
  let s3 = prompt("Ne yapacaksın?\nA - Sev\nB - Uzak dur");
  if (s3.toLowerCase() === "a") {
    alert(
      "Elini uzatıyorsun. Başını dizine koyuyor.\nKaranlık bile ısınıyor bir an."
    );
    sanity += 5;
  } else {
    alert("Uzak kalıyorsun. O da uzaklaşıyor.\nİkiniz de yalnızsınız.");
    sanity -= 5;
  }
}
alert("Akıl Sağlığı: " + sanity + "/100");

// Sahne 7: Kapı
alert("Uzakta bir kapı beliriyor. İçinden ışık sızıyor.");
let q7 = prompt("Ne yapacaksın?\nA - Koş\nB - Yavaşça yaklaş\nC - Arkana bak");
if (q7.toLowerCase() === "a") {
  alert("Işık gözünü alıyor. Uyanıyor gibisin...");
  sanity -= 5;
} else if (q7.toLowerCase() === "b") {
  alert("Adımların sessiz. Kalbin yavaş. Gerçeklik seni çağırıyor.");
  sanity += 5;
} else if (q7.toLowerCase() === "c") {
  alert("Arkanda hiçbir şey yok... ya da her şey orada.");
  sanity -= 10;
} else {
  alert("Zaman seninle dalga geçiyor. Kapı buharlaşıyor.");
  sanity -= 15;
}

// Final
alert("Son Akıl Sağlığı: " + sanity + "/100");
if (sanity >= 60) {
  alert(
    "Zifir'den çıktın. Gerçeklik geri döndü. Ama izleri hep seninle kalacak."
  );
} else if (sanity >= 30) {
  alert(
    "Zifir seni yutmadı. Ama serbest de bırakmadı.\nArada bir yerde sıkıştın."
  );
} else {
  alert("Zifir seni aldı. Artık sen de onun bir parçasısın.");
}
