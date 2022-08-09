
//numero random
// let x = Math.ceil(Math.random()*3)


// Construccion de armadura
class Armadura{
    constructor(casco,pecho,pantalon){
        this.casco = casco
        this.pecho = pecho
        this.pantalon = pantalon
    }
}

let armadura_pesada = new Armadura(15,30,15)
let armadura_ligera = new Armadura(10,20,10)










// Eleccion de armadura
let armadura_eleccion = prompt("Elija su armadura:\n1) Armadura Pesada\n2) Armadura Ligera")



if((armadura_eleccion == "1") || (armadura_eleccion == "2")){
    if(armadura_eleccion == "1"){
        armadura_total = armadura_pesada.casco + armadura_pesada.pecho + armadura_pesada.pantalon
    }else{
        armadura_total = armadura_ligera.casco + armadura_ligera.pecho + armadura_ligera.pantalon
    }
    console.log(armadura_total)
}else{
    alert("opcion Incorrecta")
}






// construccion personajes
class Peleador{
    constructor(nombre,vida,armadura){
        this.nombre = nombre
        this.vida = vida
        this.armadura = armadura
    }

}

let arquero = new Peleador ("Robin",100,10)
let guerrero = new Peleador ("Teseo",120,5)


let lista_personajes = [arquero,guerrero]


//Personaje personalizado

let nombre = prompt ("Elija el nombre de su personaje")


let mivida = 50

let mi_personaje = new Peleador(nombre,mivida)










vida_total = mivida + armadura_total // esta es la vida total, la suma entre la vida y armadura


console.log(vida_total)





// Funcion

// esta funcion es el danio que se le hace al personaje
function danio_jugador(eleccion){
    let mi_danio = [0,5,10,15]
    
    if (eleccion == 0){
        golpe = mi_danio[0]
    }else if (eleccion == 1){
        golpe = mi_danio[1]
    }else if(eleccion == 2){
        golpe = mi_danio[2]
    }
    else{
        golpe = mi_danio[3]
    }

    return golpe
}












//Empieza el juego 

let personaje_a_derrotar = prompt("elije un personaje contra el que pelearas:\n0) arquero \n1) guerrero")



if (personaje_a_derrotar == "0"){
    nombre_personaje = lista_personajes[0].nombre //Esto dice el nombre del personaje
    console.log("Usted a elejido a: "+ nombre_personaje)

    vida_restante = arquero.vida

    alert("Empieza atacando usted")
    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3"))

        let efectivo = Math.ceil(Math.random()*2)
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+arquero.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            console.log("EL arquero ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+arquero.nombre+" es de: "+vida_restante)
        }



        alert("turno arquero")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
    
            console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
        }

        alert("Su turno")
    }
    
    if (vida_total <= 0){
        alert("El arquero te ha derrotado")
    }
    else if(vida_restante<=0){
        alert("El arquero ha sido derrotado")
    }


}else{
    nombre_personaje = lista_personajes[1].nombre
    console.log("Usted a elejido a: "+ nombre_personaje)

    vida_restante = guerrero.vida

    alert("Empieza atacando usted")

    while((vida_restante > 0) && (vida_total>0)){
        
        
        let intento = parseInt(prompt("Elija un numero del 1 al 3"))

        let efectivo = Math.ceil(Math.random()*2)
        if (efectivo == 1){
            ataque = danio_jugador(intento)

            vida_restante = vida_restante - ataque
            console.log("Usted le ha hecho: "+ataque+" danio\nLa vida restante de "+guerrero.nombre+" es de: "+vida_restante)

        }else{
            ataque = danio_jugador(0)
            
            vida_restante = vida_restante - ataque
            console.log("EL guerrero ha esquivado su ataque\nUsted le ha hecho: "+ataque+" danio\nLa vida restante de "+guerrero.nombre+" es de: "+vida_restante)
        }



        alert("turno guerrero")

        // intento = prompt("Elija un numero del 0 al 2")


        intento = Math.ceil(Math.random()*3)

        efectivo = Math.ceil(Math.random()*2)

        if(efectivo == 1){
            
            ataque = danio_jugador(intento)
            vida_total = vida_total - ataque
    
            console.log("Usted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
    
        }else{
            ataque = danio_jugador(0)
            vida_total = vida_total - ataque
            console.log("Usted ha logrado esquivar el ataque con exito\nUsted ha recibido: "+ataque+" danio\nLa vida restante de "+mi_personaje.nombre+" es de: "+vida_total)
        }

        alert("Su turno")
    }
    
    if (vida_total <= 0){
        alert("El guerrero te ha derrotado")
    }
    else if(vida_restante<=0){
        alert("El guerrero ha sido derrotado")
    }

}