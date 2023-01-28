<?php
    class Kategorija{
        private $kategorija_id;
        private $naziv; 

        public function __construct($kategorija_id=null, $naziv=null){
            $this->naziv=$naziv;
            $this->kategorija_id=$kategorija_id; 
        }
        public static function vratiSveKategorije($conn){
            $upit = "select * from kategorija";
            return $conn->query($upit);
        }

    }
    

   



?>