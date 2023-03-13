function randomStringLetters(number) {
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    for (let i = 0; i < number; i++) {
        const rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
    }
    res = res.toLowerCase();
    return res;
}

export {
    randomStringLetters
};
