const club = document.querySelector('#Club');
const membership = document.querySelector('#Membership');
const privileges = document.querySelector('#Privileges');
const gallery = document.querySelector('#Photogallery');
const fill = document.querySelector('.q');

const aboutclub = document.querySelector('.discounts');
const aboutmembership = document.querySelector('.block-1');
const aboutprivileges = document.querySelector('.block-3');
const aboutgallery = document.querySelector('.galery');
const aboutfill = document.querySelector('.block-6');

// При клике на кнопку
club.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  aboutclub.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});
membership.addEventListener('click', e => {
    // Прокрутим страницу к форме 
    aboutmembership.scrollIntoView({ 
      block: 'nearest', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно 
    });
  });
  privileges.addEventListener('click', e => {
    // Прокрутим страницу к форме 
    aboutprivileges.scrollIntoView({ 
      block: 'nearest', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно 
    });
  });
  gallery.addEventListener('click', e => {
    // Прокрутим страницу к форме 
    aboutgallery.scrollIntoView({ 
      block: 'nearest', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно 
    });
  });
  fill.addEventListener('click', e => {
    // Прокрутим страницу к форме 
    aboutfill.scrollIntoView({ 
      block: 'nearest', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно 
    });
  });