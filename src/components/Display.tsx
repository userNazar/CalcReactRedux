import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '..';
import { changeStyle } from '../redux/actions';
import AlertOwn from './AlertOwn'




export default function Display() {


    const dispatch = useDispatch();
    const styles = useSelector((state: RootState) => state.styles);
    const display = useSelector((state: RootState) => state.logic)
    const ui = useSelector((state: RootState) => state.ui)



    const { bgBts, bgBg } = styles;


    function buttonHadndler(): void {
        dispatch(changeStyle())
    }

    
    return (
        <>
        {ui.bigScreen ? <AlertOwn text={'Very large length of numbers'}/> : null}
        {ui.modal ? <AlertOwn text={'I did not have idea about it )'}/> : null}
        
            <div className='display'>
                <div>
                    <button className={`display__btn ${bgBg}`} onClick={buttonHadndler}><span className={`display__btn-element ${bgBts}`}></span></button>
                </div>
                <div className="display__screen">
                    <p className="display__move">{display.input ? display.input : '0'}</p>
                    <p className="display__equal">= {display.result ? display.result : '0'}</p>
                </div>
            </div>

        </>
    )
}
