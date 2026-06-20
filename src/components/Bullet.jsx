// Splits a bullet on {chip} markers and renders the marked spans as highlighted
// pills (e.g. "20K+ samples"), leaving the rest as plain text. Shared by the
// Experience page and the home career timeline.
const Bullet = ({ text }) => (
  <>
    {text.split(/(\{[^}]+\})/g).map((part, i) =>
      part.startsWith('{') && part.endsWith('}') ? (
        <span
          key={i}
          className="mx-0.5 inline-flex items-center rounded-md border border-[#5ce1e6]/40 bg-[#5ce1e6]/10 px-1.5 py-px text-[0.9em] text-[#5ce1e6]"
        >
          {part.slice(1, -1)}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    )}
  </>
);

export default Bullet;
