//Código para extrair os dados da div
var sectionElement = $('#estoque');

function takeData(id) {
    
    var id = `car${id}`;
    let imgCar = $(`#${id} img`)[0].src;
    let nameCar = $(`#${id} p`)[0].textContent;
    let valueCar = $(`#${id} p`)[2].textContent;
    let descriptCar = $(`#${id} p`)[1].textContent;


    localStorage.setItem('img_car', imgCar);
    localStorage.setItem('name_car', nameCar);
    localStorage.setItem('value_car', valueCar);
    localStorage.setItem('descript_car', descriptCar);

    window.location.href = 'carpage.html'; 

}