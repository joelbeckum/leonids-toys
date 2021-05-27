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

for (const toy of toys) {
    console.log(`This ${toy.name} was manufactured in ${toy.yearProduced} by ${toy.manufacturer}.`);
}