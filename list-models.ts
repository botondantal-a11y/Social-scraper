import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("No API key provided.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  // Try using fetch directly to list models since the SDK might not expose listModels clearly.
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  const data = await response.json();
  console.log(JSON.stringify(data.models.map((m: any) => m.name), null, 2));
}

run();
