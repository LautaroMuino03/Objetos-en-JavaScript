const obj = {
    Nombre: "Lautaro",
    Apellido: "Muiño",
    Edad: 20,
    Altura: 1.70,
    isDeveloper: false,
}

console.log(obj.Edad);

const array = ["Lautaro Muiño", 20, 1.70];

const obj1 = [                 
    {Nombre: "Lucas",
    Apellido: "Denis",
    Edad: 20,
    Altura: 1.78},

    {Nombre: "Tomas",
    Apellido: "Martin",
    Edad: 19,
    Altura: 1.80},
]

obj1.sort((a, b) => b.Edad - a.Edad );
console.log(obj1)