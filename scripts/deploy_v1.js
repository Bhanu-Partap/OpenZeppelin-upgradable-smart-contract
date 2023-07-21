const {ethers, upgrades} = require("hardhat")

async function main(){
    const Box = await ethers.getContractFactory("Box")

    const box = await upgrades.deployProxy(Box, [10], {
        initializer : "initialize"
    })
    await box.waitForDeployment();
}  

main()