export async function getEndJson(endNum){

    try{
        const response=await fetch("/result?id="+endNum);
        const endData=await response.json();
        return endData;
    }catch (error){
        console.error(error);
        throw error;
    }
    
}