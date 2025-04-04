import React, { useState, useEffect } from "react";
import "./ZoneMonitoring.css";

// 아이콘 컴포넌트
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
const HumidityIcon = () => (
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
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);
const GasIcon = () => (
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
    <path d="M19 12H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"></path>
    <path d="M17 12V7a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v5"></path>
    <path d="M8 12V8"></path>
    <path d="M16 12V8"></path>
  </svg>
);
const NoiseIcon = () => (
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
    <path d="M2 8.5A2.5 2.5 0 0 1 4.5 6h14.793a.5.5 0 0 1 .354.854l-1.5 1.5a.5.5 0 0 1-.354.146H4.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h12.793a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1-.354.854H4.5A2.5 2.5 0 0 1 2 17.5v-9z" />
    <path d="M18 8a3 3 0 0 1 0 6" />
    <path d="M20 5a5 5 0 0 1 0 10" />
  </svg>
);
const AlertIcon = () => (
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
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
const WorkerIcon = () => (
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
  </svg>
);
const CameraIcon = () => (
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
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
);
const WifiIcon = () => (
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
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);
const LightIcon = () => (
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
    <line x1="9" y1="18" x2="15" y2="18"></line>
    <line x1="10" y1="22" x2="14" y2="22"></line>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
  </svg>
);

const ZoneMonitoring = () => {
  const [selectedZone, setSelectedZone] = useState(null);
  const [activeFloor, setActiveFloor] = useState("외부");
  const [activeTab, setActiveTab] = useState("전체");
  const [filteredZones, setFilteredZones] = useState([]);
  const [isWebexLoading, setIsWebexLoading] = useState(false);
  const [showWorkerView, setShowWorkerView] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [alertPopup, setAlertPopup] = useState(null);

  // SVG 도면 데이터
  const floorPlans = {
    외부: { backgroundImage: "url('/images/floor-exterior.png')" },
    "1층": { backgroundImage: "url('/images/floor-1st.png')" },
    "2층": { backgroundImage: "url('/images/floor-2nd.png')" },
    "3층": { backgroundImage: "url('/images/floor-3rd.png')" },
    지하: { backgroundImage: "url('/images/floor-basement.png')" },
  };

  // 구역 데이터
  const zones = [
    {
      id: 1,
      name: "3층 변전실",
      status: "안전",
      type: "전기시설",
      workers: [
        {
          id: 1,
          name: "김철수",
          position: "전기 기술자",
          image: "/images/workers/worker1.png",
          zone: "3층 변전실",
        },
      ],
      sensors: {
        temperature: 24,
        humidity: 45,
        gas: { co: 2, co2: 530, ch4: 0 },
        noise: 62,
        light: 450,
      },
      hazards: [],
      lastInspection: "2024-03-28",
      securityLevel: "제한구역",
      image: "/api/placeholder/300/200",
      description:
        "주 전력 공급을 담당하는 고압 변전실입니다. 전기 작업 시 안전 장비 착용이 필수입니다.",
    },
    {
      id: 2,
      name: "1층 보일러실",
      status: "주의",
      type: "설비시설",
      workers: [
        {
          id: 2,
          name: "박민호",
          position: "기계 엔지니어",
          image: "/images/workers/worker2.png",
          zone: "1층 보일러실",
        },
      ],
      sensors: {
        temperature: 32,
        humidity: 65,
        gas: { co: 9, co2: 620, ch4: 2 },
        noise: 75,
        light: 380,
      },
      hazards: [{ type: "gas", level: "주의", message: "CO 수치 임계치 접근" }],
      lastInspection: "2024-03-15",
      securityLevel: "일반구역",
      image: "/api/placeholder/300/200",
      description:
        "시설 난방을 담당하는 메인 보일러실입니다. 고온 주의 및 환기 상태를 정기적으로 확인해야 합니다.",
    },
    {
      id: 3,
      name: "2층 제어실",
      status: "안전",
      type: "관제시설",
      workers: [
        {
          id: 3,
          name: "이지윤",
          position: "안전 관리자",
          image: "/images/workers/worker3.png",
          zone: "2층 제어실",
        },
      ],
      sensors: {
        temperature: 23,
        humidity: 40,
        gas: { co: 0, co2: 480, ch4: 0 },
        noise: 55,
        light: 500,
      },
      hazards: [],
      lastInspection: "2024-04-01",
      securityLevel: "보안구역",
      image: "/api/placeholder/300/200",
      description: "전체 시설의 모니터링과 제어를 담당하는 중앙 통제실입니다.",
    },
    {
      id: 4,
      name: "지하 1층 배관실",
      status: "위험",
      type: "설비시설",
      workers: [
        {
          id: 4,
          name: "최영진",
          position: "유지보수 기사",
          image: "/images/workers/worker4.png",
          zone: "지하 1층 배관실",
        },
      ],
      sensors: {
        temperature: 38,
        humidity: 75,
        gas: { co: 4, co2: 680, ch4: 8 },
        noise: 68,
        light: 280,
      },
      hazards: [
        { type: "temperature", level: "위험", message: "과열 상태" },
        { type: "gas", level: "주의", message: "메탄 가스 검출" },
      ],
      lastInspection: "2024-03-10",
      securityLevel: "위험구역",
      image: "/api/placeholder/300/200",
      description:
        "시설 전체의 수도 및 가스 배관이 집중된 구역입니다. 누수 및 가스 누출에 특히 주의가 필요합니다.",
    },
    {
      id: 5,
      name: "외부 공사장 A구역",
      status: "안전",
      type: "공사현장",
      workers: [
        {
          id: 5,
          name: "정현우",
          position: "전선 작업자",
          image: "/images/workers/worker5.png",
          zone: "외부 공사장 A구역",
        },
      ],
      sensors: {
        temperature: 27,
        humidity: 55,
        gas: { co: 1, co2: 410, ch4: 0 },
        noise: 82,
        light: 950,
      },
      hazards: [],
      lastInspection: "2024-03-25",
      securityLevel: "일반구역",
      image: "/api/placeholder/300/200",
      description:
        "신축 시설 공사가 진행 중인 외부 구역입니다. 안전모 착용 필수 구역입니다.",
    },
  ];

  // 구역 필터링 로직
  useEffect(() => {
    let filtered = [...zones];

    // 상태별 필터링
    if (activeTab !== "전체") {
      filtered = filtered.filter((zone) => zone.status === activeTab);
    }

    setFilteredZones(filtered);
  }, [activeTab, zones]);

  // 상태에 따른 색상 반환
  const getStatusColor = (status) => {
    switch (status) {
      case "안전":
        return "green";
      case "주의":
        return "#faad14";
      case "위험":
        return "#ff4d4f";
      default:
        return "black";
    }
  };

  // 센서 값에 따른 상태 반환
  const getSensorStatus = (type, value) => {
    switch (type) {
      case "temperature":
        return value > 35 ? "위험" : value > 30 ? "주의" : "정상";
      case "humidity":
        return value > 70 ? "주의" : "정상";
      case "gas.co":
        return value > 10 ? "위험" : value > 5 ? "주의" : "정상";
      case "gas.co2":
        return value > 1000 ? "위험" : value > 800 ? "주의" : "정상";
      case "gas.ch4":
        return value > 5 ? "위험" : value > 2 ? "주의" : "정상";
      case "noise":
        return value > 85 ? "위험" : value > 75 ? "주의" : "정상";
      default:
        return "정상";
    }
  };

  // 구역 마커 위치 계산
  const getZonePosition = (zoneName) => {
    const positions = {
      "3층 변전실": { top: 100, left: 600 },
      "1층 보일러실": { top: 100, left: 200 },
      "2층 제어실": { top: 200, left: 400 },
      "지하 1층 배관실": { top: 300, left: 200 },
      "외부 공사장 A구역": { top: 300, left: 600 },
    };

    return positions[zoneName] || { top: 0, left: 0 };
  };

  // 작업자 마커 위치 계산
  const getWorkerPosition = (zone) => {
    const basePosition = getZonePosition(zone.name);

    // 작업자별 상대적 오프셋 (구역 내 분산 배치)
    const workerOffsets = {
      1: { top: -25, left: -25 }, // 좌상단
      2: { top: -25, left: 25 }, // 우상단
      3: { top: 25, left: -25 }, // 좌하단
      4: { top: 25, left: 25 }, // 우하단
      5: { top: 0, left: 35 }, // 우측
    };

    // 작업자의 ID를 기반으로 오프셋 적용
    const workerId = zone.workers?.[0]?.id || 5;
    const offset = workerOffsets[workerId] || { top: 0, left: 0 };

    return {
      top: basePosition.top + offset.top,
      left: basePosition.left + offset.left,
    };
  };

  // 작업자 아이콘 컴포넌트
  const WorkerMarkerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  // 웹엑스 연결 처리
  const handleWebexConnect = (worker) => {
    if (!worker || !worker.zone) {
      console.error("Worker or zone information is missing:", worker);
      return;
    }

    setSelectedWorker(worker);
    setIsWebexLoading(true);

    // 디버깅을 위한 로그
    console.log("Selected Worker:", worker);
    console.log(
      "Image Path:",
      `/images/sites/${worker.zone.replace(/\s/g, "")}.jpg`
    );

    setTimeout(() => {
      setIsWebexLoading(false);
      setShowWorkerView(true);
    }, 3000);
  };

  const handleSimulationWebexConnect = (worker) => {
    setSelectedWorker(worker);
    setIsWebexLoading(true);

    setTimeout(() => {
      setIsWebexLoading(false);
      setShowWorkerView(true);
    }, 3000);
  };

  // 작업자 시점 닫기
  const handleCloseWorkerView = () => {
    setShowWorkerView(false);
    setSelectedWorker(null);
  };

  return (
    <div className="zone-monitoring">
      {/* 상단 탭 영역 */}
      <div className="zone-header">
        <div className="zone-tabs">
          <button
            className={`tab-button ${activeTab === "전체" ? "active" : ""}`}
            onClick={() => setActiveTab("전체")}
          >
            전체 구역
          </button>
          <button
            className={`tab-button ${activeTab === "안전" ? "active" : ""}`}
            onClick={() => setActiveTab("안전")}
          >
            안전 구역
          </button>
          <button
            className={`tab-button warning ${
              activeTab === "주의" ? "active" : ""
            }`}
            onClick={() => setActiveTab("주의")}
          >
            주의 구역
          </button>
          <button
            className={`tab-button danger ${
              activeTab === "위험" ? "active" : ""
            }`}
            onClick={() => setActiveTab("위험")}
          >
            위험 구역
          </button>
        </div>
      </div>

      <div className="zone-content">
        {/* 좌측: 구역 목록 */}
        <div className="zone-list-container">
          <div className="zone-list-header">
            <h2>구역 목록 ({filteredZones.length})</h2>
          </div>
          <div className="zones-grid">
            {filteredZones.map((zone) => (
              <div
                key={zone.id}
                className={`zone-card ${
                  selectedZone && selectedZone.id === zone.id ? "selected" : ""
                }`}
                onClick={() => setSelectedZone(zone)}
              >
                <div
                  className="zone-status"
                  style={{ backgroundColor: getStatusColor(zone.status) }}
                ></div>
                <div className="zone-header">
                  <h3>{zone.name}</h3>
                  <span className="zone-type">{zone.type}</span>
                </div>
                <div className="zone-indicators">
                  <div className="zone-sensor">
                    <ThermometerIcon /> {zone.sensors.temperature}°C
                  </div>
                  <div className="zone-sensor">
                    <HumidityIcon /> {zone.sensors.humidity}%
                  </div>
                  <div className="zone-sensor">
                    <WorkerIcon /> {zone.workers.length}명
                  </div>
                  {zone.hazards.length > 0 && (
                    <div className="zone-hazard">
                      <AlertIcon /> {zone.hazards.length}개 위험요소
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 지도 및 상세 정보 */}
        <div className="zone-detail-container">
          {/* 구역 지도 */}
          <div className="zone-map-container">
            <div className="zone-map">
              <div className="map-header">
                <h3>시설 구역 지도</h3>
                <div className="floor-selector">
                  <button
                    className={`floor-button ${
                      activeFloor === "외부" ? "active" : ""
                    }`}
                    onClick={() => setActiveFloor("외부")}
                  >
                    외부
                  </button>
                  <button
                    className={`floor-button ${
                      activeFloor === "1층" ? "active" : ""
                    }`}
                    onClick={() => setActiveFloor("1층")}
                  >
                    1층
                  </button>
                  <button
                    className={`floor-button ${
                      activeFloor === "2층" ? "active" : ""
                    }`}
                    onClick={() => setActiveFloor("2층")}
                  >
                    2층
                  </button>
                  <button
                    className={`floor-button ${
                      activeFloor === "3층" ? "active" : ""
                    }`}
                    onClick={() => setActiveFloor("3층")}
                  >
                    3층
                  </button>
                  <button
                    className={`floor-button ${
                      activeFloor === "지하" ? "active" : ""
                    }`}
                    onClick={() => setActiveFloor("지하")}
                  >
                    지하
                  </button>
                </div>
              </div>
              <div className="map-content">
                <div
                  className="map-image"
                  style={floorPlans[activeFloor] || {}}
                >
                  {/* 구역 마커들 */}
                  {filteredZones
                    .filter((zone) => zone.name.includes(activeFloor))
                    .map((zone) => {
                      const position = getZonePosition(zone.name);
                      return (
                        <div
                          key={zone.id}
                          className={`zone-marker ${
                            zone.status === "위험"
                              ? "danger"
                              : zone.status === "주의"
                              ? "warning"
                              : ""
                          } ${selectedZone?.id === zone.id ? "selected" : ""}`}
                          style={{
                            top: `${position.top}px`,
                            left: `${position.left}px`,
                          }}
                          onClick={() => setSelectedZone(zone)}
                          title={zone.name}
                        >
                          <span className="marker-dot"></span>
                          <span className="marker-pulse"></span>
                          <span className="marker-label">{zone.name}</span>
                        </div>
                      );
                    })}
                  {/* 작업자 마커들 */}
                  {filteredZones
                    .filter((zone) => zone.name.includes(activeFloor))
                    .map((zone) =>
                      zone.workers.map((worker) => {
                        const position = getWorkerPosition(zone);
                        return (
                          <div
                            key={worker.id}
                            className="worker-marker"
                            style={{
                              top: `${position.top}px`,
                              left: `${position.left}px`,
                            }}
                            title={worker.name}
                          >
                            <div className="worker-marker-dot">
                              <img src={worker.image} alt={worker.name} />
                            </div>
                            <div className="worker-marker-pulse"></div>
                            <div className="worker-marker-label">
                              {worker.name} ({worker.position})
                            </div>
                          </div>
                        );
                      })
                    )}
                </div>
              </div>
            </div>
          </div>

          {/* 선택된 구역 상세 정보 */}
          {selectedZone ? (
            <div className="zone-details">
              <div className="zone-details-header">
                <div className="zone-title">
                  <h2>{selectedZone.name}</h2>
                  <span
                    className="status-badge"
                    style={{
                      backgroundColor: getStatusColor(selectedZone.status),
                    }}
                  >
                    {selectedZone.status}
                  </span>
                </div>
                <div className="zone-actions">
                  <button className="zone-action-btn">
                    <CameraIcon /> CCTV
                  </button>
                  <button className="zone-action-btn">
                    <WifiIcon /> IoT 센서
                  </button>
                </div>
              </div>

              <div className="zone-details-content">
                <div className="zone-info-grid">
                  <div className="info-card">
                    <h3>기본 정보</h3>
                    <div className="info-content">
                      <div className="info-row">
                        <label>구역 유형:</label>
                        <span>{selectedZone.type}</span>
                      </div>
                      <div className="info-row">
                        <label>보안 등급:</label>
                        <span>{selectedZone.securityLevel}</span>
                      </div>
                      <div className="info-row">
                        <label>최근 점검일:</label>
                        <span>{selectedZone.lastInspection}</span>
                      </div>
                      <div className="info-description">
                        {selectedZone.description}
                      </div>
                    </div>
                  </div>

                  <div className="info-card">
                    <h3>환경 센서</h3>
                    <div className="sensor-grid">
                      <div className="sensor-card">
                        <ThermometerIcon />
                        <div className="sensor-info">
                          <span className="sensor-value">
                            {selectedZone.sensors.temperature}°C
                          </span>
                          <span className="sensor-label">온도</span>
                        </div>
                        <span
                          className={`sensor-status ${getSensorStatus(
                            "temperature",
                            selectedZone.sensors.temperature
                          ).toLowerCase()}`}
                        >
                          {getSensorStatus(
                            "temperature",
                            selectedZone.sensors.temperature
                          )}
                        </span>
                      </div>
                      <div className="sensor-card">
                        <HumidityIcon />
                        <div className="sensor-info">
                          <span className="sensor-value">
                            {selectedZone.sensors.humidity}%
                          </span>
                          <span className="sensor-label">습도</span>
                        </div>
                        <span
                          className={`sensor-status ${getSensorStatus(
                            "humidity",
                            selectedZone.sensors.humidity
                          ).toLowerCase()}`}
                        >
                          {getSensorStatus(
                            "humidity",
                            selectedZone.sensors.humidity
                          )}
                        </span>
                      </div>
                      <div className="sensor-card">
                        <GasIcon />
                        <div className="sensor-info">
                          <span className="sensor-value">
                            {selectedZone.sensors.gas.co} ppm
                          </span>
                          <span className="sensor-label">일산화탄소</span>
                        </div>
                        <span
                          className={`sensor-status ${getSensorStatus(
                            "gas.co",
                            selectedZone.sensors.gas.co
                          ).toLowerCase()}`}
                        >
                          {getSensorStatus(
                            "gas.co",
                            selectedZone.sensors.gas.co
                          )}
                        </span>
                      </div>
                      <div className="sensor-card">
                        <GasIcon />
                        <div className="sensor-info">
                          <span className="sensor-value">
                            {selectedZone.sensors.gas.co2} ppm
                          </span>
                          <span className="sensor-label">이산화탄소</span>
                        </div>
                        <span
                          className={`sensor-status ${getSensorStatus(
                            "gas.co2",
                            selectedZone.sensors.gas.co2
                          ).toLowerCase()}`}
                        >
                          {getSensorStatus(
                            "gas.co2",
                            selectedZone.sensors.gas.co2
                          )}
                        </span>
                      </div>
                      <div className="sensor-card">
                        <NoiseIcon />
                        <div className="sensor-info">
                          <span className="sensor-value">
                            {selectedZone.sensors.noise} dB
                          </span>
                          <span className="sensor-label">소음</span>
                        </div>
                        <span
                          className={`sensor-status ${getSensorStatus(
                            "noise",
                            selectedZone.sensors.noise
                          ).toLowerCase()}`}
                        >
                          {getSensorStatus("noise", selectedZone.sensors.noise)}
                        </span>
                      </div>
                      <div className="sensor-card">
                        <LightIcon />
                        <div className="sensor-info">
                          <span className="sensor-value">
                            {selectedZone.sensors.light} lux
                          </span>
                          <span className="sensor-label">조도</span>
                        </div>
                        <span className="sensor-status normal">정상</span>
                      </div>
                    </div>
                  </div>

                  <div className="info-card">
                    <h3>작업자 정보</h3>
                    <div className="workers-list">
                      {selectedZone.workers.map((worker) => (
                        <div key={worker.id} className="worker-item">
                          <div className="worker-avatar">
                            <img src={worker.image} alt={worker.name} />
                          </div>
                          <div className="worker-info">
                            <div className="worker-name">{worker.name}</div>
                            <div className="worker-position">
                              {worker.position}
                            </div>
                          </div>
                          <button
                            className="contact-btn"
                            onClick={() => handleWebexConnect(worker)}
                          >
                            연락하기
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedZone.hazards.length > 0 && (
                    <div className="info-card danger">
                      <h3>위험 요소</h3>
                      <div className="hazards-list">
                        {selectedZone.hazards.map((hazard, index) => (
                          <div
                            key={index}
                            className={`hazard-item ${hazard.level.toLowerCase()}`}
                          >
                            <div className="hazard-icon">
                              {hazard.type === "gas" ? (
                                <GasIcon />
                              ) : hazard.type === "temperature" ? (
                                <ThermometerIcon />
                              ) : (
                                <AlertIcon />
                              )}
                            </div>
                            <div className="hazard-info">
                              <div className="hazard-title">
                                {hazard.type === "gas"
                                  ? "가스 위험"
                                  : hazard.type === "temperature"
                                  ? "온도 위험"
                                  : "위험 상황"}
                              </div>
                              <div className="hazard-message">
                                {hazard.message}
                              </div>
                            </div>
                            <button className="resolve-btn">조치</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="no-zone-selected">
              <AlertIcon />
              <p>구역을 선택하여 상세 정보를 확인하세요</p>
            </div>
          )}
        </div>
      </div>

      {/* 웹엑스 로딩 오버레이 */}
      {isWebexLoading && (
        <div className="webex-loading-overlay">
          <div className="loading-spinner"></div>
          <p>웹엑스 연결 중...</p>
        </div>
      )}

      {/* 작업자 시점 화면 */}
      {showWorkerView && selectedWorker && (
        <div className="worker-view-overlay">
          <div className="worker-view-content">
            <img
              src={`/images/sites/${selectedWorker.zone.replace(
                /\s/g,
                ""
              )}.jpg`}
              alt={`${selectedWorker.zone} 작업 현장`}
              className="worker-view-image"
              onError={(e) => {
                console.error("Image load error:", e.target.src);
                e.target.src = "/images/placeholder.jpg";
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

      {/* 경보 팝업 */}
      {alertPopup && (
        <div className="alert-popup">
          <div className="alert-content">
            <h3>긴급 상황 발생!</h3>
            <p>위치: {alertPopup.zone}</p>
            <p>상황: {alertPopup.description}</p>
            <div className="alert-actions">
              <button
                className="webex-btn"
                onClick={() => handleSimulationWebexConnect(alertPopup.worker)}
              >
                웹엑스 연결하기
              </button>
              <button className="close-btn" onClick={() => setAlertPopup(null)}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZoneMonitoring;
