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

document.getElementById("submitBtn").addEventListener("click", async () => {
  const userKey = document.getElementById("keyInput").value.trim();

  if (!userKey) {
    alert("Bạn chưa nhập mã Key mà!");
    return;
  }

  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, `keys/${userKey}`));
    
    if (snapshot.exists() && snapshot.val() === true) {
      alert("🎉 Key chính xác! Menu VIP đã được kích hoạt.");
      // LƯU Ý: Nếu bạn có hàm mở menu game (ví dụ: openMenu() hoặc showMenu()), hãy gõ tên hàm ở ngay dưới dòng này nhé!
      
    } else {
      alert("❌ Key sai hoặc đã bị khóa rồi Lâm ơi!");
    }
  } catch (error) {
    console.error(error);
    alert("Lỗi kết nối mạng đến server Firebase!");
  }
});
