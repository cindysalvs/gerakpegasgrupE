//insert gambar
let latar;
let semua;
let bawah;
let anggota;
let grafik;
let ilustrasi;
let shock;

let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
r = 15

//insert simulasi
let mass = 10;
let position = 100;
let velocity = 0;
let acceleration = 0;
let k = 0.5; // koefisien elastisitas pegas
let damping = 0.05; // redaman
let springLength = 150;

let dampingSlider;
let dampingLabel;

let smallDampingSlider;
let smallDampingLabel;



function preload(){
  latar = loadImage('gaya pegas.jpg');
  semua = loadImage('Judul gerak pegas.png');
  anggota = loadImage ('anggota.png');
  grafik = loadImage('grafik model.png');
  ilustrasi = loadImage('ilustrasi.jpg');
  shock = loadImage('shockbreaker.jpg');
  RobotoMonoSemiBold = loadFont('RobotoMono-SemiBold.ttf')
  RobotoMonoMedium = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight = loadFont('RobotoMono-ExtraLight.ttf')
}

function setup() {
  createCanvas(1600,2900);

  // Slider untuk redaman besar
  dampingSlider = createSlider(0, 1, damping, 0.01);
  dampingSlider.position(400, 1930);
  dampingLabel = createSpan('Redaman Besar: ' + dampingSlider.value());
  dampingLabel.position(400, 1950);

  // Slider untuk redaman kecil
  smallDampingSlider = createSlider(0, 1, damping, 0.01);
  smallDampingSlider.position(600, 1930);
  smallDampingLabel = createSpan('Redaman Kecil: ' + smallDampingSlider.value());
  smallDampingLabel.position(600, 1950);
  
}



function draw() {
  background('rgb(241,217,226)');
  noStroke()

  

//Background
  image(latar,0,0,1600,900);
  fill(51,66,87,200);
  rect(0,0,1600,900);
  
  
  
//Logo
  image(semua,485,0,600,600);
  
//Anggota
  image(anggota,0,400,1600,600);

  
//Grafik
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (25)
  text ("SIMULASI GRAFIK",680,1630)

  image(grafik,840,1650,520,346)
  
  // Mengupdate nilai redaman besar dan keterangan nama slider
  damping = dampingSlider.value();
  dampingLabel.html('Redaman Besar: ' + damping.toFixed(2));

  // Mengupdate nilai redaman kecil dan keterangan nama slider
  smallDamping = smallDampingSlider.value();
  smallDampingLabel.html('Redaman Kecil: ' + smallDamping.toFixed(2));

  let springForce = -k * (position - springLength);
  let dampingForce = -damping * velocity;

  acceleration = (springForce + dampingForce) / mass;
  velocity += acceleration;
  position += velocity;

  fill("white")
  rect(310,1650,500,350)
  
  fill("black")
  strokeWeight(2);
  line(550, 0, 550, 1700 + position, 50);
  circle(550, 1700 + position, 50);

  
//ILUSTRASI
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (25)
  text ("ILUSTRASI SHOCKBREAKER",630,2085)
  image(ilustrasi,330,2100,564,304)
  image(shock,950,2100,274,384)
  
  
//Tentang Gerak Pegas
  textSize(25)
  textFont(RobotoMonoMedium)
  fill('black')
  text("PEMODELAN GAYA PEGAS",645,980)
  
  textSize(18)
  textFont(RobotoMonoExtraLight)
  text("Pernah melihat shockbreaker mobil? Bentuknya seperti pegas yang sangat kuat. Mobil pun sekarang dilengkapi dengan shockbreaker, khususnya",40,1020)
  text("mobil ukuran kecil.Tanpa shockbreaker, goncangan kendaraan akan sangat kasar dan tiba-tiba jika roda melintasi jalan berlubang atau melewati",40,1040+r)
  text("penghalang seperti batu.Pegas / Shocker dipasang pada roda mobil untuk memastikan perjalanan yang aman bagi   penumpang.Setiap kali mobil",40,1060+2*r)
  text("menabrak jalan bergelombang, pegas / shocker ini berfungsi sebagai peredam kejut; menuju perjalanan yang mulus.Gaya pemulihan pada pegas",40,1080+3*r)
  text("akan mendorong roda mobil kembali ke tempatnya. Konstanta pegas shockbreaker dirancang sedemikian rupa sehingga frekuensi osilasi kendaraan",40,1100+4*r)
  text("berada pada frekuensi kenyamanan manusia.Tetapi menjadi tidak nyaman jika osilasi berlangsung terus menerus meskipun kendaraan sudah memasuki",40,1120+5*r)
  text("jalan mulus. Jika shockbreaker hanya terdiri dari pegas maka osilasi kendaraan kendaraan akan terjadi sangat lama.Bisa jadi osilasi kendaraan",40,1160+7*r)
  text("berlangsung terus hingga jarak ratusan meter. Tentu tidak nyaman bukan? Oleh karena itu, shockbreaker dilengkapi bagian lain yaitu peredam.Guna",40,1140+6*r)
   text("peredam adalah membuang energi osilasi sehingga osilasi segera hilang setelah beberapa saat.",40,1180+8*r)
  text("Apa kalian tau apa itu pegas ? ",40,1200+9*r)
  text("Pegas adalah elemen mesin flexibel yang digunakan untuk memberikan gaya, torsi, dan juga untuk menyimpan atau melepaskan energi.Lalu Sifat ",40,1220+10*r)
  text("pegas yang utama adalah harus mampu memberi gaya, melunakkan tumbukan, menyerap serta menyimpan energi agar dapat mengurangi getaran",40,1240+11*r)
  text("Pegastermasuk dalam bahan elastis, yaitu bahan yang mudah diregangkan serta selalu cenderung pulih ke keadaan semula,dengan mengenakan gaya",40,1270+11*r)
  text("reaksi elastik atas gaya tegangan yang meregangkan. Beban yang bekerja pada pegas dapat berbentuk gaya tarik, gaya tekan,atau ",40,1300+11*r)
  text("torsi (twist force).Selain itu, pada umumnya diketahui setiap pegas memiliki nilai konstantayang disebut konstanta pegas yang besarnya",40,1320+12*r)
  text("tergantung pada gaya dan pertambahan panjang pegas saja ada beberapa faktor yang mempengaruhi pertambahan panjang pegas sehingga mempengaruhi",40,1340+13*r)
  text("nilai konstanta dari suatu pegas tersebut diantaranya; jenis bahan pegas, diameterbahan pegas, diameter pegas, dan jumlah lilitan pegas.",40,1360+14*r)
  
  
//Interpretasi
  textSize(25)
  textFont(RobotoMonoMedium)
  fill('black')
  text("INTERPRETASI",690,2545)
  
  textSize(18)
  textFont(RobotoMonoExtraLight)
  text("Hasil simulasi yang ditampilkan dengan memplot posisi benda terhadap waktu menggunakan matplotlib.pyplot. Dua hasil simulasi yang berbeda ",40,2580)
  text("ditampilkan dengan warna biru dan merah untuk membedakan hasil simulasi. Simulasi redaman osilasi pegas berdasarkan variansi nilai koefisien",40,2610)
  text("redaman (c) yang dipengaruhi oleh konstanta proposionalitas dalam gesekan stokes dimulai dari 0.1 N  dan 50 N sehingga diperoleh nilai koefisi-",40,2640)
  text("en redaman 0,5 N/cm dan 25 N/cm dengan massa 1 kg,lama pengamatan (waktu) selama 10 sekon dan konstanta pegas (k) 1 N/cm.Menggunakan nilai",40,2670)
  text("konstanta redaman c=0,5 N/cm artinya ketika c<k dengan koefisien redaman lebih kecil dari konstanta pegas akan menghasilkan osilasi redaman",40,2700)
  text("yang lebih redaman lebih kecil dari konstanta pegas akan menghasilkan osilasi redaman yang lebih besar dibandingkan dengan koefisien redaman",40,2730)
  text("c= 25 N/cm, namun dengan waktu tertentu akan menuju posisi kesetimbangan atau berhenti. Sedangkan menggunakan nilai c= 25 N/cm artinya ketika",40,2760)
  text("c>k  dengan koefisien redaman lebih besar dari konstanta pegas menghasilkan osilasi rendaman lebih kecil,sehingga mengakibatkan sistem ",40,2790)
  text("perlahan-lahan bergerak menuju kesetimbangan.",40,2820)
  
}
