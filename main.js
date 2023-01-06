var zoom = 1.5,
    root = document.documentElement

window.addEventListener('mousemove', function(e){
  var x = e.clientX,
      y = e.clientY      

  root.style.setProperty('--mask-x', x + 'px')
  root.style.setProperty('--mask-y', y + 'px')  
})

window.addEventListener('wheel', function(e) {
  console.log(e.deltaY)
  if(e.deltaY > 0 && zoom > 1) {
    zoom = zoom - .25
  }
  if(e.deltaY < 0 && zoom < 3) {
    zoom = zoom + .25
  }
 
  root.style.setProperty('--zoom', zoom)  
})