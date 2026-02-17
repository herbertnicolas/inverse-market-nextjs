const SubHeader = (props: { saldo: string, alocado: string, available: string }) => {
    return (
        <header className="flex items-center bg-lime-50 h-10">
            <nav className="flex ml-4 max-w-7xl gap-8">
                <div className="flex items-center text-blue-900 justify-center border rounded-xl bg-lime-200 px-4 py-1/2 scroll-m-20 text-md font-semibold tracking-tight">
                    Saldo na plataforma: {props.saldo || "R$ 0,00"}
                </div>
                <div className="flex items-center text-teal-100 justify-center border rounded-xl bg-[#215E61]  px-4 py-1/2 scroll-m-20 text-md font-semibold tracking-tight">
                    Alocado em ofertas: {props.alocado || "R$ 0,00"}
                </div>
                <div className="flex items-center text-black justify-center border rounded-xl bg-lime-200 px-4 py-1/2 scroll-m-20 text-md font-semibold tracking-tight">
                    Disponível: {props.available || "R$ 0,00"}
                </div>
            </nav>
        </header>
    )
}
export default SubHeader;