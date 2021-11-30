const increment = () => {
    let countValue = document.querySelector('#counter').innerText
    document.querySelector('#counter').innerText = Number(countValue) + 1
}

increment()
increment()
increment()
