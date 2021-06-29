const hre = require("hardhat");

async function main() {
    const SimpleVote = await hre.ethers.getContractFactory("SimpleVote");
    const simpleVote = await SimpleVote.deploy();

    await simpleVote.deployed();

    console.log("SimpleVote deployed to:", simpleVote.address);
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
