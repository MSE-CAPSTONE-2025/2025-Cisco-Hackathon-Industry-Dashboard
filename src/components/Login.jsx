import React, { useState } from "react";
import "./Login.css";
import ciscoLogo from "../assets/images/logos/cisco_logo.png";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 인증 없이 바로 로그인 처리
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="cisco-logo">
            <img src={ciscoLogo} alt="Cisco Logo" className="logo-img" />
          </div>
          <h1>시스코 안전 관리 시스템</h1>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력하세요"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
