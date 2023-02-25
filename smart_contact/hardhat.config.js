require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OzLX-mkPUtq2O-LkTooN8ywspOhsiLzF',
      accounts: ['b38b9100f4a0903b4a64249674d70c41170f9eddf45edae40afd872d974b22e6'],
    },
  },
};