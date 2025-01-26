// Sayaç değerini tutan değişken
let count = 0;

// HTML elemanlarını seç
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const eksiBtn = document.getElementById("eksi-btn");

let alertShown = false;  // Alert'in sadece bir kez gösterilmesini sağlamak için bayrak

// Zikir sayısını artıran işlev
increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;

  // Alert gösterme koşulları
  if (count === 22 && !alertShown) {
    alert("tanışma ve sevgililik yılımız 💖");
    alertShown = true;
  }

  if (count === 29 && !alertShown) {
    alert("tanışma günümüz 💖");
    alertShown = true;
  }

  if (count === 30 && !alertShown) {
    alert("karı koca olma günümüz 💖");
    alertShown = true;
  }

  if (count === 8 && !alertShown) {
    alert("tanışma ve karı koca olma ayımız 💖");
    alertShown = true;
  }
});

// Eksi butonuna basıldığında sayaç düşürülüyor
eksiBtn.addEventListener("click", () => {
    count--;
    if (count === -1) {
        alert("Güzellik değer 0'ın altında olamaz!");
        count = 0; // Sayaç sıfırlanıyor
        setTimeout(() => {
            countDisplay.textContent = count; // Mesaj yerine tekrar 0 gösterir
        }, 1000); // 1 saniye sonra geri dön
    } else {
        countDisplay.textContent = count;
    }
});

// Zikir sayısını sıfırlayan işlev
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
