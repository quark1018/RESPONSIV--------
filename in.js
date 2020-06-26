$('.count').counterUp({

   delay:10,
   time:1000


});
      

  function topFunction(){

      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;


  }

  $('#button').click(function(){ 
    var pap=$('#pass1').val();
    
    var pop=$('#pass2').val();
    
    var pa=$('#pass3').val();
    
    var pox=$('#pass4').val();
    
    var xap=$('#pass5').val();
    
    if(pap !="" && pop !=""&&pa !="" && pox !=""&& xap !=""){
     alert('Succesfully Sign up wait')
       
    }
    else {
    
  alert('Please enter the form') 
   
    }

  })




