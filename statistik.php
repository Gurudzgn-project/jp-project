IP :
<?php
//ip adres
$ip_address=$_SERVER['REMOTE_ADDR'];

echo "$ip_address";
?>
<br>
Browser & OS:
<?php
//browser dan os
$info=$_SERVER['HTTP_USER_AGENT'];

echo "$info";
?>
