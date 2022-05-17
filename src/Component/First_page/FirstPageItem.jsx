import React from "react";
import page from './firstPageItem.module.css'

function FirstPageItem(){
    return(
        <div className={page.item}>
            <div className={page.photo}>
                <h1>This is Game!</h1>
                <img src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/C2B6/production/_90464894_snake_thinkstock_976.jpg'}/>
                <h1>Instructions be second page!</h1>
            </div>
        </div>
    )
}
export default FirstPageItem