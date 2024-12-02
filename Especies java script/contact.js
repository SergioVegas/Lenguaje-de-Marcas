const form = document.querySelector("form");

let diverrores = document.getElementById("errores");

let cabecera= document.getElementById("cabecera");

cabecera.addEventListener("click",function () {

    cabecera.style.backgroundImage= 'url("https://wikimon.net/images/thumb/e/e5/Agumon_DA.JPG/300px-Agumon_DA.JPG")';
});

form.addEventListener("submit",function (event){
    event.preventDefault();
    ValidateForm (event);
});
window.addEventListener("scroll",function (){
 const cabecera=document.querySelector("header");
 const maxheight=500;
 let y=window.scrollY;

 let newHeight= maxheight -y;
 cabecera.style.height= newHeight +"px";
})

function ValidateForm(event)
{
    let valido = true;
    let errores = [];


    if (!document.getElementById("nom").value )
    {
        errores.push("Camp nom es obligatori, si us plau introdueïx un nom válid.");
        valido = false;
    }
    if (!document.getElementById("mail").value)
    {
        errores.push("Camp correu electrònic es obligatori, si us plau introdueïx un correu válid.");
        valido = false;
    }
    if (!document.getElementById("titol").value)
    {
        errores.push("Camp titol es obligatori, si us plau introdueïx un titul válid.");
        valido = false;
    }
    if (!document.getElementById("msg").value)
    {
        errores.push("El camp missatge esta buit.");
        valido = false;
    }
    if (window.scrollY>50)
    {}
    if(valido)
    {

        form.innerHTML="Formulario completado!";
        form.classList.toggle("exit")
    }
    else
    {

        pintaErrores(errores);
    }

}
function pintaErrores(errores)
{
    document.getElementById("coleccion").removeChild(diverrores);
    let coleccion = document.getElementById("coleccion");
    coleccion.innerHTML = "<div id='errores'></div>";
    diverrores =document.getElementById("errores");

    for (let error of errores)
    {
        diverrores.append(error);
        diverrores.appendChild(document.createElement("br"));
    }
}


