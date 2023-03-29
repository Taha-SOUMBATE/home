import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  function cname(e) {
    setName(e.target.value);
  }
  function cemail(e) {
    setEmail(e.target.value);
  }
  function cmassage(e) {
    setMassage(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    let data = {
      to_name: name,
      to_email: email,
      to_message: massage,
    };
    emailjs
      .send("service_ljql5r8", "template_5ol9cwl", data, "XLS4AhdHMRsqg0QSS")
      .then(() => {
        toast.success("envoyer le messase", {
          duration: 9000,
        });

        setName("");
        setEmail("");
        setMassage("");
      })
      .catch(() => {
        alert("bad");
      });
  }
  return (
    <div className="container w-50 mt-5 pt-5">
      <form onSubmit={submit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            name="myInput"
            type={"text"}
            value={name}
            className="form-control"
            onChange={cname}
            id="exampleFormControlInput2"
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            name="myInput"
            type={"email"}
            value={email}
            className="form-control"
            onChange={cemail}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            value={massage}
            id="exampleFormControlTextarea1"
            onChange={cmassage}
            placeholder="comment"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn mt-3">
          cklick
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </div>
  );
}
