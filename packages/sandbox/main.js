const { color } = require('@wf-mono/dictionary');
/**
 * A sandbox to test in
 * @author Kenny Hammerlund
 * @member Sandbox
 * @memberof module:FlowElements/Universal
 */
async function jobArrived(s, flowElement, job) {
  // eslint-disable-next-line
  // await flowSetup.getData(s, job);
  job.log('info', `We found the dictionary, ${color}`);
}

module.exports = { jobArrived };
