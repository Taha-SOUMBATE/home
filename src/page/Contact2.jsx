import { useRef } from "react";
function Contact2() {
  const number = useRef(0);
  const email = useRef("");
  const password = useRef("");
  const submit = (e) => {
    e.preventDefault();
    alert(email.current.value + " " + password.current.value);
    email.current.value = "";
    number.current.innerText += 1;
  };
  return (
    <div className="container ">
      <form onSubmit={submit} className="mx-5 mt-5 px-5">
        <div className="form-group">
          <p>{number.current}</p>
          <label htmlFor="exampleInputEmail1">text</label>
          <input type={"text"} className="form-control" ref={email} aria-describedby="emailHelp" placeholder="Enter text" />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type={"password"} className="form-control" ref={password} placeholder="Password" />
        </div>
        <div className="form-check">
          <input type={"checkbox"} className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact2;
