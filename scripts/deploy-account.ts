import { ethers } from "hardhat";

async function main() {
  const owner = "0x306Bb8081C7dD356eA951795Ce4072e6e4bFdC32";
  const factoryAddress = "0x5CfEAfe80d2d41021b47e613ABDc42B97D404285";
  const factory = await ethers.getContractAt("SimpleAccountFactory", factoryAddress);

  // const code = await factory.getCreationCode()
  // console.log(
  //   `code: ${code}`
  // );

  // SimpleAccount
  const address = await factory.getAddress(owner, "0x0")
  console.log(
    `address: ${address}`
  );

  // const tx = await factory.createAccount(owner, "0x0");
  // console.log(
  //   `hash: ${tx.hash}`
  // );


  // SimpleAccount2
  const address2 = await factory.getAddress2(owner, ["0x588fAac6b3aa91bb4cD8127Ab357515716541f1B","0x306Bb8081C7dD356eA951795Ce4072e6e4bFdC32"], "0x0")
  console.log(
    `address: ${address2}`
  );

  const tx2 = await factory.createAccount2(owner, ["0x588fAac6b3aa91bb4cD8127Ab357515716541f1B","0x306Bb8081C7dD356eA951795Ce4072e6e4bFdC32"], "0x0");
  console.log(
    `hash: ${tx2.hash}`
  );
  // const accountImplementation = await factory.accountImplementation()
  // console.log(
  //   `accountImplementation: ${accountImplementation}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
