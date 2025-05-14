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
          <Image src="/hero-image.jpg" alt="Cataratas do Iguaçu" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-950/40 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 py-6">
          {/* Logo e contatos no topo da hero */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <Image src="/naturis-logo.png" alt="Naturis Turismo" width={180} height={80} className="h-auto" />
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
          <div className="max-w-2xl space-y-6 text-white py-20 md:py-28">
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
        </div>
      </section>

      {/* Atrativos Title */}
      <section className="bg-blue-950 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center">Atrativos</h2>
        </div>
      </section>

      {/* Atrativos Description */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 max-w-4xl mx-auto">
            Pensando no bem-estar dos nossos clientes, agrupamos os atrativos turísticos de Foz do Iguaçu em uma única
            seção.
            <br />
            Planeje as férias dos seus sonhos com a Naturis Turismo!
          </p>
        </div>
      </section>

      {/* Principais Atrativos */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-950">Principais Atrativos</h3>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cataratas BR */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/cataratas-br.jpg" alt="Cataratas do Iguaçu (BR)" fill className="object-cover" />
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
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-blue-950">R$ 95,00</p>
                  </div>
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o passeio para as Cataratas do Iguaçu (lado brasileiro). Valor: R$ 95,00",
                      )}
                    >
                      Reservar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Compras no Paraguai */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
              <div className="relative h-72">
                <Image src="/compras-paraguai.jpg" alt="Compras no Paraguai" fill className="object-cover" />
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
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-blue-950">R$ 45,00</p>
                  </div>
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o passeio de Compras no Paraguai. Valor: R$ 45,00",
                      )}
                    >
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
                <Image src="/cataratas-arg.jpg" alt="Cataratas do Iguaçu (ARG)" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white">Argentina</Badge>
                  <h3 className="text-2xl font-bold text-white mt-2">Cataratas do Iguaçu</h3>
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
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-blue-950">R$ 140,00</p>
                  </div>
                  <Button
                    asChild
                    className="bg-blue-950 hover:bg-blue-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o passeio para as Cataratas do Iguaçu (lado argentino). Valor: R$ 140,00",
                      )}
                    >
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

      {/* Mais Atrativos Grid */}
      <section id="atrativos" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-950">Outros Passeios Imperdíveis</h3>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Dream Motor Show */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/dream-motor-show.jpg" alt="Dream Motor Show" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Dream Motor Show</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Exposição de veículos antigos e modernos em um ambiente temático incrível.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 85,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Dream Motor Show. Valor: R$ 85,00")}>
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Roda Gigante */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/roda-gigante.jpg" alt="Roda Gigante - Yup Star Foz" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Roda Gigante - Yup Star Foz</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Uma vista panorâmica incrível de toda a cidade de Foz do Iguaçu.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 70,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre a Roda Gigante - Yup Star Foz. Valor: R$ 70,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Museu de Cera */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/museu-cera.jpg" alt="Museu de Cera" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Museu de Cera</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Réplicas em tamanho real de personalidades famosas em cenários especiais.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 65,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Museu de Cera. Valor: R$ 65,00")}>
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Voo Panorâmico */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/voo-panoramico.jpg" alt="Voo Panorâmico" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Voo Panorâmico</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Uma experiência única e inesquecível para ver as Cataratas do alto.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 390,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Voo Panorâmico. Valor: R$ 390,00")}>
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dreamland - Vale do Dinossauro */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/vale-dinossauros.jpg" alt="Dreamland - Vale do Dinossauro" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Dreamland - Vale do Dinossauro</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Parque temático com réplicas de dinossauros em tamanho real.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 90,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o Dreamland - Vale do Dinossauro. Valor: R$ 90,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Templo Budista */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/templo-budista.jpg" alt="Templo Budista" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Templo Budista</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Templo com arquitetura oriental única e jardins de meditação.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">Gratuito</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o passeio ao Templo Budista.")}>
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Marco das Três Fronteiras */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/marco-tres-fronteiras.jpg" alt="Marco das Três Fronteiras" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Marco das Três Fronteiras</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Ponto turístico onde é possível visualizar o encontro dos rios Paraná e Iguaçu.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 30,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o Marco das Três Fronteiras. Valor: R$ 30,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Parque das Aves */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <Image src="/parque-aves.jpg" alt="Parque das Aves" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold text-blue-950">Parque das Aves</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  Uma imersão na fauna da Mata Atlântica com mais de 1.400 aves de 150 espécies.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold">R$ 60,00</p>
                  <Button asChild className="text-xs py-1 px-2 h-auto bg-blue-950 hover:bg-green-600">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Parque das Aves. Valor: R$ 60,00")}>
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button asChild className="mx-auto bg-green-600 hover:bg-green-700 flex">
              <Link href={whatsappLink("Olá! Gostaria de informações sobre todos os atrativos disponíveis.")}>
                Ver Todos os Atrativos
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Itaipu Section */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-950">Passeios em Itaipu</h3>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
            <p className="mt-4 text-gray-700">Conheça a maior geradora de energia limpa e renovável do planeta!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Itaipu Visita Panorâmica */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image src="/itaipu-panoramica.jpg" alt="Itaipu - Visita Panorâmica" fill className="object-cover" />
              </div>
              <div className="p-4 w-full md:w-2/3">
                <h3 className="text-xl font-bold text-blue-950 mb-2">Visita Panorâmica</h3>
                <p className="text-gray-700 mb-4">
                  Passeio de 1h30 com vista panorâmica da barragem, área externa e mirante central. Ideal para conhecer
                  a grandiosidade da usina.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-green-600">R$ 40,00</p>
                  </div>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre a Visita Panorâmica em Itaipu. Valor: R$ 40,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Itaipu Visita Especial */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image src="/itaipu-especial.jpg" alt="Itaipu - Visita Especial" fill className="object-cover" />
              </div>
              <div className="p-4 w-full md:w-2/3">
                <h3 className="text-xl font-bold text-blue-950 mb-2">Visita Especial</h3>
                <p className="text-gray-700 mb-4">
                  Experiência completa de 2h30 com acesso às instalações internas da usina, sala de máquinas e áreas
                  restritas. Imperdível!
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-green-600">R$ 120,00</p>
                  </div>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre a Visita Especial em Itaipu. Valor: R$ 120,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Itaipu Iluminação */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image src="/itaipu-iluminacao.jpg" alt="Itaipu - Iluminação" fill className="object-cover" />
              </div>
              <div className="p-4 w-full md:w-2/3">
                <h3 className="text-xl font-bold text-blue-950 mb-2">Iluminação Monumental</h3>
                <p className="text-gray-700 mb-4">
                  Um espetáculo noturno com jogos de luzes que destacam a beleza e imponência da barragem. Um show de
                  cores e luzes imperdível!
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-green-600">R$ 50,00</p>
                  </div>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre a Iluminação Monumental de Itaipu. Valor: R$ 50,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Itaipu Refúgio Biológico */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image src="/itaipu-refugio.jpg" alt="Itaipu - Refúgio Biológico" fill className="object-cover" />
              </div>
              <div className="p-4 w-full md:w-2/3">
                <h3 className="text-xl font-bold text-blue-950 mb-2">Refúgio Biológico</h3>
                <p className="text-gray-700 mb-4">
                  Área de preservação com 2.200 hectares onde você pode observar animais nativos resgatados durante a
                  formação do lago de Itaipu.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">A partir de:</p>
                    <p className="text-xl font-bold text-green-600">R$ 45,00</p>
                  </div>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o Refúgio Biológico de Itaipu. Valor: R$ 45,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dreamland Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-950">Complexo Dreamland</h3>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
            <p className="mt-4 text-gray-700">O maior complexo de entretenimento da tríplice fronteira!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dreamland - Vale dos Dinossauros */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-60">
                <Image
                  src="/vale-dinossauros.jpg"
                  alt="Dreamland - Vale dos Dinossauros"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">Vale dos Dinossauros</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  Réplicas de dinossauros em tamanho real, incluindo o maior T-Rex animatrônico do Brasil. Diversão
                  garantida!
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-green-600">R$ 90,00</p>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o Dreamland - Vale dos Dinossauros. Valor: R$ 90,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dreamland - Museu de Cera */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-60">
                <Image src="/museu-cera.jpg" alt="Dreamland - Museu de Cera" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">Museu de Cera</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  Mais de 90 figuras em cera de personalidades mundiais, retratando celebridades, esportistas e
                  personagens históricos.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-green-600">R$ 65,00</p>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o Dreamland - Museu de Cera. Valor: R$ 65,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dreamland - Maravilhas do Mundo */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-60">
                <Image
                  src="/maravilhas-mundo.jpg"
                  alt="Dreamland - Maravilhas do Mundo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">Maravilhas do Mundo</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  Réplicas perfeitas das principais maravilhas do mundo, como Taj Mahal, Cristo Redentor e Torre Eiffel.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-green-600">R$ 70,00</p>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link
                      href={whatsappLink(
                        "Olá! Gostaria de informações sobre o Dreamland - Maravilhas do Mundo. Valor: R$ 70,00",
                      )}
                    >
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dreamice Bar */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-60">
                <Image src="/dreamice.jpg" alt="Dreamice Bar" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white">Dreamice Bar</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  Bar temático com temperatura de -10°C onde tudo é feito de gelo: copos, mesas, cadeiras e esculturas.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-green-600">R$ 75,00</p>
                  <Button asChild className="bg-blue-950 hover:bg-green-600">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Dreamice Bar. Valor: R$ 75,00")}>
                      Reservar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold">Shows e Entretenimento</h3>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dream Motor Show */}
            <div className="flex flex-col bg-blue-950/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-72">
                <Image src="/dream-motor-show.jpg" alt="Dream Motor Show" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Dream Motor Show</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Show automotivo com carros de alto desempenho, motos e efeitos especiais em uma apresentação cheia de
                  adrenalina e emoção!
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-80">A partir de:</p>
                    <p className="text-2xl font-bold text-green-400">R$ 85,00</p>
                  </div>
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                    <Link href={whatsappLink("Olá! Gostaria de informações sobre o Dream Motor Show. Valor: R$ 85,00")}>
                      Reservar Ingressos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Rafain Jantar Show */}
            <div className="flex flex-col bg-blue-950/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
              <div className="relative h-72">
                <Image src="/rafain-show.jpg" alt="Rafain Jantar Show" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Rafain Jantar Show</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  O maior show folclórico das Américas! Jantar com buffet internacional e apresentações de danças
                  típicas de diversos países da América Latina.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-80">A partir de:</p>
                    <p className="text-2xl font-bold text-green-400">R$ 150,00</p>
                  </div>
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                    <Link
                      href={whatsappLink("Olá! Gostaria de informações sobre o Rafain Jantar Show. Valor: R$ 150,00")}
                    >
                      Reservar Ingressos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para viver uma experiência inesquecível em Foz do Iguaçu?
              </h2>
              <p className="text-lg text-white/90">
                Entre em contato conosco agora mesmo e planeje sua viagem com quem conhece os melhores passeios da
                região. Garantimos o melhor preço e atendimento personalizado!
              </p>
              <div className="flex items-center bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white">
                <Phone className="h-5 w-5 mr-3" />
                <span className="text-lg font-bold">(45) 9912-81353</span>
              </div>
            </div>

            {/* Substituir formulário por botão de WhatsApp */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Solicitar Orçamento</h3>
              <p className="text-gray-600 mb-6">
                Clique no botão abaixo para falar diretamente com nossa equipe pelo WhatsApp e receber um orçamento
                personalizado para sua viagem.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
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
                    fill="white"
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
              <p className="text-sm text-gray-500 mt-4">Resposta rápida e atendimento personalizado!</p>
            </div>
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
