import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Media = () => {
  const [open, setIsOpen] = useState(false);
  const history = useNavigate();

  const handleClick = () => {
    history("/cards");
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      history("/cards");
    }, 600);
  };

  return (
    <div>
      <section className="media">
        <p className="headline">Create Text & Media</p>

        <article className="media-parent">
          <main className="media-container">
            <div className="top">
              <div className="heading1">
                <label for="heading1">Heading 01</label>
                <input
                  type="text"
                  name="heading1"
                  id="heading1"
                  placeholder="Add a heading that would make users interested"
                />
              </div>
              <div className="heading2">
                <label for="heading2">Heading 02</label>
                <input
                  type="text"
                  name="heading2"
                  id="heading2"
                  placeholder="Add a heading that would make users interested"
                />
              </div>
            </div>
            <div className="right">
              <div className="description">
                <label for="description">Description</label>
                <textarea
                  rows={6}
                  cols={5}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add primary text to help users understand more
              about your products,services or offer"
                />
              </div>
            </div>
          </main>
          <div className="middle">
            <div className="landscape">
              <label for="landscape">Landscape Marketing Image (1:9:1)</label>
              <input
                type="text"
                id="landscape"
                name="landscape"
                placeholder="Add the URL that you want to use for ads"
              />
            </div>
            <div className="portrait">
              <label for="portrait">Portrait Marketing Image (4:5)</label>
              <input
                type="text"
                id="portrait"
                name="portrait"
                placeholder="Add the URL that you want to use for ads"
              />
            </div>
            <div className="square">
              <label for="square">Square Marketing Image (1:1)</label>
              <input
                type="text"
                id="square"
                name="square"
                placeholder="Add the URL that you want to use for ads"
              />
            </div>
          </div>
          <div className="video-url">
            <label for="video-url">Video URL</label>
            <input
              type="text"
              name="video-url"
              id="video-url"
              placeholder="Add the URL of the landing page you want to redirect to"
            />
          </div>

          <div className="bottom">
            <div className="business">
              <label for="business">Business Name</label>
              <input
                className="buss"
                type="text"
                name="business"
                id="business"
                placeholder="Add your business name"
              />
            </div>
            <div className="button">
              <label for="button">Button Lable</label>
              <select id="button">
                <option>Select a lable that best suits your ad</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
          </div>

          <div className="website-url">
            <label for="website-url">Website URL</label>
            <input
              type="text"
              name="website-url"
              id="website-url"
              placeholder="Add the URL of the landing page you want to redirect to"
            />
          </div>

          <section className="btn-container">
            <button className="back" onClick={handleClick}>
              Back
            </button>
            <button className="submit" onClick={handleOpen}>
              Submit
            </button>
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Submitted!!
                </Typography>
              </Box>
            </Modal>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Media;
