// Mendapatkan elemen-elemen yang diperlukan
var instruction = document.getElementById("instruction");
var inputTemperature = document.getElementById("inputTemperature");
var result = document.getElementById("result");
var method = document.getElementById("method");
var methodSection = document.getElementById("methodSection");

// Mendefinisikan variabel untuk menentukan arah konversi
var celsiusToFahrenheit = true;

// Mengubah label input berdasarkan arah konversi
var labelInput = document.querySelector("label[for='inputTemperature']");
var labelOutput = document.querySelector("label[for='outputTemperature']");

// Fungsi untuk mengecek input pengguna
function checkInput() {
    var inputTemperature = document.getElementById("inputTemperature").value;
  
    if (inputTemperature === "") {
      showAlert("<strong style='color:#F44336'>Alert!</strong> Masukkan suhu sebelum melakukan konversi.");
      return;
    }
  
    if (isNaN(inputTemperature)) {
      showAlert("<strong>Alert!</strong> Masukkan suhu dalam bentuk angka.");
      return;
    }
}

// Fungsi untuk melakukan konversi suhu
function convertTemperature() {
    var inputTemp = parseFloat(inputTemperature.value);
    var outputTemp;

    checkInput()

    if (celsiusToFahrenheit) {
        outputTemp = (inputTemp * 9/5) + 32; // Konversi Celsius ke Fahrenheit
        method.value = inputTemperature.value + "°C * (9/5) + 32 = " + outputTemp + "°F";
    } else {
        outputTemp = (inputTemp - 32) * 5/9; // Konversi Fahrenheit ke Celsius
        method.value = "(" + inputTemperature.value + "°F - 32) * 5/9 = " + outputTemp + "°C";
    }

    result.value = outputTemp;
}

// Fungsi untuk melakukan reset input value
function onReset() {
    inputTemperature.value = "";
    result.value = "";
    method.value = "";
}

// Fungsi untuk melakukan reverse
function onReverse() {
    celsiusToFahrenheit = !celsiusToFahrenheit;

    // Mengubah instruksi berdasarkan arah konversi
    if (celsiusToFahrenheit) {
        instruction.textContent = "Masukkan suhu derajat Celcius (°C) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).";
        labelInput.textContent = "Celsius (°C):";
        labelOutput.textContent = "Fahrenheit (°F):";
        methodSection.innerHTML = `
        <h2>Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)</h2>
        <hr />
        <p>
            Suhu <b><i>S</i></b> dalam derajat Fahrenheit (°F) sama dengan suhu
            <b><i>S</i></b> dalam derajat Celsius (°C) kali <b>9/5</b> tambah
            <b>32</b>.
        </p>
        <p>
            <b><i>S</i></b><sub>(°F)</sub>=<b><i>S</i></b><sub>(°C)</sub>×<b>9/5</b>+<b>32</b>
        </p>
        <p>atau</p>
        <p>
            <b><i>S</i></b><sub>(°F)</sub>=<b><i>S</i></b><sub>(°C)</sub>×<b>1.8</b>+<b>32</b>
        </p>
        `;
    } else {
        instruction.textContent = "Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah, lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celcius (°C).";
        labelInput.textContent = "Fahrenheit (°F):";
        labelOutput.textContent = "Celsius (°C):";
        methodSection.innerHTML = `
        <h2>Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)</h2>
        <hr />
        <p>
            Suhu <b><i>S</i></b> dalam derajat Celsius (°C) sama dengan suhu
            <b><i>S</i></b> dalam derajat Fahrenheit (°F) dikurangi
            <b>32</b>, lalu dikali <b>5/9</b>.
        </p>
        <p>
            <b><i>S</i></b><sub>(°C)</sub>=(<b><i>S</i></b><sub>(°F)</sub>-<b>32</b>)×<b>5/9</b>
        </p>
        <p>atau</p>
        <p>
        <b><i>S</i></b><sub>(°C)</sub>=(<b><i>S</i></b><sub>(°F)</sub>-<b>32</b>)×<b>0.6</b>
        </p>
        `;
    }

    inputTemperature.value = "";
    result.value = "";
    method.value = "";
}

// Fungsi untuk menampilkan alert box
function showAlert(message) {
    var overlay = document.getElementById("overlay");
    var alertBox = document.getElementById("alertBox");

    overlay.style.display = "block";
    alertBox.innerHTML = '<span class="close-btn" onclick="closeAlert()">&times;</span>' + message;
    alertBox.style.display = "block";
}

// Fungsi untuk menutup alert box
function closeAlert() {
    var alertBox = document.getElementById("alertBox");

    overlay.style.display = "none";
    alertBox.style.display = "none";
    
    onReset();
}