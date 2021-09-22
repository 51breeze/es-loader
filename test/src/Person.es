package;
class Person{
    constructor(){

        const d = new EventDispatcher(window);
        d.addEventListener('DEVELOPMENT_HOT_UPDATE',(e)=>{

            //e.stopImmediatePropagation();

            console.log("===Person==DEVELOPMENT_HOT_UPDATE====");
          
        });

        //  document.addEventListener('DEVELOPMENT_HOT_UPDATE',(e)=>{

        //      e.stopImmediatePropagation();

        //     console.log("===Person==DEVELOPMENT_HOT_UPDATE=");
        //     console.log( e.newClass );
        //     const newClass = e.newClass as Home;
        //      const home = new newClass();
        //      home.start();

        // });
        
    }
    start(){
        console.log("===Person==9999=======66666===66666=");
        console.log( @Provider(server.User, index) );

       

        new Home();



    }
}
