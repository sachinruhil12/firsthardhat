//SPDX License-Identifier:MIT

pragma solidity >=0.6.0 <0.9.0;

contract add{

 uint public a;
 uint public b;
 function set(uint x_, uint y_) external{
  a=x_;
  b=y_;


 } 

function get(  )external view returns(uint){
    return a+b;
    }



}
