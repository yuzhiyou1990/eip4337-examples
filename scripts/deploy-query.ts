import { ethers } from "hardhat";

async function main() {
  const accountAddress = "0xc4213AeE0c812FB1e99B23108CC5FB3302F919A0";
  const account = await ethers.getContractAt("SimpleAccount2", accountAddress);

  // SimpleAccount2
  const address = await account.signers(0);
  console.log(
    `address: ${address}`
  );
  const address1 = await account.signers(1);
  console.log(
    `address: ${address1}`
  );

  // const tx = await factory.createAccount(owner, "0x0");
  // console.log(
  //   `hash: ${tx.hash}`
  // );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
