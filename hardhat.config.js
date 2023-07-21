// require("@nomicfoundation/hardhat-toolbox");
// hardhat.config.js
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/ace13403824d4f809e011d9d547a4aa1",
      accounts: [process.env.PRI_KEY],
    },
  },
};
