const btn = document.querySelector(".button");
const array = document.querySelector(".massive");
const minimum = document.querySelector(".min");
const maximum = document.querySelector(".max");
const avrg = document.querySelector(".average");
const sum = document.querySelector(".sum");
const multi = document.querySelector(".multi");


    btn.addEventListener("click", () => {
        let arr = [];
        for (i = 0; i <= 10; i++) {
            let massive = Math.floor((Math.random() - 0.5) * 20);
            arr.push(massive);
            array.innerHTML = arr;
        }
        
        let maxi = Math.max.apply(null, arr);
        maximum.innerHTML = maxi;

        let mini = Math.min.apply(null, arr);
        minimum.innerHTML = mini;

        let all = arr.reduce((total,amount) => total + amount);
        sum.innerHTML = all;

        let avrNum = all / arr.length;
        avrg.innerHTML = avrNum.toFixed(2);

        let mult = 1;
            for (let i of arr) {
                mult = mult * i;
                multi.innerHTML = Math.abs(mult);
            }

    }
    )
    