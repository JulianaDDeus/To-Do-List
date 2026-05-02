function addItem() {
    const item = document.getElementById('inputItem').value;

    const obj = {
        item: item,
        status: 'pendente'
    }
    
    let listas = JSON.parse(localStorage.getItem("listas")) || [];

    listas.push(obj);

    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

function printItem(){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    for(let i = 0; i < listas.length; i++){
        const container = document.getElementById('lista');
        const novoItem = document.createElement('div');
        const texto = document.createElement('p');
        const btnExcluir = document.createElement('button');
        const btnFeito = document.createElement('button');
        btnFeito.textContent = 'Feito';
        btnFeito.onclick = () => marcarFeito(i);
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirItem(i);
        texto.textContent = listas[i].item;
        if(i % 2 == 0){
            novoItem.className = 'itemPar';
        }else{
            novoItem.className = 'itemImpar';
        }
        if(listas[i].status == 'feito'){
            novoItem.className = 'itemFeito';
        }
        texto.className = 'item';
        novoItem.id = 'item' + i;
        novoItem.appendChild(texto);
        novoItem.appendChild(btnExcluir);
        novoItem.appendChild(btnFeito);
        container.appendChild(novoItem);
    }
}

function excluirItem(x){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    listas.splice(x, 1);
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

function marcarFeito(x){
    const listas = JSON.parse(localStorage.getItem("listas")) || [];
    listas[x].status = 'feito';
    localStorage.setItem("listas", JSON.stringify(listas));
    window.location.reload();
}

printItem();