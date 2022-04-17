const quiz = [
  {
    question: "筋トレの種目でBIG3と言われるものに含まれないものはどれ？",
    answers: ["ベンチプレス", "スクワット", "デッドリフト", "チンニング"],
    correct: "チンニング",
  },
  {
    question: "次のうち、主に大胸筋を鍛える種目はどれ？",
    answers: ["シットアップ", "プッシュアップ", "レッグレイズ", "プランク"],
    correct: "プッシュアップ",
  },
  {
    question: "筋持久力の向上に期待できるトレーニング方法は次のうちどれ？",
    answers: [
      "負荷は大きく、少ない回数",
      "負荷は小さく、多い回数",
      "負荷は大きく、多い回数",
      "負荷は小さく、少ない回数",
    ],
    correct: "負荷は小さく、多い回数",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義　※=()=>アロー関数
const setupQuiz = () => {
  //問題文を表示させる
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    //ここに命令文
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    //while分は変数を最後に足すことを忘れないこと
    buttonIndex++;
  }
};

setupQuiz(); //作った関数を呼び出す

//e:クリックされたさまざまな値を取得できる。e.target.textContentでクリックされたボタンのtextを取得
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("残念！");
  }
  quizIndex++;
  //今何問目（quizIndex）と全部で何問あるか（quizLength）を比べて処理
  if (quizIndex < quizLength) {
    //問題がまだあればこっちの処理
    setupQuiz();
  } else {
    //問題がなければこっちの処理
    window.alert(
      "終了！お疲れ様でした！！" +
        "\n" +
        "あなたの正解数は、" +
        score +
        "/" +
        quizLength +
        "でした！"
    );
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
