
package server;
import server.ServerProvider;
class User extends ServerProvider{

    @Get()
    index(){
        this.success([1,6666,9999,99999, 66666666]);
    
        
    }
}