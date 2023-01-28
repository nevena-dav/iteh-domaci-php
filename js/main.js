
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

function pretragaPoImenu() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("pretraga");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    console.log(table);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sortiraj() {
 
    var table, rows, switching, i, j, z, k, x, y, shouldSwitch;
    table = document.getElementById("table");

 
    
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            for (j = i + 1; j < rows.length; j++) {
                x = rows[i].getElementsByTagName("TD")[1];
                y = rows[j].getElementsByTagName("TD")[1];
                z = parseInt(x.innerHTML);
                k = parseInt(y.innerHTML);
                if (z > k) {
                    rows[i].parentNode.insertBefore(rows[j], rows[i]);
                }
            }
        }

    
 

}


