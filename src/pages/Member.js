import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/member.css';
import Jisun from '../images/jisun.jpg';
import Heeho from '../images/heeho.jpg';
import Seungwon from '../images/seungwon.png';
import Seungjae from '../images/seungjae.png';

function Member() {
    return (
        <div>
            <nav id="menubar">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">RANKING</Link></li>
                <li><Link to="/member">MEMBER</Link></li>
                <li><Link to="/guide">GUIDE</Link></li>
            </ul>
            </nav>
            <div className="membertable" >
                <table className="mt">
                    <tr>
                        <td className="membertd">
                        <img className="jisun" src={Jisun}/>
                        </td>
                        <td>
                        <img className="seungwon" src={Seungwon}/>
                        </td>
                        <td>
                        <img className="heeho" src={Heeho}/>
                        </td>
                        <td>
                        <img className="seungjae" src={Seungjae}/>
                        </td>
                    </tr>
                    <tr className="cha">
                        <td>" 멈추는 법을 <br/> 모르는 토끼 오지선 "</td>
                        <td>" 데이터 분석의<br></br>강동원 정승원 "</td>
                        <td>" 따듯한 로봇 음-칰잉~ <br></br>정희호 "</td>
                        <td>" 분위기를 상쾌하게 만들어줄<br/>미세먼지 필터 문승재 "</td>
                    </tr>
                    <tr>
                        <td  className="jisun-des">
                        <div >
                            담당 : 개발팀 <br/>
                            소개 : 세종대학교 <br/> 지능기전공학부<br/>무인이동체공학
                        </div>
                        </td>
                        <td  className="jisun-des">
                        <div >
                        담당 : 분석팀 <br/>
                        소속 : 세종대학교 <br/> 데이터사이언스<br/><br/>
                        </div>
                        </td>
                        <td  className="jisun-des">
                        <div >
                        담당 : 개발팀 <br/>
                        소속 : 세종대학교 <br/> 지능기전공학부<br/>무인이동체공학<br/>

                        </div>
                        </td>
                        <td>
                        <div className="jisun-des">
                        담당 : 분석팀 <br/>
                        소속 : 세종대학교 <br/> 데이터사이언스<br/><br/>
                        </div>
                        </td>
                    </tr>
                </table>
            </div>

            </div>
    );
};

export default Member;
