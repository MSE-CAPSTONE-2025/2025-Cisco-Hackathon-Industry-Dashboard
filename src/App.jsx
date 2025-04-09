import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import FloatingSimulationButton from "./FloatingSimulationButton";
import WorkerManagement from "./WorkerManagement";
import ZoneMonitoring from "./ZoneMonitoring";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// 아이콘 컴포넌트들
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const HomeIcon = () => (
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
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const UsersIcon = () => (
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
const MapIcon = () => (
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
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);
const AlertIcon = () => (
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
const FileIcon = () => (
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
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </svg>
);
const SettingsIcon = () => (
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
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
const RefreshIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
  </svg>
);
const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ff4d4f"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
const ThermometerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
  </svg>
);
const BatteryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
    <line x1="23" y1="13" x2="23" y2="11"></line>
  </svg>
);
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="green"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#faad14"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState("종합 현황");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const menuItems = [
    { id: "종합 현황", icon: <HomeIcon />, title: "종합 현황", count: 0 },
    { id: "작업자 관리", icon: <UsersIcon />, title: "작업자 관리", count: 0 },
    {
      id: "구역 모니터링",
      icon: <MapIcon />,
      title: "구역 모니터링",
      count: 0,
    },
    { id: "알림 센터", icon: <AlertIcon />, title: "알림 센터", count: 6 },
    { id: "안전 보고서", icon: <FileIcon />, title: "안전 보고서", count: 0 },
    {
      id: "시스템 설정",
      icon: <SettingsIcon />,
      title: "시스템 설정",
      count: 0,
    },
  ];

  // 작업자 데이터
  const workers = [
    {
      name: "김철수",
      position: "전기 기술자",
      location: "3층 변전실",
      status: "정상",
      heartRate: 72,
      temperature: 36.5,
      battery: 85,
      alert: 0,
      movement: "이동중",
    },
    {
      name: "박민호",
      position: "기계 엔지니어",
      location: "1층 보일러실",
      status: "주의",
      heartRate: 102,
      temperature: 38.1,
      battery: 42,
      alert: 2,
      movement: "이동중",
    },
    {
      name: "이지윤",
      position: "안전 관리자",
      location: "2층 제어실",
      status: "정상",
      heartRate: 68,
      temperature: 36.6,
      battery: 76,
      alert: 0,
      movement: "이동중",
    },
    {
      name: "최영진",
      position: "유지보수 기사",
      location: "지하 1층 배관실",
      status: "위험",
      heartRate: 112,
      temperature: 38.7,
      battery: 23,
      alert: 4,
      movement: "이동중",
    },
    {
      name: "정현우",
      position: "전성 작업자",
      location: "외부 공사장 A구역",
      status: "정상",
      heartRate: 75,
      temperature: 36.7,
      battery: 91,
      alert: 0,
      movement: "이동중",
    },
  ];

  // 알림 데이터
  const alerts = [
    {
      worker: "최영진",
      message: "고체온 감지 및 비정상 심박수",
      time: "2분 전",
      type: "warning",
      resolved: false,
    },
    {
      worker: "박민호",
      message: "유해가스(CO) 임계치 접근",
      time: "7분 전",
      type: "warning",
      resolved: false,
    },
    {
      worker: "박민호",
      message: "낙하 위험 구역 접근",
      time: "12분 전",
      type: "info",
      resolved: true,
    },
    {
      worker: "김철수",
      message: "배터리 30% 미만",
      time: "18분 전",
      type: "info",
      resolved: true,
    },
    {
      worker: "임세진",
      message: "주의 감지",
      time: "35분 전",
      type: "warning",
      resolved: true,
    },
  ];

  // 작업 구역 데이터
  const workAreas = [
    {
      name: "3층 변전실",
      temperature: 24,
      workers: 1,
      hazardCount: 0,
    },
    {
      name: "1층 보일러실",
      temperature: 32,
      workers: 1,
      hazardCount: 1,
    },
    {
      name: "2층 제어실",
      temperature: 23,
      workers: 1,
      hazardCount: 0,
    },
    {
      name: "지하 1층 배관실",
      temperature: 38,
      workers: 1,
      hazardCount: 2,
    },
    {
      name: "외부 공사장 A구역",
      temperature: 27,
      workers: 1,
      hazardCount: 0,
    },
  ];

  // 차트 데이터
  const heartRateData = {
    labels: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    datasets: [
      {
        label: "평균 심박수",
        data: [75, 78, 82, 85, 82, 80, 78],
        borderColor: "#1890ff",
        backgroundColor: "rgba(24, 144, 255, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const temperatureData = {
    labels: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    datasets: [
      {
        label: "평균 체온",
        data: [36.5, 36.6, 36.8, 37.0, 36.9, 36.7, 36.6],
        borderColor: "#ff4d4f",
        backgroundColor: "rgba(255, 77, 79, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const alertsByTypeData = {
    labels: ["고온 경고", "유해가스", "낙상 위험", "배터리 부족", "장비 이상"],
    datasets: [
      {
        data: [4, 3, 2, 5, 1],
        backgroundColor: [
          "#ff4d4f",
          "#faad14",
          "#52c41a",
          "#1890ff",
          "#722ed1",
        ],
      },
    ],
  };

  const workersByAreaData = {
    labels: [
      "3층 변전실",
      "1층 보일러실",
      "2층 제어실",
      "지하1층 배관실",
      "외부 공사장 A구역",
    ],
    datasets: [
      {
        label: "작업자 수",
        data: [1, 1, 1, 1, 1],
        backgroundColor: "rgba(24, 144, 255, 0.8)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // 상태에 따른 색상 반환
  const getStatusColor = (status) => {
    switch (status) {
      case "정상":
        return "green";
      case "주의":
        return "#faad14";
      case "위험":
        return "#ff4d4f";
      default:
        return "black";
    }
  };

  // 배터리 상태에 따른 색상
  const getBatteryColor = (percent) => {
    if (percent >= 50) return "green";
    if (percent >= 20) return "#faad14";
    return "#ff4d4f";
  };

  return (
    <div className="app">
      {/* 좌측 사이드바 */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">시스코 안전 관제 시스템</div>
        </div>

        <div className="menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.title}</span>
              {item.count > 0 && (
                <span className="menu-badge">{item.count}</span>
              )}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="cisco-brand">
            Cisco IoT Operations Dashboard
            <br />
            <small>Made by 나이조조</small>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 영역 */}
      <div className="content">
        {/* 상단 헤더 */}
        <div className="header">
          <div className="page-title">
            {activeMenu === "종합 현황" ? "종합 안전 현황" : activeMenu}
          </div>
          <div className="header-right">
            <div className="date-time">2025년 4월 3일 목요일 11:22:59</div>
            <div className="notification-icon">
              <AlertIcon />
              <span className="badge">1</span>
            </div>
            <div className="user-profile">
              <span className="avatar">관</span>
              <span className="user-name">관리자</span>
            </div>
          </div>
        </div>

        {/* 메인 컨텐츠 */}
        {activeMenu === "종합 현황" && (
          <div className="dashboard">
            {/* 요약 카드 섹션 */}
            <div className="summary-cards">
              <div className="card">
                <div className="card-title">총 작업자</div>
                <div className="card-value">5</div>
                <div className="card-desc">✓ 오늘 현장 출근 완료</div>
              </div>
              <div className="card warning">
                <div className="card-title">위험 알림</div>
                <div className="card-value">6</div>
                <div className="card-desc">⚠ 24시간 내 2건 증가</div>
              </div>
              <div className="card">
                <div className="card-title">활성 현장</div>
                <div className="card-value">5</div>
                <div className="card-desc">위험 구역: 2개</div>
              </div>
              <div className="card">
                <div className="card-title">평균 심박수</div>
                <div className="card-value">86 BPM</div>
                <div className="card-desc">일일 분석 중</div>
              </div>
              <div className="card">
                <div className="card-title">장비 배터리</div>
                <div className="card-value">63%</div>
                <div className="card-desc">2명 충전 필요</div>
              </div>
            </div>

            {/* 차트 섹션 */}
            <div className="charts-container">
              <div className="heart-rate-chart">
                <div className="chart-card">
                  <h3>실시간 심박수 추이</h3>
                  <div className="chart-container">
                    <Line
                      data={heartRateData}
                      options={{
                        ...chartOptions,
                        scales: {
                          y: {
                            beginAtZero: false,
                            min: 60,
                            max: 120,
                            grid: {
                              color: "rgba(0, 0, 0, 0.05)",
                            },
                          },
                          x: {
                            grid: {
                              display: false,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            display: false,
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            titleColor: "#fff",
                            bodyColor: "#fff",
                            padding: 12,
                            displayColors: false,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="temperature-chart">
                <div className="chart-card">
                  <h3>실시간 체온 추이</h3>
                  <div className="chart-container">
                    <Line
                      data={temperatureData}
                      options={{
                        ...chartOptions,
                        scales: {
                          y: {
                            beginAtZero: false,
                            min: 35,
                            max: 39,
                            grid: {
                              color: "rgba(0, 0, 0, 0.05)",
                            },
                          },
                          x: {
                            grid: {
                              display: false,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            display: false,
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            titleColor: "#fff",
                            bodyColor: "#fff",
                            padding: 12,
                            displayColors: false,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="alerts-chart">
                <div className="chart-card">
                  <h3>유형별 알림 현황</h3>
                  <div className="chart-container">
                    <Doughnut
                      data={alertsByTypeData}
                      options={{
                        ...chartOptions,
                        cutout: "60%",
                        plugins: {
                          legend: {
                            position: "right",
                            labels: {
                              boxWidth: 12,
                              padding: 15,
                              font: {
                                size: 12,
                              },
                            },
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            titleColor: "#fff",
                            bodyColor: "#fff",
                            padding: 12,
                            displayColors: true,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="workers-chart">
                <div className="chart-card">
                  <h3>구역별 작업자 현황</h3>
                  <div className="chart-container">
                    <Bar
                      data={workersByAreaData}
                      options={{
                        ...chartOptions,
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 5,
                            ticks: {
                              stepSize: 1,
                            },
                            grid: {
                              color: "rgba(0, 0, 0, 0.05)",
                            },
                          },
                          x: {
                            grid: {
                              display: false,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            display: false,
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            titleColor: "#fff",
                            bodyColor: "#fff",
                            padding: 12,
                            displayColors: false,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 작업자 현황 표 */}
            <div className="section">
              <div className="section-header">
                <h2>작업자 실시간 상태</h2>
              </div>
              <div className="worker-table">
                <div className="table-header">
                  <div className="th">이름</div>
                  <div className="th">직무</div>
                  <div className="th">위치</div>
                  <div className="th">상태</div>
                  <div className="th">심박수</div>
                  <div className="th">체온</div>
                  <div className="th">배터리</div>
                  <div className="th">알림</div>
                </div>
                {workers.map((worker, index) => (
                  <div className="table-row" key={index}>
                    <div className="td">{worker.name}</div>
                    <div className="td">{worker.position}</div>
                    <div className="td location">
                      <LocationIcon />
                      {worker.location}
                    </div>
                    <div className="td status">
                      <span style={{ color: getStatusColor(worker.status) }}>
                        {worker.status}
                      </span>
                    </div>
                    <div className="td heart-rate">
                      <HeartIcon /> {worker.heartRate} BPM
                    </div>
                    <div className="td temperature">
                      <ThermometerIcon /> {worker.temperature}°C
                    </div>
                    <div className="td battery">
                      <BatteryIcon />
                      <span style={{ color: getBatteryColor(worker.battery) }}>
                        {worker.battery}%
                      </span>
                    </div>
                    <div className="td alert">
                      {worker.alert > 0 ? (
                        <span className="alert-badge">{worker.alert}</span>
                      ) : (
                        <span className="normal">정상</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 섹션 - 알림 및 구역 상태 */}
            <div className="bottom-sections">
              {/* 알림 목록 */}
              <div className="section alerts-section">
                <div className="section-header">
                  <h2>최근 알림</h2>
                  <button className="view-all">전체 보기</button>
                </div>
                <div className="alerts-list">
                  {alerts.map((alert, index) => (
                    <div className="alert-item" key={index}>
                      {alert.type === "warning" ? (
                        <WarningIcon />
                      ) : (
                        <InfoIcon />
                      )}
                      <div className="alert-worker">{alert.worker}</div>
                      <div className="alert-message">{alert.message}</div>
                      <div className="alert-time">{alert.time}</div>

                      <div className="alert-buttons">
                        {!alert.resolved && (
                          <>
                            <button className="btn-respond">즉시 조치</button>
                            <button className="btn-resolve">해결 완료</button>
                          </>
                        )}
                        {alert.resolved && (
                          <span className="resolved">
                            <CheckIcon /> 해결됨
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="section work-areas-section">
                <div className="section-header">
                  <h2>작업 구역 상태</h2>
                  <button className="view-all">지도 보기</button>
                </div>
                <div className="work-areas-list">
                  {workAreas.map((area, index) => (
                    <div className="work-area-item" key={index}>
                      <div className="area-header">
                        <div className="area-title">
                          <div
                            className={`status-dot ${
                              area.hazardCount > 0 ? "warning" : "normal"
                            }`}
                          ></div>
                          <div className="area-name">{area.name}</div>
                        </div>
                        <div className="area-status-text">
                          {area.hazardCount > 0 ? "위험" : "안전"}
                        </div>
                      </div>
                      <div className="area-details">
                        <div className="area-workers">
                          <UsersIcon /> 작업자 {area.workers}명
                        </div>
                        <div className="area-temp">
                          <ThermometerIcon /> 온도 {area.temperature}°C
                        </div>
                        <div className="area-hazards">
                          <AlertIcon /> 위험요소 {area.hazardCount}개
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "작업자 관리" && <WorkerManagement />}

        {activeMenu === "구역 모니터링" && <ZoneMonitoring />}
      </div>

      {/* 플로팅 시뮬레이션 버튼 */}
      <FloatingSimulationButton />
    </div>
  );
}

export default App;
