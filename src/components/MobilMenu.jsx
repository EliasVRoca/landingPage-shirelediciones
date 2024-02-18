import { useState } from "react"
import { ListMenu } from "./mobile/ListMenu"

const MobilMenu = () => {
    const [menuState, setMenuState] = useState(false)
    const menuActive = () => {
        setMenuState(true)
    }
    const menuOff = () => {
        setMenuState(false)
    }
    return (
        <>
            <button onClick={menuActive} className="inline-block backdrop-blur-2xl rounded px-4 py-1 lg:hidden">Menú</button>
            {menuState && <ListMenu menuOff={menuOff} />}

        </>
    )
}

export default MobilMenu