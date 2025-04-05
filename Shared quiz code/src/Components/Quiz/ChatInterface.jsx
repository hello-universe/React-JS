import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./ChatInterface.css";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ChatInterface = ({ onClose, currentQuestion, options }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Ref for the scrollable chat container
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch explanation when the component mounts
  useEffect(() => {
    const fetchExplanation = async () => {
      try {
        setLoading(true);
  
        // Prepare the question and options as context
        const optionsText = options
          .map((option, index) => `Option ${index + 1}: ${option}`)
          .join("\n");
  
        const prompt = `Question: ${currentQuestion.question}\nOptions:\n${optionsText}\nProvide an explanation.`;
  
        // Send the combined question and options to the model
        const result = await model.generateContent(prompt);
  
        const explanation =
          result.response.text() || "Explanation not available.";
  
        // Set the explanation and options in the chat messages
        setMessages([
          { sender: "AI", text: `Explanation:\n${explanation}` }
        ]);
      } catch (error) {
        console.error("Error fetching explanation:", error);
        setMessages([
          { sender: "AI", text: "Unable to fetch explanation at this time." },
        ]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchExplanation();
  }, [currentQuestion, options]);
  

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    try {
      setLoading(true);
      const result = await model.generateContent(userInput);
      const responseText = result.response.text() || "No response.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: userInput },
        { sender: "AI", text: responseText },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: userInput },
        { sender: "AI", text: "Unable to process your request." },
      ]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <h3>Chat with AI</h3>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "AI" ? "ai-message" : "user-message"}`}
          >
            {msg.sender === "AI" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              <span>{msg.text}</span>
            )}
          </div>
        ))}
        {loading && <div className="loading-message">AI is typing...</div>}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask your question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={loading}
        />
        <button onClick={handleSendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
