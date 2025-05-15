"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ChevronRight, Star, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

// Função para criar links do WhatsApp com mensagens pré-definidas
const whatsappLink = (message: string) => {
  // Número real da Naturis Turismo
  const phoneNumber = "5545991281353"
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export default function Home() {
  // Array de mensagens chamativas para rotação
  const heroMessages = ["TRANSPORTE PRIVATIVO", "CONFORTO E SEGURANÇA", "EXPERIÊNCIA EXCLUSIVA", "ATENDIMENTO VIP"]

  // Estado para controlar a mensagem atual
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  // Efeito para alternar as mensagens a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % heroMessages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-950">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image src="/cataratas.gif" alt="Cataratas do Iguaçu" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-950/40 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 py-6">
          {/* Logo e contatos no topo da hero */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <Image src="/naturislogo.png" alt="Naturis Turismo" width={180} height={80} className="h-auto" />
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-white">
                <Phone className="h-5 w-5" />
                <span className="font-medium">WHATSAPP: (45) 9912-81353</span>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Conteúdo principal da hero */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="max-w-2xl space-y-6 text-white py-10 md:py-20">
              <div className="inline-block animate-bounce bg-green-600 text-white py-1 px-3 rounded-full text-sm font-medium mb-2">
                O melhor da Tríplice Fronteira!
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl uppercase min-h-[80px] transition-all duration-500">
                {heroMessages[currentMessageIndex]}
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Um veículo exclusivo para você e sua família!
                <br />
                <span className="font-bold">AQUI!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link
                    href={whatsappLink(
                      "Olá! Gostaria de mais informações sobre o transporte privativo da Naturis Turismo.",
                    )}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Entrar em Contato
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                >
                  <Link href="#atrativos">
                    Conhecer Passeios
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Destaque de Receptivo */}
            <div className="mt-8 md:mt-0 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white self-center">
              <h3 className="text-xl font-bold mb-4 text-green-400">RECEPTIVO EM:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-lg font-semibold">FOZ DO IGUAÇU</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-lg font-semibold">CIUDAD DEL ESTE</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-lg font-semibold">PUERTO IGUAZÚ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Atrativos Title */}
      <section className="bg-blue-950 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center">Atrativos</h2>
        </div>
      </section>

      {/* Atrativos Description - Versão Aprimorada */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-all">
                <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">3 Países</h3>
                <p className="text-gray-700">
                  Explore Brasil, Argentina e Paraguai em uma única viagem com nosso transporte exclusivo.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-all">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">Atendimento VIP</h3>
                <p className="text-gray-700">
                  Suporte personalizado 24h via WhatsApp para garantir a melhor experiência durante sua estadia.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-all">
                <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">+20 Atrativos</h3>
                <p className="text-gray-700">
                  Mais de 20 opções de passeios cuidadosamente selecionados para todos os gostos e idades.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-950 to-blue-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Planeje as férias dos seus sonhos!</h3>
              <p className="text-lg text-white/90 mb-6">
                Na Naturis Turismo, pensamos em cada detalhe para proporcionar uma experiência inesquecível. Nossos
                roteiros são planejados para maximizar seu tempo e garantir que você conheça o melhor da Tríplice
                Fronteira com conforto, segurança e exclusividade.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-green-400 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white">Transporte Privativo</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-green-400 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white">Guias Especializados</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-green-400 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white">Roteiros Personalizados</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-green-400 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white">Experiências Exclusivas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Atrativos - Primeira Linha */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cataratas BR */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/foz-do-iguacu.jpg" alt="Cataratas do Iguaçu (BR)" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Cataratas do Iguaçu</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(238 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Uma das 7 maravilhas naturais do mundo, as Cataratas do Iguaçu são um espetáculo da natureza com mais
                  de 275 quedas d'água.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o passeio para as Cataratas do Iguaçu (lado brasileiro).",
                      )}
                    >
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Parque das Aves */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/parquedasaves.jpg" alt="Parque das Aves" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Parque das Aves</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(195 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Uma imersão na fauna da Mata Atlântica com mais de 1.400 aves de 150 espécies diferentes em um
                  ambiente natural.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Parque das Aves.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Marco das Três Fronteiras */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/3fronteiras.jpg" alt="Marco das Três Fronteiras" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Marco das Três Fronteiras</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(142 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Ponto turístico onde é possível visualizar o encontro dos rios Paraná e Iguaçu e a fronteira entre
                  Brasil, Argentina e Paraguai.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Marco das Três Fronteiras.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda Linha de Atrativos */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Compras no Paraguai */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/comprasparaguai.jpg" alt="Compras no Paraguai" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Paraguai</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Compras no Paraguai</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(182 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Ciudad del Este é o paraíso das compras! Com preços baixos e uma enorme variedade de produtos
                  importados.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o passeio de Compras no Paraguai.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Cataratas Argentina */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/IguazuCataratas2.jpg" alt="Cataratas do Iguaçu (ARG)" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Argentina</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Cataratas do Iguazú</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(205 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  O lado argentino das Cataratas oferece uma experiência única com passarelas que permitem chegar bem
                  próximo das quedas.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o passeio para as Cataratas do Iguaçu (lado argentino).",
                      )}
                    >
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Macuco Safari */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/MacucoSafari.jpg" alt="Macuco Safari" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Macuco Safari</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(178 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Aventura emocionante de barco que leva você bem próximo às quedas das Cataratas do Iguaçu. Uma
                  experiência única e refrescante!
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Macuco Safari.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terceira Linha de Atrativos */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hidrelétrica Itaipu */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/hidreletricaitaipu.jpg" alt="Hidrelétrica Itaipu" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Hidrelétrica Itaipu</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(165 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Conheça a maior geradora de energia limpa e renovável do planeta! Uma obra de engenharia
                  impressionante na fronteira entre Brasil e Paraguai.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre a visita à Hidrelétrica de Itaipu.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Roda Gigante Yup Star Foz */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/RodaGiganteYupStar.jpg" alt="Roda Gigante Yup Star Foz" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Roda Gigante Yup Star</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(152 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Uma vista panorâmica incrível de toda a cidade de Foz do Iguaçu. A maior roda gigante da América
                  Latina com 88 metros de altura.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre a Roda Gigante - Yup Star Foz.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Wonder Park Foz */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/WonderParkFoz.jpg" alt="Wonder Park Foz" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Wonder Park Foz</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(138 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Parque de diversões com atrações para toda a família. Montanha-russa, carrossel, brinquedos radicais e
                  muito mais!
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Wonder Park Foz.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quarta Linha de Atrativos */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dreams Park Show */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/DreamsParkShow.jpg" alt="Dreams Park Show" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Dreams Park Show</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(172 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Show automotivo com carros de alto desempenho, motos e efeitos especiais em uma apresentação cheia de
                  adrenalina e emoção!
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Dreams Park Show.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Voo Panorâmico */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/VooPanoramico.jpg" alt="Voo Panorâmico" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Voo Panorâmico</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(145 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Uma experiência única e inesquecível para ver as Cataratas do alto. Vistas deslumbrantes que ficarão
                  para sempre na memória.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Voo Panorâmico.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Templo Budista */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/TemploBudista.png" alt="Templo Budista" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Templo Budista</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(132 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Templo com arquitetura oriental única e jardins de meditação. Um lugar de paz e tranquilidade em meio
                  à agitação turística.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o passeio ao Templo Budista.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quinta Linha de Atrativos */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dream Ice Bar */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/dreamice.jpg" alt="Dream Ice Bar" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Dream Ice Bar</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(128 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Bar temático com temperatura de -10°C onde tudo é feito de gelo: copos, mesas, cadeiras e esculturas.
                  Uma experiência refrescante!
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Dream Ice Bar.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mesquita Omar */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/mesquitaomar.jpeg" alt="Mesquita Omar" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Mesquita Omar</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(115 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Uma das maiores mesquitas do Brasil, com arquitetura árabe impressionante. Um importante centro
                  cultural e religioso da região.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre a visita à Mesquita Omar.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Kattamaram Jantar por do sol */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/Kattamaramjantarpordosol.jpg" alt="Kattamaram Jantar por do sol" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Kattamaram Jantar por do sol</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(135 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Passeio romântico de barco com jantar enquanto você aprecia o pôr do sol no Rio Paraná. Uma
                  experiência gastronômica e visual inesquecível.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Kattamaram Jantar por do sol.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sexta Linha de Atrativos */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* City Tour Foz do Iguaçu */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/CityTourFozdoIguaçu.jpg" alt="City Tour Foz do Iguaçu" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Brasil</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">City Tour Foz do Iguaçu</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(125 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Conheça os principais pontos turísticos da cidade de Foz do Iguaçu em um passeio completo com guia
                  especializado.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o City Tour em Foz do Iguaçu.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* City Tour no Paraguai */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/citytour_PY.jpg" alt="City Tour no Paraguai" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Paraguai</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">City Tour no Paraguai</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(118 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Explore Ciudad del Este além das compras. Conheça a cultura, gastronomia e pontos turísticos do
                  Paraguai com guia especializado.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o City Tour no Paraguai.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bay Night Argentina */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/passeios/BayNightArgentina.jpg" alt="Bay Night Argentina" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Argentina</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Bay Night Argentina</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">(130 avaliações)</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Conheça a vida noturna de Puerto Iguazú. Bares, restaurantes, cassinos e a cultura argentina em um
                  passeio inesquecível.
                </p>
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Bay Night Argentina.")}>
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Versão Responsiva */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para viver uma experiência inesquecível na Tríplice Fronteira?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Entre em contato conosco agora mesmo e planeje sua viagem com quem conhece os melhores passeios da região.
              Garantimos o melhor preço e atendimento personalizado!
            </p>
            <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white mb-8 max-w-md mx-auto">
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-lg font-bold">(45) 9912-81353</span>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full max-w-md mx-auto py-6 text-lg bg-white hover:bg-white/90 text-blue-950 flex items-center justify-center gap-2"
            >
              <Link
                href={whatsappLink(
                  "Olá! Gostaria de solicitar um orçamento personalizado para minha viagem a Foz do Iguaçu.",
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#0a2240"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9 14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z"></path>
                </svg>
                Solicitar Orçamento via WhatsApp
              </Link>
            </Button>
            <p className="text-sm text-white/80 mt-4">Resposta rápida e atendimento personalizado!</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href={whatsappLink("Olá! Gostaria de mais informações sobre os passeios da Naturis Turismo.")}
          className="flex items-center justify-center w-16 h-16 bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-all transform hover:scale-110"
          aria-label="Contato via WhatsApp"
        >
          {/* Logo do WhatsApp */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
