"use strict";
/*
 * A subclass Should be used wherever it's base class can be used
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice1", {
        get: function () {
            return this._choice1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice2", {
        get: function () {
            return this._choice2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice3", {
        get: function () {
            return this._choice3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "choice4", {
        get: function () {
            return this._choice4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuizQuestion.prototype, "Ans", {
        get: function () {
            return this._correctAnswer;
        },
        enumerable: true,
        configurable: true
    });
    return QuizQuestion;
}());
exports.QuizQuestion = QuizQuestion;
var IsTrueQuestion = /** @class */ (function (_super) {
    __extends(IsTrueQuestion, _super);
    function IsTrueQuestion(question) {
        return _super.call(this, question, "True", "FALSE", null, null, 1) || this;
    }
    return IsTrueQuestion;
}(QuizQuestion));
exports.IsTrueQuestion = IsTrueQuestion;
function printOutQuestion(quiz) {
    console.log(quiz.question);
    console.log("1. " + quiz.choice1);
    console.log("2. " + quiz.choice2);
    console.log("3. " + quiz.choice3);
    console.log("4. " + quiz.choice4);
}
var quizQuestion = new QuizQuestion("Which one is my Github", "SirawichDev", "Sirawit0676", "sirawich", "sdsxx", 3);
printOutQuestion(quizQuestion);
var isTrue = new IsTrueQuestion("XXXXXX");
printOutQuestion(isTrue);
