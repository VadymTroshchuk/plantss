// ====================== Burger Menu ====================== //
const mobNav = document.querySelector('.header-nav__mob');
const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger-line')
const body = document.body;
const overlay = document.querySelector('.overlay');
const mobNavLink = document.querySelector('.nav-list__item-link')


hamburger.addEventListener('click', showBurgerMenu); // activate burger menu functions  //
overlay.addEventListener('click' , hideBurgerMenu);
mobNav.addEventListener('click' , hideMenuLink);


function showBurgerMenu() { // toggle menu when click  burger //
  hamburger.removeEventListener('click', showBurgerMenu);
  hamburger.classList.toggle('active');
  hamburgerLine.forEach( (item) => {
    item.classList.toggle('active');
  })
  body.classList.toggle('lock');
  mobNav.classList.toggle('active');
  body.classList.toggle('active');
  overlay.classList.toggle('active'); 

  setTimeout(() => {
    hamburger.addEventListener('click', showBurgerMenu);
  }, 500);
}


function hideBurgerMenu() {   // Remove burger if burger was clicked // 
  hamburger.classList.remove('active');
  hamburgerLine.forEach( (item) => {
    item.classList.remove('active');
  })
  body.classList.remove('lock');
  mobNav.classList.remove('active');
  overlay.classList.remove('active');
 
 
};



function hideMenuLink(e){   // Remove menu if click one of menu links // 
 
  if (e.target.classList.contains('nav-list__item-link')) {
    hamburger.classList.remove('active');
    body.classList.remove('lock');
    mobNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.removeEventListener('click', showBurgerMenu);
    hamburgerLine.forEach( (item) => {
      item.classList.remove('active');
    })
    setTimeout(() => {
      hamburger.addEventListener('click', showBurgerMenu);
    }, 500);
  }
  
};


// ====================== SERVICE SECTION BUTTONS BLUR ====================== //

const buttonsService = document.querySelectorAll('.btn-service');
const cardsService = document.querySelectorAll('.card-container');



countActiveButtons(); // Activate functions //
addActiveClassButton();

function countActiveButtons (){

  let counterClickedButtons = 0;


  buttonsService.forEach((button , index ) => { // Iterate all buttons and check on each index if button contains active class //
    if(buttonsService[index].classList.contains('btn-service--active')){
  
  

      counterClickedButtons += 1;     // If true, then add +1 to the counter that calculates how many buttons possess active сlass // //
    } 
  })

  console.log(counterClickedButtons)
  return counterClickedButtons;
}



function addActiveClassButton(){
  



  buttonsService.forEach((button => {  // toggle active class for each button if button has been clicked  //
    button.addEventListener('click' , () => {
     
      button.classList.toggle('btn-service--active');


      if(countActiveButtons() === 0){   // if function counter return 0 iterate over each card and remove blur from all of them //
          
        cardsService.forEach((card) => {
          card.classList.remove('blur')
        })
      }
  
      if(countActiveButtons() === 3){ // if function counter return 3 then delete active class from remaining not active button
        button.classList.remove('btn-service--active');
        return;
      }

      if(countActiveButtons() > 0){ // if function counter return > 0 then start filter cards function
        filterCards();
      }
 

    } )
  }))
}


function filterCards(){

  buttonsService.forEach((button , indexBtn) => {  // Iterate over each buttons and each card 

      cardsService.forEach((card , indexCard) => {

      const btnGardens = button.dataset.project === 'gardens'; // Let's assign for each button and card element a data atribure so we can detect them
      const btnLawn = button.dataset.project === 'lawn';
      const btnPlanting = button.dataset.project === 'planting';
      const cardsGardens = card.dataset.project === 'gardens';
      const cardsLawn = card.dataset.project === 'lawn';
      const cardsPlanting = card.dataset.project === 'planting';


      if(button.classList.contains('btn-service--active')){ //if a particular button contains an active class, then we removing blur efect from the card corresponding to each button
        if(btnGardens){
          if(cardsGardens){
            card.classList.remove('blur')}
        }
            if (btnLawn){
              if(cardsLawn){
                card.classList.remove('blur')
              }
         }
         if(btnPlanting){
            if(cardsPlanting){
              card.classList.remove('blur')
            }
         }  
      }

      if(!button.classList.contains('btn-service--active')){ //if a particular button not contains an active class, then we adding blur efect to the card corresponding to each button
        if(btnGardens){
          if(cardsGardens){
            card.classList.add('blur')}
        }
            if (btnLawn){
              if(cardsLawn){
                card.classList.add('blur')}
         }
         if(btnPlanting){
            if(cardsPlanting){
              card.classList.add('blur')
            }
          }
      }
    })
  })

}

// ====================== Accordion Menu ====================== //


const btnAccordionContainer = document.querySelectorAll('.accordion-container')
const btnAccordion = document.querySelectorAll('.btn-price');
const btnAccordionContent = document.querySelectorAll('.accordion-btn__open-content');
const orderButton  = document.querySelectorAll('.order-button');


dropdown(btnAccordion , btnAccordionContent ); // adding addEventListener on each accordion btn and if btn was clicked toggle our classes
function dropdown(open, content){

	for (let indexBtn = 0; indexBtn < open.length; indexBtn++) { 
 
		open[indexBtn].addEventListener("click", function(){   //
			content[indexBtn].classList.toggle("accordion-content--active"); 
      open[indexBtn].classList.toggle("accordion-btn--active")
      open[indexBtn].classList.toggle("btn-price--arrow-active") 
			for (let indexBtnRemove = 0; indexBtnRemove < open.length; indexBtnRemove++) { // creating another loop that will iterate simultaneously with first loop and if not equal remove active classes from that variable
				if(indexBtn != indexBtnRemove){
					content[indexBtnRemove].classList.remove("accordion-content--active");
          open[indexBtnRemove].classList.remove("accordion-btn--active")
          open[indexBtnRemove].classList.remove("btn-price--arrow-active")
				}
			}
		});	
	}
}


orderButton.forEach((btn) => { 
  btn.addEventListener('click' , (e) => {
    document.location.href ='#contacts'
  })
})


// ====================== Drop Down Menu ====================== //

const contactsBtnMenu = document.querySelector('.contacts-btn')
const contactsListContainer = document.querySelector('.contacts-list__container')
const contactsListItems = document.querySelectorAll('.contacts-list__item')
const contactsListCardContainer = document.querySelector('.contacts-list__card-container')
const infoContentList  = document.querySelectorAll('.item-right') 

const city = document.getElementById('city');
const number = document.getElementById('number');
const adress = document.getElementById('adress');
const callButton = document.getElementById('call-button')
const contactsImage = document.getElementById('contacts-image');

ActivateDropMenu();
activateDropForm(); // Activate functions //
  function ActivateDropMenu(){
// Add listener for contacts btn and activate drop menu
  contactsBtnMenu.addEventListener('click' , (r) => {
      // if target contains open classes then remove them
    if(r.target = contactsBtnMenu.classList.contains('contacts-btn--open') && contactsListContainer.classList.contains('contacts-list__item--open')){
      contactsBtnMenu.classList.remove('contacts-btn--open')
      contactsImage.classList.remove('contacts-img--active')
      contactsListContainer.classList.remove('contacts-list__item--open')
      }
   
          // otherwise add active class
    else{
      contactsBtnMenu.classList.add('contacts-btn--open');
      contactsListContainer.classList.add("contacts-list__item--open")
      contactsImage.classList.add('contacts-img--active')
  
    }
    
       
  
    if(   contactsListContainer.classList.contains('contacts-list__item--open')){
      contactsListCardContainer.classList.remove('contacts-list__card-container--open')
      contactsBtnMenu.textContent = 'City'
    }
  
    
  })
}

function activateDropForm(){  //  Add listener for drop menu items

  contactsListItems.forEach((item , index) => {

    item.addEventListener(('click') , (e) => {

      infoContentList.forEach((infoItem , i) => { //  Iterate through drop down menu active form content 
    
      if(contactsListCardContainer.classList.contains('contacts-list__card-container--open')){  //  if click target contains open classes then remove them
        contactsListCardContainer.classList.remove  ('contacts-list__card-container--open')
      }
      
      if(e.target = item.dataset.list == 'canandaigua'){   //  Check if target equal to specific data-attributes       
        contactsBtnMenu.textContent = 'Canandaigua, NY' //  If true active drop down menu form content and remove drop down menu
        contactsListCardContainer.classList.toggle('contacts-list__card-container--open')
        contactsListContainer.classList.remove("contacts-list__item--open")
        city.textContent = 'Canandaigua, NY' //  then replacing there content depending on selected item   
        number.textContent = '+1	585	393 0001'
        adress.textContent = '151 Charlotte Street'
        callButton.href  = "tel:+1 585 393 0001"
      }
      if(e.target = item.dataset.list == 'newyork'){
        contactsBtnMenu.textContent = 'New York City'
        contactsListContainer.classList.remove("contacts-list__item--open")
        contactsListCardContainer.classList.toggle('contacts-list__card-container--open')
        city.textContent = 'New York'
        number.textContent = '+1	212	456 0002'
        adress.textContent = '9 East 91st Street'
        callButton.href = "tel:+1	212	456 0002"
      }
      if(e.target = item.dataset.list == 'yonkers'){
        contactsBtnMenu.textContent = 'Yonkers, NY'
        contactsListContainer.classList.remove("contacts-list__item--open")
        contactsListCardContainer.classList.toggle('contacts-list__card-container--open')
        city.textContent = 'Yonkers, NY'
        number.textContent = '+1	914	678 0003'
        adress.textContent = '511 Warburton Ave'
        callButton.href  = "tel:+1	914	678 0003"
      }
      if(e.target = item.dataset.list == 'sherrill'){
        contactsBtnMenu.textContent = 'Sherrill, NY'
        contactsListContainer.classList.remove("contacts-list__item--open")
        contactsListCardContainer.classList.toggle('contacts-list__card-container--open')
        city.textContent = 'Sherrill, NY'
        number.textContent = '+1	315	908 0004'
        adress.textContent = '14 WEST Noyes BLVD'
        callButton.href   = "tel:+1	315	908 0004"
      }
      })
    })
    
  })
  
}

window.addEventListener('click' , (f) => {
 
 if (!contactsBtnMenu.classList.contains('contacts-btn--open')){
    contactsBtnMenu.textContent = 'City'
  }
  
})





