<?php
/*
 * Purpose Return current Year
 *
 * Example
 * [[!currentYear]]
 * */

$currentdate =  strtotime("now");
return date('Y', $currentdate);