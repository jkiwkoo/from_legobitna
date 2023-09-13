const age = 19;

if (age > 20) {
    console.log('운전이 가능합니다.');
} else if (age >= 18) {
    console.log('오토바이 운전은 가능합니다.');
} else {
    console.log('운전이 불가능합니다.');
}

//else 는 모든 조건이 거짓일 때 작동한다.
//if 문 주의점 : 조건들의 순서를 정할 때, 범위가 작은거부터 큰거 순으로 두는 것이 좋다.

if (18 <= age && age < 20) {
    console.log('술을 마실 수 있습니다.');
} else {
    console.log('술을 마실 수 없습니다.');
}

//예제 1
const num = 0;

if (num == 0) {
    console.log('zero');
} else if (num > 0) {
    console.log('positive');
} else if (num < 0) {
    console.log('negative');
}

// 예제 2
const score = 86;
if (score <= 100 && score >= 90) {
    console.log('grade : A');
} else if (score <= 89 && score >= 80) {
    console.log('grade : B');
} else if (score <= 79 && score >= 70) {
    console.log('grade : C');
} else if (score <= 69 && score >= 60) {
    console.log('grade : D');
} else {
    console.log('ㅂㅅ');
}

// 예제 3
const skills = ['html', 'css', 'javascript', 'react'];

if (skills.includes('javascript') && skills.includes('react')) {
    console.log('pass');
} else if (skills.includes('javascript') || skills.includes('react')) {
    console.log('pend');
} else {
    console.log('not pass');
}
