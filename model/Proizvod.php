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
  

    }
    

   



?>