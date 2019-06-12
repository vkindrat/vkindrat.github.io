

	var x = 1;
	



	var header = document.getElementsByClassName("cabecalho");
	var background = document.getElementsByClassName("background");
	var troca = document.getElementsByClassName("logo");

	troca[0].onclick = function(){
    background[0].style.filter = "hue-rotate(-20deg)";
    header[0].style.filter = "hue-rotate(-120deg)";


    while(x<3){
		
		background[0].style.filter = "hue-rotate(40deg)";
		header[0].style.filter = "hue-rotate(150deg)";
		 
		x++;
		if(x == 3){
			
		}
	}


   

		
		
	};


	
