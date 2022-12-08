function Letter({ letter }) {
  return (
    <div className="letter">
      <span className="title">{letter.owner}</span>
      <p>
            {letter.text}
      </p>
      <span>{letter.date}</span>
    </div>
  );
}

export default Letter;
