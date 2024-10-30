import React, { useState } from "react";
import Myimage from "../assets/images/emi_image.jpg";
import appleLogo from "../assets/images/apple.png";

function IphoneEmiCal() {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [totalamt, setTotalamt] = useState(null);
  const [gst, setGst] = useState("");

  const calculateEMI = (event) => {
    event.preventDefault();
    const p = parseFloat(principal);
    const i = parseFloat(interest);
    const gst = parseFloat((i * 18) / 100);

    if (p > 0 && i > 0) {
      const total = parseFloat(p + i + gst);
      setTotalamt(total);
      setGst(gst);
      console.log(total);
    } else {
      setTotalamt("invalid input");
    }
  };

  const myCard = {
    width: "600px",
  };

  const today = new Date();
  const month = today.toLocaleString("en-EN", { month: "long" });

  return (
    <React.Fragment>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card shadow-lg" style={myCard}>
          <div className="card-body border">
            <div className="h2 card-title">Iphone EMI Calculator</div>
            <hr />

            <div className="row ">
              <div className="col-12">
                <img
                  className="img img-fluid"
                  src={Myimage}
                  alt="emi-details"
                  //style={myimage}
                />
              </div>
            </div>

            <form className="mt-3">
              <div className="row m-2">
                <label className="col-sm-5 form-label">Principal (₹): </label>
                <input
                  className="col-sm-5 form-control w-50"
                  type="number"
                  placeholder="Principal Amount"
                  value={principal}
                  onChange={(event) => setPrincipal(event.target.value)}
                />
              </div>
              <div className="row m-2">
                <label className="col-sm-5 form-label">
                  Interest Amount (₹):{" "}
                </label>
                <input
                  className="col-sm-5 form-control w-50"
                  type="number"
                  placeholder="Interest Amount"
                  value={interest}
                  onChange={(event) => setInterest(event.target.value)}
                />
              </div>
              <div className="row m-2">
                <label className="col-sm-5 form-label">
                  GST on Interest (₹):{" "}
                </label>
                <input
                  className="col-sm-5 form-control w-50"
                  type="number"
                  placeholder="18% GST (by default)"
                  value={gst}
                  onChange={setGst}
                  disabled
                />
              </div>
              <div className="col-sm-12 mt-3">
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={calculateEMI}
                >
                  Calculate EMI
                </button>
              </div>

              <div className="h5 card-footer mt-4 mb-4 pb-4 rounded border d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-end">
                  {month} month's EMI :
                </div>
                <div className="col-6 d-flex justify-content-start px-3">
                  <strong>{totalamt ? <div>{totalamt}</div> : null}</strong>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer
        className="footer border  mt-3 p-2 fw-lighter"
        style={{ fontSize: 12 }}
      >
        Copyright &copy; 2024 | Developed by - shivamsinghcr7
      </footer>
    </React.Fragment>
  );
}

export default IphoneEmiCal;
