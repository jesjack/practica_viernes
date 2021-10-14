# practica_viernes
Proyecto para la practica del viernes de 1YA del ITD.
Se irán agregando secuencialmente los códigos necesarios para la práctica.

De momento el ejemplo que se tiene es:
```javascript
const practica_viernes = require('practica_viernes')
practica_viernes.setMathFunction('f(x) = { x² - 4 si x < 3 ; 2x - 1 si 3 <= x }')

for(let x = -5; x <= 5; x++) {
  if(x < 3) practica_viernes.addRow([ x, x ** 2 - 4 ])
  if(3 >= x) practica_viernes.addRow([ x, 2 * x - 1 ])
}

practica_viernes.render()
```