var model = [
  {
    name: 'Raptor',
    image: 'img/img-raptor.jpeg',
    price: 65000,
    sold: false
  },
  {
    name: 'Tahoe',
    image: 'img/img-tahoe.jpeg',
    price: 32500,
    sold: false
  },
  {
    name: 'Mustang',
    image: 'img/img-mustang.jpeg',
    price: 48300,
    sold: false
  },
  {
    name: '550i',
    image: 'img/img-550i.jpeg',
    price: 92600,
    sold: false
  },
  {
    name: 'Aventador',
    image: 'img/img-aventador.jpeg',
    price: 325000,
    sold: false
  },
  {
    name: 'Z4',
    image: 'img/img-z4.jpeg',
    price: 23200,
    sold: false
  },
  {
    name: 'i8',
    image: 'img/img-i8.jpeg',
    price: 132000,
    sold: true
  },
  {
    name: 'Grand Cherokee',
    image: 'img/img-grand-cherokee.jpeg',
    price: 42000,
    sold: true
  },
  {
    name: 'Model S',
    image: 'img/img-model-s.jpeg',
    price: 70000,
    sold: true
  },
  {
    name: 'Phantom',
    image: 'img/img-phantom.jpeg',
    price: 230000,
    sold: false
  },
]

var mySearch = document.getElementById('search');
var myVehicleName = document.getElementById('vehicleName');
var myPrice = document.getElementById('price');
var myImage = document.getElementById('image');

function getInfo() {
  for (var i = 0; i < model.length; i++) {
    if ((mySearch.value == model[i].name) && (model[i].sold == false)) { console.log('num1');
      // myVehicleName.innerText = model[i].name;
      // myPrice.innerText = model[i].price;
      // myImage = model[i].image;
    }

    else if ((mySearch.value == model[i].name) && (model[i].sold)) { console.log('num2');
      // myVehicleName.innerText = model[i].name;
      // myPrice.innerText = 'Vehicle Sold';
      // myPrice.style.color = 'red'
      // myImage.src = model[i].image;
    }
  }
};
//   return;
//
//   alert("Vehicle is not in inventory.");
// };
