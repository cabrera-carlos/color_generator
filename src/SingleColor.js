function SingleColor({ color, index }) {
  const { hex, weight } = color;

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
