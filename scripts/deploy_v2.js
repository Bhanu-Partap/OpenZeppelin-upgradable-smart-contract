const {ethers, upgrades} = require("hardhat")

async function main(){
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    const boxv2 = await upgrades.upgradeProxy("0x69D020BD579fdFE174aF46009F0503feE6ece4Eb",BoxV2)
    await boxv2.waitForDeployment();

    const address = await ("Box contract deployed at ", boxv2.getAddress());
    console.log(address);
   
}  

//   x69D020BD579fdFE174aF46009F0503feE6ece4Eb
main();


// contract  1address
//   x89d5175802A0aCEC987a078b077460CB09AfEa9f