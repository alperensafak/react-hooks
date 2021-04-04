import React from 'react'

// const CustomInput = React.forwardRef(({color}, ref) => {
//     return (
//         <div>
//             {color}
//             <input type="text" ref={ref}/>
//         </div>
        
//     )
// })

// export default CustomInput


const CustomInput = (props, ref) => {
    return (
        <div>
            {props.color}
            <input type="text" ref={ref}/>
        </div>
        
    )
}

export default React.forwardRef(CustomInput);