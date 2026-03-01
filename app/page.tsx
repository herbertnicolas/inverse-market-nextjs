import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function Home(props) {
  interface Offer {
    name: string;
    price: string;
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header user={{ name: "Herbert", saldo: "R$ 1.200,00", alocado: "R$ 800,00", available: "R$ 400,00" }} />
      <div className="flex h-[80vh] gap-4 px-6 py-6 overflow-x-auto">
        {/* Individual Offers - Emerald theme */}
        <Card className="w-full max-w-sm h-full flex flex-col border-t-4 border-t-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-emerald-800 dark:text-emerald-300">Individual offers</CardTitle>
            <Info className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3">
            <Card className="w-full border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="text-base">{props.name || "Jet Ski Sea Doo Brp Rxt-x 300 Hp Motoaquatica"}</CardTitle>
                <CardDescription className="text-lg font-semibold tracking-tight">
                  Offer made:
                  <span className="text-emerald-700 dark:text-emerald-400"> {props.price || "R$ 1.200,00"}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-auto">
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
              + Add Offer
            </Button>
          </CardFooter>
        </Card>

        {/* Dependant Offers - Sky/Blue theme */}
        <Card className="w-full max-w-sm h-full flex flex-col border-t-4 border-t-sky-500 bg-sky-50/50 dark:bg-sky-950/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-sky-800 dark:text-sky-300">Dependant offers</CardTitle>
            <Info className="h-4 w-4 text-sky-500" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3">
            <Card className="w-full border-sky-200 dark:border-sky-800">
              <CardHeader>
                <CardTitle className="text-base">{props.name || "Jet Ski Sea Doo Brp Rxt-x 300 Hp Motoaquatica"}</CardTitle>
                <CardDescription className="text-lg font-semibold tracking-tight">
                  Offer made:
                  <span className="text-sky-700 dark:text-sky-400"> {props.price || "R$ 1.200,00"}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-auto">
            <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 cursor-pointer">
              + Add Offer
            </Button>
          </CardFooter>
        </Card>

        {/* Combo Offers - Violet/Purple theme */}
        <Card className="w-full max-w-sm h-full flex flex-col border-t-4 border-t-violet-500 bg-violet-50/50 dark:bg-violet-950/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-violet-800 dark:text-violet-300">Combo offers</CardTitle>
            <Info className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3">
            <Card className="w-full border-violet-200 dark:border-violet-800">
              <CardHeader>
                <CardTitle className="text-base">{props.name || "Jet Ski Sea Doo Brp Rxt-x 300 Hp Motoaquatica"}</CardTitle>
                <CardDescription className="text-lg font-semibold tracking-tight">
                  Offer made:
                  <span className="text-violet-700 dark:text-violet-400"> {props.price || "R$ 1.200,00"}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-auto">
            <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 cursor-pointer">
              + Add Offer
            </Button>
          </CardFooter>
        </Card>

        {/* Mixed Offers - Amber/Orange theme */}
        <Card className="w-full max-w-sm h-full flex flex-col border-t-4 border-t-amber-500 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-amber-800 dark:text-amber-300">Mixed offers</CardTitle>
            <Info className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3">
            <Card className="w-full border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-base">{props.name || "Jet Ski Sea Doo Brp Rxt-x 300 Hp Motoaquatica"}</CardTitle>
                <CardDescription className="text-lg font-semibold tracking-tight">
                  Offer made:
                  <span className="text-amber-700 dark:text-amber-400"> {props.price || "R$ 1.200,00"}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-auto">
            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 cursor-pointer">
              + Add Offer
            </Button>
          </CardFooter>
        </Card>

        {/* Inactive Offers - Slate/Gray theme */}
        <Card className="w-full max-w-sm h-full flex flex-col border-t-4 border-t-slate-400 bg-slate-100/50 dark:bg-slate-950/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-slate-600 dark:text-slate-400">Inactive offers</CardTitle>
            <Info className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3">
            <Card className="w-full border-slate-200 dark:border-slate-700 opacity-75">
              <CardHeader>
                <CardTitle className="text-base">{props.name || "Jet Ski Sea Doo Brp Rxt-x 300 Hp Motoaquatica"}</CardTitle>
                <CardDescription className="text-lg font-semibold tracking-tight">
                  Offer made:
                  <span className="text-slate-500 dark:text-slate-400"> {props.price || "R$ 1.200,00"}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-auto">
            <Button type="submit" className="w-full bg-slate-500 hover:bg-slate-600 cursor-pointer">
              + Add Offer
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
