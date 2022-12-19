async function main() {
    const Win = await ethers.getContractFactory("Win")
    const win = await Win.deploy()
    await win.deployed()

    console.log(`Contract deployed to: ${win.address}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
