import update from 'immutability-helper'
import React, { memo, useCallback, useState } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { Box } from './Box'
import { Dustbin } from './Distbin'
import { ItemTypes } from './ItemTypes.js'
import {Button} from "antd";


export const DragAndDropMulti = memo(function Container({task, onSuccess, setDustbins, dustbins, boxes}) {
    const [droppedBoxNames, setDroppedBoxNames] = useState([])
    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1
    }
    const handleDrop = useCallback(
        (index, item) => {
            const { name } = item
            setDroppedBoxNames(
                update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
            )
            setDustbins(
                update(dustbins, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                }),
            )
        },
        [droppedBoxNames, dustbins],
    )
    return (
        <div className="lesson__wrp">
            <div className="lesson__text">{task}</div>
            <div className="distbin">
                {dustbins.map(({name, accepts, lastDroppedItem }, index) => (
                    <Dustbin
                        name={name}
                        accept={accepts}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={(item) => handleDrop(index, item)}
                        key={index}
                    />
                ))}
            </div>
            <div className="lesson__text">Удерживай что бы переместить</div>
            <div className="distbin">
                {boxes.map(({ name, type }, index) => (
                    <Box
                        name={name}
                        type={type}
                        isDropped={isDropped(name)}
                        key={index}
                    />
                ))}
            </div>

            <Button className="" type="primary" block onClick={() => {
                if (JSON.stringify(dustbins.map(item => item.lastDroppedItem.name)) ===
                JSON.stringify(dustbins.map(item => item.trues))) {
                    alert('Якшы!');
                    onSuccess()
                } else {
                    alert('Не верно! Попробуй еще раз')
                }
            }}>Проверить</Button>
        </div>
    )
})
