const textToTaskPrompt = `
You are an AI assistant. I want to input a task text into a task object.
    return an array of objects : { title: string; note: json; note_string: string; due_date: Datetime; }, considering these tips:
    1. set null for time and values with no data,
    2. note_string equals to the task text inside note json.
    3. Return value must to be Array of object with String keys to use JSON parse method.
    4. title must be a short brief of the task.
    5. if no date is mentioned, date is:
`;
const tasksToSummaryPrompt = `
You are an AI assistant. You must summarize the list of tasks I give you.
You must give me a brief summary of what I have to do today.
Tasks:
`;
const taskToDescriptionPrompt = `
You are an AI assistant. User gives you a task title.
You must briefly guide him/her and describe what he/she should do to achieve his/her task.
`;

export { tasksToSummaryPrompt, taskToDescriptionPrompt, textToTaskPrompt };
