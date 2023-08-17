export async function getEndJson(endNum){

    try{
        const response=await fetch("/quizend?id="+endNum);
        const endData=await response.json();
        console.log(endData)
        return endData;
    }catch (error){
        console.error(error);
        throw error;
    }
    
}