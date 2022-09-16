// 변수 MDN 문서: https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Variables

// 예약어 종류: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
// (변수 이름은 예약어를 피해 작성한다)

/**
 * 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z, ), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis)
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두 가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple; // camelCase

// 나쁜예제 💩
let number = 20;

// 좋은예제 ✨
let myAge = 20;

// 나쁜예제 💩
let audio1;
let audio2;

// 좋은예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁! 🍯
let audioBackground;
let audioWind;
