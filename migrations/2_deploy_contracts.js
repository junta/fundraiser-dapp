var FundraiserFactoryContract = artifacts.require("./FundraiserFactory.sol");
var FundraiserContract = artifacts.require("./Fundraiser.sol");

module.exports = function (deployer) {
  deployer.deploy(FundraiserFactoryContract);
};
