fetch('http://localhost:3000/year')
.then(response => response.json())
.then(data => {
    console.log('ok')
    document.querySelector('#year').textContent=data.year;
})