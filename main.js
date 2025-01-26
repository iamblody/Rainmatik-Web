// Sayaç değerini tutan değişken
let count = 0;

// HTML elemanlarını seç
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const eksiBtn = document.getElementById("eksi-btn");

// Özel sayılar için mesajlar
const specialMessages = {
  22: "tanışma ve sevgililik yılımız 💖",
  29: "tanışma günümüz 💖",
  30: "karı koca olma günümüz 💖",
  8: "tanışma ve karı koca olma ayımız 💖"
};

// Zikir sayısını artıran işlev
increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;

  // Sayı özelse, mesaj ekliyoruz
  if (specialMessages[count]) {
    countDisplay.textContent += ` ${specialMessages[count]}`; // Mesajı ekliyoruz
  }
});

// Eksi butonuna basıldığında sayaç düşürülüyor
eksiBtn.addEventListener("click", () => {
    count--;
    if (count === -1) {
        alert("Güzellik değer 0'ın altında olamaz!");
        count = 0; // Sayaç sıfırlanıyor
        countDisplay.textContent = count; // 0'ı ekliyoruz
    } else {
        countDisplay.textContent = count;
    }
});

// Zikir sayısını sıfırlayan işlev
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
