import Navbar from "../Navbar/Navbar";
import style from "./Pricing.module.css";
import img from "../../../public/img-2.jpg";
export default function Pricing() {
  return (
    <div className={style.pricing}>
      <Navbar />

      <section className="h-100 py-5">
        <div className="row h-100 flex-wrap-reverse  m-0 py-5 justify-content-center align-items-center gap-3">
          <div className="col-12 col-sm-10 col-lg-4">
            <h2 className="fw-bold">Simple pricing.</h2>
            <h2 className="fw-bold">Just $9/month.</h2>
            <p className="text-white-50 fw-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>

          <div className="col-9 col-sm-5 col-lg-3">
            <img src={img} alt="" className="w-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
