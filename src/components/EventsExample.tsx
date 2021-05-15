import React, {FC, useState, useRef} from 'react';

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const handlerDrag = (e: React.DragEvent<HTMLDivElement>) => {

    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const DragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder='управялемый'/>
            <input type="text" ref={inputRef} placeholder='Неуправялемый'/>
            <button onClick={clickHandler}>click me</button>
            <div draggable onDrag={handlerDrag} style={{width: 200, height: 200, background:'red'}}></div>
            <div onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 onDragOver={DragOverHandler}
                 style={{width: 200, height: 200, background: isDrag ? 'red' : 'blue', marginTop:15}}></div>
        </div>
    );
};

export default EventsExample;