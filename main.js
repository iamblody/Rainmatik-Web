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

eksiBtn.addEventListener("click", () => {
    count--;
    if(count=== -1){
        count = 0;
    }
    countDisplay.textContent = count;
})

// Zikir sayısını sıfırlayan işlev
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

