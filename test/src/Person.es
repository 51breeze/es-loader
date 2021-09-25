package;
class Person{
    constructor(){

        document.addEventListener('DEVELOPMENT_HOT_UPDATE',(e)=>{
            if( System.getQualifiedClassName(e.moduleClass) === System.getQualifiedClassName(Home) ){
                e.stopImmediatePropagation();
                const newClass =  e.moduleClass as Home;
                const home = new newClass();
                home.start();
            }     
        });

    }
    start(){
        console.log("===Person==9999=======66666===66666=");
        console.log( @Provider(server.User, index) );

        const home = new Home();
        home.start();

    }
}
