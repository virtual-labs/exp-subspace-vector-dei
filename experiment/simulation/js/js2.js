function showmatrix() {
	    let a = document.querySelector("#a_val").value;
	    let b = document.querySelector("#b_val").value;
	    let c = document.querySelector("#c_val").value;
	    let d = document.querySelector("#d_val").value;
	    let al = document.querySelector("#al_val").value;

	    document.getElementById("displayA").innerHTML = ("A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + a + "</mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi>" + b + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td>");

	    document.getElementById("displayB").innerHTML = ("B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + c + "</mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi>" + d + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td>");

	    document.getElementById("displayApB").innerHTML = ("A + B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + Number(Number(a)+Number(c)) + "</mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi>" + Number(Number(b)+Number(d)) + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td>  &isin; W");

	    document.getElementById("displayalA").innerHTML = ("&alpha; . A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + Number(Number(al)*Number(a)) + "</mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi>" + Number(Number(al)*Number(b)) + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td>  &isin; W");

	    document.getElementById("result").innerHTML = ("<span style='font-weight:bold';>Conclusion :</span> This does not justify that W is a subspace of V.");

	  }
	  function showABal(){
	  	document.getElementById("showA").innerHTML = ("A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> a </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> b </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> , ");

	  	document.getElementById("showB").innerHTML = ("B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> c </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> d </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> , ");

	  	document.getElementById("showal").innerHTML = ("&alpha; &isin; R");
	  }


	  function showjst(){
	  	document.getElementById("showApB").innerHTML = ("1. A+B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> a+c </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> b+d </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &isin; W");

	  	document.getElementById("showalA").innerHTML = ("2. &alpha; . A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> &alpha;.a </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> &alpha;.b </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &isin; W");

	  	document.getElementById("showz").innerHTML = ("3. <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> 0 </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> 0 </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &isin; W [Obvious]");
	  
	  }

	  function showres(){
	  	document.getElementById("showres").innerHTML = ("Hence, W is a subspace of V.");
	  }


	  function showmatrix2() {
	    let a2 = document.querySelector("#a2_val").value;
	    let b2 = document.querySelector("#b2_val").value;
	    let c2 = document.querySelector("#c2_val").value;
	    let d2 = document.querySelector("#d2_val").value;
	    let e = document.querySelector("#e_val").value;
	    let f = document.querySelector("#f_val").value;
	    let g = document.querySelector("#g_val").value;
	    let h = document.querySelector("#h_val").value;
	    let al2 = document.querySelector("#al2_val").value;

	    document.getElementById("displayA2").innerHTML = ("A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + a2 + "</mi></mtd><mtd><mi>" + b2 + "</mi></mtd></mtr><mtr><mtd><mi>" + c2 + "</mi></mtd><mtd><mi>" + d2 + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &isin; W");

	    document.getElementById("displayB2").innerHTML = ("B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>e</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mi>g</mi></mtd><mtd><mi>h</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + e + "</mi></mtd><mtd><mi>" + f + "</mi></mtd></mtr><mtr><mtd><mi>" + g + "</mi></mtd><mtd><mi>" + h + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &isin; W");

	    document.getElementById("displayApB2").innerHTML = ("A + B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + Number(Number(a2)+Number(e)) + "</mi></mtd><mtd><mi>" + Number(Number(b2)+Number(f)) + "</mi></mtd></mtr><mtr><mtd><mi>" + Number(Number(c2)+Number(g)) + "</mi></mtd><mtd><mi>" + Number(Number(d2)+Number(h)) + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td>  &isin; W");

	    document.getElementById("displayalA2").innerHTML = ("&alpha; . A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi>" + Number(Number(al2)*Number(a2)) + "</mi></mtd><mtd><mi>" + Number(Number(al2)*Number(b2)) + "</mi></mtd></mtr><mtr><mtd><mi>" + Number(Number(al2)*Number(c2)) + "</mi></mtd><mtd><mi>" + Number(Number(al2)*Number(d2)) + "</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td>  &isin; W");

	    document.getElementById("result2").innerHTML = ("<span style='font-weight:bold';>Conclusion :</span> This does not justify that W is a subspace of V.");

	  }

	  function showABal2(){
	  	document.getElementById("showA2").innerHTML = ("A = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> 3 </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> 0 </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> , ");

	  	document.getElementById("showB2").innerHTML = ("B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> 1 </mi></mtd><mtd><mi>1</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> 0 </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> , ");

	  	document.getElementById("showal2").innerHTML = ("&alpha; &isin; R");
	  }

	  function showjst2(){
	  	document.getElementById("showApB2").innerHTML = ("1. A+B = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> 4 </mi></mtd><mtd><mi>1</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> 0 </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &isin; W");

	  	document.getElementById("showalA2").innerHTML = ("2. &alpha; . A = <div class='frac'><span>1</span><span class='symbol'>/</span><span class='bottom'>2</span></div> . <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> 3 </mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> 0 </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> = <td rowspan='2'><math><mrow><mo>(</mo><mtable><mtr><mtd><mi> 1.5</mi></mtd><mtd><mi>0</mi></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mi> 0 </mi></mtd></mtr></mtable><mo>)</mo></mrow></math></td> &notin; W");
	  
	  }
	  function showres2(){
	  	document.getElementById("showres2").innerHTML = ("Hence, W is not a subspace of V.");
	  }

	  function showform(){
	  	document.getElementById("showform").style.display = '';
	  }

	  function showform2(){
	  	document.getElementById("showform2").style.display = '';
	  }