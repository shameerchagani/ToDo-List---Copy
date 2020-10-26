$(function() {
   $("#add").submit(event => {
       event.preventDefault();

let form = $(event.target);
let item = form.children("input").val();
let li = $("<li> </li>");
li.append('<i class="fa fa-arrows" aria-hidden="true"></i>');
li.append('<input type="checkbox" />');
let span = $("<span></span>");
span.text(item);
let dtime = $('#dt').val();
li.append("<small id='small'>" + dtime + "</small>");
li.append(span);


let button = $('<i class="fa fa-trash-o" aria-hidden="true"></i>');
li.append(button);
button.click(event =>{
    //console.log("removingg");
     $(event.target).parent().remove();
    //console.log(todelet);
    
})
li.append(button);
$("#list").append(li);
form.children("input").val("");
form.children("#task").focus();


});
    
   $('#list').sortable();
});