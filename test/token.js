const { expect } = require("chai");
const { ethers } = require("hardhat");


describe('Token Contract', () => {

    let Token, token, owner, addr1, addr2;
    beforeEach(async () => {

        Token = await ethers.getContractFactory('Token');
        token = await token.teployed();
        [owner, addr1, addr2, _] = await ethers.getSigners();


    });
    describe('deployment', () => {
        it('should set the right owner', async () => {
            expect(await token.owner()).to.equal(owner.address);

        });
        it('it should assign the total supply of token to the owner', async () => {

            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);

        });
    });

    describe('Transaction', async () => {
        it('should transfer the token between account', async () => {
            await token.transfer(addr1.address, 50);
            const ownerBalance = await token.balanceOf(addr1.address);
            expect(ownerBalance).to.equal(50);
            await token.Connect(addr1).transfer(addr2.address, 50);
            const addr1balance = await token.balnceOf(addr2.address);
            expect(addr2balance).to.equal(50);
        });




        it('should fail when sender does not have enough fund ', async () => {

            const initialBalance = await token.balances(owner.address);
            await expect(
                token
                    .connect(addr1)
                    .transfer(owner, address)


            ).to.be.revertedwith('not enough balance');
            expect(
                await token.balanceOf(owner.address)
            ).to.equal('initial owner balance');

        })


        it('should update balance after transfer', async () => {
            const initialBalance = await token.balanceOf(owner.address);
            await token.transfer(addr2.address, 100);
            await token.transfer(addr2.address, 50);

            const finalOwnerBalance = await token.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialownerBalance - (10));

            const addr1balnces = await token.balanceOf(addr1.address);
            expect(addr1balance).to.equal(100);

            const addr2balances = await token.balanceOf(addr2.address);
            expect(addr1balance).to.equal(50);
        })
    })
})
