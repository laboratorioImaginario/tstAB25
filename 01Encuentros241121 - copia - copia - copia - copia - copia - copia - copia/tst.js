let dim = Math.min(window.innerWidth, window.innerHeight) * 0.85;

let mil = 0;
let seed = get_seed(tokenData.hash);
let hash_ints = hash_to_ints(tokenData.hash);
let hash_normalized_strings = hash_ints.map((val, idx) => map_v_str(idx, 0.0, 1.0));

let rawParams = setupParametersFromTokenData(tokenData)




let paletas = [
/*
{
    w: 800,
    nombre: "basicos",
    colores: [
    "#ed1c24",  //rojo
    "#ffd900",  //amarillo
    "#0e42eb",  //azul
    "#fff9ea",  //casiblanco
    ],
},
*/

{
    w: 800,
    nombre: "relieve",
    colores: [
    "#57837B",  //amarillo
     "#06c4a2",  //amarillo
    "#f29402",  //azul
    "#fff9ea",  //verde
    "#f2e202",  //amarillo
    ],
},

{
    w: 800,
    nombre: "basicos",
    colores: [
    "#fff9ea",  //
    "#ed1c24", 
    "#3a80c9",  //123962
    //"#2754ba",  //
    "#ffd900",  //
    //"#799eb2",  //
    "#b1d4e5",  //
    ],
},

/*
{
    w: 800,
    nombre: "alebrije0",
    colores: [
    "#ed1c24",  //
    "#279b37",  //
    "#f6ae01",  //
    "#00c6b6",  //
    "#fff9ea",
    ],
},
*/

{
    w: 800,
    nombre: "alebrije",
    colores: [
    "#ce2724",  //
    "#f3ec19",  //
    "#207c88",  //
    "#aac1bf",  //
    "#f0537a",
    "#fff9ea",
    ],
},

{
    w: 800,
    nombre: "barragan",
    colores: [
    "#fc4d21",  //
    "#e34d95",  //cf6799
    "#ffd900",  //
    "#8894ac",  //
    "#f0f1eb",

    ],
},
{
    w: 800,
    nombre: "huaca",
    colores: [
    "#88e3a4",  //cf6799
    "#ffa530",  //
    "#1e88f7",  //
    "#e31047",
    "#ebe310",
    ],
},

];

let puntosFlow = [

{
    w: 800,
    nombre: ["poligono"],
    geometrias: [3,4],
    geometriasCent: [2,3,4],
    intensidad: [0.8,1,1.15],
    grosor: [/*"diferentes",*/"iguales","igualcu"],
    tipo: ["curvo","recto"/*,"combinado"*/],
    trazo: ["continuo"],
    flowVal: ["flow0","flow1"],
    esquemaColor: [

    "color0",
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    //"color8",
    
    ],

    valorFlow: ["flow0","flow2"],
    valorCrecimiento: [1.25,1.4,1.5,2,3,4],
    tipoCrecimiento: ["igual","combinado"],
},



{
    w: 800,
    nombre: ["reticula"],
    retic: [1,2],
    geometrias: [3,4],
    geometriasCent: [2,3,4],
    intensidad: [0.8,1,1.15],
    grosor: [/*"diferentes",*/"iguales","igualcu"],
    tipo: ["curvo","recto"/*,"combinado"*/],
    trazo: ["continuo"],
    flowVal: ["flow0","flow1"],
    orden: ["ordenado","noOrdenado","noOrdenadoX","noOrdenadoY"],
    esquemaColor: [

    "color0",
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    //"color8",
    
    ],

    valorFlow: ["flow0","flow2"],
    valorCrecimiento: [1.25,1.4,1.5,2,3,4],
    tipoCrecimiento: ["igual","combinado"],
},




];

let gridPuntos = [
{
    w: 800,
    nombre: "reticula",
    orden: ["ordenado","noOrdenado","noOrdenadoX","noOrdenadoY","noOrdenadoXX","noOrdenadoYY"],
    tamanoElipse: ["iguales","diferentes",],
    gridOrden: ["iguales","diferentes"],
},
{
    w: 800,
    nombre: "aleatorio",
    tamanoElipse: ["iguales","diferentes",],
},
];


var listaMarco = [0,25,50,100];

var gridPts = rand_choice_obj(gridPuntos);
var flow = rand_choice_obj(puntosFlow);
var paletaColor = rand_choice_obj(paletas);
var paletaColor0 = rand_choice_obj(paletas);

//gridPts
var gridptx = [];
var gridpty = [];
let circles = [];
var gridptsz = [];
var gridptsz0 = [];


//flowPts
var flowptx = [];
var flowpty = [];
var intensidad;
var intensidad0;
var intensidad1;
var intensidad2;
var flowGrosorIgual;
var reduccionGrosorIgual;
var florGrosorCombinado = [];
var reduccionGrosorCombinado = [];
var mixCol = [];
var tipoCombinado = [];
var mixColVal;
var mixColVal0;
var transparencia = [];
var scl;
var scl0;
var intensidad00;
var tamanoGeo;

var _esquemaColor;
var _valorFlow;
var col = [];
var col000;
var col111;
var col0 = [];
var flowSelec;
var col00;
var addCol;
var mixVal1 = [];

var col01 = [];
var col02 = [];
var col03 = [];
var col04 = [];
var col05;

var randRef = [];

var scl00;
var scl11;
var scll = [];
var mixColVall = [];
var flowGrosorIgual0;
var reduccionGrosorIgual0;
var flowGrosorIgual00 = [];
var reduccionGrosorIgual00 = [];
var addColl0;
var addColl = [];
var randd;

var pg;
var pg0;

var val0101;

var mixColPts = [];
var mixColPtsVal = [];


var intensidad3;

var hh;
function setup(){
   hh = dim*1.5;
   createCanvas(dim, hh);
   col00 = random(paletaColor.colores);
   col111 = random(paletaColor.colores);
   col05 = random(paletaColor.colores);
   var r = red(col00);
   var g = green(col00);
   var b = blue(col00);

   background(col00);


   pg = createGraphics(dim,hh);
   pg0 = createGraphics(dim,hh);

   console.log("GRIDS");
   console.log(paletaColor);


   scl = int(rand_between(250,600));
   scl0 = rand_between(0.0015,0.0025);


   intensidad0 = rand_between(1,2.5);
   intensidad1 = intensidad0/2;
   intensidad2 = rand_between(1,1.8);
   flowGrosorIgual = rand_between(6,6.3);
 reduccionGrosorIgual = rand_between(0.01,0.08);   //0.01,0.1
 scl00 = int(rand_between(300,800));
 scl11 = rand_between(0.004,0.006);
 mixColVal0 = rand_between(30,70);
 intensidad00 = rand_between(1,2);
 addCol = int(rand_between(3,6));
 randd = rand_between(0.00001,0.00002);
 val0101 = int(rand_between(15,25));
 intensidad3 = int(rand_between(5,6));


 console.log(intensidad0);
 console.log(intensidad1);
 console.log(scl);


 if(gridPts.nombre == "reticula"){

    var _orden = gridPts.orden[int(rand_between(0,gridPts.orden.length))];
    var _tamanoElipse = gridPts.tamanoElipse[int(rand_between(0,gridPts.tamanoElipse.length))];
    var gridOrden = gridPts.gridOrden[int(rand_between(0,gridPts.gridOrden.length))];


    var tamanosIguales = rand_between(10,25);
    var tamanosIguales0 = rand_between(2.5,5);
    console.log("reticula");  
    console.log("orden: " + _orden)  
    console.log("tamanoElipse: " + _tamanoElipse)  

    var val0111 = int(random(3,6));
    var val0222 = int(random(3,6));

    var numb; 
    var numb0; 

    if(gridOrden == "iguales"){
        numb = dim/val0111;
        numb0 = dim/val0111;
    }
    if(gridOrden == "diferentes"){
        numb = dim/val0111;
        numb0 = dim/val0222;
    }

    for(var i = numb/2; i<dim; i+=numb){
        var randxx = random(-numb/3,numb/3);
        var randyy = random(-numb0/3,numb0/3);
        for(var j = numb0/2; j<dim; j+=numb0){
            var x = i;
            var y = j;
            mixColPts = append(mixColPts,rand_dec());
            mixColPtsVal = append(mixColPtsVal,rand_dec());
            if(_orden == "ordenado"){
                gridptx = append(gridptx,i);
                gridpty = append(gridpty,j+hh/6);
            }
            if(_orden == "noOrdenado"){
                gridptx = append(gridptx,i+rand_between(-numb/3,numb/3));
                gridpty = append(gridpty,j+rand_between(-numb0/3,numb0/3)+hh/6);
            }         
            if(_orden == "noOrdenadoX"){
                gridptx = append(gridptx,i+rand_between(-numb/3,numb/3));
                gridpty = append(gridpty,j+hh/6);
            }         
            if(_orden == "noOrdenadoY"){
                gridptx = append(gridptx,i);
                gridpty = append(gridpty,j+rand_between(-numb0/3,numb0/3)+hh/6);
            }
            if(_orden == "noOrdenadoXX"){
                gridptx = append(gridptx,i+randxx);
                gridpty = append(gridpty,j+hh/6);
            }         
            if(_orden == "noOrdenadoYY"){
                gridptx = append(gridptx,i);
                gridpty = append(gridpty,j+hh/6+randyy);
            }                  
            mixVal1 = append(mixVal1,rand_dec());

            if(_tamanoElipse == "iguales"){
                gridptsz = append(gridptsz,tamanosIguales);
            }
            if(_tamanoElipse == "diferentes"){
                gridptsz = append(gridptsz,rand_between(15,30));
            }
        }
    }
}


if(gridPts.nombre == "aleatorio"){
    var total = int(rand_between(50,250));
    var _tamanoElipse = gridPts.tamanoElipse[int(rand_between(0,gridPts.tamanoElipse.length))];

    var tamanosIguales = rand_between(10,25);
    var tamanosIguales0 = rand_between(2.5,5);

    console.log("girdAleatorio ");
    console.log("numero de puntos: " + total);
    console.log("tamanoElipse: " + _tamanoElipse) 


    var yy1 = dim*1.5;
    for (let k = total; k > 0; k -= 1) {
        let circle = {

          x: rand_between(75,dim-75),
          y: rand_between(75,dim-75),
          r: rand_between(15,100),
      };

      let overlapping = false;
      for (let j = 0; j < circles.length; j++) {
          let other = circles[j];
          let d = dist(circle.x, circle.y, other.x, other.y);

          if (d < circle.r + other.r) {
            overlapping = true;
            break;
        }
    }
    if (!overlapping) {
      circles.push(circle);
  }
}

for (let i = 0; i < circles.length; i++) {
    gridptx = append(gridptx,circles[i].x);
    gridpty = append(gridpty,circles[i].y+hh/6);
    mixVal1 = append(mixVal1,rand_dec());
    mixColPts = append(mixColPts,rand_dec());
    mixColPtsVal = append(mixColPtsVal,rand_dec());
    if(_tamanoElipse == "iguales"){
        gridptsz = append(gridptsz,tamanosIguales);
    }
    if(_tamanoElipse == "diferentes"){
        gridptsz = append(gridptsz,rand_between(15,30));
    }
}
}

console.log("FLOW");


console.log(flow.nombre);

if(flow.nombre == "poligono"){

    var geometria0 = flow.geometriasCent[int(rand_between(0,flow.geometriasCent.length))];   
    _tipoCrecimiento = flow.tipoCrecimiento[int(rand_between(0,flow.tipoCrecimiento.length))];
    console.log(_tipoCrecimiento);

    _esquemaColor = flow.esquemaColor[int(rand_between(0,flow.esquemaColor.length))];

    if(_tipoCrecimiento == "igual"){
        _valorCrecimiento = flow.valorCrecimiento[int(rand_between(0,flow.valorCrecimiento.length))];
    }
    var rot011 = rand_between(0,TWO_PI);
    var rot022 = rand_between(-PI/4,PI/4);
    for(var ii = 0; ii<TWO_PI; ii+=TAU/geometria0){


        addColl0 = int(rand_between(3,6));

        flowGrosorIgual0 = rand_between(6,6.5);
        reduccionGrosorIgual0 = rand_between(0.025,0.1); 
        //mixColVal = rand_between(0.5,0.8);
        var geometria = flow.geometrias[int(rand_between(0,flow.geometrias.length))];    

        if(_tipoCrecimiento == "combinado"){
            _valorCrecimiento = flow.valorCrecimiento[int(rand_between(0,flow.valorCrecimiento.length))];
        }
        console.log(_valorCrecimiento);


        col0 = random(paletaColor.colores);
        var numb1 = dim/1;
        var numb2 = dim/2;

        var xxx;
        var yyy;


        var tamCenters;
        if(geometria0 == 2){
            tamCenters = dim/rand_between(3.5,4);
        }
        if(geometria0 == 3){
            var rand01 = rand_between(3,3.6);
            tamCenters = dim/rand01;
        }
        if(geometria0 == 4){
            var rand01 = rand_between(2.5,3.5);
            tamCenters = dim/rand01;
        }

        if(geometria0 == 2){
            xxx = dim/2 + sin(ii+rot022) * tamCenters;
            yyy = dim/2 + cos(ii+rot022) * tamCenters;
        }
        if(geometria0 == 3 || geometria0 == 4){
            xxx = dim/2 + sin(ii+rot011) * tamCenters;
            yyy = dim/2 + cos(ii+rot011) * tamCenters;
        }

        if(geometria0 == 2){
            tamanoGeo = numb2/rand_between(0.9,1.2); //1
        }
        if(geometria0 == 3){
            tamanoGeo = numb2/rand_between(1,1.4); //1.1
        }
        if(geometria0 == 4){
            tamanoGeo = numb2/rand_between(1.2,1.5);;  //1.15
        }

        var randxx = random(-dim/4,dim/4);

        _valorFlow = flow.valorFlow[int(rand_between(0,flow.valorFlow.length))];


        intensidad = flow.intensidad[int(rand_between(0,flow.intensidad.length))];
        grosor = flow.grosor[int(rand_between(0,flow.grosor.length))];
        tipo = flow.tipo[int(rand_between(0,flow.tipo.length))];
        trazo = flow.trazo[int(rand_between(0,flow.trazo.length))];
        flowVal = flow.flowVal[int(rand_between(0,flow.flowVal.length))];
        var coll1 = random(paletaColor.colores);
        var newColl = shuffle(paletaColor.colores);
        var newColl0 = shuffle(paletaColor.colores);

        var rotGeoFlow = random(TWO_PI);




    //var rotGeoFlow = rand_between(-PI/4,PI/4);
    var rott = random(PI/12,PI);

    if(geometria == 3){
        console.log("poligonoFlow: triangulo");
    }
    if(geometria == 4){
        console.log("poligonoFlow: cuadrado");
    }
    console.log("rotación: " + rotGeoFlow);
    console.log("intensidad: " + intensidad);
    console.log("grosor: " + grosor);
    console.log("tipo: " + tipo);
    console.log("flowVal: " + flowVal);

    var numb;

    if(geometria0 == 2){
       numb = tamanoGeo/20;
   }else{
    numb = tamanoGeo/18;
}
var sz2 = [];

var rand04 = rand_between(0.5,1.2);
var tamanoGeoFinal;

if(geometria == 3){
    tamanoGeoFinal = tamanoGeo*rand_between(1.1,1.3);
}
if(geometria == 4){
    tamanoGeoFinal = tamanoGeo*rand_between(0.8,1);
}

for(var j = tamanoGeoFinal; j>5; j-=numb){
    sz2 = append(sz2,j);
}

var numb0 = tamanoGeoFinal/tamanoGeoFinal/3.5;
var sz001 = [];
for(var j = 10; j<tamanoGeoFinal*_valorCrecimiento; j+=numb0){
    sz001 = append(sz001,j);
}

var numb01 = tamanoGeoFinal/25;
sz001 = reverse(sz001);
for(var j = 0; j<tamanoGeoFinal*_valorCrecimiento; j+=numb01){
    beginShape();
    strokeWeight(1);
    stroke(0,100);
    noFill();
    for(var i = 0; i<TWO_PI; i+=TAU/geometria){
        if(geometria == "3"){
            x = xxx + sin(i+rotGeoFlow+PI) * j;
            y = yyy + cos(i+rotGeoFlow+PI) * j;
        }else{
            x = xxx + sin(i+rotGeoFlow+PI/4) * j;
            y = yyy + cos(i+rotGeoFlow+PI/4) * j;
        }

        vertex(x,y+hh/6);
    }
    endShape(CLOSE);

}






var colVal = random(paletaColor.colores);
var colVal0 = random(paletaColor0.colores);

for(var j = 0; j<sz2.length; j++){


    var xpos1 = [];
    var ypos1 = [];
    var sz00 = sz2[j];



    for(var i = 0; i<TWO_PI; i+=TAU/geometria){

        var x;
        var y;


        if(geometria == "3"){
            x = xxx + sin(i+rotGeoFlow+PI) * sz00;
            y = yyy + cos(i+rotGeoFlow+PI) * sz00;
        }else{
            x = xxx + sin(i+rotGeoFlow+PI/4) * sz00;
            y = yyy + cos(i+rotGeoFlow+PI/4) * sz00;
        }

        xpos1 = append(xpos1,x);
        ypos1 = append(ypos1,y);
    }


    var coll = paletaColor.colores;



    var col011 = random(paletaColor.colores);
    var col012 = random(paletaColor0.colores);


    xpos1 = append(xpos1,xpos1[0]);
    ypos1 = append(ypos1,ypos1[0]);
        //var coll = colors[i % colors.length]
        var coll00 = random(paletaColor.colores);
        col000 = random(paletaColor0.colores);
        for(var i = 0; i<xpos1.length-1; i++){
            var xref = lerp(xpos1[i],xpos1[i+1],0.25);
            var yref = lerp(ypos1[i],ypos1[i+1],0.25);
            var xref0 = lerp(xpos1[i],xpos1[i+1],0.75);
            var yref0 = lerp(ypos1[i],ypos1[i+1],0.75);
            var steps;

            if(retic == 2){
               if(sz2[j] >= tamanoGeoFinal-10){
                steps = map_range(j,0,sz2.length,tamanoGeoFinal/3,0); 

            }else{
                steps = map_range(j,0,sz2.length,tamanoGeoFinal/3,0); 
            }
        }

        if(retic == 3){
           if(sz2[j] >= tamanoGeoFinal-10){
            steps = map_range(j,0,sz2.length,tamanoGeoFinal/3,0); 

        }else{
            steps = map_range(j,0,sz2.length,tamanoGeoFinal/3,0); 
        }
    }
    else{
     if(sz2[j] >= tamanoGeoFinal-10){
        steps = map_range(j,0,sz2.length,tamanoGeoFinal/4,0); 
    }else{
        steps = map_range(j,0,sz2.length,tamanoGeoFinal/5,0); 
    }
}


for(var jj = 0; jj<steps+1; jj++){
    var t = jj/steps;
    var xval00 = bezierPoint(xpos1[i],xref,xref0,xpos1[i+1],t);
    var yval00 = bezierPoint(ypos1[i],yref,yref0,ypos1[i+1],t);


    var distance = [];
    var distance0 = [];
    var szVal = [];
    for(var kk = 0; kk<gridptx.length; kk++){
        var d = dist(gridptx[kk],gridpty[kk],xval00,yval00+hh/6);
        distance = append(distance,d);
        distance0 = append(distance0,d);
        szVal = append(szVal,gridptsz[kk]);
    }
    distance = sort(distance);
    szVal = sort(szVal);
    var index = min(distance0);

    var dVal = distance[0];
    var szVal0 = szVal[0];

    if(dVal <= 5){

    }else{

      flowPtx = append(flowptx,xval00);
      flowpty = append(flowpty,yval00+hh/6);


      if(_valorFlow == "flow0"){
        flowSelec = 0;
    }

    if(_valorFlow == "flow1"){
        flowSelec = 1;
    }
    if(_valorFlow == "flow2"){
        flowSelec = 2;
    }


    if(_esquemaColor == "color0"){
                    col = append(col,0); //quitar
                }

                if(_esquemaColor == "color1"){
                    col = append(col,newColl[i  % newColl.length]);
                }
                if(_esquemaColor == "color2"){
                  col = append(col,newColl[i  % newColl.length]);
              }
              if(_esquemaColor == "color3"){
               col = append(col,newColl[i  % newColl.length]);
           }
           if(_esquemaColor == "color4"){
              col = append(col,newColl[i  % newColl.length]);
          }
          if(_esquemaColor == "color5"){
              col = append(col,random(paletaColor.colores));
          }
          if(_esquemaColor == "color6"){
              col = append(col,0); //quitar
          }
          if(_esquemaColor == "color7"){
              col = append(col,newColl[i  % newColl.length]);
          }
          if(_esquemaColor == "color8"){
           col = append(col,newColl[i  % newColl.length]);
       }

       if(trazo == "continuo"){
            florGrosorCombinado = append(florGrosorCombinado,rand_between(6,6.3));  //13

        }
        if(trazo == "manchas"){
            florGrosorCombinado = append(florGrosorCombinado,rand_between(5,10));  //13
        }

        mixColVal = rand_between(0.5,0.8);
        reduccionGrosorCombinado = append(reduccionGrosorCombinado,rand_between(0.025,0.08));
        mixCol = append(mixCol,rand_dec());
        transparencia = append(transparencia,rand_between(150,300));
        randRef = append(randRef,rand_dec());
        tipoCombinado = append(tipoCombinado,rand_dec());
        col01 = append(col01,col011);
        col02 = append(col02,col012);
        scll = append(scll,scl);
        mixColVall = append(mixColVall,mixColVal);

        
        if(geometria == 2){
         flowGrosorIgual00 = append(flowGrosorIgual00,flowGrosorIgual0*1.1);
         reduccionGrosorIgual00 = append(reduccionGrosorIgual00,reduccionGrosorIgual0*1.1);
     }else{
        flowGrosorIgual00 = append(flowGrosorIgual00,flowGrosorIgual0);
        reduccionGrosorIgual00 = append(reduccionGrosorIgual00,reduccionGrosorIgual0);
    }

    addColl = append(addColl,addColl0);
    col03 = append(col03,colVal);
    col04 = append(col04,colVal0);
}


}
}
}
pg.beginShape();
//pg.strokeWeight(1);
//pg.stroke(0,100);
pg.noStroke();
var r00 = red(col00);
var g00 = green(col00);
var b00 = blue(col00);

pg.fill(col00);
    //pg.noStroke();
    for(var j = 0; j<TWO_PI; j+=TAU/geometria){
        if(geometria == "3"){
            x = xxx + sin(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
        }else{
            x = xxx + sin(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
        }
        pg.vertex(x,y+hh/6);
    }
    pg.endShape(CLOSE);



    beginShape();
    noFill();
    strokeWeight(2);
    stroke(0,100);
    for(var j = 0; j<TWO_PI; j+=TAU/geometria){
        if(geometria == "3"){
            x = xxx + sin(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
        }else{
            x = xxx + sin(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
        }
        vertex(x,y+hh/6);
    }
    endShape(CLOSE);

}
}





if(flow.nombre == "reticula"){
    var _orden = flow.orden[int(rand_between(0,flow.orden.length))];
    var geometria0 = flow.geometriasCent[int(rand_between(0,flow.geometriasCent.length))];   
    var retic = flow.retic[int(rand_between(0,flow.retic.length))];   


    _tipoCrecimiento = flow.tipoCrecimiento[int(rand_between(0,flow.tipoCrecimiento.length))];
    console.log(_tipoCrecimiento);

    _esquemaColor = flow.esquemaColor[int(rand_between(0,flow.esquemaColor.length))];

    if(_tipoCrecimiento == "igual"){
        _valorCrecimiento = flow.valorCrecimiento[int(rand_between(0,flow.valorCrecimiento.length))];
    }
    var rot011 = rand_between(0,TWO_PI);
    var rot022 = rand_between(-PI/4,PI/4);


    var numb11;
    var numb00;

    if(retic == 1){
        numb11 = dim/1;
        numb00 = dim/4;
    }

    if(retic == 2){
        numb11 = dim/2;
        numb00 = dim/3;
    }



    for(var ii = numb11/2; ii<dim; ii+=numb11){


        for(var mm = 0; mm<dim; mm+=numb00){
            var randy = rand_between(-dim/6,dim/6);
            var randx = rand_between(-dim/6,dim/6);
            addColl0 = int(rand_between(3,6));

            flowGrosorIgual0 = rand_between(6,6.5); //6-7.5
            reduccionGrosorIgual0 = rand_between(0.025,0.1); 
            //mixColVal = rand_between(0.5,0.8);
            var geometria = flow.geometrias[int(rand_between(0,flow.geometrias.length))];    

            if(_tipoCrecimiento == "combinado"){
                _valorCrecimiento = flow.valorCrecimiento[int(rand_between(0,flow.valorCrecimiento.length))];
            }
            console.log(_valorCrecimiento);


            col0 = random(paletaColor.colores);

            console.log(retic);
            console.log(_orden);

            var xxx;
            var yyy;



            if(retic == 1){
                if(_orden == "ordenado"){
                  xxx = ii+randx;
                  yyy = mm+hh/6-numb00/2;
              }
              if(_orden == "noOrdenado"){
                 xxx = ii+random(-numb00/5,numb00/5);
                 yyy = mm+hh/6-numb00/2+random(-numb00/6,numb00/6);
             }
             if(_orden == "noOrdenadoY"){
              xxx = ii+random(-numb00/5,numb00/5);
              yyy = mm+hh/6-numb00/2+random(-numb00/6,numb00/6);
          }
          if(_orden == "noOrdenadoX"){
            xxx = ii+randx;
            yyy = mm+hh/6-numb00/2;
        }
    }





    if(retic == 2){
        if(_orden == "ordenado"){
           xxx = ii;
           yyy = mm+hh/6;
       }
       if(_orden == "noOrdenado"){
        xxx = ii+random(-numb11/4,numb11/4);
        yyy = mm+hh/6+random(-numb11/4,numb11/4)-numb00/6;
    }
    if(_orden == "noOrdenadoY"){
       xxx = ii;
       yyy = mm+hh/6+randy-numb00/6;
   }
   if(_orden == "noOrdenadoX"){
       xxx = ii;
       yyy = mm+hh/6-numb00/6;
   }
}



if(retic == 1){
            tamanoGeo = numb00/rand_between(0.5,0.8); //1
        }

        if(retic == 2){
        tamanoGeo = numb00/rand_between(0.8,1.2); //1
    }

    var randxx = random(-dim/6,dim/6);

    _valorFlow = flow.valorFlow[int(rand_between(0,flow.valorFlow.length))];


    intensidad = flow.intensidad[int(rand_between(0,flow.intensidad.length))];
    grosor = flow.grosor[int(rand_between(0,flow.grosor.length))];
    tipo = flow.tipo[int(rand_between(0,flow.tipo.length))];
    trazo = flow.trazo[int(rand_between(0,flow.trazo.length))];
    flowVal = flow.flowVal[int(rand_between(0,flow.flowVal.length))];
    var coll1 = random(paletaColor.colores);
    var newColl = shuffle(paletaColor.colores);
    var newColl0 = shuffle(paletaColor.colores);

    var rotGeoFlow = random(TWO_PI);




    //var rotGeoFlow = rand_between(-PI/4,PI/4);
    var rott = random(PI/12,PI);

    if(geometria == 3){
        console.log("poligonoFlow: triangulo");
    }
    if(geometria == 4){
        console.log("poligonoFlow: cuadrado");
    }
    console.log("rotación: " + rotGeoFlow);
    console.log("intensidad: " + intensidad);
    console.log("grosor: " + grosor);
    console.log("tipo: " + tipo);
    console.log("flowVal: " + flowVal);

    var numb = tamanoGeo/15;  //22
    var sz2 = [];

    var rand04 = rand_between(0.5,1.2);
    var tamanoGeoFinal;

    if(geometria == 3){
        tamanoGeoFinal = tamanoGeo*rand_between(1.1,1.3);
    }
    if(geometria == 4){
        tamanoGeoFinal = tamanoGeo*rand_between(0.8,1);
    }

    for(var j = tamanoGeoFinal; j>5; j-=numb){
        sz2 = append(sz2,j);
    }

    var numb0 = tamanoGeoFinal/tamanoGeoFinal/3.5;
    var sz001 = [];
    for(var j = 10; j<tamanoGeoFinal*_valorCrecimiento; j+=numb0){
        sz001 = append(sz001,j);
    }

    var numb01 = tamanoGeoFinal/25;
    sz001 = reverse(sz001);
    for(var j = 0; j<tamanoGeoFinal*_valorCrecimiento; j+=numb01){
        beginShape();
        strokeWeight(1);
        stroke(0,100);
        noFill();
        for(var i = 0; i<TWO_PI; i+=TAU/geometria){
            if(geometria == "3"){
                x = xxx + sin(i+rotGeoFlow+PI) * j;
                y = yyy + cos(i+rotGeoFlow+PI) * j;
            }else{
                x = xxx + sin(i+rotGeoFlow+PI/4) * j;
                y = yyy + cos(i+rotGeoFlow+PI/4) * j;
            }

            vertex(x,y+hh/6);
        }
        endShape(CLOSE);

    }






    var colVal = random(paletaColor.colores);
    var colVal0 = random(paletaColor0.colores);

    for(var j = 0; j<sz2.length; j++){


        var xpos1 = [];
        var ypos1 = [];
        var sz00 = sz2[j];



        for(var i = 0; i<TWO_PI; i+=TAU/geometria){

            var x;
            var y;


            if(geometria == "3"){
                x = xxx + sin(i+rotGeoFlow+PI) * sz00;
                y = yyy + cos(i+rotGeoFlow+PI) * sz00;
            }else{
                x = xxx + sin(i+rotGeoFlow+PI/4) * sz00;
                y = yyy + cos(i+rotGeoFlow+PI/4) * sz00;
            }

            xpos1 = append(xpos1,x);
            ypos1 = append(ypos1,y);
        }


        var coll = paletaColor.colores;



        var col011 = random(paletaColor.colores);
        var col012 = random(paletaColor0.colores);


        xpos1 = append(xpos1,xpos1[0]);
        ypos1 = append(ypos1,ypos1[0]);
        //var coll = colors[i % colors.length]
        var coll00 = random(paletaColor.colores);
        col000 = random(paletaColor0.colores);
        for(var i = 0; i<xpos1.length-1; i++){
            var xref = lerp(xpos1[i],xpos1[i+1],0.25);
            var yref = lerp(ypos1[i],ypos1[i+1],0.25);
            var xref0 = lerp(xpos1[i],xpos1[i+1],0.75);
            var yref0 = lerp(ypos1[i],ypos1[i+1],0.75);
            var steps;



            if(sz2[j] >= tamanoGeoFinal-10){
                steps = tamanoGeoFinal/4;
            }else{
                steps = map_range(j,0,sz2.length,tamanoGeoFinal/5,0); 
            }

            for(var jj = 0; jj<steps+1; jj++){
                var t = jj/steps;
                var xval00 = bezierPoint(xpos1[i],xref,xref0,xpos1[i+1],t);
                var yval00 = bezierPoint(ypos1[i],yref,yref0,ypos1[i+1],t);


                var distance = [];
                var distance0 = [];
                var szVal = [];
                for(var kk = 0; kk<gridptx.length; kk++){
                    var d = dist(gridptx[kk],gridpty[kk],xval00,yval00+hh/6);
                    distance = append(distance,d);
                    distance0 = append(distance0,d);
                    szVal = append(szVal,gridptsz[kk]);
                }
                distance = sort(distance);
                szVal = sort(szVal);
                var index = min(distance0);

                var dVal = distance[0];
                var szVal0 = szVal[0];

                if(dVal <= 5){

                }else{

                  flowPtx = append(flowptx,xval00);
                  flowpty = append(flowpty,yval00+hh/6);


                  if(_valorFlow == "flow0"){
                    flowSelec = 0;
                }

                if(_valorFlow == "flow1"){
                    flowSelec = 1;
                }
                if(_valorFlow == "flow2"){
                    flowSelec = 2;
                }


                if(_esquemaColor == "color0"){
                    col = append(col,0); //quitar
                }

                if(_esquemaColor == "color1"){
                    col = append(col,newColl[i  % newColl.length]);
                }
                if(_esquemaColor == "color2"){
                  col = append(col,newColl[i  % newColl.length]);
              }
              if(_esquemaColor == "color3"){
               col = append(col,newColl[i  % newColl.length]);
           }
           if(_esquemaColor == "color4"){
              col = append(col,newColl[i  % newColl.length]);
          }
          if(_esquemaColor == "color5"){
              col = append(col,random(paletaColor.colores));
          }
          if(_esquemaColor == "color6"){
              col = append(col,0); //quitar
          }
          if(_esquemaColor == "color7"){
              col = append(col,newColl[i  % newColl.length]);
          }
          if(_esquemaColor == "color8"){
           col = append(col,newColl[i  % newColl.length]);
       }

       if(trazo == "continuo"){
            florGrosorCombinado = append(florGrosorCombinado,rand_between(6,6.3));  //13

        }
        if(trazo == "manchas"){
            florGrosorCombinado = append(florGrosorCombinado,rand_between(5,10));  //13
        }
        mixColVal = rand_between(0.5,0.8);

        reduccionGrosorCombinado = append(reduccionGrosorCombinado,rand_between(0.025,0.08));
        mixCol = append(mixCol,rand_dec());
        transparencia = append(transparencia,rand_between(150,300));
        randRef = append(randRef,rand_dec());
        tipoCombinado = append(tipoCombinado,rand_dec());
        col01 = append(col01,col011);
        col02 = append(col02,col012);
        scll = append(scll,scl);
        mixColVall = append(mixColVall,mixColVal);
        flowGrosorIgual00 = append(flowGrosorIgual00,flowGrosorIgual0);
        reduccionGrosorIgual00 = append(reduccionGrosorIgual00,reduccionGrosorIgual0);
        addColl = append(addColl,addColl0);
        col03 = append(col03,colVal);
        col04 = append(col04,colVal0);
    }
}
}
}



pg.beginShape();
//pg.strokeWeight(1);
//pg.stroke(0,100);
pg.noStroke();
var r00 = red(col00);
var g00 = green(col00);
var b00 = blue(col00);

pg.fill(col00);
    //pg.noStroke();
    for(var j = 0; j<TWO_PI; j+=TAU/geometria){
        if(geometria == "3"){
            x = xxx + sin(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
        }else{
            x = xxx + sin(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
        }
        pg.vertex(x,y+hh/6);
    }
    pg.endShape(CLOSE);



    beginShape();
    noFill();
    strokeWeight(2);
    stroke(0,150);
    for(var j = 0; j<TWO_PI; j+=TAU/geometria){
        if(geometria == "3"){
            x = xxx + sin(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI) * tamanoGeoFinal*1.04;
        }else{
            x = xxx + sin(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
            y = yyy + cos(j+rotGeoFlow+PI/4) * tamanoGeoFinal*1.04;
        }
        vertex(x,y+hh/6);
    }
    endShape(CLOSE);

}




}
}



console.log(mixColVal);
console.log("scl: " + scl);
console.log("scl0: " + scl0);
console.log("intensidad0: " + intensidad0);
console.log("PUNTOS GRID");

console.log(_esquemaColor);
console.log(_valorFlow);



var strw = listaMarco[int(rand_between(0,listaMarco.length))];
strokeWeight(strw);
stroke("#f7f4ed");
noFill();
rect(0,0,dim,dim*1.5);

image(pg,0,0);


for(var j = 0; j<gridptx.length; j++){
    var sz = gridptsz[j]/1.6;

    var col012 = lerpColor(color(col111),color(250),0.3);

    if(mixVal1[j] <= 0.5){
        pg0.push();
        pg0.translate(gridptx[j],gridpty[j]);
        pg0.strokeWeight(1);
        pg0.fill(col012);
        pg0.stroke(0,50);
        pg0.noStroke();
        pg0.stroke(0,50);
        pg0.ellipse(0,0,sz*1.5,sz*1.5);
        //ellipse(0-sz/12,-sz/12,sz,sz);
        pg0.stroke(0,50);
        pg0.fill(250);
        pg0.ellipse(0,0,sz,sz);
        pg0.fill(20);
        pg0.ellipse(0,0,sz/2,sz/2);
        pg0.pop();
    }else{
        pg0.push();
        pg0.translate(gridptx[j],gridpty[j]);
        pg0.strokeWeight(1);
        pg0.stroke(0,50);

        if(mixColPts[j] <= mixColPtsVal[j]){
            pg0.fill(col012);
            pg0.ellipse(0,0,sz*1.2,sz*1.2);
            pg0.fill(0);
            pg0.ellipse(1,1,sz/1.5,sz/1.5);
            pg0.fill(col00);
            pg0.ellipse(0,0,sz/1.5,sz/1.5);
        }else{
           pg0.fill(col012);
           pg0.ellipse(0,0,sz*1.2,sz*1.2);
           pg0.fill(0);
           pg0.ellipse(0,0,sz/1.5,sz/1.5);
       }

       pg0.pop();
   }
}

}



function draw() {
    //background(250);

    for(var i = 0; i<flowptx.length; i++){
      var angle = 0;

      for(var j = 0; j<gridptx.length; j++){
          let xdif = gridptx[j] - flowptx[i];
          let ydif = gridpty[j] - flowpty[i];
          let d = sqrt((xdif * xdif) + (ydif * ydif));
          var d0 = dist(flowptx[i],flowptx[i],gridptx[i],gridpty[i]);
          angle +=  gridptsz[j]/2  / d*intensidad1;
      }


      var angle0;

      /*
      if(flowVal == "flow0"){
         angle0 = noise(flowptx[i]/scl,flowpty[i]/scl)*TWO_PI*intensidad0;
     }

     if(flowVal == "flow1"){
        var val00 = 5;
        angle0 = int(noise(flowptx[i]*scl0,flowpty[i]*scl0,i*0.00002)*val00)*PI/4;
    }
    */
    var val00 = val0101;

    var sclVal;
    sclVal = scl;
    if(flowVal == "flow0"){
        angle0 = noise(flowptx[i]/sclVal,flowpty[i]/sclVal)*TWO_PI*intensidad0;
    }
    if(flowVal == "flow1"){
        angle0 = int(noise(flowptx[i]/sclVal,flowpty[i]/sclVal)*val00)*PI/intensidad3;  //5-6
        //angle0 = noise(flowptx[i]/sclVal,flowpty[i]/sclVal)*TWO_PI*intensidad0;
    }
    var sz00 = 2.25;
    var xx;
    var yy;
    var xx1;
    var yy1;


    if(flowSelec == 0){
        xx = flowptx[i] + sin(angle+angle0*intensidad00) * sz00;
        yy = flowpty[i] + cos(angle+angle0*intensidad00) * sz00;

    }

    if(flowSelec == 1){
        xx = flowptx[i] + sin(angle+angle0*intensidad00) * sz00;
        yy = flowpty[i] + cos(angle+angle) * sz00;


    }

    if(flowSelec == 2){
        xx = flowptx[i] + sin(angle+angle) * sz00;
        yy = flowpty[i] + cos(angle+angle0*intensidad00) * sz00;


    }



    if(mixCol[i] <= mixColVall[i]){
        if(frameCount <= 1){
            blendMode(BLEND);
        }else{
            blendMode(MULTIPLY);
        }
    }else{
        blendMode(BLEND);
    }
    


    var nn; 
    var r = red(col[i]);
    var g = green(col[i]);
    var b = blue(col[i]);




    if(tipo == "recto"){
        strokeCap(PROJECT);
    }
    if(tipo == "curvo"){
        strokeCap(ROUND);
    }
    if(tipo == "combinado"){
        if(tipoCombinado[i] <= 0.5){
            strokeCap(SQUARE);
        }else{
            strokeCap(ROUND);
        }
    }

    if(trazo == "continuo"){

        if(grosor == "iguales"){
         if(frameCount <= 1){
            strokeWeight(8);
        }else{
            strokeWeight(flowGrosorIgual);
        }
    }
    if(grosor == "diferentes"){
        if(frameCount<=3){
            strokeWeight(5);
        }else{
            strokeWeight(florGrosorCombinado[i]);
        }
    }
    if(grosor == "igualcu"){
       if(frameCount <= 1){
        strokeWeight(8);
    }else{
        strokeWeight(flowGrosorIgual00[i]);
    }
}
}



if(trazo == "manchas"){
    if(grosor == "iguales"){
        strokeWeight(rand_between(flowGrosorIgual*0.5,flowGrosorIgual*1.25));
    }
    if(grosor == "diferentes"){
        if(frameCount<=3){
            strokeWeight(5);
        }else{
            strokeWeight(rand_between(0,florGrosorCombinado[i]*1.25));
        }
    }
    if(grosor == "igualcu"){
        strokeWeight(rand_between(flowGrosorIgual00[i]*0.5,flowGrosorIgual00[i]*1.25));
    }
}
noFill();

if(_esquemaColor == "color0"){


    var rr = red(col0);
    var gg = green(col0);
    var bb = blue(col0);

    stroke(rr,gg,bb,transparencia[i]);
    fill(col0);
}
if(_esquemaColor == "color1"){
    stroke(r,g,b,transparencia[i]);
    fill(r,g,b);
}
if(_esquemaColor == "color2"){
    var n = map_range(frameCount,0,40,0,1);
    var col1 = lerpColor(color(r,g,b),color(col02[i]),n);

    var r1 = red(col1);
    var g1 = green(col1);
    var b1 = blue(col1);

    stroke(r1,g1,b1,transparencia[i]);
        //fill(col1);
    }
    if(_esquemaColor == "color3"){
        var n = map_range(frameCount,0,40,0,1);  //mas valor mas tarda
        var col1 = lerpColor(color(r,g,b),color(col04[i]),n);

        var r1 = red(col1);
        var g1 = green(col1);
        var b1 = blue(col1);

        stroke(r1,g1,b1);
        //fill(col1);
    }

    if(_esquemaColor == "color4"){
       var n = map_range(frameCount,0,50,0,1);
       var col1 = lerpColor(color(r,g,b),color(col000),n);

       var rr = red(col1);
       var gg = green(col1);
       var bb = blue(col1);

       stroke(rr,gg,bb,transparencia[i]);
       fill(col1);
   }
   if(_esquemaColor == "color5"){
    var n = map_range(frameCount,0,60,0,1);
    var col1 = lerpColor(color(col01[i]),color(col02[i]),n);
    
    var rr = red(col1);
    var gg = green(col1);
    var bb = blue(col1);

    stroke(rr,gg,bb,transparencia[i]);
    fill(col1);
    //fill(col1);
}
if(_esquemaColor == "color6"){
    var n = map_range(frameCount,0,40,0,1);
    var col1 = lerpColor(color(col0),color(col02[i]),n);

    var rr = red(col1);
    var gg = green(col1);
    var bb = blue(col1);

    stroke(rr,gg,bb,transparencia[i]);
    fill(col1);
        //fill(col1);
    }
    if(_esquemaColor == "color7"){
        var n = map_range(frameCount,0,40,0,1);
        var col1 = lerpColor(color(r,g,b),color(col04[i]),n);

        var r1 = red(col1);
        var g1 = green(col1);
        var b1 = blue(col1);

        stroke(r1,g1,b1,transparencia[i]);
        //fill(col1);
    }
    if(_esquemaColor == "color8"){
        var n = map_range(frameCount,0,50,0,1);
        var col1 = lerpColor(color(col05),color(col04[i]),n);

        var r1 = red(col1);
        var g1 = green(col1);
        var b1 = blue(col1);

        stroke(r1,g1,b1);
        //fill(col1);
    }


    line(xx,yy,flowptx[i],flowpty[i]);  



 //noStroke();
 //ellipse(xx,yy,florGrosorCombinado[i]*1.2,florGrosorCombinado[i]*1.2);


/*
 push();
 translate(xx,yy);
 rotate(angle0*10);
 noStroke();
 ellipse(0,0,florGrosorCombinado[i]/1.1,florGrosorCombinado[i]/1.1);  
 pop();
 */
/*
beginShape();
noStroke();
strokeWeight(random(2));
stroke(0,25);
fill(r,g,b,transparencia[i]);
var tau = int(random(3,4));
for(var m = 0; m<TWO_PI; m+=TAU/tau){
    var xx0 = xx + sin(m+frameCount*0.5+angle0/2) * florGrosorCombinado[i];
    var yy0 = yy + cos(m+frameCount*0.5+angle0/2) * florGrosorCombinado[i];

    vertex(xx0,yy0);

}
endShape(CLOSE);
*/

flowptx[i] = xx;
flowpty[i] = yy;
florGrosorCombinado[i] -= reduccionGrosorCombinado[i];
if(florGrosorCombinado[i] <= 0){
    florGrosorCombinado[i] = 0;
}

flowGrosorIgual00[i]-=reduccionGrosorIgual00[i];
if(flowGrosorIgual00[i] <= 0){
    flowGrosorIgual00[i] = 0;
}



}

flowGrosorIgual-=reduccionGrosorIgual;
if(flowGrosorIgual <= 0){
    flowGrosorIgual = 0;
}


blendMode(BLEND);


if(_esquemaColor == "color0" || _esquemaColor == "color6"){
    if(frameCount % addCol == 0){
        col0 = random(paletaColor.colores);
    }
}

image(pg0,0,0);


blendMode(BLEND);
}




function windowResized() {
    dim = Math.min(window.innerWidth, window.innerHeight) * 0.85;
    resizeCanvas(dim, dim);
}

function hash_to_ints(token) {
    let hashPairs = [];
    for (let j = 0; j < 32; j++) {  
        hashPairs.push(tokenData.hash.slice(2 + j * 2, 4 + j * 2));
    }
    return hashPairs.map((x) => {
        return parseInt(x, 16);
    });
}

function get_seed(token) {
    return parseInt(tokenData.hash.slice(0, 16), 16);
}

function map_v(index, min = 0, max = 1) {
    return map_range(hash_ints[index], 0, 255, min, max);
}

function map_v_str(index, min = 0, max = 1) {
    return map_v(index, min, max).toFixed(6).toString();
}

function map_range(val, start1, stop1, start2, stop2) {
    return ((val - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function rand_dec() {
    seed ^= seed << 13;
    seed ^= seed >> 20;
    seed ^= seed << 5;
    return ((seed < 0 ? ~seed + 1 : seed) % 1000) / 1000;
}

function rand_between(a, b) {
    return a + (b - a) * rand_dec();
}

function rand_choice(choices) {
    return choices[Math.floor(rand_between(0, choices.length * 0.99))];
}

function rand_choice_obj(choices) {
    a = [];
    choices.forEach((elem, idx) => {
        for (i = 0; i < elem.w; i++) {
            a.push(elem);
        }
    });
    return rand_choice(a);
}

function hash_choice(val, choices) {
    return choices[Math.max(0, Math.floor((val / 255) * choices.length - 1e-6))];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(rand_dec() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function remove_elem(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function pick_new_color(colors, num_out) {
    aa = [];
    for (idx = 0; idx < num_out; idx++) {
        cc = [...colors];
        if (idx == 0 || colors.length == 1) {
            aa.push(rand_choice(cc));
        } else {
            last_elem = aa[aa.length - 1];
            cc = remove_elem(cc, last_elem);
            aa.push(rand_choice(cc));
        }
    }
    return aa;
}

// color trickery
function hex_to_vec3(c) {
    h = /^\#([A-Fa-f\d]+)$/.exec(c)[1];
    if (h.length === 3) {
        return [parseInt(h[0] + h[0], 16) / 255, parseInt(h[1] + h[1], 16) / 255, parseInt(h[2] + h[2], 16) / 255];
    } else if (h.length === 6) {
        return [parseInt(h[0] + h[1], 16) / 255, parseInt(h[2] + h[3], 16) / 255, parseInt(h[4] + h[5], 16) / 255];
    }
}

function get_obj(arr, name, val = false) {
    //get_obj(p_palettes, "Bacon")
    let out = arr.filter(({ n }) => n == name);
    if (val) {
        out = out.map(({ v }) => v);
        return [...out];
    } else {
        return out[0];
    }
}
function setupParametersFromTokenData(token) {
  let hashPairs = []
  //parse hash
  for (let j = 0; j < 32; j++) {
    hashPairs.push(token.hash.slice(2 + (j * 2), 4 + (j * 2)))
}
  // map to 0-255
  return hashPairs.map(x => {
    return parseInt(x, 16)
})
}