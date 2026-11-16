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
    "summary": "Plataforma web interactiva desarrollada para el hackathon internacional de la NASA, que simula órbitas de asteroides cercanos a la Tierra (NEOs/PHAs) y calcula física de impacto.",
    "highlights": [
      "Integración de datos en tiempo real desde la API del Small-Body Database (SBDB) del JPL/NASA",
      "Visualizador interactivo 3D del sistema solar y propagación de órbitas de asteroides",
      "Motor de física de impacto: cálculo de energía cinética liberada, diámetro de cráter y onda de choque",
      "Selector interactivo de punto de impacto sobre mapa terrestre interactivo",
      "Desarrollo de software y modelado de datos para concientización pública y divulgación científica"
    ],
    "specs": [
      {
        "label": "Evento",
        "val": "NASA Space Apps Challenge"
      },
      {
        "label": "Equipo",
        "val": "AstroIUA"
      },
      {
        "label": "Datos",
        "val": "NASA JPL Small-Body Database (SBDB)"
      },
      {
        "label": "Modelado",
        "val": "Mecánica orbital, Física de colisiones planetarias"
      }
    ],
    "tags": [
      "NASA Hackathon",
      "Astrofísica",
      "Mecánica Orbital",
      "Simulación Web",
      "APIs NASA JPL",
      "Física de Impactos"
    ],
    "heroImage": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p4_5.png",
    "gallery": [
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p4_5.png",
        "caption": "Pantalla principal de Deimos: visualizador interactivo del sistema solar"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p3_4.png",
        "caption": "Visualizador 3D de órbitas de asteroides potencialmente peligrosos (PHAs)"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p4_6.png",
        "caption": "Simulación y selección de coordenadas de impacto terrestre"
      },
      {
        "src": "assets/images/projects/nasa-deimos-simulator/nasa-deimos-simulator-p5_7.png",
        "caption": "Cálculo de consecuencias físicas: cráter, radiación térmica y sismicidad"
      }
    ]
  },
  {
    "id": "stm32-wavegenerator",
    "title": "Generador de Ondas de Funciones con STM32 ARM Cortex-M",
    "category": "embebidos",
    "categoryLabel": "Sistemas Embebidos",
    "date": "Febrero 2025",
    "institution": "Facultad de Ingeniería",
    "subject": "Circuitos Digitales III",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/stm32-generador-ondas.pdf",
    "summary": "Desarrollo completo de un generador de funciones digital programable con microcontrolador STM32F072B Discovery, display LCD 16x2 y controles analógicos en tiempo real para la cátedra de Circuitos Digitales III.",
    "highlights": [
      "Síntesis digital directa de señales analógicas (Senoidal, Triangular, Cuadrada) usando DAC interno de 12 bits y Timers",
      "Muestreo de potenciómetros mediante ADC para control continuo y suave de frecuencia y amplitud",
      "Desarrollo de librería de interfaz de bajo nivel para display alfanumérico LCD 16x2 en C",
      "Calibración de linealidad y corrección matemática de errores en frecuencia y amplitud",
      "Fabricación de placa de expansión con pulsadores, potenciómetros y conectores de salida"
    ],
    "specs": [
      {
        "label": "Microcontrolador",
        "val": "STM32F072B (ARM Cortex-M0)"
      },
      {
        "label": "Periféricos clave",
        "val": "DAC 12-bit, Timers de alta resolución, ADC, GPIO"
      },
      {
        "label": "Formas de onda",
        "val": "Senoidal, Triangular, Cuadrada"
      },
      {
        "label": "Interfaz de usuario",
        "val": "Display LCD 16x2 + 2x Potenciómetros + Pulsador"
      },
      {
        "label": "Lenguaje & Herramientas",
        "val": "Lenguaje C / STM32CubeIDE / Osciloscopio"
      }
    ],
    "tags": [
      "STM32",
      "ARM Cortex",
      "Lenguaje C",
      "DAC & ADC",
      "LCD 16x2",
      "Firmware",
      "Osciloscopio"
    ],
    "heroImage": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p15_15.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p15_15.jpeg",
        "caption": "Sistema completo funcionando con la placa STM32, display y controles"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p14_13.jpeg",
        "caption": "Detalle del conexionado y placa de expansión cableada"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p11_10.jpeg",
        "caption": "Interfaz LCD 16x2 mostrando onda, amplitud y frecuencia en tiempo real"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p6_2.jpeg",
        "caption": "Onda cuadrada sintetizada en DAC capturada en osciloscopio"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p6_3.jpeg",
        "caption": "Onda triangular a la salida del DAC"
      },
      {
        "src": "assets/images/projects/stm32-wavegenerator/stm32-wavegenerator-p6_4.jpeg",
        "caption": "Onda senoidal con alta pureza espectral"
      }
    ]
  },
  {
    "id": "dsp-filtro-audio",
    "title": "Filtro Digital FIR de Audio en Tiempo Real con Raspberry Pi en C",
    "category": "embebidos",
    "categoryLabel": "Sistemas Embebidos",
    "date": "Diciembre 2024",
    "institution": "Facultad de Ingeniería",
    "subject": "Procesamiento Digital de Señales",
    "authors": "Padrón Ramsés, Bronenberg Pedro",
    "pdfFile": "assets/docs/dsp-filtro-audio-fir.pdf",
    "summary": "Sistema embebido de procesamiento de señales de audio en tiempo real implementando un filtro digital FIR en lenguaje C sobre Raspberry Pi, con etapas analógicas antialias y de reconstrucción.",
    "highlights": [
      "Diseño y cálculo analítico de filtro digital FIR pasa-banda para voz humana (350 Hz - 3000 Hz)",
      "Acondicionamiento de señal con filtro analógico Antialias activo Sallen-Key diseñado en LTSpice",
      "Implementación de algoritmo de convolución discreta optimizado en C sobre Linux embebido",
      "Filtrado y eliminación de ruido fuera de banda audible en tiempo real",
      "Validación en laboratorio con generador de funciones, osciloscopio y análisis espectral"
    ],
    "specs": [
      {
        "label": "Plataforma",
        "val": "Raspberry Pi (Linux Embebido) en C"
      },
      {
        "label": "Tipo de Filtro",
        "val": "FIR Pasa-Banda (350 Hz - 3000 Hz)"
      },
      {
        "label": "Etapa de Entrada",
        "val": "Micrófono + Filtro Antialias activo Sallen-Key"
      },
      {
        "label": "Etapa de Salida",
        "val": "Filtro de reconstrucción + Amplificador + Parlante"
      },
      {
        "label": "Validación",
        "val": "LTSpice, Osciloscopio, Analizador de Espectro"
      }
    ],
    "tags": [
      "DSP",
      "Filtros FIR",
      "Raspberry Pi",
      "Lenguaje C",
      "Audio en Tiempo Real",
      "LTSpice",
      "Sallen-Key"
    ],
    "heroImage": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p6_4.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p6_4.jpeg",
        "caption": "Prototipo de la etapa analógica antialias y acondicionamiento en protoboard"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p10_17.jpeg",
        "caption": "Montaje de pruebas del sistema DSP completo en laboratorio"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p7_6.jpeg",
        "caption": "Medición de respuesta en frecuencia con generador de señales y osciloscopio"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p7_7.jpeg",
        "caption": "Verificación de atenuación en banda de rechazo"
      },
      {
        "src": "assets/images/projects/dsp-filtro-audio/dsp-filtro-audio-p11_19.jpeg",
        "caption": "Comportamiento del filtro de audio en el rango 350Hz - 2300Hz"
      }
    ]
  },
  {
    "id": "microondas-filtro-2g4",
    "title": "Filtro de Líneas Acopladas Microstrip 2.4 GHz en FR-4",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Noviembre 2024",
    "institution": "Facultad de Ingeniería",
    "subject": "Microondas",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/microondas-filtro-lineas-acopladas.pdf",
    "summary": "Diseño, simulación electromagnética 3D en CST Studio Suite y MATLAB, fabricación física en PCB FR-4 y caracterización con Analizador de Redes Vectorial (VNA) para la cátedra de Microondas.",
    "highlights": [
      "Diseño analítico de filtro pasabanda de orden 3 con impedancias de modo par e impar",
      "Cálculo y optimización de dimensiones geométricas de líneas acopladas en MATLAB RF Toolbox",
      "Modelado electromagnético 3D y simulación de parámetros S (S11 reflexión y S21 transmisión) en CST Studio Suite",
      "Fabricación física en circuito impreso sustrato FR-4 con conectores coaxiales SMA de 50Ω",
      "Medición experimental en laboratorio con Analizador de Redes Vectorial (VNA) y Analizador de Espectros"
    ],
    "specs": [
      {
        "label": "Frecuencia Central (f0)",
        "val": "2.4 GHz (Banda ISM)"
      },
      {
        "label": "Orden del Filtro",
        "val": "Orden 3 (Chebyshev / Par-Impar)"
      },
      {
        "label": "Sustrato",
        "val": "FR-4 (εr=4.4, h=1.6mm)"
      },
      {
        "label": "Impedancia de puertos",
        "val": "50 Ω (Conectores SMA)"
      },
      {
        "label": "Herramientas",
        "val": "CST Studio Suite, MATLAB RF, VNA"
      }
    ],
    "tags": [
      "Microondas",
      "Líneas Microstrip",
      "CST Studio Suite",
      "MATLAB RF Toolbox",
      "VNA",
      "Analizador de Espectro",
      "FR-4"
    ],
    "heroImage": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p8_10.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p8_10.jpeg",
        "caption": "Filtro de microstrip fabricado en placa FR-4 con conectores SMA"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p6_4.png",
        "caption": "Modelado y simulación electromagnética 3D en CST Studio Suite"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p9_11.jpeg",
        "caption": "Medición de coeficiente de reflexión S11 en Analizador de Redes Vectorial (VNA)"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p9_12.jpeg",
        "caption": "Segunda medición de parámetros S en el laboratorio de RF"
      },
      {
        "src": "assets/images/projects/microondas-filtro-2g4/microondas-filtro-2g4-p10_13.jpeg",
        "caption": "Medición de respuesta en frecuencia en Analizador de Espectros"
      }
    ]
  },
  {
    "id": "potencia-dcdc",
    "title": "Conversor DC/DC Elevador Push-Pull (24V a 48V)",
    "category": "potencia",
    "categoryLabel": "Electricidad, Control e Instrumentación",
    "date": "Octubre 2024",
    "institution": "Facultad de Ingeniería",
    "subject": "Electrónica de Potencia",
    "authors": "Padrón Ramsés, Bronenberg Pedro",
    "pdfFile": "assets/docs/potencia-conversor-dcdc.pdf",
    "summary": "Diseño, cálculo analítico, simulación y fabricación física de un convertidor conmutado elevador DC/DC de 24V a 48V en topología Push-Pull con control de lazo cerrado para la cátedra de Electrónica de Potencia.",
    "highlights": [
      "Cálculo y bobinado manual de transformador de potencia toroidal con núcleo de ferrita",
      "Cálculo y diseño de bobina de choque e inductancia de filtrado para corriente continua",
      "Diseño completo del PCB en software EDA y fabricación física de la placa",
      "Generador de modulación PWM y circuito de realimentación para regulación precisa de tensión",
      "Ensayos experimentales con cargas resistivas de 92Ω y 46Ω, y variaciones de entrada de 19V a 29V"
    ],
    "specs": [
      {
        "label": "Topología",
        "val": "Push-Pull aislada de potencia"
      },
      {
        "label": "Tensión de Entrada (Vin)",
        "val": "24 VDC (rango dinámico 19V - 29V)"
      },
      {
        "label": "Tensión de Salida (Vout)",
        "val": "48 VDC regulada"
      },
      {
        "label": "Control",
        "val": "PWM con lazo de realimentación"
      },
      {
        "label": "Carga de ensayo",
        "val": "46 Ω / 92 Ω (potencia nominal comprobada)"
      }
    ],
    "tags": [
      "Electrónica de Potencia",
      "Topología Push-Pull",
      "Diseño PCB",
      "Transformadores de Ferrita",
      "Control PWM",
      "Osciloscopio"
    ],
    "heroImage": "assets/images/projects/potencia-dcdc/potencia-dcdc-p9_5.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p9_5.jpeg",
        "caption": "Placa PCB fabricada con transformador y componentes montados"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p19_35.jpeg",
        "caption": "Banco de ensayos en laboratorio con fuentes y cargas resistivas"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p19_36.jpeg",
        "caption": "Montaje del convertidor y medición con instrumental"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p18_31.jpeg",
        "caption": "Medición de señales de conmutación PWM y tensión en osciloscopio"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p18_33.jpeg",
        "caption": "Forma de onda de salida y rizado bajo carga de 46Ω"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p7_2.jpeg",
        "caption": "Detalle del transformador toroidal bobinado"
      },
      {
        "src": "assets/images/projects/potencia-dcdc/potencia-dcdc-p8_3.jpeg",
        "caption": "Bobina de choque fabricada"
      }
    ]
  },
  {
    "id": "rf-oscilador-colpitts",
    "title": "Diseño y Fabricación de Oscilador Colpitts de RF",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Febrero 2024",
    "institution": "Facultad de Ingeniería",
    "subject": "Electrónica III",
    "authors": "Padrón Ramsés, Bronenberg Pedro",
    "pdfFile": "assets/docs/rf-oscilador-colpitts.pdf",
    "summary": "Cálculo analítico, simulación, diseño de PCB y fabricación física de un oscilador senoidal de alta frecuencia en configuración Colpitts, con validación de criterio de Barkhausen y estabilidad.",
    "highlights": [
      "Diseño de red tanque LC resonante con divisor capacitivo de realimentación (C1/C2)",
      "Verificación analítica del criterio de Barkhausen para inicio y sostenimiento de oscilación",
      "Polarización y desacoplo de RF para máxima estabilidad espectral y mínima deriva térmica",
      "Fabricación física de PCB y soldado de componentes de precisión",
      "Medición de forma de onda, frecuencia de oscilación y contenido armónico en osciloscopio y analizador de espectro"
    ],
    "specs": [
      {
        "label": "Topología",
        "val": "Oscilador Colpitts (Tanque LC)"
      },
      {
        "label": "Realimentación",
        "val": "Divisor capacitivo (C1 / C2)"
      },
      {
        "label": "Forma de onda",
        "val": "Senoidal pura de RF"
      },
      {
        "label": "Fabricación",
        "val": "PCB fabricado y caracterizado"
      }
    ],
    "tags": [
      "Oscilador Colpitts",
      "Radiofrecuencia",
      "Criterio de Barkhausen",
      "Tanque LC",
      "Diseño PCB",
      "Osciloscopio"
    ],
    "heroImage": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p8_17.png",
    "gallery": [
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p8_17.png",
        "caption": "Medición de oscilación en osciloscopio digital de laboratorio"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p8_18.png",
        "caption": "Medición de estabilidad de frecuencia y análisis armónico"
      },
      {
        "src": "assets/images/projects/rf-oscilador-colpitts/rf-oscilador-colpitts-p6_10.png",
        "caption": "Esquemático y simulación de la red resonante"
      }
    ]
  },
  {
    "id": "telecom-radioenlace",
    "title": "Proyecto de Radioenlace 10.5 GHz (Villa María – Taninga)",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Junio 2023",
    "institution": "Facultad de Ingeniería",
    "subject": "Sistemas de Radioenlaces",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/telecom-proyecto-radioenlace-10ghz.pdf",
    "summary": "Diseño y dimensionamiento de un radioenlace de microondas de 16 tramos (17 estaciones) en la banda de 10.5 GHz entre Villa María y Taninga (Córdoba), con equipos Alcatel-Lucent 9500 MPR, repetidores pasivos y modulación 32QAM.",
    "highlights": [
      "Diseño de enlace completo con 14 equipos activos y 3 estaciones pasivas (back-to-back y reflector en montaña)",
      "Cálculo y trazado de perfiles topográficos con despeje de la 1° Zona de Fresnel para distintos factores K",
      "Cálculo de atenuación en espacio libre, absorción atmosférica y desvanecimiento por lluvia",
      "Dimensionamiento de antenas parabólicas de alta ganancia (HPX) y cálculo de torres de transmisión",
      "Confiabilidad global alcanzada: 99.99938% con modulación 32QAM y canal de 5 MHz"
    ],
    "specs": [
      {
        "label": "Banda de Frecuencia",
        "val": "10.5 GHz (10500 MHz)"
      },
      {
        "label": "Equipos",
        "val": "Alcatel-Lucent 9500 MPR"
      },
      {
        "label": "Estaciones",
        "val": "17 (14 activas, 2 Back-to-Back, 1 reflector)"
      },
      {
        "label": "Modulación / Canal",
        "val": "32QAM (Ancho de banda: 5 MHz)"
      },
      {
        "label": "Confiabilidad",
        "val": "99.99938%"
      }
    ],
    "tags": [
      "Radioenlaces",
      "Microondas 10.5 GHz",
      "Zona de Fresnel",
      "Alcatel-Lucent",
      "Antenas Parabólicas",
      "Telecomunicaciones"
    ],
    "heroImage": "assets/images/projects/telecom-radioenlace/image44.png",
    "gallery": [
      {
        "src": "assets/images/projects/telecom-radioenlace/image44.png",
        "caption": "Diagrama general del radioenlace Villa María – Taninga"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/image28.png",
        "caption": "Perfil topográfico de enlace y despeje de Fresnel"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/image30.png",
        "caption": "Cálculo de cota de terreno y altura de antenas"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/image48.png",
        "caption": "Estudio de visibilidad directa y atenuación de tramo"
      },
      {
        "src": "assets/images/projects/telecom-radioenlace/image8.png",
        "caption": "Ubicación de repetidor pasivo en zona montañosa"
      }
    ]
  },
  {
    "id": "control-seguidor-linea",
    "title": "Modelado Cinemático y Simulación de Robot Seguidor de Línea",
    "category": "potencia",
    "categoryLabel": "Electricidad, Control e Instrumentación",
    "date": "Mayo 2023",
    "institution": "Facultad de Ingeniería",
    "subject": "Control Digital de Procesos",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/control-digital-robot-linea-matlab.pdf",
    "summary": "Modelado cinemático con 3 grados de libertad (posición planar y orientación angular), diseño de lazo de control digital y simulación dinámica completa en MATLAB para la cátedra de Control Digital de Procesos.",
    "highlights": [
      "Modelado cinemático diferencial con variables de estado de posición (X, Y) y orientación (phi)",
      "Diseño de lazo de control discreto para seguimiento de trayectoria contrastada",
      "Modelado de sensores ópticos infrarrojos y dinámica de actuadores servomotores",
      "Simulación de respuesta transitoria y estabilidad del sistema de control en MATLAB",
      "Proyecto de cátedra enfocado en la teoría de control y simulación matemática"
    ],
    "specs": [
      {
        "label": "Enfoque",
        "val": "Simulación y Modelado Matemático"
      },
      {
        "label": "Software",
        "val": "MATLAB / Simulink"
      },
      {
        "label": "Cinemática",
        "val": "Robot diferencial con 3 GDL (X, Y, phi)"
      },
      {
        "label": "Control",
        "val": "Control digital en lazo cerrado"
      }
    ],
    "tags": [
      "Control Digital",
      "Modelado Cinemático",
      "MATLAB",
      "Robótica Móvil",
      "Simulación"
    ],
    "heroImage": "assets/images/projects/control-seguidor-linea/control-seguidor-linea-p17_30.png",
    "gallery": [
      {
        "src": "assets/images/projects/control-seguidor-linea/control-seguidor-linea-p17_30.png",
        "caption": "Simulación de trayectoria del móvil en MATLAB"
      },
      {
        "src": "assets/images/projects/control-seguidor-linea/control-seguidor-linea-p18_33.png",
        "caption": "Evolución de las variables de estado y error de seguimiento"
      },
      {
        "src": "assets/images/projects/control-seguidor-linea/control-seguidor-linea-p10_15.png",
        "caption": "Esquema cinemático de los 3 grados de libertad"
      }
    ]
  },
  {
    "id": "senales-laboratorios",
    "title": "Modelado, Convolución y Series de Fourier en MATLAB",
    "category": "software",
    "categoryLabel": "Simulación & CAD",
    "date": "2023",
    "institution": "Facultad de Ingeniería",
    "subject": "Análisis de Señales y Sistemas",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/senales-sistemas-lab3-series-fourier.pdf",
    "summary": "Serie de prácticas de laboratorio sobre procesamiento computacional de señales: análisis en el dominio del tiempo y de la frecuencia, convolución discreta/continua y series de Fourier aplicadas a rectificadores y filtros RC.",
    "highlights": [
      "Modelado matemático y algorítmico de sistemas lineales e invariantes en el tiempo (LTI)",
      "Convolución continua y discreta con cálculo analítico validado mediante simulación numérica",
      "Descomposición armónica de señales periódicas mediante Series de Fourier",
      "Análisis espectral completo de un rectificador de onda completa acoplado a un filtro pasabajos RC",
      "Cálculo de coeficientes de Fourier teóricos vs FFT simulada en MATLAB"
    ],
    "specs": [
      {
        "label": "Software",
        "val": "MATLAB, SPFirst Toolbox"
      },
      {
        "label": "Conceptos clave",
        "val": "Sistemas LTI, Convolución, Series de Fourier, FFT"
      },
      {
        "label": "Aplicación",
        "val": "Filtrado analógico, Rectificación de onda completa"
      }
    ],
    "tags": [
      "MATLAB",
      "Señales y Sistemas",
      "Series de Fourier",
      "Convolución LTI",
      "Espectro Armónico"
    ],
    "heroImage": "assets/images/projects/senales-convolucion/senales-convolucion-p9_17.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/senales-convolucion/senales-convolucion-p9_17.jpeg",
        "caption": "Simulación de convolución en el dominio del tiempo"
      },
      {
        "src": "assets/images/projects/senales-convolucion/senales-convolucion-p10_20.jpeg",
        "caption": "Respuesta al impulso de sistemas continuos y discretos"
      },
      {
        "src": "assets/images/projects/senales-convolucion/senales-convolucion-p11_23.jpeg",
        "caption": "Evaluación gráfica interactiva en MATLAB"
      }
    ]
  },
  {
    "id": "tcem-adaptacion-awr",
    "title": "Adaptación de Impedancias en Microstrip con AWR",
    "category": "software",
    "categoryLabel": "Simulación & CAD",
    "date": "Noviembre 2022",
    "institution": "Facultad de Ingeniería",
    "subject": "Teoría de Campos Electromagnéticos (TCEM)",
    "authors": "Padrón Ramsés",
    "pdfFile": "assets/docs/tcem-adaptacion-impedancias-awr.pdf",
    "summary": "Cálculos analíticos, diseño en Carta de Smith y simulación en Cadence AWR de redes de adaptación de 150Ω a 50Ω a 2.4 GHz mediante transformadores de cuarto de onda (λ/4) y stubs en microtiras FR-4.",
    "highlights": [
      "Cálculo analítico de impedancia característica y longitud eléctrica en microstrip a 2.4 GHz",
      "Diseño de transformador de cuarto de onda (λ/4) con ancho de banda evaluado para |Γ| ≤ 0.1",
      "Diseño y cálculo con stubs (simple stub en circuito abierto y cortocircuito)",
      "Modelado circuital y simulación electromagnética en Cadence AWR Design Environment",
      "Comparación de respuesta en frecuencia, pérdidas de retorno (S11) y ancho de banda relativo"
    ],
    "specs": [
      {
        "label": "Frecuencia central",
        "val": "2.4 GHz"
      },
      {
        "label": "Transformación",
        "val": "150 Ω a 50 Ω (|Γ| ≤ 0.1)"
      },
      {
        "label": "Topologías",
        "val": "Transformador λ/4 y Stubs (abierto/corto)"
      },
      {
        "label": "Sustrato",
        "val": "FR-4 (εr=4.4, h=1.6256 mm)"
      },
      {
        "label": "Software",
        "val": "Cadence AWR Microwave Office, Carta de Smith"
      }
    ],
    "tags": [
      "AWR Microwave Office",
      "Microstrip",
      "Carta de Smith",
      "Stubs",
      "Transformador λ/4",
      "FR-4",
      "TCEM"
    ],
    "heroImage": "assets/images/projects/tcem-adaptacion-awr/tcem-p18_19.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/tcem-adaptacion-awr/tcem-p18_19.jpeg",
        "caption": "Carta de Smith con trayectoria de adaptación de impedancia"
      },
      {
        "src": "assets/images/projects/tcem-adaptacion-awr/tcem-p12_11.png",
        "caption": "Respuesta en frecuencia S11 en AWR con transformador λ/4"
      },
      {
        "src": "assets/images/projects/tcem-adaptacion-awr/tcem-p15_17.png",
        "caption": "Simulación de adaptación con stub en AWR"
      },
      {
        "src": "assets/images/projects/tcem-adaptacion-awr/tcem-p11_9.png",
        "caption": "Esquemático del transformador de λ/4 en microstrip"
      },
      {
        "src": "assets/images/projects/tcem-adaptacion-awr/tcem-p14_14.png",
        "caption": "Circuito de adaptación con simple stub"
      }
    ]
  },
  {
    "id": "rf-lna",
    "title": "Diseño de Amplificador de Bajo Ruido (LNA) para RF",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Junio 2022",
    "institution": "Facultad de Ingeniería",
    "subject": "Electrónica III",
    "authors": "Bronenberg Pedro, Salvador Adrián, Padrón Ramsés",
    "pdfFile": "assets/docs/rf-amplificador-bajo-ruido-lna.pdf",
    "summary": "Diseño, análisis de estabilidad, adaptación de impedancias en Carta de Smith y caracterización de un amplificador de bajo ruido (LNA) para etapas front-end de receptores de RF.",
    "highlights": [
      "Selección y polarización en DC de transistor de RF de alta frecuencia",
      "Análisis riguroso de estabilidad incondicional (criterio de Rollet K > 1 y |Δ| < 1) con círculos de estabilidad",
      "Compromiso entre mínima figura de ruido (Fmin) y máxima ganancia mediante círculos de ruido constante",
      "Diseño de redes de adaptación de impedancia de entrada y salida con componentes de RF",
      "Montaje experimental y medición de respuesta en frecuencia y ganancia"
    ],
    "specs": [
      {
        "label": "Tipo de Circuito",
        "val": "Amplificador de Bajo Ruido (LNA)"
      },
      {
        "label": "Análisis",
        "val": "Parámetros S, Círculos de Estabilidad, Carta de Smith"
      },
      {
        "label": "Criterio Estabilidad",
        "val": "Factor de Rollet K > 1"
      },
      {
        "label": "Adaptación",
        "val": "Redes L-Match de RF para Fmin y Gmax"
      }
    ],
    "tags": [
      "Radiofrecuencia",
      "LNA",
      "Carta de Smith",
      "Parámetros S",
      "Figura de Ruido",
      "Adaptación de Impedancias"
    ],
    "heroImage": "assets/images/projects/rf-lna/rf-lna-p17_43.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p17_43.jpeg",
        "caption": "Montaje experimental del amplificador LNA en banco de laboratorio"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p17_44.jpeg",
        "caption": "Conexión a instrumental de medición de RF"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p16_41.jpeg",
        "caption": "Circuito LNA soldado con componentes SMD y conectores coaxiales"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p11_26.png",
        "caption": "Círculos de estabilidad y adaptación en Carta de Smith"
      },
      {
        "src": "assets/images/projects/rf-lna/rf-lna-p8_17.png",
        "caption": "Círculos de figura de ruido y ganancia disponible"
      }
    ]
  },
  {
    "id": "rf-filtro-split",
    "title": "Diseño de Filtro Sintonizado con Split Capacitivo de RF",
    "category": "rf",
    "categoryLabel": "RF & Microondas",
    "date": "Junio 2022",
    "institution": "Facultad de Ingeniería",
    "subject": "Electrónica III",
    "authors": "Bronenberg Pedro, Padrón Ramsés, Salvador Adrián",
    "pdfFile": "assets/docs/rf-filtro-split-capacitivo.pdf",
    "summary": "Cálculo analítico, simulación y realización física de un filtro pasabanda LC sintonizado con acoplamiento por split capacitivo para adaptación óptima de impedancias en etapas de radio.",
    "highlights": [
      "Diseño de circuito sintonizado de alto factor de calidad (Q) para selección de canal de RF",
      "Transformación de impedancias mediante divisor capacitivo de entrada y salida",
      "Simulación de curva de respuesta en frecuencia, ancho de banda y atenuación fuera de banda",
      "Montaje y calibración experimental en placa de circuito impreso",
      "Medición de respuesta en frecuencia con generador de RF y detector de pico"
    ],
    "specs": [
      {
        "label": "Tipo",
        "val": "Filtro pasabanda sintonizado LC"
      },
      {
        "label": "Acoplamiento",
        "val": "Split capacitivo (Divisor C)"
      },
      {
        "label": "Adaptación",
        "val": "Transformación de impedancia a 50 Ω"
      },
      {
        "label": "Instrumentación",
        "val": "Generador de RF, Osciloscopio, Analizador"
      }
    ],
    "tags": [
      "Filtro RF",
      "Split Capacitivo",
      "Circuito Tanque LC",
      "Adaptación de Impedancias",
      "Factor Q"
    ],
    "heroImage": "assets/images/projects/rf-filtro-split/rf-filtro-split-p8_14.jpeg",
    "gallery": [
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p8_14.jpeg",
        "caption": "Prototipo del filtro sintonizado montado en placa"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p10_20.jpeg",
        "caption": "Medición de la curva de selectividad y respuesta en frecuencia"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p11_23.jpeg",
        "caption": "Banco de ensayos en laboratorio de comunicaciones"
      },
      {
        "src": "assets/images/projects/rf-filtro-split/rf-filtro-split-p8_15.jpeg",
        "caption": "Detalle de los inductores toroidales y capacitores de precisión"
      }
    ]
  }
];
