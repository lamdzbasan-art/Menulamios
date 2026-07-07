import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjsMk9UcPi0g_2arXqScnCCQ",
  databaseURL: "https://menulamios238-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("btn-activate").addEventListener("click", async () => {
  const userKey = document.getElementById("key-input").value.trim();
  if (!userKey) return alert("Bạn ơi, chưa nhập Key kìa!");

  let deviceId = localStorage.getItem("my_device_id");
  if (!deviceId) {
    deviceId = "dev_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("my_device_id", deviceId);
  }

  const keyRef = ref(db, `keys/${userKey}`);
  try {
    const snapshot = await get(keyRef);
    if (!snapshot.exists()) return alert("Bạn ơi, Key không tồn tại!");
    
    const keyData = snapshot.val();
    const now = Date.now();

    if (!keyData.deviceId || keyData.deviceId === "") {
      const days = keyData.duration || 30;
      await update(keyRef, { deviceId: deviceId, expiryTimestamp: now + (days * 86400000) });
      document.getElementById("menu-vip").style.display = "block";
      document.getElementById("login-section").style.display = "none";
      alert("Bạn ơi, kích hoạt thành công " + days + " ngày!");
    } 
    else if (keyData.deviceId === deviceId) {
      if (now > keyData.expiryTimestamp) {
        alert("Bạn ơi, Key hết hạn rồi!");
      } else {
        document.getElementById("menu-vip").style.display = "block";
        document.getElementById("login-section").style.display = "none";
        alert("Bạn ơi, chào mừng quay lại!");
      }
    } 
    else {
      alert("Bạn ơi, Key này đã dùng ở thiết bị khác!");
    }
  } catch (error) {
    alert("Lỗi kết nối Firebase!");
  }
});
