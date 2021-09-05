<?php
namespace server;
require_once('server/ServerProvider.php');
use \server\ServerProvider;
/**
* @class User
* @inherit \server\ServerProvider
*/
class User extends ServerProvider{

	/**
	* @constructor User
	*/
	public function __construct(){
		parent::__construct();
	}

	/**
	* @method index
	*/
	public function index(){
		$this->success([1,9,9,9,9]);
	}
}