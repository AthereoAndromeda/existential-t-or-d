import { readable } from "svelte/store";

const truths = [
  "Until what age do you see yourself still living?",

  "Do you think life is still worth living?",

  "What is your main motivation to live?",

  "What do you think is the reason we live?",

  "In your opinion, how does one truly live?",

  "Does anything matter?",
  
  "What's a quote you stand by alot, and why do you stand by it?",

  "What's your biggest regret in life?",

  "What's the most embarrasing thing you did to get someone's attention?",

  "Describe the greatest day of your life.",

  "Are you scared of getting old?",

  "List a positive and negative trait for each person playing",

  "Describe your biggest fear.",

  "What are you most anxious about?",

  "Describe your philosophy in life."
];

export default readable(truths);
