
function myFunction() {
document.getElementById('demo3').style. fontSize='35px';
document.getElementById("demo3").innerHTML = "Cambió con JS Externo a color ROJO y a 35px";
document.getElementById("demo3").style.color = "red";
}

 function aumentar(){
    document.getElementById('demo2').style.fontSize='35px';
    document.getElementById('demo2').style.color = 'red';

}
function toggleImage() {
    const image = document.getElementById('myImage2');
    image.src = (image.src.includes('frente.avif')) ? 'atras.jpg' : 'frente.avif';
}