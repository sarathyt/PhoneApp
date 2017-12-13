var xmlhttp, myObj, x, txt = "",txt_1="",a="";
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        localStorage.setItem('contacts', JSON.stringify(myObj.contacts));
        var contact_detail = JSON.parse(localStorage.getItem('contacts'));
        //console.log(contact_detail)
        //console.log(myObj.contacts)
        myObj.contacts.sort(function(a, b) {
            var nameA = a.last_name;
            var nameB = b.last_name;
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        for (x in myObj.contacts) {
            console.log(x);
            txt +=  "<div class='demo'>"+myObj.contacts[x].first_name+" "+myObj.contacts[x].last_name +"</div>";
            document.getElementById("demo").innerHTML = txt;
        }
         
        console.log(txt)   
       
        var ele=document.getElementsByClassName("demo");
        for (var i=0;i< ele.length;i++) {
            
            (function(){
            var contact_id = myObj.contacts[i].id;
            //console.log(contact_id);
            ele[i].addEventListener("click",function(){sendId(contact_id,contact_detail[i]);},false)
            })();
        }

      
        
    }
};
xmlhttp.open("GET", "../json/contact_details.json", true);
//xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send();


function sendId(contact_id_rec){
   // alert("Contact Id"+ contact_id_rec);
    var contact_details = JSON.parse(localStorage.getItem('contacts'));
    console.log(contact_details);
    for(var i=0;i<contact_details.length;i++){
    if(contact_id_rec == contact_details[i].id )
    {
        var req_contact= contact_details[i];
        console.log(req_contact);
        txt_1 +="<img src="+req_contact.image+">"+  "<div class='demo'>"+req_contact.first_name+" "+req_contact.last_name +"</div>"+ "<div class='demo'>"+req_contact.number+"</div>"+ "<div class='demo'>"+req_contact.birthday +"</div>"+ "<div class='demo'>"+req_contact.address +"</div>";
        var newWin = window.open('../pages/contacts.html','windowName','height=500,width=500 position=center');
        newWin.document.open();
        newWin .document.write(txt_1);
        newWin.document.close();
        txt_1="";
       
    }
}
}

var newWin = "";
function addContacts(){
    newWin = window.open('../pages/contact_add.html','windowName','height=500,width=500,,left=150,top=200,toolbar=1,status=1');
   // newWin.document.close();
    // a=newWin.document.getElementById("fname");
    // console.log(a);
    // //GetValueFromChild(myVal);
    
    // newWin.onbeforeunload=closingCode()
}



function closingCode(){
    // do something...
    console.log("Unloaded");
    return null;
 }


$('#btnsave',newWin).bind('onclick',function(){
    console.log("Hiiiii");
});