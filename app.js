// String
// Qo'shtirnoq orasidagi yoki bir tirnoq orasidagi ma'lumotlar String ma'lumot deyiladi

let stringData = "Abdulaziz";

// typeof elementi ma'lumotlarni turini aniqlash uchun ishlatiladi

console.log(typeof stringData);

let age = 25;

console.log(typeof age);

// Boolean => true va false qiymatini qaytarsa boolean ma'lumot turi deb nomlanadi

let maktabOchiq = false;

console.log(typeof maktabOchiq);

// undefined malumot turi o'zgaruvchi e'lon qilib, unga qiymat berilmasa va serverdan ma'lumotlar kelmasa va ularni loop orqali tarqatilmasa

let moshina;

console.log(moshina);

// Serverdan keladigan malumotlarni qanday turdaligini bilmasak va qiymatlarni o'zimiz kiritsak boshlanishidan null qiyamtini berib quyamiz

let user = null;

console.log(user);

console.log(typeof user);

// False qiymatini qaytaradigan ma'lumot turlarining shakli:

//1) "" bo'sh string === false
// masalan:
let Name = "";

if (Name) {
  console.log("Name is true");
} else {
  console.log("Name is false");
}

//2) 0 number === false
// masalan:
let Age = 0;

if (Age) {
  console.log("Age is true");
} else {
  console.log("Age is false");
}

//3) null === false
// masalan:
let Null = null;

if (Null) {
  console.log("Null is true");
} else {
  console.log("Null is false");
}

// 1ta = qiymatni olish uchun ishlatiladi
// 3ta ==== qiymatni tekshirish uchun ishlatiladi

let svetBor = false;

if (svetBor === false) {
  console.log("Maktabda svet yo'q");
} else {
  console.log("Maktabda svet bor");
}

if (40 > 50) {
  console.log("40 50 dan kickina");
} else {
  console.log("40 50 dan katta emas. qiymat - false");
}

if (50 + 50 === 101) {
  console.log("Qiymati: true, 100 bo'lsa");
} else if (30 + 70 === 100) {
  console.log("Qiymati: true, 30+70 bo'lsa");
} else {
  console.log("Qiymati: false, 100 bo'lsa");
}
