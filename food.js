class food
{
    
    constructor()
    {
        this.foodStalk=0
        this.lastFed
        this.image=loadImage('Milk.png')
        this.image.resize(2000,2000)
    

    }
    updateFoodStalk(foodStalk)
    {
        this.foodStalk=foodStalk
    }

    
    getFoodStalk(foodStalk)
    {
        return this.food_stalk


    }
    update()
    {

    }
    deductFoodStalk()
    {
        if (food_stalk>0)
        food_stalk--


    }
    display()
    {
         
    var x=80,y=100;
    image(this.image,220,200,20,20)
    
    imageMode(CENTER);
    if(this.foodStock!=0){
          for(var i=0;i>=this.foodStock;i++){
            if(i%10===0){
              x=80;
              y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
            console.log("display enterd")
        }
    }
        
    }
    washroom(a)
    {
        background(a)

    }
    bedroom(b)
    {
        background(b)

    }
    garden(c)
    {
        background(c)

    }

}

