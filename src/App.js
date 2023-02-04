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
    </div>
  );
}

export default App;
