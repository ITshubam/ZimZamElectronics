import img from "../../../assets/mid_headphone.png";
import "./Discount.css";

const Discount = () => {
  return (
    <>
     <div className="container Discount px-5 my-5" >
      <div className="row align-items-center">
        <div className="col-md-7">
        <div className="Discount_col1 pt-md-4">
                    <h6 className="Main_lable pb-3">
                      <i className="fa-solid fa-star"></i>Top Products Of The Month</h6>
                    <h3>
                     Micropack MHP Headphones Black
                    </h3>
                    <p className="py-3">
                      Discover optimal well-being through tailored exercises.
                      Achieve a healthy body with our expert guidance,
                      personalized routines, and transformative fitness solutions.
                    </p>
                    <div className="banner_btns">
                      <button className="main_btn1">Shop Now</button>
                    </div>
                  </div>
        </div>
        <div className="col-md-5">
          <img src={img} alt="" className="img-fluid" />
        </div>
      </div>
     </div>
    </>
  );
};

export default Discount
