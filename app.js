

const li  = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');
let boton = document.getElementById('boton');
let botonLimpiar = document.getElementById('botonLimpiar')
var checks = document.querySelectorAll('.valores');
var tabla = document.getElementById('tabla');

 
let valor_sintoma =[
 //  *      cuerpo        *  *     piel   *    *           Dolores                     *    *  ojos        *   * nasales  *   respiratorio   *   digestivo   *     urinario  
//   1s  2s  3s  4s  5s  6s  7s  8s  9s  10s  11s  12s  13s  14s  15s  16s  17s  18s  19s  20s  21s  22s  23s  24s  25s  26s  27s  28s  29s  30s  31s  32s  33s   34s
/*1*/[3, 2,  1,  0,  0,  0,  2,  0,  0,   2,   2,   2,   0,   0,   1,   0,   3,   3,   3,   0,   0,   0,   2,   0,   0,   0,   0,   0,   0,   1,   1,   0,   0,   0], 
/*2*/[3, 3,  1,  2,  0,  0,  0,  0,  0,   0,   2,   0,   2,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0,   2,   0,   1,   3,   3,   3,   0,   2,   0,   0,   0],
/*3*/[2, 1,  0,  0,  0,  0,  0,  0,  0,   0,   1,   0,   1,   0,   0,   0,   1,   0,   0,   1,   2,   0,   0,   3,   2,   2,   0,   0,   2,   0,   0,   0,   0,   0],
/*4*/[2, 0,  2,  1,  0,  0,  0,  3,  0,   0,   0,   0,   0,   0,   2,   0,   1,   0,   0,   0,   0,   3,   0,   0,   0,   0,   0,   0,   0,   2,   1,   2,   0,   3],
/*5*/[3, 1,  2,  2,  0,  0,  1,  0,  0,   0,   2,   0,   2,   0,   2,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   3,   3,   0],
/*6*/[0, 0,  3,  3,  1,  2,  0,  0,  3,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
/*7*/[3, 2,  1,  0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,   1,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   0,   2]
 ]
 



// let = valorrr=0;
// let suma = 0;
// for(let j in valor_sintoma){
//     for(i=0; i<valor_sintoma[j].length; i++){
//         valorrr = valor_sintoma[j][i]
//         suma = suma + valorrr;
//     }
//     console.log(suma);
//     suma=0;
// }



//  console.table(valor_sintoma)

/* ************************************** PRIMERA VERSION  ************************** */
/*
 const enfermedades =   ["Dengue","Neumonía","Resfrió Común","Parasitosis","Desnutrición","Anemia","Hepatitis A","Fiebre tifoidea"];
 var valor_enfermedad = [8, 10, 10, 10, 10, 10, 10, 10];
*/

/* ************************************** SEGUNDA VERSION  ************************** */
let enfermedades_valor = [
    {Enfermedad : "Dengue",         Valor : 28},
    {Enfermedad : "Neumonía",       Valor : 29},
    {Enfermedad : "Resfriado Común",Valor : 18},
    {Enfermedad : "Hepatitis A",    Valor : 22},
    {Enfermedad : "Fiebre tifoidea",Valor : 24},
    {Enfermedad : "Anemia - Deficiencia de Hierro",         Valor : 13},
    {Enfermedad : "Infeccion Urinaria",Valor : 14}
]




// sintomas_enfermedad.forEach((e)=>{
//     console.log(e)
//  });

class enfermedad_registro {
    constructor(enfermedad, probabilidad) {
        this.enfermedad = enfermedad;
        this.probabilidad = probabilidad;
    }
}
/* 
    Al hacer click en LI
    todos .li quitar la clase activo
    todos .bloque quitar la clase activo
    .li con la posicion que se ha echo click añadimos la clase activo
    .bloque con la posicion que se ha echo click añadimos la clase activo
*/

//RECORRIENDO TODOS LOS LI
li.forEach( (cadaLi, i )=>{
    //asignando un click a cadali
    li[i].addEventListener("click", ()=>{
    
        //Recorrer TODOS los .li
        li.forEach( ( cadaLi, i)=>{
            //Quitando la clase activo de cada li
            li[i].classList.remove('activo')
             //Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })
        // En el li que hemos echo click le añadimo la clase activo
        li[i].classList.add('activo')
        // En el bloque con la misma posicion le añadimos la clase activo
        bloque[i].classList.add('activo')
    })
});

botonLimpiar.addEventListener('click', function(){
    checks.forEach((e)=>{
        if(e.checked == true){
            return e.checked = false;
        }
    });
    tabla.innerHTML = "<tr class =fila>" + "<th>" + "Enfermedad" + "</th>" + "<th>" + "Probabilidad" +"</th>" + "</tr>";

});



boton.addEventListener('click', function(){
    
    let valores = [];
    
    let baseDatos= []
    

    checks.forEach((e)=>{

            if(e.checked == true){
                e.value = 1;
                valores.push(parseInt(e.value)); 
            }else{
                e.value = 0;
                valores.push(parseInt(e.value)); 
            }
   });

/* ************************************** PRIMERA VERSION  ************************** */
/*
    let valorEnfermedadPorSintomaObtenido=[];
    let sumaPrimeraEnfermedad= 0;
    let sumaSegundaEnfermedad= 0;
    let sumaTerceraEnfermedad= 0;

            for (i=0; i<valores.length; i++){       
                        if(valores[i] === 1  && valor_sintoma[0][i] === 1 ){
                        sumaPrimeraEnfermedad = sumaPrimeraEnfermedad+1;
                        }if(valores[i] === 1  && valor_sintoma[1][i] === 1 ){
                            sumaSegundaEnfermedad = sumaSegundaEnfermedad+1;
                        }if(valores[i] === 1  && valor_sintoma[2][i] === 1 ){
                            sumaTerceraEnfermedad = sumaTerceraEnfermedad+1;
                        }
                    
                }
            valorEnfermedadPorSintomaObtenido.push(sumaPrimeraEnfermedad,sumaSegundaEnfermedad,sumaTerceraEnfermedad);
*/
/* ************************************** SEGUNDA VERSION  ************************** */
    let sumaTodasEnfermedades = 0;
    let obtenerSumaSintomasPorEnfermedad = []

        for (let j in valor_sintoma){
            for(i = 0; i<valores.length; i++){
                        if(valores[i] === 1 && valor_sintoma[j][i]===1){
                            sumaTodasEnfermedades = sumaTodasEnfermedades + 1
                        }  
                        if(valores[i] === 1 && valor_sintoma[j][i]===2){
                            sumaTodasEnfermedades = sumaTodasEnfermedades + 2
                        }  
                        if(valores[i] === 1 && valor_sintoma[j][i]===3){
                            sumaTodasEnfermedades = sumaTodasEnfermedades + 3
                        }   
                }
                obtenerSumaSintomasPorEnfermedad.push(sumaTodasEnfermedades);
                sumaTodasEnfermedades = 0;
        }   



            for(i=0; i<enfermedades_valor.length; i++){
                if(obtenerSumaSintomasPorEnfermedad[i] > 0){
                    this["nuevo_registro"] =new enfermedad_registro(enfermedades_valor[i].Enfermedad, (obtenerSumaSintomasPorEnfermedad[i] / enfermedades_valor[i].Valor)*100);
                    baseDatos.push(this["nuevo_registro"]);
                }
            } 

            //console.table(obtenerSumaSintomasPorEnfermedad)

            //console.table(baseDatos)
            baseDatos.sort((o1, o2)=>{
                if(o1.probabilidad > o2.probabilidad){
                    return -1;
                }else if(o1.probabilidad < o2.probabilidad){
                    return 1;
                }else{
                    return 0;
                }
            });
            //console.table(baseDatos)
            
            tabla.innerHTML = "<tr class =fila>" + "<th>" + "Enfermedad" + "</th>" + "<th>" + "Probabilidad" +"</th>" + "</tr>";
            for(i=0; i<baseDatos.length; i++){
                tabla.innerHTML += `<td> ${baseDatos[i].enfermedad} </td> <td> ${baseDatos[i].probabilidad.toFixed(2)}% </td>`
                
            }
           
});






