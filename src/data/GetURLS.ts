
function GetURLS(title:string){

    let URLS:string[];

    if(title === 'StarBucks CloneCoding'){
        return URLS= [
            '/detail/starbucks',
            'https://github.com/LSH319/starbucksCloneCoding',
            'https://lsh319.github.io/starbucksCloneCoding/'];
    }
    if(title === 'React Tutorial'){
        return URLS= [
            '/detail/reactTutorial',
            'https://github.com/LSH319/React_tutorial',
            'https://lsh319.github.io/React_tutorial/'];
    }
    if(title === 'React Practice'){
        return URLS= [
            '/detail/reactPractice',
            'https://github.com/LSH319/React-practice',
            'https://lsh319.github.io/React-practice/'];
    }
    if(title === 'Soomgo CloneCoding'){
        return URLS= [
            '/detail/soomgo',
            'https://github.com/LSH319/React_tutorial',
            'https://lsh319.github.io/SoomgoCloneCoding/'];
    }
    if(title === 'ETC'){
        return URLS= ['/etc'];
    }

}

export default GetURLS;