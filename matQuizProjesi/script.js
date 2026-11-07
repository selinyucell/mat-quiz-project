const form = document.querySelector('.formEtiket');
const yuzdeDiv = document.querySelector('.yuzdeDiv');
const basariYuzdeSpan = document.querySelector('.basariYuzde');
const buttonSubmit = document.querySelector('.buttonSubmit');
const bravo = document.querySelector('.bravo');
const yanlisTekrar = document.querySelector('.yanlisTekrar');

const cevapAnahtari = ['8', '10', '3', '25'];

form.addEventListener('submit', e => {
    e.preventDefault();
    let puan = 0;
    const ogrenciCevap = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    ogrenciCevap.forEach((ogrenci, index) => {
        if (ogrenci === cevapAnahtari[index]) {
            puan += 25;
        }
    })
    if (puan == 100) {
        bravo.style.display = 'block';
        buttonSubmit.setAttribute('disabled','');
        yanlisTekrar.style.display ='none';
        buttonSubmit.value = 'Tebrikler';
    }
    else{
        yanlisTekrar.style.display ='block';
        buttonSubmit.value = 'Tekrar dene';
    }
    yuzdeDiv.style.display = 'flex';
    basariYuzdeSpan.textContent = `${puan}`;
    

    let score = 0;
    let animasyonScore = setInterval(() => {
        basariYuzdeSpan.textContent = `${score}`;
        if (score == puan) {
            clearInterval(animasyonScore);
        }
        else {
            score++;
        }
    }, 10)
});