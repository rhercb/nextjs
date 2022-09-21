import {useRef, useState} from "react";
import feedback from "./api/feedback";

function HomePage() {
    const emailRef = useRef();
    const feedbackRef = useRef();
    const [feedback, setFeedback] = useState([])

    function formSubmit(e) {
        e.preventDefault();

        const enteredEmail = emailRef.current.value;
        const feedback = feedbackRef.current.value;

        fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                text: feedback
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => console.log(data))
    }

    function loadFeedback() {
        fetch("/api/feedback").then(res => res.json()).then(data => setFeedback(data.feedback))
    }
  return (
    <div>
      <h1>The Home Page</h1>
        <form onSubmit={(e) => formSubmit(e)}>
            <div>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="feedback">Feedback</label>
                <textarea rows="5" id="feedback" ref={feedbackRef}/>
            </div>
            <button type="submit">Send Feedback</button>
        </form>
        <hr/>
        <button onClick={loadFeedback}>Get Data</button>
        <ul>
            { feedback.map(item => <li key={item.id}>{item.feedback}</li>) }
        </ul>
    </div>
  );
}

export default HomePage;
