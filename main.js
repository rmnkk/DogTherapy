let img = document.querySelector('.dog-image')

function fetchDog() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(resultJson => img.src = resultJson.message)
}