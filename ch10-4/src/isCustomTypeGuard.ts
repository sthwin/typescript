import { Bird, Fish } from './BirdAndFish'

export const isFlyable = (o: Bird | Fish): o is Bird => {
    return o instanceof Bird
}

export const isSwimmable = (o: Bird | Fish): o is Fish => {
    return o instanceof Fish
}

export const flyOrSWim = (o:Bird | Fish): void => {
    if(isFlyable(o))
        o.fly()
    else if(isSwimmable(o))
        o.swim()
}


[new Bird, new Fish].forEach(flyOrSWim)