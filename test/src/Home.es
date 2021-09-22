package;


class Home{
    constructor(){

        console.log("====666666==999996===99999999==")
        document.addEventListener('DEVELOPMENT_HOT_UPDATE',(e)=>{

            console.log(  "====DEVELOPMENT_HOT_UPDATE===Home======" )
            console.log(  e  );
            e.stopImmediatePropagation();

        });

        document.addEventListener('DEVELOPMENT_HOT_DISPOSE',(e)=>{

            console.log(  "====DEVELOPMENT_HOT_DISPOSE===Home=====66666=" )
            console.log(  e  );
            e.data={n:6666};
            e.stopImmediatePropagation();

        });

    }
    start(){
        console.log("===Home===");

    }
}
