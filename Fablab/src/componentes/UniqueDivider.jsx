import '../styles/UniqueDivider.css';

function UniqueDivider() {
  return (
    <div className="unique-divider my-5 d-flex justify-content-center">
      <svg
        width="460"
        height="40"
        viewBox="0 0 460 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Líneas */}
        <line x1="22" y1="20" x2="120" y2="20" stroke="#232178" strokeWidth="2"/>
        <line x1="340" y1="20" x2="438" y2="20" stroke="#232178" strokeWidth="2"/>
        {/* Diamantes extremos */}
        <polygon points="7,20 22,13 22,27" fill="#232178" />
        <polygon points="453,20 438,13 438,27" fill="#232178" />
        {/* Ornamentación central */}
        <path
          d="M120,20
          C145,0,175,40,200,20
          C225,0,255,40,280,20
          C305,0,335,40,340,20"
          stroke="#232178" strokeWidth="2" fill="none" />
        {/* Bucles externos */}
        <path
          d="M120,20
          Q125,30 132,25"
          stroke="#232178"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M340,20
          Q335,30 328,25"
          stroke="#232178"
          strokeWidth="2"
          fill="none"
        />
        {/* Rizo central superior */}
        <path
          d="M220,20
          Q230,10 240,20
          Q250,30 260,20"
          stroke="#232178"
          strokeWidth="2"
          fill="none"
        />
        {/* Rizo central inferior */}
        <path
          d="M220,20
          Q230,30 240,20
          Q250,10 260,20"
          stroke="#232178"
          strokeWidth="2"
          fill="none"
        />
        {/* Rombo centro */}
        <polygon points="230,20 235,25 240,20 235,15" fill="#232178" />
      </svg>
    </div>
  );
}

export default UniqueDivider;
