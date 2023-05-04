import './Block.module.css';

function Block({text, img1, img2, img3, img4}) {
    return (
        <div className="cont"> 
            <h1 className="title">
              {text.h1}
            </h1>
              <img className="img1" src={img1 || img3} alt="imgLH"/>
                <p className="titletxt">
                  {/* {text.h2} */}
                </p>
                <p className="text1">
                {/* {text.p1} */}
                </p>
                <p>
                {/* {text.p2} */}
                </p>
               <img className="img2" src={img2 || img4} alt="imgRH"/>
          </div>
    )
}

export default Block;