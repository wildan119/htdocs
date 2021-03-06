// note
// bilangan ribuan di pisah dengan koma
// jika kurang paham silahkan hubungi wa ini 089687733430

// PUBG
var pubg_package = [
	'Bronze','Silver V', 'Silver IV', 'Silver III', 'Silver II', 'Silver I',
	'Gold V','Gold IV','Gold III','Gold II','Gold I',
	'Platinum V','Platinum IV','Platinum III','Platinum II','Platinum I',
	'Diamond V','Diamond IV','Diamond III','Diamond II','Diamond I',
	'Crown V','Crown IV','Crown III','Crown II','Crown I',
	'Ace'
];

// 0 = bronze, 1 = silver v, 2 = silver Iv, dan seterusnya sesuai dengan pubg_package, untuk ml dan pubg jga sama
// dan harga mulai dari peringat yg di pilih contoh
// awal pilih Silver V
// tujuan pilih Silver IV
// maka system akan mengambil data di pubg_harga
// no 1 value ke 1 yaitu '0' = value 0; '50,000' = value 1; '50,000' = value 2; '70,000' = value 3 dan seterusnya
var pubg_harga = {
	'0' 	: ['0','50,000','70,000','90,000','110,000','120,000','150,000','200,000','250,000','300,000','350,000','350,000','400,000','450,000','500,000','550,000','600,000','675,000','750,000','825,000','850,000','900,000','975,000','1,050,000','1,125,000','1,200,000','1,250,000'],
	'1' 	: ['0','50,000','50,000','70,000','75,000','100,000','150,000','200,000','250,000','275,000','300,000','350,000','400,000','450,000','500,000','550,000','625,000','700,000','775,000','825,000','850,000','925,000','1,000,000','1,075,000','1,150,000','1,200,000'],
	'2' 	: ['0','25,000','50,000','50,000','70,000','125,000','175,000','225,000','250.000','275,000','325,000','375,000','425,000','475,000','500,000','600,000','675,000','750,000','800,000','850,000','925,000','1,000,000','1,075,000','1,100,000','1,175,000'],
	'3' 	: ['0','0','50,000','70,000','125,000','175,000','225,000','250,000','250,000','300,000','350,000','400,000','450,000','475,000','575,000','650,000','700,000','750,000','825,000','900,000','975,000','1,050,000','1,075,000','1,150,000'],
	'4' 	: ['0','25,000','50,000','100,000','150,000','175,000','200,000','225,000','275,000','325,000','375,000','425,000','450,000','550,000','625,000','700,000','725,000','800,000','875,000','950,000','1,000,000','1,050,000','1,125,000'],
	'5' 	: ['0','25,000','75,000','125,000','175,000','200,000','200,000','250,000','300,000','350,000','400,000','425,000','525,000','600,000','650,000','700,000','775,000','850,000','925,000','975,000','1,025,000','1,100,000'],
	'6' 	: ['0','50,000','100,000','125,000','150,000','200,000','250,000','300,000','350,000','400,000','450,000','525,000','600,000','650,000','700,000','750,000','825,000','900,000','950,000','1,000,000','1,100,000'],
	'7' 	: ['0','50,000','100,000','125,000','150,000','200,000','250,000','300,000','350,000','400,000','475,000','550,000','625,000','650,000','700,000','775,000','850,000','925,000','950,000','1,050,000'],
	'8' 	: ['0','0','100,000','120,000','170,000','220,000','270,000','320,000','375,000','450,000','525,000','600,000','600,000','650,000','725,000','800,000','875,000','900,000','1,000,000'],
	'9' 	: ['0','0','100,000','150,000','200,000','250,000','300,000','350,000','425,000','500,000','525,000','550,000','625,000','700,000','775,000','850,000','875,000','950,000'],
	'10' 	: ['0','70,000','120,000','170,000','220,000','250,000','300,000','375,000','450,000','475,000','500,000','600,000','675,000','750,000','800,000','850,000','900,000'],
	'11' 	: ['0','50,000','100,000','150,000','200,000','250,000','300,000','350,000','400,000','450,000','550,000','625,000','700,000','750,000','825,000','900,000'],
	'12' 	: ['0','50,000','100,000','150,000','200,000','250,000','300,000','375,000','425,000','500,000','575,000','625,000','700,000','775,000','850,000'],
	'13' 	: ['0','50,000','100,000','150,000','200,000','275,000','325,000','400,000','450,000','525,000','600,000','675,000','750,000','800,000'],
	'14' 	: ['0','50,000','100,000','150,000','225,000','300,000','350,000','400,000','475,000','550,000','625,000','700,000','750,000'],
	'15' 	: ['0','50,000','125,000','200,000','250,000','300,000','350,000','425,000','500,000','575,000','650,000','700,000'],
	'16' 	: ['0','75,000','150,000','225,000','250,000','300,000','375,000','450,000','525,000','600,000','650,000'],
	'17' 	: ['0','75,000','150,000','225,000','250,000','325,000','400,000','475,000','525,000','600,000'],
	'18' 	: ['0','75,000','150,000','225,000','300,000','350,000','400,000','450,000','525,000'],
	'19' 	: ['0','75,000','150,000','200,000','275,000','350,000','425,000','475,000'],
	'20' 	: ['0','100,000','175,000','225,000','300,000','375,000','400,000'],
	'21' 	: ['0','100,000','200,000','250,000','300,000','350,000'],
	'22' 	: ['0','100,000','200,000','250,000','300,000'],
	'23' 	: ['0','100,000','200,000','250,000'],
	'24' 	: ['0','100,000','200,000'],
	'25' 	: ['0','100,000'],
	'26' 	: ['0','0'],
}

// ML
var ml_package 	= [
	'Warrior','Elite',
	'Master IV','Mater II',
	'Grand Master V','Grand Master IV','Grand Master III','Grand Master II','Grand Master I',
	'Epic V','Epic IV','Epic III','Epic II','Epic I',
	'Legends V','Legends IV','Legends III','Legends II','Legends I','Mythic'
];
var ml_harga 	= {
	'0' 	: ['0','0','100,000','150,000','200,000','250,000','300,000','325,000','350,000','350,000','400,000','450,000','475,000','500,000','500,000','600,000','700,000','750,000','775,000','800,000'],
	'1' 	: ['0','50,000','100,000','150,000','200,000','250,000','275,000','300,000','300,000','350,000','400,000','425,000','450,000','450,000','550,000','650,000','700,000','725,000','750,000'],
	'2' 	: ['0','50,000','100,000','125,000','150,000','150,000','150,000','250,000','275,000','300,000','325,000','350,000','350,000','450,000','550,000','600,000','650,000','700,000'],
	'3' 	: ['0','50,000','75,000','100,000','100,000','100,000','200,000','250,000','300,000','325,000','350,000','350,000','450,000','550,000','600,000','650,000','700,000'],
	'4' 	: ['0','50,000','75,000','100,000','125,000','150,000','200,000','250,000','300,000','350,000','350,000','450,000','550,000','600,000','650,000','700,000'],
	'5' 	: ['0','50,000','75,000','100,000','150,000','200,000','250,000','300,000','350,000','350,000','450,000','550,000','600,000','650,000','700,000'],
	'6' 	: ['0','50,000','75,000','100,000','150,000','200,000','250,000','300,000','325,000','425,000','525,000','575,000','625,000','650,000'],
	'7' 	: ['0','50,000','100,000','150,000','200,000','250,000','300,000','325,000','425,000','525,000','575,000','600,000','650,000'],
	'8' 	: ['0','50,000','100,000','150,000','200,000','250,000','250,000','300,000','400,000','475,000','575,000','600,000'],
	'9' 	: ['0','50,000','100,000','150,000','200,000','200,000','300,000','400,000','450,000','550,000','550,000'],
	'10' 	: ['0','50,000','100,000','150,000','200,000','300,000','400,000','425,000','500,000','550,000'],
	'11' 	: ['0','50,000','100,000','150,000','250,000','350,000','400,000','500,000','500,000'],
	'12' 	: ['0','50,000','100,000','200,000','300,000','375,000','400,000','450,000'],
	'13' 	: ['0','50,000','150,000','250,000','325,000','350,000','375,000'],
	'14' 	: ['0','100,000','200,000','250,000','300,000','350,000'],
	'15' 	: ['0','100,000','200,000','250,000','300,000'],
	'16' 	: ['0','100,000','200,000','250,000'],
	'17' 	: ['0','100,000','175,000'],
	'18' 	: ['0','100,000'],
	'19' 	: ['0','0'],
};

// FF
var ff_package 	= [
	'Bronze 1','Silver 1','Silver 2','Silver 3',
	'Gold 1','Gold 2','Gold 3','Gold 4',
	'Platinum 1','Platinum 2','Platinum 3','Platinum 4',
	'Diamond 1','Diamond 2','Diamond 3','Diamond 4','Master / Heroic'
];
var ff_harga 		= {
	'0'		: ['0','100,000','150,000','175,000','200,000','250,000','300,000','350,000','400,000','450,000','500,000','550,000','650,000','725,000','800,000','875,000','950,000'],
	'1'		: ['0','50,000','75,000','100,000','150,000','200,000','250,000','300,000','350,000','400,000','450,000','550,000','625,000','700,000','775,000','825,000'],
	'2'		: ['0','75,000','100,000','150,000','200,000','250,000','300,000','350,000','400,000','450,000','550,000','625,000','700,000','775,000','825,000'],
	'3'		: ['0','100,000','150,000','200,000','250,000','300,000','350,000','400,000','450,000','550,000','625,000','700,000','775,000','825,000'],
	'4'		: ['0','50,000','100,000','150,000','200,000','250,000','300,000','350,000','450,000','525,000','600,000','675,000','700,000'],
	'5'		: ['0','50,000','100,000','150,000','200,000','250,000','300,000','400,000','450,000','500,000','550,000','650,000'],
	'6'		: ['0','50,000','100,000','150,000','200,000','250,000','350,000','400,000','450,000','525,000','600,000'],
	'7'		: ['0','50,000','100,000','150,000','200,000','300,000','350,000','425,000','500,000','550,000'],
	'8'		: ['0','50,000','125,000','200,000','250,000','325,000','400,000','475,000','525,000'],
	'9'		: ['0','50,000','125,000','200,000','300,000','375,000','425,000','500,000'],
	'10'	: ['0','75,000','150,000','225,000','300,000','375,000','400,000'],
	'11'	: ['0','50,000','125,000','175,000','300,000','325,000'],
	'12'	: ['0','75,000','150,000','250,000','300,000'],
	'13'	: ['0','100,000','200,000','250,000'],
	'14'	: ['0','100,000','200,000'],
	'15'	: ['100,000','175,000'],
	'16'	: ['0','0'],
};

// fee
// value berupa moninal IDR
// untuk nominal dalam bentuk persen dengan format %-nilai_diskon
var fee_pembayaran = {
	'atm'  	: '0',
	'gopay' : '5,000',
	'ovo'	: '5,000',
	'pulsa' : '%-20',
};

// minimal dapat diskon dan urutkan diskon dari terbesar ke terkecil
// dan value key_diskon_reseller jika bilangan ribuan tidak boleh ada pemisah seperti koma
var key_diskon_reseller = [5000000,751000,301000,100000];
var diskon_reseller = {
	'5000000' 	: '%-20',
	'751000' 	: '%-15',
	'301000' 	: '%-10',
	'100000' 	: '%-5',
}