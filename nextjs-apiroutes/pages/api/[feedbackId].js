import { extractFeedback, buildFeedbackPath } from "./feedback";

function handler(res, req) {
    const id = req.query.feedbackId;
    console.log(req.query)
    const filepath = buildFeedbackPath();
    const feedbackData = extractFeedback(filepath);
    const feedback1 = feedbackData.find(item => item.id === id);

    res.status(200).json({ feedback: feedback1 })
}

export default handler