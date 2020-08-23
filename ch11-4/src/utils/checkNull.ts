import { Success } from './../classes/Success';
import { Failure } from './../classes/Failure';

export const checkNull = (o: { password?: string }) => {
    const { password } = o;
    return (password == undefined || typeof password != 'string') ?
        new Failure(['Password can not be null']) : new Success(o)
}