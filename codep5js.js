// Contoh dasar pembuatan objek 3D dengan p5.js
function setup() {
    // Membuat canvas 3D
    createCanvas(680, 480, WEBGL);
  }
   
  function draw() {
    // Mengatur background
    background(200);
   
    // Menambahkan pencahayaan
    directionalLight(255, 255, 255, 0.5, 1, -0.5);
    ambientLight(100);
   
    // Mengatur rotasi objek berdasarkan waktu
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
   
    // Menambahkan kotak 3D
    push();
    fill(255, 165, 0); // Warna orange
    box(100); // Membuat kotak berukuran 100x100x100
    pop();
   
    // Menambahkan bola 3D
    push();
    translate(0,150, 150); // Menggeser posisi bola ke kanan dan atas secara berputan
    fill(255, 204, 0); // Warna kuning
    sphere(70); // Membuat bola dengan radius 70
    pop();
  }