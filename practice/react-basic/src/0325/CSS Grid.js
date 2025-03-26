import styled from "@emotion/styled";

const Wrap = styled.div`
  .magazine-grid {
    /* 网格布局基础设置 */
    display: grid; /* 启用Grid布局 */
    gap: 20px; /* 网格间隙 */
    grid-template-columns: repeat(4, 1fr); /* 4列等宽 */
    min-height: 600px; /* 最小高度 */
    padding: 20px;

    /* 定义命名网格区域 */
    grid-template-areas:
      "featured featured news ad" /* 第一行布局 */
      "story1 story2 story3 ad"; /* 第二行布局 */
  }

  /* 特色文章区样式 */
  .featured {
    grid-area: featured; /* 映射到featured区域 */
    background: #fff8e1;
    padding: 20px;
  }

  /* 新闻区样式 */
  .news {
    grid-area: news; /* 映射到news区域 */
    background: #f0f4c3;
    padding: 20px;
  }

  /* 广告位样式 */
  .ad {
    grid-area: ad; /* 映射到ad区域 */
    background: #ffcdd2;
    padding: 20px;
  }

  /* 故事区块通用样式 */
  .story {
    padding: 20px;
    background: #c8e6c9;
  }

  /* 通过nth-child指定具体位置 */
  .story:nth-child(4) {
    grid-area: story1;
  }
  .story:nth-child(5) {
    grid-area: story2;
  }

  /* 平板端响应式 */
  @media (max-width: 1024px) {
    .magazine-grid {
      grid-template-columns: repeat(2, 1fr); /* 2列布局 */
      grid-template-areas:
        "featured featured"
        "news story1"
        "story2 ad";
    }
  }

  /* 移动端响应式 */
  @media (max-width: 600px) {
    .magazine-grid {
      grid-template-columns: 1fr; /* 单列布局 */
      grid-template-areas:
        "featured"
        "news"
        "story1"
        "story2"
        "story3"
        "ad";
    }
  }
`;

function Css_Grid() {
  return (
    <Wrap>
      <div className="magazine-grid">
        <div className="featured">Featured Article</div>
        <div className="news">News Update</div>
        <div className="ad">Advertisement</div>
        <div className="story">Story 1</div>
        <div className="story">Story 2</div>
        <div className="story">Story 3</div>
      </div>
    </Wrap>
  );
}

export default Css_Grid;
