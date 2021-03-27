var imgElement = $('#imgCar');
var valueElement = $('#valueCar');
var nameElement = $('#nameCar');
        
var nameCar = localStorage.getItem('name_car');
var valueCar = localStorage.getItem('value_car')
var linkImg = localStorage.getItem('img_car');


nameElement.text(nameCar)
valueElement.text(valueCar)
imgElement.attr('src', `${linkImg}`)