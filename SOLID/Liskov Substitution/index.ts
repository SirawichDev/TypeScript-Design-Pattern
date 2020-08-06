/*
 * A subclass Should be used wherever it's base class can be used
 */

export class QuizQuestion {
  private _question: string;
  private _choice1: string;
  private _choice2: string;
  private _choice3: string;
  private _choice4: string;
  private _correctAnswer: number;

  constructor(
    question: string,
    ch1: string,
    ch2: string,
    ch3: string,
    ch4: string,
    correctAns: number
  ) {
    this._question = question;
    this._choice1 = ch1;
    this._choice2 = ch2;
    this._choice3 = ch3;
    this._choice4 = ch4;
    this._correctAnswer = correctAns;
  }

  public get question(): string {
    return this.question;
  }
  public get choice1(): string {
    return this._choice1;
  }
  public get choice2(): string {
    return this._choice2;
  }
  public get choice3(): string {
    return this._choice3;
  }
  public get choice4(): string {
    return this._choice4;
  }
  public get Ans(): number {
    return this._correctAnswer;
  }
}
// export class IsTrueQuestion extends QuizQuestion {
//   constructor(question) {
//     super(question, "True", "FALSE", null, null, 1);
//   }
// }
const  printOutQuestion = (quiz: QuizQuestion) => {
  console.log(quiz.question);
  console.log(`1. ${quiz.choice1}`);
  console.log(`2. ${quiz.choice2}`);
  console.log(`3. ${quiz.choice3}`);
  console.log(`4. ${quiz.choice4}`);
}

let quizQuestion = new QuizQuestion(
  "Which one is my Github",
  "SirawichDev",
  "Sirawit0676",
  "sirawich",
  "sdsxx",
  3
);

printOutQuestion(quizQuestion);

// let isTrue = new IsTrueQuestion("XXXXXX");
// printOutQuestion(isTrue);
