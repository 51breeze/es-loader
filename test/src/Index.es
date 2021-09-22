package;

import Person;
class Index{
    constructor(){

       const d = new EventDispatcher(window);

        d.addEventListener('DEVELOPMENT_HOT_UPDATE',(e)=>{

             // e.stopImmediatePropagation();

            console.log("===Index==DEVELOPMENT_HOT_UPDATE=");
          
        });
        
    }
    start(){
        console.log("===Hello word=== 666===");
         var person = new Person();
         person.start();

    }
}

import Index;
const index = new Index();
index.start();