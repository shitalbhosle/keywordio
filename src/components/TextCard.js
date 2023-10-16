import React from "react";
import { useNavigate } from "react-router-dom";
const TextCard = (props) => {
  const history = useNavigate();

  const handleClick = (e) => {
    if (props.checked.first) {
      history("/text");
    } else if (props.checked.second) {
      history("/media");
    }
  };
  return (
    <div className="text-media">
      <main className="cards">
        <article className="card">
          <label className="checkbox-label">
            <input
              className="box"
              type="checkbox"
              checked={props.checked.first}
              onChange={(e) =>
                props.setIsChecked({
                  ...props.checked,
                  first: e.target.checked,
                  second: false,
                })
              }
            />
            <div className="text-header">
              <p>Text</p>
              <h4>Text Ad</h4>
              <p className="text-info">
                A text ad is a form of marketing communication that advertisers
                can use to promote their product or service on the Google
                Network.
              </p>
            </div>
          </label>
        </article>
        <article className="card">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="box"
              checked={props.checked.second}
              onChange={(e) =>
                props.setIsChecked({
                  ...props.checked,
                  second: e.target.checked,
                  first: false,
                })
              }
            />
            <div className="text-header">
              <p>Text</p>
              <h4>Media Ad</h4>
              <img
                className="media-img"
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaWElMjBhZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="media"
              />
            </div>
          </label>
        </article>
      </main>
      <div className="button-container">
        <button className="next-btn" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TextCard;
