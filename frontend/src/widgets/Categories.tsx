export function Categories() {
  return (
    <section className="section category">
      <div className="cat-center">
        {[
          ["images/cat3.jpg", "WOMEN'S WEAR"],
          ["images/cat2.jpg", "ACCESSORIES"],
          ["images/cat1.jpg", "MEN'S WEAR"],
        ].map(([img, text], idx) => (
          <div className="cat" key={idx}>
            <img src={img} alt="" />
            <div>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
