# typescript

## 각 챕터 사용 방법
챕터 각각은 하나의 독립적인 프로젝트이며, 실행시키기 위해서는 package.json 에 등록되어있는 모듈들을 다운로드 받아야 함(node_modules 폴더에 저장됨).
다운로드는 다음 명령어를 통해 실행

## 타입스크립트 프로젝트 작성 방법

### package.json 파일 생성
```
npm init --y
```
### typescript 와 ts-node 패키지를 -D 옵션으로 설치해 package.json 에 등록
```
npm i -D typescript ts-node
```
### @types/node 패키지 등록
타입스크립트는 웹브라우저나 노드제이에스가 기본으로 제공하는 타입들의 존재를 그냥 알직 못함. 예를들어, Promise 와 같은 타입을 이용하려면 @types/node 라는 패키지를 설치해야함. 
아래의 명령어를 이용해 설치
```
npm i -D @types/node
```
### tsconfig.json 파일 생성
타입스크립트 프로젝트는 타입스크립트 컴파일러의 설정 파일인 tsconfig.json 파일이 있어야 함.
생성 방식은 다음과 같음
```
tsc --init
```
tsconfig.json 구성보는 다음과 같음
```yaml
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    "outDir": "dist",                        /* Redirect output structure to the directory. */
    "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "noImplicitAny": false,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": ".",                       /* Base directory to resolve non-absolute module names. */
    "paths": { "*": ["node_modules/*"]},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "include": ["src/**/*"]                     /* ./src 와 ./src/utils 디렉토리에 이 프로젝트의 모든 타입스크립트 소스 파일이 있다는것을 의미*/
}
```
