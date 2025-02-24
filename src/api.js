// // src/api.js

// export async function generateSummary(noteContent) {
//   // Ensure you have added your API key to an .env file as REACT_APP_GOOGLE_GEMINI_API_KEY
//     const API_KEY = "AIzaSyA4RSTFdXzEDEqSOL49bq_1pFJ3-ucUWDE";
     
// const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
   
// console.log("API Key:", endpoint);

//   try {
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({ content: noteContent }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch summary");
//     }

//     const data = await response.json();
//     // Adjust according to actual API response shape; here we assume it returns { summary: "..." }
//     return data.summary;
//   } catch (error) {
//     console.error("Error generating summary:", error);
//     return "";
//   }
// }
