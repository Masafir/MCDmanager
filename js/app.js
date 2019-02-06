var app = {
    $dbName : '',
    $formName:$('#addDbModal'),
    init : function () {
        console.log('coucou depuis l\'espace');
        
        
         $('#Db-create').on('submit', app.addNameModal);
        /*$(window).on('load',function(){
        console.log('gribouillis on load '); 
    });*/

    },
    addNameModal : function(event) {
        
        event.preventDefault();
        app.$dbName = $('.input').val();
        app.updateDbName();
        app.$formName.removeClass('is-active');



    },
    updateDbName : function(){
        
        $('#dbtitle').text(app.$dbName);
    }
};

app.init();