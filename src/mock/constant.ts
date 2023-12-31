export const ACCOUNT_FACTORY_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract IEntryPoint",
        "name": "_entrypoint",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ERC1167FailedCreateClone",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "accountAdmin",
        "type": "address"
      }
    ],
    "name": "AccountCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "prevURI",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newURI",
        "type": "string"
      }
    ],
    "name": "ContractURIUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "SignerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "SignerRemoved",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accountImplementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_recoveryAddress",
        "type": "address"
      }
    ],
    "name": "changeRecoveryAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_admin",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "createAccount",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "entrypoint",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "getAccountsOfSigner",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_adminSigner",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "getAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllAccounts",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getRoleMember",
    "outputs": [
      {
        "internalType": "address",
        "name": "member",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleMemberCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRoleWithSwitch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      }
    ],
    "name": "isRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "data",
        "type": "bytes[]"
      }
    ],
    "name": "multicall",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "results",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "onRegister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_signer",
        "type": "address"
      }
    ],
    "name": "onSignerAdded",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_signer",
        "type": "address"
      }
    ],
    "name": "onSignerRemoved",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "recoveryAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "setContractURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const ACCOUNT_ABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "address",
        "name": "_entrypoint",
        "internalType": "contract IEntryPoint"
      },
      {
        "type": "address",
        "name": "_factory",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "AdminUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "isAdmin",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "type": "uint8",
        "name": "version",
        "indexed": false,
        "internalType": "uint8"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SignerPermissionsUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "authorizingSigner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "targetSigner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "tuple",
        "name": "permissions",
        "components": [
          {
            "type": "address",
            "name": "signer",
            "internalType": "address"
          },
          {
            "type": "address[]",
            "name": "approvedTargets",
            "internalType": "address[]"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint128",
            "name": "permissionStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "permissionEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "reqValidityStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "reqValidityEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "bytes32",
            "name": "uid",
            "internalType": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct IAccountPermissions.SignerPermissionRequest"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "fallback",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "addDeposit",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "entryPoint",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract IEntryPoint"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "factory",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getAllActiveSigners",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "signers",
        "components": [
          {
            "type": "address",
            "name": "signer",
            "internalType": "address"
          },
          {
            "type": "address[]",
            "name": "approvedTargets",
            "internalType": "address[]"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint128",
            "name": "startTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "endTimestamp",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct IAccountPermissions.SignerPermissions[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getAllAdmins",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getAllSigners",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "signers",
        "components": [
          {
            "type": "address",
            "name": "signer",
            "internalType": "address"
          },
          {
            "type": "address[]",
            "name": "approvedTargets",
            "internalType": "address[]"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint128",
            "name": "startTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "endTimestamp",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct IAccountPermissions.SignerPermissions[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDeposit",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getImplementationForFunction",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_functionSelector",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getNonce",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPermissionsForSigner",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "signer",
            "internalType": "address"
          },
          {
            "type": "address[]",
            "name": "approvedTargets",
            "internalType": "address[]"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint128",
            "name": "startTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "endTimestamp",
            "internalType": "uint128"
          }
        ],
        "internalType": "struct IAccountPermissions.SignerPermissions"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "type": "address",
        "name": "_defaultAdmin",
        "internalType": "address"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isActiveSigner",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isAdmin",
    "inputs": [
      {
        "type": "address",
        "name": "_account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isValidSignature",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_hash",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "_signature",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4",
        "name": "magicValue",
        "internalType": "bytes4"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isValidSigner",
    "inputs": [
      {
        "type": "address",
        "name": "_signer",
        "internalType": "address"
      },
      {
        "type": "tuple",
        "name": "_userOp",
        "components": [
          {
            "type": "address",
            "name": "sender",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "nonce",
            "internalType": "uint256"
          },
          {
            "type": "bytes",
            "name": "initCode",
            "internalType": "bytes"
          },
          {
            "type": "bytes",
            "name": "callData",
            "internalType": "bytes"
          },
          {
            "type": "uint256",
            "name": "callGasLimit",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "verificationGasLimit",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "preVerificationGas",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxFeePerGas",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxPriorityFeePerGas",
            "internalType": "uint256"
          },
          {
            "type": "bytes",
            "name": "paymasterAndData",
            "internalType": "bytes"
          },
          {
            "type": "bytes",
            "name": "signature",
            "internalType": "bytes"
          }
        ],
        "internalType": "struct UserOperation"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "multicall",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAdmin",
    "inputs": [
      {
        "type": "address",
        "name": "_account",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "_isAdmin",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPermissionsForSigner",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "signer",
            "internalType": "address"
          },
          {
            "type": "address[]",
            "name": "approvedTargets",
            "internalType": "address[]"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint128",
            "name": "permissionStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "permissionEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "reqValidityStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "reqValidityEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "bytes32",
            "name": "uid",
            "internalType": "bytes32"
          }
        ],
        "internalType": "struct IAccountPermissions.SignerPermissionRequest"
      },
      {
        "type": "bytes",
        "name": "_signature",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "validateUserOp",
    "inputs": [
      {
        "type": "tuple",
        "name": "userOp",
        "components": [
          {
            "type": "address",
            "name": "sender",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "nonce",
            "internalType": "uint256"
          },
          {
            "type": "bytes",
            "name": "initCode",
            "internalType": "bytes"
          },
          {
            "type": "bytes",
            "name": "callData",
            "internalType": "bytes"
          },
          {
            "type": "uint256",
            "name": "callGasLimit",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "verificationGasLimit",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "preVerificationGas",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxFeePerGas",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "maxPriorityFeePerGas",
            "internalType": "uint256"
          },
          {
            "type": "bytes",
            "name": "paymasterAndData",
            "internalType": "bytes"
          },
          {
            "type": "bytes",
            "name": "signature",
            "internalType": "bytes"
          }
        ],
        "internalType": "struct UserOperation"
      },
      {
        "type": "bytes32",
        "name": "userOpHash",
        "internalType": "bytes32"
      },
      {
        "type": "uint256",
        "name": "missingAccountFunds",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "validationData",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "verifySignerPermissionRequest",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "address",
            "name": "signer",
            "internalType": "address"
          },
          {
            "type": "address[]",
            "name": "approvedTargets",
            "internalType": "address[]"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction",
            "internalType": "uint256"
          },
          {
            "type": "uint128",
            "name": "permissionStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "permissionEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "reqValidityStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "reqValidityEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "bytes32",
            "name": "uid",
            "internalType": "bytes32"
          }
        ],
        "internalType": "struct IAccountPermissions.SignerPermissionRequest"
      },
      {
        "type": "bytes",
        "name": "signature",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success",
        "internalType": "bool"
      },
      {
        "type": "address",
        "name": "signer",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "withdrawDepositTo",
    "inputs": [
      {
        "type": "address",
        "name": "withdrawAddress",
        "internalType": "address payable"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  }
];

export const ERC20_ABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "value",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DelegateChanged",
    "inputs": [
      {
        "type": "address",
        "name": "delegator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "fromDelegate",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "toDelegate",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DelegateVotesChanged",
    "inputs": [
      {
        "type": "address",
        "name": "delegate",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "previousBalance",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "newBalance",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PlatformFeeInfoUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "platformFeeRecipient",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "platformFeeBps",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PrimarySaleRecipientUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleAdminChanged",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleGranted",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleRevoked",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensMinted",
    "inputs": [
      {
        "type": "address",
        "name": "mintedTo",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "quantityMinted",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensMintedWithSignature",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "mintedTo",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "tuple",
        "name": "mintRequest",
        "components": [
          {
            "type": "address",
            "name": "to",
            "internalType": "address"
          },
          {
            "type": "address",
            "name": "primarySaleRecipient",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "quantity",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "bytes32",
            "name": "uid",
            "internalType": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct ITokenERC20.MintRequest"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "value",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "DEFAULT_ADMIN_ROLE",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "DOMAIN_SEPARATOR",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "allowance",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "spender",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "type": "address",
        "name": "spender",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "burn",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "burnFrom",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "checkpoints",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      },
      {
        "type": "uint32",
        "name": "pos",
        "internalType": "uint32"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "",
        "components": [
          {
            "type": "uint32",
            "name": "fromBlock",
            "internalType": "uint32"
          },
          {
            "type": "uint224",
            "name": "votes",
            "internalType": "uint224"
          }
        ],
        "internalType": "struct ERC20VotesUpgradeable.Checkpoint"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "contractType",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "contractURI",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "contractVersion",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8",
        "name": "",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "decimals",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8",
        "name": "",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "decreaseAllowance",
    "inputs": [
      {
        "type": "address",
        "name": "spender",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "subtractedValue",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "delegate",
    "inputs": [
      {
        "type": "address",
        "name": "delegatee",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "delegateBySig",
    "inputs": [
      {
        "type": "address",
        "name": "delegatee",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "nonce",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "expiry",
        "internalType": "uint256"
      },
      {
        "type": "uint8",
        "name": "v",
        "internalType": "uint8"
      },
      {
        "type": "bytes32",
        "name": "r",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "s",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "delegates",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPastTotalSupply",
    "inputs": [
      {
        "type": "uint256",
        "name": "blockNumber",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPastVotes",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "blockNumber",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPlatformFeeInfo",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint16",
        "name": "",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRoleAdmin",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRoleMember",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "uint256",
        "name": "index",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRoleMemberCount",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getVotes",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "grantRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "hasRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "increaseAllowance",
    "inputs": [
      {
        "type": "address",
        "name": "spender",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "addedValue",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "type": "address",
        "name": "_defaultAdmin",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_symbol",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_contractURI",
        "internalType": "string"
      },
      {
        "type": "address[]",
        "name": "_trustedForwarders",
        "internalType": "address[]"
      },
      {
        "type": "address",
        "name": "_primarySaleRecipient",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_platformFeeRecipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_platformFeeBps",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isTrustedForwarder",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mintTo",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mintWithSignature",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "to",
            "internalType": "address"
          },
          {
            "type": "address",
            "name": "primarySaleRecipient",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "quantity",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "bytes32",
            "name": "uid",
            "internalType": "bytes32"
          }
        ],
        "internalType": "struct ITokenERC20.MintRequest"
      },
      {
        "type": "bytes",
        "name": "_signature",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "multicall",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nonces",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "numCheckpoints",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "",
        "internalType": "uint32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "permit",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "spender",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "deadline",
        "internalType": "uint256"
      },
      {
        "type": "uint8",
        "name": "v",
        "internalType": "uint8"
      },
      {
        "type": "bytes32",
        "name": "r",
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "s",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "primarySaleRecipient",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renounceRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokeRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setContractURI",
    "inputs": [
      {
        "type": "string",
        "name": "_uri",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPlatformFeeInfo",
    "inputs": [
      {
        "type": "address",
        "name": "_platformFeeRecipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_platformFeeBps",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPrimarySaleRecipient",
    "inputs": [
      {
        "type": "address",
        "name": "_saleRecipient",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "verify",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "to",
            "internalType": "address"
          },
          {
            "type": "address",
            "name": "primarySaleRecipient",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "quantity",
            "internalType": "uint256"
          },
          {
            "type": "uint256",
            "name": "price",
            "internalType": "uint256"
          },
          {
            "type": "address",
            "name": "currency",
            "internalType": "address"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp",
            "internalType": "uint128"
          },
          {
            "type": "bytes32",
            "name": "uid",
            "internalType": "bytes32"
          }
        ],
        "internalType": "struct ITokenERC20.MintRequest"
      },
      {
        "type": "bytes",
        "name": "_signature",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  }
]
