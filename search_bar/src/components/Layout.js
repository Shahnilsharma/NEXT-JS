export default function Layout ({children}){
    return (
        <div className="flex
        p-2.5 h-screen" >
            <main className="w-9/12 bg-zinc-900 ml-2.5 rounded-xl overflow-y-scroll ">
                {children}
            </main>
        </div>
    )
}
