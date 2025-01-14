

function generateNumber() {

    const min = Math.ceil (document.querySelector('.x').value)
    const max = Math.floor(document.querySelector('.y').value)

    if(max > min){
        const result = Math.floor(Math.random() * (max - min ) + 1)+min;
    
        alert(result)
        
    }else{
        alert("O valor minimo tem que ser menor que o valor maximo")
    }
    
    

}