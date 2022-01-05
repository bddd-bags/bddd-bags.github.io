const layoutSign = ({ childern }) => (
  <section className="Background-requirements">
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 fw-bold" style={{ width: "350px" }}>
        {childern}
      </div>
    </div>
  </section>
);

export default layoutSign;
