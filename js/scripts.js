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

function parallaxINIT() {
  var scene = E('scene');

  var parallax = new Parallax(scene);
}

function photographyINT() {
  var button = E('photographyB'),
      photoCONTAINER = E('photography'),
      photos = cE('photo'),
      wrapper = E('homePAGE'),
      currIMG = false,
      interval = false,
      num = 0;

  photographyB.onclick = function() {
    addC(wrapper, 'photoACTIVE');
    interval = window.setInterval(function() {
      if (currIMG) { remC(currIMG, 'active'); }
      currIMG = photos[num];
      addC(currIMG, 'active');

      num++;
      if (num == photos.length) { num = 0; }

      wrapper.addEventListener('click', function click(event) {
        clearInterval(interval);
        remC(wrapper, 'photoACTIVE');
        wrapper.removeEventListener('click', click, false);
      }, false);

    }, 200);
  }
}

function engage() {
  switch (p.Current) {
    case 'homePAGE': parallaxINIT(); photographyINT(); break;
    case 'blogPAGE': menuINT(); pageTitleANIM(); break;
    case 'categoryPAGE': menuINT(); pageTitleANIM(); break;
    case 'projectsPAGE': menuINT(); pageTitleANIM(); break;
    case 'aboutPAGE': menuINT(); pageTitleANIM(); break;
    case 'demoPAGE': menuINT(); break;
    case 'postPAGE': menuINT(); break;
  }
}

window.onload = function() {
  getWindowDimensions();
  recCurrPage();
  engage();
}
