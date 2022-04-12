    const getBtn = document.getElementById('checkButton');
    getBtn.addEventListener('click',function getValue() {
    const FizzNum = parseFloat(document.getElementById('FizzNum').value);
    const BuzzNum = parseFloat(document.getElementById('BuzzNum').value);

if(FizzNum === '' || BuzzNum === '' ) {
    document.getElementById('error').textContent = '整数値を入力してください！'  ;
} else if(Number.isInteger(FizzNum) !== true && Number.isInteger(BuzzNum) !== true){

    document.getElementById('error').textContent = '整数値を入力してください！';
    document.getElementById('error_b').textContent = '整数値を入力してください！' ;

} else if(Number.isInteger(FizzNum) !== false  && Number.isInteger(BuzzNum) !== false){

    document.getElementById('error').textContent = '';
    document.getElementById('error_b').textContent = '';

    for(let i = 1; i < 100; i++){

        const ul1 = document. getElementById('menu');
        
    
    if( i % FizzNum === 0　&& i % BuzzNum === 0) {
        const newli = document.createElement('li');
        const Fizz_buzzlog ='FizzBuzz\b'+`${i}`;
        ul1.appendChild(newli).textContent= Fizz_buzzlog;

            }
        }
    }       
} );