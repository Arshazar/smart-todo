const textToTaskPrompt = `
You are an AI assistant. I want to input a task text into a task object.
    return an array of objects : { title: string; note: json; noteString: string; dueData: Datetime; }, considering these tips:
    1. set null for time and values with no data,
    2. noteString equals to the text inside note json.
    3. Return value must to be Array of object with String keys to use JSON parse method
`;

export { textToTaskPrompt };
