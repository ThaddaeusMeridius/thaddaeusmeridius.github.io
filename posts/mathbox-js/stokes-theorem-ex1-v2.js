// Viewport camera/setup
      mathbox
        // Projective viewport
        mathbox.viewport({
          type: 'cartesian',
          range: [[-10, 10], [-10, 10], [-10, 10]],
          scale: [1, 1, 1],
        })
        mathbox.camera({
          orbit: 6,
          phi: -τ/6,
          theta: 0.3,
        })
        .transition(300)

        // Axes
        mathbox.axis({
          id: 'a',
          axis: 0,
          color: 0xa0a0a0,
          ticks: 2,
          lineWidth: 2,
          size: .05,
          labels: true,
          offset: [0, -10, -10],
        })
        mathbox.axis({
          id: 'c',
          axis: 2,
          color: 0xa0a0a0,
          ticks: 2,
          lineWidth: 2,
          size: .05,
          zero: false,
          labels: true,
          offset: [-10, -10, 0],
        })
        mathbox.axis({
          id: 'd',
          axis: 1,
          offset: [10, 0, -10],
          ticks: 2,
          lineWidth: 2,
          color: 0xa0a0a0,
          labels: true,
          arrow: false,
        })


        .animate('camera', { orbit: 8, phi: τ*5/8 + .2 }, { delay: 500, duration: 5000 });

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
  n: [ 2, 2],                         
  domain: [[-4,4],[-4,4]],              
  data: null,                            
  expression: function (x,y) {    
    return [x,y,-x-y];                            
  },
  line: true,                   
})