import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';

function About2() {
    const obj={
        header : ["순위","이름","티어","거래량","종가","PER","감정점수"],
        data : [
            {rank : "1", name: "코디엠", tier :"1 Tier", volume : "44205005.0", cp : "335", per : "8.17", emo :"0.966" },
            {rank : "2", name: "서부티엔디", tier :"1 Tier", volume : "91386.0", cp : "7,850", per : "7850.0", emo :"0.966"},
            {rank : "3", name: "에코프로비엠", tier :"1 Tier", volume : "371313.0", cp : "375,200", per : "166.31", emo :"0.862"},
            {rank : "4", name: "보성파워텍", tier :"1 Tier", volume : "58321021.0", cp : "5,160", per : "143.33", emo :"0.966"},
            {rank : "5", name: "에스케이 머티리얼즈", tier :"1 Tier", volume : "37094.0", cp : "311,000", per : "23.03", emo :"0.931"},
            {rank : "6", name: "셀트리온헬스케어", tier :"1 Tier", volume : "516982.0", cp : "63,500", per : "41.13", emo :"0.897"},
            {rank : "7", name: "HLB", tier :"1 Tier", volume : "2279192.0", cp : "90,000", per : "132.74", emo :"0.966"},
            {rank : "8", name: "솔트웍스", tier :"1 Tier", volume : "87336.0", cp : "4,635", per : "4635.0", emo :"0.793"},
            {rank : "9", name: "천보", tier :"1 Tier", volume : "64907.0", cp : "283,000", per : "103.21", emo :"0.828"},
            {rank : "10", name: "티플랙스", tier :"2 Tier", volume : "32262266.0", cp : "4,890", per : "31.35", emo :"1"},
            {rank : "11", name: "펄어비스", tier :"2 Tier", volume : "296995.0", cp : "95,100", per : "57.46", emo :"0.931"},
            {rank : "12", name: "카카오게임즈", tier :"2 Tier", volume : "703332.0", cp : "73,500", per : "52.95", emo :"0.966"},
            {rank : "13", name: "현대바이오사이언스", tier :"2 Tier", volume : "1535477.0", cp : "43,050", per : "1956.82", emo :"0.862"},
            {rank : "14", name: "PHC", tier :"2 Tier", volume : "43281136.0", cp : "2,030", per : "15.86", emo :"1"},
            {rank : "15", name: "리노공업", tier :"2 Tier", volume : "66094.0", cp : "180,100", per : "49.37", emo :"1"},
            {rank : "16", name: "솔브레인", tier :"2 Tier", volume : "23822.0", cp : "227,300", per : "27.91", emo :"0.966"},
            {rank : "17", name: "풍원정밀", tier :"1 Tier", volume : "15197444.0", cp : "21,450", per : "595.83", emo :"0.69"},
            {rank : "18", name: "엔켐", tier :"2 Tier", volume : "219066.0", cp : "84,700", per : "1435.59", emo :"0.931"},
            {rank : "19", name: "일진파워", tier :"2 Tier", volume : "11130912.0", cp : "19,900", per : "157.53", emo :"1"},
            {rank : "20", name: "퓨처스트림네트웍스", tier :"2 Tier", volume : "17954112.0", cp : "1,300", per : "36.11", emo :"0.931"},
            {rank : "21", name: "CJENM", tier :"3 Tier", volume : "46780.0", cp : "130,000", per : "45.3", emo :"0.966"},
            {rank : "22", name: "인텔리안테크놀로지스", tier :"3 Tier", volume : "98010.0", cp : "81,500", per : "1072.37", emo :"0.966"},
            {rank : "23", name: "셀트리온제약", tier :"3 Tier", volume : "91554.0", cp : "87,900", per : "157.53", emo :"0.966"},
            {rank : "24", name: "메디톡스", tier :"3 Tier", volume : "43376.0", cp : "188,600" , per : "43.94", emo :"0.862"},
            {rank : "25", name: "자연과 환경", tier :"3 Tier", volume : "35390925.0", cp : "1,720", per : "74.78", emo :"0.966"},
            {rank : "26", name: "아프리카티비", tier :"3 Tier", volume : "65044.0", cp : "139,200", per : "41.37", emo :"0.966"},
            {rank : "27", name: "에코프로", tier :"3 Tier", volume : "989634.0", cp : "86,500", per : "80.47", emo :"0.828"},
            {rank : "28", name: "조이시티", tier :"3 Tier", volume : "13925132.0", cp : "9,450", per : "47.73", emo :"0.966"},
            {rank : "29", name: "셀루메드", tier :"3 Tier", volume : "62491.0", cp : "5,870", per : "1956.67", emo :"0.867"},
            {rank : "30", name: "휴젤", tier :"3 Tier", volume : "34466.0", cp : "146,800", per : "43.78", emo :"0.862"},
            {rank : "31", name: "골프존", tier :"4 Tier", volume : "35093.0", cp : "151,500", per : "24.83", emo :"1"},
            {rank : "32", name: "CMG제약", tier :"4 Tier", volume : "441175.0", cp : "3,225", per : "1612.5", emo :"0.966"},
            {rank : "33", name: "빅텍", tier :"4 Tier", volume : "15776953.0", cp : "6,950", per : "65.57", emo :"0.966"},
            {rank : "34", name: "컴투스홀딩스", tier :"4 Tier", volume : "297658.0", cp : "134,000" , per : "42.61", emo :"0.862"},
            {rank : "35", name: "대주전자재료", tier :"5 Tier", volume : "113002.0", cp : "89,400", per : "259.13", emo :"1"},
            {rank : "36", name: "동신건설", tier :"4 Tier", volume : "2457554.0", cp : "42,150", per : "421.5", emo :"0.897"},
            {rank : "37", name: "엘엑스세미콘", tier :"4 Tier", volume : "104922.0", cp : "114,000", per : "25.57", emo :"0.897"},
            {rank : "38", name: "라파스", tier :"4 Tier", volume : "91274.0", cp : "26,650", per : "1480.56", emo :"0.897"},
            {rank : "39", name: "씨젠", tier :"5 Tier", volume : "833827.0", cp : "51,300" , per : "5.28", emo :"0.931"},
            {rank : "40", name: "GS", tier :"5 Tier", volume : "17273156.0", cp : "6,170", per : "39.3", emo :"0.931"},
            {rank : "41", name: "모트렉스", tier :"4 Tier", volume : "25994937.0", cp : "3,340", per : "65.49", emo :"0.862"},
            {rank : "42", name: "스튜디오드래곤 주식회사", tier :"4 Tier", volume : "78375.0", cp : "85,300", per : "81.7", emo :"0.828"},
            {rank : "43", name: "파크시스템스", tier :"5 Tier", volume : "23734.0", cp : "119,000", per : "79.44", emo :"1"},
            {rank : "44", name: "TCK", tier :"5 Tier", volume : "32023.0", cp : "117600", per : "22.69", emo :"0.931"},
            {rank : "45", name: "좋은사람들", tier :"5 Tier", volume : "22765968.0", cp : "2,660", per : "23.13", emo :"1"},
            {rank : "46", name: "컴투스", tier :"5 Tier", volume : "118051.0", cp : "109,900", per : "16.51", emo :"0.897"},
            {rank : "47", name: "지에스홈쇼핑", tier :"4 Tier", volume : "15850.0", cp : "150,100", per : "8.18", emo :"0.828"},
            {rank : "48", name: "이오테크닉스", tier :"5 Tier", volume : "59561.0", cp : "99,600", per : "57.11", emo :"0.897"},
            {rank : "49", name: "심텍", tier :"5 Tier", volume : "1157890.0", cp : "53,200", per : "27.09", emo :"0.759"},
            {rank : "50", name: "팜스토리", tier :"5 Tier", volume : "19891392.0", cp : "2,595", per : "10.59", emo :"0.759"},
        ],
    };
    return(
        <div>
        <nav id="menubar">
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">RANKING</Link></li>
            <li><Link to="/member">MEMBER</Link></li>
            <li><Link to="/guide">GUIDE</Link></li>
        </ul>
        </nav>
        <form action="https://www.google.com/search" method="GET">
                <div className="search-small">
                <input className="input-1-small" type="text" name="q" placeholder="Welcome to RGB"/>
                <button className="search_button-small" type="submit">.GG</button>
                </div>
        </form>
        <br/><br/>
        <div className="div-button">
            <span className="content">* 보통주로만 분석된 결과입니다.</span>
            <Link to="/about2"><input className="button1" type="button" value="코스닥"></input></Link>
            <Link to="/about"><input className="button1" type="button" value="유가증권"></input></Link>
        </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                    {obj.header.map((item) => {
                    return <th>{item}</th>;})}
                    </tr>
                </thead>
                <tbody>
                    {obj.data.map((item) => {
                    return (
                        <tr>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.tier}</td>
                            <td>{item.volume}</td>
                            <td>{item.cp}</td>
                            <td>{item.per}</td>
                            <td>{item.emo}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        </div>

    );
};

export default About2;