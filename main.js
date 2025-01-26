// Sayaç değerini tutan değişken
let count = 0;

// HTML elemanlarını seç
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const eksiBtn = document.getElementById("eksi-btn");

// Zikir sayısını artıran işlev
increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

if(count=== 22){
  alert("tanışma ve sevgililik yılımız 💖")
}

if(count=== 29){
  alert("tanışma günümüz 💖")
}

if(count=== 30){
  alert("karı koca olma günümüz 💖")
}

if(count=== 8){
  alert("tanışma ve karı koca olma ayımız 💖")
}

eksiBtn.addEventListener("click", () => {
    count--;
    if (count === -1) {
        alert("güzellik değer 0'ın altında olamaz!");
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

