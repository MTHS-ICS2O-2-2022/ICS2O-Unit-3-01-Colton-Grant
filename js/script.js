// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: colton
// Created on: march2023
// This file contains the JS functions for index.html
'use strict'
/**
* This function calculates area and perimeter of rectangle.
*/
function doMATH() {
 // input
 const baseA = parseInt(document.getElementById('A-base').value)
 const baseB= parseInt(document.getElementById('B-base').value)
 const height= parseInt(document.getElementById('Height').value)


 // process
 const area = (baseA + baseB) / 2 * Height


 // output
 document.getElementById('area').innerHTML =
   'Area is: ' + (baseA + baseB)/2 * height + ' cm²'
}
