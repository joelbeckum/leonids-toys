const toys = [
    {
        id: 1,
        name: "Wooden Soldier",
        pieces: 3,
        manufacturer: "Sears",
        yearProduced: 1963
    },
    {
        id: 2,
        name: "Rocket Racer",
        pieces: 1,
        manufacturer: "Mattel",
        yearProduced: 1994
    },
    {
        id: 3,
        name: "Holly Hairstyles",
        pieces: 2,
        manufacturer: "Hasbro",
        yearProduced: 1987
    }
];

const rayGun = {
    id: 4,
    name: "Buck Godot's Trusty Zapgun",
    pieces: 1,
    manufacturer: "Gallimaufry, inc",
    yearProduced: 1982
};

const erectorSet = {
    id: 5,
    name: "Erector Set",
    pieces: 400,
    manufacturer: "Meccano",
    yearProduced: 2001
};

toys.push(rayGun);
toys.push(erectorSet);

// for (const toy of toys) {
//     console.log(toy.name)
// };


toys[0].price = 120.99;
toys[1].price = 45.55;
toys[2].price = 40.85;
toys[3].price = 250.99;
toys[4].price = 140.95;

for (let toy of toys) {
    toy.price = toy.price * 1.05;
}

// for (let toy of toys) {
//     console.log(`The new price of ${toy.name} is $${toy.price}.`);
// }

// const toyToFind = 2;
    
// for (const toy of toys) {
//     console.log(`This ${toy.name} was manufactured in ${toy.yearProduced} by ${toy.manufacturer}.`);
// }

// for (let toy of toys) {
//     if (toy.id === toyToFind) {
//         console.log(`This ${toy.name} was manufactured in ${toy.yearProduced} by ${toy.manufacturer}.`);
//     }
// }

const trainSet = {
    name: "Good Times Train Set",
    pieces: 15,
    manufacturer: "Good Times Toy Co",
    yearProduced: 1979,
    price: 250.45
}

const addToyToInv = (toyObject) => {
    const lastIndex = toys.length - 1;
    const currentLastToy = toys[lastIndex];
    const maxId = currentLastToy.id;
    const idForNewToy = maxId + 1;

    toyObject.id = idForNewToy;
    toys.push(toyObject);
}

addToyToInv(trainSet);
console.log(toys);