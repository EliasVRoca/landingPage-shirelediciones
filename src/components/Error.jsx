const Error = () => {
    return (
        <>
            <div className="h-full w-full flex items-center justify-center">
                <div className="text-white flex items-center justify-center bg-gray-800 p-4 rounded border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-800">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 7v4a1 1 0 0 0 1 1h3"></path>
                        <path d="M7 7v10"></path>
                        <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"></path>
                        <path d="M17 7v4a1 1 0 0 0 1 1h3"></path>
                        <path d="M21 7v10"></path>
                    </svg>
                    <h2 className="text-base">Page not found</h2>
                </div>
            </div>
        </>
    )
}

export default Error