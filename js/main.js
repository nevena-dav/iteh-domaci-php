
function dodaj(){ 

    var form = $('#addForm')[0];
    console.log(form);
    var formData = new FormData(form);
    event.preventDefault();  
    console.log(formData);

    request = $.ajax({  
        url: 'handler/add.php',  
        type: 'post', 
        processData: false,
        contentType: false,
        data: formData
    });
    console.log(request);
    request.done(function (response, textStatus, jqXHR) {
        console.log(textStatus);
        console.log(jqXHR);
      console.log(response);

        if (response === "Success") {
            alert("Uspesno dodato");
            
            location.reload(true);
        }
        else {
       
            console.log("Neuspesno" + response);
        }
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Greska: ' + textStatus, errorThrown);
    });
 

}


function prikazi(prikazid){
    
    
    $.post("handler/get.php",{prikazid:prikazid},function(data,status){
        console.log(data);
        var proizvod=JSON.parse(data);
        console.log(proizvod); 
        $('#nazivPreview').text(proizvod.naziv  );
        $('#opisPreview').text(proizvod.opis);
        $('#kolicinaPreview').text(proizvod.kolicina);

        $('#cenaPreview').text(proizvod.cena);
 
        document.getElementById("slikaPreview").src = 'images/'+proizvod.slika;


    }); 

 
    
}



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
