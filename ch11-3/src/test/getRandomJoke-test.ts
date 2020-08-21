import * as R from 'ramda'
import { getRandomJoke, JokeType } from '../getRandomJoke'

getRandomJoke()
    .then((jokeItem: JokeType) => {
        const joke = R.view(R.lensProp('joke'))(jokeItem)
        console.log(joke)
    })
    .catch((e: Error) => console.log(e.message))