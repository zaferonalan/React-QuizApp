
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random - 0.5)
}


export const fetchQuizData = async(difficulty,amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await(await fetch(url)).json();
    console.log(data)
    return data.results.map((dt) => ({
        ...dt,
        answer: shuffleArray([...dt.incorrect_answer, dt.correct_answer])
    }))
}