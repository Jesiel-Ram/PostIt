//variables de los objetos
let nonTitulo;
let nom2
let opciones;
let agregar;
let notas = [];
let contenedor;



//escuchar al navegador
window.addEventListener('load',inicializar,true);

//obtener los elementos del html que vamos a usar
function inicializar(){

	nonTitulo=document.getElementById('nom');
	nom2=document.getElementById('nom2');
	opciones=document.getElementById('opciones');
	agregar=document.getElementById('agregar');
	//puede traer clases, id, etiquetas
	//contenedor=document.querySelector('.contenedor')

	//escucha al botón
}
//agregar desde el botón
function addNota(){
//validaciíon con if
 if(nonTitulo.value!=""&&nom2.value!=""&&opciones.value!=""){
    
 	//contenedor innerS
    notas=document.querySelector(".contenedor") 
    notas.innerHTML+= 
           
           '<div class="nota '+opciones.value+'">'+  
              
              	'<input type="text" value="'+nonTitulo.value+'">'+
                
                '<textarea cols="50" rows="10">'+nom2.value+'</textarea>'+
                
                '<div class="borrar" onclick="borrar(this)">X</div>'+
            '</div>';
            
 	//vaciado de datos
    nonTitulo.value=""
    nom2.value=""
    opciones.value=""
	
	}
	//validación sino
    else{

        alert("Se necesita llenar todos los campos")
    }
}

//borrar los datos
function borrar(element){
    element.parentElement.remove()
}
