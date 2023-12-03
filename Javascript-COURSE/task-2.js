"use strict";
// App To Convert From Pound To Dollar:

let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

dollar.onkeyup = function(){
    pound.value = dollar.value * 30;
}

pound.onkeyup = function(){
    dollar.value = pound.value / 30;
}