/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BookLibrary, BookLibraryInterface } from "../BookLibrary";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "BookDatabase",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "availableCopies",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ownerCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_copies",
        type: "uint256",
      },
    ],
    name: "addBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bookId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_copies",
        type: "uint256",
      },
    ],
    name: "addBookCopies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bookCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "borrowBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAvailableBooks",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getBookDetail",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getOwnerHistoryOfBook",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "returnBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b5061001f33610024565b610074565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610d72806100836000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b14610147578063b1790c3514610162578063b905ad7814610184578063ca5140c91461019b578063d6c084d9146101ae578063f2fde38b146101c357600080fd5b806354fcf7d5146100b957806360f9eefc146100e4578063637a3872146100f9578063642ea5ce1461010c578063715018a61461012c5780637e490a9e14610134575b600080fd5b6100cc6100c73660046108d4565b6101d6565b6040516100db9392919061093d565b60405180910390f35b6100f76100f2366004610962565b610280565b005b6100f761010736600461099a565b6102bd565b61011f61011a3660046108d4565b61035d565b6040516100db9190610a93565b6100f7610431565b6100f76101423660046108d4565b610445565b6000546040516001600160a01b0390911681526020016100db565b6101756101703660046108d4565b61052f565b6040516100db93929190610aad565b61018d60015481565b6040519081526020016100db565b6100f76101a93660046108d4565b610646565b6101b66106b8565b6040516100db9190610ae2565b6100f76101d1366004610b26565b6107ac565b6004602052600090815260409020805481906101f190610b4f565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90610b4f565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b5050505050908060010154908060020154905083565b61028861082a565b6000811161029557600080fd5b600082815260046020526040902060018101546102b3908390610b9f565b6001909101555050565b6102c561082a565b6002826040516102d59190610bb8565b9081526040519081900360200190205460ff16156102f257600080fd5b60016002836040516103049190610bb8565b908152604051908190036020019020805491151560ff199092169190911790556001805490600061033483610bd4565b90915550506001546000908152600460205260409020806103558482610c3c565b506001015550565b6000818152600460205260408120600201546060919067ffffffffffffffff81111561038b5761038b610984565b6040519080825280602002602001820160405280156103b4578160200160208202803683370190505b50905060005b815181101561042a57600084815260046020908152604080832084845260030190915290205482516001600160a01b039091169083908390811061040057610400610cfc565b6001600160a01b03909216602092830291909101909101528061042281610bd4565b9150506103ba565b5092915050565b61043961082a565b6104436000610884565b565b33600090815260036020908152604080832084845290915290205460ff161561046d57600080fd5b3360009081526003602090815260408083208484528252808320805460ff1916600190811790915560049092528220808201549092916104ac91610d12565b10156104b757600080fd5b6001810180549060006104c983610d25565b90915550506002810180546000908152600383016020526040812080546001600160a01b031916331790558154919061050183610bd4565b90915550506004018054600181018255600091825260209091200180546001600160a01b0319163317905550565b6000818152600460208190526040822060018101548154606094938593929190830190839061055d90610b4f565b80601f016020809104026020016040519081016040528092919081815260200182805461058990610b4f565b80156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b505050505092508080548060200260200160405190810160405280929190818152602001828054801561063257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610614575b505050505090509250925092509193909250565b33600090815260036020908152604080832084845290915290205460ff1661066d57600080fd5b6000818152600460205260408120600181018054919261068c83610bd4565b909155505033600090815260036020908152604080832094835293905291909120805460ff1916905550565b6060600060015b60015481116106ff57600081815260046020526040902060010154156106ed57816106e981610bd4565b9250505b806106f781610bd4565b9150506106bf565b5060008167ffffffffffffffff81111561071b5761071b610984565b604051908082528060200260200182016040528015610744578160200160208202803683370190505b5060009250905060015b600154811161042a576000818152600460205260409020600101541561079a578082848151811061078157610781610cfc565b60209081029190910101528261079681610bd4565b9350505b806107a481610bd4565b91505061074e565b6107b461082a565b6001600160a01b03811661081e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61082781610884565b50565b6000546001600160a01b031633146104435760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610815565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156108e657600080fd5b5035919050565b60005b838110156109085781810151838201526020016108f0565b50506000910152565b600081518084526109298160208601602086016108ed565b601f01601f19169290920160200192915050565b6060815260006109506060830186610911565b60208301949094525060400152919050565b6000806040838503121561097557600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156109ad57600080fd5b823567ffffffffffffffff808211156109c557600080fd5b818501915085601f8301126109d957600080fd5b8135818111156109eb576109eb610984565b604051601f8201601f19908116603f01168101908382118183101715610a1357610a13610984565b81604052828152886020848701011115610a2c57600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b600081518084526020808501945080840160005b83811015610a885781516001600160a01b031687529582019590820190600101610a63565b509495945050505050565b602081526000610aa66020830184610a4f565b9392505050565b606081526000610ac06060830186610911565b8460208401528281036040840152610ad88185610a4f565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610b1a57835183529284019291840191600101610afe565b50909695505050505050565b600060208284031215610b3857600080fd5b81356001600160a01b0381168114610aa657600080fd5b600181811c90821680610b6357607f821691505b602082108103610b8357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610bb257610bb2610b89565b92915050565b60008251610bca8184602087016108ed565b9190910192915050565b600060018201610be657610be6610b89565b5060010190565b601f821115610c3757600081815260208120601f850160051c81016020861015610c145750805b601f850160051c820191505b81811015610c3357828155600101610c20565b5050505b505050565b815167ffffffffffffffff811115610c5657610c56610984565b610c6a81610c648454610b4f565b84610bed565b602080601f831160018114610c9f5760008415610c875750858301515b600019600386901b1c1916600185901b178555610c33565b600085815260208120601f198616915b82811015610cce57888601518255948401946001909101908401610caf565b5085821015610cec5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b81810381811115610bb257610bb2610b89565b600081610d3457610d34610b89565b50600019019056fea2646970667358221220bbba98d7a42b2b5a60e6340542e8521a0c8ffa21d0c694b36cbf73057e605a2464736f6c63430008110033";

type BookLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BookLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BookLibrary__factory extends ContractFactory {
  constructor(...args: BookLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BookLibrary> {
    return super.deploy(overrides || {}) as Promise<BookLibrary>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BookLibrary {
    return super.attach(address) as BookLibrary;
  }
  connect(signer: Signer): BookLibrary__factory {
    return super.connect(signer) as BookLibrary__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BookLibraryInterface {
    return new utils.Interface(_abi) as BookLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BookLibrary {
    return new Contract(address, _abi, signerOrProvider) as BookLibrary;
  }
}
