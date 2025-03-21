window.addEventListener("DOMContentLoaded", e =>{
    const query1 = "http://localhost:3333/users?id=12&token=abc";
    const query2 = "http://localhost:3333/users/12/abc";
    const query3 = "http://localhost:3333/users";

    let button1 = document.querySelector("#uno");
    let button2 = document.querySelector("#due");
    let button3 = document.querySelector("#tre");

    button1.addEventListener("click", e => {
        let b = e.target;
        console.log(`you clicked on button ${b.id}`);
        let display = document.querySelector("#display");
        fetch(query1)
        .then(response => {
            console.log(response);
            display.innerText = `UNO: ${response.status} ${response.statusText}`;
        })
    })

    button2.addEventListener("click", e => {
        let b = e.target;
        console.log(`you clicked on button ${b.id}`);
        fetch(query2)
        .then(response => {
            console.log(response);
            display.innerText = `DUE: ${response.status} ${response.statusText}`;
    })

    button3.addEventListener("click", e => {
        let b = e.target;
        console.log(`you clicked on button ${b.id}`);
        let display = document.querySelector("#display");
        const tmp = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;'
            },
            body: new URLSearchParams({
                'id': 123,
                'token': "afasdf"
            })
        }
        fetch(query3, tmp)
            .then(response => {
                console.log(response);
                display.innerText = `TRE: ${response.status} ${response.statusText}`;
            })
    })
    })
})