function addItem() {
    const item = document.getElementById('inputItem').value;
    
    let listas = JSON.parse(localStorage.getItem("listas")) || [];

    listas.push(item);

    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

function printItem(){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    for(let i = 0; i < listas.length; i++){
        const container = document.getElementById('lista');
        const novoItem = document.createElement('li');
        const texto = document.createElement('p');
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirItem(i);
        texto.textContent = listas[i];
        if(i % 2 == 0){
            novoItem.className = 'itemPar';
        }else{
            novoItem.className = 'itemImpar';
        }
        novoItem.appendChild(texto);
        novoItem.appendChild(btnExcluir);
        container.appendChild(novoItem);
    }
}

function excluirItem(x){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    listas.splice(x, 1);
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

printItem();