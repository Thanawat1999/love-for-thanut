function next() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function hug() {
  document.getElementById("msg").innerHTML =
    "🤍 ขอกอดแน่น ๆ ผ่านหน้าจอนะ<br><br>ไม่ว่าเธอจะเหนื่อยแค่ไหน ยังมีเราอยู่ข้าง ๆ เสมอ";
  document.getElementById("n").classList.remove("hidden");
}

function next2() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}

const messages = [
  "🌸 วันนี้เธอเก่งมากแล้วนะ",
  "🤍 เหนื่อยก็พักได้นะ",
  "💖 เราภูมิใจในตัวเธอเสมอ",
  "🌈 พรุ่งนี้จะเป็นวันที่ดี",
  "🥰 รัก Thanut มาก ๆ"
];

function gift() {
  const random = messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("gift").innerHTML = `
    <h3>💌 ถึง Thanut</h3>
    <p>${random}</p>
    <br>
    <p>
      ไม่ว่าเธอจะเจออะไร<br>
      <b>มีเราอยู่ข้าง ๆ เสมอนะ 🤍</b>
    </p>
  `;
}
