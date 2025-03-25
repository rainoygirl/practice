import styled from "@emotion/styled";

const Wrap = styled.div`
  .parallax-grid {
    /* 视口相关设置 */
    height: 100vh; /* 视口高度 */
    display: grid; /* 网格布局 */
    grid-template-rows: repeat(3, minmax(100px, auto)); /* 三行自适应 */
    overflow-y: auto; /* 允许垂直滚动 */

    /* 滚动捕捉设置 */
    scroll-snap-type: y mandatory; /* 垂直强制捕捉 */
  }

  /* 区块通用样式 */
  .section {
    scroll-snap-align: start; /* 捕捉到顶部 */
    height: 100vh; /* 撑满视口 */
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    transition: transform 0.5s; /* 过渡动画 */
    font-size: 2rem;
  }

  /* 区块背景色 */
  .section:nth-child(1) {
    background: #ffccbc;
  }
  .section:nth-child(2) {
    background: #c5cae9;
  }
  .section:nth-child(3) {
    background: #c8e6c9;
  }

  /* 桌面端悬停效果 */
  @media (hover: hover) {
    .parallax-grid:hover .section {
      /* 使用CSS变量控制位移 */
      transform: translateY(calc(var(--scroll-pos) * var(--speed)));
    }
  }
`;

function Full_screen() {
  return (
    <Wrap>
      <div class="parallax-grid">
        <div className="section" data-speed="0.1">
          Section 1
        </div>
        <div className="section" data-speed="0.3">
          Section 2
        </div>
        <div className="section" data-speed="0.5">
          Section 3
        </div>
      </div>
    </Wrap>
  );
}

export default Full_screen;
