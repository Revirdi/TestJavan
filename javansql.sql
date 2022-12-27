CREATE DATABASE javandbtest1;

use javandbtest1;

create table anggota (
	anggota_id int auto_increment primary key,
    nama varchar(50) not null,
    jenis_kelamin enum('laki-laki','perempuan')
);

create table hubungan_keluarga (
	hub_keluarga_id int auto_increment primary key,
    anggota_id int,
    anggota_terkait_id int,
    foreign key (anggota_id) references anggota(anggota_id),
    foreign key (anggota_terkait_id) references anggota(anggota_id) 
);

create table daftar_aset (
	daftar_aset_id int auto_increment primary key,
    nama_aset varchar(100) UNIQUE,
    harga int
);

create table data_aset (
	data_aset_id int auto_increment primary key,
    anggota_id int,
    daftar_aset_id int
);

insert into anggota (nama, jenis_kelamin)
values
('Bani','laki-laki'),
('Budi','laki-laki'),
('Nida','perempuan'),
('Andi','laki-laki'),
('Sigit','laki-laki'),
('Hari','laki-laki'),
('Siti','perempuan'),
('Bila','perempuan'),
('Lesti','perempuan'),
('Diki','laki-laki'),
('Doni','laki-laki'),
('Toni','laki-laki');

insert into hubungan_keluarga (anggota_id, anggota_terkait_id)
values
(2,1), (3,1), (4,1), (5,1), (6,2), (7,2), (8,3), (9,3), (10,4), (11,5), (12,5);

insert into daftar_aset (nama_aset, harga)
values
("Samsung Universe 9", 1249),
("Samsung Galaxy Book", 1499),
("iPhone 9", 549),
("iPhone X", 899),
("Huawei P30", 499);

insert into data_aset (anggota_id, daftar_aset_id)
values
(2,1), (2,2), (6,3), (7,4), (8,1), (9,5), (9,4), (4,1), (10,2), (5,5), (11,4);

select a.nama,  ifnull(da.nama_aset,"tidak punya aset") as nama_aset 
from anggota a 
left join data_aset d using (anggota_id) 
left join daftar_aset da using(daftar_aset_id)
order by a.nama;

select 
anggota.nama as nama, 
ifnull(sum(daftar_aset.harga), 0) as total_aset 
from anggota 
left join data_aset using(anggota_id) 
left join daftar_aset using(daftar_aset_id) 
group by anggota_id;
