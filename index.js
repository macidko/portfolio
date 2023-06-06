"use strict"

const butonItems = [['<section><h1 class="content-header">About</h1><p class="content-p">Hello, I\'m Eren. I graduated from Istanbul Gelisim University with a degree in "Computer Programming." After my internship, I chose to pursue a career in Front-End Development and worked in this field. My first professional experience was at a company called "WebInStats." There, I worked on Front-End tasks related to designing scenarios aimed at increasing the revenues of e-commerce websites. Later, I left the job to fulfill my military service obligation. After completing my military service, I attended the Front-End Education Program at Yildiz Technical University to enhance my skills. The program focused on JavaScript and React.js. Additionally, I gained familiarity with technologies such as APIs and JSON. As a result, I rekindled my passion for the Front-End field and I am currently seeking a job where I can further develop myself in this area.</p></section>'], ['<section><h1 class="content-header">Skills</h1><div class="skillsRow"><table><tr><td><i class="fa-brands fa-html5"></i> HTML5</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-square-js"></i> CSS3</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-square-js"></i> Javascript</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-q"></i> jQuery</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-react"></i> React.js</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-database"></i> SQL</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-bootstrap"></i> Bootstrap</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-paintbrush"></i> Photoshop</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr></table><table><tr><td><i class="fa-brands fa-git-alt"></i> Git</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-terminal"></i> Bash</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-figma"></i> Figma</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-rocket"></i> Zeplin</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-brands fa-sass"></i> Sass</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-file-code"></i> XML</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-file-lines"></i> JSON</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr><tr><td><i class="fa-solid fa-ethernet"></i> API</td><td class="tdProgress"><progress value="50" max="100"></progress></td></tr></table></section>'], ['<section><h1 class="content-header">Seremkoy</h1><p class="content-p">The Seremkoy website is a web platform that showcases weather and news updates, featuring widgets to track currency and stock prices. It also offers the convenience of adding and updating announcements without the need for an admin panel through seamless integration with Netlify and GitHub.</p><p class="content-p">Announcements are added using the "AutoPush" code mentioned below, triggering an automatic update on Netlify. This ensures that new announcements are instantly published every time the site is updated.</p><p class="content-p">The Seremkoy website assists users by providing up-to-date weather information, aiding them in their outdoor planning. Additionally, through the news section, visitors can stay informed about the latest news and developments. The currency and stock widgets enable users to track financial markets and observe real-time prices.</p><p class="content-p">The integration of Netlify and GitHub streamlines site management. There is no need for an admin panel to swiftly add or update announcements. This allows the site owner to automatically update the site with changes made in the GitHub repository and instantly publish new content.</p><p class="content-p">The automatic update process with the "AutoPush" code ensures the rapid and seamless addition of new announcements to the site. This way, users can access the most current content whenever they visit, while the site owner can easily manage the administration process.</p><p class="content-p"><a href="https://www.seremkoy.site" target="_blank">Click for Website</a></p><img src="img/project-seremkoy.png" alt="Project Seremkoy"></section><section><h1 class="content-header">RSS Updater</h1><p class="content-p">A BAT file is executed to invoke a JavaScript file, which prompts the user with questions and adds the user\'s input to a local RSS file. Subsequently, the local RSS file is replaced with the RSS file on the server. This allows for easy and fast addition of data to the website without the need for an admin panel.</p><p class="content-p"><a href="https://github.com/macidko/RSSupdater" target="_blank">Click For Source Code</a></p></section><section><h1 class="content-header">Auto Push</h1><p class="content-p">Unlike RSS Updater, this method doesn\'t modify the file on the server. Instead, it updates the local file and pushes it to the GitHub repository, triggering a Netlify build command to update the site. This approach can be used to add simple data to a site published with Netlify-GitHub integration.</p><p class="content-p"><a href="https://github.com/macidko/AutoPush" target="_blank">Click For Source Code</a></p></section>'], ["<h1>Proje 3</h1>"], ["<h1>Proje 4</h1>"]]

const buttonList = document.querySelectorAll(".cont1 ul button")
buttonList.forEach((element, index) => {
    console.log(butonItems[index][0])
    element.addEventListener("click", () => {
        const header = document.querySelector(".cont2 h1"),
            content = document.querySelector(".cont2")
        content.innerHTML = butonItems[index][0]
    })
})

// const circleXmarkClass = document.querySelectorAll(".fa-circle-xmark").length
// let denee = document.getElementById("denee")
//     .classList.remove('fa-grip-lines')
// document.getElementById("denee")
// document.getElementById("denee").classList.remove('fa-circle-xmark')


//     (circleXmarkClass === 0 ? (denee.classList.add('fa-circle-xmark'), denee.classList.remove('fa-grip-lines')) : (denee.classList.add('fa-grip-lines'), denee.classList.remove('fa-circle-xmark')))