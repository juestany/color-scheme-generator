const colorsSection = document.querySelectorAll(".color")
const hexTextSection = document.querySelectorAll(".hex-text")

document.getElementById("btn").addEventListener("click", function(){
    let inputColor = document.getElementById("color-input").value
    let select = document.getElementById('select');
    let inputDropdown = select.options[select.selectedIndex].value;
    let colorsArr = []
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.slice(1)}&mode=${inputDropdown.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            for(let i=0; i < data.colors.length; i++){
                colorsArr.push(data.colors[i].hex.value)
            }
            
            for(let i=0; i < colorsArr.length; i++) {
                colorsSection[i].style.backgroundColor = colorsArr[i]
                hexTextSection[i].textContent = colorsArr[i]
            }
        })

})
