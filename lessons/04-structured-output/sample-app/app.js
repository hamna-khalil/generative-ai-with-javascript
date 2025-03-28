import { OpenAI } from "openai";

// Distance to the hill
const distance = 100;

// Create prompt including inputs should include chain of thought

const boot_sequence = `left left up right`;

const prompt = `TODO`;

// Call the language model with the prompt

const messages = [
{
    "role": "user",
    "content": prompt
}];

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

// 3. Send the request
// -----------------------------------

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
});

console.log(`Answer for "${prompt}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);
