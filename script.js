const container = document.getElementById("container");

function gridMaker(n = 16) {
    container.innerHTML = ''; 
    const itemSize = `calc(100% / ${n})`; 
    for (let i = 0; i < n * n; i++) {
        const div1 = document.createElement("div");
        div1.addEventListener('mouseover', () => {
            div1.classList.add('permanent-hover');
            const randomBetween = (min, max)=>min + Math.floor(Math.random()*(max-min+1));
            const r = randomBetween(0,255);
            const g = randomBetween(0,255);
            const b = randomBetween(0,255);
            const rgba = `rgb(${r},${g},${b})`;
            div1.style.backgroundColor=rgba; 
        });
        div1.style.flex = `0 0 ${itemSize}`; 
        container.append(div1);
    }
    
}

function changeLayout() {
    let k = window.prompt("Enter the number of squares per side for the new grid: ");
    k = Number(k);
    if (k > 0 && k<=100) {
        gridMaker(k);
    } 
    else {
        alert("Please enter a valid number");
    }
}

gridMaker();

