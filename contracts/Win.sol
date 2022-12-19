// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

error Win__NotTheOwner();
error Win__TransactionFailed();

contract Win {
    address public immutable i_owner;

    constructor() {
        i_owner = msg.sender;
    }

    function win(address contractAddress) external {
        if (msg.sender != i_owner) {
            revert Win__NotTheOwner();
        }
        (bool success, ) = contractAddress.call(abi.encodeWithSignature("attempt()"));
        if (!success) {
            revert Win__TransactionFailed();
        }
    }
}
