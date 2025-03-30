export default function AnswerCard({ answer }) {
    return (
        <div className="bg-gray-100 p-4 my-4 rounded shadow">
            <h2 className="font-bold">AI Answer:</h2>
            <p>{answer}</p>
        </div>
    );
}
