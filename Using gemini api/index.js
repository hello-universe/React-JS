const { GoogleGenerativeAI } = require("@google/generative-ai");

const api_key = "AIzaSyAGLqGDtcDam7OnpDVv1SLvux91NDxF7UI";
const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Hi, how are you?";

async function getResponse(prompt) {
    try{
        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
        return result.response.text();
    }
    catch(error){
        console.log(error);
        return ;
    }
}
// getResponse(prompt);
const result = getResponse(prompt);
console.log(result);
