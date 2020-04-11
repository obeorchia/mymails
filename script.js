//version Jquery compteur message
var messageCount = $('p').length;
$('#count').text(messageCount);

//version Jquery suppression poubelle
$('.trash').click(
    function() {
        //console.log("clique bouton trash detecte");
        $(this).parent().remove();

        //mise à jour du compteur
        var messageCount = $('p').length-1;
        $('#count').text(messageCount);
    }
);

//version Jquery creation nouveaux messages
$('#btn-add').click(
    function() {
        //console.log("clique bouton Add detecte");
        
        //creation nouveau message
        var message = $("#add-message").val();
        $('body').append(`
                            <div class="row">
                                <img class="avatar" src="SpaceInvaders002.jpg">
                            <div>
                                <h6>Olivier Code</h6>
                                <p>` + message + `</p>
                            </div>
                            <img class="trash" src="trash.png"></div>`                              
        );

        //suppression au click sur la poubelle du nouveau message
        $('.trash').click(
            function() {
                //console.log("clique bouton trash detecte");
                $(this).parent().remove();
        
                //mise à jour du compteur
                var messageCount = $('p').length-1;
                $('#count').text(messageCount);
            }
        );

        //réinitialisez ce champ à chaque fois que la recherche est exécutée avec valeur null/vide
        $('#add-message').val("");

        //mise à jour du compteur
        var messageCount = $('p').length;
        $('#count').text(messageCount);
    }
);

//version JQuery capter le click champ message
$('#btn-search').click(
    function() {
        //verification detection du click sur bouton search
        //console.log("clique champ message detecte");

        //recuperation valeur du champ de recherche
        //console.log($('#search-message').val());

        //filtrer la recherche du champ de recherche dans les balises h6 uniquement
        $('h6').each(
            function() {
                //si le message est strictement égale au prénom et nom saisis
                 if ($('#search-message').val() != $(this).text()) {
                     $(this).parent().parent().fadeOut(); //masque tous les autres messages différents
                } else {
                    $(this).parent().parent().show(); //sinon montre les autres lors d'une autre recherche
                }

            }
        );

        //Réinitialisez ce champ à chaque fois que la recherche est exécutée avec valeur null/vide
        $('#search-message').val("");
    }
);
