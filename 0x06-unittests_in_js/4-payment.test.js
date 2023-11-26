'use strict';
const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');

    it('validate the usage of the Utils function', () => {
        const stubUtils = sinon.stub(Utils, 'calculateNumber');
        stubUtils.withArgs('SUM', 100, 20).returns(10);
        sendPaymentRequestToApi(100, 20);
        chai.expect(spyUtils.calledOnce).to.be.true;
        chai.expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
        stubUtils.restore();
        spyUtils.restore()
    });
});
