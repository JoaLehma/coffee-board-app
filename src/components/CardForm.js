import { useState } from "react";

export default function CardForm({ author, content, onSubmit }) {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Author{" "}
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
          Content{" "}
          <input
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
  );
}
