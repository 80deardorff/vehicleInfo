var model = [
  {
    name: 'Raptor',
    price: 65000,
    sold: false
  },
  {
    name: 'Tahoe',
    price: 32500,
    sold: false
  },
  {
    name: 'Mustang',
    price: 48300,
    sold: false
  },
  {
    name: '550i',
    price: 92600,
    sold: false
  },
  {
    name: 'Aventador',
    price: 325000,
    sold: false
  },
  {
    name: 'Z4',
    price: 23200,
    sold: false
  },
  {
    name: 'i8',
    price: 132000,
    sold: true
  },
  {
    name: 'Grand Cherokee',
    price: 42000,
    sold: true
  },
  {
    name: 'Model S',
    price: 70000,
    sold: true
  },
  {
    name: 'Phantom',
    price: 230000,
    sold: false
  },
]

var search= document.getElementById("search")

function getInfo() {
  for (var i = 0; i < model.length; i++) {
    if (search.value == model[i].name) {
      console.log(model[i].name);
      return;
    };
  };
  console.log("Vehicle is not in inventory.");
};
