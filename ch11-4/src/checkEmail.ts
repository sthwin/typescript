import { checkEmailAddress } from './utils/checkEmailAddress';
import { Validation } from "./classes/Vaildation"

export const checkEmail = (o): [Object, string[]] => {
    const result = Validation.of(a => o)
        .ap(checkEmailAddress(o))

    return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}