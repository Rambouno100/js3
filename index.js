// 1
const frutas = ["manzana", "pera", "uva", "mango", "sandía"];

console.log(frutas.length);                       
console.log(frutas[0], frutas.at(-1));             
console.log(frutas.includes("uva"));              
frutas.push("kiwi");                              
frutas.splice(frutas.indexOf("pera"), 1);         
console.log(frutas);


// 2
const nombres = ["  ANA", "luis  ", " MaRía ", "cArLos"];

const nombresLimpios = nombres.map(n => {
  const s = n.trim().toLowerCase();
  return s[0].toUpperCase() + s.slice(1);
});

console.log(nombresLimpios);  

// 3
const mensajes = [
  "Necesito pizza urgente",
  "La clave está en el bosque",
  "Javascript es divertido",
  "Hoy toca estudiar arrays"
];

const palabrasClave = ["pizza", "bosque", "divertido", "arrays"];

const secretas = mensajes.map((msg, i) =>
  msg.split(" ").find(p => p.toLowerCase() === palabrasClave[i])
);

console.log(secretas);  


// 4
const comentarios = [
  "Qué buen producto",
  "Esto es spam total",
  "Me encantó la atención",
  "Oferta falsa, suena spam",
  "Muy recomendado"
];

const sospechosos = comentarios.filter(c => c.includes("spam"));

console.log(sospechosos);        // ["Esto es spam total", "Oferta falsa, suena spam"]
console.log(sospechosos.length); // 2


// 5
const titulos = [
  "Curso de javascript basico",
  "aprende javascript desde cero",
  "javascript para principiantes"
];

const titulosCorregidos = titulos.map(t => t.replaceAll("javascript", "JavaScript"));

console.log(titulosCorregidos);


// 6
const puntajes = [85, 120, 99, 140, 70, 110];

const puntajesCopia = [...puntajes];
const top3 = puntajes.sort((a, b) => b - a).slice(0, 3);

console.log(top3);          
console.log(puntajesCopia); 


// 7
const mochila = ["linterna", "cuerda", "agua", "mapa"];

const [primero, segundo, ...resto] = mochila;

console.log("Primer objeto:", primero);  
console.log("Segundo objeto:", segundo); 
console.log("Resto:", resto);           


//8
const invitados = ["Lucía", "Pedro", "Marta", "Juan", "Elena"];

console.log(invitados.includes("Marta"));
invitados.unshift("Sofía");              
invitados.pop();                        
invitados.sort();

console.log(invitados); // ["Juan", "Lucía", "Marta", "Pedro", "Sofía"]


// 9
const frases = ["hola humano", "sistema activado", "modo prueba", "bateria cargada"];

const robot = frases.map(f => f.toUpperCase());
const unidas = robot.join(" | ");

console.log(robot);
console.log(unidas); 


// 10
const productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Audífonos"];

console.log(productos.includes("Mouse"));           
console.log(productos.indexOf("Monitor"));          
productos[productos.indexOf("Teclado")] = "Teclado mecánico";
productos.splice(productos.indexOf("Audífonos"), 1);

console.log(productos);


// 11
const correos = ["  ANA@GMAIL.COM ", "luis@hotmail.com  ", " MARIA@OUTLOOK.COM"];

const correosLimpios = correos.map(c => c.trim().toLowerCase());
const gmail = correosLimpios.filter(c => c.endsWith("gmail.com"));

console.log(correosLimpios); 
console.log(gmail);          


// 12
const peliculas = ["Avatar", "Titanic", "Interestelar", "Amélie", "Gladiador"];

const alfabetico = [...peliculas].sort();
const alReves    = [...alfabetico].reverse();
const conA       = peliculas.filter(p => p.toLowerCase().includes("a"));

console.log(alfabetico); 
console.log(alReves);
console.log(conA);


// 13
const menu = ["Pizza", "Hamburguesa", "Ensalada"];

menu.push("Pasta");    
menu.unshift("Sopa");  
menu.splice(1, 1);      

const [ultimo, ...anteriores] = [...menu].reverse();
const frase = `Hoy tenemos: ${anteriores.reverse().join(", ")} y ${ultimo}`;

console.log(menu);
console.log(frase);


// 14
const series = ["Dark", "Breaking Bad", "Stranger Things", "You", "Lost"];

const longitudes = series.map(s => s.length);
const minusculas = series.map(s => s.toLowerCase());
const mas4letras = series.filter(s => s.length > 4);

console.log(longitudes); 
console.log(minusculas);
console.log(mas4letras);


// 15
const caja = ["gema", "moneda", "llave", "poción", "mapa"];

const [gem, mon, ...restantes] = caja;

console.log(restantes.includes("llave")); // true

restantes[restantes.indexOf("poción")] = "poción mágica";

const cajaFinal = restantes.sort();
console.log(cajaFinal); 


// 16
const personajes = ["  harry", "HERMIONE ", " ron ", "draco", " luna lovegood "];

const magicos = personajes
  .map(n => {
    const s = n.trim().toLowerCase();
    return s[0].toUpperCase() + s.slice(1);
  })
  .sort()
  .filter(n => n.toLowerCase().includes("o"))
  .map(n => n === "Draco" ? "Draco Malfoy" : n);

console.log(magicos); 

