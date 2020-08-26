 
/* -------------------------------------------------------------------------- */
//*                               Select Element                               */
/* -------------------------------------------------------------------------- */

let landingPage = document.querySelector(".landing-page");

/* -------------------------------------------------------------------------- */    
//*                             get array of Image                             */
/* -------------------------------------------------------------------------- */

let ArrayImg = [ "01.jpg", "02.jpg" , "03.jpg" , "04.jpg" , "05.jpg" , "06.jpg" ];

//* random backgrong option
let backgroundOption = true;

//* variable to controll the interval  (clear Interval to stop random background)
let backgroungInterval;

//* function to random IMGS
function randomImgs() {

    if(backgroundOption === true){
        
        backgroungInterval = setInterval(() => {

            //* ---------------------------- get random number --------------------------- */
            
                var randomNum = Math.floor(Math.random() * ArrayImg.length);
            
            //* ----------------------- change background image url ---------------------- */
            
                landingPage.style.backgroundImage = 'url("image/' + ArrayImg[randomNum] + '")';
            
            }, 10000);  
    }
};

randomImgs(); //* run the function 

//* -------------------------------- End Change Background Random------------------------------------------ */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* --------------------- start toggle spin class on icon -------------------- */
document.querySelector(".toggle-setting .fa-gear").onclick = function (){

    this.classList.toggle('fa-spin');

    document.querySelector('.setting-box').classList.toggle('opened');
};
/* ---------------------- end toggle spin class on icon --------------------- */

/* ----------------------- start apply color all page ----------------------- */
const colorList = document.querySelectorAll('.color-list li');

    //* loop on all list item
colorList.forEach(li => {

    li.addEventListener('click' , (e) => {

        console.log(e.target.dataset.color);

        //* set color in root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //* set color on local storage (refresh page)
        localStorage.setItem('color_option' , e.target.dataset.color );

        //* Remove Active Class From All Children
        e.target.parentElement.querySelectorAll('.active').forEach(elemenet => {

            elemenet.classList.remove('active');

        });

        //* add active class on self
        e.target.classList.add('active');
    });

});

/* -------------------------------------------------------------------------- */
//*              localStorage يخص the refresh page not lose DATA              */
/* -------------------------------------------------------------------------- */

let mainColor = localStorage.getItem('color_option');

if (mainColor !== null) {
    
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem('color_option'));

    //* Remove active class from all color list Item
    document.querySelectorAll('.color-list li').forEach(elemenet => {

        elemenet.classList.remove('active');

        //* add active class on elemenet with data-color === local storage item
        if(elemenet.dataset.color === mainColor){

            //* add active class
            elemenet.classList.add('active');
        } 

    });
}

/* ------------------------ end apple color all page ------------------------ */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//*                    start localStorage background_option                    */
/* -------------------------------------------------------------------------- */

//* chech if localStorage there is item background
let backgroungLocalStorage = localStorage.getItem('background_option');

//* check if random background localStorage is not Empty
if (backgroungLocalStorage !== null){

        console.log(typeof(backgroungLocalStorage));

     if(backgroungLocalStorage === 'true') {

        backgroundOption = true;

     } else {
        backgroundOption = false;
     }

     console.log(backgroungLocalStorage);

     //*  remove active class from all span
     document.querySelectorAll('.random-backgroung span').forEach(elememen => {

        elememen.classList.remove('active');

     });

     if (backgroungLocalStorage === 'true') {

         document.querySelector('.random-backgroung .yes').classList.add('active');
     } else {

        document.querySelector('.random-backgroung .no').classList.add('active');
     }
}

/* -------------------------------------------------------------------------- */
//*                     end localStorage background_option                     */
/* -------------------------------------------------------------------------- */

/* ---- start random background option apperance class active when click ---- */

const randomBack = document.querySelectorAll('.random-backgroung span');

//* loop on all span
randomBack.forEach(span => {

    span.addEventListener('click' , (e) => {

        //* remove active class from all childrens
        e.target.parentElement.querySelectorAll('.active').forEach(elemenet => {

            elemenet.classList.remove('active');
        });

        //* add active class on self 
        e.target.classList.add('active');

        //* run the function randomImgs();
        if (e.target.dataset.background === 'yes') {
            
            backgroundOption = true;
            randomImgs(); //* run the function random images
            //* when refreh window 
            localStorage.setItem('background_option', true);
        } 
        else 
        {
            backgroundOption = false;    
            clearInterval(backgroungInterval);
            //* when refresh window
            localStorage.setItem('background_option' , false); 
        }
    });

});

/* ---- end random background option apperance class active when click ---- */

/* ---------------------- start animate progress skills --------------------- */

let  ourSkills = document.querySelector('.skills');

    window.onscroll = function () {

        //* skill offset top (Height kl el page Lhd Ma Awsal 3and El Content)
        let skillOfsetTop = ourSkills.offsetTop;

        //* skill outer Hieght (Height the conent ely hanzl 3ndo)
        let skillOuterHeight = ourSkills.offsetHeight;

        //* Window Height
        let windowHeight = this.innerHeight;

        //* Scroll Top (when move my scroll)
        let windowScrollTop = this.pageYOffset;

        this.console.log( (skillOfsetTop + skillOuterHeight) - windowHeight);
        this.console.log( "skillOfsetTop " + skillOfsetTop);
        this.console.log( "skillOuterHeight " + skillOuterHeight);
        this.console.log( "windowHeight " + windowHeight);
        
        if(windowScrollTop > skillOuterHeight) {
        
            let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
            
            allSkills.forEach(skill => {

                skill.style.width =  skill.dataset.progress;
                
            });

        }

    };


/* ----------------------- end animate progress skills ---------------------- */

/* ------------------------ start department Gallery ------------------------ */
//* create Popup with the image 
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {

    img.addEventListener('click' , (e) => {

        //* create overlay elmenet
        let overlay = document.createElement('div');

        //* add class to overlay
        overlay.className = 'popup-overlay';

        //* append overlay to the body
        document.body.appendChild(overlay);

        //* create the popup box
        let popupBox = document.createElement('div');

        //* add class to the popup box
        popupBox.className = 'popup-box';

        //* apperance Name the image in UP
        if(img.alt !== null) {

                //* create heading 
                let imgHeading = document.createElement('h3');

                imgHeading.className = 'headingIMG';

                //* create text for heading
                let imgText = document.createTextNode(img.alt);

                //* append the text to the heading
                imgHeading.appendChild(imgText);

                //* append the heading to the popup box
                popupBox.appendChild(imgHeading); 
 
        } 

        //* create the image
        let popupImage = document.createElement('img');
        
        //* set image source
        popupImage.src = img.src;

        //* add image to popup box 
        popupBox.appendChild(popupImage);

        //* append the popup box to body
        document.body.appendChild(popupBox);

        //* create  the close span 
        let closeButton = document.createElement('span');

        //* create the close button text
        let closeButtonText = document.createTextNode('X');

        //* append button text to close span
        closeButton.appendChild(closeButtonText);

        //* add class to close button 
        closeButton.className = 'close-button';

        //* add close button to the popup box
        popupBox.appendChild(closeButton);
    });

});

/*
 * - Lw Ana create lemenet in page 3n tareq JS not can't access it 
 * - access it through the main page (document) 
 * - Lw 3awez ageb data 3n lemenet put elemenet function (e) => param
 * - e.tareget.parentNode =>  access parent this is elemenet    
 */
 
//* close the popup 
document.addEventListener('click' , function(e) {

    if(e.target.className == 'close-button') {

        //* remove the current popup
        e.target.parentNode.remove();

        //* remove overlay
        document.querySelector('.popup-overlay').remove();
    }
});
 

/* ------------------------ end department Gallery ------------------------ */

/* ------------------------- start department bullets --------------------------- */

//* select all bullets 
const allBullets = document.querySelectorAll('.nav-bullets .bullet');



//* select all links
const allLinks = document.querySelectorAll('.links a');


function scrollIntoViewOnSection(elemenet) {
    
    elemenet.forEach(ele => {

        ele.addEventListener('click' , (e) => {
            e.preventDefault(); 
            document.querySelector("." + e.target.dataset.section).scrollIntoView({
    
                behavior: "smooth"
    
            });
        });
    
    });
}

scrollIntoViewOnSection(allBullets); //* call the function 
scrollIntoViewOnSection(allLinks);  //* call the function 

/* ------------------------- end department bullets ------------------------- */

/* ---------------------- start setting option bullets ---------------------- */
let bulletsSetting = document.querySelectorAll('.bullets-option span');

let bulletsContainer = document.querySelector('.nav-bullets');

//* local storage for bullets
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    
    console.log("yes tis is bullets");
    bulletsSetting.forEach( span => {

        span.classList.remove("active");

    });

    if(bulletLocalItem === "block") {

        bulletsContainer.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");
    } 
    else {

        bulletsContainer.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");
    }

}  

bulletsSetting.forEach(span => {

    span.addEventListener('click' , (e) => {

        if(e.target.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option" , "block");

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option" , "none");
        }

        //* remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {

            ele.classList.remove("active");
        });

        //* add active class of self
        e.target.classList.add("active");

    });
});
/* ----------------------- end setting option bullets ----------------------- */

/* --------------------------- start option reset --------------------------- */
document.querySelector('.reset-options').onclick = function () {

    //* localstorage.clear();   // remove All data in local storage

    //* Remove cash data in localStorage 
    let arrayButton = ["color_option" , "bullets_option" , "background_option"];

    for(let item of arrayButton) {

        localStorage.removeItem(item);  //* remove only speciefic data
    }
    
    //* Reload Window
    window.location.reload();
    
};
/* ---------------------------- end option reset --------------------------- */
/* -------------------------------------------------------------------------- */
//* ------------------------------the end code JS----------------------------- */ 
//********* M  ******************************************************************//
//**************** O  ***********************************************************//
//********************* H  ******************************************************//
//**************************** A  ***********************************************//
//************************************ M  ***************************************//
//******************************************** E  *******************************//
//******************************************************* D ****/ */ */ */ */ */ */

/* ------------------------ start media query----------------------- */

//* toggle menu
let buttonToggle = document.querySelector('.toggle-menu');
let links = document.querySelector('.links');

buttonToggle.onclick = function(e) {

    //* stop propagation on toggile button
    e.stopPropagation();

    //* toggle class "menu-active" on button
    this.classList.toggle('menu-active');

    //* toggle class "open" on links
    links.classList.toggle('open');
};

//* click anywhere outside menu and toggle button => to remove  listmenu
document.addEventListener('click' , (e) => {

   //* console.log(e.target); => printe any item or elmenet when click

    if(e.target !== buttonToggle && e.target !== links) {
        
        //* check if menu is open
        if(links.classList.contains('open')) {
            
             //* toggle class "menu-active" on button
            buttonToggle.classList.toggle('menu-active');

            //* toggle class "open" on links
            links.classList.toggle('open');

        }
    }
});

//* stop propagation on menu
links.onclick = function(e) {

    e.stopPropagation();
};

/* ------------------------ end media query----------------------- */
