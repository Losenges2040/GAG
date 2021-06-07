class F0RM{
    constructor(){
    this.title = createElement('h1');
    this.button = createButton('h2');
    this.warning = createElement('h2');
    this.button2 = createButton('h2');
    this.lol = createElement('h2');
}

    hide(){
    this.title.visible = false
    this.button.visible = false
    this.warning.visible = false
    this.button2.visible = false
    this.lol.visible = false
}

    display(){ 
     this.title.html('ZOMBIE ATTAC');
     this.title.position(700,300);

     this.button.html('P L A Y');
     this.button.position(900,600);

     this.warning.html('WARNING : This Game Dosent Save lol. Good Luck');
     this.warning.position(700,700);

        this.button2.html(' S E T T I N G ','s');
         this.button2.position(700,800);

        this.button2.mousePressed(()=>{
        this.lol.html('LOL! U cant Edit The Settings . HAH find da controls ur self');
        this.lol.position(800,800);
      });
    
      this.button.mousePressed(()=>{
        this.button.hide();
        this.button2.hide();
        this.warning.hide();
        this.lol.hide();
        this.title.hide();
        GS = 1;

    });
     
    }
}
