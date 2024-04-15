import style from "./Product.module.css";
import img from "../../../public/img-1.jpg";
import Navbar from "../Navbar/Navbar";
export default function Product() {
  return (
    <main className={style.product}>
      <Navbar />
      <section className="h-100 py-5">
        <div className="row h-100 m-0 py-5 justify-content-center align-items-center gap-3">
          <div className="col-9 col-sm-5 col-lg-3">
            <img
              src={img}
              alt="person with dog overlooking mountain with sunset"
              className="w-100"
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-4">
            <h2 className="fw-bold">About WorldWide.</h2>
            <p className="text-white-50 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p className="text-white-50 fw-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
