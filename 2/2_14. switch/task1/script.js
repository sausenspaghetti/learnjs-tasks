// https://learn.javascript.ru/switch#napishite-if-analogichnyy-switch
'use strict';

let browser = 'Opera';

if (browser == 'Edge'){
    alert( "You've got the Edge!" );
}
else if (
        browser == 'Chrome' || 
        browser == 'Firefox' || 
        browser == 'Safari' || 
        browser == 'Opera'){
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
}