const form = document.querySelector("[data-form]");
const btn = document.querySelector("[data-btn]");

const localStorageKey = "userInfo";


form.addEventListener("input", (e) => {
    const userName = form.elements.userName.value.trim();
    const userSurname = form.elements.userSurname.value.trim();
    const userEmail = form.elements.userEmail.value.trim();
    const userTel = form.elements.userTel.value.trim();
    const comment = form.elements.comment.value.trim();

    const info = {
        name: userName,
        surname: userSurname,
        email: userEmail,
        tel: userTel,
        comment
    };

    const zipInfo = JSON.stringify(info);
    localStorage.setItem(localStorageKey, zipInfo);
    console.log(zipInfo);
});

function getFromLocalStorage() {
    const dataLocalStorage = localStorage.getItem(localStorageKey);
    const parseData = JSON.parse(dataLocalStorage);
    console.log(parseData)

    form.elements.userName.value = parseData?.name || "";
    form.elements.userSurname.value = parseData?.surname || "";
    form.elements.userEmail.value = parseData?.email || "";
    form.elements.userTel.value = parseData?.tel || "";
    form.elements.comment.value = parseData?.comment || "";
};

getFromLocalStorage()


form.addEventListener("submit", sentdForm);

function sentdForm(e) {
    e.preventDefault()
    const saveInfo = {
        name: form.elements.userName.value.trim(),
        surname: form.elements.userSurname.value.trim(),
        email: form.elements.userEmail.value.trim(),
        tel: form.elements.userTel.value.trim(),
        comment: form.elements.comment.value.trim()
    };

    if (saveInfo.email === "") {
        alert("ЗАПОВНІТЬ ПОЛЕ email");
    } else {
        localStorage.removeItem(localStorageKey)
        form.reset();
        return saveInfo;
    };
};