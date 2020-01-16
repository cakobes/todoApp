$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})

// click on x to delete Todo

$("ul").on("click","span",function(event){
    event.stopPropagation();
$(this).parent().fadeOut(500,function(){
   $(this).remove();
});
});

$("input[type=text]").keypress(function(event){
   if(event.which===13){
      let newTodo= $(this).val();
    //   create new li
    $("ul").append(`<li><span><i class="fas fa-trash"></i></span> ${newTodo}</li>`);
    $(this).val("");
   }
})

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;

   
    $(".date").append(output);

    $(".fa-plus").on("click", function(){
       $("input[type=text]").fadeToggle();
    })