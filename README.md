# typescript

## 각 챕터 사용 방법
챕터 각각은 하나의 독립적인 프로젝트이며, 실행시키기 위해서는 package.json 에 등록되어있는 모듈들을 다운로드 받아야 함(node_modules 폴더에 저장됨).
다운로드는 다음 명령어를 통해 실행

## 타입스크립트 프로젝트 작성 방법

package.json 파일 생성
```
npm init --y
```

typescript 와 ts-node 패키지를 -D 옵션으로 설치해 package.json 에 등록
```
npm i -D typescript ts-node
```
타입스크립트는 웹브라우저나 노드제이에스가 기본으로 제공하는 타입들의 존재를 그냥 알직 못함. 예를들어, Promise 와 같은 타입을 이용하려면 @types/node 라는 패키지를 설치해야함. 
아래의 명령어를 이용해 설치
```
npm i -D @types/node
```

