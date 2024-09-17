const btn = document.getElementById('addItem');

btn.addEventListener('click', function(){
    const textBox = document.getElementById('text').value;
    const numberBox = parseFloat(document.getElementById('number').value);
    const oldPrice = document.getElementById('oldPrice')
    const price = parseFloat(oldPrice.innerText);
    
    //for empty click
    if(textBox === ''){
       return alert('Please Add Product and Price')
    }
    const newPrice = price + numberBox;
    oldPrice.innerText = newPrice.toFixed(0);

    const newItem = document.createElement('div');
    newItem.className = 'item';

    newItem.innerText = textBox+": "  + "$" + numberBox;
    const container = document.getElementById('showData');
    container.appendChild(newItem)

    document.getElementById('text').value = '';
    document.getElementById('number').value = '';

})



const cleanAll = document.getElementById('cleanItem');
cleanAll.addEventListener('click', function(){
    
    const container = document.getElementById('showData');
    container.innerHTML = '';

    const oldPrice = document.getElementById('oldPrice');
    oldPrice.innerText = '00';

    document.getElementById('text').value = '';
    document.getElementById('number').value = '';
    
    
})


// document.addEventListener('contextmenu', function(e){
//     e.preventDefault(e);
// }, false)