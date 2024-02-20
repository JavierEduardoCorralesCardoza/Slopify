
use Sloopify_DB;

select * from Cuenta;



create table Cuenta(
	cuenta_Correo varchar(20) primary key,
    cuenta_Nombre varchar(30),
    cuenta_Contraseña varchar(30)    
);


create table Artista(
	artista_Correo varchar(20) primary key,
    artista_Nombre varchar(30),
    artista_Contraseña varchar(30)
);

create table PlayList(
	playlist_ID int primary key,
    playlist_Nombre varchar(30)
);

ALTER TABLE PlayList
ADD cuenta_Correo varchar(20),
ADD FOREIGN KEY (cuenta_Correo) REFERENCES Cuenta(cuenta_Correo);

select * from PlayList;

drop table Cancion;
create table Cancion(
	cancion_ID int primary key,
    Año date,
    cancion_Nombre varchar(30),
    audioRuta varchar(30),
    album_ID int,
    foreign key(album_ID) references Album(album_ID)
);

drop table Album;
create table Album(
	album_ID int primary key,
    album_Nombre varchar(30),
    album_fecha date
);

drop table Cuenta_Artista;
create table Cuenta_Artista(
	cuenta_Correo varchar(20) primary key,
    artista_Correo varchar(20),
    foreign key (cuenta_Correo)
    references Cuenta(cuenta_Correo),
    foreign key (artista_Correo)
    references Artista(artista_Correo)
);


drop table Artista_Cancion;
create table Artista_Cancion(
	cancion_ID int primary key,
    foreign key (cancion_ID)
    references Cancion(cancion_ID),
    artista_Correo varchar(20),
    foreign key (artista_Correo)
    references Artista(artista_Correo)
);


drop table PlayList_Cancion;
create table PlayList_Cancion(
	playlist_ID int primary key,
    foreign key (playlist_ID)
    references PlayList(playlist_ID),
    cancion_ID int,
    foreign key (cancion_ID)
    references Cancion(cancion_ID)
);

drop table Artista_Album;
create table Artista_Album(
	artista_Correo varchar(20) primary key,
    foreign key (artista_Correo)
    references Artista(artista_Correo),
    album_ID int,
    foreign key (album_ID)
    references Album(album_ID)
);





