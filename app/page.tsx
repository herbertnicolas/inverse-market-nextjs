import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header user={{ name: "Herbert", saldo: "R$ 1.200,00", alocado: "R$ 800,00", available: "R$ 400,00" }} />
    </div>
  );
}
