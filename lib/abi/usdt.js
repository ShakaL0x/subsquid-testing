"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.functions = exports.events = void 0;
const p = __importStar(require("@subsquid/evm-codec"));
const evm_abi_1 = require("@subsquid/evm-abi");
exports.events = {
    Issue: (0, evm_abi_1.event)("0xcb8241adb0c3fdb35b70c24ce35c5eb0c17af7431c99f827d44a445ca624176a", { "amount": p.uint256 }),
    Redeem: (0, evm_abi_1.event)("0x702d5967f45f6513a38ffc42d6ba9bf230bd40e8f53b16363c7eb4fd2deb9a44", { "amount": p.uint256 }),
    Deprecate: (0, evm_abi_1.event)("0xcc358699805e9a8b7f77b522628c7cb9abd07d9efb86b6fb616af1609036a99e", { "newAddress": p.address }),
    Params: (0, evm_abi_1.event)("0xb044a1e409eac5c48e5af22d4af52670dd1a99059537a78b31b48c6500a6354e", { "feeBasisPoints": p.uint256, "maxFee": p.uint256 }),
    DestroyedBlackFunds: (0, evm_abi_1.event)("0x61e6e66b0d6339b2980aecc6ccc0039736791f0ccde9ed512e789a7fbdd698c6", { "_blackListedUser": p.address, "_balance": p.uint256 }),
    AddedBlackList: (0, evm_abi_1.event)("0x42e160154868087d6bfdc0ca23d96a1c1cfa32f1b72ba9ba27b69b98a0d819dc", { "_user": p.address }),
    RemovedBlackList: (0, evm_abi_1.event)("0xd7e9ec6e6ecd65492dce6bf513cd6867560d49544421d0783ddf06e76c24470c", { "_user": p.address }),
    Approval: (0, evm_abi_1.event)("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", { "owner": (0, evm_abi_1.indexed)(p.address), "spender": (0, evm_abi_1.indexed)(p.address), "value": p.uint256 }),
    Transfer: (0, evm_abi_1.event)("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", { "from": (0, evm_abi_1.indexed)(p.address), "to": (0, evm_abi_1.indexed)(p.address), "value": p.uint256 }),
    Pause: (0, evm_abi_1.event)("0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625", {}),
    Unpause: (0, evm_abi_1.event)("0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33", {}),
};
exports.functions = {
    name: (0, evm_abi_1.fun)("0x06fdde03", {}, p.string),
    deprecate: (0, evm_abi_1.fun)("0x0753c30c", { "_upgradedAddress": p.address }),
    approve: (0, evm_abi_1.fun)("0x095ea7b3", { "_spender": p.address, "_value": p.uint256 }),
    deprecated: (0, evm_abi_1.fun)("0x0e136b19", {}, p.bool),
    addBlackList: (0, evm_abi_1.fun)("0x0ecb93c0", { "_evilUser": p.address }),
    totalSupply: (0, evm_abi_1.fun)("0x18160ddd", {}, p.uint256),
    transferFrom: (0, evm_abi_1.fun)("0x23b872dd", { "_from": p.address, "_to": p.address, "_value": p.uint256 }),
    upgradedAddress: (0, evm_abi_1.fun)("0x26976e3f", {}, p.address),
    balances: (0, evm_abi_1.fun)("0x27e235e3", { "_0": p.address }, p.uint256),
    decimals: (0, evm_abi_1.fun)("0x313ce567", {}, p.uint256),
    maximumFee: (0, evm_abi_1.fun)("0x35390714", {}, p.uint256),
    _totalSupply: (0, evm_abi_1.fun)("0x3eaaf86b", {}, p.uint256),
    unpause: (0, evm_abi_1.fun)("0x3f4ba83a", {}),
    getBlackListStatus: (0, evm_abi_1.fun)("0x59bf1abe", { "_maker": p.address }, p.bool),
    allowed: (0, evm_abi_1.fun)("0x5c658165", { "_0": p.address, "_1": p.address }, p.uint256),
    paused: (0, evm_abi_1.fun)("0x5c975abb", {}, p.bool),
    balanceOf: (0, evm_abi_1.fun)("0x70a08231", { "who": p.address }, p.uint256),
    pause: (0, evm_abi_1.fun)("0x8456cb59", {}),
    getOwner: (0, evm_abi_1.fun)("0x893d20e8", {}, p.address),
    owner: (0, evm_abi_1.fun)("0x8da5cb5b", {}, p.address),
    symbol: (0, evm_abi_1.fun)("0x95d89b41", {}, p.string),
    transfer: (0, evm_abi_1.fun)("0xa9059cbb", { "_to": p.address, "_value": p.uint256 }),
    setParams: (0, evm_abi_1.fun)("0xc0324c77", { "newBasisPoints": p.uint256, "newMaxFee": p.uint256 }),
    issue: (0, evm_abi_1.fun)("0xcc872b66", { "amount": p.uint256 }),
    redeem: (0, evm_abi_1.fun)("0xdb006a75", { "amount": p.uint256 }),
    allowance: (0, evm_abi_1.fun)("0xdd62ed3e", { "_owner": p.address, "_spender": p.address }, p.uint256),
    basisPointsRate: (0, evm_abi_1.fun)("0xdd644f72", {}, p.uint256),
    isBlackListed: (0, evm_abi_1.fun)("0xe47d6060", { "_0": p.address }, p.bool),
    removeBlackList: (0, evm_abi_1.fun)("0xe4997dc5", { "_clearedUser": p.address }),
    MAX_UINT: (0, evm_abi_1.fun)("0xe5b5019a", {}, p.uint256),
    transferOwnership: (0, evm_abi_1.fun)("0xf2fde38b", { "newOwner": p.address }),
    destroyBlackFunds: (0, evm_abi_1.fun)("0xf3bdc228", { "_blackListedUser": p.address }),
};
class Contract extends evm_abi_1.ContractBase {
    name() {
        return this.eth_call(exports.functions.name, {});
    }
    deprecated() {
        return this.eth_call(exports.functions.deprecated, {});
    }
    totalSupply() {
        return this.eth_call(exports.functions.totalSupply, {});
    }
    upgradedAddress() {
        return this.eth_call(exports.functions.upgradedAddress, {});
    }
    balances(_0) {
        return this.eth_call(exports.functions.balances, { _0 });
    }
    decimals() {
        return this.eth_call(exports.functions.decimals, {});
    }
    maximumFee() {
        return this.eth_call(exports.functions.maximumFee, {});
    }
    _totalSupply() {
        return this.eth_call(exports.functions._totalSupply, {});
    }
    getBlackListStatus(_maker) {
        return this.eth_call(exports.functions.getBlackListStatus, { _maker });
    }
    allowed(_0, _1) {
        return this.eth_call(exports.functions.allowed, { _0, _1 });
    }
    paused() {
        return this.eth_call(exports.functions.paused, {});
    }
    balanceOf(who) {
        return this.eth_call(exports.functions.balanceOf, { who });
    }
    getOwner() {
        return this.eth_call(exports.functions.getOwner, {});
    }
    owner() {
        return this.eth_call(exports.functions.owner, {});
    }
    symbol() {
        return this.eth_call(exports.functions.symbol, {});
    }
    allowance(_owner, _spender) {
        return this.eth_call(exports.functions.allowance, { _owner, _spender });
    }
    basisPointsRate() {
        return this.eth_call(exports.functions.basisPointsRate, {});
    }
    isBlackListed(_0) {
        return this.eth_call(exports.functions.isBlackListed, { _0 });
    }
    MAX_UINT() {
        return this.eth_call(exports.functions.MAX_UINT, {});
    }
}
exports.Contract = Contract;
