/**
 * @param {number} millis
 */
async function sleep(millis) {
    let t = Date.now();
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Date.now() - t);
        }, millis)

    })
}


let t = Date.now()
sleep(100).then(() => console.log('ab')) // 100
