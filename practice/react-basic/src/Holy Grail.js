// import "./App.css";
// import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrap = styled.div`
  .holy-grail {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }

  .main-content {
    flex: 1;
    min-width: 300px;
    /* 内容区最小宽度 */
    order: 2;
    /* 中间列优先渲染 */
    background: #fff3e0;
  }

  .left-sidebar {
    width: 200px;
    order: 1;
    background: #e8f5e9;
  }

  .right-sidebar {
    width: 250px;
    order: 3;
    background: #fce4ec;
  }

  /* 响应式处理 */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .left-sidebar,
    .right-sidebar {
      width: 100%;
      order: 0;
    }
  }
`;

function Holy_Grail() {
  return (
    <Wrap>
      <div className="holy-grail">
        <header>Header</header>
        <div className="container">
          <main className="main-content">Main Content</main>
          <nav className="left-sidebar">Left Sidebar</nav>
          <aside className="right-sidebar">Right Sidebar</aside>
        </div>
        <footer>Footer</footer>
      </div>
    </Wrap>
  );
}

export default Holy_Grail;
