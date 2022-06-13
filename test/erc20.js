const { expect } = require('chai');
const { ethers } = require('ethers');
const { ether } = require('hardhat');


describe('erc20 token', () => {
    let erc20, Erc, addrfrom, addrto, addrowner, addrspend, owner
    beforeEach(async () => {
        erc20 = await ethers.getContractFactory('erc20');
        Erc = await erc20.deployed();
        [owner, addrfrom, addrto, addrowner, addrspender, _] = await ethers.getSigners();
    })

    describe('deployment', () => {

        it('should set the owner', async () => {
            expect(await Erc.owner()).to.equal(owner.address);

        })
        it('should return the total supply', async () => {

            const ownerbalance = await Erc.balanceOf(owner.address);
            expect(await Erc.totalSupply()).to.equal(ownerbalance);
        })

        describe("approve 3rd party to spend", () => {
            it('should set the owner to approve third party', () => {
                expect(await Erc.owner()).to.equal(owner.address);

            })
            it('approve it', async () => {
                const approve = await Erc.approve(owner, spender, amount);
                expect(await Erc.approve()).to.equal(addrowner, addrspender, amount);

                await expect(
                    Erc
                        .connect(addrowner)
                        .transfer(owner, spender, 20)

                ).to.be.revertedWith('address owner is not the zero address');
                expect(await Erc.balanceOf(owneraddress)).to.equal(owner);

                await expect(
                    Erc
                        .connect(addowner)
                        .transfer(, owner, spender, 30)
                ).to.be.revertedWith('spender is not the zero address');

            })
        })



    })


