// function scrollTo(params) {
//     // debugger
//     const {
//         element, 
//         to, 
//         duration, 
//         scrollDirection
//     } = params
//     let start = element.current[scrollDirection],
//         change = to - start,
//         increment = (1000/60);
//     let animateScroll = function (elapsedTime) {
//         elapsedTime += increment;
//         let position = easeInOut(elapsedTime, start, change, duration);
//         element.current[scrollDirection] = position;
//         if (elapsedTime < duration) {
//             window.requestAnimationFrame(animateScroll.bind(null,elapsedTime));
//         }
//     };

//     // animateScroll.bind(null,0(0);
//     window.requestAnimationFrame(animateScroll.bind(null,0))
// }

// function easeInOut(currentTime, start, change, duration) {
//     currentTime /= duration / 2;
//     if (currentTime < 1) {
//         return change / 2 * currentTime * currentTime + start;
//     }
//     currentTime -= 1;
//     return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
// }

// export default scrollTo
function scrollTo(params) {
    return new Promise((res, rej) => {
        const {
            element,
            to,
            duration,
            scrollDirection,
            callback,
            context
        } = params;
        var start = element.current[scrollDirection],
            change = to - start,
            increment = (1000 / 60);

        var animateScroll = function (elapsedTime) {
            elapsedTime += increment;
            var position = easeInOut(elapsedTime, start, change, duration);
            element.current[scrollDirection] = position;
            if (elapsedTime < duration) {
                window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
            } else {
                callback.call(context);
                res();
            }
        };

        // animateScroll(0);
        window.requestAnimationFrame(animateScroll.bind(null, 0))
    })
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

export default scrollTo;