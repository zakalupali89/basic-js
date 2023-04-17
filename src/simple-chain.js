const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return chainMaker.result.length;
  },
  addLink(link) {
    const currentLink = link === undefined ? '( )': link;
    if (chainMaker.result) {
      chainMaker.result.push(`( ${new String(currentLink)} )`)
    } else {
      chainMaker.result = [`( ${new String(currentLink)} )`];
    }
    return chainMaker;
  },
  removeLink(position) {
    if (chainMaker.result[position-1] !== undefined) {
      chainMaker.result.splice(position - 1, 1);
      return chainMaker;
    } else {
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    chainMaker.result?.reverse();
    return chainMaker;
  },
  finishChain() {
    const chainString = chainMaker.result.join('~~');
    chainMaker.result = undefined;
    return chainString;
  }
};

module.exports = {
  chainMaker
};
