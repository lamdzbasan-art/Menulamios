// 1. XỬ LÝ CHỨC NĂNG AIMBOT (RADIO BUTTONS)
const aimOptions = document.querySelectorAll('input[name="aim-target"]');
aimOptions.forEach(option => {
    option.addEventListener('change', (e) => {
        alert("Mục tiêu ngắm đã chuyển sang: " + e.target.value);
    });
});

// 2. XỬ LÝ CÁC NÚT BẬT/TẮT (TOGGLE SWITCHES)
document.getElementById('esp-toggle').addEventListener('change', (e) => {
    if(e.target.checked) alert("Đã BẬT: Hiện khung xương (ESP)");
    else alert("Đã TẮT: Hiện khung xương (ESP)");
});

document.getElementById('antenna-toggle').addEventListener('change', (e) => {
    if(e.target.checked) alert("Đã BẬT: Định vị Antenna người chơi");
    else alert("Đã TẮT: Định vị Antenna người chơi");
});

document.getElementById('recoil-toggle').addEventListener('change', (e) => {
    if(e.target.checked) alert("Đã BẬT: Ghim tâm 100% chống giật");
    else alert("Đã TẮT: Ghim tâm");
});

// 3. XỬ LÝ THANH KÉO CHỈ SỐ (SLIDERS)
const speedSlider = document.getElementById('speed-slider');
const speedVal = document.getElementById('speed-val');
speedSlider.addEventListener('input', (e) => {
    speedVal.innerText = e.target.value + "x";
});

const jumpSlider = document.getElementById('jump-slider');
const jumpVal = document.getElementById('jump-val');
jumpSlider.addEventListener('input', (e) => {
    jumpVal.innerText = e.target.value + "x";
});

// 4. XỬ LÝ Ô NHẬP KEY KÍCH HOẠT
document.getElementById('btn-activate').addEventListener('click', () => {
    const keyValue = document.getElementById('key-input').value;
    if(keyValue.trim() === "") {
        alert("Vui lòng không để trống ô nhập Key!");
    } else {
        alert("Đang kiểm tra Key: " + keyValue + "\nKích hoạt thành công!");
    }
});

