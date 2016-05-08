
var url="https://www.prontopro.it";

/* -------------------------------
FIRST REQUEST ALL FORMS ON SUCCESS
-------------------------------*/
var formsRequest = function(){
  $.ajax({
    //  url : "https://www.prontopro.it/work-with-us/dev/fe/test/autocomplete",
    type: 'GET',
    url : url+"/work-with-us/dev/fe/test/autocomplete",
    dataType : 'json',
    success : function (data) {
      _popoulateAucompleteInput(data);
    },

    error : function (request,status,errors) {
      $('#messages').modal('show');
      $('#messages').on('shown.bs.modal', function () {
        setTimeout(function(){
          $('#messages').find('.modal-body').html('<p>'+'error'+'</br>'+JSON.stringify(request)+'</p>');
        }, 10);
      });
    }
  });
};
/* --------------------------------------
PUSH EMPTY  ARRAY WITH DATA FOR AUTOMPLETE
------------------------------------------ */
function _popoulateAucompleteInput(data){
  var inputfields=[];
  for(var i=0; i < data.length ;i++){
    inputfields.push(data[i]);
  }
  if(inputfields.length !== 0){
    $('#search').typeahead({
      source: inputfields ,
      display: 'label',
      val: 'url',
      itemSelected: _getSeletedForm
    });
  }
  //console.log(JSON.stringify(inputfields)+"populated input-------"+"N:"+inputfields.length);
}
/* ------------------------------------
SEND REQUEST FOR SELECTED FORM
-------------------------------------*/
function _getSeletedForm(item,val,text){
  var stringtoappend=val;
  var formtocreate=[];
  $.ajax({
    type: 'GET',
    url : url+stringtoappend,
    dataType : 'json',
    success : function (data,status) {
      for(var i= 0; i < data.length;i++){
        formtocreate.push(data);
      }
      if(formtocreate.length !== 0){
        for (var b in formtocreate) {
          _createDynamicForm(formtocreate[b]);
        }
      }
      //  console.log(JSON.stringify(formtocreate)+"inputs-------"+"N:"+formtocreate.length);
    },
    error : function (request,status,errors) {
      $('#messages').modal('show');
      $('#messages').on('shown.bs.modal', function () {
        setTimeout(function(){
          $('#messages').find('.modal-body').html('<p>'+'error'+'</br>'+JSON.stringify(request)+'</p>');
        }, 10);
      });
    }
  });
}
/* ------------------------------------
createDynamicForm From Selected OBJECT
-------------------------------------*/
function _createDynamicForm(obj){
  //var dynamicform;
  var formarray=obj;
  var rules=[];
  $('#dynform ').html('');

  $('#search').on('change',function(){
    $('#dynform').html('');
  });
  for (var i = 0; i < formarray.length; i++) {
       rules.push(formarray[i].rules);
  }
  //  console.log(JSON.stringify(rules));
  $.each(formarray, function (index, value) {
    //  $('#form').append('<input type="email" class="form-control" id="inputEmail3" placeholder="Email">');
    $('#dynform').append(
      '<div class="form-group row">'+
      '<div class="col-sm-10">'+
      '<label  for="'+value.label+'" class="col-sm-2 form-control-label">'+value.label+'</label>'+
      '<input id="'+value.label+' class="form-control"'+'type="'+value.type+'"'+'placeholder="'+value.name+'"'+
      '/>'+
      '</div>'+
      '</div>'
    );
  });

  $('#dynform').append('<div class="form-group row">'+
  ' <div class="col-sm-offset-2 col-sm-10">'+
  '<button type="submit" class="btn btn-success">submit</button>'+
  '</div>'+
  '</div>');

  //console.log(JSON.stringify(formarray+"form-------"+"N:"+formarray.length));
  $('#dynform').on('submit', function(event){
    validateform();
  });
  function validateform(rules){
        event.preventDefault();
    //$('#dynform').append('<div class="form-group row">'+'not valid'+'</div>');

  }
}
