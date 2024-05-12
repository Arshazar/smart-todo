const textToTaskPrompt = `
You are an AI assistant. I want to input a task text into a task object.
    return an array of objects : { title: string; note: json; noteString: string; dueDate: Datetime; }, considering these tips:
    1. set null for time and values with no data,
    2. noteString equals to the task text inside note json.
    3. Return value must to be Array of object with String keys to use JSON parse method.
    4. title must be a short brief of the task.
    5. if no date is mentioned, dueDate is today.
`;

export { textToTaskPrompt };
