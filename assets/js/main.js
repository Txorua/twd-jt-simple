document.addEventListener('DOMContentLoaded', function (event) {
  // Is this browser sufficiently modern to continue?
  if (!('querySelector' in document && 'addEventListener' in window && 'getComputedStyle' in window)) {
    () => { return }
  }

  window.document.documentElement.className += ' enhanced'

  var nav = document.querySelector('.mainnav__nav')
  var navToggle = document.querySelector('.mainnav__hamburger')

  if (navToggle) {
    navToggle.addEventListener('click',
      function (e) {
        if (nav.className === 'mainnav__nav mainnav__nav--not-visible') {
          nav.className = 'mainnav__nav mainnav__nav--is-visible'
        } else {
          nav.className = 'mainnav__nav mainnav__nav--not-visible'
        }
        e.preventDefault()
      }, false)
  }
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/sw.js', { scope: '/' })
    .then(function (reg) {
      console.log(reg.installing)
    })
    .catch(function (err) {
      console.log('Service Worker installation failed. Error: ' + err)
    })
}
