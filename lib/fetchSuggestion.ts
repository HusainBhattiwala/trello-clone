import formatTodosForAi from "./formatTodosForAi";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAi(board);
  console.log("Formatted todos to send >>", todos);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { context } = GPTdata;

  return context;
};

export default fetchSuggestion;
