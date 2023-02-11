const question = [
    {
        'que': 'which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'In which year JavaScript was launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'what does CSS stand for?',
        'a': 'Hyper text markup language',
        'b': 'Cascading style sheet',
        'c': 'Jason object notation',
        'd': 'none',
        'correct': 'b'
    },
    {
        'que': 'Is JavaScript a case-sensitive language?',
        'a': 'No',
        'b': 'Maybe',
        'c': 'Yes',
        'd': 'Sometimes',
        'correct': 'c'
    },
    {
        'que': 'what is the main work of CSS?',
        'a': 'For development purpose',
        'b': 'To compile',
        'c': 'To host a webpage',
        'd': 'Styling and laying out webpages',
        'correct': 'd'
    },
 
]
let index = 0;
let total = question.length;
let correct = 0;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = question[index]
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
               answer = input.value; 
        }
    }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3> Thank you for playing the Quiz! </h3>
        <h2> ${right} / ${total} are correct </h2>
    `
}






//initial call
loadQuestion();