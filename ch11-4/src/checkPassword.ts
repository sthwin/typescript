import { checkLength } from './utils/checkLength';
import { checkNull } from './utils/checkNull';
import { Validation } from './classes/Vaildation';

export const checkPassword = (o): [object, string[]] => {
    const result = Validation.of(a => b => o)
        .ap(checkNull(o))
        .ap(checkLength(o))

    return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}