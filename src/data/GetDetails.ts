function GetDetails(id:string):string[][]{

    let title:string[];
    let text:string[];

    if(id === 'starbucks'){
        title = [
            'HTML, CSS, JS 기초 학습',
            '강의를 보며 클론코딩'
        ];
        text = [
            'HTML,CSS,JS에 관한 기초지식과 각 파일들의 연동 방법, 여러가지 속성등에 대하여 학습하고 해당 학습을 통하여 클론코딩을 진행해 보았다.',
            '강의를 보며 클론코딩을 진행하였고 이를 통하여 실제로 사용할때 어떤식으로 사용하는지를 직접 느껴보았고 외부 api등을 사용함으로서 여러가지 응용력에 대하여 생각해 볼 수 있었다.'
        ];
        return [title,text];
    }
    if(id === 'reactTutorial'){
        title = [
            'React 공식홈페이지의 자습서를 따라 진행'
        ];
        text = [
            'React 공식홈페이지의 자습서를 보며 코드를 치고 해당 코드가 어떤 동작을 하는지에 대해 익히는 과정이었다. React 라이브러리의 문법에 대해 이해하고, State에 대한 이해와 데이터를 어떻게 주고받는지에 대하여 학습할 수 있었다.'
        ];
        return [title,text];
    }
    if(id === 'reactPractice'){
        title = [
            'React에서 데이터를 받아 사용하는 방법',
            'Reacr Router에 관한 사용법'
        ];
        text = [
            '오픈api에 접속하여 json으로 된 값을 받아와 해당 값을 토대로 화면에 데이터를 출력하는 방법에 대하여 학습해보았다.',
            'React Router에 대한 개념과 해당 사용법에 관해 학습하였다. 이중 url 뒤쪽에 원하는 파라미터를 :을 통하여 넣어주면 같은 페이지지만 파라미터에 따라 다른 값을 받아와 화면에 보여줄수 있다는걸 학습하였다.'
        ];
        return [title,text];
    }
    if(id === 'soomgo'){
        title = [
            '혼자서 해보는 React',
            '컴포넌트의 재사용성'
        ];
        text = [
            '지금까지 학습한 내용을 토대로 실제 있는 홈페이지를 보고 따라만드는 작업을 해보았다. 이 작업을 해보면서 css에 대한 이해도가 많이 부족했음을 느끼고 다시 학습해 보았으며, 아직 공부할 부분이 많이 있다는 것을 느낄 수 있었다.',
            '작업을 할 떄 swiper api를 사용하였는데 같은 swiper 속성에 내용만 다르게 넣어서 화면에 출력해주는 부분들이 많이 보였다. 이러한 부분들을 하나하나 직접 만드는것이 아니라 하나의 컴포넌트를 만들고 해당 컴포넌트에 필요한 데이터를 넘겨주면서 컴포넌트를 어떻게 재사용하는지 직접 느껴볼 수 있었고, 컴포넌트를 어떻게 만드는게 좋은지에 대해 한번 더 생각해 보았다.'
        ];
        return [title,text];
    }
    if(id === 'etc'){
        title = [
            'React Router를 사용하여 Gh-pages에 퍼블리싱 할 때 빈 화면만 생기는 오류 해결 방법',
            'ts확장자와 tsx확장자',
            'img가 액박으로 나오는 경우',
            'for문에 관하여'
        ];
        text = [
            'Gh-pages가 생성한 url과 라우터가 인식하는 url의 차이로 인하여 생기는 현상. 코드상 라우터 부분에 basename={process.env.PUBLIC_URL}를 추가함으로서 동적으로 변하는 url을 삽입해주는것으로 해결 가능하며 basename삽입 후에도 문제가 있을경우 빌드된 파일의 index를 확인해본다. 다른 파일들을 불러오는 경로에 /static 앞부분에 추가로 붙어있는 경로가 있다면 해당 부분을 제거해준다.',
            'tsx의 경우 jsx문법을 사용하기 위한 확장자. 컴포넌트를 생성하여 사용할 경우 tsx 확장자로 만든다. 컴포넌트로 사용하지 않고 데이터의 처리만 할거라면 ts확장자로도 가능하다.',
            '코드 작성 후 img가 액박으로 나오는 경우 require(경로).default 혹은 import 이름 from 이미지경로의 방식으로 해결할 수 있다. import로 불러올시 사용하지 않는 코드는 웹팩에서 빌드시 제거해 주지만 require의 경우는 모든것을 불러온다. import가 더 권장되는 것으로 생각된다.',
            'return문 안에서 for문은 사용할 수 없다. 그대신으로 map함수를 사용하는데 꼭 for문을 사용해야 하는 경우는 for문을 수행하는 함수를 만들고 해당 함수를 return문에서 불러오는 것으로 사용 할 수 있다.'
        ];
        return [title,text];
    }
    return[[],[]];
}

export default GetDetails;