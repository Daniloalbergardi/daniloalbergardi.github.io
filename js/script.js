
function generatelink() {
				
    var message = document.getElementById('C04').value;
    var phone = document.getElementById('C01').value;
    var phone = "+55" + phone;
    // Remover caracteres especiais, o segundo é para remover o espaço
    phone = phone.replace(/[^\w\s]/gi, '');
    phone = phone.replace(/\s/g, '');

    if (phone == "") {
        alert("Preencha o campo com o número do telefone!");
        return false;
    }
    else{
        var result = "whatsapp.com/send?phone="+ phone;
        if (message != ""){
            var message = encodeURIComponent(message);
            var result = result + "&text=" + message;
        }
        
        var linkmobile = "https://api." + result;
        var linkdesktop = "https://web." + result;

        document.getElementById("link-mobile").innerHTML = linkmobile;
        document.getElementById("link-desktop").innerHTML = linkdesktop;



    }
    
    // $('input[name="position-button"]:checked').each(function(position) {
    //     var position = this.value;
    //     return false;
    // });
    // // return
    // var position = position();
    teste = $('input[name="position-button"]:checked').each(function() {
        // var position = this.value;
        // return false;
        return this.value;
    });
    // console.log(teste);
    var position = $('input[name="position-button"]:checked')[0].value;

    
    generatebutton(linkmobile, linkdesktop, position);

    function generatebutton(linkmobile, linkdesktop, position){

        // Código começa com o Desktop o Mobile começa assim(%3Ca%20class%3D%22visible-mobile) e termina assim (fa-whatsapp%22%3E%3C%2Fi%3E%3C%2Fa%3E%20%22) depois vem o scriptjs começando com %3Cscript%3
        var generatehtml ="%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Ffont-awesome%2F4.5.0%2Fcss%2Ffont-awesome.min.css%22%3E%3Ca%20class%3D%22visible-desktop%22%20href%3D%22"+linkdesktop+"%22%20style%3D%22position%3Afixed%3Bwidth%3A60px%3Bheight%3A60px%3Bbottom%3A40px%3B"+position+"%3A40px%3Bbackground-color%3A%2325d366%3Bcolor%3A%23FFF%3Bborder-radius%3A50px%3Btext-align%3Acenter%3Bfont-size%3A30px%3Bbox-shadow%3A%201px%201px%202px%20%23888%3Bz-index%3A1000%3B%20%22%20target%3D%22_blank%22%3E%3Ci%20style%3D%22margin-top%3A16px%22%20class%3D%22fa%20fa-whatsapp%22%3E%3C%2Fi%3E%3C%2Fa%3E%3Ca%20class%3D%22visible-mobile%22%20href%3D%22"+linkmobile+"%22%20style%3D%22position%3Afixed%3Bwidth%3A60px%3Bheight%3A60px%3Bbottom%3A40px%3B"+position+"%3A40px%3Bbackground-color%3A%2325d366%3Bcolor%3A%23FFF%3Bborder-radius%3A50px%3Btext-align%3Acenter%3Bfont-size%3A30px%3Bbox-shadow%3A%201px%201px%202px%20%23888%3Bz-index%3A1000%3B%20%22%20target%3D%22_blank%22%3E%3Ci%20style%3D%22margin-top%3A16px%22%20class%3D%22fa%20fa-whatsapp%22%3E%3C%2Fi%3E%3C%2Fa%3E%20%22%3Cscript%3Efunction%20myFunction(e)%7Be.matches%3F(document.getElementsByClassName(%22visible-desktop%22)%5B0%5D.style.display%3D%22none%22%2Cdocument.getElementsByClassName(%22visible-mobile%22)%5B0%5D.style.display%3D%22inline%22)%3A(document.getElementsByClassName(%22visible-mobile%22)%5B0%5D.style.display%3D%22none%22%2Cdocument.getElementsByClassName(%22visible-desktop%22)%5B0%5D.style.display%3D%22inline%22)%7Dvar%20screenresolution%3Dwindow.matchMedia(%22(max-width%3A%20768px)%22)%3BmyFunction(screenresolution)%2Cscreenresolution.addListener(myFunction)%3B%3C%2Fscript%3E";

        generatehtml = decodeURIComponent(generatehtml);
        document.getElementById("code-button").innerHTML = generatehtml;      

    }


    function copyText(button, content) {
        // Get the text field
        var copyText = document.getElementById("myInput");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
      }
      
    
    function inserelink(button, link){
        button.addEventListener('click', function(event){
            
            window.location.href= link
            
        })     
        
    }
    
    if (phone == "") {
        return false;
    }
    else{
        const btn1 = document.getElementById("acesso-1")
        const btn2 = document.getElementById("acesso-2")
        btn1.innerHTML = '<a id="btnacesso-1" rel="external" href="" target="_blank"><button class="btn">Mobile</button></a>';
        btn2.innerHTML = '<a id="btnacesso-2" rel="external" href="" target="_blank"><button class="btn">Desktop</button></a>';
        inserelink(btn1, linkmobile)
        inserelink(btn2, linkdesktop)
        // document.getElementById("acesso-2").innerHTML = "<a id='btnacesso-1'class='btn' type='button' onclick='window.location.href='www.google.com.br''>Acessar desktop</a>";



    }
    
}


