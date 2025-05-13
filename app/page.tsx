"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cataratas.gif"
            alt="Cataratas do Iguaçu"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="flex justify-center mb-12">
            <Image src="/logonaturis.png" alt="Naturis Turismo" width={180} height={80} className="h-auto" />
          </div>

          <div className="max-w-3xl mx-auto text-center text-white space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Descubra as Maravilhas da Tríplice Fronteira
            </h1>

            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
              Experiências únicas e inesquecíveis em Foz do Iguaçu, Paraguai e Argentina com a Naturis Turismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white border-0 rounded-full px-8 text-lg h-14"
              >
                Entrar em Contato
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/20 rounded-full px-8 text-lg h-14"
                onClick={() => {
                  document.getElementById("passeios")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Ver Passeios
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-10 w-10 text-white opacity-80" />
          </div>
        </div>
      </section>

      {/* Passeios Section */}
      <section id="passeios" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800">Nossos Passeios Exclusivos</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossos destinos cuidadosamente selecionados para proporcionar experiências inesquecíveis na
              Tríplice Fronteira.
            </p>
          </div>

          {/* Foz do Iguaçu */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/foz.png" alt="Cataratas do Iguaçu" fill className="object-cover" />
            </div>
            <div className="space-y-6 px-4">
              <h3 className="text-3xl font-bold text-green-800">Foz do Iguaçu</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Descubra a majestade das Cataratas do Iguaçu, uma das Sete Maravilhas Naturais do Mundo. Nosso passeio
                inclui visitas ao Parque Nacional, Parque das Aves e à impressionante Usina Hidrelétrica de Itaipu,
                proporcionando uma experiência completa neste destino único.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Visita guiada às Cataratas do Iguaçu
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Passeio pelo Parque das Aves
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Tour pela Usina de Itaipu
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6 mt-4 flex items-center gap-2">
                Saiba Mais <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Paraguai */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/paraguai.png" alt="Ciudad del Este" fill className="object-cover" />
            </div>
            <div className="order-2 md:order-1 space-y-6 px-4">
              <h3 className="text-3xl font-bold text-green-800">Paraguai</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore Ciudad del Este, o paraíso das compras na tríplice fronteira. Nosso passeio oferece uma
                experiência completa, incluindo visitas aos principais centros comerciais, assistência nas compras e a
                oportunidade de conhecer o impressionante Salto del Monday.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Tour pelos melhores centros comerciais
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Visita ao Salto del Monday
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Assistência personalizada nas compras
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6 mt-4 flex items-center gap-2">
                Saiba Mais <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Argentina */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/messi.png" alt="Puerto Iguazú" fill className="object-cover" />
            </div>
            <div className="space-y-6 px-4">
              <h3 className="text-3xl font-bold text-green-800">Argentina</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Visite Puerto Iguazú e descubra o lado argentino das Cataratas, com suas passarelas que permitem uma
                aproximação incrível das quedas d'água. Desfrute da gastronomia local, visite o Marco das Três
                Fronteiras e mergulhe na cultura argentina.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Passeio pelas passarelas do Parque Nacional
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Experiência gastronômica argentina
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Visita ao Marco das Três Fronteiras
                </li>
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6 mt-4 flex items-center gap-2">
                Saiba Mais <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
              Pronto para viver uma experiência inesquecível?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Entre em contato conosco e planeje sua próxima aventura na Tríplice Fronteira. Nossa equipe está pronta
              para criar a viagem dos seus sonhos.
            </p>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-0 rounded-full px-8 text-lg h-14 mt-4"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
