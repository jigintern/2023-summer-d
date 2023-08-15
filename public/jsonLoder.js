export let  jsonData;

export async function jsonLoad(quizNum){
    try{
        const response=await fetch("/quiz/"+quizNum);
        const quizData=await response.json();
        return quizData;
    }catch (error){
        console.error(error);
        throw error;
    }
}