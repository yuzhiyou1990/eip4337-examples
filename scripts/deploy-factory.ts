import { ethers } from "hardhat";

async function main() {
  const entryPoint = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
  const SimpleAccountFactory = await ethers.getContractFactory("SimpleAccountFactory");
  const factory = await SimpleAccountFactory.deploy(entryPoint);

  await factory.deployed();
  console.log(
    `Factory deployed to ${factory.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
