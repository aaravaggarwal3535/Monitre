import React, { useState } from "react";
import Card from "../Card"; // Import the Card component
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC7958lvH9cC0y4E2qUV26o-0eBmDB1L70");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const Dashboard = () => {
  const id = useSelector((state) => state.id.value);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      // Fetch AI response from Google Generative AI
      try {
        const prompt = `You are a chat bot on a financial website. Respond to the user's message in a helpful and informative manner. if the user ask about investment, banking then tell them to visit specific website section for more info. give consise answer's. Dont provide any kind of links. User's message: "${input}"`;
        const result = await model.generateContent(prompt);
        const aiMessage = { text: result.response.text().replaceAll("* ", "\n").replaceAll("**", "\n").replaceAll("*"," "), sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    }
  };

  return (
    <>
      <div className="mt-10 px-7 font-bold text-[#04AD83] text-4xl">
        <h1>Dashboard</h1>
      </div>

      {/* Flex container to show the 2 boxes side by side */}
      <div className="flex gap-6 mt-10">
        {/* Green Box - Contains all cards */}
        <div className="bg-green-300 w-1/2 rounded-3xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to={"/"}>
              <Card
                title="Savings"
                description="Save today, secure tomorrow—building your future, one step at a time."
              />
            </Link>
            <Link to={'/investment'}>
            <Card
              title="Investment"
              description="Invest smart, save big—secure your future with just a click!"/>
            </Link>
            <Link>
              <Card
                title="Goals"
                description="Dream big, track your goals, and turn them into reality."
              />
            </Link>
            <Link>
              <Card
                title="Banking"
                description="Step into the world of easy banking—tap to begin!"
              />
            </Link>
            <Link>
              <Card
                title="Track"
                description="Keep your progress at your fingertips—track it all with ease!"
              />
            </Link>
            <Link to={'/personal-details'}>
              <Card
                title="Personal Details"
                description="Details saved by the user."
              />
            </Link>
          </div>
        </div>

        {/* Chat Bot */}
        <div className="w-1/2 rounded-3xl p-2 bg-green-300">
          <div className="heading h-[50px] bg-white rounded-3xl justify-center items-center flex">
            AI Chat Bot
          </div>
          <div className="chatbox border-[2px] m-2 h-[400px] rounded-3xl overflow-y-scroll">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg ${
                  message.sender === "user" ? "bg-blue-200 self-end" : "bg-gray-300 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input h-[50px] bg-white rounded-2xl justify-center items-center flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-4/5 h-3/4 rounded-3xl sty"
              placeholder="Type your message here..."
            />
            <button
              onClick={handleSendMessage}
              className="w-1/5 h-3/4 bg-[#04AD83] rounded-3xl m-1"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;