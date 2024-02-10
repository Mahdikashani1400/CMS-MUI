export default function SingleIcon(props){
    return(
        <svg className="">
            <use href={`#${props.name}`}></use>
        </svg>
    )
}