var imgElement = $('#imgCar');
var valueElement = $('#valueCar');
var nameElement = $('#nameCar');
var descriptElement = $('#descriptCar');
        
var nameCar = localStorage.getItem('name_car');
var valueCar = localStorage.getItem('value_car');
var linkImg = localStorage.getItem('img_car');
var descript = localStorage.getItem('descript_car');


nameElement.text(nameCar);
descriptElement.text(descript);
valueElement.text(valueCar);
imgElement.attr('src', `${linkImg}`);