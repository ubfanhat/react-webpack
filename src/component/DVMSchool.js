import '../css/DVMSchool.css'
import React, { useEffect, useState } from 'react';

function DVMSchool() {
    const [show, setShow] = useState(false)
    const [page, setPage] = useState("wellcome")

    useEffect(() => {

    }, [])

    function StartQuestion() {
        setPage("question")
    }

    function HandlerClickStart() {
        return (
            {...page == "wellcome" ? <>
            <div className='bg-1'>
                <div className="header">
                    <div className="close-button">Đóng</div>
                    <div className="bottom-text">X-RP <span>Trường Học Lái Xe</span></div>
                    <div className="bottom-name-bg">
                        <div className="name">BRENDEN <span>RANDALL</span></div>
                    </div>
                    <div className="bottom-wallet"><i id="wallet" className="fa-solid fa-wallet"></i></div>
                    <div className="bottom-wallet-money">$<span>5000</span></div>
                </div>
                <div className='question-container'>
                    <center>
                        <div className='space'></div>
                        <p className='bold-text'>Welcome to Driving School</p>
                    </center>
                    <div className="space"></div>
                    <center>
                    <div className="space">All citizens of Los Santos must pass their exam before they can drive.</div>
                        <div className="space">Take your time, answer with common sense, and do not answer randomly.</div>
                        <div className="space">Theory Test</div> 
                        <div className="space">- The Theory Test costs $200, this is not refunded if you fail the test.</div> 
                        <div className="space">- Don't be afraid, the driving school accepts credit, but be careful not to get into debt.</div> 
                        <div className="space"></div> 
                        <div className="space"> Driving Test</div>
                        <div className="space">- The Driving Test costs $500, just like the theory test, this payment will not be refunded if you fail.</div> 
                        <div className="space">- Make sure you stay alert whilst driving, and avoid accidents!</div> 
                    </center>
                </div>
                <div className="bottom-menu">
                    <div className="buttonspot">
                        <a href="#" className="button btnQuestion" onClick={StartQuestion()}>Bắt Đầu</a>
                    </div>
                </div>
            </div>
            </> : <>
            <div className="body questionnaire-container">
                <div className="content">
                    <h2 id="questionNumero"></h2>
                    <div className="allahvar">
                        <div className="q-big-A">A</div>
                        <div className="q-big-B">B</div>
                        <div className="q-big-C">C</div>
                        <div className="q-big-D">D</div>
                        <form className="form" id="question-form">
                            <div>
                                <input type="radio" name="question" id="answerA" value="A"/>
                                <label className="answerA"></label>
                            </div>
                            <div>
                                <input type="radio" name="question" id="answerB" value="B"/>
                                <label className="answerB"></label>
                            </div>
                            <div>
                                <input type="radio" name="question" id="answerC" value="C"/>
                                <label className="answerC"></label>
                            </div>
                            <div>
                                <input type="radio" name="question" id="answerD" value="D"/>
                                <label className="answerD"></label>
                            </div>
                            <button type="submit" id="submit" className="submit">Tiếp Tục</button>
                        </form>
                    </div>
                </div>
                <div className="barre-progression">
                    <progress className="progression" value="0" max="10"/>
                </div>
            </div>
            </>}
        )
    }
    return(
        <div className='full-screen'>
            <HandlerClickStart />
        </div>
    )

}
export default DVMSchool