const NewColor = (props) => {
    let item = props.item;
    let index = props.index;
    return ( 
        <li className='w-2/5 m-auto py-4 border-2 rounded-xl font-bold border-black text-center align-middle text-white' style={{backgroundColor: `#${item}`}} key={index}> <span className='bg-black bg-opacity-20 px-16 py-1 rounded-xl'>#{item}</span></li>
     );
}
 
export default NewColor;