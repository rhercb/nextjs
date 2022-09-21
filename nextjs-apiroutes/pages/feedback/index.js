import {buildFeedbackPath, extractFeedback} from "../api/feedback";
import {useState} from "react";

const FeedbackPage = (props) => {
    const [data, setData] = useState();

    function loadFeedback(id) {
        fetch(`/api/${id}`).then(res => res.json()).then(data => {
            setData(data)
        })
    }

    return (
        <>
            { data && <p>{ data.email }</p> }
            <ul>
                {
                    props.feedbackItems.map(item => <li key={item.id}>
                        {item.feedback}
                        <button onClick={() => loadFeedback(item.id)}>Show more details</button>
                    </li>)
                }
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const path = buildFeedbackPath();
    const data = extractFeedback(path)

    return {
        props: {
            feedbackItems: data
        }
    }
}

export default FeedbackPage