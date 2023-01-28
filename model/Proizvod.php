<?php
    class Proizvod{
        private $id;
        private $naziv; 
        private $opis; 
        private $cena; 
        private $kategorija_id; 
        private $slika; 
        private $kolicina; 


        public function __construct($id=null, $opis=null, $cena=null, $kategorija_id=null, $naziv=null, $slika=null,$kolicina=null){
            $this->naziv=$naziv;
            $this->id=$id;
            $this->opis=$opis;
            $this->cena=$cena;
            $this->slika=$slika;
            $this->kolicina=$kolicina;
            $this->kategorija_id=$kategorija_id; 
        }
        public static function dodaj($proizvod, $conn){
            $upit = "insert into proizvod(naziv,opis,cena,slika,kategorija,kolicina) values('$proizvod->naziv','$proizvod->opis',$proizvod->cena,'$proizvod->slika',$proizvod->kategorija_id,$proizvod->kolicina)";
            
            return $conn->query($upit);
        }
        public static function vratiSveProizvode($conn){
            $upit = "select * from proizvod p inner join kategorija k on k.idKategorije=p.kategorija";
            return $conn->query($upit);
        }        
        public static function vrati($id, $conn){
            $upit = " select * from proizvod p inner join kategorija k on p.kategorija = k.idKategorije where id=$id";
            return $conn->query($upit);
        }
        public static function obrisi($id, $conn){
            $upit = " delete from proizvod where id=$id";
            return $conn->query($upit);
        }


    }
    

   



?>