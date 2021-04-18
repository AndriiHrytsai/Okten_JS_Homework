// ********************************************************* CALL BACK ***************************************************************

// function wakeUp(time, cb) {
//     setTimeout(() => {
//         if (time >= 7 && time <= 8) {
//             console.log('Good morning');
//             cb(null, time);
//         } else {
//             cb('як казав мій друг - "вихідний" ');
//         }
//     }, 300)
// }
//
// function brushYourTeeth(paste, cb) {
//     setTimeout(() => {
//         if (paste) {
//             cb(null, 'Ретельно прочисти зуби');
//         } else {
//             cb('Упс, нам потрібно купити пасту')
//         }
//     }, 200)
// }
//
// function cupOfTea(tea, cb) {
//     setTimeout(() => {
//         if (tea) {
//             cb(null, 'Якщо хочеш то візьми до чаю лимон');
//         } else {
//             cb('Друже нам потрібно в магазин.... Чаю немає!')
//         }
//     }, 800)
// }
//
// function goStudy(timeTwo, cb) {
//     setTimeout(() => {
//         if (timeTwo === 10) {
//             cb(null, 'Сідаю вчитись ');
//         } else {
//             cb('Агов друже а вчитись коли надумав????')
//         }
//     }, 500)
// }
//
// function vacation(timeThree, cb) {
//     setTimeout(() => {
//         if (timeThree >= 14 && timeThree <= 16){
//             cb(null, 'Трішки відпочину');
//         } else {
//             cb('Ти ще не втомився, працюй!!!!!!!!!');
//         }
//     }, 300)
// }
//
// function eat(food, cb) {
//     setTimeout(() => {
//         if (food) {
//             cb(null, 'Смачного');
//         } else {
//             cb('От халепа, я ж не вмію готувати!! що я буду їсти???')
//         }
//     }, 700)
// }
//
// function walk(sun, cb) {
//     setTimeout(() => {
//         if (sun) {
//             cb(null, 'Піду трішки пройдусь');
//         } else {
//             cb('Погода не айс, посиджу дома краще')
//         }
//     }, 200)
// }
//
// function sleep(timeFour, cb) {
//     setTimeout(() => {
//         if (timeFour > 23) {
//             cb(null, 'Пора спати ');
//         } else {
//             cb('Ще фільм гляну ))');
//         }
//     }, 600)
// }
//
//
// wakeUp(8, (err, time) => {
//     if (!err) {
//         console.log(`time : ${time}.pm`)
//
//         brushYourTeeth(true, (err, info) => {
//             if (!err) {
//                 console.log(info);
//                 cupOfTea(true, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         goStudy(10, (err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                                 vacation(15, (err, data) => {
//                                     if (!err) {
//                                         console.log(data);
//                                         eat(true, (err, data) => {
//                                             if (!err) {
//                                                 console.log(data);
//                                                 walk(true, (err, data) => {
//                                                     if (!err) {
//                                                         console.log(data);
//                                                         sleep(23, (err, data) => {
//                                                             if (!err) {
//                                                                 console.log(data);
//                                                             } else {
//                                                                 console.warn(err);
//                                                             }
//                                                         })
//                                                     } else {
//                                                         console.warn(err);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.warn(err);
//
//                                             }
//                                         });
//                                     } else {
//                                         console.warn(err);
//
//                                     }
//                                 });
//                             } else {
//                                 console.warn(err);
//                             }
//                         });
//                     } else {
//                         console.warn(err);
//                     }
//                 });
//             } else {
//                 console.warn(err);
//             }
//         });
//     } else {
//         console.warn(err);
//
//     }
// });

// ********************************************************* PROMISE *****************************************************************

// function wakeUp(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time === 8) {
//                 console.log('Good morning');
//                 resolve(8);
//             } else {
//                 reject('Ohh... my friend wake up please');
//             }
//         }, 300)
//     })
// }
//
// function brushYourTeeth(paste) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (paste) {
//                 resolve('Ретельно прочисти зуби');
//             } else {
//                 reject('Упс, нам потрібно купити пасту');
//             }
//         }, 200)
//     })
// }
//
// function cupOfTea(tea) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (tea) {
//                 resolve('Якщо хочеш то візьми до чаю лимон');
//             } else {
//                 reject('Друже нам потрібно в магазин.... Чаю немає!')
//             }
//         }, 800)
//     })
// }
//
// function goStudy(timeTwo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeTwo === 10) {
//                 resolve('Сідаю вчитись ');
//             } else {
//                 reject('Агов друже а вчитись коли надумав????')
//             }
//         }, 500)
//     })
// }
//
// function vacation(timeThree) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeThree >= 14 && timeThree <= 16) {
//                 resolve('Трішки відпочину');
//             } else {
//                 reject('Ти ще не втомився, працюй!!!!!!!!!');
//             }
//         }, 300)
//     })
// }
//
// function eat(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve('Смачного');
//             } else {
//                 reject('От халепа, я ж не вмію готувати!! що я буду їсти???')
//             }
//         }, 700)
//     })
// }
//
// function walk(sun) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sun) {
//                 resolve('Піду трішки пройдусь');
//             } else {
//                 reject('Погода не айс, посиджу дома краще')
//             }
//         }, 200)
//     })
// }
//
// function sleep(timeFour) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (timeFour >= 22) {
//                 resolve('Пора спати ');
//             } else {
//                 reject('Ще фільм гляну ))');
//             }
//         }, 600)
//     })
// }
//
// wakeUp(8)
//     .then(value => {
//         console.log(`time : ${value} .pm`)
//         return brushYourTeeth(true);
//     })
//     .then(value => {
//         console.log(value);
//         return cupOfTea(true);
//     })
//     .then(value => {
//         console.log(value);
//         return goStudy(10);
//     })
//     .then(value => {
//         console.log(value);
//         return vacation(15);
//     })
//     .then(value => {
//         console.log(value);
//         return eat(15);
//     })
//     .then(value => {
//         console.log(value);
//         return walk(true);
//     })
//     .then(value => {
//         console.log(value);
//         return sleep(23);
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(err => {
//         console.warn(err)
//     })
//     .finally(() => {
//         console.warn('!!!  День закінчено  !!!')
//     })

// ********************************************************* ASYNC AWAIT *****************************************************************


function wakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === 8) {
                console.log('Good morning');
                resolve(8);
            } else {
                reject('Ohh... my friend wake up please');
            }
        }, 300)
    })
}

function brushYourTeeth(paste) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paste) {
                resolve('Ретельно прочисти зуби');
            } else {
                reject('Упс, нам потрібно купити пасту');
            }
        }, 200)
    })
}

function cupOfTea(tea) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tea) {
                resolve('Якщо хочеш то візьми до чаю лимон');
            } else {
                reject('Друже нам потрібно в магазин.... Чаю немає!')
            }
        }, 800)
    })
}

function goStudy(timeTwo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeTwo === 10) {
                resolve('Сідаю вчитись ');
            } else {
                reject('Агов друже а вчитись коли надумав????')
            }
        }, 500)
    })
}

function vacation(timeThree) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeThree >= 14 && timeThree <= 16) {
                resolve('Трішки відпочину');
            } else {
                reject('Ти ще не втомився, працюй!!!!!!!!!');
            }
        }, 300)
    })
}

function eat(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve('Смачного');
            } else {
                reject('От халепа, я ж не вмію готувати!! що я буду їсти???')
            }
        }, 700)
    })
}

function walk(sun) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sun) {
                resolve('Піду трішки пройдусь');
            } else {
                reject('Погода не айс, посиджу дома краще')
            }
        }, 200)
    })
}

function sleep(timeFour) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeFour >= 22) {
                resolve('Пора спати ');
            } else {
                reject('Ще фільм гляну ))');
            }
        }, 600)
    })
}

async function myDay() {
    try {
        let resultWakeUp = await wakeUp(8);
        console.log(resultWakeUp);
        let resultPaste = await brushYourTeeth(true);
        console.log(resultPaste);
        let resultTea = await cupOfTea(true);
        console.log(resultTea);
        let resultStudy = await goStudy(10);
        console.log(resultStudy);
        let resultVocation = await vacation(15);
        console.log(resultVocation);
        let resultEat = await eat(true);
        console.log(resultEat);
        let resultWalk = await walk(true);
        console.log(resultWalk);
        let resultSleep = await sleep(19);
        console.log(resultSleep);
    } catch (err) {
        console.warn(err);
    }
}
myDay()