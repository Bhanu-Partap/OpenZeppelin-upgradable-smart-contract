const {ethers, upgrades} = require("hardhat")

async function main(){
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    const boxv2 = await upgrades.deployProxy(BoxV2, {
        initializer : "inc"
    })
    
   
}  

main();


// contract  1address
//   x89d5175802A0aCEC987a078b077460CB09AfEa9f