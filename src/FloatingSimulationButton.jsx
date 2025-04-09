import React, { useState } from "react";
import "./FloatingSimulationButton.css";

// 아이콘 컴포넌트들
const SimulationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
const FallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="3"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <polyline points="6 15 12 18 18 15"></polyline>
    <line x1="12" y1="18" x2="12" y2="21"></line>
  </svg>
);
const GasIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"></path>
    <path d="M17 12V7a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v5"></path>
    <path d="M8 12V8"></path>
    <path d="M16 12V8"></path>
  </svg>
);
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
const DangerZoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const FloatingSimulationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    worker: "",
    location: "",
  });
  const [showWebex, setShowWebex] = useState(false);
  const [isWebexLoading, setIsWebexLoading] = useState(false);
  const [showWorkerView, setShowWorkerView] = useState(false);

  // 시뮬레이션 메뉴 토글
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 알림창 닫기
  const closeAlert = () => {
    setAlert({ show: false, type: "", worker: "", location: "" });
  };

  // WebEx 모달 토글
  const toggleWebex = () => {
    setShowWebex(!showWebex);
    if (showWebex) {
      setShowWorkerView(false);
    }
  };

  // 시뮬레이션 실행 함수
  const runSimulation = (type) => {
    const workers = [
      { name: "김철수", location: "3층 변전실" },
      { name: "박민호", location: "1층 보일러실" },
      { name: "이지윤", location: "2층 제어실" },
      { name: "최영진", location: "지하 1층 배관실" },
      { name: "정현우", location: "외부 공사장 A구역" },
    ];

    // 무작위 작업자 선택
    const worker = workers[Math.floor(Math.random() * workers.length)];

    setAlert({
      show: true,
      type,
      worker: worker.name,
      location: worker.location,
    });

    // WebEx 메시지 전송 함수 호출
    sendWebexMessage(type, worker.name, worker.location);

    // 메뉴 닫기
    setIsOpen(false);
  };

  // 2. WebEx 메시지 전송 함수 추가
  const sendWebexMessage = async (alertType, workerName, location) => {
    const webhookUrl =
      "https://webexapis.com/v1/webhooks/incoming/Y2lzY29zcGFyazovL3VybjpURUFNOnVzLXdlc3QtMl9yL1dFQkhPT0svOGI4OGZhNmMtOGM0My00YTNkLWE2MzUtMGZkYmJmYzgyNjgy";
    const currentTime = new Date().toLocaleTimeString();

    // 알림 유형에 따른 메시지 생성
    let messageTitle = "";
    let messageContent = "";

    switch (alertType) {
      case "fall":
        messageTitle = "⚠️ 낙상 감지 경보";
        messageContent = `작업자 ${workerName}님이 ${location}에서 낙상이 감지되었습니다. 해당 구역 작업자들은 조심하여 이동해주시기 바랍니다. 안전 담당자는 즉시 현장 확인 바랍니다.\n\n발생 시간: ${currentTime}`;
        break;
      case "gas":
        messageTitle = "⚠️ 유해가스 경보";
        messageContent = `${location}에서 유해가스 농도가 위험 수준에 도달했습니다. 해당 구역 작업자들은 즉시 대피하고, 안전 장비 없이 접근하지 마십시오.\n\n발생 시간: ${currentTime}\n감지 작업자: ${workerName}`;
        break;
      case "heart":
        messageTitle = "🚨 심장 이상 경보";
        messageContent = `작업자 ${workerName}님(${location})의 심박수에 이상이 감지되었습니다. 의료 지원 팀은 즉시 현장으로 출동해주시기 바랍니다.\n\n발생 시간: ${currentTime}`;
        break;
      case "zone":
        messageTitle = "⚠️ 위험 구역 접근 경보";
        messageContent = `작업자 ${workerName}님이 ${location} 근처 위험 구역에 접근했습니다. 안전 담당자는 확인 바랍니다.\n\n발생 시간: ${currentTime}`;
        break;
      default:
        messageTitle = "알림";
        messageContent = `${location}에서 알림이 발생했습니다.`;
    }

    // 마크다운 형식의 메시지
    const markdownMessage = `## ${messageTitle}\n\n${messageContent}`;

    try {
      // WebEx API 호출
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdown: markdownMessage,
        }),
      });

      if (response.ok) {
        console.log("WebEx 메시지 전송 성공");
      } else {
        console.error("WebEx 메시지 전송 실패:", response.statusText);
      }
    } catch (error) {
      console.error("WebEx 메시지 전송 중 오류 발생:", error);
    }
  };

  // 알림 유형에 따른 제목 및 색상
  const getAlertInfo = (type) => {
    const alertConfigs = {
      fall: {
        title: "낙상 감지 경보",
        color: "#ff4d4f",
        icon: <FallIcon />,
        message: "낙상이 감지되었습니다. 즉시 안전 점검이 필요합니다.",
      },
      gas: {
        title: "유해가스 경보",
        color: "#fa8c16",
        icon: <GasIcon />,
        message: "유해가스 농도가 위험 수준에 도달했습니다. 즉시 대피하세요.",
      },
      heart: {
        title: "심장 이상 경보",
        color: "#ff4d4f",
        icon: <HeartIcon />,
        message: "비정상적인 심박수가 감지되었습니다. 의료 지원이 필요합니다.",
      },
      zone: {
        title: "위험 구역 접근 경보",
        color: "#faad14",
        icon: <DangerZoneIcon />,
        message: "작업자가 위험 구역에 접근했습니다. 즉시 확인이 필요합니다.",
      },
    };

    return (
      alertConfigs[type] || {
        title: "알림",
        color: "#1890ff",
        icon: null,
        message: "",
      }
    );
  };

  const alertInfo = alert.type ? getAlertInfo(alert.type) : null;

  // WebEx 연결 처리
  const handleWebexConnect = () => {
    setIsWebexLoading(true);

    // 알림 모달을 닫습니다.
    closeAlert();

    // 작업자의 시점 화면을 초기화합니다.
    setShowWorkerView(false);

    // Webex 모달을 닫습니다.
    setShowWebex(false);

    // 이미지 경로를 콘솔에 출력하여 디버깅합니다.
    const originalLocation = alert.location;
    const processedLocation = alert.location.replace(/\s/g, "");
    const imagePath = `/images/sites/${processedLocation}.jpg`;

    console.log("Original location:", originalLocation);
    console.log("Processed location:", processedLocation);
    console.log("Image path:", imagePath);
    console.log("Alert type:", alert.type);

    setTimeout(() => {
      setIsWebexLoading(false);
      setShowWorkerView(true);
    }, 3000);
  };

  // 작업자 시점 닫기
  const handleCloseWorkerView = () => {
    setShowWorkerView(false);
    setShowWebex(false);
  };

  return (
    <>
      {/* 플로팅 버튼 */}
      <div className="floating-button-container">
        <button
          className={`floating-button ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <SimulationIcon />
        </button>

        {/* 시뮬레이션 메뉴 */}
        {isOpen && (
          <div className="simulation-menu">
            <div className="menu-title">시뮬레이션 테스트</div>
            <button
              className="sim-button fall"
              onClick={() => runSimulation("fall")}
            >
              <FallIcon /> 낙상 발생
            </button>
            <button
              className="sim-button gas"
              onClick={() => runSimulation("gas")}
            >
              <GasIcon /> 가스 누출
            </button>
            <button
              className="sim-button heart"
              onClick={() => runSimulation("heart")}
            >
              <HeartIcon /> 심장 이상
            </button>
            <button
              className="sim-button zone"
              onClick={() => runSimulation("zone")}
            >
              <DangerZoneIcon /> 위험 구역 접근
            </button>
          </div>
        )}
      </div>

      {/* 알림 모달 */}
      {alert.show && alertInfo && (
        <div className="alert-overlay">
          <div
            className="alert-modal"
            style={{ borderTop: `5px solid ${alertInfo.color}` }}
          >
            <div className="alert-header" style={{ color: alertInfo.color }}>
              <div className="alert-title">
                <span className="alert-icon">{alertInfo.icon}</span>
                {alertInfo.title}
              </div>
              <button className="close-button" onClick={closeAlert}>
                <CloseIcon />
              </button>
            </div>
            <div className="alert-content">
              <div className="alert-info">
                <div className="alert-worker">
                  <strong>작업자:</strong> {alert.worker}
                </div>
                <div className="alert-location">
                  <strong>위치:</strong> {alert.location}
                </div>
                <div className="alert-time">
                  <strong>발생 시간:</strong> {new Date().toLocaleTimeString()}
                </div>
                <div className="alert-message">{alertInfo.message}</div>
              </div>
              <div className="alert-actions">
                <button className="webex-button" onClick={handleWebexConnect}>
                  <VideoIcon /> WebEx 연결하기
                </button>
                <button className="resolve-button" onClick={closeAlert}>
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WebEx 로딩 오버레이 */}
      {isWebexLoading && (
        <div className="webex-loading-overlay">
          <div className="loading-spinner"></div>
          <p>웹엑스 연결 중...</p>
        </div>
      )}

      {/* 작업자 시점 화면 */}
      {showWorkerView && (
        <div className="worker-view-overlay">
          <div className="worker-view-content">
            <img
              src="/images/sites/simulation.jpg"
              alt={`${alert.location} 작업 현장`}
              className="worker-view-image"
              onError={(e) => {
                console.error("Image load error:", e.target.src);
                // 대체 이미지로 변경
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23999'%3E이미지를 불러올 수 없습니다%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="worker-view-controls">
              <button className="control-btn" title="마이크">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </button>
              <button className="control-btn" title="카메라">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </button>
              <button className="control-btn" title="화면 공유">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </button>
              <button className="control-btn" title="채팅">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              <button
                className="control-btn danger"
                title="통화 종료"
                onClick={handleCloseWorkerView}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WebEx 연결 모달 (시뮬레이션) */}
      {showWebex && !showWorkerView && (
        <div className="webex-overlay">
          <div className="webex-modal">
            <div className="webex-header">
              <div className="webex-title">WebEx 연결 중...</div>
              <button className="close-button" onClick={toggleWebex}>
                <CloseIcon />
              </button>
            </div>
            <div className="webex-content">
              <div className="connecting-animation">
                <div className="spinner"></div>
              </div>
              <div className="connecting-text">
                {alert.worker}님과 화상 연결 중입니다...
              </div>
              <div className="stream-placeholder">
                <div className="stream-message">카메라 스트림 준비 중...</div>
              </div>
              <div className="webex-controls">
                <button className="control-button mic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </button>
                <button className="control-button video">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                </button>
                <button className="control-button end" onClick={toggleWebex}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
                    <line x1="23" y1="1" x2="1" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSimulationButton;
