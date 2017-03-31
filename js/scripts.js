////////////////////////////////////////////////////////////////////// Framework
//------------------------------------------------------------------------------
// Get a single DOM element by its id or multiple elements by class name
function E(id) { return document.getElementById(id); }
function cE(className) { return document.getElementsByClassName(className); }
// Dimensions of the inner window (width and height)
var w = {};
function getWindowDimensions() { w['Height'] = window.innerHeight; w['Width'] = window.innerWidth; }
// Record the current page according to the ID tagged onto the .wrapper div found on each page and store it in a hash
var p = {}; function recCurrPage() { p['Current'] = cE('wrapper')[0].id; }
// Add and Remove a class from an item
function addC(item, className) { item.classList.add(className) }
function remC(item, className) { item.classList.remove(className) }
// Adds and Removes a class with a time-delay
function delayAddC(item, className, delay) { var timeout = window.setTimeout(function() { addC(item, className); }, delay); }
function delayRemC(item, className, delay) { var timeout = window.setTimeout(function() { remC(item, className); }, delay); }
// Get attributes prefixed with 'data'
function gA(item, att) { return item.getAttribute('data-'+att+''); }
// Run a function within scriptInit.js using the global window object
function run(func, params) { window[func](params); }

//////////////////////////////////////////////////////////////////////// Scripts
//------------------------------------------------------------------------------
function pageTitleANIM() {
  var pageTitle = cE('page-title')[0];
  delayAddC(pageTitle, 'active', 150);
}

function menuINT() {
  var button = E('menuB'),
      menu = E('menu'),
      container = menu.getElementsByTagName('ul')[0],
      header = cE('menu-title')[0],
      stat = false;

  button.onclick = function() {
    if (!stat) {
      addC(button, 'active');
      addC(menu, 'active');
      delayAddC(container, 'active', 75);
      delayAddC(header, 'active', 150);
      stat = true;
    } else {
      remC(button, 'active');
      delayRemC(menu, 'active', 150);
      remC(header, 'active');
      remC(container, 'active');
      stat = false;
    }
  }
}

function engage() {
  menuINT();
  switch (p.Current) {
    case 'homePAGE': pageTitleANIM(); break;
    case 'aboutPAGE': pageTitleANIM(); break;
    case 'categoryPAGE': pageTitleANIM(); break;
  }
}

window.onload = function() {
  getWindowDimensions();
  recCurrPage();
  engage();
}
