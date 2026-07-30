// ============================================
// ADMIN LONAS TOBA - JavaScript
// Datos reales precargados: 126 productos, 44 lonas
// ============================================

const CLAVE_PASS = 'lonastoba2026';
const LS_PROD = 'lt_productos';
const LS_LONAS = 'lt_lonas';
const LS_SESSION = 'lt_session';
const ITEMS_POR_PAGINA = 50;

let paginaProd = 1;
let paginaLona = 1;

// ============================================
// DATOS INICIALES (EXTRAIDOS DE TUS ARCHIVOS REALES)
// ============================================
const productosIniciales = [{"id": 1, "nombre": "Faro Trasero Electrónico", "codigo": "1530E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1530E.jpeg", "voltaje": "de 9 a 34", "iluminacion": "Rojo y Ámbar", "largo": "190 mm", "ancho": "66 mm", "alto": "55 mm", "contiene": "1 Juego/s de 2 un.", "descripcion": ""}, {"id": 2, "nombre": "Trasero", "codigo": "1580", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1580.jpeg", "voltaje": "de 9 a 34", "iluminacion": "Cristal-Rojo-Ámbar", "largo": "251 mm", "ancho": "91 mm", "alto": "55 mm", "contiene": "1 Juego/s de 2 un.", "descripcion": ""}, {"id": 3, "nombre": "Trasero", "codigo": "1580E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1580E.jpeg", "voltaje": "de 9 a 34", "iluminacion": "Cristal-Rojo-Ámbar", "largo": "251 mm", "ancho": "91 mm", "alto": "55 mm", "contiene": "1 Juego/s de 2 un.", "descripcion": ""}, {"id": 4, "nombre": "Trasero", "codigo": "1530", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1530.jpeg", "voltaje": "de 9 a 34", "iluminacion": "Rojo-Ámbar", "largo": "190 mm", "ancho": "66 mm", "alto": "55 mm", "contiene": "1 Juego/s de 2 un.", "descripcion": ""}, {"id": 5, "nombre": "Trasero", "codigo": "1325V", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1325V.jpeg", "voltaje": "de 9 a 34", "iluminacion": "Con ventana il.pat.", "largo": "200 mm", "ancho": "80 mm", "alto": "68 mm", "contiene": "1 Juego/s de 2 un.", "descripcion": ""}, {"id": 6, "nombre": "Posicion Electronicos", "codigo": "1033E.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033E.FRIO.jpeg", "voltaje": "12/24V", "iluminacion": "CR frio/white cool", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 7, "nombre": "Posicion Electronicos", "codigo": "1033E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033E.A.jpeg", "voltaje": "12/24V", "iluminacion": "Ambar/Amber", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 8, "nombre": "Posicion Electronicos", "codigo": "1033E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033E.R.jpeg", "voltaje": "12/24V", "iluminacion": "Rojo/Red/Vermelho", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 9, "nombre": "Posicion Electronicos", "codigo": "1035E-A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035E-A.jpeg", "voltaje": "12/24V", "iluminacion": "Ambar/Amber", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 10, "nombre": "Posicion Electronicos", "codigo": "1035E-R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035E-R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/Red/Vermelho", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 11, "nombre": "Posicion Electronicos", "codigo": "1035E.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035E.FRIO.jpeg", "voltaje": "12/24V", "iluminacion": "CR FRIO/White cool", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 12, "nombre": "Flexibles Electronicos", "codigo": "1033EFL.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL.FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "CRISTAL FRIO/ Cold White", "largo": "91 mm", "ancho": "118 mm", "alto": "46 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 13, "nombre": "Flexibles Electronicos", "codigo": "1033EFL.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL.A.jpeg", "voltaje": "9-36V", "iluminacion": "AMBAR/Yellow/Amarelo", "largo": "91 mm", "ancho": "118 mm", "alto": "46 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 14, "nombre": "Flexibles Electronicos", "codigo": "1033EFL.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL.R.jpeg", "voltaje": "9-36V", "iluminacion": "ROJO/Red/Vermelho", "largo": "91 mm", "ancho": "118 mm", "alto": "46 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 15, "nombre": "Trasero", "codigo": "1350VD", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1350VD.jpeg", "voltaje": "9-36V", "iluminacion": "Derecho / con vent", "largo": "423 mm", "ancho": "80 mm", "alto": "110 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 16, "nombre": "Trasero", "codigo": "1350VI", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1350VI.jpeg", "voltaje": "9-36V", "iluminacion": "Izquierdo / con vent", "largo": "423 mm", "ancho": "80 mm", "alto": "110 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 17, "nombre": "Trasero electrónico", "codigo": "1350ED.24", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1350ED.24.jpeg", "voltaje": "24V", "iluminacion": "Derecho", "largo": "423 mm", "ancho": "80 mm", "alto": "110 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 18, "nombre": "Trasero electrónico", "codigo": "1350EI.24", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1350EI.24.jpeg", "voltaje": "24V", "iluminacion": "Izquierdo", "largo": "423 mm", "ancho": "80 mm", "alto": "110 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 19, "nombre": "Trasero electrónico", "codigo": "1350EI", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1350EI.jpeg", "voltaje": "12/24V", "iluminacion": "Izquierdo", "largo": "423 mm", "ancho": "80 mm", "alto": "110 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 20, "nombre": "Trasero electrónico", "codigo": "1350ED", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1350ED.jpeg", "voltaje": "12/24V", "iluminacion": "Derecho", "largo": "423 mm", "ancho": "80 mm", "alto": "110 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 21, "nombre": "Trasero electrónico", "codigo": "7000EI", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro7000EI.jpeg", "voltaje": "9-36V", "iluminacion": "Izquierdo", "largo": "440 mm", "ancho": "140 mm", "alto": "53 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 22, "nombre": "Trasero electrónico", "codigo": "6000E.A.DF", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro6000E.A.DF.jpeg", "voltaje": "12/24V", "iluminacion": "Ambar/Yellow", "largo": "136 mm", "ancho": "136 mm", "alto": "116 mm", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 23, "nombre": "Flexible electrónico", "codigo": "1033EFL2", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL2.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo-Ambar", "largo": "155 mm", "ancho": "115 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 24, "nombre": "Flexible electrónico", "codigo": "1033EFL2", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL2.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo-Ambar", "largo": "155 mm", "ancho": "115 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 25, "nombre": "Flexible electrónico", "codigo": "1033EFL2.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL2.FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal frio", "largo": "155 mm", "ancho": "115 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 26, "nombre": "Flexible electrónico", "codigo": "1033EFL2.AAAA", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL2.AAAA.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar-Ambar", "largo": "155 mm", "ancho": "115 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 27, "nombre": "Flexible electrónico", "codigo": "1033EFL2.CA", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL2.CA.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal Frio-Ambar", "largo": "155 mm", "ancho": "115 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 28, "nombre": "Posicion", "codigo": "1035.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/ White", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 29, "nombre": "Flexible", "codigo": "1035FL2.AAAA", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035FL2.AAAA.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar-Ambar", "largo": "182 mm", "ancho": "110 mm", "alto": "65 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 30, "nombre": "Posicion electrónico", "codigo": "3060E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3060E.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/ Yellow", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 31, "nombre": "Posicion electrónico", "codigo": "3060.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3060.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/ Ambar", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 32, "nombre": "Posicion", "codigo": "634.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro634.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/ White", "largo": "86 mm", "ancho": "98 mm", "alto": "39 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 33, "nombre": "Flexible", "codigo": "634FL.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro634FL.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/ White", "largo": "140 mm", "ancho": "94 mm", "alto": "72 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 34, "nombre": "Flexible", "codigo": "1035FL.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035FL.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "122 mm", "ancho": "110 mm", "alto": "65 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 35, "nombre": "Flexible", "codigo": "1035FL.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035FL.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "122 mm", "ancho": "110 mm", "alto": "65 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 36, "nombre": "Soporte Lateral Simple", "codigo": "1035 FL", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1035 FL.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo", "largo": "122 mm", "ancho": "110 mm", "alto": "65 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 37, "nombre": "Flexibles", "codigo": "1038FL.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1038FL.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar", "largo": "105 mm", "ancho": "88 mm", "alto": "63 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 38, "nombre": "Posicion", "codigo": "1037.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1037.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "85 mm", "ancho": "85 mm", "alto": "32 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 39, "nombre": "Posicion", "codigo": "1037.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1037.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/Red/Vermelho", "largo": "85 mm", "ancho": "85 mm", "alto": "32 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 40, "nombre": "Posicion", "codigo": "1037.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1037.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "85 mm", "ancho": "85 mm", "alto": "32 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 41, "nombre": "Flexible", "codigo": "1038FL.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1038FL.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal", "largo": "105 mm", "ancho": "88 mm", "alto": "63 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 42, "nombre": "Flexible", "codigo": "1037FL2.AAAA", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1037FL2.AAAA.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar-Ambar", "largo": "197 mm", "ancho": "88 mm", "alto": "63 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 43, "nombre": "Flexible", "codigo": "620/634", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro620.634.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo-Ambar", "largo": "320 mm", "ancho": "93 mm", "alto": "71 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 44, "nombre": "Soporte Lateral Triple", "codigo": "620/634 Triple", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro620/634 Triple.jpeg", "voltaje": "9-36V", "iluminacion": "Triple", "largo": "320 mm", "ancho": "93 mm", "alto": "71 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 45, "nombre": "Flexible", "codigo": "615/634-2", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro615.634.2.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo-Ambar", "largo": "240 mm", "ancho": "71 mm", "alto": "93 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 46, "nombre": "Posicion Electronico", "codigo": "1033E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033E.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo / Red / Vermelho", "largo": "105 mm", "ancho": "54 mm", "alto": "26 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 47, "nombre": "Flexible Electronico", "codigo": "1033EFL.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1033EFL.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/ Red/ Vermelho", "largo": "91 mm", "ancho": "118 mm", "alto": "46 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 48, "nombre": "Ilumina Patente", "codigo": "603.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro603.C.jpeg", "voltaje": "9-36V", "iluminacion": "Ilumina Patente", "largo": "140 mm", "ancho": "30 mm", "alto": "31 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 49, "nombre": "Faro ilumina patente", "codigo": "603", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro603.jpeg", "voltaje": "9-36V", "iluminacion": "Ilumina Patente", "largo": "140 mm", "ancho": "30 mm", "alto": "31 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 50, "nombre": "Faro Multiple Universal", "codigo": "600", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro600.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar", "largo": "42 mm", "ancho": "81 mm", "alto": "81 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 51, "nombre": "Posicion Electronico", "codigo": "3050E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3050E.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/ Yellow/ Amarelo", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 52, "nombre": "Posicion Electronico", "codigo": "3050E.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3050E.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 53, "nombre": "Posicion Electronico", "codigo": "3050E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3050E.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/Red/Vermelho", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 54, "nombre": "Posicion Electronico", "codigo": "634E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro634E.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/Red/Vermelho", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 55, "nombre": "Posicion Electronico", "codigo": "634E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro634E.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 56, "nombre": "Posicion Electronico", "codigo": "634E.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro634E.FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal frio/Cool", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 57, "nombre": "Posicion", "codigo": "750.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro750.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "190 mm", "ancho": "40 mm", "alto": "32 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 58, "nombre": "Posicion", "codigo": "880.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro880.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "262 mm", "ancho": "83 mm", "alto": "50 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 59, "nombre": "Plafonier", "codigo": "1255PM.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1255PM.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal-con llave", "largo": "119 mm", "ancho": "50 mm", "alto": "34 mm", "contiene": "12 unidad/s", "descripcion": ""}, {"id": 60, "nombre": "Plafonier electronico", "codigo": "401PE", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro401PE.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "146 mm", "ancho": "56 mm", "alto": "31,5 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 61, "nombre": "Faro 3010E-RB", "codigo": "3010E-RB", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3010E-RB.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo Bipolar/ Red", "largo": "190 mm", "ancho": "82 mm", "alto": "68 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 62, "nombre": "Posicion electronico", "codigo": "800E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro800E.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 63, "nombre": "Faro de uso Multiple", "codigo": "800E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro800E.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo", "largo": "116 mm", "ancho": "90 mm", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 64, "nombre": "Posicion Electronico", "codigo": "800E.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro800E.C.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal/White", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 65, "nombre": "Flexible electronico", "codigo": "1010EFL.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1010EFL.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/Red/Vermelho", "largo": "133 mm", "ancho": "41 mm", "alto": "79 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 66, "nombre": "Flexible electronico", "codigo": "1010EFL.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1010EFL.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "133 mm", "ancho": "41 mm", "alto": "79 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 67, "nombre": "Flexible electronico", "codigo": "1010EFL.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1010EFL.FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal frio/Pure white", "largo": "133 mm", "ancho": "41 mm", "alto": "79 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 68, "nombre": "Posicion electronico", "codigo": "1010E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1010E.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar-C/Conector", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 69, "nombre": "Posicion electronico", "codigo": "1010E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1010E.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo-C/Conector", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 70, "nombre": "Posicion electronico", "codigo": "1010E.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1010E.FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal frio-C/Conector", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 71, "nombre": "Flexible Electronico", "codigo": "3030EFL.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030EFL.FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal frio/Cool white", "largo": "104 mm", "ancho": "87 mm", "alto": "66 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 72, "nombre": "Flexible Electronico", "codigo": "3030EFL.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030EFL.A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "104 mm", "ancho": "87 mm", "alto": "66 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 73, "nombre": "Flexible Electronico", "codigo": "3030EFL.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030EFL.R.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo/Red/Vermelho", "largo": "104 mm", "ancho": "87 mm", "alto": "66 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 74, "nombre": "Faro electronico", "codigo": "3030 E-R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030 E-R.jpeg", "voltaje": "12V-24V", "iluminacion": "Rojo 12V-24V", "largo": "50 mm", "ancho": "50 mm", "alto": "27 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 75, "nombre": "Posicion electronico", "codigo": "3030E-A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030E-A.jpeg", "voltaje": "9-36V", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "50 mm", "ancho": "50 mm", "alto": "27 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 76, "nombre": "Posicion electronico", "codigo": "3030E-FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030E-FRIO.jpeg", "voltaje": "9-36V", "iluminacion": "Cristal Frio/Cool White", "largo": "50 mm", "ancho": "50 mm", "alto": "27 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 77, "nombre": "Trasero electronico", "codigo": "3030E.RB", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3030E.RB.jpeg", "voltaje": "9-36V", "iluminacion": "Rojo Bipolar", "largo": "50 mm", "ancho": "50 mm", "alto": "27 mm", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 78, "nombre": "Faro ilumina patente electronico", "codigo": "606 E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro606 E.jpeg", "voltaje": "12V-24V", "iluminacion": "Electronico", "largo": "130 mm", "ancho": "39 mm", "alto": "39 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 79, "nombre": "IL.Patente", "codigo": "603E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro603E.jpeg", "voltaje": "12V-24V", "iluminacion": "Ilumina Patente", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 80, "nombre": "Posicion electronico", "codigo": "1032E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1032E.A.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 81, "nombre": "Posicion electronico", "codigo": "1032E.FRIO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1032E.FRIO.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal Frio", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 82, "nombre": "Posicion electronico", "codigo": "1032E.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1032E.R.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo", "largo": "", "ancho": "", "alto": "", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 83, "nombre": "Posicion electronico", "codigo": "800E.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro800E.A.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar/Yellow/Amarelo", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 84, "nombre": "Posicion electronico", "codigo": "800E.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro800E.C.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal/White", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 85, "nombre": "Trasero electronico", "codigo": "3000E-CU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3000E-CU.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal Unipolar", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 86, "nombre": "Trasero electronico", "codigo": "3100E-CU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3100E-CU.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal Unipolar", "largo": "109 mm", "ancho": "109 mm", "alto": "21,5 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 87, "nombre": "Trasero electronico", "codigo": "3000E-AU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3000E-AU.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar Unipolar", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 88, "nombre": "Trasero electronico", "codigo": "3100E-AU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3100E-AU.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar Unipolar", "largo": "109 mm", "ancho": "109 mm", "alto": "21,5 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 89, "nombre": "Trasero electronico", "codigo": "3200E-AU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3200E-AU.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar Unipolar", "largo": "109 mm", "ancho": "109 mm", "alto": "21,5 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 90, "nombre": "Trasero electronico", "codigo": "3300E-RR", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3300E-RR.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Pos/Stop/Red", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 91, "nombre": "Trasero electronico", "codigo": "3100E-RB", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3100E-RB.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Bip/Red/Vermelho", "largo": "109 mm", "ancho": "109 mm", "alto": "21,5 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 92, "nombre": "Trasero electronico", "codigo": "3000E-RB", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3000E-RB.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Bipolar", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 93, "nombre": "Trasero electronico", "codigo": "3300E.RC", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3300E.RC.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo pos/ Cristal", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 94, "nombre": "Trasero electronico", "codigo": "3300E.RA", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3300E.RA.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo pos/ Ambar Giro", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 95, "nombre": "Trasero electronico", "codigo": "3300E.RR", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro3300E.RR.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo pos/STOP/Red", "largo": "109 mm", "ancho": "21,5 mm", "alto": "109 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 96, "nombre": "Trasero electronico", "codigo": "1620E-RB", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1620E-RB.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Bipolar/Red", "largo": "132 mm", "ancho": "106 mm", "alto": "75 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 97, "nombre": "Trasero electronico", "codigo": "1620E-CU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1620E-CU.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal/White", "largo": "132 mm", "ancho": "106 mm", "alto": "75 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 98, "nombre": "Trasero electronico", "codigo": "1620E-AU", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1620E-AU.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar/Yellow/amarelo", "largo": "132 mm", "ancho": "106 mm", "alto": "75 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 99, "nombre": "trasero", "codigo": "1600", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1600.jpeg", "voltaje": "9-36v", "iluminacion": "Sin ventana il.Pat-Unipolar", "largo": "413 mm", "ancho": "132 mm", "alto": "85 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 100, "nombre": "Faro Trasero Universal", "codigo": "1300", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1300.jpeg", "voltaje": "9-36v", "iluminacion": "Sin ventana ilumina Patente", "largo": "304 mm", "ancho": "122 mm", "alto": "78 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 101, "nombre": "Faro Trasero Universal", "codigo": "1610", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1610.jpeg", "voltaje": "9-36v", "iluminacion": "Sin Ventana Ilumina Patente Unipolar", "largo": "312 mm", "ancho": "85 mm", "alto": "132 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 102, "nombre": "Trasero Electronico", "codigo": "1610E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1610E.jpeg", "voltaje": "9-36v", "iluminacion": "CR-RO-RO-AM", "largo": "311 mm", "ancho": "132 mm", "alto": "74 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 103, "nombre": "Trasero Electronico", "codigo": "1610E.RRR", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1610E.RRR.jpeg", "voltaje": "9-36v", "iluminacion": "Todo Rojo", "largo": "311 mm", "ancho": "132 mm", "alto": "74 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 104, "nombre": "Trasero Electronico", "codigo": "1600E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1600E.jpeg", "voltaje": "9-36v", "iluminacion": "CR-RO-RO-AM", "largo": "413 mm", "ancho": "132 mm", "alto": "74 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 105, "nombre": "trasero", "codigo": "1620.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1620.A.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar Unipolar", "largo": "132 mm", "ancho": "107 mm", "alto": "85 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 106, "nombre": "trasero", "codigo": "1620.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1620.C.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal Unipolar", "largo": "132 mm", "ancho": "107 mm", "alto": "85 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 107, "nombre": "trasero", "codigo": "1620B.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1620B.R.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Bipolar", "largo": "132 mm", "ancho": "107 mm", "alto": "85 mm", "contiene": "6 unidad/s", "descripcion": ""}, {"id": 108, "nombre": "trasero", "codigo": "1400.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1400.R.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Bipolar", "largo": "138 mm", "ancho": "122 mm", "alto": "65 mm", "contiene": "8 unidad/s", "descripcion": ""}, {"id": 109, "nombre": "trasero", "codigo": "1400.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1400.C.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal/Clearr", "largo": "138 mm", "ancho": "122 mm", "alto": "65 mm", "contiene": "8 unidad/s", "descripcion": ""}, {"id": 110, "nombre": "Trasero", "codigo": "1900V", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1900V.jpeg", "voltaje": "9-36v", "iluminacion": "Con ventana il.Pat", "largo": "190 mm", "ancho": "162 mm", "alto": "90,5 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 111, "nombre": "Trasero", "codigo": "1810S.C", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1810S.C.jpeg", "voltaje": "9-36v", "iluminacion": "Cristal Unipolar", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 112, "nombre": "Trasero", "codigo": "1810S.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1810S.R.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Unipolar", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 113, "nombre": "Trasero", "codigo": "1810S.A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1810S.A.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar Unipolar", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 114, "nombre": "Trasero", "codigo": "1810SB.R", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro1810SB.R.jpeg", "voltaje": "9-36v", "iluminacion": "Rojo Bipolar", "largo": "", "ancho": "", "alto": "", "contiene": "4 unidad/s", "descripcion": ""}, {"id": 115, "nombre": "Posicion Electronico", "codigo": "612E-A", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro612E-A.jpeg", "voltaje": "9-36v", "iluminacion": "Ambar", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 116, "nombre": "Faro Baiml", "codigo": "FARO", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro.jpeg", "voltaje": "9-36v", "iluminacion": "", "largo": "", "ancho": "", "alto": "", "contiene": "unidad/s", "descripcion": ""}, {"id": 117, "nombre": "Faro electronico", "codigo": "6100E", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro6100E.jpeg", "voltaje": "12V-24V", "iluminacion": "Ambar", "largo": "132 mm", "ancho": "17 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 118, "nombre": "Faro electronico", "codigo": "6100E.AZ", "categoria": "faros", "marca": "Baiml", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/faro6100 E.jpeg", "voltaje": "12V-24V", "iluminacion": "Azul", "largo": "132 mm", "ancho": "17 mm", "alto": "25 mm", "contiene": "2 unidad/s", "descripcion": ""}, {"id": 119, "nombre": "Barra de Led", "codigo": "Bar180EPI", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/BAR180EPI.jpeg", "voltaje": "12V-24V", "iluminacion": "Blanco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 120, "nombre": "Barra de Led", "codigo": "CURV180EPI", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/CURV180EPI.jpeg", "voltaje": "9-36V", "iluminacion": "Blanco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 121, "nombre": "Barra de Led", "codigo": "BAR396PLUS", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/BAR396PLUS.jpeg", "voltaje": "12V-36V", "iluminacion": "Banco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 122, "nombre": "Barra de Led", "codigo": "BAR360PLUS", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/BAR360PLUS.jpeg", "voltaje": "12V-36V", "iluminacion": "Blanco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 123, "nombre": "Barra de Led", "codigo": "BAR288PLUS", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/BAR288PLUS.jpeg", "voltaje": "9V-36V", "iluminacion": "Blanco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 124, "nombre": "Barra de Led", "codigo": "BAR324PLUS", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/BAR324PLUS.jpeg", "voltaje": "9V-36V", "iluminacion": "Banco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 125, "nombre": "Barra de Led", "codigo": "CURV120EPI", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/CURV120EPI.jpeg", "voltaje": "9V-36V", "iluminacion": "Blanco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}, {"id": 126, "nombre": "Barra de Led", "codigo": "BAR180PLUS", "categoria": "faros", "marca": "LuxLed", "stock": 10, "stockMinimo": 5, "precio": 0, "imagen": "img/productos/BAR180PLUS.jpeg", "voltaje": "12V-36V", "iluminacion": "Blanco", "largo": "", "ancho": "", "alto": "", "contiene": "1 unidad/s", "descripcion": ""}];

const lonasIniciales = [{"id": 1, "color": "Azul Oscuro", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 2, "color": "Azul Claro", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 3, "color": "Verde Claro", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 4, "color": "Verde Manzana", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 5, "color": "Verde Oscuro", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 6, "color": "Negro", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 7, "color": "Blanco", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 8, "color": "Beige", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 9, "color": "Beige Oscuro", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 10, "color": "Gris", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 11, "color": "Violeta", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 12, "color": "Fucsia", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 13, "color": "Amarillo", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 14, "color": "Naranja", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 15, "color": "Rojo", "tipo": "Zonda 900 900 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 900 g/m²"}, {"id": 16, "color": "Azul Oscuro", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 17, "color": "Azul Claro", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 18, "color": "Verde Claro", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 19, "color": "Verde Manzana", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 20, "color": "Verde Oscuro", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 21, "color": "Negro", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 22, "color": "Blanco", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 23, "color": "Gris", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 24, "color": "Naranja", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 25, "color": "Rojo", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 26, "color": "Amarillo", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 27, "color": "Beige", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 28, "color": "Beige Oscuro", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 29, "color": "Fucsia", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 30, "color": "Violeta", "tipo": "Zonda 1100 1100 g/m²", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Zonda - 1100 g/m²"}, {"id": 31, "color": "Verde Claro", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 32, "color": "Verde Manzana", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 33, "color": "Verde Oscuro", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 34, "color": "Azul Claro", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 35, "color": "Beige", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 36, "color": "Beige Oscuro", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 37, "color": "Blanco", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 38, "color": "Negro", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 39, "color": "Violeta", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 40, "color": "Fucsia", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 41, "color": "Rojo", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 42, "color": "Naranja", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 43, "color": "Amarillo", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}, {"id": 44, "color": "Gris", "tipo": "Coversol Tropical", "ancho": 1.5, "peso": 0, "precio": 0, "stock": 50, "descripcion": "Coversol"}];

// ============================================
// UTILIDADES
// ============================================
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatMoney(n) {
  if (!n) return '$0';
  return '$' + Number(n).toLocaleString('es-AR');
}

function getProductos() {
  const data = localStorage.getItem(LS_PROD);
  return data ? JSON.parse(data) : [...productosIniciales];
}

function getLonas() {
  const data = localStorage.getItem(LS_LONAS);
  return data ? JSON.parse(data) : [...lonasIniciales];
}

function saveProductos(lista) {
  localStorage.setItem(LS_PROD, JSON.stringify(lista));
}

function saveLonas(lista) {
  localStorage.setItem(LS_LONAS, JSON.stringify(lista));
}

function getCats() {
  const cats = {};
  getProductos().forEach(p => { if (p.categoria) cats[p.categoria] = true; });
  return Object.keys(cats).sort();
}

// ============================================
// LOGIN
// ============================================
function doLogin() {
  const pass = document.getElementById('passwordInput').value.trim();
  if (pass === CLAVE_PASS) {
    localStorage.setItem(LS_SESSION, '1');
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminScreen').classList.remove('hidden');
    cargarDatos();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function logout() {
  localStorage.removeItem(LS_SESSION);
  document.getElementById('adminScreen').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('passwordInput').value = '';
  document.getElementById('loginError').style.display = 'none';
}

function checkSession() {
  if (localStorage.getItem(LS_SESSION) === '1') {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminScreen').classList.remove('hidden');
    cargarDatos();
  }
}

// ============================================
// TABS
// ============================================
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  event.target.classList.add('active');
  if (id === 'dashboard') renderDashboard();
  if (id === 'productos') { paginaProd = 1; renderProductos(); }
  if (id === 'lonas') { paginaLona = 1; renderLonas(); }
  if (id === 'stockbajo') renderStockBajo();
}

// ============================================
// DASHBOARD
// ============================================
function renderDashboard() {
  const productos = getProductos();
  const lonas = getLonas();
  let stockBajo = 0, sinStock = 0, valor = 0;
  productos.forEach(p => {
    if (p.stock === 0) sinStock++;
    else if (p.stock < p.stockMinimo) stockBajo++;
    valor += (p.stock || 0) * (p.precio || 0);
  });
  lonas.forEach(l => {
    if (l.stock === 0) sinStock++;
    else if (l.stock < 10) stockBajo++;
    valor += (l.stock || 0) * (l.precio || 0);
  });
  document.getElementById('kpiTotalProd').textContent = productos.length;
  document.getElementById('kpiTotalLonas').textContent = lonas.length;
  document.getElementById('kpiStockBajo').textContent = stockBajo;
  document.getElementById('kpiSinStock').textContent = sinStock;
  document.getElementById('kpiCategorias').textContent = getCats().length;
  document.getElementById('kpiValorStock').textContent = formatMoney(valor);

  const badge = document.getElementById('stockBadge');
  if (stockBajo + sinStock > 0) {
    badge.textContent = stockBajo + sinStock;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

// ============================================
// PRODUCTOS
// ============================================
function renderProductos() {
  const buscar = document.getElementById('buscarProd').value.toLowerCase().trim();
  const cat = document.getElementById('filtroCat').value;
  const stockFiltro = document.getElementById('filtroStock').value;
  let lista = getProductos();

  if (buscar) lista = lista.filter(p => (p.nombre + ' ' + p.codigo + ' ' + p.marca).toLowerCase().includes(buscar));
  if (cat) lista = lista.filter(p => p.categoria === cat);
  if (stockFiltro) {
    if (stockFiltro === 'ok') lista = lista.filter(p => p.stock > 0 && p.stock >= p.stockMinimo);
    if (stockFiltro === 'bajo') lista = lista.filter(p => p.stock > 0 && p.stock < p.stockMinimo);
    if (stockFiltro === 'cero') lista = lista.filter(p => p.stock === 0);
  }

  const totalPag = Math.ceil(lista.length / ITEMS_POR_PAGINA) || 1;
  if (paginaProd > totalPag) paginaProd = totalPag;
  const inicio = (paginaProd - 1) * ITEMS_POR_PAGINA;
  const pagina = lista.slice(inicio, inicio + ITEMS_POR_PAGINA);

  const tbody = document.getElementById('tablaProductos');
  tbody.innerHTML = pagina.map(p => {
    const stockClass = p.stock === 0 ? 'stock-low' : (p.stock < p.stockMinimo ? 'stock-low' : 'stock-ok');
    const img = p.imagen ? '<img src="' + escapeHtml(p.imagen) + '" style="width:50px;height:50px;object-fit:cover;border-radius:6px;">' : '-';
    return '<tr>' +
      '<td>' + p.id + '</td>' +
      '<td>' + img + '</td>' +
      '<td><strong>' + escapeHtml(p.nombre) + '</strong></td>' +
      '<td>' + escapeHtml(p.codigo) + '</td>' +
      '<td>' + escapeHtml(p.categoria) + '</td>' +
      '<td>' + escapeHtml(p.marca) + '</td>' +
      '<td class="' + stockClass + '">' + p.stock + '</td>' +
      '<td>' + p.stockMinimo + '</td>' +
      '<td>' + formatMoney(p.precio) + '</td>' +
      '<td class="actions">' +
        '<button class="btn-edit" onclick="editarProducto(' + p.id + ')">Editar</button>' +
        '<button class="btn-del" onclick="eliminarProducto(' + p.id + ')">Eliminar</button>' +
      '</td>' +
    '</tr>';
  }).join('');

  let pagHTML = '<button onclick="paginaProd--;renderProductos()"' + (paginaProd===1?' disabled':'') + '>Anterior</button>';
  pagHTML += '<span>Pagina ' + paginaProd + ' de ' + totalPag + ' (' + lista.length + ' items)</span>';
  pagHTML += '<button onclick="paginaProd++;renderProductos()"' + (paginaProd===totalPag?' disabled':'') + '>Siguiente</button>';
  document.getElementById('pagProductos').innerHTML = pagHTML;

  const select = document.getElementById('filtroCat');
  const cats = getCats();
  const current = select.value;
  select.innerHTML = '<option value="">Todas las categorias</option>' + cats.map(c => '<option value="' + c + '">' + c + '</option>').join('');
  select.value = current;
}

function openModalProducto() {
  document.getElementById('prodId').value = '';
  document.getElementById('tituloModalProd').textContent = 'Agregar Producto';
  ['prodNombre','prodCodigo','prodMarca','prodImagen','prodDesc','prodVoltaje','prodIlum','prodLargo','prodAncho','prodAlto','prodContiene'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('prodCategoria').value = 'faros';
  document.getElementById('prodStock').value = 0;
  document.getElementById('prodStockMin').value = 5;
  document.getElementById('prodPrecio').value = '';
  document.getElementById('modalProducto').classList.remove('hidden');
}

function closeModalProducto() {
  document.getElementById('modalProducto').classList.add('hidden');
}

function guardarProducto() {
  const id = document.getElementById('prodId').value;
  const nombre = document.getElementById('prodNombre').value.trim();
  const codigo = document.getElementById('prodCodigo').value.trim();
  const categoria = document.getElementById('prodCategoria').value;
  const stock = parseInt(document.getElementById('prodStock').value) || 0;
  const stockMin = parseInt(document.getElementById('prodStockMin').value) || 0;

  if (!nombre || !codigo) { alert('Nombre y Codigo son obligatorios'); return; }

  let lista = getProductos();
  if (id) {
    const idx = lista.findIndex(p => p.id == id);
    if (idx >= 0) {
      lista[idx] = { ...lista[idx], nombre, codigo, categoria, marca: document.getElementById('prodMarca').value.trim(), stock, stockMinimo: stockMin, precio: parseFloat(document.getElementById('prodPrecio').value) || 0, imagen: document.getElementById('prodImagen').value.trim(), descripcion: document.getElementById('prodDesc').value.trim(), voltaje: document.getElementById('prodVoltaje').value.trim(), iluminacion: document.getElementById('prodIlum').value.trim(), largo: document.getElementById('prodLargo').value.trim(), ancho: document.getElementById('prodAncho').value.trim(), alto: document.getElementById('prodAlto').value.trim(), contiene: document.getElementById('prodContiene').value.trim() };
    }
  } else {
    const newId = lista.length > 0 ? Math.max(...lista.map(p => p.id)) + 1 : 1;
    lista.push({ id: newId, nombre, codigo, categoria, marca: document.getElementById('prodMarca').value.trim(), stock, stockMinimo: stockMin, precio: parseFloat(document.getElementById('prodPrecio').value) || 0, imagen: document.getElementById('prodImagen').value.trim(), descripcion: document.getElementById('prodDesc').value.trim(), voltaje: document.getElementById('prodVoltaje').value.trim(), iluminacion: document.getElementById('prodIlum').value.trim(), largo: document.getElementById('prodLargo').value.trim(), ancho: document.getElementById('prodAncho').value.trim(), alto: document.getElementById('prodAlto').value.trim(), contiene: document.getElementById('prodContiene').value.trim() });
  }
  saveProductos(lista);
  closeModalProducto();
  renderProductos();
  renderDashboard();
}

function editarProducto(id) {
  const p = getProductos().find(x => x.id == id);
  if (!p) return;
  document.getElementById('prodId').value = p.id;
  document.getElementById('tituloModalProd').textContent = 'Editar Producto';
  document.getElementById('prodNombre').value = p.nombre || '';
  document.getElementById('prodCodigo').value = p.codigo || '';
  document.getElementById('prodCategoria').value = p.categoria || 'faros';
  document.getElementById('prodMarca').value = p.marca || '';
  document.getElementById('prodStock').value = p.stock || 0;
  document.getElementById('prodStockMin').value = p.stockMinimo || 5;
  document.getElementById('prodPrecio').value = p.precio || '';
  document.getElementById('prodImagen').value = p.imagen || '';
  document.getElementById('prodDesc').value = p.descripcion || '';
  document.getElementById('prodVoltaje').value = p.voltaje || '';
  document.getElementById('prodIlum').value = p.iluminacion || '';
  document.getElementById('prodLargo').value = p.largo || '';
  document.getElementById('prodAncho').value = p.ancho || '';
  document.getElementById('prodAlto').value = p.alto || '';
  document.getElementById('prodContiene').value = p.contiene || '';
  document.getElementById('modalProducto').classList.remove('hidden');
}

function eliminarProducto(id) {
  if (!confirm('Seguro que queres eliminar este producto?')) return;
  saveProductos(getProductos().filter(p => p.id != id));
  renderProductos();
  renderDashboard();
}

// ============================================
// LONAS
// ============================================
function renderLonas() {
  const buscar = document.getElementById('buscarLona').value.toLowerCase().trim();
  let lista = getLonas();
  if (buscar) lista = lista.filter(l => (l.color + ' ' + l.tipo).toLowerCase().includes(buscar));

  const totalPag = Math.ceil(lista.length / ITEMS_POR_PAGINA) || 1;
  if (paginaLona > totalPag) paginaLona = totalPag;
  const inicio = (paginaLona - 1) * ITEMS_POR_PAGINA;
  const pagina = lista.slice(inicio, inicio + ITEMS_POR_PAGINA);

  document.getElementById('tablaLonas').innerHTML = pagina.map(l => {
    const stockClass = l.stock === 0 ? 'stock-low' : (l.stock < 10 ? 'stock-low' : 'stock-ok');
    return '<tr>' +
      '<td>' + l.id + '</td>' +
      '<td><span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:' + escapeHtml(l.color.toLowerCase().split(' ')[0]) + ';border:1px solid #ccc;margin-right:6px;"></span>' + escapeHtml(l.color) + '</td>' +
      '<td>' + escapeHtml(l.tipo) + '</td>' +
      '<td>' + l.ancho + ' m</td>' +
      '<td>' + l.peso + ' kg</td>' +
      '<td>' + formatMoney(l.precio) + '</td>' +
      '<td class="' + stockClass + '">' + l.stock + ' m</td>' +
      '<td class="actions">' +
        '<button class="btn-edit" onclick="editarLona(' + l.id + ')">Editar</button>' +
        '<button class="btn-del" onclick="eliminarLona(' + l.id + ')">Eliminar</button>' +
      '</td>' +
    '</tr>';
  }).join('');

  let pagHTML = '<button onclick="paginaLona--;renderLonas()"' + (paginaLona===1?' disabled':'') + '>Anterior</button>';
  pagHTML += '<span>Pagina ' + paginaLona + ' de ' + totalPag + ' (' + lista.length + ' items)</span>';
  pagHTML += '<button onclick="paginaLona++;renderLonas()"' + (paginaLona===totalPag?' disabled':'') + '>Siguiente</button>';
  document.getElementById('pagLonas').innerHTML = pagHTML;
}

function openModalLona() {
  document.getElementById('lonaId').value = '';
  document.getElementById('tituloModalLona').textContent = 'Agregar Lona';
  ['lonaColor','lonaTipo','lonaAncho','lonaPeso','lonaPrecio','lonaDesc'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('lonaStock').value = 0;
  document.getElementById('modalLona').classList.remove('hidden');
}

function closeModalLona() {
  document.getElementById('modalLona').classList.add('hidden');
}

function guardarLona() {
  const id = document.getElementById('lonaId').value;
  const color = document.getElementById('lonaColor').value.trim();
  const tipo = document.getElementById('lonaTipo').value.trim();
  const ancho = parseFloat(document.getElementById('lonaAncho').value) || 0;
  const peso = parseFloat(document.getElementById('lonaPeso').value) || 0;
  const precio = parseFloat(document.getElementById('lonaPrecio').value) || 0;
  const stock = parseFloat(document.getElementById('lonaStock').value) || 0;
  if (!color || !tipo) { alert('Color y Tipo son obligatorios'); return; }

  let lista = getLonas();
  if (id) {
    const idx = lista.findIndex(l => l.id == id);
    if (idx >= 0) lista[idx] = { ...lista[idx], color, tipo, ancho, peso, precio, stock, descripcion: document.getElementById('lonaDesc').value.trim() };
  } else {
    const newId = lista.length > 0 ? Math.max(...lista.map(l => l.id)) + 1 : 1;
    lista.push({ id: newId, color, tipo, ancho, peso, precio, stock, descripcion: document.getElementById('lonaDesc').value.trim() });
  }
  saveLonas(lista);
  closeModalLona();
  renderLonas();
  renderDashboard();
}

function editarLona(id) {
  const l = getLonas().find(x => x.id == id);
  if (!l) return;
  document.getElementById('lonaId').value = l.id;
  document.getElementById('tituloModalLona').textContent = 'Editar Lona';
  document.getElementById('lonaColor').value = l.color || '';
  document.getElementById('lonaTipo').value = l.tipo || '';
  document.getElementById('lonaAncho').value = l.ancho || '';
  document.getElementById('lonaPeso').value = l.peso || '';
  document.getElementById('lonaPrecio').value = l.precio || '';
  document.getElementById('lonaStock').value = l.stock || 0;
  document.getElementById('lonaDesc').value = l.descripcion || '';
  document.getElementById('modalLona').classList.remove('hidden');
}

function eliminarLona(id) {
  if (!confirm('Seguro que queres eliminar esta lona?')) return;
  saveLonas(getLonas().filter(l => l.id != id));
  renderLonas();
  renderDashboard();
}

// ============================================
// STOCK BAJO
// ============================================
function renderStockBajo() {
  const productos = getProductos();
  const lonas = getLonas();
  let alertas = [];
  productos.forEach(p => {
    if (p.stock === 0) alertas.push({ id: p.id, nombre: p.nombre, codigo: p.codigo, stock: 0, minimo: p.stockMinimo, faltante: p.stockMinimo, tipo: 'producto' });
    else if (p.stock < p.stockMinimo) alertas.push({ id: p.id, nombre: p.nombre, codigo: p.codigo, stock: p.stock, minimo: p.stockMinimo, faltante: p.stockMinimo - p.stock, tipo: 'producto' });
  });
  lonas.forEach(l => {
    if (l.stock === 0) alertas.push({ id: l.id, nombre: l.color + ' - ' + l.tipo, codigo: '-', stock: 0, minimo: 10, faltante: 10, tipo: 'lona' });
    else if (l.stock < 10) alertas.push({ id: l.id, nombre: l.color + ' - ' + l.tipo, codigo: '-', stock: l.stock, minimo: 10, faltante: 10 - l.stock, tipo: 'lona' });
  });

  document.getElementById('alertStockBajo').style.display = alertas.length > 0 ? 'block' : 'none';
  document.getElementById('tablaStockBajo').innerHTML = alertas.map(a => {
    return '<tr>' +
      '<td>' + a.id + '</td>' +
      '<td><strong>' + escapeHtml(a.nombre) + '</strong></td>' +
      '<td>' + escapeHtml(a.codigo) + '</td>' +
      '<td class="stock-low">' + a.stock + '</td>' +
      '<td>' + a.minimo + '</td>' +
      '<td class="stock-low">+' + a.faltante + '</td>' +
      '<td class="actions">' +
        '<button class="btn-edit" onclick="' + (a.tipo === 'producto' ? 'editarProducto' : 'editarLona') + '(' + a.id + ')">Reponer</button>' +
      '</td>' +
    '</tr>';
  }).join('') || '<tr><td colspan="7" style="text-align:center;padding:30px;color:#999;">No hay alertas de stock. Todo bien!</td></tr>';
}

// ============================================
// GENERAR HTML
// ============================================
function descargarArchivo(contenido, nombre) {
  const blob = new Blob([contenido], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generarProductosHTML() {
  const productos = getProductos();
  const cats = {};
  productos.forEach(p => { if (!cats[p.categoria]) cats[p.categoria] = []; cats[p.categoria].push(p); });

  let html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Productos - Lonas Toba</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header><h1>Productos</h1></header>
<main class="container">
<section class="productos-grid">`;

  Object.keys(cats).sort().forEach(cat => {
    html += `<h2 class="categoria-titulo">${cat.toUpperCase()}</h2><div class="grid">`;
    cats[cat].forEach(p => {
      html += `<article class="card">
        ${p.imagen ? `<img src="${escapeHtml(p.imagen)}" alt="${escapeHtml(p.nombre)}">` : ''}
        <h3>${escapeHtml(p.nombre)}</h3>
        <p class="codigo">Cod: ${escapeHtml(p.codigo)}</p>
        ${p.marca ? `<p class="marca">Marca: ${escapeHtml(p.marca)}</p>` : ''}
        ${p.precio ? `<p class="precio">${formatMoney(p.precio)}</p>` : ''}
        ${p.descripcion ? `<p class="desc">${escapeHtml(p.descripcion)}</p>` : ''}
        ${p.voltaje ? `<p>Voltaje: ${escapeHtml(p.voltaje)}</p>` : ''}
        ${p.iluminacion ? `<p>Iluminacion: ${escapeHtml(p.iluminacion)}</p>` : ''}
        ${p.largo ? `<p>Largo: ${escapeHtml(p.largo)}</p>` : ''}
        ${p.ancho ? `<p>Ancho: ${escapeHtml(p.ancho)}</p>` : ''}
        ${p.alto ? `<p>Alto: ${escapeHtml(p.alto)}</p>` : ''}
        ${p.contiene ? `<p>Contiene: ${escapeHtml(p.contiene)}</p>` : ''}
        <button class="btn-consulta" onclick="agregarConsulta('${escapeHtml(p.nombre)}', '${escapeHtml(p.codigo)}')">Consultar</button>
      </article>`;
    });
    html += `</div>`;
  });

  html += `</section></main>
<script src="script.js"><\/script>
</body></html>`;

  descargarArchivo(html, 'productos.html');
  logGenerar('Productos HTML generado: ' + productos.length + ' productos');
}

function generarLonasHTML() {
  const lonas = getLonas();
  let html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lonas - Lonas Toba</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<header><h1>Lonas</h1></header>
<main class="container">
<section class="lonas-grid"><div class="grid">`;

  lonas.forEach(l => {
    html += `<article class="card lona-card">
      <div class="color-box" style="background:${escapeHtml(l.color.toLowerCase().split(' ')[0])};"></div>
      <h3>${escapeHtml(l.color)}</h3>
      <p class="tipo">${escapeHtml(l.tipo)}</p>
      <p>Ancho: ${l.ancho} m</p>
      <p>Peso: ${l.peso} kg</p>
      <p class="precio">${formatMoney(l.precio)} / metro</p>
      ${l.descripcion ? `<p class="desc">${escapeHtml(l.descripcion)}</p>` : ''}
      <button class="btn-consulta" onclick="agregarConsulta('Lona ${escapeHtml(l.color)}', '${escapeHtml(l.tipo)}')">Consultar</button>
    </article>`;
  });

  html += `</div></section></main>
<script src="script.js"><\/script>
</body></html>`;

  descargarArchivo(html, 'lonas.html');
  logGenerar('Lonas HTML generado: ' + lonas.length + ' lonas');
}

function logGenerar(msg) {
  const div = document.getElementById('generarLog');
  div.innerHTML += '<div class="alert-box success" style="margin-bottom:10px;">' + msg + ' - ' + new Date().toLocaleString() + '</div>';
}

// ============================================
// IMPORTAR / EXPORTAR JSON
// ============================================
function exportarJSON() {
  const data = {
    exportado: new Date().toISOString(),
    productos: getProductos(),
    lonas: getLonas()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'backup-lonas-toba-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('Backup descargado!');
}

function importarJSON() {
  const raw = document.getElementById('jsonInput').value.trim();
  if (!raw) { alert('Pega un JSON primero o arrastra un archivo'); return; }
  try {
    const data = JSON.parse(raw);
    if (data.productos && Array.isArray(data.productos)) {
      saveProductos(data.productos);
    }
    if (data.lonas && Array.isArray(data.lonas)) {
      saveLonas(data.lonas);
    }
    document.getElementById('jsonInput').value = '';
    alert('Importacion exitosa! Productos: ' + (data.productos ? data.productos.length : 0) + ', Lonas: ' + (data.lonas ? data.lonas.length : 0));
    renderDashboard();
    renderProductos();
    renderLonas();
  } catch (e) {
    alert('Error al importar: ' + e.message);
  }
}

function handleFileSelect(evt) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('jsonInput').value = e.target.result;
  };
  reader.readAsText(file);
}

// Drag & drop
const dropZone = document.getElementById('fileDrop');
if (dropZone) {
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = ev => { document.getElementById('jsonInput').value = ev.target.result; };
      reader.readAsText(file);
    }
  });
}

// ============================================
// INICIALIZACION
// ============================================
function cargarDatos() {
  renderDashboard();
  renderProductos();
  renderLonas();
}

document.addEventListener('DOMContentLoaded', checkSession);