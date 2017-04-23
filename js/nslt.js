	    function checkna(){
			na=form1.yourname.value;
		  	if( na.length <3 )
	  		{
	  			divname.innerHTML='<font class="tips_false"> At least 3 characters long </font>';

	  		}else{
	  		    divname.innerHTML='<font class="tips_true"> Correct ! </font>';

	  		}

	  }

	     //SURNAME

		 function checkSUR(){
			SUR=form1.yourSURname.value;
		  	if( SUR.length <5 )
	  		{
	  			divSURname.innerHTML='<font class="tips_false"> At least 5 characters long </font>';

	  		}else{
	  		    divSURname.innerHTML='<font class="tips_true"> Correct ! </font>';

	  		}

	  }
		//checkmail

		function checkmail(){
					apos=form1.youremail.value.indexOf("@");
					dotpos=form1.youremail.value.lastIndexOf(".");
					if (apos<1||dotpos-apos<2)
					  {
					  	divmail.innerHTML='<font class="tips_false">A valid email address is required.</font>' ;
					  }
					else {
						divmail.innerHTML='<font class="tips_true">Correct Email</font>' ;
					}
		}
		// agreement

		function agree(){
       if(document.getElementById('cb').checked)
              document.getElementById('tj').disabled=false;
    else
        document.getElementById('tj').disabled='disabled';
  }


	//fly

	window.onload = function(){
		var ofly1 = new fly('fly1');
		var ofly2 = new fly('fly2');
		var ofly3 = new fly('fly3');
	}

	var fly = function(sID){
		this.oWrapper = document.getElementById("flywrapper");

		this.ofly = {
			obj: document.getElementById(sID),
			x: Math.random() * this.oWrapper.clientWidth,
			y: Math.random() * 100,
			strength: {
				x: 0.02 + Math.random()/10,
				y: 0.5 + Math.random()/2
			},
			amplifier: Math.random()*20,
			angle: 0
		}

		this.setTimer();
	};

	fly.prototype.setTimer = function(){
		this.move();

		var oSelf = this;
		setTimeout(function(){ oSelf.setTimer() }, 20);
	};

	fly.prototype.move = function(){
		var ofly = this.ofly;

		ofly.y += ofly.strength.y;

		if(ofly.y  + 125 > this.oWrapper.clientHeight ){
			ofly.y = 0;
			ofly.obj.style.top = 0;
		}

		ofly.angle += ofly.strength.x;
		ofly.obj.style.top = ofly.y + "px";
		ofly.obj.style.left = ofly.x + ofly.amplifier * Math.sin(ofly.angle)+"px";
	};

	function fixPng() {
	  var arVersion = navigator.appVersion.split("MSIE")
	  var version = parseFloat(arVersion[1])

	  if ((version >= 5.5 && version < 7.0) && (document.body.filters)) {
	    for(var i=0; i<document.images.length; i++) {
	      var img = document.images[i];
	      var imgName = img.src.toUpperCase();
	      if (imgName.indexOf(".PNG") > 0) {
	        var width = img.width;
	        var height = img.height;
	        var sizingMethod = (img.className.toLowerCase().indexOf("scale") >= 0)? "scale" : "image";
	        img.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + img.src.replace('%23', '%2523').replace("'", "%27") + "', sizingMethod='" + sizingMethod + "')";
	        img.src = "images/blank.gif";
	        img.width = width;
	        img.height = height;
	        }
	      }
	    }
	  }

	fixPng();
