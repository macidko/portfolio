"use strict"
const butonItems = [['<h1>Portfolio</h1>'], ['<h1>Skills</h1><div class="skillsRow"><table><tr><td><i class="fa-brands fa-html5"></i> HTML5</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-square-js"></i> CSS3</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-square-js"></i> Javascript</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-q"></i> jQuery</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-react"></i> React.js</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-database"></i> SQL</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-bootstrap"></i> Bootstrap</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-paintbrush"></i> Photoshop</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr></table><table><tr><td><i class="fa-brands fa-git-alt"></i> Git</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-terminal"></i> Bash</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-figma"></i> Figma</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-rocket"></i> Zeplin</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-sass"></i> Sass</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-file-code"></i> XML</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-file-lines"></i> JSON</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-ethernet"></i> API</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr></table>'], ["<h1>Seremkoy</h1>"], ["<h1>Proje 3</h1>"], ["<h1>Proje 4</h1>"]]
const buttonList = document.querySelectorAll(".cont1 ul button")
buttonList.forEach((element, index) => {
    console.log(butonItems[index][0])
    element.addEventListener("click", () => {
        const header = document.querySelector(".cont2 h1"),
            content = document.querySelector(".cont2")
            content.innerHTML = butonItems[index][0]
    })
})

const circleXmarkClass = document.querySelectorAll(".fa-circle-xmark").length
let denee = document.getElementById("denee")
        .classList.remove('fa-grip-lines')
        document.getElementById("denee")
        document.getElementById("denee").classList.remove('fa-circle-xmark')
        
          
(circleXmarkClass === 0 ?  (denee.classList.add('fa-circle-xmark'),denee.classList.remove('fa-grip-lines')) :  (denee.classList.add('fa-grip-lines'), denee.classList.remove('fa-circle-xmark')))