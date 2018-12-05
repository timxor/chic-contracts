require('dotenv').config();  // Store environment-specific variable from '.env' to process.env

const HDWalletProvider = require("truffle-hdwallet-provider");
const url = process.env.INFURA_API_KEY;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 3000000,
      gasPrice: 21
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 6712390
    },
    localRinkeby: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 4
    },
    main: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/" + url),
      network_id: 1,
      gas: 3000000,
      gasPrice: 21
    },
  }
};
