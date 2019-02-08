var app = {
    $dbName : '',
    $DbModal: $('#addDbModal'),
    $tableModal : $('#addTableModal'),
    $addTableBtn : $('#addTableBtn'),
    init : function () {
        console.log('coucou depuis l\'espace');
        
        
         $('#Db-create').on('submit', app.addNameModal);
        app.$addTableBtn.on('click',app.addTableModal);
         /*$(window).on('load',function(){
        console.log('gribouillis on load '); 
        });*/

    },
    //function use to display formModal for the DB
    addNameModal : function(event) {
        
        event.preventDefault();
        app.$dbName = $('.input').val();
        app.updateDbName();
        app.$DbModal.removeClass('is-active');

    },
    //function use to update dbname
    updateDbName : function(){
        
        $('#dbtitle').text(app.$dbName);
    },
    addTableModal: function(){
        app.$tableModal.addClass('is-active');
    }
};

app.init();