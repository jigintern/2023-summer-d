export async function getQuiz(quizNum){
    try{
        const response=await fetch("/quiz?id="+quizNum);
        const quizData=await response.json();
        return quizData;
    }catch (error){
        console.error(error);
        throw error;
    }
}