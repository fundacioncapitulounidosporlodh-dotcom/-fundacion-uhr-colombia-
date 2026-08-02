1	import { useState, useEffect } from 'react'
     2	import './App.css'
     3	import { 
     4	  Menu, 
     5	  X, 
     6	  Mail, 
     7	  Phone, 
     8	  MapPin, 
     9	  BookOpen, 
    10	  Video, 
    11	  FileText, 
    12	  Users, 
    13	  Heart, 
    14	  Scale, 
    15	  Globe,
    16	  ExternalLink,
    17	  Download,
    18	  GraduationCap,
    19	  Search
    20	} from 'lucide-react'
    21	import { Button } from '@/components/ui/button'
    22	import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
    23	
    24	function App() {
    25	  const [isMenuOpen, setIsMenuOpen] = useState(false)
    26	  const [scrolled, setScrolled] = useState(false)
    27	  const [searchQuery, setSearchQuery] = useState('')
    28	  const [formEnviado, setFormEnviado] = useState(false)
    29	  const [formData, setFormData] = useState({
    30	    nombre: '',
    31	    documento: '',
    32	    tipoDocumento: 'CC',
    33	    email: '',
    34	    telefono: '',
    35	    ciudad: '',
    36	    departamento: '',
    37	    ocupacion: '',
    38	    motivo: ''
    39	  })
    40	
    41	  useEffect(() => {
    42	    const handleScroll = () => {
    43	      setScrolled(window.scrollY > 50)
    44	    }
    45	    window.addEventListener('scroll', handleScroll)
    46	    return () => window.removeEventListener('scroll', handleScroll)
    47	  }, [])
    48	
    49	  const scrollToSection = (id: string) => {
    50	    const element = document.getElementById(id)
    51	    if (element) {
    52	      element.scrollIntoView({ behavior: 'smooth' })
    53	      setIsMenuOpen(false)
    54	    }
    55	  }
    56	
    57	  const handleSearch = (e: React.FormEvent) => {
    58	    e.preventDefault()
    59	    const query = searchQuery.toLowerCase().trim()
    60	    if (!query) return
    61	    
    62	    const sections = [
    63	      { id: 'nosotros', keywords: ['nosotros', 'sobre', 'mision', 'vision', 'quienes somos', 'historia', 'fundacion', 'info', 'informacion'] },
    64	      { id: 'consejo-paz', keywords: ['consejo', 'paz', 'reconciliacion', 'convivencia', 'cali', 'territorial', 'escudo'] },
    65	      { id: 'alianzas', keywords: ['alianzas', 'aliados', 'organizaciones', 'ong', 'saccol', 'cepdipo', 'mevico', 'sintrajuspaz', 'arbol fuente', 'hawks', 'halcones', 'veeduria', 'camino felicidad', 'mundo libre drogas', 'memoria viva', 'sintrajuspaz', 'ong', 'aliados', 'amigos'] },
    66	      { id: 'videos', keywords: ['videos', 'derechos humanos', 'derecho', 'youtube', 'ver', 'documental', 'nacemos libres', 'discriminar', 'tortura', 'esclavitud'] },
    67	      { id: 'descargas', keywords: ['descargas', 'manual', 'materiales', 'pdf', 'descargar', 'bajar', 'archivos', 'cartilla', 'niño', 'participacion ciudadana', 'embargos', 'sentencia'] },
    68	      { id: 'afiches', keywords: ['afiches', 'posters', 'derechos humanos', 'afiche', 'poster', 'imagenes', 'fotos', 'descargar afiches'] },
    69	      { id: 'formatos', keywords: ['formatos', 'tutela', 'peticion', 'formularios', 'veeduria', 'afiliacion', 'solicitud', 'capacitacion', 'reporte', 'violacion', 'autorizacion', 'alianza', 'compromiso', 'observacion', 'modelo'] },
    70	      { id: 'afiliacion', keywords: ['afiliacion', 'afiliarse', 'inscribir', 'unirme', 'registro', 'ser miembro', 'formulario afiliacion', 'hacer parte'] },
    71	      { id: 'capacitate', keywords: ['capacitate', 'cursos', 'curso', 'educacion', 'estudiar', 'aprender', 'capacitacion', 'formacion', 'camino felicidad', 'drogas', 'ops', 'oms', 'defensoria', 'campus virtual'] },
    72	      { id: 'recursos', keywords: ['recursos', 'humanrights', 'sitio oficial', 'youtube', 'materiales'] },
    73	      { id: 'contacto', keywords: ['contacto', 'telefono', 'correo', 'whatsapp', 'email', 'llamar', 'escribir', 'mensaje', 'instagram', 'tiktok', 'redes', 'social', 'ubicacion', 'direccion'] }
    74	    ]
    75	    
    76	    for (const section of sections) {
    77	      if (section.keywords.some(kw => query.includes(kw))) {
    78	        scrollToSection(section.id)
    79	        setSearchQuery('')
    80	        return
    81	      }
    82	    }
    83	    
    84	    scrollToSection('nosotros')
    85	    setSearchQuery('')
    86	  }
    87	
    88	  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    89	    setFormData({ ...formData, [e.target.name]: e.target.value })
    90	  }
    91	
    92	  const handleFormSubmit = async (e: React.FormEvent) => {
    93	    e.preventDefault()
    94	    const subject = `Nueva Afiliacion - ${formData.nombre}`
    95	    const body = `Nombre: ${formData.nombre}%0D%0ATipo de Documento: ${formData.tipoDocumento}%0D%0ADocumento: ${formData.documento}%0D%0AEmail: ${formData.email}%0D%0ATelefono: ${formData.telefono}%0D%0ACiudad: ${formData.ciudad}%0D%0ADepartamento: ${formData.departamento}%0D%0AOcupacion: ${formData.ocupacion}%0D%0AMotivo: ${formData.motivo}`
    96	    window.location.href = `mailto:fundacioncapitulounidosporlodh@gmail.com?subject=${subject}&body=${body}`
    97	    setFormEnviado(true)
    98	    setFormData({
    99	      nombre: '', documento: '', tipoDocumento: 'CC', email: '',
   100	      telefono: '', ciudad: '', departamento: '', ocupacion: '', motivo: ''
   101	    })
   102	  }
   103	
   104	  return (
   105	    <div className="min-h-screen bg-white relative">
   106	      {/* Marca de agua fondo - Logo Fundacion Capitulo UHR Colombia */}
   107	      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
   108	        <img 
   109	          src="/logo-fundacion-capitulo.jpg" 
   110	          alt="" 
   111	          className="w-[500px] h-[500px] object-contain"
   112	        />
   113	      </div>
   114	      {/* Navbar */}
   115	      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
   116	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   117	          <div className="flex justify-between items-center h-20">
   118	            {/* Logo */}
   119	            <div className="flex items-center space-x-3">
   120	              <img 
   121	                src="/logo-uhr.png" 
   122	                alt="United for Human Rights Logo" 
   123	                className="w-14 h-14 object-contain"
   124	              />
   125	              <div className="hidden sm:block">
   126	                <h1 className={`font-bold text-lg leading-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
   127	                  Unidos por los<br />Derechos Humanos
   128	                </h1>
   129	              </div>
   130	            </div>
   131	
   132	            {/* Desktop Menu */}
   133	            <div className="hidden md:flex items-center space-x-8">
   134	              {[
   135	                { name: 'Inicio', id: 'inicio' },
   136	                { name: 'Nosotros', id: 'nosotros' },
   137	                { name: 'Consejo de Paz', id: 'consejo-paz' },
   138	                { name: 'Alianzas', id: 'alianzas' },
   139	                { name: 'Videos', id: 'videos' },
   140	                { name: 'Noticias', id: 'noticias' },
   141	                { name: 'Descargas', id: 'descargas' },
   142	                { name: 'Formatos', id: 'formatos' },
   143	                { name: 'Afiches', id: 'afiches' },
   144	                { name: 'Donaciones', id: 'donaciones' },
   145	                { name: 'Afiliación', id: 'afiliacion' },
   146	                { name: 'Capacítate', id: 'capacitate' },
   147	                { name: 'Recursos', id: 'recursos' },
   148	                { name: 'Contacto', id: 'contacto' }
   149	              ].map((item) => (
   150	                <button
   151	                  key={item.id}
   152	                  onClick={() => scrollToSection(item.id)}
   153	                  className={`font-medium hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
   154	                >
   155	                  {item.name}
   156	                </button>
   157	              ))}
   158	            </div>
   159	
   160	            {/* Mobile Menu Button */}
   161	            <button
   162	              className="md:hidden p-2"
   163	              onClick={() => setIsMenuOpen(!isMenuOpen)}
   164	            >
   165	              {isMenuOpen ? (
   166	                <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
   167	              ) : (
   168	                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
   169	              )}
   170	            </button>
   171	          </div>
   172	        </div>
   173	
   174	        {/* Mobile Menu */}
   175	        {isMenuOpen && (
   176	          <div className="md:hidden bg-white shadow-lg">
   177	            <div className="px-4 py-4 space-y-3">
   178	              {[
   179	                { name: 'Inicio', id: 'inicio' },
   180	                { name: 'Nosotros', id: 'nosotros' },
   181	                { name: 'Consejo de Paz', id: 'consejo-paz' },
   182	                { name: 'Alianzas', id: 'alianzas' },
   183	                { name: 'Videos', id: 'videos' },
   184	                { name: 'Noticias', id: 'noticias' },
   185	                { name: 'Descargas', id: 'descargas' },
   186	                { name: 'Formatos', id: 'formatos' },
   187	                { name: 'Afiches', id: 'afiches' },
   188	                { name: 'Donaciones', id: 'donaciones' },
   189	                { name: 'Afiliación', id: 'afiliacion' },
   190	                { name: 'Capacítate', id: 'capacitate' },
   191	                { name: 'Recursos', id: 'recursos' },
   192	                { name: 'Contacto', id: 'contacto' }
   193	              ].map((item) => (
   194	                <button
   195	                  key={item.id}
   196	                  onClick={() => scrollToSection(item.id)}
   197	                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
   198	                >
   199	                  {item.name}
   200	                </button>
   201	              ))}
   202	            </div>
   203	          </div>
   204	        )}
   205	      </nav>
   206	
   207	      {/* Hero Section */}
   208	      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
   209	        <div className="absolute inset-0">
   210	          <img 
   211	            src="/hero-image.jpg" 
   212	            alt="Derechos Humanos Colombia" 
   213	            className="w-full h-full object-cover"
   214	          />
   215	          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
   216	        </div>
   217	        
   218	        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
   219	          <div className="grid lg:grid-cols-2 gap-12 items-center">
   220	            <div className="max-w-2xl">
   221	            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/30 border-2 border-yellow-400 rounded-full mb-6">
   222	              <img src="/logo-uhr.png" alt="" className="w-6 h-6 mr-2" />
   223	              <span className="text-yellow-300 text-sm font-medium">CAPITULO AUTORIZADO EN COLOMBIA</span>
   224	            </div>
   225	        
   226	            
   227	            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
   228	              Unidos por los<br />
   229	              <span className="text-yellow-400">Derechos Humanos</span><br />
   230	              Capítulo Colombia
   231	            </h1>
   232	            
   233	            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
   234	              Educando y empoderando a las comunidades colombianas sobre sus derechos fundamentales. 
   235	              Parte de la organización internacional con sede en Estados Unidos.
   236	            </p>
   237	            
   238	            <div className="flex flex-col sm:flex-row gap-4">
   239	              <Button 
   240	                onClick={() => scrollToSection('recursos')}
   241	                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold px-8 py-6 text-lg shadow-lg"
   242	              >
   243	                <BookOpen className="w-5 h-5 mr-2" />
   244	                Explorar Recursos
   245	              </Button>
   246	              <Button 
   247	                onClick={() => scrollToSection('contacto')}
   248	                variant="outline"
   249	                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
   250	              >
   251	                <Phone className="w-5 h-5 mr-2" />
   252	                Contáctanos
   253	              </Button>
   254	            </div>
   255	
   256	            {/* Search Bar */}
   257	            <form onSubmit={handleSearch} className="mt-8 max-w-xl">
   258	              <div className="relative">
   259	                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
   260	                <input
   261	                  type="text"
   262	                  value={searchQuery}
   263	                  onChange={(e) => setSearchQuery(e.target.value)}
   264	                  placeholder="Buscar secciones, alianzas, formatos..."
   265	                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-base"
   266	                />
   267	                <button
   268	                  type="submit"
   269	                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
   270	                >
   271	                  Buscar
   272	                </button>
   273	              </div>
   274	            </form>
   275	            </div>
   276	
   277	            {/* Logo Fundacion Capitulo UHR Colombia */}
   278	            <div className="hidden lg:flex justify-center">
   279	              <img 
   280	                src="/logo-fundacion-capitulo.jpg" 
   281	                alt="Fundacion Capitulo Unidos por los Derechos Humanos Colombia" 
   282	                className="w-80 h-80 object-contain rounded-full shadow-2xl border-4 border-yellow-400/50"
   283	              />
   284	            </div>
   285	          </div>
   286	        </div>
   287	
   288	        {/* Scroll indicator */}
   289	        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
   290	          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
   291	            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
   292	          </div>
   293	        </div>
   294	      </section>
   295	
   296	      {/* About Section */}
   297	      <section id="nosotros" className="py-20 bg-white">
   298	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   299	          <div className="grid lg:grid-cols-2 gap-12 items-center">
   300	            <div>
   301	              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6">
   302	                <img src="/logo-uhr.png" alt="" className="w-5 h-5 mr-2" />
   303	                <span className="text-yellow-700 text-sm font-medium">Sobre Nosotros</span>
   304	              </div>
   305	              
   306	              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
   307	                Capítulo Colombia de<br />
   308	                <span className="text-yellow-600">Unidos por los Derechos Humanos</span>
   309	              </h2>
   310	              
   311	              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
   312	                La Fundación capítulo Unidos por los Derechos Humanos Colombia, y su movimiento 
   313	                "Unidos haremos de Colombia y el mundo un mejor lugar para vivir", se consolidan 
   314	                como un eje de articulación ciudadana para la protección de la dignidad humana.
   315	              </p>
   316	              
   317	              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
   318	                A través de una red de apoyo estratégica, que integra organizaciones aliadas y 
   319	                mecanismos de veeduría en diversos ámbitos, garantizamos una presencia efectiva 
   320	                en la defensa y educación de los Derechos Humanos.
   321	              </p>
   322	
   323	              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
   324	                Nuestra labor trasciende la teoría: somos una plataforma de incidencia real que, 
   325	                mediante la cooperación técnica y el empoderamiento social, trabaja para que las 
   326	                garantías fundamentales sean el pilar de la convivencia en nuestro territorio y 
   327	                un referente de transformación global.
   328	              </p>
   329	
   330	              <div className="grid sm:grid-cols-2 gap-4">
   331	                <div className="flex items-start space-x-3">
   332	                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
   333	                    <Scale className="w-5 h-5 text-blue-600" />
   334	                  </div>
   335	                  <div>
   336	                    <h4 className="font-semibold text-gray-900">Derechos Fundamentales</h4>
   337	                    <p className="text-gray-600 text-sm">Educación sobre derechos universales</p>
   338	                  </div>
   339	                </div>
   340	                <div className="flex items-start space-x-3">
   341	                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
   342	                    <BookOpen className="w-5 h-5 text-yellow-600" />
   343	                  </div>
   344	                  <div>
   345	                    <h4 className="font-semibold text-gray-900">Materiales Educativos</h4>
   346	                    <p className="text-gray-600 text-sm">Recursos oficiales de Human Rights</p>
   347	                  </div>
   348	                </div>
   349	              </div>
   350	            </div>
   351	            
   352	            <div className="relative">
   353	              <img 
   354	                src="/educacion-image.jpg" 
   355	                alt="Educación en Derechos Humanos" 
   356	                className="rounded-2xl shadow-2xl"
   357	              />
   358	              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-xl shadow-lg">
   359	                <div className="text-3xl font-bold">100%</div>
   360	                <div className="text-yellow-100">Capítulo Autorizado</div>
   361	              </div>
   362	            </div>
   363	          </div>
   364	        </div>
   365	      </section>
   366	
   367	      {/* Consejo Territorial de Paz Section */}
   368	      <section id="consejo-paz" className="py-16 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500">
   369	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   370	          <div className="grid lg:grid-cols-2 gap-12 items-center">
   371	            <div className="text-center lg:text-left">
   372	              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
   373	                <Scale className="w-4 h-4 text-white mr-2" />
   374	                <span className="text-white text-sm font-medium">Membresía Oficial</span>
   375	              </div>
   376	              
   377	              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
   378	                Consejo Territorial de Paz, Reconciliación y Convivencia
   379	              </h2>
   380	              <p className="text-xl text-sky-100 mb-4">
   381	                Santiago de Cali
   382	              </p>
   383	              <p className="text-sky-50 text-lg mb-4 leading-relaxed">
   384	                Hacemos parte del Consejo Territorial de Paz, Reconciliación y Convivencia de Santiago de Cali 
   385	                <span className="font-bold text-white"> en representación de la Fundación Árbol Fuente de Vida</span>, 
   386	                trabajando conjuntamente por la construcción de paz, la reconciliación y la convivencia ciudadana en nuestra ciudad.
   387	              </p>
   388	              <div className="flex flex-wrap gap-3">
   389	                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
   390	                  <Heart className="w-4 h-4 text-white mr-2" />
   391	                  <span className="text-white text-sm">Construcción de Paz</span>
   392	                </div>
   393	                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
   394	                  <Users className="w-4 h-4 text-white mr-2" />
   395	                  <span className="text-white text-sm">Reconciliación</span>
   396	                </div>
   397	                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
   398	                  <Scale className="w-4 h-4 text-white mr-2" />
   399	                  <span className="text-white text-sm">Convivencia</span>
   400	                </div>
   401	              </div>
   402	            </div>
   403	            
   404	            <div className="flex justify-center">
   405	              <div className="relative">
   406	                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-4 shadow-2xl flex items-center justify-center">
   407	                  <img 
   408	                    src="/escudo-consejo-paz-cali.jpg" 
   409	                    alt="Escudo Consejo Territorial de Paz, Reconciliación y Convivencia de Santiago de Cali" 
   410	                    className="w-full h-full object-contain rounded-full"
   411	                  />
   412	                </div>
   413	                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
   414	                  <span className="text-sky-600 font-bold text-sm">Miembro Oficial</span>
   415	                </div>
   416	              </div>
   417	            </div>
   418	          </div>
   419	        </div>
   420	      </section>
   421	
   422	      {/* Official Logo Section */}
   423	      <section className="py-16 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400">
   424	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   425	          <div className="text-center">
   426	            <div className="inline-block mb-6">
   427	              <img 
   428	                src="/logo-uhr.png" 
   429	                alt="United for Human Rights - Logo Oficial" 
   430	                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
   431	              />
   432	            </div>
   433	            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
   434	              Unidos por los Derechos Humanos
   435	            </h2>
   436	            <p className="text-xl text-yellow-100 mb-2">
   437	              <span className="font-semibold">Organización Internacional</span> con sede en Estados Unidos
   438	            </p>
   439	            <p className="text-lg text-yellow-50 max-w-3xl mx-auto">
   440	              Capítulo Colombia autorizado oficialmente. Utilizamos los logos, colores y materiales 
   441	              educativos oficiales de la sede principal.
   442	            </p>
   443	            <div className="mt-6 inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur rounded-full">
   444	              <Globe className="w-5 h-5 text-white mr-2" />
   445	              <span className="text-white font-medium">www.humanrights.com</span>
   446	            </div>
   447	          </div>
   448	        </div>
   449	      </section>
   450	
   451	      {/* Mission & Vision */}
   452	      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
   453	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   454	          <div className="grid md:grid-cols-2 gap-8">
   455	            <Card className="bg-white/10 backdrop-blur border-white/20">
   456	              <CardHeader>
   457	                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
   458	                  <Heart className="w-7 h-7 text-white" />
   459	                </div>
   460	                <CardTitle className="text-2xl text-white">Nuestra Misión</CardTitle>
   461	              </CardHeader>
   462	              <CardContent>
   463	                <p className="text-blue-100 leading-relaxed">
   464	                  Educar y empoderar a las comunidades colombianas sobre sus derechos humanos
465	                  fundamentales, utilizando los recursos oficiales de la organización internacional 
   466	                  Unidos por los Derechos Humanos, para construir una sociedad más justa, 
   467	                  equitativa y consciente de sus libertades.
   468	                </p>
   469	              </CardContent>
   470	            </Card>
   471	
   472	            <Card className="bg-white/10 backdrop-blur border-white/20">
   473	              <CardHeader>
   474	                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
   475	                  <Globe className="w-7 h-7 text-white" />
   476	                </div>
   477	                <CardTitle className="text-2xl text-white">Nuestra Visión</CardTitle>
   478	              </CardHeader>
   479	              <CardContent>
   480	                <p className="text-blue-100 leading-relaxed">
   481	                  Ser el referente principal en educación de derechos humanos en Colombia, 
   482	                  alcanzando todas las regiones del país con materiales educativos de calidad, 
   483	                  formando una ciudadanía informada que defienda activamente los derechos 
   484	                  humanos para todos.
   485	                </p>
   486	              </CardContent>
   487	            </Card>
   488	          </div>
   489	        </div>
   490	      </section>
   491	
   492	      {/* Alianzas Section */}
   493	      <section id="alianzas" className="py-20 bg-gray-50">
   494	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   495	          <div className="text-center mb-16">
   496	            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
   497	              <Users className="w-4 h-4 text-blue-600 mr-2" />
   498	              <span className="text-blue-700 text-sm font-medium">Nuestras Alianzas</span>
   499	            </div>
   500	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
   501	              Organizaciones Aliadas
   502	            </h2>
   503	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
   504	              Trabajamos junto a diversas organizaciones para promover y defender los derechos humanos en Colombia
   505	            </p>
   506	          </div>
   507	
   508	          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
   509	            {/* ONG ARBOL FUENTE DE VIDA */}
   510	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   511	              <CardContent className="p-8 text-center">
   512	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   513	                  <img 
   514	                    src="/logo-arbol-fuente-vida.png" 
   515	                    alt="ONG ARBOL FUENTE DE VIDA" 
   516	                    className="w-28 h-28 object-contain"
   517	                  />
   518	                </div>
   519	                <h3 className="text-xl font-bold text-gray-900 mb-2">ONG ARBOL FUENTE DE VIDA</h3>
   520	                <p className="text-gray-600 text-sm mb-4">Fortalecer el tejido social generando confianza y bienestar de todos los sectores de la sociedad, ofreciendo servicios con altos estándares de calidad para el desarrollo social y económico comunitario.</p>
   521	                <a 
   522	                  href="https://ongfuentevidaddhhihrc.org/" 
   523	                  target="_blank" 
   524	                  rel="noopener noreferrer"
   525	                  className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
   526	                >
   527	                  <Globe className="w-4 h-4 mr-1" />
   528	                  Sitio Web
   529	                </a>
   530	              </CardContent>
   531	            </Card>
   532	
   533	            {/* NGO CAPEHALCONES / Fundación Hawks */}
   534	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   535	              <CardContent className="p-8 text-center">
   536	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   537	                  <img 
   538	                    src="/logo-hawks.jpg" 
   539	                    alt="NGO CAPEHALCONES" 
   540	                    className="w-28 h-28 object-contain"
   541	                  />
   542	                </div>
   543	                <h3 className="text-xl font-bold text-gray-900 mb-2">NGO CAPEHALCONES</h3>
   544	                <p className="text-gray-600 text-sm mb-4">Organización no gubernamental dedicada a la protección y promoción de los derechos humanos, trabajando por la justicia social y el bienestar de las comunidades vulnerables.</p>
   545	                <a 
   546	                  href="https://www.facebook.com/share/1Cic3HMD9L/" 
   547	                  target="_blank" 
   548	                  rel="noopener noreferrer"
   549	                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
   550	                >
   551	                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   552	                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
   553	                  </svg>
   554	                  Facebook
   555	                </a>
   556	              </CardContent>
   557	            </Card>
   558	
   559	            {/* Veeduría Ciudadana de la Nación Cali */}
   560	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   561	              <CardContent className="p-8 text-center">
   562	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   563	                  <img 
   564	                    src="/logo-veeduria-nacion.jpg" 
   565	                    alt="Veeduría Ciudadana de la Nación Cali" 
   566	                    className="w-28 h-28 object-contain"
   567	                  />
   568	                </div>
   569	                <h3 className="text-xl font-bold text-gray-900 mb-2">Veeduría Ciudadana de la Nación Cali</h3>
   570	                <p className="text-gray-600 text-sm mb-4">Veeduría ciudadana facultada por la Ley 850 de 2003 para el control social, vigilancia y seguimiento de la gestión pública, promoviendo la transparencia y el buen uso de los recursos públicos.</p>
   571	                <a 
   572	                  href="https://www.facebook.com/share/18b3HgPjuw/" 
   573	                  target="_blank" 
   574	                  rel="noopener noreferrer"
   575	                  className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
   576	                >
   577	                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   578	                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
   579	                  </svg>
   580	                  Facebook
   581	                </a>
   582	              </CardContent>
   583	            </Card>
   584	
   585	            {/* SACCOL */}
   586	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   587	              <CardContent className="p-8 text-center">
   588	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   589	                  <img 
   590	                    src="/logo-saccol.png" 
   591	                    alt="SACCOL" 
   592	                    className="w-28 h-28 object-contain"
   593	                  />
   594	                </div>
   595	                <h3 className="text-xl font-bold text-gray-900 mb-2">SACCOL</h3>
   596	                <p className="text-gray-600 text-sm mb-4">Sindicato de Acción Comunal de Colombia - Organización que promueve el fortalecimiento de las organizaciones comunales y la participación ciudadana en la construcción de tejido social.</p>
   597	                <div className="flex justify-center gap-3">
   598	                  <a 
   599	                    href="https://www.instagram.com/saccolguacari/" 
   600	                    target="_blank" 
   601	                    rel="noopener noreferrer"
   602	                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity"
   603	                  >
   604	                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   605	                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
   606	                    </svg>
   607	                    Instagram
   608	                  </a>
   609	                  <a 
   610	                    href="https://www.facebook.com/SACCOLGuacariOficial/" 
   611	                    target="_blank" 
   612	                    rel="noopener noreferrer"
   613	                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
   614	                  >
   615	                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   616	                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
   617	                    </svg>
   618	                    Facebook
   619	                  </a>
   620	                </div>
   621	              </CardContent>
   622	            </Card>
   623	
   624	            {/* Fundación El Camino de la Felicidad */}
   625	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   626	              <CardContent className="p-8 text-center">
   627	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   628	                  <img 
   629	                    src="/logo-camino-felicidad.jpg" 
   630	                    alt="Fundación El Camino de la Felicidad" 
   631	                    className="w-28 h-28 object-contain"
   632	                  />
   633	                </div>
   634	                <h3 className="text-xl font-bold text-gray-900 mb-2">Fundación El Camino de la Felicidad</h3>
   635	                <p className="text-gray-600 text-sm mb-4">Revertir la decadencia moral de la sociedad al restaurar la confianza y honestidad a través de la distribución amplia del libro "El Camino a la Felicidad", una guía basada en el sentido común para vivir mejor.</p>
   636	                <a 
   637	                  href="https://www.elcaminoalafelicidad.mx/" 
   638	                  target="_blank" 
   639	                  rel="noopener noreferrer"
   640	                  className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
   641	                >
   642	                  <Globe className="w-4 h-4 mr-1" />
   643	                  Sitio Web
   644	                </a>
   645	              </CardContent>
   646	            </Card>
   647	
   648	            {/* Fundación por un Mundo Libre de Drogas */}
   649	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   650	              <CardContent className="p-8 text-center">
   651	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   652	                  <img 
   653	                    src="/logo-drug-free-world.jpg" 
   654	                    alt="Fundación por un Mundo Libre de Drogas" 
   655	                    className="w-28 h-28 object-contain"
   656	                  />
   657	                </div>
   658	                <h3 className="text-xl font-bold text-gray-900 mb-2">Fundación por un Mundo Libre de Drogas</h3>
   659	                <p className="text-gray-600 text-sm mb-4">Proporcionar información basada en hechos acerca de las drogas para que las personas puedan tomar decisiones informadas y vivir una vida libre de drogas, mediante educación y prevención efectiva.</p>
   660	                <div className="flex justify-center gap-2 flex-wrap">
   661	                  <a 
   662	                    href="https://www.vidasindrogas.org/" 
   663	                    target="_blank" 
   664	                    rel="noopener noreferrer"
   665	                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
   666	                  >
   667	                    <Globe className="w-4 h-4 mr-1" />
   668	                    Sitio Web
   669	                  </a>
   670	                  <a 
   671	                    href="https://facebook.com/DrugFreeWorldInt" 
   672	                    target="_blank" 
   673	                    rel="noopener noreferrer"
   674	                    className="inline-flex items-center px-3 py-1.5 bg-blue-800 text-white text-sm rounded-full hover:bg-blue-900 transition-colors"
   675	                  >
   676	                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   677	                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
   678	                    </svg>
   679	                    Facebook
   680	                  </a>
   681	                </div>
   682	              </CardContent>
   683	            </Card>
   684	
   685	            {/* CEPDIPO */}
   686	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   687	              <CardContent className="p-8 text-center">
   688	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   689	                  <img 
   690	                    src="/logo-cepdipo.jpg" 
   691	                    alt="CEPDIPO" 
   692	                    className="w-28 h-28 object-contain"
   693	                  />
   694	                </div>
   695	                <h3 className="text-xl font-bold text-gray-900 mb-2">CEPDIPO</h3>
   696	                <p className="text-gray-600 text-sm mb-4">Centro de Pensamiento y Diálogo Político - Promover el avance en estudios e investigaciones para contribuir a la construcción de una sociedad fundamentada en valores de democracia, justicia social e igualdad.</p>
   697	                <a 
   698	                  href="https://www.cepdipo-co.org/" 
   699	                  target="_blank" 
   700	                  rel="noopener noreferrer"
   701	                  className="inline-flex items-center px-3 py-1.5 bg-amber-600 text-white text-sm rounded-full hover:bg-amber-700 transition-colors"
   702	                >
   703	                  <Globe className="w-4 h-4 mr-1" />
   704	                  Sitio Web
   705	                </a>
   706	              </CardContent>
   707	            </Card>
   708	
   709	            {/* MEVICO - Memoria Viva Colombia */}
   710	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   711	              <CardContent className="p-8 text-center">
   712	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   713	                  <img 
   714	                    src="/logo-memoria-viva-colombia.jpg" 
   715	                    alt="MEVICO - Memoria Viva Colombia" 
   716	                    className="w-28 h-28 object-contain"
   717	                  />
   718	                </div>
   719	                <h3 className="text-xl font-bold text-gray-900 mb-2">MEVICO</h3>
   720	                <p className="text-gray-600 text-sm mb-4">Memoria Viva Colombia - Visibilizar las víctimas y realizar ejercicios de memoria como acción para la no repetición de hechos que marcaron a la población, preservando la memoria histórica del país.</p>
   721	                <div className="flex justify-center gap-3">
   722	                  <a 
   723	                    href="https://www.facebook.com/memoriavivacolombia/" 
   724	                    target="_blank" 
   725	                    rel="noopener noreferrer"
   726	                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
   727	                  >
   728	                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   729	                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
   730	                    </svg>
   731	                    Facebook
   732	                  </a>
   733	                  <a 
   734	                    href="https://www.instagram.com/memoriavivacolombia/" 
   735	                    target="_blank" 
   736	                    rel="noopener noreferrer"
   737	                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity"
   738	                  >
   739	                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   740	                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
   741	                    </svg>
   742	                    Instagram
   743	                  </a>
   744	                </div>
   745	              </CardContent>
   746	            </Card>
   747	
   748	            {/* SINTRAJUSPAZ */}
   749	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
   750	              <CardContent className="p-8 text-center">
   751	                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
   752	                  <img 
   753	                    src="/logo-sintrajuspaz.jpg" 
   754	                    alt="SINTRAJUSPAZ" 
   755	                    className="w-28 h-28 object-contain"
   756	                  />
   757	                </div>
   758	                <h3 className="text-xl font-bold text-gray-900 mb-2">SINTRAJUSPAZ</h3>
   759	                <p className="text-gray-600 text-sm mb-4">Sindicato de Trabajadores de la Justicia y la Paz - Promover y defender la paz como derecho fundamental, así como los derechos humanos y laborales de todas las trabajadoras y trabajadores.</p>
   760	                <div className="flex justify-center gap-3">
   761	                  <a 
   762	                    href="https://linktr.ee/Sintrajuspaaz?utm_source=linktree_profile_share&ltsid=dade4ee8-faea-4199-9e85-7e2352889fab" 
   763	                    target="_blank" 
   764	                    rel="noopener noreferrer"
   765	                    className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition-colors"
   766	                  >
   767	                    <ExternalLink className="w-4 h-4 mr-1" />
   768	                    Linktree
   769	                  </a>
   770	                  <a 
   771	                    href="https://www.instagram.com/sintrajuspaz/" 
   772	                    target="_blank" 
   773	                    rel="noopener noreferrer"
   774	                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition-opacity"
   775	                  >
   776	                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
   777	                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
   778	                    </svg>
   779	                    Instagram
   780	                  </a>
   781	                </div>
   782	              </CardContent>
   783	            </Card>
   784	          </div>
   785	        </div>
   786	      </section>
   787	
   788	      {/* Videos Section */}
   789	      <section id="videos" className="py-20 bg-white">
   790	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   791	          <div className="text-center mb-16">
   792	            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4">
   793	              <Video className="w-4 h-4 text-red-600 mr-2" />
   794	              <span className="text-red-700 text-sm font-medium">Videos Educativos</span>
   795	            </div>
   796	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
   797	              Videos sobre Derechos Humanos
   798	            </h2>
   799	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
   800	              Contenido audiovisual oficial de Unidos por los Derechos Humanos en español
   801	            </p>
   802	          </div>
   803	
   804	          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
   805	            {[
   806	              {
   807	                title: 'Los 30 Derechos Humanos',
   808	                description: 'Video completo con los 30 derechos humanos en español latino',
   809	                videoId: 'Lp6wEaivQVY'
   810	              },
   811	              {
   812	                title: 'Derecho #1: Nacemos Libres e Iguales',
   813	                description: 'Todos los seres humanos nacen libres e iguales en dignidad y derechos',
   814	                videoId: 'XzhRRe3KPug'
   815	              },
   816	              {
   817	                title: 'Derecho #2: No Discriminar',
   818	                description: 'Todos tienen los mismos derechos sin distinción de ningún tipo',
   819	                videoId: 'n0WfKHaNfA0'
   820	              },
   821	              {
   822	                title: 'Derecho #3: Derecho a la Vida',
   823	                description: 'Todo individuo tiene derecho a la vida, la libertad y la seguridad',
   824	                videoId: 'fRpLhYBWubM'
   825	              },
   826	              {
   827	                title: 'Derecho #4: Ninguna Esclavitud',
   828	                description: 'Nadie estará sometido a esclavitud ni a servidumbre',
   829	                videoId: '4-a4sEZ1fK0'
   830	              },
   831	              {
   832	                title: 'Derecho #5: Ninguna Tortura',
   833	                description: 'Nadie será sometido a torturas ni a penas o tratos crueles',
   834	                videoId: '_8YfmW6Jv4U'
   835	              }
   836	            ].map((video, index) => (
   837	              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md">
   838	                <div className="aspect-video bg-gray-100">
   839	                  <iframe
   840	                    width="100%"
   841	                    height="100%"
   842	                    src={`https://www.youtube.com/embed/${video.videoId}`}
   843	                    title={video.title}
   844	                    frameBorder="0"
   845	                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   846	                    allowFullScreen
   847	                    className="w-full h-full"
   848	                  ></iframe>
   849	                </div>
   850	                <CardContent className="p-6">
   851	                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
   852	                  <p className="text-gray-600 text-sm">{video.description}</p>
   853	                </CardContent>
   854	              </Card>
   855	            ))}
   856	          </div>
   857	        </div>
   858	      </section>
   859	
   860	      {/* Noticias - Cuarta Vigilia */}
   861	      <section id="noticias" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
   862	        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   863	          <div className="text-center mb-12">
   864	            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4">
   865	              <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
   866	                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
   867	              </svg>
   868	              <span className="text-red-700 text-sm font-medium">Noticias</span>
   869	            </div>
   870	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
   871	              Cuarta Vigilia
   872	            </h2>
   873	            <p className="text-gray-600 max-w-2xl mx-auto">
   874	              El poder que no duerme - Información y actualizaciones de nuestra fundación.
   875	            </p>
   876	          </div>
   877	
   878	          <Card className="border-0 shadow-xl overflow-hidden">
   879	            <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white">
   880	              <div className="flex items-center justify-between">
   881	                <div>
   882	                  <h3 className="text-2xl font-bold mb-1">Cuarta Vigilia</h3>
   883	                  <p className="text-red-100">Boletín informativo</p>
   884	                </div>
   885	                <img
   886	                  src="/logo-cuarta-vigilia.png"
   887	                  alt="Cuarta Vigilia"
   888	                  className="w-16 h-16 rounded-full bg-white p-1"
   889	                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
   890	                />
   891	              </div>
   892	            </div>
   893	            <CardContent className="p-6">
   894	              <p className="text-gray-700 mb-4">
   895	                Mantente informado sobre nuestras actividades, eventos y logros en defensa de los derechos humanos.
   896	              </p>
   897	              <div className="flex flex-wrap gap-3">
   898	                <a
   899	                  href="https://www.instagram.com/capitulounidosddhhcol/"
   900	                  target="_blank"
   901	                  rel="noopener noreferrer"
   902	                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
   903	                >
   904	                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
   905	                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
   906	                  </svg>
   907	                  Síguenos en Instagram
   908	                </a>
   909	              </div>
   910	            </CardContent>
   911	          </Card>
   912	        </div>
   913	      </section>
   914	
   915	      {/* Descargas Section */}
   916	      <section id="descargas" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
   917	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   918	          <div className="text-center mb-16">
   919	            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
   920	              <Download className="w-4 h-4 text-indigo-600 mr-2" />
   921	              <span className="text-indigo-700 text-sm font-medium">Materiales Descargables</span>
   922	            </div>
   923	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
   924	              Descargas
   925	            </h2>
   926	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
   927	              Materiales educativos oficiales de Unidos por los Derechos Humanos
   928	            </p>
929	          </div>
   930	
   931	          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
   932	            {[
   933	              {
   934	                title: 'Manual de Derechos Humanos',
   935	                description: 'Guía completa sobre los 30 derechos humanos en español',
   936	                type: 'PDF',
   937	                size: '3.4 MB',
   938	                color: 'bg-red-500',
   939	                url: '/manual-derechos-humanos.pdf'
   940	              },
   941	              {
   942	                title: 'Cartilla de Derechos del Niño',
   943	                description: 'Material educativo sobre derechos de niños, niñas y adolescentes',
   944	                type: 'PDF',
   945	                size: '1.8 MB',
   946	                color: 'bg-blue-500',
   947	                url: '/cartilla-derechos-nino.pdf'
   948	              },
   949	              {
   950	                title: 'Manual de Participación Ciudadana',
   951	                description: 'Guía completa para la participación ciudadana y veeduría',
   952	                type: 'PDF',
   953	                size: '13.1 MB',
   954	                color: 'bg-teal-500',
   955	                url: '/manual-participacion-ciudadana.pdf'
   956	              },
   957	              {
   958	                title: 'Guía Defensa Embargos Ilegales',
   959	                description: 'Guía práctica para la defensa contra embargos ilegales',
   960	                type: 'PDF',
   961	                size: '73 KB',
   962	                color: 'bg-amber-600',
   963	                url: '/guia-defensa-embargos-ilegales.pdf'
   964	              },
   965	              {
   966	                title: 'Sentencia 131 Marzo 2026',
   967	                description: 'Sentencia de la Corte Constitucional sobre derechos fundamentales',
   968	                type: 'PDF',
   969	                size: '3.4 MB',
   970	                color: 'bg-indigo-600',
   971	                url: '/sentencia-131-marzo-2026.pdf'
   972	              },
   973	              {
   974	                title: 'Manual de Veedurías',
   975	                description: 'Guía sobre el ejercicio de veeduría ciudadana, control social y derechos humanos',
   976	                type: 'PDF',
   977	                size: '13.7 MB',
   978	                color: 'bg-purple-600',
   979	                url: '/manual-veedurias.pdf'
   980	              }
   981	            ].map((item, index) => (
   982	              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
   983	                <CardContent className="p-6">
   984	                  <div className="flex items-start space-x-4">
   985	                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
   986	                      <FileText className="w-6 h-6 text-white" />
   987	                    </div>
   988	                    <div className="flex-1">
   989	                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
   990	                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
   991	                      <div className="flex items-center justify-between">
   992	                        <span className="text-xs text-gray-500">{item.type} • {item.size}</span>
   993	                        <a href={item.url} target="_blank" rel="noopener noreferrer">
   994	                          <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
   995	                            <Download className="w-4 h-4 mr-1" />
   996	                            Descargar
   997	                          </Button>
   998	                        </a>
   999	                      </div>
  1000	                    </div>
  1001	                  </div>
  1002	                </CardContent>
  1003	              </Card>
  1004	            ))}
  1005	          </div>
  1006	
  1007	
  1008	        </div>
  1009	      </section>
  1010	
  1011	            {/* Afiches Section */}
  1012	      <section id="afiches" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
  1013	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  1014	          <div className="text-center mb-16">
  1015	            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
  1016	              <FileText className="w-4 h-4 text-purple-600 mr-2" />
  1017	              <span className="text-purple-700 text-sm font-medium">Afiches Educativos</span>
  1018	            </div>
  1019	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  1020	              Afiches de Derechos Humanos
  1021	            </h2>
  1022	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
  1023	              Articulos 1 al 17 de la Declaracion Universal de Derechos Humanos
  1024	            </p>
  1025	          </div>
  1026	
  1027	          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  1028	            {[
  1029	              { num: 1, title: 'Derechos Humanos - Art. 1', file: 'afiche-01.jpg', subtitle: 'Art. 1' },
  1030	              { num: 2, title: 'Derechos Humanos - Art. 2', file: 'afiche-02.jpg', subtitle: 'Art. 2' },
  1031	              { num: 3, title: 'Derechos Humanos - Art. 3', file: 'afiche-03.jpg', subtitle: 'Art. 3' },
  1032	              { num: 4, title: 'Derechos Humanos - Art. 4', file: 'afiche-04.jpg', subtitle: 'Art. 4' },
  1033	              { num: 5, title: 'Derechos Humanos - Art. 5', file: 'afiche-05.jpg', subtitle: 'Art. 5' },
  1034	              { num: 6, title: 'Derechos Humanos - Art. 6', file: 'afiche-06.jpg', subtitle: 'Art. 6' },
  1035	              { num: 7, title: 'Derechos Humanos - Art. 7', file: 'afiche-07.jpg', subtitle: 'Art. 7' },
  1036	              { num: 8, title: 'Derechos Humanos - Art. 8', file: 'afiche-08.jpg', subtitle: 'Art. 8' },
  1037	              { num: 9, title: 'Derechos Humanos - Art. 9', file: 'afiche-09.jpg', subtitle: 'Art. 9' },
  1038	              { num: 10, title: 'Derechos Humanos - Art. 10', file: 'afiche-10.jpg', subtitle: 'Art. 10' },
  1039	              { num: 11, title: 'Derechos Humanos - Art. 11 #1', file: 'afiche-11.jpg', subtitle: 'Art. 11 #1' },
  1040	              { num: 11, title: 'Derechos Humanos - Art. 11 #2', file: 'afiche-11-2.jpg', subtitle: 'Art. 11 #2' },
  1041	              { num: 12, title: 'Derechos Humanos - Art. 12', file: 'afiche-12.jpg', subtitle: 'Art. 12' },
  1042	              { num: 13, title: 'Derechos Humanos - Art. 13 #1', file: 'afiche-13-1.jpg', subtitle: 'Art. 13 #1' },
  1043	              { num: 13, title: 'Derechos Humanos - Art. 13 #2', file: 'afiche-13-2.jpg', subtitle: 'Art. 13 #2' },
  1044	              { num: 14, title: 'Derechos Humanos - Art. 14 #1', file: 'afiche-14-1.jpg', subtitle: 'Art. 14 #1' },
  1045	              { num: 14, title: 'Derechos Humanos - Art. 14 #2', file: 'afiche-14-2.jpg', subtitle: 'Art. 14 #2' },
  1046	              { num: 15, title: 'Derechos Humanos - Art. 15 #1', file: 'afiche-15-1.jpg', subtitle: 'Art. 15 #1' },
  1047	              { num: 15, title: 'Derechos Humanos - Art. 15 #2', file: 'afiche-15-2.jpg', subtitle: 'Art. 15 #2' },
  1048	              { num: 16, title: 'Derechos Humanos - Art. 16 #1', file: 'afiche-16-1.jpg', subtitle: 'Art. 16 #1' },
  1049	              { num: 16, title: 'Derechos Humanos - Art. 16 #2', file: 'afiche-16-2.jpg', subtitle: 'Art. 16 #2' },
  1050	              { num: 16, title: 'Derechos Humanos - Art. 16 #3', file: 'afiche-16-3.jpg', subtitle: 'Art. 16 #3' },
  1051	              { num: 17, title: 'Derechos Humanos - Art. 17 #1', file: 'afiche-17-1.png', subtitle: 'Art. 17 #1' },
  1052	              { num: 17, title: 'Derechos Humanos - Art. 17 #2', file: 'afiche-17-2.png', subtitle: 'Art. 17 #2' }
  1053	            ].map((afiche, index) => (
  1054	              <Card key={`${afiche.subtitle}-${index}`} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md group">
  1055	                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
  1056	                  <img 
  1057	                    src={`/afiches/${afiche.file}`}
  1058	                    alt={`${afiche.subtitle}`}
  1059	                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  1060	                    loading="lazy"
  1061	                  />
  1062	                </div>
  1063	                <CardContent className="p-4">
  1064	                  <p className="text-xs text-purple-600 font-semibold mb-1">{afiche.subtitle}</p>
  1065	                  <h3 className="font-bold text-gray-900 text-sm mb-3 truncate">{afiche.title}</h3>
  1066	                  <a 
  1067	                    href={`/afiches/${afiche.file}`}
  1068	                    download={afiche.file}
  1069	                    className="block w-full"
  1070	                  >
  1071	                    <Button size="sm" variant="outline" className="w-full text-purple-600 border-purple-600 hover:bg-purple-50 text-xs">
  1072	                      <Download className="w-3 h-3 mr-1" />
  1073	                      Descargar
  1074	                    </Button>
  1075	                  </a>
  1076	                </CardContent>
  1077	              </Card>
  1078	            ))}
  1079	          </div>
  1080	        </div>
  1081	      </section>
  1082	
  1083	      {/* Donaciones Section */}
  1084	      <section id="donaciones" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  1085	        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  1086	          <div className="text-center mb-12">
  1087	            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
  1088	              <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
  1089	                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  1090	              </svg>
  1091	              <span className="text-green-700 text-sm font-medium">Apoya Nuestra Causa</span>
  1092	            </div>
  1093	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  1094	              Donaciones
  1095	            </h2>
  1096	            <p className="text-gray-600 max-w-2xl mx-auto">
  1097	              Tu aporte nos permite continuar educando y empoderando comunidades sobre sus derechos humanos. Cada contribución hace la diferencia.
  1098	            </p>
  1099	          </div>
  1100	
  1101	          <Card className="max-w-md mx-auto border-0 shadow-xl">
  1102	            <CardContent className="p-6">
  1103	              {/* Nequi */}
  1104	              <a
  1105	                href="https://wa.me/573016733819?text=Hola%2C%20quiero%20hacer%20una%20donacion%20por%20Nequi%20a%20la%20Fundacion%20Unidos%20por%20los%20Derechos%20Humanos"
  1106	                className="block"
  1107	              >
  1108	                <div className="bg-gray-100 rounded-lg p-4 mb-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
  1109	                  <p className="font-bold text-gray-900 mb-1">Nequi</p>
  1110	                  <p className="text-2xl font-bold text-gray-900">301 673 3819</p>
  1111	                  <p className="text-sm text-gray-600 mt-1">Toca para coordinar donacion por Nequi</p>
  1112	                </div>
  1113	              </a>
  1114	
  1115	              {/* Bre-B */}
  1116	              <a
  1117	                href="https://wa.me/573016733819?text=Hola%2C%20quiero%20hacer%20una%20donacion%20por%20Bre-B%20a%20la%20Fundacion%20Unidos%20por%20los%20Derechos%20Humanos"
  1118	                className="block"
  1119	              >
  1120	                <div className="bg-gray-100 rounded-lg p-4 mb-4 text-center hover:bg-gray-200 transition-colors cursor-pointer">
  1121	                  <p className="font-bold text-gray-900 mb-1">Bre-B (Llave)</p>
  1122	                  <p className="text-2xl font-bold text-gray-900">301 673 3819</p>
  1123	                  <p className="text-sm text-gray-600 mt-1">Toca para coordinar donacion por Bre-B</p>
  1124	                </div>
  1125	              </a>
  1126	
  1127	              {/* WhatsApp general */}
  1128	              <a
  1129	                href="https://wa.me/573016733819?text=Hola%2C%20quiero%20hacer%20una%20donacion%20a%20la%20Fundacion%20Unidos%20por%20los%20Derechos%20Humanos"
  1130	                className="block"
  1131	              >
  1132	                <div className="bg-green-500 rounded-lg p-4 hover:bg-green-600 transition-colors cursor-pointer text-center text-white">
  1133	                  <p className="font-bold mb-1">Coordinar donacion por WhatsApp</p>
  1134	                  <p className="text-sm">Toca para escribirnos</p>
  1135	                </div>
  1136	              </a>
  1137	            </CardContent>
  1138	          </Card>
  1139	        </div>
  1140	      </section>
  1141	
  1142	      {/* Formulario de Afiliacion */}
  1143	      <section id="afiliacion" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
  1144	        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  1145	          <div className="text-center mb-12">
  1146	            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
  1147	              <Users className="w-4 h-4 text-yellow-600 mr-2" />
  1148	              <span className="text-yellow-700 text-sm font-medium">Unete a Nosotros</span>
  1149	            </div>
  1150	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  1151	              Formulario de Afiliacion
  1152	            </h2>
  1153	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
  1154	              Completa tus datos para ser parte de Unidos por los Derechos Humanos - Capitulo Colombia
  1155	            </p>
  1156	          </div>
  1157	
  1158	          <Card className="border-0 shadow-xl">
  1159	            <CardContent className="p-8">
  1160	              {formEnviado ? (
  1161	                <div className="text-center py-12">
  1162	                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
  1163	                    <Heart className="w-8 h-8 text-green-600" />
  1164	                  </div>
  1165	                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por tu interes!</h3>
  1166	                  <p className="text-gray-600 mb-6">Se ha abierto tu correo con los datos. Envia el mensaje para completar tu afiliacion.</p>
  1167	                  <Button onClick={() => setFormEnviado(false)} variant="outline" className="text-blue-600 border-blue-600">
  1168	                    Enviar otra afiliacion
  1169	                  </Button>
  1170	                </div>
  1171	              ) : (
  1172	                <form onSubmit={handleFormSubmit} className="space-y-5">
  1173	                  <div className="grid sm:grid-cols-2 gap-5">
  1174	                    <div>
  1175	                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombres y Apellidos *</label>
  1176	                      <input type="text" name="nombre" value={formData.nombre} onChange={handleFormChange} required
  1177	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1178	                        placeholder="Tu nombre completo" />
  1179	                    </div>
  1180	                    <div>
  1181	                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electronico *</label>
  1182	                      <input type="email" name="email" value={formData.email} onChange={handleFormChange} required
  1183	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1184	                        placeholder="tu@email.com" />
  1185	                    </div>
  1186	                  </div>
  1187	
  1188	                  <div className="grid sm:grid-cols-2 gap-5">
  1189	                    <div>
  1190	                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Documento *</label>
  1191	                      <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleFormChange}
  1192	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  1193	                        <option value="CC">Cedula de Ciudadania</option>
  1194	                        <option value="CE">Cedula de Extranjeria</option>
  1195	                        <option value="PA">Pasaporte</option>
  1196	                        <option value="TI">Tarjeta de Identidad</option>
  1197	                        <option value="PEP">PEP</option>
  1198	                      </select>
  1199	                    </div>
  1200	                    <div>
  1201	                      <label className="block text-sm font-medium text-gray-700 mb-1">Numero de Documento *</label>
  1202	                      <input type="text" name="documento" value={formData.documento} onChange={handleFormChange} required
  1203	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1204	                        placeholder="1234567890" />
  1205	                    </div>
  1206	                  </div>
  1207	
  1208	                  <div className="grid sm:grid-cols-2 gap-5">
  1209	                    <div>
  1210	                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefono / WhatsApp *</label>
  1211	                      <input type="tel" name="telefono" value={formData.telefono} onChange={handleFormChange} required
  1212	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1213	                        placeholder="301 673 3819" />
  1214	                    </div>
  1215	                    <div>
  1216	                      <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
  1217	                      <input type="text" name="ciudad" value={formData.ciudad} onChange={handleFormChange} required
  1218	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1219	                        placeholder="Cali" />
  1220	                    </div>
  1221	                  </div>
  1222	
  1223	                  <div className="grid sm:grid-cols-2 gap-5">
  1224	                    <div>
  1225	                      <label className="block text-sm font-medium text-gray-700 mb-1">Departamento *</label>
  1226	                      <input type="text" name="departamento" value={formData.departamento} onChange={handleFormChange} required
  1227	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1228	                        placeholder="Valle del Cauca" />
  1229	                    </div>
  1230	                    <div>
  1231	                      <label className="block text-sm font-medium text-gray-700 mb-1">Ocupacion / Profesion</label>
  1232	                      <input type="text" name="ocupacion" value={formData.ocupacion} onChange={handleFormChange}
  1233	                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1234	                        placeholder="Estudiante, Profesor, etc." />
  1235	                    </div>
  1236	                  </div>
  1237	
  1238	                  <div>
  1239	                    <label className="block text-sm font-medium text-gray-700 mb-1">¿Por que deseas afiliarte? *</label>
  1240	                    <textarea name="motivo" value={formData.motivo} onChange={handleFormChange} required rows={3}
  1241	                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1242	                      placeholder="Cuéntanos tu motivacion para unirte..."></textarea>
  1243	                  </div>
  1244	
  1245	                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-bold">
  1246	                    <Mail className="w-5 h-5 mr-2" />
  1247	                    Enviar Solicitud de Afiliacion
  1248	                  </Button>
  1249	
  1250	                  <p className="text-center text-xs text-gray-500 mt-4">
  1251	                    Al enviar, se abrira tu correo con los datos. El correo se enviara a: fundacioncapitulounidosporlodh@gmail.com
  1252	                  </p>
  1253	                </form>
  1254	              )}
  1255	            </CardContent>
  1256	          </Card>
  1257	        </div>
  1258	      </section>
  1259	
  1260	      {/* Formatos Section */}
  1261	      <section id="formatos" className="py-20 bg-white">
  1262	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  1263	          <div className="text-center mb-16">
  1264	            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
  1265	              <FileText className="w-4 h-4 text-green-600 mr-2" />
  1266	              <span className="text-green-700 text-sm font-medium">Formatos y Documentos</span>
  1267	            </div>
  1268	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  1269	              Formatos
  1270	            </h2>
  1271	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
  1272	              Formularios y documentos oficiales para tramites y solicitudes
  1273	            </p>
  1274	          </div>
  1275	
  1276	          <div className="grid md:grid-cols-2 gap-6">
  1277	            {[ 
  1278	              {
  1279	                title: 'Solicitud de Capacitación',
  1280	                description: 'Formulario para solicitar talleres y capacitaciones',
  1281	                format: 'PDF',
  1282	                url: '/formatos/solicitud-capacitacion.pdf'
  1283	              },
  1284	              {
  1285	                title: 'Reporte de Violación de DDHH',
  1286	                description: 'Formato para reportar presuntas violaciones de derechos humanos',
  1287	                format: 'PDF',
  1288	                url: '/reporte-violacion-ddhh.pdf'
  1289	              },
  1290	              {
  1291	                title: 'Autorización de Uso de Imagen',
  1292	                description: 'Formulario para autorizar uso de imagen en eventos',
  1293	                format: 'PDF',
  1294	                url: '/formatos/autorizacion-imagen.pdf'
  1295	              },
  1296	              {
  1297	                title: 'Solicitud de Alianza',
  1298	                description: 'Formulario para solicitar alianza estratégica con nuestra fundación',
  1299	                format: 'PDF',
  1300	                url: '/formatos/solicitud-alianza.pdf'
  1301	              },
  1302	              {
  1303	                title: 'Carta de Compromiso',
  1304	                description: 'Formato de compromiso para voluntarios y colaboradores',
  1305	                format: 'PDF',
  1306	                url: '/formatos/carta-compromiso.pdf'
  1307	              },
  1308	              {
  1309	                title: 'Formato Derecho de Petición',
  1310	                description: 'Modelo para ejercer el derecho de petición constitucional',
  1311	                format: 'PDF',
  1312	                url: '/formato-derecho-peticion.pdf'
  1313	              },
  1314	              {
  1315	                title: 'Formato Observación Procedimiento',
  1316	                description: 'Formato para observar procedimientos administrativos',
  1317	                format: 'PDF',
  1318	                url: '/formato-observacion-procedimiento.pdf'
  1319	              },
  1320	              {
  1321	                title: 'Modelo de Petición',
  1322	                description: 'Ejemplo práctico de derecho de petición',
  1323	                format: 'PDF',
  1324	                url: '/modelo-de-peticion-1.pdf'
  1325	              },
  1326	              {
  1327	                title: 'Modelo de Tutela',
  1328	                description: 'Ejemplo práctico de acción de tutela',
  1329	                format: 'PDF',
  1330	                url: '/modelo-de-tutela-1.pdf'
  1331	              }
  1332	            ].map((item, index) => (
  1333	              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
  1334	                <CardContent className="p-6">
  1335	                  <div className="flex items-center justify-between">
  1336	                    <div className="flex items-start space-x-4">
  1337	                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
  1338	                        <FileText className="w-6 h-6 text-green-600" />
  1339	                      </div>
  1340	                      <div>
  1341	                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
  1342	                        <p className="text-gray-600 text-sm">{item.description}</p>
  1343	                      </div>
  1344	                    </div>
  1345	                    <a href={item.url} target="_blank" rel="noopener noreferrer">
  1346	                      <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 flex-shrink-0 ml-4">
  1347	                        <Download className="w-4 h-4 mr-1" />
  1348	                        {item.format}
  1349	                      </Button>
  1350	                    </a>
  1351	                  </div>
  1352	                </CardContent>
  1353	              </Card>
  1354	            ))}
  1355	          </div>
  1356	        </div>
  1357	      </section>
  1358	
  1359	      {/* Capacítate Section */}
  1360	      <section id="capacitate" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
  1361	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  1362	          <div className="text-center mb-16">
  1363	            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
  1364	              <GraduationCap className="w-4 h-4 text-yellow-600 mr-2" />
  1365	              <span className="text-yellow-700 text-sm font-medium">Capacitación</span>
  1366	            </div>
  1367	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  1368	              Capacítate
  1369	            </h2>
  1370	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
  1371	              Accede a cursos gratuitos sobre derechos humanos y desarrolla tus habilidades
  1372	            </p>
  1373	          </div>
  1374	
  1375	          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  1376	            {/* Curso Unidos por los Derechos Humanos */}
  1377	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
  1378	              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
  1379	                <img 
  1380	                  src="/logo-uhr.png" 
  1381	                  alt="Unidos por los Derechos Humanos" 
  1382	                  className="w-32 h-32 object-contain"
  1383	                />
  1384	              </div>
  1385	              <CardContent className="p-6">
  1386	                <h3 className="text-xl font-bold text-gray-900 mb-2">Curso de Derechos Humanos</h3>
  1387	                <p className="text-gray-600 text-sm mb-4">
  1388	                  Curso gratuito de Unidos por los Derechos Humanos. Aprende sobre los 30 derechos humanos fundamentales.
  1389	                </p>
  1390	                <div className="flex items-center justify-between">
  1391	                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
  1392	                  <a
1393	                    href="https://www.unidosporlosderechoshumanos.mx/" 
  1394	                    target="_blank" 
  1395	                    rel="noopener noreferrer"
  1396	                  >
  1397	                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
  1398	                      <ExternalLink className="w-4 h-4 mr-1" />
  1399	                      Acceder
  1400	                    </Button>
  1401	                  </a>
  1402	                </div>
  1403	              </CardContent>
  1404	            </Card>
  1405	
  1406	            {/* Curso El Camino a la Felicidad */}
  1407	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
  1408	              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
  1409	                <img 
  1410	                  src="/logo-camino-felicidad.jpg" 
  1411	                  alt="El Camino a la Felicidad" 
  1412	                  className="w-32 h-32 object-contain rounded-lg"
  1413	                />
  1414	              </div>
  1415	              <CardContent className="p-6">
  1416	                <h3 className="text-xl font-bold text-gray-900 mb-2">Curso El Camino a la Felicidad</h3>
  1417	                <p className="text-gray-600 text-sm mb-4">
  1418	                  Curso basado en el libro de L. Ron Hubbard. Descubre los preceptos para vivir una vida feliz.
  1419	                </p>
  1420	                <div className="flex items-center justify-between">
  1421	                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
  1422	                  <a 
  1423	                    href="https://www.elcaminoalafelicidad.mx/course/" 
  1424	                    target="_blank" 
  1425	                    rel="noopener noreferrer"
  1426	                  >
  1427	                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
  1428	                      <ExternalLink className="w-4 h-4 mr-1" />
  1429	                      Acceder
  1430	                    </Button>
  1431	                  </a>
  1432	                </div>
  1433	              </CardContent>
  1434	            </Card>
  1435	
  1436	            {/* Curso Mundo Libre de Drogas */}
  1437	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
  1438	              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
  1439	                <img 
  1440	                  src="/logo-drug-free-world.jpg" 
  1441	                  alt="Mundo Libre de Drogas" 
  1442	                  className="w-32 h-32 object-contain rounded-lg"
  1443	                />
  1444	              </div>
  1445	              <CardContent className="p-6">
  1446	                <h3 className="text-xl font-bold text-gray-900 mb-2">Curso sobre Drogas</h3>
  1447	                <p className="text-gray-600 text-sm mb-4">
  1448	                  Información veraz sobre los efectos de las drogas. Curso educativo gratuito.
  1449	                </p>
  1450	                <div className="flex items-center justify-between">
  1451	                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
  1452	                  <a 
  1453	                    href="https://www.vidasindrogas.org/" 
  1454	                    target="_blank" 
  1455	                    rel="noopener noreferrer"
  1456	                  >
  1457	                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
  1458	                      <ExternalLink className="w-4 h-4 mr-1" />
  1459	                      Acceder
  1460	                    </Button>
  1461	                  </a>
  1462	                </div>
  1463	              </CardContent>
  1464	            </Card>
  1465	
  1466	            {/* Campus Virtual OPS/OMS */}
  1467	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
  1468	              <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center">
  1469	                <div className="text-center text-white">
  1470	                  <Globe className="w-20 h-20 mx-auto mb-2" />
  1471	                  <p className="text-lg font-bold">OPS/OMS</p>
  1472	                </div>
  1473	              </div>
  1474	              <CardContent className="p-6">
  1475	                <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Virtual OPS/OMS</h3>
  1476	                <p className="text-gray-600 text-sm mb-4">
  1477	                  Cursos gratuitos de la Organización Panamericana de la Salud sobre derechos humanos y salud.
  1478	                </p>
  1479	                <div className="flex items-center justify-between">
  1480	                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
  1481	                  <a 
  1482	                    href="https://campus.paho.org/" 
  1483	                    target="_blank" 
  1484	                    rel="noopener noreferrer"
  1485	                  >
  1486	                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
  1487	                      <ExternalLink className="w-4 h-4 mr-1" />
  1488	                      Acceder
  1489	                    </Button>
  1490	                  </a>
  1491	                </div>
  1492	              </CardContent>
  1493	            </Card>
  1494	
  1495	            {/* Aula Virtual Defensoría del Pueblo */}
  1496	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
  1497	              <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
  1498	                <div className="text-center text-white">
  1499	                  <Scale className="w-20 h-20 mx-auto mb-2" />
  1500	                  <p className="text-lg font-bold">Defensoría del Pueblo</p>
  1501	                </div>
  1502	              </div>
  1503	              <CardContent className="p-6">
  1504	                <h3 className="text-xl font-bold text-gray-900 mb-2">Aula Virtual Defensoría del Pueblo</h3>
  1505	                <p className="text-gray-600 text-sm mb-4">
  1506	                  Plataforma gratuita de la Defensoría del Pueblo de Colombia para capacitación en derechos humanos.
  1507	                </p>
  1508	                <div className="flex items-center justify-between">
  1509	                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
  1510	                  <a 
  1511	                    href="https://www.defensoria.gov.co/" 
  1512	                    target="_blank" 
  1513	                    rel="noopener noreferrer"
  1514	                  >
  1515	                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
  1516	                      <ExternalLink className="w-4 h-4 mr-1" />
  1517	                      Acceder
  1518	                    </Button>
  1519	                  </a>
  1520	                </div>
  1521	              </CardContent>
  1522	            </Card>
  1523	
  1524	            {/* Campus Virtual ESAP */}
  1525	            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md overflow-hidden">
  1526	              <div className="h-48 bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center">
  1527	                <div className="text-center text-white">
  1528	                  <GraduationCap className="w-20 h-20 mx-auto mb-2" />
  1529	                  <p className="text-lg font-bold">ESAP</p>
  1530	                </div>
  1531	              </div>
  1532	              <CardContent className="p-6">
  1533	                <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Virtual ESAP</h3>
  1534	                <p className="text-gray-600 text-sm mb-4">
  1535	                  Escuela Superior de Administración Pública - Cursos gratuitos de formación en derechos humanos y administración pública.
  1536	                </p>
  1537	                <div className="flex items-center justify-between">
  1538	                  <span className="text-sm text-green-600 font-medium">Gratuito</span>
  1539	                  <a 
  1540	                    href="https://sirecec4.esap.edu.co/inicio" 
  1541	                    target="_blank" 
  1542	                    rel="noopener noreferrer"
  1543	                  >
  1544	                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
  1545	                      <ExternalLink className="w-4 h-4 mr-1" />
  1546	                      Acceder
  1547	                    </Button>
  1548	                  </a>
  1549	                </div>
  1550	              </CardContent>
  1551	            </Card>
  1552	          </div>
  1553	        </div>
  1554	      </section>
  1555	
  1556	      {/* Recursos Section */}
  1557	      <section id="recursos" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
  1558	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  1559	          <div className="text-center mb-16">
  1560	            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-4">
  1561	              <BookOpen className="w-4 h-4 text-yellow-400 mr-2" />
  1562	              <span className="text-yellow-400 text-sm font-medium">Recursos</span>
  1563	            </div>
  1564	            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
  1565	              Recursos Oficiales
  1566	            </h2>
  1567	            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
  1568	              Accede a los recursos oficiales de Unidos por los Derechos Humanos internacional
  1569	            </p>
  1570	          </div>
  1571	
  1572	          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  1573	            {[
  1574	              {
  1575	                title: 'Sitio Web Oficial',
  1576	                description: 'humanrights.com',
  1577	                url: 'https://www.humanrights.com',
  1578	                icon: Globe
  1579	              },
  1580	              {
  1581	                title: 'YouTube',
  1582	                description: 'Videos oficiales',
  1583	                url: 'https://www.youtube.com/@HumanRights',
  1584	                icon: Video
  1585	              },
  1586	              {
  1587	                title: 'Materiales Educativos',
  1588	                description: 'Descargas oficiales',
  1589	                url: 'https://www.humanrights.com/resources/',
  1590	                icon: Download
  1591	              },
  1592	              {
  1593	                title: 'Cursos en Línea',
  1594	                description: 'Capacitación gratuita',
  1595	                url: 'https://www.humanrights.com/course/',
  1596	                icon: GraduationCap
  1597	              }
  1598	            ].map((resource, index) => (
  1599	              <a 
  1600	                key={index}
  1601	                href={resource.url}
  1602	                target="_blank"
  1603	                rel="noopener noreferrer"
  1604	                className="block"
  1605	              >
  1606	                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-colors h-full">
  1607	                  <CardContent className="p-6 text-center">
  1608	                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
  1609	                      <resource.icon className="w-7 h-7 text-white" />
  1610	                    </div>
  1611	                    <h3 className="text-lg font-bold text-white mb-1">{resource.title}</h3>
  1612	                    <p className="text-blue-200 text-sm">{resource.description}</p>
  1613	                  </CardContent>
  1614	                </Card>
  1615	              </a>
  1616	            ))}
  1617	          </div>
  1618	        </div>
  1619	      </section>
  1620	
  1621	      {/* Contact Section */}
  1622	      <section id="contacto" className="py-20 bg-white">
  1623	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  1624	          <div className="text-center mb-16">
  1625	            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
  1626	              <Phone className="w-4 h-4 text-blue-600 mr-2" />
  1627	              <span className="text-blue-700 text-sm font-medium">Contacto</span>
  1628	            </div>
  1629	            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  1630	              Contáctanos
  1631	            </h2>
  1632	            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
  1633	              Estamos aquí para ayudarte. Escríbenos o visítanos en nuestras oficinas.
  1634	            </p>
  1635	          </div>
  1636	
  1637	          <div className="grid lg:grid-cols-2 gap-12">
  1638	            {/* Contact Info */}
  1639	            <div className="space-y-8">
  1640	              <Card className="border-0 shadow-md">
  1641	                <CardContent className="p-6">
  1642	                  <div className="flex items-start space-x-4">
  1643	                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
  1644	                      <Mail className="w-6 h-6 text-blue-600" />
  1645	                    </div>
  1646	                    <div>
  1647	                      <h3 className="font-bold text-gray-900 mb-1">Correo Electrónico</h3>
  1648	                      <p className="text-gray-600">fundacioncapitulounidosporlodh@gmail.com</p>
  1649	                    </div>
  1650	                  </div>
  1651	                </CardContent>
  1652	              </Card>
  1653	
  1654	              <Card className="border-0 shadow-md">
  1655	                <CardContent className="p-6">
  1656	                  <div className="flex items-start space-x-4">
  1657	                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
  1658	                      <Phone className="w-6 h-6 text-green-600" />
  1659	                    </div>
  1660	                    <div>
  1661	                      <h3 className="font-bold text-gray-900 mb-1">Teléfono / WhatsApp</h3>
  1662	                      <p className="text-gray-600">301 673 3819</p>
  1663	                      <a 
  1664	                        href="https://wa.me/573016733819" 
  1665	                        target="_blank" 
  1666	                        rel="noopener noreferrer"
  1667	                        className="inline-flex items-center text-green-600 hover:text-green-700 text-sm mt-1 font-medium"
  1668	                      >
  1669	                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
  1670	                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  1671	                        </svg>
  1672	                        Escribir por WhatsApp
  1673	                      </a>
  1674	                    </div>
  1675	                  </div>
  1676	                </CardContent>
  1677	              </Card>
  1678	
  1679	              <Card className="border-0 shadow-md">
  1680	                <CardContent className="p-6">
  1681	                  <div className="flex items-start space-x-4">
  1682	                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
  1683	                      <MapPin className="w-6 h-6 text-red-600" />
  1684	                    </div>
  1685	                    <div>
  1686	                      <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
  1687	                      <p className="text-gray-600">Santiago de Cali, Valle del Cauca, Colombia</p>
  1688	                    </div>
  1689	                  </div>
  1690	                </CardContent>
  1691	              </Card>
  1692	
  1693	              <Card className="border-0 shadow-md">
  1694	                <CardContent className="p-6">
  1695	                  <div className="flex items-start space-x-4">
  1696	                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
  1697	                      <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
  1698	                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  1699	                      </svg>
  1700	                    </div>
  1701	                    <div>
  1702	                      <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
  1703	                      <a href="https://www.instagram.com/capitulounidosddhhcol/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">@capitulounidosddhhcol</a>
  1704	                    </div>
  1705	                  </div>
  1706	                </CardContent>
  1707	              </Card>
  1708	
  1709	              <Card className="border-0 shadow-md">
  1710	                <CardContent className="p-6">
  1711	                  <div className="flex items-start space-x-4">
  1712	                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
  1713	                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
  1714	                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  1715	                      </svg>
  1716	                    </div>
  1717	                    <div>
  1718	                      <h3 className="font-bold text-gray-900 mb-1">TikTok</h3>
  1719	                      <a href="https://www.tiktok.com/@capitulounidosddhhcol" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">@capitulounidosddhhcol</a>
  1720	                    </div>
  1721	                  </div>
  1722	                </CardContent>
  1723	              </Card>
  1724	
  1725	              {/* QR Codes */}
  1726	              <div className="grid grid-cols-2 gap-4">
  1727	                <Card className="border-0 shadow-md">
  1728	                  <CardContent className="p-4 text-center">
  1729	                    <a href="https://www.instagram.com/capitulounidosddhhcol/" target="_blank" rel="noopener noreferrer">
  1730	                      <img 
  1731	                        src="/qr-instagram.jpg" 
  1732	                        alt="QR Instagram" 
  1733	                        className="w-24 h-24 mx-auto mb-2 hover:scale-105 transition-transform"
  1734	                      />
  1735	                    </a>
  1736	                    <p className="text-sm text-gray-600">Instagram</p>
  1737	                  </CardContent>
  1738	                </Card>
  1739	                <Card className="border-0 shadow-md">
  1740	                  <CardContent className="p-4 text-center">
  1741	                    <a href="https://www.tiktok.com/@capitulounidosddhhcol" target="_blank" rel="noopener noreferrer">
  1742	                      <img 
  1743	                        src="/qr-tiktok.png" 
  1744	                        alt="QR TikTok" 
  1745	                        className="w-24 h-24 mx-auto mb-2 hover:scale-105 transition-transform"
  1746	                      />
  1747	                    </a>
  1748	                    <p className="text-sm text-gray-600">TikTok</p>
  1749	                  </CardContent>
  1750	                </Card>
  1751	              </div>
  1752	            </div>
  1753	
  1754	            {/* Contact Form */}
  1755	            <Card className="border-0 shadow-lg">
  1756	              <CardContent className="p-8">
  1757	                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
  1758	                <form className="space-y-4">
  1759	                  <div>
  1760	                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
  1761	                    <input 
  1762	                      type="text" 
  1763	                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1764	                      placeholder="Tu nombre"
  1765	                    />
  1766	                  </div>
  1767	                  <div>
  1768	                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
  1769	                    <input 
  1770	                      type="email" 
  1771	                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1772	                      placeholder="tu@email.com"
  1773	                    />
  1774	                  </div>
  1775	                  <div>
  1776	                    <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
  1777	                    <input 
  1778	                      type="text" 
  1779	                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1780	                      placeholder="¿Sobre qué nos quieres contactar?"
  1781	                    />
  1782	                  </div>
  1783	                  <div>
  1784	                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
  1785	                    <textarea 
  1786	                      rows={4}
  1787	                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  1788	                      placeholder="Escribe tu mensaje aquí..."
  1789	                    ></textarea>
  1790	                  </div>
  1791	                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3">
  1792	                    <Mail className="w-5 h-5 mr-2" />
  1793	                    Enviar mensaje
  1794	                  </Button>
  1795	                </form>
  1796	              </CardContent>
  1797	            </Card>
  1798	          </div>
  1799	        </div>
  1800	      </section>
  1801	
  1802	      {/* Footer */}
  1803	      <footer className="bg-gray-900 text-white py-12">
  1804	        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  1805	          <div className="grid md:grid-cols-4 gap-8 mb-8">
  1806	            <div className="md:col-span-2">
  1807	              <div className="flex items-center space-x-3 mb-4">
  1808	                <img 
  1809	                  src="/logo-uhr.png" 
  1810	                  alt="United for Human Rights" 
  1811	                  className="w-12 h-12 object-contain"
  1812	                />
  1813	                <div>
  1814	                  <h3 className="font-bold text-lg">Unidos por los Derechos Humanos</h3>
  1815	                  <p className="text-gray-400 text-sm">Capítulo Colombia</p>
  1816	                </div>
  1817	              </div>
  1818	              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
  1819	                Capítulo autorizado en Colombia de Unidos por los Derechos Humanos, 
  1820	                organización internacional dedicada a la educación sobre derechos humanos.
  1821	              </p>
  1822	            </div>
  1823	            <div>
  1824	              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
  1825	              <ul className="space-y-2 text-sm text-gray-400">
  1826	                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">Inicio</button></li>
  1827	                <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-white transition-colors">Nosotros</button></li>
  1828	                <li><button onClick={() => scrollToSection('alianzas')} className="hover:text-white transition-colors">Alianzas</button></li>
  1829	                <li><button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">Recursos</button></li>
  1830	                <li><button onClick={() => scrollToSection('contacto')} className="hover:text-white transition-colors">Contacto</button></li>
  1831	              </ul>
  1832	            </div>
  1833	            <div>
  1834	              <h4 className="font-bold mb-4">Recursos Oficiales</h4>
  1835	              <ul className="space-y-2 text-sm text-gray-400">
  1836	                <li><a href="https://www.humanrights.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">humanrights.com</a></li>
  1837	                <li><a href="https://www.humanrights.com/course/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Curso en línea</a></li>
  1838	                <li><a href="https://www.humanrights.com/resources/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Materiales</a></li>
  1839	              </ul>
  1840	            </div>
  1841	          </div>
  1842	          <div className="border-t border-gray-800 pt-8 text-center">
  1843	            <p className="text-gray-500 text-sm">
  1844	              © {new Date().getFullYear()} Unidos por los Derechos Humanos - Capítulo Colombia. 
  1845	              Todos los derechos reservados.
  1846	            </p>
  1847	          </div>
  1848	        </div>
  1849	      </footer>
  1850	    </div>
  1851	  )
  1852	}
  1853	
  1854	export default App
