const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "<ADD-YOUR-MNEMONIC-HERE>";
const privateKeyTest = "<ADD-YOUR-PRIVATE-KEY-HERE>";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: "0.8.4", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
  networks: {
    develop: {
      port: 7545,
    },
    testnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: "https://api.s0.b.hmny.io", // https://api.s0.t.hmny.io for mainnet
          derivationPath: `m/44'/1023'/0'/0/`,
        });
      },
      network_id: 1666700000, // 1666600000 for mainnet
    },
    testnetHar: {
      provider: () => {
        if (!privateKeyTest.trim()) {
          throw new Error(
            "Please enter a private key with funds, you can use the default one"
          );
        }
        return new HDWalletProvider({
          privateKeys: [privateKeyTest],
          providerOrUrl: "https://api.s0.b.hmny.io",
        });
      },
      network_id: 1666700000,
    },
  },
};
