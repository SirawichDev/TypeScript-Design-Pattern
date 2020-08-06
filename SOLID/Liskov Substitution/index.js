"use strict";
/*
 * A subclass Should be used wherever it's base class can be used
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizQuestion = void 0;
var QuizQuestion = /** @class */ (function () {
    function QuizQuestion(question, ch1, ch2, ch3, ch4, correctAns) {
        this._question = question;
        this._choice1 = ch1;
        this._choice2 = ch2;
        this._choice3 = ch3;
        this._choice4 = ch4;
        this._correctAnswer = correctAns;
    }
    Object.defineProperty(QuizQuestion.prototype, "question", {
        get: function () {
            return this.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice1", {
        get: function () {
            return this._choice1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice2", {
        get: function () {
            return this._choice2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice3", {
        get: function () {
            return this._choice3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice4", {
        get: function () {
            return this._choice4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "Ans", {
        get: function () {
            return this._correctAnswer;
        },
        enumerable: false,
        configurable: true
    });
    return QuizQuestion;
}());
exports.QuizQuestion = QuizQuestion;
// export class IsTrueQuestion extends QuizQuestion {
//   constructor(question) {
//     super(question, "True", "FALSE", null, null, 1);
//   }
// }
var printOutQuestion = function (quiz) {
    console.log(quiz.question);
    console.log("1. " + quiz.choice1);
    console.log("2. " + quiz.choice2);
    console.log("3. " + quiz.choice3);
    console.log("4. " + quiz.choice4);
};
var quizQuestion = new QuizQuestion("Which one is my Github", "SirawichDev", "Sirawit0676", "sirawich", "sdsxx", 3);
printOutQuestion(quizQuestion);
// let isTrue = new IsTrueQuestion("XXXXXX");
// printOutQuestion(isTrue);
