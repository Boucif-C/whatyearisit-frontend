fetch('https://whatyearisit-backend-eqvy.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log('ok')
    document.querySelector('#year').textContent=data.year;
})