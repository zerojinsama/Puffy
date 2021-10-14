const loadCoinImages = (objectsImg) => {
    const coinImages = Array.from({ length: 8}, (el, i) => {
        if(i < 4){
            return objectsImg.get(i * 160, 0, 200, 200)
        } else {
            return objectsImg.get(0 * 160, 0, 200, 200)
        }
        
    })  
    return coinImages 
}

const loadMarioImages = (marioImg) => {
    
    const runImages = Array.from({length: 16}, (el, i) => {
        return marioImg.get(i * 160, 0, 160, 160)
    })
    const jumpLeftImages = Array.from({ length: 9}, (el, i) => {
        return marioImg.get(i * 160, 0, 160, 160)
    })
    const jumpRightImages = Array.from({length: 9}, (el, i) => {
        return marioImg.get(i * 160, 0, 160, 160)
    })

    const arr = runImages.concat(jumpLeftImages).concat(jumpRightImages)

    return arr
}

const loadGoombaImages = ( goombaImg ) => {
    
    const goombaImages = Array.from({ length: 5 }, (el, i) => {
        return goombaImg.get(i * 160, 0, 160, 160)
    })

    return goombaImages

    // const goombaDieImages = Array.from({length: 8}, (el, i) => {
    //     if(i < 4){
    //         return goombaImg.get(i * 160, 0, 160, 160)
    //     }else {
    //         return goombaImg.get(4 * 160, 0, 160, 160)
    //     }
    // })

    // return goombaDieImages
}


