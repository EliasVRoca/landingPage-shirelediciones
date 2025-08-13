import { Global } from "../../../global"
import MayorQue from "../icons/MayorQue"

const { baseUrl } = Global
export const ListMenu = ({ menuOff }) => {
    return (
        <div className="bg-slate-50 fixed top-0 bottom-0 left-0 right-0 px-5 text-textBlack">
            <div className="h-16 w-full flex items-center justify-end">
                <svg onClick={menuOff} className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            </div>
            <nav class="">
                <ul
                    class="flex flex-col text-base [&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li]:h-14 [&>li]:px-4 [&>li>a]:py-2 [&>li>a]:text-center"
                >
                    <li><a href={baseUrl} class="">Inicio</a> <MayorQue /></li>
                    <li><a href={baseUrl + "catalog"} class="">Catálogo</a> <MayorQue /></li>
                    <li><a href={baseUrl + "contact"} class="">Contacto</a> <MayorQue /></li>
                    <li><a href={baseUrl + "aboutus"}>Sobre Nosotros</a> <MayorQue /></li>
                </ul>
            </nav>
            <hr className="my-5" />
            <nav class="">
                <ul
                    class="flex flex-col text-base [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li]:h-16 [&>li]:px-4 [&>li>a]:py-2 [&>li>a]:text-center"
                >
                    <li>
                        <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path>
                            <path d="M3 12h13l-3 -3"></path>
                            <path d="M13 15l3 -3"></path>
                        </svg>
                        <a href="https://portal.shirelediciones.com/"
                        >Iniciar Sesión
                        </a>
                    </li>
                    <li>
                        <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M10 15v-6h2a2 2 0 1 1 0 4h-2"></path>
                            <path d="M14 15l-2 -2"></path>
                        </svg>
                        <a href="https://portal.shirelediciones.com/auth/signup"
                        >Regístrese
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
