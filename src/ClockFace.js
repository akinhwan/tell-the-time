import './ClockFace.css';

function ClockFace() {
  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="ClockFace">
      <div id="clock">
        <div id="a">
          <div id="b">
            <div id="c">
              <div id="d">
                {/* <div id="sh">
                  <div className="hh">
                    <div className="h"></div>
                  </div>
                  <div className="mm">
                    <div className="m"></div>
                    <div className="mr"></div>
                  </div>
                  <div className="ss">
                    <div className="s"></div>
                  </div>
                </div> */}
                <div id="ii">
                  <b>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </b>
                  <b>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </b>
                  <b>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </b>
                  <b>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </b>
                  <b>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </b>
                  <b>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </b>
                </div>
                <div id="e">
                  <div id="f">
                    <u>
                      12
                      <u>
                        1
                        <u>
                          2<u>3</u>4
                        </u>
                        5
                      </u>
                    </u>
                  </div>
                  <div id="g">
                    <u>
                      <u>
                        11
                        <u>
                          10<u>9</u>8
                        </u>
                        7
                      </u>
                      6
                    </u>
                  </div>
                </div>
                <div className="hh">
                  <div className="h"></div>
                </div>
                <div className="mm">
                  <div className="m"></div>
                  <div className="mr"></div>
                </div>
                {/* <div className="ss">
                  <div className="s"></div>
                  <div className="sr"></div>
                </div> */}
                <div id="k"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClockFace;
