//SPDX License-Identifier:MIT

pragma solidity >=0.6.0 <0.9.0;

contract token{

string name ="SSSS";

string symbol ="D";

uint totalSupply =100000;
address public owner;
mapping(address=>uint ) public balances;
constructor(){
balances[msg.sender] =totalSupply;

}
function transfer(address to , uint amount) external {
    require(balances[msg.sender] >=amount,"not enough token");
 balances[msg.sender] -=amount;
 balances[to] += amount;

}
function balanceOf(address account)  public view returns(uint){

return balances[account];

}

}