import { Success } from './../classes/Success';
import { Failure } from './../classes/Failure';

export const checkLength = (o: { password?: string }, minLength = 6) => {
    const { password } = o
    return (!password || password.length < minLength) ?
        new Failure(['Password must have more than 6 charaters']) : new Success(o)

}