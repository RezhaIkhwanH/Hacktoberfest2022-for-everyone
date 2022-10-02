const canvas = document.querySelector('.game');
const carakter = document.querySelector('#carakter');
const skor = document.querySelector('.skor');
let skornilai = 0



//(
//perbedaan getClientRects dan getBoundingClientRect
// const carakterWidht1 = carakter.getClientRects()[0].width;
// const carakterWidht2 = carakter.getBoundingClientRect().width;
// console.log(carakterWidht1);
// console.log(carakterWidht2);
//)

function addBlock() {
    const block = document.createElement('div')
    block.setAttribute('id', 'block')
    canvas.appendChild(block);


    setTimeout(() => {
        block.remove()
    }, 2000);

}

setInterval(addBlock, 2000);

setInterval(() => {
    skornilai++;
    skor.innerHTML = skornilai;
    const block = document.querySelector('#block')
    const blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    const caraktertop = parseInt(window.getComputedStyle(carakter).getPropertyValue('top'));
    const carakterleft = parseInt(window.getComputedStyle(carakter).getPropertyValue('left'));
    const carakterWidht = carakter.getBoundingClientRect().width + carakterleft;
    // console.log(carakterWidht);


    if (blockleft < carakterWidht && blockleft > carakterleft && caraktertop >= 130) {


        block.style.animationPlayState = 'paused'




        let main = confirm('main lagi?' +
            'skor:' + skornilai);
        const allblock = document.querySelectorAll('#block');
        console.log(allblock);
        allblock.forEach(e => {
            e.remove()
        });


        if (main) {
            skornilai = 0;

            console.log(skornilai);
            block.style.animationPlayState = 'running'
        }

    }

}, 10);


function jum() {
    if (carakter.classList != 'jum') {
        carakter.classList.add('jum')
        setTimeout(() => {
            carakter.classList.remove('jum')
        }, 599);
    }

}

//////

// window.addEventListener('click', function (e) {
//     console.log("window " + window.getComputedStyle(block).getPropertyValue('top'));
//     console.log("window " + window.getComputedStyle(block).getPropertyValue('left'));
//     console.log("x" + e.offsetX);
//     console.log("y" + e.offsetY);
//     console.log("x page" + e.pageX);
//     console.log("y page" + e.pageY);
//     console.log("movent X" + e.movementX);
//     console.log("movent Y" + e.movementY);
//     console.log("screan X" + e.screenX);
//     console.log("screan Y" + e.screenY);
//     block.style.animationPlayState = 'paused'
//     console.log(caraktertop);
//     console.log(carakter.getBoundingClientRect());
//     console.log('<<<---->>>');
//     console.log(blockleft);
//     console.log(block.getBoundingClientRect());
// })