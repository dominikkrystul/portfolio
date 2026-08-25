<template>
  <span class="ai-tutor-mascot" aria-hidden="true">
    <svg viewBox="0 0 120 100" role="presentation">
      <g class="ai-tutor-mascot__robot">
        <path class="ai-tutor-mascot__antenna" d="M60 22V12" pathLength="1" />
        <circle class="ai-tutor-mascot__antenna-tip" cx="60" cy="9" r="4" />
        <rect
          class="ai-tutor-mascot__head"
          x="32"
          y="24"
          width="56"
          height="39"
          rx="5"
        />
        <circle class="ai-tutor-mascot__eye" cx="48" cy="43" r="5" />
        <circle class="ai-tutor-mascot__eye" cx="72" cy="43" r="5" />
        <rect
          class="ai-tutor-mascot__body"
          x="38"
          y="66"
          width="44"
          height="30"
          rx="4"
        />
        <rect
          class="ai-tutor-mascot__screen"
          x="50"
          y="74"
          width="20"
          height="11"
          rx="2"
        />
        <g class="ai-tutor-mascot__waving-arm">
          <path class="ai-tutor-mascot__arm" d="M84 73 103 58" />
          <circle class="ai-tutor-mascot__hand" cx="105" cy="56" r="6" />
        </g>
        <path class="ai-tutor-mascot__arm-static" d="M36 73 20 82" />
      </g>
    </svg>
  </span>
</template>

<style scoped>
.ai-tutor-mascot,
.ai-tutor-mascot svg {
  display: block;
  width: 100%;
  height: 100%;
}

.ai-tutor-mascot__robot {
  transform-origin: center bottom;
  animation: robot-arrive 5.8s ease-in-out infinite;
}

.ai-tutor-mascot__head,
.ai-tutor-mascot__hand {
  fill: #f5f7f5;
  stroke: #cbd1cd;
  stroke-width: 2;
}

.ai-tutor-mascot__body {
  fill: #cbd1cd;
  stroke: var(--muted);
  stroke-width: 2;
}

.ai-tutor-mascot__eye,
.ai-tutor-mascot__screen,
.ai-tutor-mascot__antenna-tip {
  fill: #176b4d;
}

.ai-tutor-mascot__antenna,
.ai-tutor-mascot__arm,
.ai-tutor-mascot__arm-static {
  fill: none;
  stroke: var(--muted);
  stroke-linecap: round;
  stroke-width: 7;
}

.ai-tutor-mascot__antenna {
  stroke: #161a17;
  stroke-width: 3;
}

.ai-tutor-mascot__waving-arm {
  transform-origin: 84px 73px;
  animation: robot-wave 5.8s ease-in-out infinite;
}

@keyframes robot-arrive {
  0%,
  8%,
  88%,
  100% {
    transform: translateY(74px) rotate(3deg);
  }

  20%,
  78% {
    transform: translateY(0) rotate(-2deg);
  }
}

@keyframes robot-wave {
  0%,
  25%,
  68%,
  100% {
    transform: rotate(0deg);
  }

  34%,
  46%,
  58% {
    transform: rotate(-22deg);
  }

  40%,
  52% {
    transform: rotate(10deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ai-tutor-mascot__robot,
  .ai-tutor-mascot__waving-arm {
    animation: none;
  }
}
</style>
