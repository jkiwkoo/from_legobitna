let patient = {
    name: 'taeyeon',
    age: 18,
    location: 'seoul',
};

console.log(patient);
console.log(patient.name);
console.log(patient['name']);
patient.name = 'ty';
patient['age'] = 25;
console.log(patient);

let patientList = [
    { name: 'taeyeon', age: 19 },
    { name: 'ty', age: 22 },
    { name: 'taeyeony', age: 24 },
];

console.log(patientList);
console.log('첫번째 환자는', patientList[0]);
console.log('첫번째 환자는', patientList[0].age);
