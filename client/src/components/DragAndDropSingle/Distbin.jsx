import { useDrop } from 'react-dnd'
import {ItemTypes} from "./ItemTypes";

const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

export const Dustbin = ({img}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Кыз' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = ''
    let border = ''
    if (isActive) {
        backgroundColor = 'rgb(34 34 34 / 4%)';
        border = '1px dashed';
    } else if (canDrop) {
        border = '1px dashed';
        // backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor, border }} data-testid="dustbin">
            <img src={img} alt="" style={{objectFit: 'contain',
                width: '100%',
                height: '100%',}}/>
        </div>
    )
}
