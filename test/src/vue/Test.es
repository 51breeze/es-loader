package vue{

    import web.components.Component;
    import vue.Person;
    import web.ui.Select;
    import web.ui.SelectOption;
    import web.ui.Notification;
    import web.ui.MySelectOption;


    class Test extends Component{

        constructor( options ){
            super(options);
        }

        get name():string{
            return this.data<string>('name');
        }

        set name(value:string){
            this.data('name', value);
        }

        tips(){

            Notification({
                title: '提示成功',
                message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
            });

        }

        @override
        render(){

            return <div xmlns:slot="@slots" jsxns:bind="@binding">
                       <h5 onclick={this.tips}>点击这里提示</h5>
                        <Person name={this.name} >
                       
                            <Select value={this.data('name') as string} onchange={e=>this.data('name',e)}>
                                <MySelectOption value="深圳" />
                                <MySelectOption value="长沙" />
                            </Select>

                        </Person>
                </div>
        }

    }

} 