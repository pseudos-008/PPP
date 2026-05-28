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
        
        h2.innerText = `✔️ 할 일: ${data[i].title}`;
        p.innerText = `상태: ${data[i].completed ? "✅ 완료" : "❌ 미완료"}`;
        
        root.appendChild(h2);
        root.appendChild(p);
    }
}

function onButtonClick() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((json) => render(json));
}

function onTodosButtonClick() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
            let limitedData = json.slice(0, 15);
            renderTodos(limitedData);
        });
}

postsButton.addEventListener("click", onButtonClick);
todosButton.addEventListener("click", onTodosButtonClick);