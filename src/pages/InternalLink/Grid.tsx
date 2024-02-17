const Grid = () => {
  const estiloPersonalizado = {
    height: "45vh",
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex " style={estiloPersonalizado}>
        <div className="col bg-info col-12 col-lg-3 col-md-6  "></div>
        <div className="col bg-warning col-12 col-lg-3 col-md-6 "></div>
        <div className="col bg-light col-12 col-lg-3 col-md-6  "></div>
        <div className="col bg-dark col-12 col-lg-3 col-md-6  "></div>
      </div>
    </div>
  );
};

export default Grid;
