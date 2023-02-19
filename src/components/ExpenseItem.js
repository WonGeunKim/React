function ExpenseItem() {

    return <h2>Expense Item!</h2>
}

// 컴포넌트를 사용하기 위해 내보내야 함 , 그렇지 않으면 그 파일 안에서만 사용가능
// export를 사용해서 이 함수를 이 파일의 기본 함수로 내보냄
export default ExpenseItem;
// => 이 파일을 다른 파일에서 import할 수 있음

// 사용자 지정 컴포넌트
// 모든 컴포넌트는 비슷
// 컴포넌트는 html 코드를 반환하는 함수일 뿐

// 컴포넌트에서 반환하는 html 코드는 컴포넌트가 화면에 렌더링하는 것이 무엇인지에 따라 다름