pragma solidity ^0.4.24;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract JOToken is StandardToken {
    string public name = "JOToken";
    string public symbol = "JO";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 1000000000 * (10 ** decimals);

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
