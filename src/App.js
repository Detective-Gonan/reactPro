import './App.css';
import React, {useState} from "react";
import  App from './useState/App';

function App() {
    //useState는 직접 재정의 해줄수 없다 deep copy [...변수] 를 사용해서 값을 변경해줘야함!
    let [title, titleChange] =useState(['고기 부위 추천','하타치 메뉴추천','방금 간 맛집 추천!']);//   배열이 남는다.
        // 자동 재랜더링을 위해 사용
    let posts ='수원 고기맛집';
        //페이지 새로고침을 해야 바뀜!
    let [HIT,HitCnt] = useState(0);
    function change() {
      let newData = [...title];//deep copy해줘야한다!
        newData.sort();
      newData[0] = '오늘의 비추천';
      titleChange(newData);
    };


    return (
        <div className="App">
            <div className='black-nav'>
                <div >맛집 블로그</div>
            </div>
           <div className='list'>
               <button onClick={ () => { change() }}>제목 바꾸기</button>
               <h3>{title[0]} <span onClick={change}>❤HIT</span>({HIT})</h3>
               <p>작성일 : 11월 12일 </p>
               <hr/>
           </div>
            <div className='list'>
                <h3>{title[1]} <span onClick={()=>{ HitCnt(HIT+1) }}>❤HIT</span>({HIT})</h3>
                <p>작성일 : 11월 12일 </p>
                <hr/>
            </div>
            <div className='list'>
                <h3>{title[2]} <span onClick={()=>{ HitCnt(HIT+1) }}>❤HIT</span>({HIT})</h3>
                <p>작성일 : 11월 12일 </p>
                <hr/>
            </div>
            <Modal/>
        </div>
    );
}
//Component 반복적인 친구들을 사용해서 간결하게
// 자주 바뀌는 UI
function Modal(){
return(
    <div className='modal'>
        <h2></h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
)
}



export default App;
