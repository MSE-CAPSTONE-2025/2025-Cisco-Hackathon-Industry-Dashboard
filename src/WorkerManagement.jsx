import React, { useState } from "react";
import "./WorkerManagement.css";

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
const FilterIcon = () => (
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
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);
const AddIcon = () => (
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
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
const EditIcon = () => (
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
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);
const TrashIcon = () => (
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
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);
const HelmetIcon = () => (
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
    <path d="M12 2a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8z"></path>
    <path d="M17 17v-5H7v5"></path>
    <path d="M17 17a4 4 0 0 1-8 0"></path>
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
const HeartIcon = () => (
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
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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

const WorkerManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [filterOption, setFilterOption] = useState("all");

  // 작업자 데이터
  const workers = [
    {
      id: 1,
      name: "김철수",
      position: "전기 기술자",
      department: "전기설비팀",
      joinDate: "2022-05-15",
      contact: "010-1234-5678",
      location: "3층 변전실",
      status: "정상",
      heartRate: 72,
      temperature: 36.5,
      battery: 85,
      helmetId: "H-1001",
      lastCheckup: "2023-11-15",
      certifications: ["전기기사", "승강기기사"],
      profileImage: "/images/workers/worker1.png",
    },
    {
      id: 2,
      name: "박민호",
      position: "기계 엔지니어",
      department: "설비관리팀",
      joinDate: "2021-08-03",
      contact: "010-2345-6789",
      location: "1층 보일러실",
      status: "주의",
      heartRate: 102,
      temperature: 38.1,
      battery: 42,
      helmetId: "H-1002",
      lastCheckup: "2023-10-22",
      certifications: ["공조냉동기계기사", "에너지관리기사"],
      profileImage: "/images/workers/worker2.png",
    },
    {
      id: 3,
      name: "이지윤",
      position: "안전 관리자",
      department: "안전관리팀",
      joinDate: "2020-03-10",
      contact: "010-3456-7890",
      location: "2층 제어실",
      status: "정상",
      heartRate: 68,
      temperature: 36.6,
      battery: 76,
      helmetId: "H-1003",
      lastCheckup: "2023-12-05",
      certifications: ["산업안전기사", "건설안전기사"],
      profileImage: "/images/workers/worker3.png",
    },
    {
      id: 4,
      name: "최영진",
      position: "유지보수 기사",
      department: "시설관리팀",
      joinDate: "2023-01-20",
      contact: "010-4567-8901",
      location: "지하 1층 배관실",
      status: "위험",
      heartRate: 112,
      temperature: 38.7,
      battery: 23,
      helmetId: "H-1004",
      lastCheckup: "2023-09-18",
      certifications: ["건축설비기사"],
      profileImage: "/images/workers/worker4.png",
    },
    {
      id: 5,
      name: "정현우",
      position: "전선 작업자",
      department: "전기설비팀",
      joinDate: "2022-11-15",
      contact: "010-5678-9012",
      location: "외부 공사장 A구역",
      status: "정상",
      heartRate: 75,
      temperature: 36.7,
      battery: 91,
      helmetId: "H-1005",
      lastCheckup: "2023-11-30",
      certifications: ["전기공사기사"],
      profileImage: "/images/workers/worker5.png",
    },
  ];

  // 검색어로 필터링
  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.includes(searchTerm) ||
      worker.position.includes(searchTerm) ||
      worker.department.includes(searchTerm);

    if (filterOption === "all") return matchesSearch;
    if (filterOption === "normal")
      return matchesSearch && worker.status === "정상";
    if (filterOption === "warning")
      return matchesSearch && worker.status === "주의";
    if (filterOption === "danger")
      return matchesSearch && worker.status === "위험";

    return matchesSearch;
  });

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

  // 작업자 선택
  const handleSelectWorker = (worker) => {
    setSelectedWorker(worker);
  };

  return (
    <div className="worker-management">
      {/* 상단 도구 모음 */}
      <div className="worker-tools">
        <div className="worker-search">
          <div className="search-bar">
            <SearchIcon />
            <input
              type="text"
              placeholder="작업자 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <FilterIcon />
            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="all">모든 상태</option>
              <option value="normal">정상</option>
              <option value="warning">주의</option>
              <option value="danger">위험</option>
            </select>
          </div>
        </div>
        <div className="worker-actions">
          <button className="add-worker-btn">
            <AddIcon /> 작업자 추가
          </button>
        </div>
      </div>

      <div className="worker-content">
        {/* 작업자 목록 */}
        <div className="worker-list">
          <h2>작업자 목록 ({filteredWorkers.length}명)</h2>
          <div className="list-container">
            {filteredWorkers.map((worker) => (
              <div
                key={worker.id}
                className={`worker-card ${
                  selectedWorker && selectedWorker.id === worker.id
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleSelectWorker(worker)}
              >
                <div
                  className="worker-status"
                  style={{ backgroundColor: getStatusColor(worker.status) }}
                ></div>
                <div className="worker-avatar">
                  <img src={worker.profileImage} alt={worker.name} />
                </div>
                <div className="worker-info">
                  <div className="worker-name">{worker.name}</div>
                  <div className="worker-position">{worker.position}</div>
                  <div className="worker-department">{worker.department}</div>
                </div>
                <div className="worker-vitals">
                  <div className="heart-rate">
                    <HeartIcon /> {worker.heartRate}
                  </div>
                  <div
                    className="battery"
                    style={{ color: getBatteryColor(worker.battery) }}
                  >
                    <BatteryIcon /> {worker.battery}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 작업자 상세 정보 */}
        {selectedWorker && (
          <div className="worker-details">
            <div className="details-header">
              <h2>작업자 상세 정보</h2>
              <div className="detail-actions">
                <button className="edit-button">
                  <EditIcon /> 수정
                </button>
                <button className="delete-button">
                  <TrashIcon /> 삭제
                </button>
              </div>
            </div>

            <div className="detail-content">
              <div className="profile-section">
                <div className="profile-image">
                  <img
                    src={selectedWorker.profileImage}
                    alt={selectedWorker.name}
                  />
                  <div
                    className="status-indicator"
                    style={{
                      backgroundColor: getStatusColor(selectedWorker.status),
                    }}
                  >
                    {selectedWorker.status}
                  </div>
                </div>

                <div className="profile-info">
                  <h3>{selectedWorker.name}</h3>
                  <div className="info-row">
                    <label>직책:</label>
                    <span>{selectedWorker.position}</span>
                  </div>
                  <div className="info-row">
                    <label>부서:</label>
                    <span>{selectedWorker.department}</span>
                  </div>
                  <div className="info-row">
                    <label>입사일:</label>
                    <span>{selectedWorker.joinDate}</span>
                  </div>
                  <div className="info-row">
                    <label>연락처:</label>
                    <span>{selectedWorker.contact}</span>
                  </div>
                </div>
              </div>

              <div className="detail-sections">
                <div className="detail-section">
                  <h4>현재 상태</h4>
                  <div className="status-grid">
                    <div className="status-item">
                      <div className="status-label">
                        <LocationIcon /> 위치
                      </div>
                      <div className="status-value">
                        {selectedWorker.location}
                      </div>
                    </div>
                    <div className="status-item">
                      <div className="status-label">
                        <HeartIcon /> 심박수
                      </div>
                      <div className="status-value">
                        {selectedWorker.heartRate} BPM
                      </div>
                    </div>
                    <div className="status-item">
                      <div className="status-label">
                        <svg
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
                        </svg>{" "}
                        체온
                      </div>
                      <div className="status-value">
                        {selectedWorker.temperature}°C
                      </div>
                    </div>
                    <div className="status-item">
                      <div className="status-label">
                        <BatteryIcon /> 배터리
                      </div>
                      <div
                        className="status-value"
                        style={{
                          color: getBatteryColor(selectedWorker.battery),
                        }}
                      >
                        {selectedWorker.battery}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h4>장비 정보</h4>
                  <div className="info-row">
                    <label>
                      <HelmetIcon /> 헬멧 ID:
                    </label>
                    <span>{selectedWorker.helmetId}</span>
                  </div>
                  <div className="info-row">
                    <label>최근 장비 점검일:</label>
                    <span>{selectedWorker.lastCheckup}</span>
                  </div>
                </div>

                <div className="detail-section">
                  <h4>자격증</h4>
                  <div className="certifications">
                    {selectedWorker.certifications.map((cert, index) => (
                      <div key={index} className="certification-badge">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h4>활동 기록</h4>
                  <div className="activity-log">
                    <div className="activity-item">
                      <div className="activity-time">오늘 08:30</div>
                      <div className="activity-desc">출근 기록됨</div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-time">오늘 09:15</div>
                      <div className="activity-desc">
                        {selectedWorker.location}에 도착
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-time">오늘 10:30</div>
                      <div className="activity-desc">휴식 시간</div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-time">오늘 11:45</div>
                      <div className="activity-desc">작업 재개</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedWorker && (
          <div className="no-selection">
            <div className="no-selection-message">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ccc"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <p>작업자를 선택하여 상세 정보를 확인하세요</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerManagement;
