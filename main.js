
function eyefactory(centerx , centery , r){
  return {
    center : {
      x : centerx ,
      y : centery,
    } ,
    r:r,
    draw(){
      drawCircle(this.center , this.r)
    }
  }
}

eyefactory(350,130,5).draw()
eyefactory(450,130,5).draw()
eyefactory(450,130,20).draw()
eyefactory(350,130,20).draw()
eyefactory(400,200,150).draw()
eyefactory(400,280,30).draw()

function nosefactory(centerxfirst,centeryfirst,centerxend,centeryend){
  return{
    centerfirst : {
      x: centerxfirst,
      y : centeryfirst,
    },
    centerend : {
      x: centerxend,
      y : centeryend,
    },
    draw(){
      drawLine(this.centerfirst , this.centerend)
    }
  }
}

nosefactory(400,180,420,230).draw()
nosefactory(390,230,420,230).draw()





