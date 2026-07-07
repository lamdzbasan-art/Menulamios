import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjsMk9UcPi0g_2arXqScnCCQ",
  authDomain: "menulamios238.firebaseapp.com",
  databaseURL: "https://menulamios238-default-rtdb.firebaseio.com",
  projectId: "menulamios238",
  storageBucket: "menulamios238.firebasestorage.app",
  messagingSenderId: "413788532486",
  appId: "1:413788532486:web:75cd34b7c128c7fde5f4bf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Đã đổi thành "btn-activate" cho khớp với file HTML của bạn
document.getElementById("btn-activate").addEventListener("click", async () => {
  // Đã đổi thành "key-input" cho khớp với file HTML của bạn
  const userKey = document.getElementById("key-input").value.trim();

  if (!userKey) {
    alert("Bạn chưa nhập mã Key mà!");
    return;
  }

  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, `keys/${userKey}`));
    
    if (snapshot.exists() && snapshot.val() === true) {
      alert("🎉 Key chính xác! Menu VIP đã được kích hoạt.");
      // Thêm hàm mở menu của bạn ở đây nếu có nhé!
    } else {
      alert("❌ Key sai hoặc đã bị khóa rồi Lâm ơi!");
    }
  } catch (error) {
    console.error(error);
    alert("Lỗi kết nối mạng đến server Firebase!");
  }
});
