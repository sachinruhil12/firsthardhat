//SPDX License-Identifier:MIT

pragma solidity >0.6.0 <0.9.0;

contract erc20 {

uint _totalSupply;
string  public name ="sac";
string public  symbol = "ss";

address public owner;

event Transfer(address from, address to , uint amount);
event Approval(address owner, address spender, uint amount );

mapping(address=>uint) public balances;
mapping(address=>mapping(address=>uint)) public allowances;

function totalSupply() external view returns(uint) {
return _totalSupply;     
}
function balanceOf(address owner) external view returns(uint){
return balances[owner];

}

function approve(address spender, uint amount) external  returns(bool){
address owner = msg.sender;
_approve(owner, spender, amount);
return true;
}

function _approve(address owner, address spender, uint amount) internal{
require(owner !=address(0),"owner is not thre zero address");
require(spender !=address(0),"spender is not the nzero address");

allowances[owner][spender] = amount;
emit Approval(owner, spender, amount);

}

function transferFrom(address from ,address to, uint amount) external view returns(bool){
address spender =msg.sender;
_spendAllownace(from , to, amount);

return true;
}

function _spendAllownace(address from ,address to ,uint amount) internal{
    uint currentBalance = allowances(owner, spender);
    if(currentBalance !=type(uint).max){
require(currentBalance >=amount,"insufficient balance");
    }
unchecked{
    _approve(owner, currentBalance, amount);
}

}



function _transfer(address from , address to ,uint amount) internal {
require(from !=address(0), "from is not the zero address");
require(to !=address(0), "to is not the zero address");

_beforeTransferToken(from, to ,amount);
uint fromBalance = balances[from];
require(fromBalance >amount,"transfer amount exceed balances");

unchecked{
balances[from] =fromBalance-amount;
}
balances[to] +=amount;

emit Transfer(from ,to , amount);
_afterTokenTransfer(from , to ,amount);

}
function _mint(address account, uint amount) internal{
require(account !=address(0), "mint to address zero");
_beforeTokenTransfer(address(0),account, amount);  
 _totalSupply +=amount;
 balances[account] += amount;
emit Transfer(address(0) , account, amount);
_afterTokenTransfer(address(0), account, amount);
}







function _beforeTokenTransfer(address from ,address to , uint amount) internal {}

function _afterTokenTransfer(address from ,address to , uint amount)internal{}






}






