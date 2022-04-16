function GetDetails(id:string){

    let title:string[];
    let text:string[];

    if(id === 'starbucks'){
        title = [
            'HTML, CSS, JS 기초 학습',
            '강의를 보며 클론코딩'
        ];
        text = [
            '',
            ''
        ];
        return [title,text];
    }
    if(id === 'reactTutorial'){
        title = [
            ''
        ];
        text = [
            ''
        ];
        return [title,text];
    }
    if(id === 'reactPractice'){
        title = [
            ''
        ];
        text = [
            ''
        ];
        return [title,text];
    }
    if(id === 'soomgo'){
        title = [
            ''
        ];
        text = [
            ''
        ];
        return [title,text];
    }
    if(id === 'etc'){
        title = [
            ''
        ];
        text = [
            ''
        ];
        return [title,text];
    }
}

export default GetDetails;