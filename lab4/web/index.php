<?php

echo "hello !!!";

$name = "John Doe";
$age = 25;

$arr = array("name");
$assoc_arr = ["name"=>"Drusawin", "age"=>25];

echo $arr[0];
echo $assoc_arr["age"];
echo $arr;
echo "<br>";
var_dump($assoc_arr);

echo "Hello $name";
echo 'Hello $name';

$object = (object)$assoc_arr;
echo $oject->naem;

function plus($a, $b)
{
    return $a+ $b;

}

$add_name = function($name){
    echo "Hello $name";
};

$car = (object)["color"=> "red","name" => $add_name];
echo $car->name("test");
// echo $car->name("test");

?>

<?php
    phpinfo()
?>
