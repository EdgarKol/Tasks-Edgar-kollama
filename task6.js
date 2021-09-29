function hei(n) {
    let b = 'Hi!'
    let a = 'Hello'
    if (!n) {
        console.log(b)
    } else if (n > 10) {
        for (let i = 0; i < n; i++) {
            console.log(b)
        }
    } else {
        for (let i = 0; i < n; i++) {
            console.log(a)
        }
    }
}



hei()