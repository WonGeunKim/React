import ExpenseItem from "./components/ExpenseItem";
// 파일 import
// => 이것을 html 요소처럼 사용할 수 있다는 것


function App() {

  // 이것이 일반적인 자바스크립트에서 작업하는 방식 - 명령적 접근 방식
  // const para = document.createElement('p');
  // para.textContent = 'This is also Visible';
  // document.getElementById('root').append(para);

  // 리액트로 작업하면 단지 <div> <h2> 태그와 단락들이 있는 최종상태를 정의하기만 하면
  // 리액트는 이런 것들을 화면에 불러오기 위한 지시사항들을 뒷단에 생성
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also Visible!</p>

      {/* html 요소처럼 사용 */}
      <ExpenseItem></ExpenseItem>
      {/* 리액트는 이런식으로 사용자 지정 컴포넌트를 감지할 수 있음 */}
      {/* 소문자로 시작하는 요소는 내장된 html 요소 */}
      {/* 대문자로 시작하는 요소는 개발자들에 의해 정의된 요소 => 사용자 지정 컴포넌트 */}

    </div>
  );
}

export default App;
