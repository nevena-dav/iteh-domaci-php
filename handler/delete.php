<?php
    include '../config.php';
    include '../model/Proizvod.php'; 

    if(isset($_POST['deleteid'])){
        $status=Proizvod::obrisi($_POST['deleteid'],$conn);
        if ($status){
            echo "Success";
        }else{
            echo "Failed";
        }
    }

?>