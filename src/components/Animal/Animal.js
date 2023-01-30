import './Animal.css';

export default function Animal({ animal }) {
  return (
    <>
      <div className="animal" style={{ top: animal.top, left: animal.left }}>
        <img src={`/animals/${animal.type}.svg`} />
        {animal.name}
      </div>
    </>
  );
}
