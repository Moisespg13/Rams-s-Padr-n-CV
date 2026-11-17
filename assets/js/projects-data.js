window.PROJECTS_DATA = [
  {
    "id": "nasa-deimos-simulator",
    "title": "Deimos: Asteroid Simulator - NASA Space Apps Challenge",
    "category": "software",
    "categoryLabel": "Simulación & CAD",
    "date": "Octubre 2025",
    "institution": "NASA Space Apps Challenge (Equipo AstroIUA)",
    "subject": "Desafío Internacional 'Meteor Madness'",
    "authors": "Padrón Gentile Ramsés, Sosa Tomás, Espinosa Leonel, Farraté Milagros, Vesco Genaro",
    "pdfFile": "assets/docs/nasa-space-apps-deimos-simulator.pdf",
    "summary": "Plataforma web interactiva desarrollada para el hackathon internacional de la NASA, donde obtuvimos el 5to puesto. Grafica órbitas de asteroides cercanos a la Tierra (NEOs/PHAs) y calcula consecuencias de impacto en una zona seleccionada.",
    "highlights": [
      "Integración directa con las APIs abiertas de NASA JPL: Small-Body Database Query (SBDB Query) y SBDB API",
      "Visualizador 3D para graficar la órbita del asteroide seleccionado junto a las órbitas de los planetas interiores",
      "Física de impactos: cálculo de energía cinética liberada, diámetro de cráter, radiación térmica y efectos sísmicos según distancia",
      "Selector sobre mapa terrestre para simular la zona de impacto y estimar consecuencias",
      "Visualización interactiva y análisis educativo de parámetros orbitales de asteroides potencialmente peligrosos (PHAs)"
    ],
    "specs": [
      {
        "label": "Front-End",
        "val": "React, Tailwind CSS, TypeScript, Vite"
      },
      {
        "label": "Back-End",
        "val": "Python, FastAPI, Pandas, NumPy"
      },
      {
        "label": "APIs de Datos",
        "val": "NASA JPL Small-Body Database (SBDB Query & SBDB API)"
      },
      {
        "label": "Simulación",
        "val": "Cálculo orbital y estimación de consecuencias de impacto en la Tierra"
      },
      {
        "label": "Entorno & Herramientas",
        "val": "VS Code, Node.js"
      }
    ],
    "tags": [
      "NASA",
      "Hackaton",
      "desarrollo web",
      "python"
    ],
    "heroImage": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p4_5.png",
    "galleryTitle": "Capturas de la Interfaz y Simulación",
    "gallery": [
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p4_5.png",
        "caption": "Pantalla principal de Deimos"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p3_4.png",
        "caption": "Visualizador 3D de órbitas del sistema de solar y del asteroide seleccionado"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p4_6.png",
        "caption": "Creación/Selección de asteroide y zona de impacto"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p5_7.png",
        "caption": "Resultados de consecuencias físicas"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p7_8.png",
        "caption": "Resultados de población y daños"
      }
    ]
  },
  {
    "id": "stm32-wavegenerator",
    "title": "Generador de Ondas en STM32",
    "category": "embebidos",
    "categoryLabel": "Sistemas Embebidos",
    "date": "Febrero 2025",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Circuitos Digitales III",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/stm32-generador-ondas.pdf",
    "summary": "Desarrollo completo de un generador de ondas programado en lenguaje C sobre un microcontrolador STM32, con Display y controles analógicos en tiempo real para seleccionar tipo de onda, amplitud y frecuencia.",
    "highlights": [
      "Realización digital de señales mediante timers y cálculo matemático para síntesis de formas de onda (senoidal, triangular y cuadrada)",
      "Calibración de linealidad y corrección matemática de errores en frecuencia y amplitud con ajuste lineal",
      "Control analógico en tiempo real mediante muestreo con ADC de potenciómetros para frecuencia y amplitud",
      "Comunicación por protocolo I2C con display LCD 16x2 para visualización instantánea de parámetros",
      "Fabricación en placa experimental con conexionado de pulsador, potenciómetros y bornes de salida soldados"
    ],
    "specs": [
      {
        "label": "Microcontrolador",
        "val": "STM32F072B Discovery (ARM Cortex-M0)"
      },
      {
        "label": "Periféricos & Protocolos",
        "val": "DAC 12-bit, Timers (TIM6), ADC, GPIO, bus I2C"
      },
      {
        "label": "Componentes",
        "val": "Display LCD 16x2 con adaptador I2C, 2x potenciómetros, pulsador, placa experimental"
      },
      {
        "label": "Lenguaje & Firmware",
        "val": "Lenguaje C, librerías STM32 HAL"
      },
      {
        "label": "Software & Herramientas",
        "val": "STM32CubeIDE, Excel (calibración), Osciloscopio y equipo de soldadura de estaño"
      }
    ],
    "tags": [
      "STM32",
      "Lenguaje C",
      "I2C",
      "Timers",
      "DAC",
      "Sistemas embebidos"
    ],
    "heroImage": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p15_15.jpeg",
    "galleryTitle": "Prototipo y Señales en Osciloscopio",
    "gallery": [
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p15_15.jpeg",
        "caption": "Proyecto completo: placa STM32F072B con display LCD, controles analógicos y cableado"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p6_2.jpeg",
        "caption": "Onda cuadrada a la salida del DAC medida en osciloscopio"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p6_3.jpeg",
        "caption": "Onda triangular a la salida del DAC medida en osciloscopio"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p6_4.jpeg",
        "caption": "Onda senoidal a la salida del DAC medida en osciloscopio"
      }
    ]
  },
  {
    "id": "dsp-filtro-audio",
    "title": "Filtro Digital FIR de Audio en Tiempo Real con Raspberry Pi en C",
    "category": "embebidos",
    "categoryLabel": "Sistemas Embebidos",
    "date": "Diciembre 2024",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Procesamiento Digital de Señales",
    "authors": "Padrón Ramsés, Bronenberg Pedro",
    "pdfFile": "assets/docs/dsp-filtro-audio-fir.pdf",
    "summary": "Diseño, cálculo y programación en lenguaje C de un filtro digital FIR pasa-banda de audio (350 Hz - 3000 Hz) en tiempo real sobre Raspberry Pi 3, incluyendo etapas analógicas antialias y de reconstrucción.",
    "highlights": [
      "Cálculo analítico y síntesis de coeficientes para filtro digital FIR pasa-banda de voz (350 Hz - 3000 Hz) mediante T-Filter",
      "Diseño, simulación y montaje de etapa analógica antialias activa pasabajos (Fc = 4 kHz) en LTspice",
      "Implementación del algoritmo de convolución discreta en lenguaje C sobre Linux embebido en Raspberry Pi 3",
      "Acondicionamiento y filtrado de señal de audio en tiempo real con adquisición por tarjeta USB y driver ALSA",
      "Validación experimental en laboratorio mediante generador de funciones y osciloscopio digital"
    ],
    "specs": [
      {
        "label": "Plataforma de Cómputo",
        "val": "Raspberry Pi 3 Model B (Linux / Raspberry Pi OS)"
      },
      {
        "label": "Hardware de Audio",
        "val": "Tarjeta de audio USB (ADC/DAC de audio, driver ALSA)"
      },
      {
        "label": "Etapas Analógicas",
        "val": "Filtro antialias activo (Fc = 4 kHz) y filtro de reconstrucción"
      },
      {
        "label": "Algoritmo DSP",
        "val": "Filtro digital FIR pasa-banda (350 Hz - 3000 Hz)"
      },
      {
        "label": "Lenguaje & Software",
        "val": "Lenguaje C (GCC), T-Filter, LTspice"
      },
      {
        "label": "Instrumental",
        "val": "Generador de funciones y osciloscopio digital"
      }
    ],
    "tags": [
      "DSP",
      "Filtros",
      "FIR",
      "Raspberry Pi",
      "Lenguaje C",
      "Matlab",
      "Conversores AD/DA",
      "Audio"
    ],
    "heroImage": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p5_2.png",
    "galleryTitle": "Diseño y Validaciones en Laboratorio",
    "gallery": [
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p5_2.png",
        "caption": "Diseño de respuesta en frecuencia y coeficientes del filtro FIR en T-Filter"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p6_3.png",
        "caption": "Esquemático del filtro antialias analógico activo en LTspice"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p6_4.jpeg",
        "caption": "Medición en osciloscopio del filtro antialias para frecuencias menores a la de corte Fc"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p11_19.jpeg",
        "caption": "Medición en osciloscopio del sistema completo en banda de paso (350 Hz - 2300 Hz)"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p10_17.jpeg",
        "caption": "Medición en osciloscopio del filtrado y atenuación en frecuencias fuera de banda (< 350 Hz)"
      }
    ]
  },
  {
    "id": "microondas-filtro-2g4",
    "title": "Filtro de Líneas Acopladas Microstrip 2.4 GHz en FR-4",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Noviembre 2024",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Microondas",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/microondas-filtro-lineas-acopladas.pdf",
    "summary": "Diseño analítico, cálculo en MATLAB, simulación electromagnética 3D en CST Studio Suite, fabricación física en PCB FR-4 y caracterización con Analizador de Redes Vectorial (VNA) de un filtro pasabanda de microondas.",
    "highlights": [
      "Diseño analítico de filtro pasabanda de líneas acopladas paralelas de orden N = 3 para 2.4 GHz",
      "Cálculo de impedancias de modo par e impar (Z0e, Z0o) y dimensiones microstrip con MATLAB RF Toolbox",
      "Modelado electromagnético tridimensional y simulación de parámetros de dispersión S11 y S21 en CST Studio Suite",
      "Fabricación física en placa de circuito impreso FR-4 con plano de masa y soldadura de conectores coaxiales SMA",
      "Caracterización experimental con Analizador de Redes Vectorial (VNA), verificando frecuencia de resonancia en 2.35 GHz"
    ],
    "specs": [
      {
        "label": "Frecuencia Central",
        "val": "2.4 GHz (Banda ISM) - Medida: 2.35 GHz"
      },
      {
        "label": "Topología Microstrip",
        "val": "Líneas paralelas acopladas canónicas (Orden N = 3)"
      },
      {
        "label": "Sustrato PCB",
        "val": "FR-4 (εr = 4.4, espesor h = 1.6 mm)"
      },
      {
        "label": "Conectores & Puertos",
        "val": "Conectores SMA hembra de 50 Ω"
      },
      {
        "label": "Software EDA / CAD",
        "val": "CST Studio Suite (3D EM), MATLAB RF Toolbox"
      },
      {
        "label": "Instrumental",
        "val": "Analizador de Redes Vectorial (VNA) y Analizador de Espectros"
      }
    ],
    "tags": [
      "Microondas",
      "Filtros",
      "RF",
      "Microstrip",
      "CST",
      "Matlab",
      "2.4GHz"
    ],
    "heroImage": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p8_10.jpeg",
    "galleryTitle": "Placa Fabricada, Simulación 3D y Mediciones",
    "gallery": [
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p6_4.png",
        "caption": "Filtro en MATLAB"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p7_6.png",
        "caption": "Filtro en CST"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p7_7.png",
        "caption": "Medición en CST"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p8_9.png",
        "caption": "Filtro sin los SMA"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p8_10.jpeg",
        "caption": "Filtro con los conectores (sostenido con la mano)"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p10_13.jpeg",
        "caption": "1ra medición con el VNA"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p10_14.jpeg",
        "caption": "2da medición con el VNA"
      }
    ]
  },
  {
    "id": "potencia-dcdc",
    "title": "Conversor DC/DC Elevador Push-Pull (24V a 48V)",
    "category": "potencia",
    "categoryLabel": "Electricidad, Control e Instrumentación",
    "date": "Octubre 2024",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Electrónica de Potencia",
    "authors": "Padrón Ramsés, Bronenberg Pedro",
    "pdfFile": "assets/docs/potencia-conversor-dcdc.pdf",
    "summary": "Diseño, cálculo analítico, bobinado de componentes magnéticos, simulación circuital, ruteo de PCBs en Altium Designer y fabricación física de un conversor conmutado elevador Push-Pull regulado con integrado SG3525.",
    "highlights": [
      "Cálculo y bobinado manual de transformador elevador Push-Pull en núcleo de ferrita tipo E E25/13/7 con toma media",
      "Diseño y bobinado manual de inductor de filtro de salida (bobina de choque) en núcleo de ferrita E20/10/6",
      "Diseño de esquemáticos y layout de PCBs en Altium Designer, con fabricación en placas de FR4",
      "Implementación de control PWM con integrado SG3525 y lazo cerrado de regulación de tensión con amplificador de error",
      "Ensayos en laboratorio bajo carga nominal de 46 Ω (~50 W) y 92 Ω, con variaciones de entrada de 19V a 29V"
    ],
    "specs": [
      {
        "label": "Topología Conmutada",
        "val": "Conversor Push-Pull elevador aislado"
      },
      {
        "label": "Circuito de Control",
        "val": "Modulador PWM SG3525 con amplificador de error diferencial"
      },
      {
        "label": "Componentes Magnéticos",
        "val": "Transformador en núcleo E25/13/7 e inductor de filtro en núcleo E20/10/6"
      },
      {
        "label": "Tensiones de Trabajo",
        "val": "Entrada: 19V - 29V DC (Nominal 24V) | Salida: 48V DC regulada"
      },
      {
        "label": "Software EDA / CAD",
        "val": "Altium Designer (esquemático y ruteo de PCB)"
      },
      {
        "label": "Instrumental",
        "val": "Osciloscopio digital, fuente de alimentación continua, banco de cargas"
      }
    ],
    "tags": [
      "Potencia",
      "Push-Pull",
      "Transformador",
      "Bobinado",
      "Altium",
      "Eagle",
      "PWM",
      "Realimentación"
    ],
    "heroImage": "assets/images/projects/potencia-dcdc/potencia-dcdc-p9_5.jpeg",
    "galleryTitle": "Prototipo, PCB y Mediciones en Laboratorio",
    "gallery": [
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p9_5.jpeg",
        "caption": "Placa PCB de potencia fabricada en FR-4 con transformador montado"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p7_2.jpeg",
        "caption": "Transformador elevador bobinado a mano con núcleo de ferrita E25/13/7"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p8_3.jpeg",
        "caption": "Bobina de choque (inductor de filtro) bobinada con núcleo de ferrita E20/10/6"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p16_26.png",
        "caption": "Esquema de control en LT Spice"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p17_30.png",
        "caption": "Diseño y ruteo de la placa del circuito de control PWM en Altium Designer"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p10_7.jpeg",
        "caption": "Medición de los 48V de salida en osciloscopio"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p18_31.jpeg",
        "caption": "Medición en osciloscopio: respuesta del conversor a lazo cerrado con entrada de 24V (Vout = 48.6V)"
      }
    ]
  },
  {
    "id": "rf-oscilador-colpitts",
    "title": "Diseño y Fabricación de Oscilador Colpitts de RF",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Febrero 2024",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Electrónica III",
    "authors": "Padrón Ramsés, Bronenberg Pedro",
    "pdfFile": "assets/docs/rf-oscilador-colpitts.pdf",
    "summary": "Diseño en AWR Design Environment, simulación circuital y fabricación física en sustrato FR-4 de un oscilador Colpitts de RF para operar a 200 MHz utilizando un transistor BFS17A.",
    "highlights": [
      "Diseño del circuito oscilador en AWR Design Environment para operar a una frecuencia de 200 MHz en banda VHF",
      "Polarización en continua del transistor BFS17A para un punto de trabajo de Vce = 5V e Ic = 2mA con fuente de 10V",
      "Simulación a lazo abierto en AWR con ganancia de 7.6 dB y cambio de fase en 200 MHz en el test de oscilación",
      "Simulación a lazo cerrado con análisis espectral (pico en 223.6 MHz) y señal senoidal temporal de salida (218.6 MHz, Vpp > 1V)",
      "Diseño del layout en AWR, fabricación física del circuito en placa FR-4 y verificación de polarización DC con multímetro (Vce = 4.68V)"
    ],
    "specs": [
      {
        "label": "Transistor de RF",
        "val": "BFS17A (BJT para VHF)"
      },
      {
        "label": "Frecuencia de Operación",
        "val": "200 MHz (diseño) / 218.6 MHz (simulación temporal)"
      },
      {
        "label": "Polarización DC",
        "val": "Vce = 5V, Ic = 2mA (Alimentación: 10V)"
      },
      {
        "label": "Topología",
        "val": "Oscilador Colpitts (Tanque LC)"
      },
      {
        "label": "Software EDA",
        "val": "AWR Design Environment (circuito, simulación y layout)"
      },
      {
        "label": "Sustrato PCB",
        "val": "FR-4 con componentes soldados"
      },
      {
        "label": "Instrumental",
        "val": "Multímetro digital y fuente de alimentación CC"
      }
    ],
    "tags": [
      "Oscilador",
      "RF",
      "VHF",
      "LC",
      "FR-4",
      "AWR"
    ],
    "heroImage": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p8_17.png",
    "galleryTitle": "Diseño, Layout y Simulaciones en AWR",
    "gallery": [
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p4_5.png",
        "caption": "Diseño del circuito a lazo abierto en AWR"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p5_7.png",
        "caption": "Simulación de módulo y fase a lazo abierto en AWR"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p5_8.png",
        "caption": "Diseño del circuito a lazo cerrado en AWR"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p6_10.png",
        "caption": "Simulación de espectro a lazo cerrado en AWR"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p7_14.png",
        "caption": "Simulación temporal de la señal senoidal de salida en AWR (218.6 MHz)"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p7_15.png",
        "caption": "Layout del Oscilador en AWR"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p8_17.png",
        "caption": "Oscilador fabricado en placa FR-4"
      }
    ]
  },
  {
    "id": "telecom-radioenlace",
    "title": "Proyecto de Radioenlace 10.5 GHz (Villa María – Taninga)",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Junio 2023",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Sistemas de Radioenlaces",
    "authors": "Padrón Ramsés, Bronenberg Pedro, González Maximiliano",
    "pdfFile": "assets/docs/telecom-proyecto-radioenlace-10ghz.pdf",
    "summary": "Diseño, cálculo y dimensionamiento de un sistema de radioenlaces de microondas de 16 tramos (17 estaciones) en la banda de 10.5 GHz entre Villa María y Taninga (Córdoba), con repetidores pasivos y modulación digital 32QAM.",
    "highlights": [
      "Diseño del trazado de 16 tramos con 14 estaciones activas, 2 repetidores pasivos Back-to-Back y 1 reflector pasivo en alta montaña",
      "Cálculo y trazado de perfiles topográficos con despeje del 100% de la 1° Zona de Fresnel (K=4/3 estándar y K=2/3 subestándar)",
      "Modelado de atenuación en espacio libre, absorción atmosférica y desvanecimiento severo por lluvia según recomendaciones ITU-R",
      "Cálculo de altura de torres, líneas de transmisión y dimensionamiento de antenas parabólicas de alta ganancia (HPX)",
      "Confiabilidad global calculada superior al 99.999% con modulación digital 32QAM sobre canal de 5 MHz"
    ],
    "specs": [
      {
        "label": "Banda de Frecuencia",
        "val": "10.5 GHz (10500 MHz - Microondas)"
      },
      {
        "label": "Equipamiento",
        "val": "Transceptores digitales Alcatel-Lucent 9500 MPR (ODU/IDU)"
      },
      {
        "label": "Topología de Red",
        "val": "17 estaciones (14 activas, 2 Back-to-Back, 1 reflector pasivo)"
      },
      {
        "label": "Modulación & Canal",
        "val": "Modulación digital 32QAM (Ancho de banda: 5 MHz)"
      },
      {
        "label": "Software de Cálculo",
        "val": "Radio Mobile (análisis topográfico) y Microsoft Excel (balance de enlace ITU-R)"
      },
      {
        "label": "Confiabilidad",
        "val": "Global calculada > 99.999%"
      }
    ],
    "tags": [
      "Radioenlaces",
      "Fresnel",
      "Antenas",
      "Back to Back",
      "Reflector",
      "Radiomobile",
      "Excel"
    ],
    "heroImage": "assets/images/projects/telecom-radioenlace/telecom-radioenlace-diagrama.png",
    "galleryTitle": "Cartografía, Perfiles Topográficos y Diagramas",
    "gallery": [
      {
        "src": "assets/images/projects/telecom-radioenlace/telecom-radioenlace-diagrama.png",
        "caption": "Diagrama general de enlace y topología de red (16 tramos y 17 estaciones)"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/telecom-radioenlace-recorrido.png",
        "caption": "Trazado cartográfico de los enlaces en la provincia de Córdoba en Radio Mobile"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/telecom-radioenlace-perfil.png",
        "caption": "Perfil topográfico de elevación del terreno y despeje de la 1° Zona de Fresnel"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/telecom-radioenlace-reflector.png",
        "caption": "Reflector pasivo para salvar el obstáculo topográfico en zona montañosa"
      }
    ]
  },
  {
    "id": "control-seguidor-linea",
    "title": "Modelado Cinemático y Simulación de Robot Seguidor de Línea",
    "category": "potencia",
    "categoryLabel": "Electricidad, Control e Instrumentación",
    "date": "Mayo 2023",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Control Digital de Procesos",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/control-digital-robot-linea-matlab.pdf",
    "summary": "Modelado cinemático diferencial con 3 grados de libertad, caracterización de servomotores y sensores ópticos, y diseño de lazo de control digital en MATLAB & Simulink. El sistema logró un seguimiento óptimo de pista mediante control PI, mientras que la acción derivativa del PID desestabilizó la trayectoria por la discretización de los sensores.",
    "highlights": [
      "Modelado cinemático diferencial con variables de estado: posición planar (X, Y) y orientación angular (phi)",
      "Caracterización electromecánica de servomotores HK15148 y modelado del arreglo frontal de 8 sensores ópticos CNY70",
      "Implementación del bloque de odometría para estimación continua de posición y función de detección de pista",
      "Diseño y simulación comparativa de controladores discretos P, PI y PID en lazo cerrado para pistas circular y cardioide",
      "Validación del control PI como estrategia óptima para superar ambas pistas, evidenciando que el control PID resultó ineficaz debido a la discretización espacial de los sensores"
    ],
    "specs": [
      {
        "label": "Modelo Cinemático",
        "val": "Tracción diferencial con 3 Grados de Libertad (X, Y, phi)"
      },
      {
        "label": "Actuadores Modelados",
        "val": "2 Servomotores de CC HK15148 modulados por PWM"
      },
      {
        "label": "Sensores Modelados",
        "val": "Arreglo frontal de 8 sensores ópticos infrarrojos reflectivos CNY70"
      },
      {
        "label": "Estrategias de Control",
        "val": "Controladores discretos P, PI (óptimo) y PID (inestable por discretización)"
      },
      {
        "label": "Software & Simulación",
        "val": "MATLAB & Simulink (diagramas de bloques dinámicos y lazo cerrado)"
      }
    ],
    "tags": [
      "Control Digital",
      "PID",
      "Simulink",
      "Matlab",
      "Simulación"
    ],
    "heroImage": "assets/images/projects/control-seguidor-linea/seguidor-linea-diagrama-bloques.png",
    "galleryTitle": "Diagrama de Bloques y Simulaciones de Control",
    "gallery": [
      {
        "src": "assets/images/projects/control-seguidor-linea/seguidor-linea-diagrama-bloques.png",
        "caption": "Diagrama de bloques del modelo en lazo cerrado en Simulink (Planta, Odometría, Sensores y Control)"
      },
      {
        "src": "assets/images/projects/control-seguidor-linea/seguidor-linea-simulacion-p.png",
        "caption": "Simulación con controlador Proporcional (Kp=50): seguimiento efectivo en pista circular pero con dificultades en la cardioide"
      },
      {
        "src": "assets/images/projects/control-seguidor-linea/seguidor-linea-simulacion-pi.png",
        "caption": "Simulación con controlador Proporcional Integral (Ki=30): respuesta óptima y seguimiento exitoso en ambas pistas"
      },
      {
        "src": "assets/images/projects/control-seguidor-linea/seguidor-linea-simulacion-pid.png",
        "caption": "Simulación con controlador PID (Kd=0.3): inestabilidad y pérdida de trayectoria debido a la discretización de los sensores"
      }
    ]
  },

  {
    "id": "rf-lna",
    "title": "Diseño de Amplificador de Bajo Ruido (LNA) para RF",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Junio 2022",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Electrónica III",
    "authors": "Padrón Ramsés, Bronenberg Pedro, Salvador Adrián",
    "pdfFile": "assets/docs/rf-amplificador-bajo-ruido-lna.pdf",
    "summary": "Diseño, análisis de estabilidad, adaptación de impedancias en Carta de Smith, fabricación en sustrato FR-4 y caracterización con Analizador de Redes de un amplificador de bajo ruido (LNA) a 2.4 GHz.",
    "highlights": [
      "Selección y polarización en DC de transistor bipolar de RF (Vce = 5V, Ie = 3mA) para mínima figura de ruido",
      "Análisis riguroso de estabilidad incondicional (factor de Rollet K > 1 y |Δ| < 1) mediante círculos de estabilidad",
      "Diseño de redes de adaptación de entrada y salida con líneas microstrip y stub radial usando Carta de Smith",
      "Fabricación física en circuito impreso FR-4 mediante método químico y soldadura de componentes de RF",
      "Medición experimental en laboratorio con Analizador de Redes Vectorial (frecuencia medida en 2.256 GHz)"
    ],
    "specs": [
      {
        "label": "Frecuencia de Trabajo",
        "val": "2.4 GHz (Frecuencia medida en laboratorio: 2.256 GHz)"
      },
      {
        "label": "Dispositivo Activo",
        "val": "Transistor BJT de RF de bajo ruido (polarizado a 5V / 3mA)"
      },
      {
        "label": "Criterio de Diseño",
        "val": "Factor de Rollet K > 1 (estabilidad incondicional), compromiso Fmin y Gmax"
      },
      {
        "label": "Redes de Adaptación",
        "val": "Líneas de transmisión microstrip y stub radial en Carta de Smith"
      },
      {
        "label": "Sustrato & Conectores",
        "val": "FR-4 con plano de masa y conectores coaxiales SMA hembra de 50 Ω"
      },
      {
        "label": "Instrumental",
        "val": "Analizador de Redes Vectorial (VNA), fuente de alimentación y multímetro"
      }
    ],
    "tags": [
      "RF",
      "2.4GHz",
      "LNA",
      "Amplificación",
      "Smith"
    ],
    "heroImage": "assets/images/projects/rf-lna/rf-lna-p16_41.jpeg",
    "galleryTitle": "Diseño, Placa Fabricada y Medición en VNA",
    "gallery": [
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p16_41.jpeg",
        "caption": "Placa PCB del amplificador LNA armada en FR-4 con componentes de RF y conectores SMA"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p15_38.png",
        "caption": "Diseño del layout de pistas microstrip del amplificador LNA"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p14_35.png",
        "caption": "Trayectoria de adaptación de impedancia y stub radial en Carta de Smith"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p14_36.png",
        "caption": "Simulación de parámetros S (reflexión S11 y ganancia S21) en la banda de 2.4 GHz"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p17_43.jpeg",
        "caption": "Medición experimental en Analizador de Redes Vectorial (VNA) con resonancia en 2.256 GHz"
      }
    ]
  },
  {
    "id": "rf-filtro-split",
    "title": "Diseño de Filtro Sintonizado con Split Capacitivo de RF",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Junio 2022",
    "institution": "Facultad de Ingeniería - CRUC IUA",
    "subject": "Electrónica III",
    "authors": "Padrón Ramsés, Bronenberg Pedro, Salvador Adrián",
    "pdfFile": "assets/docs/rf-filtro-split-capacitivo.pdf",
    "summary": "Cálculo analítico, simulación en Cadence AWR, fabricación en PCB FR-4 y caracterización con Analizador de Redes de un filtro pasabanda LC sintonizado con divisor capacitivo a 400 MHz.",
    "highlights": [
      "Diseño analítico de circuito sintonizado pasabanda LC de 2° orden centrado en 400 MHz (Banda UHF)",
      "Adaptación y transformación de impedancias mediante divisor split capacitivo a puertos de 50 Ω",
      "Simulación circuital completa de parámetros S en Cadence AWR Microwave Office",
      "Fabricación física en circuito impreso FR-4 mediante método químico y soldadura de componentes",
      "Medición experimental de selectividad en Analizador de Redes Vectorial (frecuencia medida en 383 MHz)"
    ],
    "specs": [
      {
        "label": "Frecuencia Central",
        "val": "Diseño: 400 MHz (UHF) | Medida en laboratorio: 383 MHz"
      },
      {
        "label": "Topología de Filtro",
        "val": "Filtro pasabanda sintonizado LC de 2° orden con alto factor Q"
      },
      {
        "label": "Acoplamiento & Adaptación",
        "val": "Split capacitivo (divisor capacitivo) adaptado a 50 Ω"
      },
      {
        "label": "Sustrato & Conectores",
        "val": "Placa FR-4 fabricada en laboratorio con conectores SMA"
      },
      {
        "label": "Software EDA / CAD",
        "val": "Cadence AWR Microwave Office (esquemático y simulación de parámetros S)"
      },
      {
        "label": "Instrumental",
        "val": "Analizador de Redes Vectorial (VNA), medidor LCR"
      }
    ],
    "tags": [
      "RF",
      "Filtros",
      "UHF",
      "AWR",
      "Split Capacitivo"
    ],
    "heroImage": "assets/images/projects/rf-filtro-split/rf-filtro-split-p9_18.jpeg",
    "galleryTitle": "Circuito Fabricado y Mediciones en VNA",
    "gallery": [
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p9_18.jpeg",
        "caption": "Circuito PCB del filtro sintonizado fabricado en FR-4 con componentes soldados"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p6_8.png",
        "caption": "Esquemático del filtro con split capacitivo en Cadence AWR Microwave Office"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p6_9.png",
        "caption": "Simulación de parámetros S (S11 y S21) en AWR mostrando centro en 400 MHz"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p10_20.jpeg",
        "caption": "Medición experimental de respuesta en frecuencia con el Analizador de Redes Vectorial"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p11_23.jpeg",
        "caption": "Detalle de la curva de transmisión S21 en pantalla del VNA (pico medido en 383 MHz)"
      }
    ]
  }
];
