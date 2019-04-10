document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector('.btn');
    let box = document.querySelector('.box');
    btn.addEventListener('click', function () {

        let n = document.querySelector('.form__input').value;

        function getNumbers(n) {
            var arr = [];
            for (var i = 0; i <= n; i++) {
                if (i == 0 || i == 1) {
                    arr.push(i);
                } else {
                    var a = arr[i - 1];
                    var b = arr[i - 2];
                    arr.push(a + b);
                }

            }
            return arr;
        };

        function map(arr) {
            arr.forEach((e,i) => {
                var newP=document.createElement('p');
                setTimeout(function () {
                    box.appendChild(newP).innerHTML=e;
                    box.classList.add('fibo');
                }, 3000*i);
            })
        }
        map(getNumbers(n));
    });
});