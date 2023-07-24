const {ethers, upgrades} = require("hardhat")

async function main(){
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    const boxv2 = await upgrades.deployProxy(BoxV2, {
        initializer : "inc"
    })
    await boxv2.waitForDeployment();

    const address = await ("Box contract deployed at ", boxv2.getAddress());
    console.log(address);
   
}  

main();


// contract  1address
//   x89d5175802A0aCEC987a078b077460CB09AfEa9f