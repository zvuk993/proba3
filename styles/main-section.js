
/** 
// OVO JE SA NE ZATVARANJEM PRETHODNOGZ
// JavaScript code for toggling accordion sections
const accordionHeaders = document.querySelectorAll('.accordion-menu-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle('active');
  });
});

**/

/** 
// OVO JE SA ZATVARANJEM PRETHODNOG HEADERA
const accordionHeaders = document.querySelectorAll('.accordion-menu-header');
const accordionItems = document.querySelectorAll('.accordion-menu-item');

accordionHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    accordionItems.forEach((item, itemIndex) => {
      if (itemIndex !== index) {
        item.classList.remove('active');
      }
    });

    const accordionItem = header.parentElement;
    accordionItem.classList.toggle('active');
  });
});
**/
