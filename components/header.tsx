import { Mail, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SubHeader from "./sub-header";

interface ILoggedUser {
    name: string,
    saldo?: string,
    alocado?: string,
    available?: string,
}
const Header = (props: ILoggedUser) => {
    return (
        <>
            <header className="flex bg-lime-100 px-4 shadow-sm">
                <nav className="flex w-full max-w-8xl justify-between mx-6 p-6 lg:px-8 gap-8">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">INVSMKT</h3>
                    <div id="header-buttons-container">
                        <Button className="cursor-pointer">HOME</Button>
                    </div>
                    <div id="search-container" className="w-full max-w-3xl">
                        <Field orientation="horizontal">
                            <InputGroup className="rounded-xl p-2">
                                <InputGroupInput placeholder="Search for product..." />
                                    <InputGroupAddon>
                                        <Search />
                                    </InputGroupAddon>
                                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                            </InputGroup>
                        </Field>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/path/to/user-avatar.jpg" alt="Usuário" />
                                    <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                                </Avatar>
                                <span>Welcome, {props.user?.name || "guest"}! </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Configurações</DropdownMenuItem>
                            <DropdownMenuItem>Perfil</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </header>
            <SubHeader saldo={props.user?.saldo || "R$ 0,00"} alocado={props.user?.alocado || "R$ 0,00"} available={props.user?.available || "R$ 0,00"} />
        </>
    )
}

export default Header;