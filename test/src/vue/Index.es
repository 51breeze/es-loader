package vue;

import vue.PersonSkin;
import vue.Test;
import web.Vue;

class Index{
    constructor(){   
    }
    start(){

        const p = new Test(null);
        p.name = "深圳2222";
        p.mount('#app');


        // new Vue({
        //     el:"#app",
        //     components:{PersonSkin,Person},
        //     data(){
        //         return {name:"深圳2222"}
        //     },
        //     updated(){
     
        //     },
        //     mounted(){
        //         setTimeout(()=>{

        //            var target = this as {name:string};
        //            target.name="深圳999999";

        //         }, 3000);
        //     },
        //     template:"<div>the is Vue <PersonSkin  :name='name' /> {{name}} <Person :name='name' /> </div>"
        // });

    }
}

import vue.Index;
const index = new Index();
index.start();