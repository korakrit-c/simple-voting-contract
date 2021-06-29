const { expect } = require("chai");

let SimpleVote, simpleVote;
let owner;
let addr1;
let addr2;

beforeEach(async function () {
    SimpleVote = await ethers.getContractFactory("SimpleVote");
    [owner, addr1, addr2] = await ethers.getSigners();
    
    simpleVote = await SimpleVote.connect(owner).deploy();
  });

describe("SimpleVote", () => {
    it("Should set the right owner", async() => {
        expect(await simpleVote.getAdministrator()).to.equal(owner.address);
    });

    it("Should voters equal 0", async() => {
        expect(await simpleVote.getVoters()).to.equal("0");
    });

    it("Should voters equal 2", async() => {
        const simpleVoteTx1 = await simpleVote.connect(addr1).registerVoter();
        await simpleVoteTx1.wait();
        const simpleVoteTx2 = await simpleVote.connect(addr2).registerVoter();
        await simpleVoteTx2.wait();

        expect(await simpleVote.getVoters()).to.equal("2");
    });

    it("Should return the right candidate name", async() => {
        const simpleVoteTx1 = await simpleVote.registerCandidate("Cat");
        await simpleVoteTx1.wait();
        expect(await simpleVote.getCandidateName(0)).to.equal("Cat");

        const simpleVoteTx2 = await simpleVote.registerCandidate("Dog");
        await simpleVoteTx2.wait();
        expect(await simpleVote.getCandidateName(1)).to.equal("Dog");
    });

    it("Should only the admin can register candidate", async() => {
        const simpleVoteTxAdmin = await simpleVote.connect(owner).registerCandidate("Cat");
        await simpleVoteTxAdmin.wait();
        expect(await simpleVote.getCandidateName(0)).to.equal("Cat");

        let simpleVoteTx;
        try {
            simpleVoteTx = await simpleVote.connect(addr1).registerCandidate("Dog")
        } catch (error) {
            //reverted
            await expect(simpleVote.connect(addr1).registerCandidate("Dog")).to.be.reverted;
        }
        
    });

    it("registered voters only can vote", async() => {
        const simpleVoteTxAdmin = await simpleVote.connect(owner).registerCandidate("Cat");
        await simpleVoteTxAdmin.wait();

        const votingTx1 = await simpleVote.connect(addr1).registerVoter();
        await votingTx1.wait();
        await simpleVote.connect(addr1).vote(0);
        expect(await simpleVote.totalVotesFor(0)).to.equal(1);

        let votingTx2;
        try {
            votingTx2 = await simpleVote.connect(addr2).vote(0)
        } catch (error) {
            //reverted
            await expect(simpleVote.connect(addr2).vote(0)).to.be.reverted;
        }
        
    });
    
})