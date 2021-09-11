package;


class Home{
    constructor(){
     
        document.addEventListener('DEVELOPMENT_HOT_UPDATE',(e)=>{

            console.log(  "====DEVELOPMENT_HOT_UPDATE===Home======" )
            console.log(  e.newClass  );
            e.stopImmediatePropagation();

        });
    }
    start(){
        console.log("===Home===");

    }
}
