import React from 'react'

type Props={
    handler: () => void
}
export default function Menu(props: Props) {
    return (
        <>
        <button className='back-btn' type='button' onClick={props.handler}>
            <img src='/images/back.svg' style={{width: '24px', height: '24px'}}/>
        </button>
        <div className='menu'>
            <h2 className='menu-title'>
                Інструкція для Глінтвейну
            </h2>
            <ol>
            <li>
                 Перелий вино у каструлю
            </li>
            <li>
                 Знайди апельсин
            </li>
            <li>
                 Додай 2 скибки апельсина до вина
            </li>
            <li>
                 Підігрій, але не доводь до кипіння
            </li>
            <li>
                 Насолоджуйся миттю!
            </li>
            </ol>
        </div>
        </>
    )
}