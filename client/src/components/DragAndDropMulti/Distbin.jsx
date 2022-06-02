import { memo } from 'react'
import { useDrop } from 'react-dnd'
const style = {
    // height: '12rem',
    // width: '12rem',
    width: '100px',
    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    // float: 'left',
}
export const Dustbin = memo(function Dustbin({
                                                 name,
                                                 accept,
                                                 lastDroppedItem,
                                                 onDrop,
                                             }) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    const isActive = isOver && canDrop
    let backgroundColor = 'rgb(34 34 34 / 34%)'
    let border = ''
    if (isActive) {
        // backgroundColor = 'rgb(34 34 34 / 34%)';
        border = '1px dashed';
    } else if (canDrop) {
        border = '1px dashed';
        // backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor, border }} data-testid="dustbin">
            {name}
            {lastDroppedItem && (
                <p>{lastDroppedItem.name}</p>
            )}
        </div>
    )
})
