const btn = document.querySelector('.create-btn');

const getAlert = (number) => {
    console.log(number)
};

const getNum = getAlert.bind(null,30)

btn.addEventListener('click', getNum);

