import CatSVG from './CatSVG'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

const DancingCat = () => {
  const {
    isAnimating,
    currentAnimation,
    animations,
    toggleAnimation,
    changeAnimation,
    nextAnimation,
    previousAnimation
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <div
          className={`cat-wrapper ${isAnimating ? currentAnimation : ''}`}
        >
          <CatSVG size={250} className="dancing-cat" />
        </div>
      </div>

      <div className="controls">
        <div className="main-controls">
          <button
            className={`control-btn ${isAnimating ? 'stop' : 'start'}`}
            onClick={toggleAnimation}
            aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
          >
            {isAnimating ? '⏹️ 정지' : '▶️ 시작'}
          </button>

          <div className="navigation-controls">
            <button
              className="nav-btn prev"
              onClick={previousAnimation}
              aria-label="이전 애니메이션"
              title="이전 애니메이션 (←)"
            >
              ⬅️
            </button>
            <button
              className="nav-btn next"
              onClick={nextAnimation}
              aria-label="다음 애니메이션"
              title="다음 애니메이션 (→)"
            >
              ➡️
            </button>
          </div>
        </div>

        <div className="animation-buttons">
          {animations.map((animation, index) => (
            <button
              key={animation.name}
              className={`animation-btn ${currentAnimation === animation.name ? 'active' : ''}`}
              onClick={() => changeAnimation(animation.name)}
              aria-label={`${animation.label} 애니메이션 선택`}
              title={`${animation.label} (${index + 1})`}
            >
              <span className="btn-number">{index + 1}</span>
              {animation.label}
            </button>
          ))}
        </div>
      </div>

      <div className="description">
        <p>
          🎵 고양이가 음악에 맞춰 춤을 춥니다!
          <br />
          다양한 애니메이션을 선택해보세요. 🎶
        </p>
        <div className="keyboard-hints">
          <small>
            💡 키보드 단축키:
            <kbd>스페이스</kbd> 시작/정지 |
            <kbd>←→</kbd> 애니메이션 변경 |
            <kbd>1-5</kbd> 직접 선택
          </small>
        </div>
      </div>
    </div>
  )
}

export default DancingCat