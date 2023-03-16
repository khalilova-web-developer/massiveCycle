let hotel = [
    [
      {
        room: 1,
        price: 300,
        brand: "Luxe",
        children: false,
      },
      {
        room: 2,
        price: 4000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 3,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 4,
        price: 900,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 5,
        price: 700,
        brand: "Luxe",
        children: true,
      },
      {
        room: 6,
        price: 79000,
        brand: "President",
        children: true,
      },
      {
        room: 7,
        price: 600,
        brand: "Luxe",
        children: false,
      },
      {
        room: 8,
        price: 950,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 9,
        price: 1900,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 10,
        price: 5000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 11,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 12,
        price: 250,
        brand: "Luxe",
        children: false,
      },
    ],
    [
      {
        room: 13,
        price: 10000,
        brand: "President",
        children: true,
      },
      {
        room: 11,
        price: 8000,
        brand: "President",
        children: false,
      },
    ],
  ];
  
  let accomodation = {
    all_rooms: [],
    rooms: 0,
  };
  let brands = {
    president: [],
    deluxe: [],
    luxe: [],
  };
  
  let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
  };
  
let roomsWithChilderen =[]
let allRoomsPrice= 0 
  //2 добавить ключ eting с буленовым значением в каждый номер
 

 
  

//1 отфильтровать по категориям
  for (let item of hotel) {


    for (let place of item) {

        let category = place.brand

         if (category === "Luxe") {
            brands.luxe.push(place)
        } else if (category === "Deluxe") {
            brands.deluxe.push(place)
        } else if (category === "President") {
            brands.president.push(place)
        }

    }}
console.log(brands)



  for(let room of hotel){
for(let home of room){
//7 найти все комнаты в которых живут дети
 if(home.children === true){
   roomsWithChilderen.push(home.room)
 }
 //6 посчитать сколько стоят все комнаты вместе взятые
allRoomsPrice+=home.price
 //3 посчитать и красиво раставить все команты переменную rooms
 accomodation.rooms++
 accomodation.all_rooms.push(home.room)



}}
console.log(roomsWithChilderen)
console.log(allRoomsPrice)
console.log(accomodation)



