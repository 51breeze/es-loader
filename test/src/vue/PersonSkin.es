<s:Component xmlns:s="web.components" xmlns:cmd="@directives" xmlns:slot="@slots">

   <script>

        constructor( options ){
            super(options);
        }

        @override
       beforeCreate(){
           console.log( this, "=====PersonSkin==beforeCreate====" )
       }
       @override
       mounted(){
          
           console.log( this, "===PersonSkin =mounted======" , this.slot() )
       }


      get name():string{
          var t = this as {$props:{name:string},_props:{name:string}, _data:{} }
          return this._name || t.$props.name;
      }
      private var _name:string = null;
      set name(value:string){
          this._name = value;
      }

      get list():string[]{
          return ['one','two','three','four','five']
      }

   </script>

    <div cmd:if="name" >1</div>
    <div cmd:elseif="name">2</div>
    <div cmd:else>3</div>
    
    <div cmd:foreach="list as item">
        <div>sssssssssss</div>
        <div class="ssss">
             <div>
                <span>
                    <slot:default />
                </span>
            </div>
        </div>
    </div>

    <div class="">
       <div>item =====PersonSkin====  {name} =====</div>
    </div>

    <slot:foot props={this.list}>
        <div>===============the is foot slot ==============</div>
    </slot:foot>

</s:Component>
