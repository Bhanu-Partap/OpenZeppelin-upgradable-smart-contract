const {ethers, upgrades} = require("hardhat")

async function main(){
    const Box = await ethers.getContractFactory("Box")

    const box = await upgrades.deployProxy(Box,[10],{
        initializer : "intialize"
    })
    await box.waitForDeployment();

    const address = await ("Box contract deployed at ", box.getAddress());
    console.log(address);
}  

main();


// contract  1address
//   x89d5175802A0aCEC987a078b077460CB09AfEa9f