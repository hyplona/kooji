import React, { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ReviewPage = () => {
  const [codeInput, setCodeInput] = useState("");
  const [reviewOutput, setReviewOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!codeInput.trim()) {
      setReviewOutput("⚠️ Please enter some code first.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8040/ai/get-review", {
        code: codeInput,
      });
      setReviewOutput(response.data.review);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReviewOutput(
        error.response?.data?.error || "❌ Error connecting to backend"
      );
    } finally {
      setLoading(false);
    }
  };

  // Custom renderer for code blocks
  const renderers = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <pre className="rounded-lg overflow-auto bg-gray-900 text-gray-100 p-4 shadow-inner">
          <code
            className={className}
            dangerouslySetInnerHTML={{
              __html: prism.highlight(
                String(children).replace(/\n$/, ""),
                prism.languages[match[1]] || prism.languages.javascript,
                match[1]
              ),
            }}
          />
        </pre>
      ) : (
        <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Left: Code Input */}
      <div className="flex flex-col w-1/2 p-6 bg-gray-900 text-gray-100 border-r border-gray-800">
        <h2 className="text-xl font-semibold mb-4">Your Code</h2>
        <textarea
          className="flex-1 p-4 bg-gray-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
          placeholder="Paste your code here..."
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-full transition font-semibold shadow-md"
        >
          {loading ? "Reviewing..." : "Submit"}
        </button>
      </div>

      {/* Right: AI Review Output */}
      <div className="flex flex-col w-1/2 p-6 bg-gray-950 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">AI Review</h2>
        <div className="flex-1 p-4 bg-gray-900 border border-gray-800 rounded-lg overflow-auto prose prose-sm prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
            {reviewOutput || "💡 AI-generated review will appear here..."}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
