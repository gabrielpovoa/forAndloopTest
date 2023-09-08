let list = [];


const createAlphabet = (word) => {
    if (list.includes(word)) {
        console.log('That word already exists');
    } else {
        let isEqual = false;

        for (let i = 0; i < list.length; i++) {
            if (list[i] === word) {
                isEqual = true;
                break;
            }
        }

        if (isEqual) {
            console.log('That word already exists');
        } else {
            list.push(word);
            console.log('Added with success');
        }
    }
}