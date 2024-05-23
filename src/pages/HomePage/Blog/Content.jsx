import React from "react";

const styles = {
  container: {
    backgroundColor: "#e6f2ff",
    color: "#1a1a1a",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "600",
    marginBottom: "12px",
    borderBottom: "2px solid #1a73e8",
    paddingBottom: "8px",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    marginBottom: "8px",
    fontSize: "1rem",
    padding: "8px 0",
    borderBottom: "1px solid #d9d9d9",
  },
  author: {
    fontStyle: "italic",
    color: "#555",
    marginTop: "4px",
  },
};

const Content = () => {
  return (
    <div className="space-y-6">
      <div style={styles.container}>
        <h2 style={styles.title}>Recommended Topics</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <div>Front-end / Mobile Apps Development</div>
          </li>
          <li style={styles.listItem}>
            <div>UI / UX Design Principles</div>
          </li>
          <li style={styles.listItem}>
            <div>Back-end Technologies</div>
          </li>
          <li style={styles.listItem}>
            <div>Development Libraries</div>
          </li>
          <li style={styles.listItem}>
            <div>Industry Insights and Stories</div>
          </li>
          <li style={styles.listItem}>
            <div>IT Motivational Quotes</div>
          </li>
          <li style={styles.listItem}>
            <div>Other Interesting Topics</div>
          </li>
        </ul>
      </div>
      <div style={styles.container}>
        <h2 style={styles.title}>Featured Posts</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <div>Xử Lý Bất Đồng Bộ Trong Javascript</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
          <li style={styles.listItem}>
            <div>Hiểu Về Nguyên Tắc UI/UX Design</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
          <li style={styles.listItem}>
            <div>Phát Triển Back-end với Node.js</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
          <li style={styles.listItem}>
            <div>Những Thư Viện JavaScript Hàng Đầu</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
          <li style={styles.listItem}>
            <div>Lời Khuyên Từ Các Chuyên Gia Ngành Công Nghệ</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
          <li style={styles.listItem}>
            <div>Những Câu Nói Tạo Động Lực Trong IT</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
          <li style={styles.listItem}>
            <div>Khám Phá Các Xu Hướng Công Nghệ Mới</div>
            <div style={styles.author}>Nguyên Minh</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
