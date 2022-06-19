import React, { useEffect ,useState, useRef} from 'react';
import "@grapecity/wijmo.styles/wijmo.css";
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { FlexChart, FlexPie, FlexChartSeries } from '@grapecity/wijmo.react.chart';
import { RadialGauge } from '@grapecity/wijmo.react.gauge';
import './wijmoTree.css';
import * as wjNav from '@grapecity/wijmo.react.nav';

const WijmoTree = ()  => {

    const [data, setData] = useState([]);
    const [sectionText, setSectionText] = useState([]);
    const [sectionCheck, setSecionCheck] = useState([]);
    const [sectionNumber, setSectionNumber] = useState([]);
    const [textArea, setTextArea] = useState([]);
    const [sectionPassword, setSectionPassword] = useState([]);

    const dataRef = useRef(); 


    useEffect(()=> {
        setData(getData());
        dataRef.current = getData();
    },[]) 

    useEffect(()=> {
        console.log(dataRef.current)
        copyData();
    },[dataRef])


    const copyData = () => {
        let inData = { 
            id : 6 ,
            name : 'Korea', 
            flag : 'aa'}
       dataRef.current.push(inData);
    };

    
    const getData = () => {
        return [
            { id: 0, name: 'US', flag: 'us' },
            { id: 1, name: 'Germany', flag: 'de' },
            { id: 2, name: 'UK', flag: 'gb' },
            { id: 3, name: 'Japan', flag: 'jp' },
            { id: 4, name: 'Italy', flag: 'it' },
            { id: 5, name: 'Greece', flag: 'gr' }
        ];
    };

    return (
    <div className = "flex_align_lr">
        <div className = "flex_left">
          <div className = "flex_tree">
             </div>
        </div>
        <div className = "flex_right">
            <table className = "tableClass">
                <colgroup>
                    <col width = "16.7%"/>
                    <col width = "33.3%"/>
                    <col width = "16.7%"/>
                    <col width = "33.3%"/>
                </colgroup>
            <tbody>
                <tr>
                    <th><label>SectionText</label></th>
                    <td>
                        <input type = "text"
                               value = {sectionText}
                               onChange = {(e) => {setSectionText(e.target.value);}}
                    /></td>
                    <th><label>SectionCheckBox</label></th>
                    <td><input type = "checkbox"
                        id = "sectionChkBox"
                        checked = {sectionCheck === 'Y'? true : false}
                        onChange = {(e)=> {e.target.checked? setSecionCheck('Y') : setSecionCheck('N') }}
                        /></td>
                </tr>
                <tr>
                    <th><label>SectionNumber</label></th>
                    <td>
                        <input type = "number"
                               value = {sectionNumber}
                               onChange = {(e) => {setSectionNumber(e.target.value);}}
                        />
                    </td>
                    <th><label>SectionTextArea</label></th>
                    <td>
                        <textarea 
                        type = "text" 
                        value = {textArea}
                        onChange = {(e)=> setTextArea(e.target.value)} /></td>
                </tr>
                <tr>
                    <th><label>SectionPassword</label></th>
                    <td>
                        <input type = "password"
                         value = {sectionPassword}
                         onchanged = {(e)=> {setSectionPassword(e.target.value)}}
                         onKeyDown = {(e) =>{if(e.keyCode === 13) {console.log("Enter")}}}
                        //  autoComplete = "new-password"
                        />
                    </td>
                    <th><label>Section6</label></th>
                    <td><input type = "text"/></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div> 
    );
  };
  
export default WijmoTree;
