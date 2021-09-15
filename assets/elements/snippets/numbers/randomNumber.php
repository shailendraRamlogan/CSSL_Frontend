<?php
/*
 * Purpose Return a random number based on a min (def 0) and max (def 1000) input parameters
 *
 * Example
    [[!randomNumber?
        &min=`0`
        &max=`10000`
    ]]

Note if snippet is calle multiple times you would get the same result as per this article
https://github.com/modxcms/revolution/issues/11338

the issue is A MODX-tag with the same footprint should return the same result at each place within the same request. so to get unique ouput you would change the
snippet input parameters slightly like below;

[[!randomNumber?
    &min=`0`
    &max=`10000`
]]

[[!randomNumber?
    &min=`0`
    &max=`10001`
]]

[[!randomNumber?
    &min=`0`
    &max=`10002`
]]

 * */

$output =  null;
$min = $modx->getOption("min", $scriptProperties, 0);
$max = $modx->getOption("max", $scriptProperties, 1000);

if(is_numeric($min) && is_numeric($max)){
    $output = rand($min, $max);
}

return $output;