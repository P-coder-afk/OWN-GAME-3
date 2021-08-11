class Player
{
    constructor() {
		this.x = 99;
		this.y=589;
		this.spt=createSprite(this.x,this.y, 100,50);
		this.spt.shapeColor="blue";
		this.spt.addAnimation("mario",marioAnimation1);
		this.spt.scale=0.9;
		this.spt.setCollider("rectangle",0,0,90,70);
		
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+1;
	}

	moveLeft()
	{ 
		this.spt.x=this.spt.x-26;
	}

	moveRight()
	{ 
		this.spt.x=this.spt.x+26;
	}

	jump()
	{ 
		this.spt.velocityY=-21;
    }
	
}





















