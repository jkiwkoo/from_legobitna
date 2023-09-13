const fruit = ['banana', 'apple', 'grape', 'mango'];
console.log(fruit);
console.log(fruit[3]);

fruit[0] = 'cherry';
console.log(fruit);

fruit.pop(); // 마지막 값을 제거
console.log(fruit);

fruit.push('pineapple'); // 마지막에 값을 추가
console.log(fruit);

console.log(fruit.includes('pear')); // 포함하고 있는지 없는지

console.log(fruit.indexOf('apple')); // 몇번째인지 알려줌

//console.log(fruit.splice(2)); // 2번째부터 짤라냄

console.log(fruit.slice(1, 3)); // 1포함해서 3 이전까지 잘라냄

fruit.splice(2, 1); // 2번째 포함해서 첫번째 아이템을 짤라냄
console.log(fruit);

//예제

let animals = [
    'aardvark',
    'albatross',
    'alligator',
    'alpaca',
    'ant',
    'ape',
    'armadillo',
    'donkey',
    'baboon',
    'badger',
    'barracuda',
    'bat',
    'bear',
    'beaver',
    'bee',
    'bison',
    'cat',
    'caterpillar',
    'cattle',
    'chamois',
    'cheetah',
    'chicken',
    'chimpanzee',
    'chinchilla',
    'chough',
    'clam',
    'cobra',
    'cockroach',
    'cod',
    'cormorant',
    'dugong',
    'dunlin',
    'eagle',
    'echidna',
    'eel',
    'eland',
    'elephant',
    'elk',
    'emu',
    'falcon',
    'ferret',
    'finch',
    'fish',
    'flamingo',
    'fly',
    'fox',
    'frog',
    'gaur',
    'gazelle',
    'gerbil',
    'giraffe',
    'grasshopper',
    'heron',
    'herring',
    'hippopotamus',
    'hornet',
    'horse',
    'kangaroo',
    'kingfisher',
    'koala',
    'kookabura',
    'moose',
    'narwhal',
    'newt',
    'nightingale',
    'octopus',
    'okapi',
    'opossum',
    'quail',
    'quelea',
    'quetzal',
    'rabbit',
    'raccoon',
    'rail',
    'ram',
    'rat',
    'raven',
    'red deer',
    'sandpiper',
    'sardine',
    'sparrow',
    'spider',
    'spoonbill',
    'squid',
    'squirrel',
    'starling',
    'stingray',
    'tiger',
    'toad',
    'whale',
    'wildcat',
    'wolf',
    'worm',
    'wren',
    'yak',
    'zebra',
];
console.log(animals);

// 어레이에 마지막 아이템 'zebra' 제거하기
animals.pop();
console.log(animals);

//주어진 어레이에 'Dog' 추가하기
animals.push('dog');
console.log(animals);

//주어진 어레이에 'mosquito','mouse','mule' 추가하기
animals.push('mosquito', 'mouse', 'mule');
console.log(animals);

//해당 어레이는 'human' 이 있음??
console.log(animals.includes('human')); // false 값이 나옴

//해당 어레이는 'cat' 이 있음??
console.log(animals.includes('cat')); // true 값이 나옴

//Red deer 을 Deer로 바꾸시오
animals[animals.indexOf('red deer')] = 'deer';
console.log(animals);

//Spider 부터 3개의 아이템을 기존 어레이에서 제거 하십시요
animals.splice(animals.indexOf('spider'), 3);
console.log(animals);

//tiger 이후의 값을 제거하시오
animals.splice(animals.indexOf('tiger'));
console.log(animals);

//'b' 로 시작 되는 아이템인 'baboon' 부터 'bison'까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf('baboon'));
let bword = animals.slice(animals.indexOf('baboon'), animals.indexOf('bison') + 1);
console.log(bword);
