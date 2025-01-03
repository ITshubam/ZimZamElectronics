import img3 from "../../../assets/online-support.png";
import img2 from "../../../assets/secure.png";
import img1 from "../../../assets/ship.png";
import "./OrderMethod.css";
const OrderMethod = () => {
  return (<>
      <div className="Order">
        <div className="container gx-0 py-5">
          <div className="row gx-0 align-items-center">
            <div className="col-md-4">
              <div className="order_col1">
             <img src={img1} alt="" className="img-fluid" />
             <h6 className="py-2">Free Shipping</h6>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, obcaecati quas libero autem reiciendis neque quae eligendi id. Tempore voluptas dicta nostrum nulla aperiam sequi sint vero, necessitatibus possimus provident.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="order_col1">
                <img src={img2} alt="" className="img-fluid" />
                <h6 className="py-2"></h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus dicta animi harum reprehenderit blanditiis saepe numquam pariatur iure quibusdam provident doloribus, similique deleniti aperiam velit culpa itaque sit ad!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="order_col1">
                <img src={img3}alt="img-fluid" />
                <h6 className="py-2"> </h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, laudantium repellat earum dicta rem iste saepe cupiditate molestias facere, ea quas necessitatibus quae. Rerum recusandae asperiores culpa, odit esse dolor?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderMethod
