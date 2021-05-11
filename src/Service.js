import React from "react";
import Card from "./Card";
// import img1 from "./Images/img2.jfif";
// import img2 from "./Images/img4.jfif";
// import img3 from "./Images/img4.png";
// import img4 from "./Images/img4.jfif";
// import img5 from "./Images/img5.jfif";
// import img6 from "./Images/img6.jfif";
import img from "./Images/image_3.jpeg";
// import Average from "./Average";
import BarFunction from "./BarFunction";
export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-2"> 30 Days Challage</h1>
        <p className="text-center mb-2" style={{ color: "red" }}>
          Time to check is 11:59PM to 11:59PM
        </p>
        <h5 style={{ marginLeft: "40px", marginRight: "40px" }}>
          In which I fear the most don't think about it, change that thought
          with positive thoughts, about my goal. Mayank will think in between to
          stop this because it is diffecult to stay with positive thoughts than
          negative thoughts but remember one thing Mayank only 5% of the people
          in the world are successful, and Mayank also wants into this 5%.In
          this 30 days all of the control on my mind should be by me.
        </h5>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="clo-10 mx-auto">
            <div className="row">
              <div className="clo-10 mx-auto">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <h4>
                      <strong>Five factor to calculate the score</strong>
                    </h4>
                    <h5>
                      <strong>1.How happy you are:</strong>
                      It have max 20% of your daily achivement
                    </h5>
                    <h5>
                      <strong>2.How much you follow 22/2 formula:</strong>
                      It have max 20% of your daily achivement
                    </h5>
                    <h5>
                      <strong>3.How much you study:</strong>
                      It have max 20% means 14 hours of the day
                    </h5>
                    <h5>
                      <strong>4.How much Positive you are:</strong>
                      It have max 20% of your daily achivement
                    </h5>
                    <h5 className="mb-4">
                      <strong>5.How focused you are:</strong>
                      It have max 20% means to foucs on your goals
                    </h5>
                    <div className="row gy-4">
                      <Card img={img} name={"May 10"} />
                      <Card img={img} name={"May 11"} />
                      <Card img={img} name={"May 12"} />
                      <Card img={img} name={"May 13"} />
                      <Card img={img} name={"May 14"} />
                      <Card img={img} name={"May 15"} />
                      <Card img={img} name={"May 16"} />
                      <Card img={img} name={"May 17"} />
                      <Card img={img} name={"May 18"} />
                      <Card img={img} name={"May 19"} />
                      <Card img={img} name={"May 20"} />
                      <Card img={img} name={"May 21"} />
                      <Card img={img} name={"May 22"} />
                      <Card img={img} name={"May 23"} />
                      <Card img={img} name={"May 24"} />
                      <Card img={img} name={"May 25"} />
                      <Card img={img} name={"May 26"} />
                      <Card img={img} name={"May 27"} />
                      <Card img={img} name={"May 28"} />
                      <Card img={img} name={"May 29"} />
                      <Card img={img} name={"May 30"} />
                      <Card img={img} name={"May 31"} />
                      <Card img={img} name={"June 1"} />
                      <Card img={img} name={"June 2"} />
                      <Card img={img} name={"June 3"} />
                      <Card img={img} name={"June 4"} />
                      <Card img={img} name={"June 5"} />
                      <Card img={img} name={"June 6"} />
                      <Card img={img} name={"June 7"} />
                      <Card img={img} name={"June 8"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BarFunction />
      {/* <Average /> */}
    </>
  );
}
