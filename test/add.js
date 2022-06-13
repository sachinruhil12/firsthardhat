const { expect } = require("chai");
const { ethers } = require("hardhat");



describe('Add contract', () => {
    let Add, add, no1, no2

    beforeEach(async () => {
        Add = await ethers.getContractFactory('Add');
        add = await tokenize.deployed();
    })
    describe('deployment', () => {
        it('should assign the no', async () => {
            expect(await add.set()).to.equal(10);
            expect(await add.set()).to.equal(30);

        });
        it('should get the addition number', async () => {
            const getnumber = await add.get(no1, no2);
            expect(await add.get()).to.equal(10, 30);

        })


    })



})