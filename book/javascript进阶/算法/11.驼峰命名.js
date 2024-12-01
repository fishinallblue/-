const parseName = (str) => {
    let lastfu = false;
    let target = '';
    for(let i=0; i< str.length; i++) {
        if (str.charAt(i) === '-') {
            lastfu = true;
        } else {
            if (lastfu) {
                target = target + str.charAt(i).toUpperCase();
            } else {
                target = target + str.charAt(i);
            }
            lastfu = false;
        }
    }
    return target;
}