/*
* NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
* function when declaring them. Failure to do so will cause commands to hang. ex:
* ```
* mainnet: {
*     provider: function() {
*       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/36e8ae2157cb4b19af9dfc36dfb71539')
*     },
*     network_id: '1',
*     gas: 4500000,
*     gasPrice: 10000000000,
*   },
*/

module.exports = {
    networks: {
        infura: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/36e8ae2157cb4b19af9dfc36dfb71539')
            },
            network_id: '1',
            gas: 4500000,
            gasPrice: 10000000000,
        },
        kovan: {
            host: "127.0.0.1",
            port: 8545,
            network_id: 42,
            gas: 4700000,
            gasPrice: 25000000000
        },
    }
};
