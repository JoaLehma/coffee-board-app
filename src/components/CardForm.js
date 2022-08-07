import { useState } from "react";
import StyledFieldset from "./StyledFieldset";

export default function CardForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      author,
      content,
    });
  }

  return (
    <StyledFieldset>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Author:
            <input
              name="author"
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Content:
            <input
              type="text"
              name="content"
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </StyledFieldset>
  );
}
