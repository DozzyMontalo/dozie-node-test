const userInfo = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherform.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInfo = search.value;

    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetch("/?user =" + userInfo).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.userInfo;
            }
        });
    });
});