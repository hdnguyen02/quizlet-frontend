


export default function calc(quality, repetitions, previousInterval, previousEaseFactor) {
    
    let easeFactor; 
    let interval; 

    if (repetitions == 0) {
        interval = 1
        repetitions++ 
    }
    else if (repetitions == 1) {
        interval = 4
        repetitions++
    }
    else if (quality >= 3) {
        interval = Math.floor(previousEaseFactor * previousInterval)
        repetitions++ 
        easeFactor = Math.min(previousEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)), 2.5) 
        easeFactor = easeFactor.toFixed(3)
    }
    else { // câu trả lời nhỏ < 3 => khó
        repetitions = 0
        interval = 1
        easeFactor = 2
    }
    if (easeFactor < 1.3) easeFactor = 1.3
    return { repetitions, easeFactor, interval }
} 

export const quality = {
    hard: 1, 
    medium: 3, 
    good: 4, 
    veryGood: 6 
}

