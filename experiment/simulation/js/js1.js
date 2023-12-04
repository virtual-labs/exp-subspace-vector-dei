function ssR(){
		document.getElementById('ssR').innerHTML=("(i) W &equiv; {0}<br><img src='./images/ssr11.png' alt='img here' style='width:15rem;'><br>(ii) W &equiv; R<br> <img src='./images/ssr12.png' alt='img here' style='width:15rem;'><br>(iii) None Else");
		document.getElementById('ssR1exp').innerHTML=("Explanation");
	}

	function r1explanation(){
		document.getElementById('R1explain1').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-1. W &ne; {0} : </span><br><br> &emsp;  &exist; a &isin; W ; a &ne; 0 <br> <img src='./images/ssr1sim1.png' alt='img here' style='width:10rem;'>");
		document.getElementById('R1explain2').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-2.  W &ne; R : </span><br><br> &emsp; &exist; x  &isin; R ; x &notin; W <br> <img src='./images/ssr1sim2.png' alt='img here' style='width:10rem;'>");
		document.getElementById('R1explain3').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-3. Contradiction : </span><br><br>&emsp; x =  x . <span class='frac'><span>1</span><span class='symbol'>/</span><span class='bottom'>a</span></span> . a  =  <span class='frac'><span>x</span><span class='symbol'>/</span><span class='bottom'>a</span></span> . a  &isin;  W ");
	} 

	function ssR2(){
		document.getElementById('ssR2').innerHTML=("(i)  W &equiv; {0} <br> <img src='./images/ssr21.png' alt='img here' style='width:10rem; height:auto;'><br>(ii) W &equiv; line passing through origin <br><img src='./images/ssr22.png' alt='img here' style='width:10rem; height:auto;'><br>(iii) W &equiv; R<sup>2</sup> <br> <img src='./images/ssr23.png' alt='img here' style='width:10rem; height:auto;'><br>(iv) None Else");
		document.getElementById('ssR2exp').innerHTML=("Explanation");
	}

	function r2explanation(){
		document.getElementById('R2explain1').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-1. W &ne; {0} : </span><br><br> &emsp; (a , b) &isin; W ; (a , b) &ne; 0 &equiv; (0 , 0) <br> <img src='./images/ssr2sim1.png' alt='img here' style='width:10rem; height:auto;'>");
		document.getElementById('R2explain2').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-2. L &sube; W : </span><br><br> &emsp; L &equiv; line passing through 0 and (a , b) <br> <img src='./images/ssr2sim2.png' alt='img here' style='width:10rem; height:auto;'>");
		document.getElementById('R2explain3').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-3. W &ne; a line passing through origin : </span><br><br> &emsp; W &ne; L &exist; (c , d) &isin; W ; (c , d) &notin; L <br> &emsp; => (c , d) = &alpha; . (a , b) ; c &ne; &alpha; a & d &ne; &alpha; b");
		document.getElementById('R2explain4').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-4. Contradiction : </span><br><br> &emsp; (x , y) &isin; R<sup>2</sup> <br>&emsp; (x , y) = &alpha; (a , b) + &beta; (c ,d) <br><br> &emsp;");
	}

	function ssR3(){
		document.getElementById('ssR3').innerHTML=("(i)  W &equiv; {0} <br> <img src='./images/ssr31.png' alt='img here' style='width:10rem; height:auto;'><br>(ii) W &equiv; line passing through origin <br><img src='./images/ssr32.png' alt='img here' style='width:10rem; height:auto;'><br>(iii) W &equiv; plane passing through origin.<br> <img src='./images/ssr33.png' alt='img here' style='width:10rem; height:auto;'><br>(iv) W &equiv; R<sup>3</sup> <br> <img src='./images/ssr34.png' alt='img here' style='width:10rem; height:auto;'><br>(v) None Else");
		document.getElementById('ssR3exp').innerHTML=("Explanation");
	}

	function r3explanation(){
		document.getElementById('R3explain').innerHTML=("Do it Yourself!!");
	}
