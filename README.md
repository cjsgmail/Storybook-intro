# STORYBOOK INTRO

## 스토리북을 왜 사용하는가

- 각각의 컴포넌트들을 따로 볼 수 있게 구성해 주어 한 번에 하나의 컴포넌트에서 작업할 수 있습니다.
- 복잡한 개발 스택을 시작하거나, 특정 데이터를 데이터베이스로 강제 이동하거나, 애플리케이션을 탐색할 필요 없이 전체 UI를 한눈에 보고 개발할 수 있습니다.
- Storybook은 재사용성을 확대하기 위해 컴포넌트를 문서화하고, 자동으로 컴포넌트를 시각화하여 시뮬레이션할 수 있는 다양한 테스트 상태를 확인할 수 있습니다.
- 테스트 및 개발 속도를 향상시키는 장점이 있으며, 애플리케이션 또한 의존성을 걱정하지 않고 빌드할 수 있습니다.
- 회사의 UI 라이브러리로써 사용하거나, 외부 공개용 디자인 시스템(Design System)을 개발하기 위한 기본 플랫폼으로 사용할 수 있습니다.

## 스토리북 시작하기

- npx sb init
- npm run storybook

## 스토리북 초기 세팅

- title : 컴포넌트 이름으로, '/'를 넣어 카테고리화 할 수 있습니다.
- component : 어떤 컴포넌트를 가져와서 스토리로 만들 것인지 명시합니다.
- argTypes : 컴포넌트에 필요한 전달인자의 종류와 타입을 정해줍니다.

```js
export default {
  title: "Practice/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    textColor: { control: "text" },
  },
};
```

## 왜 컴포넌트 기반의 라이브러리가 유행하게 되었을까?

<p>컴포넌트는 독립적인 단위 모듈이다. 독립적이라는 것이 중요하다. 인터페이스의 영향을 받기는 하지만 각각이 독립적이다. 개발을 설계할 때는 작고 독립적인 단위부터 개발해야 한다. 이게 전체 설계를 하기전에 독립적인 것들을 개발해야 한다고 말하는 것은 아니다. 오히려 전체적인 맥락을 파악해야 한다. 디자인 파일을 보고 위에서부터 아래까지 페이지를 만드는것이 아니라 작은 단위로 쪼개서 생각을 해야한다는 것이다.(윤민상님 블로깅 참고 https://ms3864.tistory.com/433)</p> 
