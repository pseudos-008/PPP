# GDG Hongik 기초 웹 스터디 2주차 WIL 

## 1. 이번 주차에 배운 내용

**API와 비동기 통신**: 클라이언트가 서버로부터 필요한 데이터를 요청하고 JSON 형식으로 받아오는 방법을 학습했습니다.
**JSON Placeholder**: 백엔드 서버 없이도 프론트엔드 연동 테스트를 할 수 있는 가짜 API 서비스의 활용법을 배웠습니다.
**DOM 동적 제어**: 자바스크립트의 `createElement`와 `appendChild`를 활용하여 서버에서 받아온 데이터를 화면에 동적으로 렌더링했습니다.
**Vercel을 통한 배포**: GitHub 저장소와 연동하여 내가 만든 웹 페이지를 전 세계에 지속적 배포(CD)하는 과정을 실습했습니다.


## 2. Promise 개념 정리

**개념**: 비동기 작업의 최종 완료 또는 실패와 그 결과 값을 나타내는 객체입니다.
**대기 (Pending)**: 비동기 처리가 아직 완료되지 않은 초기 상태입니다.
**이행 (Fulfilled)**: 비동기 처리가 성공적으로 완료되어 약속이 지켜진 상태입니다.`.then()`을 통해 결과 값을 받아 처리합니다.
**거부 (Rejected)**: 에러가 발생하여 비동기 처리가 실패한 상태입니다. `.catch()`를 통해 에러를 처리합니다.


### 3. 실습 결과물 배포 링크

**Vercel 배포 URL**: [https://ppp-six-tau.vercel.app](https://ppp-six-tau.vercel.app) 


## 4. 핵심 자바스크립트 소스 코드
```javascript
let root = document.getElementById("root");
let postsButton = document.getElementById("posts");
let todosButton = document.getElementById("todos-btn"); 

function render(data) {
    root.innerHTML = ""; 
    for (let i = 0; i < data.length; i++) {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.innerText = data[i].title;
        p.innerText = data[i].body;
        root.appendChild(h2);
        root.appendChild(p);
    }
}

function renderTodos(data) {
    root.innerHTML = ""; 
    for (let i = 0; i < data.length; i++) {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.innerText = `?? 할 일: ${data[i].title}`;
        p.innerText = `상태: ${data[i].completed ? "? 완료" : "? 미완료"}`;
        root.appendChild(h2);
        root.appendChild(p);
    }
}

function onButtonClick() {
    fetch('[https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/)')
        .then((response) => response.json())
        .then((json) => render(json));
}

function onTodosButtonClick() {
    fetch('[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)')
        .then((response) => response.json())
        .then((json) => {
            let limitedData = json.slice(0, 15);
            renderTodos(limitedData);
        });
}

postsButton.addEventListener("click", onButtonClick);
todosButton.addEventListener("click", onTodosButtonClick);

```
