<?php
    include '../config.php';
    include '../model/Proizvod.php'; 

    
    if ( isset($_POST['naziv']) && isset($_POST['opis']) && isset($_POST['cena']) && isset($_POST['kolicina'])   ) {
        
        $filename = $_FILES["slika"]["name"];
        $tempname = $_FILES["slika"]["tmp_name"];    
        $folder = "../images/".$filename;

        

        move_uploaded_file($tempname, $folder);

      $proizvod = new Proizvod(null,$_POST['opis'],$_POST['cena'],$_POST['kategorije'],$_POST['naziv'],$filename,$_POST['kolicina']);
  
       
        $status=Proizvod::dodaj($proizvod,$conn);
        
        
            
            if($status){
                
                echo 'Success';
            }else{
                echo $status;
                echo 'Failed';
            }



      }else{
          echo "Greska";
      }
 




?>