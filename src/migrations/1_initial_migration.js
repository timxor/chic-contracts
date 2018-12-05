var Migrations = artifacts.require("./JOToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
