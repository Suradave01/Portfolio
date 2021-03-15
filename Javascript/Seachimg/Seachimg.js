
const searchimg = (Keyword, index) => {
    let Imgelem = document.createElement('img');
    Imgelem.src = `https://source.unsplash.com/400x255?${Keyword},${Keyword}&sig=${index}`

    let showimg = document.getElementById('gallery');
    showimg.appendChild(Imgelem);
}

const run = () => {
    removeFunc();
    let number = document.querySelector('#number').value;
    let text = document.getElementById('text').value;

    if(text != '' && number > 0) {
        for(i = 0; i < number; i++) {
            searchimg(text,i);
        }
    }
    else {
        alert('ใส่ข้อมูล')
    }
}




function removeFunc() {
    document.getElementById('gallery').innerHTML = '';
}
