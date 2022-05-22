const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log('DogeCoin deployed to:', dogeContract.address)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log('Link deployed to:', linkContract.address)

  const daiFactory = await hre.ethers.getContractFactory('Dai')
  const daiContract = await daiFactory.deploy()
  await daiContract.deployed()
  console.log('DaiToken deployed to:', daiContract.address)

  const usdcFactory = await hre.ethers.getContractFactory('Dai')
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log('USDCToken deployed to:', usdcContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
