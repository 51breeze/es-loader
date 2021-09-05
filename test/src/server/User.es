
package server;
import server.ServerProvider;
class User extends ServerProvider{

    @Get()
    index(){
        this.success([1,9,9,9,9]);
    }
}