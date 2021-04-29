
const obtScore = require('../src/ordenar');


test('validando la prueba unitaria de la funcion obtScore', () => {//
  const students = [
    {
      name: "Yossi",
      score: 91
   },
   {
      name: "Avi",
      score: 63
    },
    {
      name: "Ariel",
     score: 98
    }
  ];
   
  expect(obtScore(students)).toEqual("Ariel");
});