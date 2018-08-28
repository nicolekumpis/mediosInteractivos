var tri = 0
var todo = 15
function setup() {
  createCanvas(360, 360);
  background(255,251,248)
  noStroke()
  fill(0,0,0)
  //primer cuadrado
  //primera fila
  triangle(tri,0,0,todo,15,0)
  tri = 45
  triangle(tri,0,45,todo,60,0)
  tri = 60
  triangle(tri,0,60,todo,75,0)
  tri = 105 
  triangle(tri,0,105,todo,120,0)
  
  tri = 30
  triangle(tri,0,30,todo,15,todo)
  tri = 45
  triangle(tri,0,45,todo,30,todo)
  tri = 90 
  triangle(tri,0,90,todo,75,todo)
  tri = 105
  triangle(tri,0,105,todo,90,todo)
  
  //segunda linea 
  tri = 0
  todo = 30
  triangle(tri,15,0,todo,15,15)
  tri = 15
  triangle(tri,15,15,todo,30,15)
  tri = 60,
  triangle(tri,15,60,todo,75,15)
  tri = 75
  triangle(tri,15,75,todo,90,15)
  
  tri = 60
  triangle(tri,15,45,todo,60,todo)
  tri = 45
  triangle(tri,15,30,todo,45,todo)
  tri = 105
  triangle(tri,15,90,todo,105,todo)
  tri = 120
  triangle(tri,15,105,todo,120,todo)
  
//tercera fila
  tri = 15
  todo = 45
  triangle(tri,30,0,todo,15,todo)
  tri = 60
  triangle(tri,30,45,todo,60,todo)
  tri = 75
  triangle(tri,30,60,todo,75,todo)
  tri = 120
  triangle(tri,30,105,todo,120,todo)
  
  tri = 15
  triangle(tri,30,15,todo,30,30)
  tri = 30
  triangle(tri,30,30,todo,45,30)
  tri = 75
  triangle(tri,30,75,todo,90,30)
  tri = 90
  triangle(tri,30,90,todo,105,30)
  
  //cuarta fila
  tri = 15
  todo = 60
  triangle(tri,45,0,todo,15,todo)
  tri = 30
  triangle(tri,45,15,todo,30,todo)
  tri = 75
  triangle(tri,45,60,todo,75,todo)
  tri = 90
  triangle(tri,45,75,todo,90,todo)
  
  tri = 30
  triangle(tri,45,30,todo,45,45)
  tri =45
  triangle(tri,45,45,todo,60,45)
  tri = 90
  triangle(tri,45,90,todo,105,45)
  tri = 105
  triangle(tri,45,105,todo,120,45)
  
  //quinta fila
  tri = 0
  todo = 75
  triangle(tri,60,0,todo,15,60)
  tri = 45
  triangle(tri,60,45,todo,60,60)
  tri = 60
  triangle(tri,60,60,todo,75,60)
  tri = 105 
  triangle(tri,60,105,todo,120,60)
  
  tri = 30
  triangle(tri,60,30,todo,15,todo)
  tri = 45
  triangle(tri,60,45,todo,30,todo)
  tri = 90 
  triangle(tri,60,90,todo,75,todo)
  tri = 105
  triangle(tri,60,105,todo,90,todo)
  
  //sexta fila
  tri = 0
  todo = 90
  triangle(tri,75,0,todo,15,75)
  tri = 15
  triangle(tri,75,15,todo,30,75)
  tri = 60,
  triangle(tri,75,60,todo,75,75)
  tri = 75
  triangle(tri,75,75,todo,90,75)
  
  tri = 60
  triangle(tri,75,45,todo,60,todo)
  tri = 45
  triangle(tri,75,30,todo,45,todo)
  tri = 105
  triangle(tri,75,90,todo,105,todo)
  tri = 120
  triangle(tri,75,105,todo,120,todo)
  
  //septima fila
  tri = 15
  todo = 105
  triangle(tri,90,0,todo,15,todo)
  tri = 60
  triangle(tri,90,45,todo,60,todo)
  tri = 75
  triangle(tri,90,60,todo,75,todo)
  tri = 120
  triangle(tri,90,105,todo,120,todo)
  
  tri = 15
  triangle(tri,90,15,todo,30,90)
  tri = 30
  triangle(tri,90,30,todo,45,90)
  tri = 75
  triangle(tri,90,75,todo,90,90)
  tri = 90
  triangle(tri,90,90,todo,105,90)
  
  //octaba fila 
  tri = 15
  todo = 120
  triangle(tri,105,0,todo,15,todo)
  tri = 30
  triangle(tri,105,15,todo,30,todo)
  tri = 75
  triangle(tri,105,60,todo,75,todo)
  tri = 90
  triangle(tri,105,75,todo,90,todo)
  
  tri = 30
  triangle(tri,105,30,todo,45,105)
  tri =45
  triangle(tri,105,45,todo,60,105)
  tri = 90
  triangle(tri,105,90,todo,105,105)
  tri = 105
  triangle(tri,105,105,todo,120,105)
  
  //segundo cuadrado
  //primera fila
  tri = 0
  todo = 135
  triangle(tri,120,0,todo,15,todo)
  tri = 15
  triangle(tri,120,15,todo,30,todo)
  tri = 60
  triangle(tri,120,60,todo,75,todo)
  tri = 75
  triangle(tri,120,75,todo,90,todo)
  
  tri = 45
  triangle(tri,120,45,todo,30,120)
  tri =  60
  triangle(tri,120,60,todo,45,120)
  tri = 105
  triangle(tri,120,105,todo,90,120)
  tri = 120
  triangle(tri,120,120,todo,105,120)
  
  //segunda fila
  tri = 0
  todo = 150
  triangle(tri,135,0,todo,15,todo)
  tri = 45
  triangle(tri,135,45,todo,60,todo)
  tri = 60
  triangle(tri,135,60,todo,75,todo)
  tri = 105
  triangle(tri,135,105,todo,120,todo)
 
  
  tri = 30
  triangle(tri,135,30,todo,15,135)
  tri = 45
  triangle(tri,135,45,todo,30,135)
  tri = 90
  triangle(tri,135,90,todo,75,135)
  tri = 105
  triangle(tri,135,105,todo,90,135)
  
  //tercera fila
  tri = 30
  todo = 165
  triangle(tri,150,30,todo,45,todo)
  tri = 45
  triangle(tri,150,45,todo,60,todo)
  tri = 90
  triangle(tri,150,90,todo,105,todo)
  tri = 105
  triangle(tri,150,105,todo,120,todo)
  
  tri = 15
  triangle(tri,150,15,todo,0,150)
  tri = 30
  triangle(tri,150,30,todo,15,150)
  tri = 75
  triangle(tri,150,75,todo,60,150)
  tri = 90
  triangle(tri,150,90,todo,75,150)
  
  //cuarta fila
  tri = 15
  todo = 180
  triangle(tri,165,15,todo,30,todo)
  tri = 30
  triangle(tri,165,30,todo,45,todo)
  tri = 75
  triangle(tri,165,75,todo,90,todo)
  tri = 90
  triangle(tri,165,90,todo,105,todo)
  
  tri = 15
  triangle(tri,165,15,todo,0,165)
  tri = 60
  triangle(tri,165,60,todo,45,165)
  tri = 75
  triangle(tri,165,75,todo,60,165)
  tri = 120
  triangle(tri,165,120,todo,105,165)
  
  //quinta fila
  tri = 0
  todo = 195
  triangle(tri,180,0,todo,15,todo)
  tri = 15
  triangle(tri,180,15,todo,30,todo)
  tri = 60
  triangle(tri,180,60,todo,75,todo)
  tri = 75
  triangle(tri,180,75,todo,90,todo)
  
  tri = 45
  triangle(tri,180,45,todo,30,180)
  tri =  60
  triangle(tri,180,60,todo,45,180)
  tri = 105
  triangle(tri,180,105,todo,90,180)
  tri = 120
  triangle(tri,180,120,todo,105,180)
  
  //sexta fila
  tri = 0
  todo = 210
  triangle(tri,195,0,todo,15,todo)
  tri = 45
  triangle(tri,195,45,todo,60,todo)
  tri = 60
  triangle(tri,195,60,todo,75,todo)
  tri = 105
  triangle(tri,195,105,todo,120,todo)
 
  
  tri = 30
  triangle(tri,195,30,todo,15,195)
  tri = 45
  triangle(tri,195,45,todo,30,195)
  tri = 90
  triangle(tri,195,90,todo,75,195)
  tri = 105
  triangle(tri,195,105,todo,90,195)
 
  
  //septima fila
  tri = 30
  todo = 225
  triangle(tri,210,30,todo,45,todo)
  tri = 45
  triangle(tri,210,45,todo,60,todo)
  tri = 90
  triangle(tri,210,90,todo,105,todo)
  tri = 105
  triangle(tri,210,105,todo,120,todo)
  
  tri = 15
  triangle(tri,210,15,todo,0,210)
  tri = 30
  triangle(tri,210,30,todo,15,210)
  tri = 75
  triangle(tri,210,75,todo,60,210)
  tri = 90
  triangle(tri,210,90,todo,75,210)
  
  //octava fila
  tri = 15
  todo = 240
  triangle(tri,225,15,todo,30,todo)
  tri = 30
  triangle(tri,225,30,todo,45,todo)
  tri = 75
  triangle(tri,225,75,todo,90,todo)
  tri = 90
  triangle(tri,225,90,todo,105,todo)
  
  tri = 15
  triangle(tri,225,15,todo,0,225)
  tri = 60
  triangle(tri,225,60,todo,45,225)
  tri = 75
  triangle(tri,225,75,todo,60,225)
  tri = 120
  triangle(tri,225,120,todo,105,225)
  
  
  //tercer cuadrado
  fill(255,198,63)
  
  //primera fila
  tri = 120
  todo = 15
  triangle(tri,0,120,todo,135,todo)
  tri = 165
  triangle(tri,0,165,todo,180,todo)
  tri = 180
  triangle(tri,0,180,todo,195,todo)
  tri = 225
  triangle(tri,0,225,todo,240,todo)
  
  tri = 150
  triangle(tri,0,150,todo,135,0)
  tri = 165
  triangle(tri,0,164,todo,150,0)
  tri = 210
  triangle(tri,0,210,todo,195,0)
  tri = 225
  triangle(tri,0,225,todo,210,0)
  
  //segunda fila
  tri = 150
  todo = 30
  triangle(tri,15,150,todo,165,todo)
  tri = 165
  triangle(tri,15,165,todo,180,todo)
  tri = 210
  triangle(tri,15,210,todo,225,todo)
  tri = 225
  triangle(tri,15,225,todo,240,todo)
  
  tri = 135
  triangle(tri,15,135,todo,120,15)
  tri = 150
  triangle(tri,15,150,todo,135,15)
  tri = 195
  triangle(tri,15,195,todo,180,15)
  tri = 210
  triangle(tri,15,210,todo,195,15)
  
  
  //tercera fila
  tri = 135
  todo = 45
  triangle(tri,30,135,todo,150,todo)
  tri = 150
  triangle(tri,30,150,todo,165,todo)
  tri = 195
  triangle(tri,30,195,todo,210,todo)
  tri = 210
  triangle(tri,30,210,todo,225,todo)
  
  tri = 135
  triangle(tri,30,135,todo,120,30)
  tri = 180
  triangle(tri,30,180,todo,165,30)
  tri = 195
  triangle(tri,30,195,todo,180,30)
  tri = 240
  triangle(tri,30,240,todo,225,30)
  
  //cuarta fila
  tri = 120
  todo = 60
  triangle(tri,45,120,todo,135,todo)
  tri = 135
  triangle(tri,45,135,todo,150,todo)
  tri = 180
  triangle(tri,45,180,todo,195,todo)
  tri = 195
  triangle(tri,45,195,todo,210,todo)
  
  tri = 165
  triangle(tri,45,165,todo,150,45)
  tri =  180
  triangle(tri,45,180,todo,165,45)
  tri = 225
  triangle(tri,45,225,todo,210,45)
  tri = 240
  triangle(tri,45,240,todo,225,45)
  
  //quinta fila
  tri = 120
  todo = 75
  triangle(tri,60,120,todo,135,todo)
  tri = 165
  triangle(tri,60,165,todo,180,todo)
  tri = 180
  triangle(tri,60,180,todo,195,todo)
  tri = 225
  triangle(tri,60,225,todo,240,todo)
  
  tri = 150
  triangle(tri,60,150,todo,135,60)
  tri = 165
  triangle(tri,60,164,todo,150,60)
  tri = 210
  triangle(tri,60,210,todo,195,60)
  tri = 225
  triangle(tri,60,225,todo,210,60)
  
  //sexta fila
  tri = 150
  todo = 90
  triangle(tri,75,150,todo,165,todo)
  tri = 165
  triangle(tri,75,165,todo,180,todo)
  tri = 210
  triangle(tri,75,210,todo,225,todo)
  tri = 225
  triangle(tri,75,225,todo,240,todo)
  
  tri = 135
  triangle(tri,75,135,todo,120,75)
  tri = 150
  triangle(tri,75,150,todo,135,75)
  tri = 195
  triangle(tri,75,195,todo,180,75)
  tri = 210
  triangle(tri,75,210,todo,195,75)
  
  //septima fila
  tri = 135
  todo = 105
  triangle(tri,90,135,todo,150,todo)
  tri = 150
  triangle(tri,90,150,todo,165,todo)
  tri = 195
  triangle(tri,90,195,todo,210,todo)
  tri = 210
  triangle(tri,90,210,todo,225,todo)
  
  tri = 135
  triangle(tri,90,135,todo,120,90)
  tri = 180
  triangle(tri,90,180,todo,165,90)
  tri = 195
  triangle(tri,90,195,todo,180,90)
  tri = 240
  triangle(tri,90,240,todo,225,90)
  
  //octava fila
  tri = 120
  todo = 120
  triangle(tri,105,120,todo,135,todo)
  tri = 135
  triangle(tri,105,135,todo,150,todo)
  tri = 180
  triangle(tri,105,180,todo,195,todo)
  tri = 195
  triangle(tri,105,195,todo,210,todo)
  
  tri = 165
  triangle(tri,105,165,todo,150,105)
  tri =  180
  triangle(tri,105,180,todo,165,105)
  tri = 225
  triangle(tri,105,225,todo,210,105)
  tri = 240
  triangle(tri,105,240,todo,225,105)

  
  //cuarto cuadrado
  //primera fila
  tri = 135
  todo = 135
  triangle(tri,120,120,todo,135,todo)
  tri = 150
  triangle(tri,120,135,todo,150,todo)
  tri = 195
  triangle(tri,120,180,todo,195,todo)
  tri = 210
  triangle(tri,120,195,todo,210,todo)
  
  tri = 150
  triangle(tri,120,150,todo,165,120)
  tri =165
  triangle(tri,120,165,todo,180,120)
  tri = 210
  triangle(tri,120,210,todo,225,120)
  tri = 225
  triangle(tri,120,225,todo,240,120)
  
  //segunda fila 
  tri = 120
  todo = 150
  triangle(tri,135,120,todo,135,135)
  tri = 165
  triangle(tri,135,165,todo,180,135)
  tri = 180
  triangle(tri,135,180,todo,195,135)
  tri = 225
  triangle(tri,135,225,todo,240,135)
  
  tri = 150
  triangle(tri,135,150,todo,135,todo)
  tri = 165
  triangle(tri,135,165,todo,150,todo)
  tri = 210
  triangle(tri,135,210,todo,195,todo)
  tri = 225
  triangle(tri,135,225,todo,210,todo)
  
  //tercera fila
  tri = 120
  todo = 165
  triangle(tri,150,120,todo,135,150)
  tri = 135
  triangle(tri,150,135,todo,150,150)
  tri = 180
  triangle(tri,150,180,todo,195,150)
  tri = 195
  triangle(tri,150,195,todo,210,150)
  
  tri = 180
  triangle(tri,150,165,todo,180,todo)
  tri = 165
  triangle(tri,150,150,todo,165,todo)
  tri = 225
  triangle(tri,150,210,todo,225,todo)
  tri = 240
  triangle(tri,150,225,todo,240,todo)
  
  //cuarta fila
   tri = 135
  todo = 180
  triangle(tri,165,120,todo,135,todo)
  tri = 180
  triangle(tri,165,165,todo,180,todo)
  tri = 195
  triangle(tri,165,180,todo,195,todo)
  tri = 240
  triangle(tri,165,225,todo,240,todo)
  
  tri = 135
  triangle(tri,165,135,todo,150,165)
  tri = 150
  triangle(tri,165,150,todo,165,165)
  tri = 195
  triangle(tri,165,195,todo,210,165)
  tri = 210
  triangle(tri,165,210,todo,225,165)
  
  //quinta fila
  tri = 135
  todo = 195
  triangle(tri,180,120,todo,135,todo)
  tri = 150
  triangle(tri,180,135,todo,150,todo)
  tri = 195
  triangle(tri,180,180,todo,195,todo)
  tri = 210
  triangle(tri,180,195,todo,210,todo)
  
  tri = 150
  triangle(tri,180,150,todo,165,180)
  tri =165
  triangle(tri,180,165,todo,180,180)
  tri = 210
  triangle(tri,180,210,todo,225,180)
  tri = 225
  triangle(tri,180,225,todo,240,180)
  
  //sexta fila
  tri = 120
  todo = 210
  triangle(tri,195,120,todo,135,195)
  tri = 165
  triangle(tri,195,165,todo,180,195)
  tri = 180
  triangle(tri,195,180,todo,195,195)
  tri = 225
  triangle(tri,195,225,todo,240,195)
  
  tri = 150
  triangle(tri,195,150,todo,135,todo)
  tri = 165
  triangle(tri,195,165,todo,150,todo)
  tri = 210
  triangle(tri,195,210,todo,195,todo)
  tri = 225
  triangle(tri,195,225,todo,210,todo)
  
  //septima fila
  tri = 120
  todo = 225
  triangle(tri,210,120,todo,135,210)
  tri = 135
  triangle(tri,210,135,todo,150,210)
  tri = 180
  triangle(tri,210,180,todo,195,210)
  tri = 195
  triangle(tri,210,195,todo,210,210)
  
  tri = 180
  triangle(tri,210,165,todo,180,todo)
  tri = 165
  triangle(tri,210,150,todo,165,todo)
  tri = 225
  triangle(tri,210,210,todo,225,todo)
  tri = 240
  triangle(tri,210,225,todo,240,todo)
  
  //octava fila
  tri = 135
  todo = 240
  triangle(tri,225,120,todo,135,todo)
  tri = 180
  triangle(tri,225,165,todo,180,todo)
  tri = 195
  triangle(tri,225,180,todo,195,todo)
  tri = 240
  triangle(tri,225,225,todo,240,todo)
  
  tri = 135
  triangle(tri,225,135,todo,150,225)
  tri = 150
  triangle(tri,225,150,todo,165,225)
  tri = 195
  triangle(tri,225,195,todo,210,225)
  tri = 210
  triangle(tri,225,210,todo,225,225)
  
  
}

