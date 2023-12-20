<?php require_once('koneksi.php');


$query = "SELECT * FROM tb_user"; 
$rs_query = mysqli_query($koneksi, $query) or die(mysqli_error($koneksi));


$response['kode'] = 1;
$response['data'] = array();
foreach($rs_query as $data){
	$Data['username'] = $data['username'];
	$Data['nama'] = $data['nama'];
	array_push($response['data'], $Data);
}
echo json_enconde($response);
