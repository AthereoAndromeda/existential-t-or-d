import { readable } from "svelte/store";

const truths = [
  "Until what age do you see yourself still living?",

  "Do you think life is still worth living?",

  "What is your main motivation to live?",

  "What do you think is the reason we live?",

  "In your opinion, how does one truly live?",

  "Does anything matter?",
];

export default readable(truths);
