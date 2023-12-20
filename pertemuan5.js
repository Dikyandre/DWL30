function contohIfElse(){
	let nilai= prompt("Input Nilai Akhir:");
	let grade= "";

	if(nilai >= 80) grade ="A";
	else if (nilai >=70) grade += "B"
	else if (nilai >=60) grade += "C"
	else if (nilai >=50) grade += "D"
	else grade="E";
	// OUTPUT
	document.write("nilai Akhir Anda :"+grade);
}
function contohSwitchCase(){
	let bulan= prompt("Input Urutan:");
	let hasil= "";

	switch(bulan)
	{
		case"1":
		hasil="januari";
		break;
		case"2":
		hasil="februari";
		break;
		case"3":
		hasil="maret";
		break;
		case"4":
		hasil="april";
		break;
		default:
		hasil="urutan tidak ditemukan";
	}
	document.write("anda Memilih Bulan <b>"+hasil+"</b>");
}