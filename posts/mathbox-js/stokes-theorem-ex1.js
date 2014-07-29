// Cartesian viewport
mathbox.viewport({
  type: 'cartesian',
  range: [[-10, 10], [-10, 10], [-10, 10]], 
  scale: [1, 1, 1],               
})

// Apply automatic 300ms fade in/out
mathbox.transition(300)

// Add XYZ axes
mathbox.axis({
  id: 'x-axis',
  axis: 0,
  color: 0xa0a0a0,
  ticks: 5,
  lineWidth: 2,
  size: .05,
  labels: true,
})
mathbox.axis({
  id: 'y-axis',
  axis: 1,
  color: 0xa0a0a0,
  ticks: 5,
  lineWidth: 2,
  size: .05,
  labels: true,
  zero: false,
})
mathbox.axis({
  id: 'z-axis',
  axis: 2,
  color: 0xa0a0a0,
  ticks: 5,
  lineWidth: 2,
  size: .05,
  zero: false,
  labels: true,
})
// Grid
// mathbox.grid({
//   id: 'my-grid',
//   axis: [0, 2],
//   color: 0xc0c0c0,
//   lineWidth: 1,
// })

//cylinder
mathbox.surface({
  n: [ 128, 128],                         
  domain: [[-4,4],[0, 2*Math.PI]],              
  data: null,                           
  expression: function (x,y) {    
    return [Math.cos(y),Math.sin(y),x];                            
  },
  shaded: true,
  opacity: .5,
  color: 0xB64926,                         
})
//plane
mathbox.surface({
  n: [ 128, 128],                         
  domain: [[-4,4],[-4,4]],              
  data: null,                            
  expression: function (x,y) {    
    return [x,y,-x-y];                            
  },
  shaded: true,
  color: 0x468966,                          
})