
























 function bulbasaurControls(){
    if(keyCode === 81 && healthWidth2> 0 ){
        healthWidth2 = healthWidth2-Tackle.damage;
    }   
   
    if(keyCode === 87 && healthWidth2> 0 ){
if(healthWidth2-VWdmg < 0)
    healthWidth2 = 0

    if(keyCode === 69 && healthWidth2> 0 ){
        var RLdmg = Razorleaf.damage
        
        
    if(pokemon2.type == "Fire")
       RLdmg *= 0.5
       healthWidth2 = healthWidth2-RLdmg;

       if(healthWidth2-RLdmg< 0)
        healthWidth2 = 0

       
    }
    if(keyCode === 82 && healthWidth2> 0 ){
        healthWidth2 = healthWidth2-Takedown.damage;
        if(healthWidth2-Takedown.damage < 0)
        healthWidth2 = 0
    }
    
 }
}
 // if(pokemon2.type == "Fire") {
    //     VWdmg *= 0.5
    //     healthWidth2 = healthWidth2-VWdmg;
    // }
        
    

    //Vinewhip.damage = Vinewhip.damage*.5
    //
        
        // healthWidth2 = healthWidth2-Vinewhip.damage;
        // if(healthWidth2-Vinewhip.damage < 0)
        // healthWidth2 = 0

   











function charmanderControls(){
        //Charmander
  if(keyCode === 85 && healthWidth1> 0 ){
      healthWidth1 = healthWidth1-Scratch.damage;
  }   
  //
  if(keyCode === 73 && healthWidth1> 0 ) {
     var EBdmg = Ember.damage

   if(pokemon1.type == "Grass") 
      EBdmg = Ember.damage*1.5
      healthWidth1 = healthWidth1-EBdmg;
      if(healthWidth1-EBdmg < 0)
      healthWidth1 = 0


  } //
  if(keyCode === 79 && healthWidth1> 0 ){
      healthWidth1 = healthWidth1-Furyswipes.damage;
      if(healthWidth1-Furyswipes.damage < 0)
      healthWidth1 = 0
  }
  if(keyCode === 80 && healthWidth1> 0 ){
      healthWidth1 = healthWidth1-Dragonrage.damage;
      if(healthWidth1-Dragonrage.damage < 0)
      healthWidth1 = 0
  }
}
