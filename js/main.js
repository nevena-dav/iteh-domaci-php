
function obrisi(deleteid){


    request = $.ajax({  
        url: 'handler/delete.php',  
        type: 'post', 
        data: {deleteid:deleteid},


        success: function(data, status){
            location.reload(true);
            alert("Uspesno obrisano!");
        }


    });



}
