// --- XỬ LÝ THANH KÉO CHỈ SỐ NẤC 0.1 ---
const speedSlider = document.getElementById('speed-slider');
const speedVal = document.getElementById('speed-val');
speedSlider.addEventListener('input', (e) => {
    speedVal.innerText = parseFloat(e.target.value).toFixed(1) + "x";
});

const jumpSlider = document.getElementById('jump-slider');
const jumpVal = document.getElementById('jump-val');
jumpSlider.addEventListener('input', (e) => {
    jumpVal.innerText = parseFloat(e.target.value).toFixed(1) + "x";
});

const reloadSlider = document.getElementById('reload-slider');
const reloadVal = document.getElementById('reload-val');
reloadSlider.addEventListener('input', (e) => {
    reloadVal.innerText = parseFloat(e.target.value).toFixed(1) + "x";
});

const droneSlider = document.getElementById('drone-slider');
const droneVal = document.getElementById('drone-val');
droneSlider.addEventListener('input', (e) => {
    droneVal.innerText = parseFloat(e.target.value).toFixed(1) + "x";
});

// --- THANH KÉO BUFF DAME & AIM SPEED ---
const damageSlider = document.getElementById('damage-slider');
const damageVal = document.getElementById('damage-val');
damageSlider.addEventListener('input', (e) => {
    damageVal.innerText = "+" + e.target.value + " Đạn Sát Thương";
});

const aimspdSlider = document.getElementById('aimspd-slider');
const aimspdVal = document.getElementById('aimspd-val');
aimspdSlider.addEventListener('input', (e) => {
    if(e.target.value == 100) {
        aimspdVal.innerText = "MAX (100%)";
        aimspdVal.style.color = "red";
    } else {
        aimspdVal.innerText = e.target.value + "%";
        aimspdVal.style.color = "white";
    }
});

const aimdistSlider = document.getElementById('aimdist-slider');
const aimdistVal = document.getElementById('aimdist-val');
aimdistSlider.addEventListener('input', (e) => {
    aimdistVal.innerText = e.target.value + "m";
});

const spinSlider = document.getElementById('spin-slider');
const spinVal = document.getElementById('spin-val');
spinSlider.addEventListener('input', (e) => {
    spinVal.innerText = e.target.value + "x";
});

const fovSlider = document.getElementById('fov-slider');
const fovVal = document.getElementById('fov-val');
fovSlider.addEventListener('input', (e) => {
    fovVal.innerText = e.target.value + "px";
});

// --- LẮNG NGHE ĐỔI TÙY CHỌN RADIO ---
const aimOptions = document.querySelectorAll('input[name="aim-target"]');
aimOptions.forEach(opt => {
    opt.addEventListener('change', (e) => alert("Mục tiêu ngắm: " + e.target.value));
});

const fovOptions = document.querySelectorAll('input[name="fov-mode"]');
fovOptions.forEach(opt => {
    opt.addEventListener('change', (e) => alert("Chế độ quét FOV: " + e.target.value));
});

// --- TƯƠNG TÁC BẬT TẮT CÁC TÍNH NĂNG MỚI ---
document.getElementById('recoil-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Chống giật tâm 100%" : "Đã tắt: Chống giật"));
document.getElementById('noreload-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Tự động hồi đạn nhanh" : "Đã tắt: Tự động hồi đạn"));
document.getElementById('fastswitch-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Đổi súng siêu tốc" : "Đã tắt: Đổi súng thường"));

document.getElementById('esp-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Khung nhìn Box Địch" : "Đã tắt: Ẩn Box"));
document.getElementById('espskeleton-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Người que ESP 3D" : "Đã tắt: Ẩn người que"));
document.getElementById('espname-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Hiện tên người chơi" : "Đã tắt: Ẩn tên"));
document.getElementById('esphealth-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Thanh hiển thị Máu" : "Đã tắt: Ẩn thanh máu"));
document.getElementById('espdist-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Đo khoảng cách mét" : "Đã tắt: Ẩn khoảng cách"));
document.getElementById('espline-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Đường kẻ Line định vị" : "Đã tắt: Ẩn Line"));
document.getElementById('espradar-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Khung Rada định vị" : "Đã tắt: Ẩn Rada"));
document.getElementById('alert360-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Cảnh báo hướng bắn 360" : "Đã tắt: Tắt cảnh báo"));
document.getElementById('visible-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Check Visible (Chỉ ghim khi lộ diện)" : "Đã tắt: Tắt Check Visible"));

document.getElementById('tele-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Teleport đến địch gần nhất" : "Đã tắt: Ngừng Teleport"));
document.getElementById('spin-toggle').addEventListener('change', (e) => alert(e.target.checked ? "Đã bật: Chế độ Xoay Tròn 360" : "Đã tắt: Ngừng xoay"));

// --- KÍCH HOẠT KEY ---
document.getElementById('btn-activate').addEventListener('click', () => {
    const keyValue = document.getElementById('key-input').value.trim();
    if(keyValue === "LAMDZ2026") {
        alert("✅ KÍCH HOẠT THÀNH CÔNG!\nChào mừng bạn đến với MENU LÂM IOS VIP.");
    } else {
        alert("❌ Key sai hoặc hết hạn. Vui lòng kiểm tra lại!");
    }
});
