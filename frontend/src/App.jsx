import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import CodeEditor from '@uiw/react-textarea-code-editor';
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Loader from "./Loader";
import ReviewButton from "./ReviewButton";
import Dropdown from './Dropdown';
import MatrixBackground from "./MatrixBackground";

function App() {

  const [code , setCode] = useState("")
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("js");
  useEffect(() => { Prism.highlightAll();}, [code]);
  const [review , setReview] = useState("")

  async function reviewCode(){
      setLoading(true);
      try {
       const response = await axios.post('http://localhost:3000/ai/get-review', {code, language}); 
        setReview(response.data);
      } catch (err) {
        setReview("Error getting review, please try again.");
      } finally {
        setLoading(false);
      }
}
  
  return (
   <>
   <main>
    <div className="left">
      <MatrixBackground />
      <div className="code">

         <Dropdown language={language} setLanguage={setLanguage} />

            <CodeEditor
              value={code}
              language={language} 
              placeholder="Write your code here..."
              onChange={(e) => setCode(e.target.value)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 17,
                height: "100%",
                width: "100%",
              }}
            />
            
      </div>

       <div className="review"> <ReviewButton onClick={reviewCode} loading={loading} /> </div>

    </div>
   
      <div className="right">
        <MatrixBackground />
        <div className="right-content">
          {loading ? (
            <div className="loader-wrapper">
              <Loader />
            </div>
          ) : review ? (
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </ReactMarkdown>
          ) : (
            <div className="idle-wrapper">
              <p className="idle-text">Your review will appear here...</p>
            </div>
          )}
        </div>
      </div>

   </main>
  </>
  )
}


export default App
