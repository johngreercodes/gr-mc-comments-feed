import './App.css';
import AppName from './components/AppName'
import InputForm from './components/InputForm';
import CommentCard from './components/CommentCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  /*
    this command is required to open a Chrome browser with CORS disabled to demo this project
    > open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security
  */

  const [comments, setComments] = useState([])
  const [commentSync, setCommentSync] = useState(false)

  useEffect(()=>{
    const fetchComments = async () => {
      const response = await axios.get("http://localhost:3001/getComments")
      setComments(response.data)
    }
    fetchComments()
    return () => {
      setCommentSync(true)
    }
  }, [commentSync])

  return (
    <div>
    <AppName />
    <InputForm setCommentSync={setCommentSync}/>
      <div id="commentCardContainer">
      <CommentCard comments={comments}/>
      </div>
    </div>
  );
}

export default App;
