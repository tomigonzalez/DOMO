const Footer = () => {
  return (
    <footer className="d-flex flex-column bg-custom13 ">
      <section className="container w-100 d-flex flex-lg-row flex-md-column flex-sm-column flex-column justify-content-between align-items-md-center align-items-sm-center align-items-center">
        <div className=" col-lg-5 col-md-7">
          <div className="col-12">
            <h2 className="fs-5 mt-4 text-start ms-3 ms-md-0 ms-sm-0 ms-0">
              Contact Footer Links
            </h2>
            <div className="d-flex flex-md-column flex-sm-column flex-column flex-lg-row mb-3 col-12 justify-content-center">
              <div className="bg-custom7  col-lg-11 col-md-12 color4 text-start">
                <p className="m-0">
                  Holaaaa como estan? soy desarrollador web con +2 años de
                  experiencia en el desarrollo de interfaces de usuario. Trabaje
                  con varias tecnologías, incluyendo HTML, CSS, JavaScript,
                  React, TypeScript, Node.js etc. Tengo conocimiento en UX/UI .
                  Con muchísimas ganas de seguir aprendiendo y seguir teniendo
                  desafíos!
                </p>
              </div>
              <div className="col-lg-5 col-md-12 ms-lg-3 ms-md-0 d-flex flex-column gap-2 mt-lg-0 mt-md-2 mt-2">
                <div className="w-100 d-flex  color4 bg-custom7 ps-lg-1 ps-md-0">
                  <p className="m-0">Desarrollador Front End</p>
                </div>
                <div className="w-100 d-flex  color4 bg-custom7 ps-lg-1 ps-md-0">
                  <p className="m-0">Desarrollador Freelance</p>
                </div>
                <div className="w-100 d-flex  color4 bg-custom7 ps-lg-1 ps-md-0">
                  <p className="m-0">Diseñador UX/UI</p>
                </div>
                <div className="w-100 d-flex  color4 bg-custom7 ps-lg-1 ps-md-0">
                  <p className="m-0">Desarrollador Back End</p>
                </div>
                <div className="w-100 d-flex  color4 bg-custom7 ps-lg-1 ps-md-0">
                  <p className="m-0">Desarrollador Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-5 col-sm-5 col-5 d-flex flex-column justify-content-end p-4">
          <h2>Social Media</h2>
          <div className="col-12 d-flex flex-row justify-content-evenly">
            <div className="  ">
              <a
                href="https://drive.google.com/file/d/1z9XOUSA5HZwYBc702R7rGU2d3-1VFv2s/view?usp=sharing"
                className="text-decoration-none color"
                target="_blank"
              >
                <i className="bi bi-file-earmark-person fs-1"></i>
              </a>
            </div>
            <div className="  ">
              <a
                href="www.linkedin.com/in/tomigonzalez"
                className="text-decoration-none color"
                target="_blank"
              >
                <i className="bi bi-linkedin fs-1"></i>
              </a>
            </div>
            <div className="  ">
              <a
                href="https://github.com/tomigonzalez"
                className="text-decoration-none color"
                target="_blank"
              >
                <i className="bi bi-github fs-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-custom11 w-100 d-flex flex-row justify-content-between p-0">
        <div className="d-flex flex-column justify-content-center ps-3 color3">
          <h4>Ipsum Lorem</h4>
        </div>
        <a href="#ancla1" className="text-decoration-none">
          <div className=" bg-custom12 fs-1 p-0 m-0 text-white ps-2 pe-2 ">
            {"^"}
          </div>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
