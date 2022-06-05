import React, { useState, useEffect } from "react";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { useLocation } from "react-router-dom";

function FormApi(props) {
  const location = useLocation();

  const [api, setApi] = useState({
    author: "",
    title: "",
    description: "",
    image: "",
    id: "",
  });

  const [image1, setImage1] = useState();

  // set key for uplaod image
  const uploader = new Uploader({
    apiKey: "public_W142hQJC8kh1gXAQ46bZBN2pAPjm",
  });

  const sendImageToServer = async (files) => {
    if (files) {
      const { fileUrl } = files[0].originalFile;
      setImage1(fileUrl);
    } else {
      alert("not found");
    }
  };

  const handleText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setApi({ ...api, [name]: value });
  };

  // send api
  const sendApi = async () => {
    setApi({ ...api, image: image1 });

    const { image, title, author, description } = api;

    try {
      if (!title || !description || !author) {
        alert("please fill all field");
      } else if (!image) {
        alert("please send again ");
      } else {
        const resp = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: author,
            title: title,
            description: description,
            image: image,
          }),
        });

        const data = await resp.json();

        if (resp.status === 200) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // update api
  const updateApi = async () => {
    setApi({ ...api, image: image1 });

    const { image, title, author, description, id } = api;

    try {
      if (!title || !description || !author) {
        alert("please fill all field");
      } else if (!image) {
        alert("please update image send one more");
      } else {
        const resp = await fetch("/api", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: author,
            title: title,
            description: description,
            image: image,
            id: id,
          }),
        });

        const data = await resp.json();

        if (resp.status === 200) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  //   upadate content
  const setUpdate = () => {
    if (location.state !== null) {
      setApi({
        author: location.state.apiupdate.author,
        title: location.state.apiupdate.title,
        description: location.state.apiupdate.description,
        image: location.state.apiupdate.image,
        id: location.state.apiupdate._id,
      });
    }
  };

  useEffect(() => {
    setUpdate();
  }, []);

  return (
    <div className="container mt-4">
      <div className="title">
        <h1>Create new api 🎫</h1>
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleFormControlInput1" className="form-label">
          Your Name *
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="john doe"
          name="author"
          value={api.author}
          onChange={handleText}
          required
        />
      </div>
      <div className="mb-3 mt-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title *
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="a make new example"
          name="title"
          value={api.title}
          onChange={handleText}
          required="true"
        />
      </div>

      <div className="mb-3">
        <UploadDropzone
          uploader={uploader}
          options={{
            multi: false,
            maxFileSizeBytes: 5 * Math.floor(Math.pow(10, 7)),
          }}
          onUpdate={(files) => sendImageToServer(files)}
          width="100%"
          height="200px"
        />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description *
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="description"
          value={api.description}
          onChange={handleText}
          required
        ></textarea>
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => sendApi()}
        >
          create api
        </button>

        <button
          type="button"
          className="btn btn-outline-warning"
          title="double click to update"
          disabled={location.state ? false : true}
          onClick={() => updateApi()}
        >
          update api
        </button>
      </div>
    </div>
  );
}

export default FormApi;
