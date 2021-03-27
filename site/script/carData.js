//Código para extrair os dados da div
var sectionElement = $('#estoque');

function takeData(id) {
    
    var id = `car${id}`;
        
    let imgCar = $(`#${id} img`)[0].src;
    let nameCar = $(`#${id} p`)[0].textContent;
    let valueCar = $(`#${id} p`)[2].textContent;

    localStorage.setItem('img_car', imgCar);
    localStorage.setItem('name_car', nameCar);
    localStorage.setItem('value_car', valueCar);

    window.location.href = 'carpage.html'; 

}