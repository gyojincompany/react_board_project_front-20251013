import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function BoardWrite({ user }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); //페이지 새로고침 방지
        
        //로그인한 유저만 글쓰기 허용
        if(!user) { //참이면 로그인하지 않은 경우
            alert("로그인 후 글 작성 가능합니다.");
            return;
        } 

        try {
            await api.post("/api/board", { title, content });
            alert("글 작성 완료!");
            navigate("/board"); //글 작성 후 게시판 리스트로 이동

        } catch(err) {
            console.error(err);
            alert("글쓰기 실패!");
        }
    };

    return (
        <div className="write-container">
            <h2>글쓰기</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="제목" value={title}
                onChange={(e)=>setTitle(e.target.value)} />
                <textarea placeholder="내용" value={content}
                onChange={(e)=>setContent(e.target.value)} />
                <div className="button-group">
                    <button type="submit">등록</button>
                    <button type="button" onClick={() => navigate("/board")}>
                    취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BoardWrite;