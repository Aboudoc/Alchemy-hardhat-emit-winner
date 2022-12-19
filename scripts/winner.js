const { ethers } = require("hardhat")

const CONTRACT_ADDRESS_CALL = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
const CONTRACT_ADDRESS = "0xc1a38e797c5Fa4F939afb3AE174D9734e6387798"

async function main() {
    console.log("Let's try to win")

    const Win = await ethers.getContractAt("Win", CONTRACT_ADDRESS)

    const tx = await Win.win(CONTRACT_ADDRESS_CALL)

    console.log("Sending transaction ...")

    await tx.wait(1)

    console.log("Event emitted, you win!")
}
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
