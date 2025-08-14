const userValue = document.getElementById("payment");
const takeItem = document.getElementById("takeItem"); 
const errMsg = document.getElementById("errMsg");
   

    function oreoFun() {

    
    const availableOreo = document.getElementById("oreo");
    const images = availableOreo.getElementsByTagName("img");
 

    

        if ((userValue.value > 0) && (userValue.value % 10 == 0) ) {           

            const count = userValue.value/10;  
            
            if(count < 11){
                for (let j = 0; j < count; j++) {
                
                  errMsg.innerHTML = "";

                if (images.length > 0) {
                     images[0].remove();
                 }

                const oreoImg = document.createElement("img");
                oreoImg.src = 'images/oreo.webp';
                oreoImg.style.width = '70px';
                oreoImg.style.height = '70px';
                takeItem.appendChild(oreoImg);
                userValue.value = "";                       
            


            } 

            }else
            {
                errMsg.innerHTML = " sorry!..... available quantity is only 10"
            }
            

                 
        }else
        {
             errMsg.innerHTML = "Please enter correct amount.";
        }
        }
        
    

function jimjamFun() {

    
    const availablejimjam = document.getElementById("jimjam");
    const images = availablejimjam.getElementsByTagName("img");
    

    

        if ((userValue.value > 0) && (userValue.value % 20 == 0) ) {


            const count = userValue.value/20 ;    
            
            if(count < 11){

                  for (let j = 0; j < count; j++) {
                
                
                

                if (images.length > 0) {
                     images[0].remove();
                 }
                
                const jimjamImg = document.createElement("img");
                jimjamImg.src = 'images/jimjam.webp';
                jimjamImg.style.width = '70px';
                jimjamImg.style.height = '70px';
                takeItem.appendChild(jimjamImg);
                userValue.value = ""; 
                                     
            


            } 

            }
            else {
                takeItem.innerHTML = "Sorry..! Available quantity is only 10";
                // errMsg.innerHTML = " "
            }
            

               
        }else
        {
             errMsg.innerHTML = "Please enter correct amount.";
        }
     
    }
    


function monacoFun() {


   const availableMonaco = document.getElementById("monaco");
    const images = availableMonaco.getElementsByTagName("img");
    
    
    

        if ((userValue.value > 0) && (userValue.value % 40 == 0) ) {           

            const count = userValue.value/40;        

                 if(count < 11){

            for (let j = 0; j < count; j++) {
                
            
                if (images.length > 0) {
                     images[0].remove();
                 }

                const monacoImg = document.createElement("img");
                monacoImg.src = 'images/monaco.webp';
                monacoImg.style.width = '70px';
                monacoImg.style.height = '70px';
                takeItem.appendChild(monacoImg);
                
                userValue.value = "";  
                                     
            


            }      
            
        }
        else{
             takeItem.innerHTML = "Sorry..! Available quantity is only 10";
        }
    }
        else
        {
             errMsg.innerHTML = "Please enter correct amount.";
        }
}

function bornBonFun() {
    takeItem.innerHTML = "";

    const availableBornbon = document.getElementById("bornBon");
    const images = availableBornbon.getElementsByTagName("img");
 
    
    

        if ((userValue.value > 0) && (userValue.value % 50 == 0) ) {           

            const count = userValue.value/50;        
            
            if(count < 11){

            for (let j = 0; j < count; j++) {
                
                errMsg.innerHTML = "";

                if (images.length > 0) {
                     images[0].remove();
                 }

                const bornBonImg = document.createElement("img");
                bornBonImg.src = 'images/bornbon.png';
                bornBonImg.style.width = '70px';
                bornBonImg.style.height = '70px';
                takeItem.appendChild(bornBonImg);
                userValue.value = "";                       
            


            }     
        } else
            {
             takeItem.innerHTML = "Sorry..! Available quantity is only 10";
        } 

        }
        else
        {
             errMsg.innerHTML = "Please enter correct amount.";
        }

       }
   
