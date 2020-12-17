// test/models/quote-test.js
// test/models/quote-test.js
const {assert} = require('chai');
const { connectAndDrop, disconnect}  = require('../../database');

const Quote = require("../../models/quote");

describe("Quote", () => {
  beforeEach(connectAndDrop);
  afterEach(disconnect);

  describe("#quote", () => {
    it("is a String", () => {
      // Setup
      const quoteAsInt = 1;
      const citation = new Quote({quote: quoteAsInt });

      // Exercise

      // Verify
      assert.strictEqual(citation.quote, quoteAsInt.toString());
    })
  });
  
  describe("#attributed", () => {
    it("is a String", () => {
      // Setup
      const attributed = "James";
      const citation = new Quote({attributed: attributed });

      // Exercise

      // Verify
      assert.isString(citation.attributed);
      assert.strictEqual(citation.attributed, attributed);
    })
  });

  describe("#source", () => {
    it("is a String", () => {
      // Setup
      const source = "whatever source";
      const citation = new Quote({source: source });

      // Exercise

      // Verify
      assert.isString(citation.source);
      assert.strictEqual(citation.source, source);
    })
  });
})