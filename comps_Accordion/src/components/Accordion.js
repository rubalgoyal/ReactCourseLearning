import { useState } from "react";
import {  GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion ({ items }) {
    
        const [expandedIndex, setExpandedIndex] = useState(-1);
        //Simple  Version      
        // const handleClick = (nextIndex) =>{
        //     if(expandedIndex == nextIndex){
        //         setExpandedIndex(-1);
        //     }
        //     else{
        //         setExpandedIndex(nextIndex);
        //     }
           
        // };

        // Functional Version
        const handleClick = (nextIndex) => {
            // to verify everything is working as expacted
            console.log('STALE version of expandedIndex', expandedIndex);

            setExpandedIndex((currentExpandedIndex) => {
                console.log('UP to date version',currentExpandedIndex );
                if(currentExpandedIndex == nextIndex){
                    return -1;
                }
                else{
                    return nextIndex;
                }
            })
        }

        const renderedItems = items.map((item, index) => {
            const isExpanded = index === expandedIndex;
            console.log(isExpanded);
            if(index === expandedIndex){
                console.log("Expanded!");
            }
            else{
                console.log("Collapsed!");
            }

           const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
           </span>

            
        return (
            <div>
                <div key={item.id}></div>
                    <div
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={ () => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });
    return<div className="border-x border-t rounded" >{renderedItems}</div>;;

}

export default Accordion;