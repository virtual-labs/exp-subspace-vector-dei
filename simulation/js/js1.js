const correctAnswers = {
	// R
	ssR1: false,
	ssR2: true,
	ssR3: false,

	// R2
	ssR2_1: false,
	ssR2_2: false,
	ssR2_3: true,
	ssR2_4: true,

	// R3 (example values)
	ssR3_1: false,
	ssR3_2: false,
	ssR3_3: true,
	ssR3_4: false,
	ssR3_5: false
};

window.onload = function () {
	ssR();
	ssR2();
	ssR3(); // This will trigger the function when the page loads
};

function ssR(){
	document.getElementById('ssR').innerHTML = `
		(i) <i>W</i> &equiv; {0} is a subspace of <i>R</i>.
		<div id="ssR1_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR1', true, this)">True</button> 
			<button onclick="checkAnswer('ssR1', false, this)">False</button>

		</div><br><br>
		<img src='./images/ssr11.png' alt='img here' style='width:15rem;'><br><br>

		(ii) <i>W</i> &equiv;<i>R</i>. is a subspace of <i>R</i>.
		<div id="ssR2_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR2', true, this)">True</button> 
			<button onclick="checkAnswer('ssR2', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr12.png' alt='img here' style='width:15rem;'><br><br>

		(iii) None Else <br><br>
		<div id="ssR3_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR3', true, this)">True</button> 
			<button onclick="checkAnswer('ssR3', false, this)">False</button>
		</div>
	`;

	document.getElementById('ssR1exp').innerHTML = "Explanation";
}



	function r1explanation(){
		document.getElementById('R1explain1').innerHTML=("<span style='fornt-family:'Times New Roman', Times, serif;'>(i) By definition.<br>(ii) By definition. <br>(iii) Let <i>W</i> be a subspace of <i>R</i>.<br><br><span style='font-weight:bold; color:blue; font-size:15px;'>Step-1. <i>W</i> &ne; {0} : </span><br><br> &emsp;  &exist; <i>a</i> &isin; <i>W</i> ; <i>a</i> &ne; 0 <br> <img src='./images/ssr1sim1.png' alt='img here' style='width:10rem;'></span>");
		document.getElementById('R1explain2').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-2.  <i>W</i> &ne; <i>R</i> : </span><br><br><span style='fornt-family:'Times New Roman', Times, serif;'> &emsp; &exist; <i>x</i>  &isin; <i>R</i> ; <i>x</i> &notin; <i>W</i> </span><br> <img src='./images/ssr1sim2.png' alt='img here' style='width:10rem;'>");
		document.getElementById('R1explain3').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-3. Contradiction : </span><br><br><span style='fornt-family:'Times New Roman', Times, serif;'>&emsp; <i>x</i> =  <i>x</i> . <span class='frac'><span>1</span><span class='symbol'>/</span><span class='bottom'><i>a</i></span></span> . <i>a</i>  =  <span class='frac'><span><i>x</i></span><span class='symbol'>/</span><span class='bottom'><i>a</i></span></span> . <i>a</i>  &isin;  <i>W</i> </span>");
	} 

	function ssR2() {
	document.getElementById('ssR2').innerHTML = `
		(i) <i>W</i> &equiv; {0} is a subspace of <i>R</i><sup>2</sup>, where 0 &equiv; (0, 0) is the origin.<br><br>
		<div id="ssR2_1_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR2_1', true, this)">True</button>
			<button onclick="checkAnswer('ssR2_1', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr21.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(ii) <i>W</i> &equiv; line passing through origin is a subspace of <i>R</i><sup>2</sup>.<br><br>
		<div id="ssR2_2_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR2_2', true, this)">True</button>
			<button onclick="checkAnswer('ssR2_2', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr22.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(iii) <i>W</i> &equiv; <i>R</i><sup>2</sup> is a subspace of <i>R</i><sup>2</sup>.<br><br>
		<div id="ssR2_3_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR2_3', true, this)">True</button>
			<button onclick="checkAnswer('ssR2_3', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr23.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(iv) None Else <br><br>
		<div id="ssR2_4_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR2_4', true, this)">True</button>
			<button onclick="checkAnswer('ssR2_4', false, this)">False</button>
		</div>
	`;

	document.getElementById('ssR2exp').innerHTML = "Explanation";
}



	function r2explanation(){
		document.getElementById('R2explain1').innerHTML=("<span style='fornt-family:'Times New Roman', Times, serif;'>(i) By definition.<br>(ii) By definition. <br>(iii) By definition.<br>(iv). Let <i>W</i> be a subspace of <i>R</i><sup>2</sup>.</span><br><br><span style='font-weight:bold; color:blue; font-size:15px;'>Step-1. <i>W</i> &ne; {0} : </span><br><br><span style='font-family:'Times New Roman', Times, serif;'> &emsp; (<i>a , b</i>) &isin; <i>W</i> such that (<i>a , b</i>) &ne; 0 &equiv; (0 , 0) <br> <img src='./images/ssr2sim1.png' alt='img here' style='width:10rem; height:auto;'></span>");

		// document.getElementById('R2explain2').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-2. L &sube; W : </span><br><br> &emsp; L &equiv; line passing through 0 and (a , b) <br> <img src='./images/ssr2sim2.png' alt='img here' style='width:10rem; height:auto;'>");

		document.getElementById('R2explain2').innerHTML = `
  <span style="font-weight:bold; color:blue; font-size:15px;">
    Step-2. <i>W</i> &ne; any line passing through 0 :
  </span>
  <br>
  <br>
  <div style="margin-left:10px; text-indent:0;">
    &rArr; <i>W</i> &ne; <i>L</i>, where <i>L</i> is the line passing through 0 and (<i>a, b</i>)<br>
    &rArr; <i>L</i> &sube; <i>W</i> and &exist; (<i>c, d</i>) &isin; <i>W</i> such that (<i>c, d</i>) &notin; <i>L</i>
  </div>
  <br>
  <img src="./images/step2img.png" alt="img here" style="width:10rem; height:auto;">
`;

		// document.getElementById('R2explain3').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-3. W &ne; a line passing through origin : </span><br><br> &emsp; W &ne; L &exist; (c , d) &isin; W ; (c , d) &notin; L <br> &emsp; => (c , d) = &alpha; . (a , b) ; c &ne; &alpha; a & d &ne; &alpha; b");

		document.getElementById('R2explain3').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-3. <i>W</i> &ne; <i>R</i><sup>2</sup>: </span><br><br><span style='fornt-family:'Times New Roman', Times, serif;'> &emsp; &exist;(<i>r, s</i>) &isin; <i>R</i><sup>2</sup> such that (<i>r, s</i>) &notin; <i>W</i> <br> <img src='./images/step4img.png' alt='img here' style='width:10rem; height:auto;'></span>");

		// document.getElementById('R2explain4').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-4. Contradiction : </span><br><br> &emsp; (x , y) &isin; R<sup>2</sup> <br>&emsp; (x , y) = &alpha; (a , b) + &beta; (c ,d) <br><br> &emsp;");

		document.getElementById('R2explain4').innerHTML=("<span style='font-weight:bold; color:blue; font-size:15px;'>Step-4. Contradiction : </span><br><br><span style='fornt-family:'Times New Roman', Times, serif;'> &emsp; (<i>r, s</i>) = &alpha; . (<i>a, b</i>) + &beta; . (<i>c, d</i>); for some &alpha;, &beta; &isin; <i>R</i> <br> &rArr; (<i>r, s</i>) &isin; <i>W</i>, a contradiction. </span>");
	}

	function ssR3() {
	document.getElementById('ssR3').innerHTML = `
		(i) <i>W</i> &equiv; {0} is a subspace of <i>R</i><sup>3</sup>, where 0 &equiv; (0, 0, 0) is the origin. <br><br>
		<div id="ssR3_1_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR3_1', true, this)">True</button>
			<button onclick="checkAnswer('ssR3_1', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr31.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(ii) <i>W</i> &equiv; line passing through origin is a subspace of <i>R</i><sup>3</sup>.<br><br>
		<div id="ssR3_2_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR3_2', true, this)">True</button>
			<button onclick="checkAnswer('ssR3_2', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr32.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(iii) <i>W</i> &equiv; plane passing through origin is a subspace of <i>R</i><sup>3</sup>.<br><br>
		<div id="ssR3_3_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR3_3', true, this)">True</button>
			<button onclick="checkAnswer('ssR3_3', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr33.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(iv) <i>W</i> &equiv; <i>R</i><sup>3</sup> is a subspace of <i>R</i><sup>3</sup>.<br><br>
		<div id="ssR3_4_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR3_4', true, this)">True</button>
			<button onclick="checkAnswer('ssR3_4', false, this)">False</button>
		</div><br><br>
		<img src='./images/ssr34.png' alt='img here' style='width:10rem; height:auto;'><br><br>

		(v) None Else <br><br>
		<div id="ssR3_5_group" style="display:inline-block;">
			<button onclick="checkAnswer('ssR3_5', true, this)">True</button>
			<button onclick="checkAnswer('ssR3_5', false, this)">False</button>
		</div>
	`;

	document.getElementById('ssR3exp').innerHTML = "Explanation";
}


	function r3explanation(){
		document.getElementById('R3explain').innerHTML=("<span style='fornt-family:'Times New Roman', Times, serif;'>(i) By definition.<br>(ii) By definition. <br>(iii) By definition.<br>(iv) By definition. <br>(v) Do it Yourself!!</span>");
	}
function checkAnswer(optionId, userAnswer, btn) {
	const resultId = optionId + "_result";

	// Remove old result span if exists
	const existing = document.getElementById(resultId);
	if (existing) existing.remove();

	// Reset both buttons to default style
	const groupDiv = document.getElementById(optionId + "_group");
	const buttons = groupDiv.getElementsByTagName("button");
	for (let b of buttons) {
		b.style.backgroundColor = "";
		b.style.color = "";
	}

	// Set the clicked button to grey
	btn.style.backgroundColor = "grey";
	btn.style.color = "white";

	// Create result span
	const result = document.createElement("span");
	result.id = resultId;
	result.style.marginLeft = "1rem";
	result.style.fontWeight = "bold";

	if (correctAnswers[optionId] === userAnswer) {
		result.innerText = "✔️ Correct";
		result.style.color = "green";
	} else {
		result.innerText = "❌ Incorrect";
		result.style.color = "red";
	}

	groupDiv.appendChild(result);

	// ✅ Show explanation link if "None Else" option is clicked
	if (optionId === "ssR3_5") {
		document.getElementById("ssR3exp").style.display = "inline";
	}
	if (optionId === "ssR2_4") {
		document.getElementById("ssR2exp").style.display = "inline";
	}
	if (optionId === "ssR3") {
		document.getElementById("ssR1exp").style.display = "inline";
	}
}


