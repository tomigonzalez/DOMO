const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <section className="container w-100 d-flex flex-lg-row flex-md-column justify-content-between align-items-md-center">
        <div className=" col-5">
          <div className="col-12">
            <h2 className="fs-5 mt-4 text-start ms-3">Contact Footer Links</h2>
            <div className="d-flex flex-md-column flex-lg-row mb-3 col-12 justify-content-center">
              <div className="bg-dark col-8 "></div>
              <div className="col-lg-3 col-md-12 ms-lg-3 ms-md-0 d-flex flex-column gap-1">
                <div className="w-100 bg-dark p-3"></div>
                <div className="w-100 bg-dark p-3"></div>
                <div className="w-100 bg-dark p-3 "></div>
                <div className="w-100 bg-dark p-3"></div>
                <div className="w-100 bg-dark p-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-column justify-content-end p-4">
          <h2>Social Media</h2>
          <div className="col-12 d-flex flex-row justify-content-evenly">
            <div className="rounded-5 border border-1 border-dark col-1 p-4"></div>
            <div className="rounded-5 border border-1 border-dark col-1 p-4"></div>
            <div className="rounded-5 border border-1 border-dark col-1 p-4"></div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-primary w-100 d-flex flex-row justify-content-between p-0">
        <div className="d-flex flex-column justify-content-center ps-3">
          <h4>Ipsum Lorem</h4>
        </div>
        <a href="#" className="text-decoration-none">
          <div className=" bg-black fs-1 p-0 m-0 text-white ps-2 pe-2 ">
            {"^"}
          </div>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
