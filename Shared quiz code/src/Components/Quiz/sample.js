chatHistory.map((chat, index) => (
    <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
        chat.type === 'question' 
          ? 'bg-blue-500 text-white rounded-br-none'
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
      }`}>
        <ReactMarkdown className="overflow-auto hide-scrollbar">{chat.content}</ReactMarkdown>
      </div>
    </div>
  ))

{generatingAnswer && (
<div className="text-left">
  <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
    Thinking...
  </div>
</div>
)}


{/* Fixed Input Form */}
<form onSubmit={generateAnswer} className="bg-white rounded-lg shadow-lg p-4">
<div className="flex gap-2">
<textarea
  required
  className="flex-1 border border-gray-300 rounded p-3 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  placeholder="Ask anything..."
  rows="2"
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateAnswer(e);
    }
  }}
></textarea>
<button
  type="submit"
  className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
    generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
  }`}
  disabled={generatingAnswer}
>
  Send
</button>
</div>
</form>