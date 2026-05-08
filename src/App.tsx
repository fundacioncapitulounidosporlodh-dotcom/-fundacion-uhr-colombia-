import { useState, useEffect } from 'react'
import './App.css'
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Heart, 
  Scale, 
  Globe,
  ExternalLink,
  Download,
  GraduationCap,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [formEnviado, setFormEnviado] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    documento: '',
    tipoDocumento: 'CC',
    email: '',
    telefono: '',
    ciudad: '',
    departamento: '',
    ocupacion: '',
    motivo: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchQuery.toLowerCase().trim()
    if (!query) return
    
    const sections = [
      { id: 'nosotros', keywords: ['nosotros', 'sobre', 'mision', 'vision', 'quienes somos', 'historia', 'fundacion', 'info', 'informacion'] },
      { id: 'consejo-paz', keywords: ['consejo', 'paz', 'reconciliacion', 'convivencia', 'cali', 'territorial', 'escudo'] },
      { id: 'alianzas', keywords: ['alianzas', 'aliados', 'organizaciones', 'ong', 'saccol', 'cepdipo', 'mevico', 'sintrajuspaz', 'arbol fuente', 'hawks', 'halcones', 'veeduria', 'camino felicidad', 'mundo libre drogas', 'memoria viva', 'sintrajuspaz', 'ong', 'aliados', 'amigos'] },
      { id: 'videos', keywords: ['videos', 'derechos humanos', 'derecho', 'youtube', 'ver', 'documental', 'nacemos libres', 'discriminar', 'tortura', 'esclavitud'] },
      { id: 'descargas', keywords: ['descargas', 'manual', 'materiales', 'pdf', 'descargar', 'bajar', 'archivos', 'cartilla', 'niño', 'participacion ciudadana', 'embargos', 'sentencia'] },
      { id: 'afiches', keywords: ['afiches', 'posters', 'derechos humanos', 'afiche', 'poster', 'imagenes', 'fotos', 'descargar afiches'] },
      { id: 'formatos', keywords: ['formatos', 'tutela', 'peticion', 'formularios', 'veeduria', 'afiliacion', 'solicitud', 'capacitacion', 'reporte', 'violacion', 'autorizacion', 'alianza', 'compromiso', 'observacion', 'modelo'] },
      { id: 'afiliacion', keywords: ['afiliacion', 'afiliarse', 'inscribir', 'unirme', 'registro', 'ser miembro', 'formulario afiliacion', 'hacer parte'] },
      { id: 'capacitate', keywords: ['capacitate', 'cursos', 'curso', 'educacion', 'estudiar', 'aprender', 'capacitacion', 'formacion', 'camino felicidad', 'drogas', 'ops', 'oms', 'defensoria', 'campus virtual'] },
      { id: 'recursos', keywords: ['recursos', 'humanrights', 'sitio oficial', 'youtube', 'materiales'] },
      { id: 'contacto', keywords: ['contacto', 'telefono', 'correo', 'whatsapp', 'email', 'llamar', 'escribir', 'mensaje', 'instagram', 'tiktok', 'redes', 'social', 'ubicacion', 'direccion'] }
    ]
    
    for (const section of sections) {
      if (section.keywords.some(kw => query.includes(kw))) {
        scrollToSection(section.id)
        setSearchQuery('')
        return
      }
    }
    
    scrollToSection('nosotros')
    setSearchQuery('')
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Nueva Afiliacion - ${formData.nombre}`
    const body = `Nombre: ${formData.nombre}%0D%0ATipo de Documento: ${formData.tipoDocumento}%0D%0ADocumento: ${formData.documento}%0D%0AEmail: ${formData.email}%0D%0ATelefono: ${formData.telefono}%0D%0ACiudad: ${formData.ciudad}%0D%0ADepartamento: ${formData.departamento}%0D%0AOcupacion: ${formData.ocupacion}%0D%0AMotivo: ${formData.motivo}`
    window.location.href = `mailto:fundacioncapitulounidosporlodh@gmail.com?subject=${subject}&body=${body}`
    setFormEnviado(true)
    setFormData({
      nombre: '', documento: '', tipoDocumento: 'CC', email: '',
      telefono: '', ciudad: '', departamento: '', ocupacion: '', motivo: ''
    })
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Marca de agua fondo - Logo Fundacion Capitulo UHR Colombia */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
        <img 
          src="/logo-fundacion-capitulo.jpg" 
          alt="" 
          className="w-[500px] h-[500px] object-contain"
        />
      </div>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo-uhr.png" 
                alt="United for Human Rights Logo" 
                className="w-14 h-14 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className={`font-bold text-lg leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Unidos por los<br />Derechos Humanos
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Inicio', id: 'inicio' },
                { name: 'Nosotros', id: 'nosotros' },
                { name: 'Consejo de Paz', id: 'consejo-paz' },
                { name: 'Alianzas', id: 'alianzas' },
                { name: 'Videos', id: 'videos' },
                { name: 'Descargas', id: 'descargas' },
                { name: 'Formatos', id: 'formatos' },
                { name: 'Afiches', id: 'afiches' },
                { name: 'Afiliación', id: 'afiliacion' },
                { name: 'Capacítate', id: 'capacitate' },
                { name: 'Recursos', id: 'recursos' },
                { name: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {[
                { name: 'Inicio', id: 'inicio' },
                { name: 'Nosotros', id: 'nosotros' },
                { name: 'Consejo de Paz', id: 'consejo-paz' },
                { name: 'Alianzas', id: 'alianzas' },
                { name: 'Videos', id: 'videos' },
                { name: 'Descargas', id: 'descargas' },
                { name: 'Formatos', id: 'formatos' },
                { name: 'Afiches', id: 'afiches' },
                { name: 'Afiliación', id: 'afiliacion' },
                { name: 'Capacítate', id: 'capacitate' },
                { name: 'Recursos', id: 'recursos' },
                { name: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/hero-image.jpg" 
            alt="Derechos Humanos Colombia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/30 border-2 border-yellow-400 rounded-full mb-6">
              <img src="/logo-uhr.png" alt="" className="w-6 h-6 mr-2" />
              <span className="text-yellow-300 text-sm font-medium">CAPITULO AUTORIZADO EN COLOMBIA</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unidos por los<br />
              <span className="text-yellow-400">Derechos Humanos</span><br />
              Capítulo Colombia
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Educando y empoderando a las comunidades colombianas sobre sus derechos fundamentales. 
              Parte de la organización internacional con sede en Estados Unidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('recursos')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold px-8 py-6 text-lg shadow-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explorar Recursos
              </Button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contáctanos
              </Button>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar secciones, alianzas, formatos..."
                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-base"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  Buscar
                </button>
              </div>
            </form>
            </div>

            {/* Logo Fundacion Capitulo UHR Colombia */}
            <div className="hidden lg:flex justify-center">
              <img 
                src="/logo-fundacion-capitulo.jpg" 
                alt="Fundacion Capitulo Unidos por los Derechos Humanos Colombia" 
                className="w-80 h-80 object-contain rounded-full shadow-2xl border-4 border-yellow-400/50"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6">
                <img src="/logo-uhr.png" alt="" className="w-5 h-5 mr-2" />
                <span className="text-yellow-700 text-sm font-medium">Sobre Nosotros</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Capítulo Colombia de<br />
                <span className="text-yellow-600">Unidos por los Derechos Humanos</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                La Fundación capítulo Unidos por los Derechos Humanos Colombia, y su movimiento 
                "Unidos haremos de Colombia y el mundo un mejor lugar para vivir", se consolidan 
                como un eje de articulación ciudadana para la protección de la dignidad humana.
              </p>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A través de una red de apoyo estratégica, que integra organizaciones aliadas y 
                mecanismos de veeduría en diversos ámbitos, garantizamos una presencia efectiva 
                en la defensa y educación de los Derechos Humanos.
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nuestra labor trasciende la teoría: somos una plataforma de incidencia real que, 
                mediante la cooperación técnica y el empoderamiento social, trabaja para que las 
                garantías fundamentales sean el pilar de la convivencia en nuestro territorio y 
                un referente de transformación global.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Derechos Fundamentales</h4>
                    <p className="text-gray-600 text-sm">Educación sobre derechos universales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Materiales Educativos</h4>
                    <p className="text-gray-600 text-sm">Recursos oficiales de Human Rights</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/educacion-image.jpg" 
                alt="Educación en Derechos Humanos" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-yellow-100">Capítulo Autorizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consejo Territorial de Paz Section */}
      <section id="consejo-paz" className="py-16 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                <Scale className="w-4 h-4 text-white mr-2" />
                <span className="text-white text-sm font-medium">Membresía Oficial</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Consejo Territorial de Paz, Reconciliación y Convivencia
              </h2>
              <p className="text-xl text-sky-100 mb-4">
                Santiago de Cali
              </p>
              <p className="text-sky-50 text-lg mb-4 leading-relaxed">
                Hacemos parte del Consejo Territorial de Paz, Reconciliación y Convivencia de Santiago de Cali 
                <span className="font-bold text-white"> en representación de la Fundación Árbol Fuente de Vida</span>, 
                trabajando conjuntamente por la construcción de paz, la reconciliación y la convivencia ciudadana en nuestra ciudad.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                  <Heart className="w-4 h-4 text-white mr-2" />
                  <span className="text-white text-sm">Construcción de Paz</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                  <Users className="w-4 h-4 text-white mr-2" />
                  <span className="text-white text-sm">Reconciliación</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                  <Scale className="w-4 h-4 text-white mr-2" />
                  <span className="text-white text-sm">Convivencia</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-4 shadow-2xl flex items-center justify-center">
                  <img 
                    src="/escudo-consejo-paz-cali.jpg" 
                    alt="Escudo Consejo Territorial de Paz, Reconciliación y Convivencia de Santiago de Cali" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                  <span className="text-sky-600 font-bold text-sm">Miembro Oficial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Logo Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <img 
                src="/logo-uhr.png" 
                alt="United for Human Rights - Logo Oficial" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unidos por los Derechos Humanos
            </h2>
            <p className="text-xl text-yellow-100 mb-2">
              <span className="font-semibold">Organización Internacional</span> con sede en Estados Unidos
            </p>
            <p className="text-lg text-yellow-50 max-w-3xl mx-auto">
              Capítulo Colombia autorizado oficialmente. Utilizamos los logos, colores y materiales 
              educativos oficiales de la sede principal.
            </p>
            <div className="mt-6 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur rounded-full">
              <Globe className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">www.humanrights.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Educar y empoderar a las comunidades colombianas sobre sus derechos humanos 
                  fundamentales, utilizando los recursos oficiales de la organización internacional 
                  Unidos por los Derechos Humanos, para construir una sociedad más justa, 
                  equitativa y consciente de sus libertades.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 leading-relaxed">
                  Ser el referente principal en educación de derechos humanos en Colombia, 
                  alcanzando todas las regiones del país con materiales educativos de calidad, 
                  formando una ciudadanía informada que defienda activamente los derechos 
                  humanos para todos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alianzas Section */}
      <section id="alianzas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Users className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Nuestras Alianzas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Organizaciones Aliadas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trabajamos junto a diversas organizaciones para promover y defender los derechos humanos en Colombia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ONG ARBOL FUENTE DE VIDA */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-arbol-fuente-vida.png" 
                    alt="ONG ARBOL FUENTE DE VIDA" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ONG ARBOL FUENTE DE VIDA</h3>
                <p className="text-gray-600 text-sm mb-4">Fortalecer el tejido social generando confianza y bienestar de todos los sectores de la sociedad, ofreciendo servicios con altos estándares de calidad para el desarrollo social y económico comunitario.</p>
                <a 
                  href="https://ongfuentevidaddhhihrc.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  Sitio Web
                </a>
              </CardContent>
            </Card>

            {/* NGO CAPEHALCONES / Fundación Hawks */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-hawks.jpg" 
                    alt="NGO CAPEHALCONES" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">NGO CAPEHALCONES</h3>
                <p className="text-gray-600 text-sm mb-4">Organización no gubernamental dedicada a la protección y promoción de los derechos humanos, trabajando por la justicia social y el bienestar de las comunidades vulnerables.</p>
                <a 
                  href="https://www.facebook.com/share/1Cic3HMD9L/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </CardContent>
            </Card>

            {/* Veeduría Ciudadana de la Nación Cali */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-veeduria-nacion.jpg" 
                    alt="Veeduría Ciudadana de la Nación Cali" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Veeduría Ciudadana de la Nación Cali</h3>
                <p className="text-gray-600 text-sm mb-4">Veeduría ciudadana facultada por la Ley 850 de 2003 para el control social, vigilancia y seguimiento de la gestión pública, promoviendo la transparencia y el buen uso de los recursos públicos.</p>
                <a 
                  href="https://www.facebook.com/share/18b3HgPjuw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
              </CardContent>
            </Card>

            {/* SACCOL */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-saccol.png" 
                    alt="SACCOL" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SACCOL</h3>
                <p className="text-gray-600 text-sm mb-4">Sindicato de Acción Comunal de Colombia - Organización que promueve el fortalecimiento de las organizaciones comunales y la participación ciudadana en la construcción de tejido social.</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.instagram.com/saccolguacari?igsh=NGhlajN4d3Ixd3dh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/share/17J7DQCdcQ/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Fundación El Camino de la Felicidad */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-camino-felicidad.jpg" 
                    alt="Fundación El Camino de la Felicidad" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fundación El Camino de la Felicidad</h3>
                <p className="text-gray-600 text-sm mb-4">Revertir la decadencia moral de la sociedad al restaurar la confianza y honestidad a través de la distribución amplia del libro "El Camino a la Felicidad", una guía basada en el sentido común para vivir mejor.</p>
                <a 
                  href="https://www.elcaminoalafelicidad.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  Sitio Web
                </a>
              </CardContent>
            </Card>

            {/* Fundación por un Mundo Libre de Drogas */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-drug-free-world.jpg" 
                    alt="Fundación por un Mundo Libre de Drogas" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fundación por un Mundo Libre de Drogas</h3>
                <p className="text-gray-600 text-sm mb-4">Proporcionar información basada en hechos acerca de las drogas para que las personas puedan tomar decisiones informadas y vivir una vida libre de drogas, mediante educación y prevención efectiva.</p>
                <div className="flex justify-center gap-2 flex-wrap">
                  <a 
                    href="https://www.vidasindrogas.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    Sitio Web
                  </a>
                  <a 
                    href="https://facebook.com/DrugFreeWorldInt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-blue-800 text-white text-sm rounded-full hover:bg-blue-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CEPDIPO */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-cepdipo.jpg" 
                    alt="CEPDIPO" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">CEPDIPO</h3>
                <p className="text-gray-600 text-sm mb-4">Centro de Pensamiento y Diálogo Político - Promover el avance en estudios e investigaciones para contribuir a la construcción de una sociedad fundamentada en valores de democracia, justicia social e igualdad.</p>
                <a 
                  href="https://www.cepdipo-co.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-700 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  Sitio Web
                </a>
              </CardContent>
            </Card>

            {/* MEVICO - Memoria Viva Colombia */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-memoria-viva-colombia.jpg" 
                    alt="MEVICO - Memoria Viva Colombia" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">MEVICO</h3>
                <p className="text-gray-600 text-sm mb-4">Memoria Viva Colombia - Visibilizar las víctimas y realizar ejercicios de memoria como acción para la no repetición de hechos que marcaron a la población, preservando la memoria histórica del país.</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.facebook.com/share/1ARHffmyrh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a 
                    href="https://www.instagram.com/memoriavivacolombia?igsh=MTdlZ3RzMXJ3b2V5bQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* SINTRAJUSPAZ */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-sintrajuspaz.jpg" 
                    alt="SINTRAJUSPAZ" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SINTRAJUSPAZ</h3>
                <p className="text-gray-600 text-sm mb-4">Sindicato de Trabajadores de la Justicia y la Paz - Promover y defender la paz como derecho fundamental, así como los derechos humanos y laborales de todas las trabajadoras y trabajadores.</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://linktr.ee/Sintrajuspaaz?utm_source=linktree_profile_share&ltsid=dade4ee8-faea-4199-9e85-7e2352889fab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Linktree
                  </a>
                  <a 
                    href="https://www.instagram.com/sintrajuspaz?igsh=MXZ4am5weWhuaHl3Yw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4">
              <Video className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 text-sm font-medium">Videos Educativos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Videos sobre Derechos Humanos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Contenido audiovisual oficial de Unidos por los Derechos Humanos en español
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Los 30 Derechos Humanos',
                description: 'Video completo con los 30 derechos humanos en español latino',
                videoId: 'Lp6wEaivQVY'
              },
              {
                title: 'Derecho #1: Nacemos Libres e Iguales',
                description: 'Todos los seres humanos nacen libres e iguales en dignidad y derechos',
                videoId: 'XzhRRe3KPug'
              },
              {
                title: 'Derecho #2: No Discriminar',
                description: 'Todos tienen los mismos derechos sin distinción de ningún tipo',
                videoId: 'n0WfKHaNfA0'
              },
              {
                title: 'Derecho #3: Derecho a la Vida',
                description: 'Todo individuo tiene derecho a la vida, la libertad y la seguridad',
                videoId: 'fRpLhYBWubM'
              },
              {
                title: 'Derecho #4: Ninguna Esclavitud',
                description: 'Nadie estará sometido a esclavitud ni a servidumbre',
                videoId: '4-a4sEZ1fK0'
              },
              {
                title: 'Derecho #5: Ninguna Tortura',
                description: 'Nadie será sometido a torturas ni a penas o tratos crueles',
                videoId: '_8YfmW6Jv4U'
              }
            ].map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md">
                <div className="aspect-video bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Descargas Section */}
      <section id="descargas" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <Download className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="text-indigo-700 text-sm font-medium">Materiales Descargables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Descargas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Materiales educativos oficiales de Unidos por los Derechos Humanos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Manual de Derechos Humanos',
                description: 'Guía completa sobre los 30 derechos humanos en español',
                type: 'PDF',
                size: '3.4 MB',
                color: 'bg-red-500',
                url: '/manual-derechos-humanos.pdf'
              },
              {
                title: 'Cartilla de Derechos del Niño',
                description: 'Material educativo sobre derechos de niños, niñas y adolescentes',
                type: 'PDF',
                size: '1.8 MB',
                color: 'bg-blue-500',
                url: '/cartilla-derechos-nino.pdf'
              },
              {
                title: 'Manual de Participación Ciudadana',
                description: 'Guía completa para la participación ciudadana y veeduría',
                type: 'PDF',
                size: '13.1 MB',
                color: 'bg-teal-500',
                url: '/manual-participacion-ciudadana.pdf'
              },
              {
                title: 'Guía Defensa Embargos Ilegales',
                description: 'Guía práctica para la defensa contra embargos ilegales',
                type: 'PDF',
                size: '73 KB',
                color: 'bg-amber-600',
                url: '/guia-defensa-embargos-ilegales.pdf'
              },
              {
                title: 'Sentencia 131 Marzo 2026',
                description: 'Sentencia de la Corte Constitucional sobre derechos fundamentales',
                type: 'PDF',
                size: '3.4 MB',
                color: 'bg-indigo-600',
                url: '/sentencia-131-marzo-2026.pdf'
              },
              {
                title: 'Manual de Veedurías',
                description: 'Guía sobre el ejercicio de veeduría ciudadana, control social y derechos humanos',
                type: 'PDF',
                size: '13.7 MB',
                color: 'bg-purple-600',
                url: '/manual-veedurias.pdf'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{item.type} • {item.size}</span>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                            <Download className="w-4 h-4 mr-1" />
                            Descargar
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

            {/* Afiches Section */}
      <section id="afiches" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <FileText className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-700 text-sm font-medium">Afiches Educativos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Afiches de Derechos Humanos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Articulos 1 al 17 de la Declaracion Universal de Derechos Humanos
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              { num: 1, title: 'Derechos Humanos - Art. 1', file: 'afiche-01.jpg', subtitle: 'Art. 1' },
              { num: 2, title: 'Derechos Humanos - Art. 2', file: 'afiche-02.jpg', subtitle: 'Art. 2' },
              { num: 3, title: 'Derechos Humanos - Art. 3', file: 'afiche-03.jpg', subtitle: 'Art. 3' },
              { num: 4, title: 'Derechos Humanos - Art. 4', file: 'afiche-04.jpg', subtitle: 'Art. 4' },
              { num: 5, title: 'Derechos Humanos - Art. 5', file: 'afiche-05.jpg', subtitle: 'Art. 5' },
              { num: 6, title: 'Derechos Humanos - Art. 6', file: 'afiche-06.jpg', subtitle: 'Art. 6' },
              { num: 7, title: 'Derechos Humanos - Art. 7', file: 'afiche-07.jpg', subtitle: 'Art. 7' },
              { num: 8, title: 'Derechos Humanos - Art. 8', file: 'afiche-08.jpg', subtitle: 'Art. 8' },
              { num: 9, title: 'Derechos Humanos - Art. 9', file: 'afiche-09.jpg', subtitle: 'Art. 9' },
              { num: 10, title: 'Derechos Humanos - Art. 10', file: 'afiche-10.jpg', subtitle: 'Art. 10' },
              { num: 11, title: 'Derechos Humanos - Art. 11 #1', file: 'afiche-11.jpg', subtitle: 'Art. 11 #1' },
              { num: 11, title: 'Derechos Humanos - Art. 11 #2', file: 'afiche-11-2.jpg', subtitle: 'Art. 11 #2' },
              { num: 12, title: 'Derechos Humanos - Art. 12', file: 'afiche-12.jpg', subtitle: 'Art. 12' },
              { num: 13, title: 'Derechos Humanos - Art. 13 #1', file: 'afiche-13-1.jpg', subtitle: 'Art. 13 #1' },
              { num: 13, title: 'Derechos Humanos - Art. 13 #2', file: 'afiche-13-2.jpg', subtitle: 'Art. 13 #2' },
              { num: 14, title: 'Derechos Humanos - Art. 14 #1', file: 'afiche-14-1.jpg', subtitle: 'Art. 14 #1' },
              { num: 14, title: 'Derechos Humanos - Art. 14 #2', file: 'afiche-14-2.jpg', subtitle: 'Art. 14 #2' },
              { num: 15, title: 'Derechos Humanos - Art. 15 #1', file: 'afiche-15-1.jpg', subtitle: 'Art. 15 #1' },
              { num: 15, title: 'Derechos Humanos - Art. 15 #2', file: 'afiche-15-2.jpg', subtitle: 'Art. 15 #2' },
              { num: 16, title: 'Derechos Humanos - Art. 16 #1', file: 'afiche-16-1.jpg', subtitle: 'Art. 16 #1' },
              { num: 16, title: 'Derechos Humanos - Art. 16 #2', file: 'afiche-16-2.jpg', subtitle: 'Art. 16 #2' },
              { num: 16, title: 'Derechos Humanos - Art. 16 #3', file: 'afiche-16-3.jpg', subtitle: 'Art. 16 #3' },
              { num: 17, title: 'Derechos Humanos - Art. 17 #1', file: 'afiche-17-1.png', subtitle: 'Art. 17 #1' },
              { num: 17, title: 'Derechos Humanos - Art. 17 #2', file: 'afiche-17-2.png', subtitle: 'Art. 17 #2' }
            ].map((afiche, index) => (
              <Card key={`${afiche.subtitle}-${index}`} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md group">
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img 
                    src={`/afiches/${afiche.file}`}
                    alt={`${afiche.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-purple-600 font-semibold mb-1">{afiche.subtitle}</p>
                  <h3 className="font-bold text-gray-900 text-sm mb-3 truncate">{afiche.title}</h3>
                  <a 
                    href={`/afiches/${afiche.file}`}
                    download={afiche.file}
                    className="block w-full"
                  >
                    <Button size="sm" variant="outline" className="w-full text-purple-600 border-purple-600 hover:bg-purple-50 text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      Descargar
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>{/* Formulario de Afiliacion */}
      <section id="afiliacion" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <Users className="w-4 h-4 text-yellow-600 mr-2" />
              <span className="text-yellow-700 text-sm font-medium">Unete a Nosotros</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Formulario de Afiliacion
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Completa tus datos para ser parte de Unidos por los Derechos Humanos - Capitulo Colombia
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              {formEnviado ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por tu interes!</h3>
                  <p className="text-gray-600 mb-6">Se ha abierto tu correo con los datos. Envia el mensaje para completar tu afiliacion.</p>
                  <Button onClick={() => setFormEnviado(false)} variant="outline" className="text-blue-600 border-blue-600">
                    Enviar otra afiliacion
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombres y Apellidos *</label>
                      <input type="text" name="nombre" value={formData.nombre} onChange={handleFormChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electronico *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleFormChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tu@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Documento *</label>
                      <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="CC">Cedula de Ciudadania</option>
                        <option value="CE">Cedula de Extranjeria</option>
                        <option value="PA">Pasaporte</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="PEP">PEP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Numero de Documento *</label>
                      <input type="text" name="documento" value={formData.documento} onChange={handleFormChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1234567890" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefono / WhatsApp *</label>
                      <input type="tel" name="telefono" value={formData.telefono} onChange={handleFormChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+57 311 323 8276" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                      <input type="text" name="ciudad" value={formData.ciudad} onChange={handleFormChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Cali" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departamento *</label>
                      <input type="text" name="departamento" value={formData.departamento} onChange={handleFormChange} required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Valle del Cauca" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ocupacion / Profesion</label>
                      <input type="text" name="ocupacion" value={formData.ocupacion} onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Estudiante, Profesor, etc." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">¿Por que deseas afiliarte? *</label>
                    <textarea name="motivo" value={formData.motivo} onChange={handleFormChange} required rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Cuéntanos tu motivacion para unirte..."></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-bold">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Solicitud de Afiliacion
                  </Button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    Al enviar, se abrira tu correo con los datos. El correo se enviara a: fundacioncapitulounidosporlodh@gmail.com
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formatos Section */}
      <section id="formatos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
              <FileText className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-700 text-sm font-medium">Formatos y Documentos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Formatos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Formularios y documentos oficiales para tramites y solicitudes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[ 
              {
                title: 'Solicitud de Capacitación',
                description: 'Formulario para solicitar talleres y capacitaciones',
                format: 'PDF',
                url: '/formatos/solicitud-capacitacion.pdf'
              },
              {
                title: 'Reporte de Violación de DDHH',
                description: 'Formato para reportar presuntas violaciones de derechos humanos',
                format: 'PDF',
                url: '/reporte-violacion-ddhh.pdf'
              },
              {
                title: 'Autorización de Uso de Imagen',
                description: 'Formulario para autorizar uso de imagen en eventos',
                format: 'PDF',
                url: '/formatos/autorizacion-imagen.pdf'
              },
              {
                title: 'Solicitud de Alianza',
                description: 'Formulario para solicitar alianza estratégica con nuestra fundación',
                format: 'PDF',
                url: '/formatos/solicitud-alianza.pdf'
              },
              {
                title: 'Carta de Compromiso',
                description: 'Formato de compromiso para voluntarios y colaboradores',
                format: 'PDF',
                url: '/formatos/carta-compromiso.pdf'
              },
              {
                title: 'Formato Derecho de Petición',
                description: 'Modelo para ejercer el derecho de petición constitucional',
                format: 'PDF',
                url: '/formato-derecho-peticion.pdf'
              },
              {
                title: 'Formato Observación Procedimiento',
                description: 'Formato para observar procedimientos administrativos',
                format: 'PDF',
                url: '/formato-observacion-procedimiento.pdf'
              },
              {
                title: 'Modelo de Petición',
                description: 'Ejemplo práctico de derecho de petición',
                format: 'PDF',
                url: '/modelo-de-peticion-1.pdf'
              },
              {
                title: 'Modelo de Tutela',
                description: 'Ejemplo práctico de acción de tutela',
                format: 'PDF',
                url: '/modelo-de-tutela-1.pdf'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 flex-shrink-0 ml-4">
                        <Download className="w-4 h-4 mr-1" />
                        {item.format}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capacítate Section */}
      <section id="capacitate" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <GraduationCap className="w-4 h-4 text-yellow-600 mr-2" />
              <span className="text-yellow-700 text-sm font-medium">Capacitación</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Capacítate
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Accede a cursos gratuitos sobre derechos humanos y desarrolla tus habilidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curso Unidos por los Derechos Humanos */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <img 
                  src="/logo-uhr.png" 
                  alt="Unidos por los Derechos Humanos" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Curso de Derechos Humanos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Curso gratuito de Unidos por los Derechos Humanos. Aprende sobre los 30 derechos humanos fundamentales.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                  <a 
                    href="https://www.unidosporlosderechoshumanos.mx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Acceder
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Curso El Camino a la Felicidad */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <img 
                  src="/logo-camino-felicidad.jpg" 
                  alt="El Camino a la Felicidad" 
                  className="w-32 h-32 object-contain rounded-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Curso El Camino a la Felicidad</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Curso basado en el libro de L. Ron Hubbard. Descubre los preceptos para vivir una vida feliz.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                  <a 
                    href="https://www.elcaminoalafelicidad.mx/course/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Acceder
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Curso Mundo Libre de Drogas */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <img 
                  src="/logo-drug-free-world.jpg" 
                  alt="Mundo Libre de Drogas" 
                  className="w-32 h-32 object-contain rounded-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Curso sobre Drogas</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Información veraz sobre los efectos de las drogas. Curso educativo gratuito.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                  <a 
                    href="https://www.vidasindrogas.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Acceder
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Campus Virtual OPS/OMS */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <Globe className="w-20 h-20 mx-auto mb-2" />
                  <p className="text-lg font-bold">OPS/OMS</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Virtual OPS/OMS</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cursos gratuitos de la Organización Panamericana de la Salud sobre derechos humanos y salud.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                  <a 
                    href="https://campus.paho.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Acceder
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Aula Virtual Defensoría del Pueblo */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <Scale className="w-20 h-20 mx-auto mb-2" />
                  <p className="text-lg font-bold">Defensoría del Pueblo</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aula Virtual Defensoría del Pueblo</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Plataforma gratuita de la Defensoría del Pueblo de Colombia para capacitación en derechos humanos.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                  <a 
                    href="https://www.defensoria.gov.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Acceder
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Campus Virtual ESAP */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <GraduationCap className="w-20 h-20 mx-auto mb-2" />
                  <p className="text-lg font-bold">ESAP</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Virtual ESAP</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Escuela Superior de Administración Pública - Cursos gratuitos de formación en derechos humanos y administración pública.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
                  <a 
                    href="https://sirecec4.esap.edu.co/inicio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Acceder
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="recursos" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-sm font-medium">Recursos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Recursos Oficiales
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Accede a los recursos oficiales de Unidos por los Derechos Humanos internacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Sitio Web Oficial',
                description: 'humanrights.com',
                url: 'https://www.humanrights.com',
                icon: Globe
              },
              {
                title: 'YouTube',
                description: 'Videos oficiales',
                url: 'https://www.youtube.com/@HumanRights',
                icon: Video
              },
              {
                title: 'Materiales Educativos',
                description: 'Descargas oficiales',
                url: 'https://www.humanrights.com/resources/',
                icon: Download
              },
              {
                title: 'Cursos en Línea',
                description: 'Capacitación gratuita',
                url: 'https://www.humanrights.com/course/',
                icon: GraduationCap
              }
            ].map((resource, index) => (
              <a 
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-colors h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{resource.title}</h3>
                    <p className="text-blue-200 text-sm">{resource.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Phone className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Contacto</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Escríbenos o visítanos en nuestras oficinas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Correo Electrónico</h3>
                      <p className="text-gray-600">fundacioncapitulounidosporlodh@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Teléfono / WhatsApp</h3>
                      <p className="text-gray-600">+57 311 323 8276</p>
                      <a 
                        href="https://wa.me/573113238276" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 text-sm mt-1 font-medium"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Escribir por WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
                      <p className="text-gray-600">Santiago de Cali, Valle del Cauca, Colombia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
                      <a href="https://www.instagram.com/capitulounidosddhhcol?igsh=M3g2dGI1dnl4eG02" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">@capitulounidosddhhcol</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">TikTok</h3>
                      <a href="https://www.tiktok.com/@capitulounidosddhhcol?_r=1&_t=ZS-95e4hY1beCb" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">@capitulounidosddhhcol</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* QR Codes */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 text-center">
                    <a href="https://www.instagram.com/capitulounidosddhhcol?igsh=M3g2dGI1dnl4eG02" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/qr-instagram.jpg" 
                        alt="QR Instagram" 
                        className="w-24 h-24 mx-auto mb-2 hover:scale-105 transition-transform"
                      />
                    </a>
                    <p className="text-sm text-gray-600">Instagram</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 text-center">
                    <a href="https://www.tiktok.com/@capitulounidosddhhcol?_r=1&_t=ZS-95e4hY1beCb" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="/qr-tiktok.png" 
                        alt="QR TikTok" 
                        className="w-24 h-24 mx-auto mb-2 hover:scale-105 transition-transform"
                      />
                    </a>
                    <p className="text-sm text-gray-600">TikTok</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="¿Sobre qué nos quieres contactar?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo-uhr.png" 
                  alt="United for Human Rights" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg">Unidos por los Derechos Humanos</h3>
                  <p className="text-gray-400 text-sm">Capítulo Colombia</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Capítulo autorizado en Colombia de Unidos por los Derechos Humanos, 
                organización internacional dedicada a la educación sobre derechos humanos.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-white transition-colors">Nosotros</button></li>
                <li><button onClick={() => scrollToSection('alianzas')} className="hover:text-white transition-colors">Alianzas</button></li>
                <li><button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">Recursos</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="hover:text-white transition-colors">Contacto</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos Oficiales</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.humanrights.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">humanrights.com</a></li>
                <li><a href="https://www.humanrights.com/course/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Curso en línea</a></li>
                <li><a href="https://www.humanrights.com/resources/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Materiales</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Unidos por los Derechos Humanos - Capítulo Colombia. 
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
