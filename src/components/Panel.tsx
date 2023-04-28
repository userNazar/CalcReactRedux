import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '..'
import { changeInput, clearAll, setInput, showEqual, deleteLast, modal } from '../redux/actions';

export default function Panel() {

    const styles = useSelector((state: RootState) => state.styles)
    const dispatch = useDispatch()

    let val: string = ''
    const { gBTN, gbBTN, grBTN, bgBg } = styles;
    const cheker = ['+', '-', '*', '/', '%'];
    let pointCheker = '';
    function btnsHandler(event: any) {
        if (event.target.className.includes('panel_first-row-num') || event.target.className.includes('panel_side-bar-bts') || event.target.textContent === '%') {
            if (pointCheker.includes('.') && event.target.textContent === '.') {
                return;
            } else {
                dispatch(changeInput(event.target.textContent))
            }

            if (cheker.includes(event.target.textContent)) {
                pointCheker = ''
            }

            pointCheker += event.target.textContent;
            if ((event.target.className.includes('panel_side-bar-bts') && !val) || (cheker.includes(val[val.length - 1]) && event.target.className.includes('ps'))) {
                return
            } else if ((val === '0' || !val) && event.target.textContent === '0') {
                return;
            } else if ((val === '0' || !val) && event.target.textContent === '.') {
                val = '0.'
            } else if (!pointCheker && cheker.includes(event.target.textContent)) {
                val = '0.'
            }

            else if (val[val.length - 1] === '.' && cheker.includes(event.target.textContent)) {
                val += 0;
                val += event.target.textContent;
            } else if (event.target.textContent === '.' && cheker.includes(val[val.length - 1])) {
                val += '0.'
            }
            else {
                val += event.target.textContent
            }
           
            dispatch(showEqual(val))

        }

        if (event.target.className.includes('equal')) {
            // eslint-disable-next-line
            val = eval(val).toString()
            dispatch(setInput())
        }

        if (event.target.className.includes('clearALL')) {
            dispatch(clearAll())
            val = ''
            pointCheker = ''
        }



        if (event.target.className.includes('del')) {
            dispatch(deleteLast())
            val = val.slice(0, -1)
            console.log(val)
            dispatch(showEqual(val))
        }

    

    }

    return (
        <div className={`panel ${bgBg}`} onClick={btnsHandler}>
            <div className="panel__main">
                <div className="panel_first-row-one">
                    <button className={`panel_first-row-move clearALL btn ${grBTN}`}>AC</button>
                    <button className={`panel_first-row-move ps btn proc ${grBTN}`}>%</button>
                    <button className={`panel_first-row-move equal btn ${grBTN}`}>=</button>
                </div>
                <div className="panel_first-row">
                    <button className={`panel_first-row-num btn ${gBTN}`}>1</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>2</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>3</button>
                </div>
                <div className="panel_first-row">
                    <button className={`panel_first-row-num btn ${gBTN}`}>4</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>5</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>6</button>
                </div>
                <div className="panel_first-row">
                    <button className={`panel_first-row-num btn ${gBTN}`}>7</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>8</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>9</button>
                </div>
                <div className="panel_first-row">
                    <button className={`panel_first-row-move btn gr ${gbBTN}`} onClick={() => dispatch(modal())}>...</button>
                    <button className={`panel_first-row-num btn ${gBTN}`}>0</button>
                    <button className={`panel_first-row-num point btn ${gBTN}`}>.</button>
                </div>
            </div>
            <div className="panel__side-bar">
                <div><button className={`panel_first-row-move delete del btn ${grBTN}`}> <img className='del' src="../photo/Vector.png" alt="" /> </button></div>
                <div><button className={`panel_side-bar-bts ps btn gr ${gbBTN}`}>+</button></div>
                <div><button className={`panel_side-bar-bts ps btn gr ${gbBTN}`}>-</button></div>
                <div><button className={`panel_side-bar-bts ps btn gr ${gbBTN}`}>*</button></div>
                <div><button className={`panel_side-bar-bts ps btn gr ${gbBTN}`}>/</button></div>
            </div>
        </div>
    )
}
