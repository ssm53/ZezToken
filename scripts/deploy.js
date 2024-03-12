// do we need getcontract factory etc???

const hre = require("hardhat");

async function main() {
  const ZezToken = await hre.ethers.deployContract("ZezToken");

  await ZezToken.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
