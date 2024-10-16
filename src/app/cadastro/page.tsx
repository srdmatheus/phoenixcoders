import Link from "next/link";

import { Icon } from "@/components";

import { RegisterForm } from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <header className="flex min-h-[100px] w-full items-center justify-center bg-blue-hf text-white">
        <div className="flex w-[1200px] items-center justify-between">
          <Link
            href="/"
            className="text-center font-zen_dots text-3xl text-blue-1"
          >
            FRONTEND
            <br /> FUSION
          </Link>

          <Link href="/">
            <Icon.x size={38} className="text-gray-1" />
          </Link>
        </div>
      </header>
      <main className="flex flex-col">
        <div className="flex justify-center">
          <section className="flex w-1/2 flex-col bg-blue-3 p-20 text-neutral-1">
            <h1 className="text-5xl text-H1">Torne-se um Fusioner.</h1>
            <p>Venha fazer parte desta envolvente jornada. Vamos juntos!</p>

            <div className="mt-20">
              <p>Entre em contato</p>
              <Link
                href="mailto:projetofrontendfusion@gmail.com"
                className="font-semibold"
              >
                projetofrontendfusion@gmail.com
              </Link>
            </div>

            <div className="mt-10">
              <p>WhatsApp</p>
              <Link
                href="https://wa.me/5585987596435"
                target="_blank"
                className="font-semibold"
              >
                +55 85 98759-6435
              </Link>
            </div>

            <div className="mt-10">
              <p>Brasil</p>
              <p className="font-semibold">Fortaleza, CE</p>
            </div>
          </section>
          <section className="w-1/2 bg-neutral-1 p-20">
            <h3 className="text-H3">Preencha os dados abaixo</h3>
            <RegisterForm />
          </section>
        </div>
      </main>
    </>
  );
}
