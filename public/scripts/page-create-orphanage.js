//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);


//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

    let marker;

//create and add makers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]'), value = lat;
    document.querySelector('[name=lng]'), value = lng;

    //remover icon 

    marker && map.removeLayer(marker)

    //ad icon tileLayer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)


}) 
   


//adicionar campo de fotos
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    // container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verifica se o campo ta limpo se sim nao adiciona se nao adicionada
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }
    //limpar o campo antes de adicionar ao container de imagens
    
    input.value = ""

    // adicionar o cole ao container de imagem
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()

}

//select yes or no 
function toggleSelect(event) {
    //pegar o botao cliado
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
   // colocart a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o valarores do input hidden com o valor selocionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value


    
    
}

function validate(event) {

    //validae se lat e lng estao preenchidos
    const needslatAndLng = true;
    if(needslatAndLng){
        event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
    
}

