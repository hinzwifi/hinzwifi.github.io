function signout() {
    
     if(!user.is){ return } 
     else {
        
    swal("Do you really wanna quit?", {
buttons: {
  cancel: true,
  
  Quit: true,
},
})
.then((value) => {
switch (value) {

  case "Quit":
    
    user.leave();
    console.log("bye");
 
    location.reload();


 

  
}
});
  }}


  