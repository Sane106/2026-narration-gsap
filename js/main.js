/*Imports ------------------------*/
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);





/* Animation premier block------------------ */
gsap.from("#movingBlock1",{
    x: "400px",
    rotation: 360,
    duration: 2,
    
})

/* Animation deuxieme block ------------------ */
gsap.from("#movingBlock2",
    

    {
        
    scrollTrigger:{
        trigger:"#section2",
        start:"top 50%",
        end:"top10",
        scrub:1,
        //markers:true,
        id:"section2",
        toogleActions: "play none reverse reset",
      
        
    },
    y: "50vh",
    rotation: 1200,
    duration: 2,
})

/*Animation troisieme bloc--- Timeline------------*/
let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
})

tl.to("#movingBlock3",{x:100,})
.to("#movingBlock3",{y:100,})
.to("#movingBlock3",{x:-100,})
.to("#movingBlock3",{y:-100,})

/*Animation troisieme bloc--- Draggable------------*/

Draggable.create(".deplace",{
   // type:"x",
   //type:"rotation",
   inertia:"true",
   dragResistance: 0.5,

})







