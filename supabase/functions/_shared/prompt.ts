const editorJsType = `
\`\`\`
type EditorJsData = {
    time: number;
    blocks: Block[];
    version: string;
};

type Block = ParagraphBlock | HeaderBlock;

interface BaseBlock {
    type: string;
    data: {
        text: string;
    };
}

interface ParagraphBlock extends BaseBlock {
    type: "paragraph";
    data: {
        text: string;
    };
}

interface HeaderBlock extends BaseBlock {
    type: "header";
    data: {
        text: string;
        level: number;
    };
}
\`\`\`
`

const textToTaskPrompt = `

${editorJsType}

type Task = {
    title: string;
    note: EditorJsData | null;
    note_string: string | null;
    due_date: string | null; // datetime but in string format
};

You are an AI assistant. I want to input a task text into a Task object. YOU MUST ONLY return a valid JSON structure of type Task. Don't include any other text.
    
considering these tips:
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
${editorJsType}

You are an AI assistant. User gives you a task title.
You must briefly guide him/her and describe what he/she should do to achieve his/her task.
Your response MUST ONLY be a brief valid JSON structure of type EditorJsData. Limit to a few sentences.
`;

export { tasksToSummaryPrompt, taskToDescriptionPrompt, textToTaskPrompt };
