let money = 0;
let crops = [];
let plantPrice = 5;  // Preço para plantar alface

// Elementos da interface
const plantButton = document.getElementById("plantButton");
const cropsDiv = document.getElementById("crops");
const inventoryDiv = document.getElementById("inventory");
const moneyValue = document.getElementById("moneyValue");

// Função para plantar e adicionar uma alface à fazenda
plantButton.addEventListener("click", function () {
    if (money >= plantPrice) {
        money -= plantPrice;
        addCrop();
    } else {
        alert("Você não tem dinheiro suficiente para plantar!");
    }
});

// Função para adicionar uma nova alface à fazenda
function addCrop() {
    const crop = {
        name: "Alface",
        sellPrice: 10  // Preço de venda da alface no mercado
    };
    crops.push(crop);
    updateFarm();
    updateMoney();
}

// Função para atualizar a visualização das colheitas
function updateFarm() {
    cropsDiv.innerHTML = '';
    crops.forEach(crop => {
        const cropElement = document.createElement("div");
        cropElement.classList.add("crop");
        cropElement.innerText = crop.name;
        cropElement.addEventListener("click", function () {
            sellCrop(crop);
        });
        cropsDiv.appendChild(cropElement);
    });
}

// Função para vender uma colheita
function sellCrop(crop) {
    money += crop.sellPrice;
    const cropIndex = crops.indexOf(crop);
    if (cropIndex > -1) {
        crops.splice(cropIndex, 1);
    }
    updateFarm();
    updateMoney();
}

// Função para atualizar o valor do dinheiro na interface
function updateMoney() {
    moneyValue.innerText = money;
}

