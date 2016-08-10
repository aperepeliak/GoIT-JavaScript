var toLocalStorage = require('../js/toLocalStorage.js');

localStorage = {
  items: {},
  setItem(name, item) {
    this.items[name] = item;
  },
  getItem(name) {
    return this.items;
  }
};

describe("toLocalStorage", function () {
  it("generates answers list", function () {

    var result;
    result = toLocalStorage.createAnswersList();
    expect(result).toEqual('created answers list');
  });

  it("addQuestions()", function () {

    var result;
    result = toLocalStorage.addQuestions();
    expect(result).toEqual('questions added');
  });

  it("check number of questions", function () {

    var result;
    result = toLocalStorage.numQuestions;
    expect(result).toBe(3);
  });

  it("check questions array", function () {
    expect(toLocalStorage.questions).toBeDefined();
  });

  it("check answers array", function () {
    expect(toLocalStorage.answers).toBeDefined();
  });

  // возвращает ошибку, потому что localStorage не определен. Наверное, это из-за использования phantomjs?
  it("generates test quiz", function() {
    var result;
    result = toLocalStorage.generate();
    expect(result).toEqual('testQuiz succesfully created');
  });
});