
function toggleHack(type) {
    let btn;
    let text = "";

    if (type === 'aimbot') {
        btn = document.getElementById('aimbotBtn');
        text = "Ghim Tâm";
    } else if (type === 'wallhack') {
        btn = document.getElementById('wallBtn');
        text = "Xuyên Tường";
    }

    if (btn) {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            btn.innerText = text + ": TẤT";
        } else {
            btn.classList.add('active');
            btn.innerText = text + ": BẬT";
        }
    }
}
