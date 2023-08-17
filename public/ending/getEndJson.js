export async function getEndJson(endNum){

    try{
        const response=await fetch("/end?id="+endNum);
        const quizData=await response.json();
        return quizData;
    }catch (error){
        console.error(error);
        throw error;
    }
    
}