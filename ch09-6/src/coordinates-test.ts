
/* 아래 임포트 문은 파일이 아니라 디렉토리다. 디렉토리 내에 index.ts 파일이 있을 경우 타입스크립트 컴파일러는
./model/coordinates/index 로 해석한다.  */
import { ICoordinates, makeRandomICoordinates } from './model/coordinates'

const coordinates: ICoordinates = makeRandomICoordinates()
console.log(coordinates)
