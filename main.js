$(document).ready(function(){

    const arrayNames = [];
    const name = $("form input");
    var i = 0;
    const msgError = $("#msgError");
    

    $("header button").click(function(){
        $("form").slideDown();
        if(arrayNames.length > 0){
            $("section").slideDown();
        }
    })

    $("#cancel-button").click(function(){
        $("form").slideUp();
        $("section").slideUp();
        msgError.css("display", "none");
        $("form input").val("");
    })

    $("body").on("submit", function(e){
        e.preventDefault();

    })

    $("form input").on("input", function(){
        
        if(name.val().trim() == ""){
            msgError.slideUp();
        }

        else if(arrayNames.includes(name.val())){
            msgError.slideDown();
            msgError.html(`Task "${name.val()}" already exists in list.`);
            msgError.removeClass("available").addClass("nonAvailable");
        }
        else if(!arrayNames.includes(name.val())){
            msgError.slideDown();
            msgError.html(`Available`);
            msgError.removeClass("nonAvailable").addClass("available");
        }
    })

    $("#adding-button").click(function(){
        $("section").slideDown();

        if(arrayNames.includes(name.val())){
            msgError.slideDown();
            msgError.html(`Task "${name.val()}" already exists in list.`);
            msgError.removeClass("available").addClass("nonAvailable");
        }

        else if(name.val().trim() == ""){
            msgError.slideDown();
            msgError.html(`Task field can't be empty.`);
            msgError.removeClass("available").addClass("nonAvailable");
            
        }

        else{
            $("section ul").slideDown();
            $("section ul li").slideDown();
            arrayNames.push(name.val());
            
            $("section ul").append(`
                
                
                <li id="line${i}">
                <p>Task ${i+1}:</p>
                <button type = "submit">
                ${name.val()}
                </button>
                </li>
                
                `);
                $("form input").val("");
                msgError.css("display", "none");
                i++;
        }

})

$("#lista-itens").on("click", "button", function(){
    
    const parentButton = $(this).parent();
    parentButton.toggleClass("marked");

})

})