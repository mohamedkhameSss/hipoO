import { Area } from "./areaModule.js";
import { FirstPage } from "./category.js";
import { Contact } from "./contactModul.js";
import { strIngredient } from "./ingrModule.js";
import { navleft } from "./navModule.js";
import { searchc } from "./searchModule.js";





let firstPage=new FirstPage
let nav=new navleft
searchc()
let area =new Area
let ingr =new strIngredient
let con =new Contact

$(document).ready(function () {
    $('#loading').fadeOut(2000, function () {
        $('body').css('overflow','visible')
    })
})