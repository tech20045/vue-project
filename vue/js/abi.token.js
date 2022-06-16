'use strict';
var abi_token = [{
    "constant": !1,
    "inputs": [{
        "name": "spender",
        "type": "address"
    }, {
        "name": "tokens",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": !1,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !1,
    "inputs": [{
        "name": "from",
        "type": "address"
    }, {
        "name": "to",
        "type": "address"
    }, {
        "name": "tokens",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": !1,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "tokenOwner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "balance",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": !1,
    "inputs": [{
        "name": "to",
        "type": "address"
    }, {
        "name": "tokens",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "name": "success",
        "type": "bool"
    }],
    "payable": !1,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": !0,
    "inputs": [{
        "name": "tokenOwner",
        "type": "address"
    }, {
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "name": "remaining",
        "type": "uint256"
    }],
    "payable": !1,
    "stateMutability": "view",
    "type": "function"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !0,
        "name": "from",
        "type": "address"
    }, {
        "indexed": !0,
        "name": "to",
        "type": "address"
    }, {
        "indexed": !1,
        "name": "tokens",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": !1,
    "inputs": [{
        "indexed": !0,
        "name": "tokenOwner",
        "type": "address"
    }, {
        "indexed": !0,
        "name": "spender",
        "type": "address"
    }, {
        "indexed": !1,
        "name": "tokens",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}];