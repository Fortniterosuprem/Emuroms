// Base de datos universal de juegos por consola
const juegosDatabase = {
    // Nintendo 64
    'BanjoKazooie': {
        nombre: 'Banjo-Kazooie',
        consola: 'Nintendo 64',
        descripcion: '¡Banjo y Kazooie regresan en la aventura más grande jamás creada!\n\nAcompaña al oso Banjo y su novia Kazooie en una aventura épica llena de misterio, magia y diversión. Explora mundos mágicos, resuelve enigmas ingeniosos y enfrenta enemigos únicos mientras intentas rescatar a la hermana de Banjo, Tooty, de las garras de la bruja Gruntilda.\n\n★ Acción y aventura 3D de clase mundial\n★ 9 mundos diferentes para explorar\n★ Movimientos y habilidades especiales\n★ Modo multijugador para dos jugadores\n★ Gráficos espectaculares y música memorable',
        enlace: 'https://www.mediafire.com/file/7bwbefwwbw18xsr/Banjo-Kazooie_.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/BanjoKazooie.webp'
    },
    'doom_64': {
        nombre: 'Doom 64',
        consola: 'Nintendo 64',
        descripcion: 'El juego de disparos más intenso llega a Nintendo 64\n\nRegresa a los infiernos en esta versión mejorada y exclusiva de DOOM. Con gráficos 3D impresionantes, nuevos niveles y enemigos más aterradores, esta es la experiencia de disparos más visceral jamás creada.\n\n★ 32 niveles inéditos llenos de acción\n★ Enemigos más grandes y aterradores\n★ Nuevas armas devastadoras\n★ Modo multijugador para hasta 4 jugadores\n★ Atmósfera oscura y terrorífica sin igual\n★ Control 3D revolucionario',
        enlace: 'https://www.mediafire.com/file/rtl6vtiww9ays2b/Doom_64.rar/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/doom_64_dc.jpg'
    },
    'f-zero-x': {
        nombre: 'F-ZERO X',
        consola: 'Nintendo 64',
        descripcion: 'Carreras futuristas a velocidades inimaginables\n\nSiente la adrenalina en este juego de carreras futurista donde viajarás a velocidades extremas. Compite contra pilotos legendarios en los mejores circuitos del universo.\n\n★ Velocidad extrema sin límites\n★ 30 máquinas con características únicas\n★ 6 niveles de dificultad\n★ Modo Grand Prix épico\n★ 60 FPS sin parpadeos\n★ Modo multijugador competitivo',
        enlace: 'https://www.mediafire.com/file/g6qn06rw7mhjdpn/F-ZERO_X.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/f-zero-x_uyh9.jpg'
    },
    'MarioKart64': {
        nombre: 'Mario Kart 64',
        consola: 'Nintendo 64',
        descripcion: 'El legendario Mario Kart llega a 3D\n\nVuelve a la acción con Mario, Luigi, Bowser y tus personajes favoritos. Corre en pistas icónicas, usa potenciadores estratégicos y derrota a rivales en emocionantes carreras.\n\n★ Gráficos 3D espectaculares\n★ 16 circuitos únicos del universo Mario\n★ 8 personajes jugables\n★ Modos Grand Prix, Contrarreloj y Batalla\n★ Multijugador para 4 jugadores\n★ Atajos secretos y estrategias',
        enlace: 'https://www.mediafire.com/file/1oy2798x8m96om4/Mario_Kart_64.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/H2x1_N64_MarioKart64_image1600w.jpg'
    },
    'TheLegendOfZelda': {
        nombre: 'The Legend of Zelda: Ocarina of Time',
        consola: 'Nintendo 64',
        descripcion: 'El viaje épico que cambió los videojuegos\n\nEmprende una aventura legendaria con Link en el reino de Hyrule. Viaja en el tiempo, explora dungeons épicos y enfrenta a Ganondorf en esta obra maestra.\n\n★ Aventura épica de +30 horas\n★ 8 dungeons complejos y desafiantes\n★ Música memorable de Koji Kondo\n★ Sistema Z-targeting revolucionario\n★ Viaje temporal (Joven y Adulto)\n★ Un clásico definitivo que debe jugar todo gamer',
        enlace: 'https://www.mediafire.com/file/07750bpugtetxak/Legend_of_Zelda%252C_The_-_Ocarina_of_Time.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/MV5BNGVjMjgxZWEtYTUyNi00MTE3LWFjYWMtMjM3ZGQzMDQ3NGI3XkEyXkFqcGc@._V1_.jpg'
    },
    'tony_skate': {
        nombre: 'Tony Hawk\'s Pro Skater 2',
        consola: 'Nintendo 64',
        descripcion: 'Vive la leyenda del skateboarding\n\nAcompaña a Tony Hawk en su aventura de skateboarding profesional. Realiza trucos imposibles, construye combos épicos y compite en las mejores pistas del mundo.\n\n★ Jugador legendario Tony Hawk\n★ 10 ubicaciones diferentes para sesiones\n★ Cientos de trucos y combinaciones\n★ Modo carrera desafiante\n★ Multijugador con competencias\n★ Banda sonora de rock increíble',
        enlace: 'https://www.mediafire.com/file/uk1c4ktf5avzehl/Tony_Hawk%2527s_Pro_Skater_2.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/MV5BOTFiYzQ3YzMtZjg3OS00MDljLTlhNDQtNWE1ZjVmMzYwYmRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    '007': {
        nombre: '007: GoldenEye',
        consola: 'Nintendo 64',
        descripcion: 'Sé un agente secreto legendario\n\nVive como James Bond en esta emocionante aventura de espionaje. Infiltra fortalezas, desactiva bombas nucleares y enfrenta enemigos en esta obra maestra.\n\n★ Campaña de un jugador cinematográfica\n★ Bases secretas para explorar\n★ Arsenal variado de armas\n★ Modo multijugador épico para 4 jugadores\n★ Cinematografía basada en la película\n★ Acción de espías sin igual',
        enlace: 'https://www.mediafire.com/file/w4bt171vo10q504/007_-_GoldenEye.rar/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/MV5BZWIwYWJmNzQtNWZiNC00Njc3LWI2YTUtYTJiMDFlYTc2YWRhXkEyXkFqcGc@._V1_.jpg'
    },
    'DonkeyKong64': {
        nombre: 'Donkey Kong 64',
        consola: 'Nintendo 64',
        descripcion: 'La familia Kong en su aventura más épica\n\nAcompaña a Donkey Kong y su familia en una búsqueda legendaria por recuperar sus plátanos robados. Explora Isla Kongo, derrota a King K. Rool y desenmaraña los misterios de la isla.\n\n★ 5 personajes jugables únicos\n★ Isla Kongo gigante para explorar\n★ Puzzles complejos y desafiantes\n★ Jefe final épico\n★ Gráficos 3D revolucionarios\n★ Aventura de 20+ horas',
        enlace: 'https://www.mediafire.com/file/sl56swi7iyeqh4l/Donkey_Kong_64.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/SI_N64_DonkeyKong64_image1600w.jpg'
    },
    'PokemonStadium2': {
        nombre: 'Pokémon Stadium 2',
        consola: 'Nintendo 64',
        descripcion: 'Batalla a los Pokémon más poderosos\n\nLleva tus Pokémon al estadio y compite en batallas épicas contra otros entrenadores. Sube de rango, gana premios y demuestra que eres un maestro Pokémon.\n\n★ Batallas de Pokémon en 3D\n★ 251 Pokémon diferentes\n★ Múltiples estilos de batalla\n★ Modo Entrenador desafiante\n★ Multijugador para competencias\n★ Gráficos 3D impresionantes',
        enlace: 'https://www.mediafire.com/file/rldzaiz20823i55/Pokemon_Stadium.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/SI_N64_PokemonStadium2_image1600w.jpg'
    },
    'SuperMario64': {
        nombre: 'Super Mario 64',
        consola: 'Nintendo 64',
        descripcion: 'La aventura 3D que reinventó los videojuegos\n\nAcompaña a Mario en su primera aventura 3D a través del Castillo de la Princesa Peach. Salta, trepa y corre a través de mundos mágicos para derrotar a Bowser.\n\n★ Primeras plataformas en 3D verdaderas\n★ 15 mundos mágicos para explorar\n★ 120 estrellas para coleccionar\n★ Controles innovadores\n★ Jefe final épico\n★ Un antes y después en los videojuegos',
        enlace: 'https://www.mediafire.com/file/4csfuo6a3tj9ojd/Super_Mario_64.rar/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/SI_N64_SuperMario64.jpg'
    },
    'ZeldaMajorasMask': {
        nombre: 'The Legend of Zelda: Majora\'s Mask',
        consola: 'Nintendo 64',
        descripcion: 'Una aventura de 3 días que define una era\n\nLink tiene 3 días para salvar la región de Termina de la destrucción. Usa máscaras mágicas para obtener poderes especiales en este juego único e innovador.\n\n★ Mecánica de 3 días en bucle\n★ 24 máscaras especiales\n★ Transformaciones únicas\n★ Múltiples timelines\n★ Puzzles complejos\n★ Historia profunda y emotiva',
        enlace: 'https://www.mediafire.com/file/vkf6qb12aaeu090/Legend_of_Zelda%252C_The_-_Majora%2527s_Mask.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/SI_WiiVC_ZeldaMajorasMask_image1600w.jpg'
    },
    'Star-Fox-64': {
        nombre: 'Star Fox 64',
        consola: 'Nintendo 64',
        descripcion: 'Pilotos de élite en combate espacial\n\nToma los controles de tu nave Arwing en una batalla épica contra las fuerzas malignas de Andross. Vuela a través de asteroides, evita fuego enemigo y ejecuta maniobras imposibles.\n\n★ Acción aérea de ritmo rápido\n★ 5 rutas diferentes\n★ Jefes épicos\n★ Modo multijugador\n★ Rumble Pack incluido\n★ Gráficos dinámicos impresionantes',
        enlace: 'https://www.mediafire.com/file/pebd5rx1iahe0dg/Star_Fox_64.zip/file',
        video: 'imagenes/Nintendo_64.mp4',
        imagen: 'imagenes/juegos/nintendo64/Star-Fox-64-ahora-cuenta-con-un-Port-Nativo-de-PC-llamado-Starship-Guia-de-Instalacion.webp'
    },

    // Game Boy Advance
    'sonic': {
        nombre: 'Sonic Advance 3',
        consola: 'Game Boy Advance',
        descripcion: 'La velocidad de Sonic en tu bolsillo\n\nSonic regresa con su velocidad característica en Game Boy Advance. Juega como Sonic y sus amigos en aventuras rápidas y llenas de acción.\n\n★ Velocidad de Sonic redefinida\n★ Múltiples personajes jugables\n★ Niveles vibrantes y coloridos\n★ Enemigos desafiantes\n★ Música pegajosa de Sonic\n★ Acción portátil adictiva',
        enlace: 'https://www.mediafire.com/file/eu0ineezx3b1zt1/Super_Mario_Advance_3_-_Yoshi%2527s_Island.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/64624--sonic-advance-3.png'
    },
    'dvance-wars-2': {
        nombre: 'Advance Wars 2: Black Hole Rising',
        consola: 'Game Boy Advance',
        descripcion: 'Comanda ejércitos en batallas estratégicas por turnos\n\nToma el control de poderosos comandantes y sus unidades en este juego de estrategia por turnos. Planifica tus movimientos, ataca posiciones enemigas y conquista territorios en campañas épicas contra la misteriosa Black Hole.\n\n★ Estrategia por turnos clásica\n★ Múltiples unidades y comandantes únicos\n★ Campañas desafiantes con historia\n★ Modo multijugador competitivo\n★ Gráficos GBA coloridos y detallados\n★ Aventura estratégica de 20+ horas',
        enlace: 'https://www.mediafire.com/file/mwdfnbox98exm9u/Advance_Wars_2_-_Black_Hole_Rising.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/advance-wars-2---button-1559952588716.jpg'
    },
    'Fire emblem protagonistas': {
        nombre: 'Fire Emblem',        consola: 'Game Boy Advance',        descripcion: 'Tácticas épicas donde cada decisión cuenta\n\nLidera a un ejército de caballeros y magos en batallas estratégicas por turnos. Forma alianzas, desarrolla personajes y enfrenta decisiones morales que determinarán el destino de tu reino en esta saga legendaria.\n\n★ Sistema de batalla por turnos estratégico\n★ Personajes con historias profundas\n★ Sistema de clases y crecimiento\n★ Decisiones permanentes que afectan la historia\n★ Música épica y memorable\n★ Una de las sagas RPG más respetadas',
        enlace: 'https://www.mediafire.com/file/mjl6kjni5jcghs9/Fire_Emblem.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/Fire emblem protagonistas.jpg'
    },
    'MetroidFusion': {
        nombre: 'Metroid Fusion',
        consola: 'Game Boy Advance',
        descripcion: 'Una amenaza alienígena aterradora espera\n\nSamus enfrenta un nuevo peligro en la Estación Biológica de Zebes. Explora, resuelve puzzles y lucha contra la amenaza más aterradora jamás vista.\n\n★ Acción aventura de ciencia ficción\n★ Armas y trajes especiales\n★ Enemigos desafiantes\n★ Atmósfera intensa\n★ Gráficos GBA increíbles\n★ Historia de misterio profundo',
        enlace: 'https://www.mediafire.com/file/cdk11f5p154f56h/Metroid_Fusion.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/H2x1_GBA_MetroidFusion_image1280w.jpg'
    },
    'PokemonEmerald': {
        nombre: 'Pokémon Emerald',
        consola: 'Game Boy Advance',
        descripcion: 'La región de Hoenn en su máxima gloria\n\nAtrapa, entrena y evoluciona Pokémon en la región de Hoenn. Explora océanos, montañas y ciudades mientras compites en batallas épicas hacia la gloria de campeón.\n\n★ 386 Pokémon diferentes\n★ Región Hoenn con océanos\n★ Doble tipo de Pokémon\n★ Batalla Gym desafiantes\n★ Gráficos GBA mejorados\n★ Aventura RPG de 30+ horas',
        enlace: 'https://www.mediafire.com/file/xsyrnprn7uk5v8h/Pokemon_-_Emerald_Version.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/H2x1_GBA_PokemonEmerald_esES.jpg'
    },
    'SuperMarioWorld': {
        nombre: 'Super Mario Advance 2: Super Mario World',
        consola: 'Game Boy Advance',
        descripcion: 'Una aventura clásica en tu cartucho portátil\n\nAcompaña a Mario en su búsqueda para rescatar a la Princesa Peach de Bowser. Salta, vuela con capa y monta a Yoshi en esta aventura de plataformas clásica.\n\n★ 96 niveles de puro entretenimiento\n★ Yoshi como compañero fiel\n★ Capa voladora para Mario\n★ Múltiples secretos y atajos\n★ Gráficos hermosos\n★ Jugabilidad adictiva de 20+ horas',
        enlace: 'https://www.mediafire.com/file/amzwyizeld9bqgb/Super_Mario_Advance_2_-_Super_Mario_World.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/H2x1_SNES_SuperMarioWorld.jpg'
    },
    'legendofzelda': {
        nombre: 'The Legend of Zelda: A Link to the Past',
        consola: 'Game Boy Advance',
        descripcion: 'La aventura de Link continúa. Resuelve enigmas y derrota enemigos en esta joya de la GBA.',
        enlace: 'https://www.mediafire.com/file/kfre198zs8q6us8/The_Legend_Of_Zelda_-_A_Link_To_The_Past.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/legendofzelda-linktothepast-1639586882982.jpg'
    },
    'MarioAndLuigiSuperstar': {
        nombre: 'Mario & Luigi: Superstar Saga',
        consola: 'Game Boy Advance',
        descripcion: 'Hermanos en una aventura épica\n\nMario y Luigi se unen en este RPG hilarante. Viaja por el Reino Judía, realiza ataques combinados y enfrenta enemigos ridículos en esta aventura llena de humor.\n\n★ RPG hilarante y creativo\n★ Batalla con movimientos combinados\n★ Humor constante\n★ Aventura de 20+ horas\n★ Gráficos GBA coloridos\n★ Personajes memorables y cómicos',
        enlace: 'https://www.mediafire.com/file/4ufb2ovg5s80one/Mario_%2526_Luigi_-_Superstar_Saga.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/MarioAndLuigiSuperstarSagaGBACoverArtUS.jpg'
    },
    'yoshi island': {
        nombre: 'Super Mario Advance 3: Yoshi\'s Island',
        consola: 'Game Boy Advance',
        descripcion: 'La isla mágica de Yoshi en tu bolsillo\n\nProtege al pequeño Mario mientras Yoshi lo lleva en su espalda. Una aventura única con mecánicas innovadoras, huevos mágicos y un estilo artístico encantador en esta versión portátil del clásico.\n\n★ Mecánica de carga de Mario única\n★ Huevos con poderes especiales\n★ Estilo artístico lápiz innovador\n★ Niveles creativos y desafiantes\n★ Música mágica y pegajosa\n★ Una experiencia nostálgica inolvidable',
        enlace: 'https://www.mediafire.com/file/eu0ineezx3b1zt1/Super_Mario_Advance_3_-_Yoshi%2527s_Island.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/maxresdefault (1).jpg'
    },
    'TheLegendOfZeldaFourSwords': {
        nombre: 'The Legend of Zelda: A Link to the Past & Four Swords',
        consola: 'Game Boy Advance',
        descripcion: 'Dos aventuras clásicas en un solo cartucho. Juega solo o multijugador.',
        enlace: 'https://www.mediafire.com/file/2wjrpylp6s7kfez/Legend_of_Zelda%252C_The_-_A_Link_To_The_Past_Four_Swords.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/maxresdefault.jpg'
    },
    'Warioland': {
        nombre: 'Wario Land 4',
        consola: 'Game Boy Advance',
        descripcion: 'Controla al codicioso Wario en una aventura llena de sorpresas y transformaciones.',
        enlace: 'https://www.mediafire.com/file/ryhm7emkui4u4sh/Wario_Land_4.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/SI_WiiUVC_Warioland4_image1600w.jpg'
    },
    'WarioWare': {
        nombre: 'WarioWare Inc.',
        consola: 'Game Boy Advance',
        descripcion: 'Minijuegos rápidos y caóticos que pondrán a prueba tus reflejos.',
        enlace: 'https://www.mediafire.com/file/bc8umh99q04am8q/WarioWare_Inc.zip/file',
        video: 'imagenes/GBA.png',
        imagen: 'imagenes/juegos/gba/WarioWare_Gold_Cover.jpg'
    },

    // Nintendo DS
    'New_super_mario_bros': {
        nombre: 'New Super Mario Bros',
        consola: 'Nintendo DS',
        descripcion: 'Mario regresa a sus raíces\n\nEl icónico plomero regresa en esta aventura de plataformas que revive la magia de los juegos clásicos. Salta a través de niveles desafiantes y salva a la Princesa Peach.\n\n★ Plataformas clásicas modernizadas\n★ 8 mundos con múltiples niveles\n★ Poder-ups especiales\n★ Enemigos variados y desafiantes\n★ Gráficos 2D/3D innovadores\n★ Modo multijugador cooperativo',
        enlace: 'https://www.mediafire.com/file/9bkvg2p1hiendnj/New_Super_Mario_Bros.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/New_super_mario_bros.webp'
    },
    'animal crossing.': {
        nombre: 'Animal Crossing',
        consola: 'Nintendo DS',
        descripcion: 'Vive en un pueblo de animales antropomórficos. Decora tu casa y haz amigos.',
        enlace: 'https://www.mediafire.com/file/9manb28gmdhpraw/Animal_Crossing.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/animal crossing.jpg'
    },
    'castlevania': {
        nombre: 'Castlevania: Dawn of Sorrow',
        consola: 'Nintendo DS',
        descripcion: 'Acción y aventura gótica. Defiéndete contra criaturas de la noche en este juego de acción.',
        enlace: 'https://www.mediafire.com/file/6t63ipzc4qcsmju/Castlevania_-_Dawn_of_Sorrow.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/castlevania.jpg'
    },
    'Fantasy_IV': {
        nombre: 'Final Fantasy IV',
        consola: 'Nintendo DS',
        descripcion: 'Una epopeya RPG clásica remaster. Sigue a Cecil en su viaje de redención.',
        enlace: 'https://www.mediafire.com/file/95ryumbq46xe21w/Final_Fantasy_IV.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/Final_Fantasy_IV.jpg'
    },
    'mario-kart': {
        nombre: 'Mario Kart DS',
        consola: 'Nintendo DS',
        descripcion: 'Corre y compite en este emocionante juego de carreras para Nintendo DS.',
        enlace: 'https://www.mediafire.com/file/og4e8bqhiqhb9mo/Mario_Kart_DS.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/mario-kart-ds-nintendo-ds-screenshot-art-1.png'
    },
    'Metroid_Prime_Hunters_all_characters': {
        nombre: 'Metroid Prime Hunters',
        consola: 'Nintendo DS',
        descripcion: 'Acción en primera persona. Compite contra otros cazadores en un universo sci-fi.',
        enlace: 'https://www.mediafire.com/file/ffwnxhcffa4l9ln/Metroid_Prime_Hunters.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/Metroid_Prime_Hunters_all_characters.jpg'
    },
    'nintendogs': {
        nombre: 'Nintendogs: Best Friends',
        consola: 'Nintendo DS',
        descripcion: 'Cuida y entrena a tu perro virtual. Usa el micrófono para interactuar.',
        enlace: 'https://www.mediafire.com/file/klu3r087xn061ac/Nintendogs_-_Best_Friends.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/nintendogs.jpg'
    },
    'kirby': {
        nombre: 'Kirby: Power Paintbrush',
        consola: 'Nintendo DS',
        descripcion: 'Kirby usa el pincel para resolver acertijos. Un juego creativo y colorido.',
        enlace: 'https://www.mediafire.com/file/feqvz8oysq69cq3/Kirby_-_Power_Paintbrush.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/plantilla_portadas_kirby.jpeg'
    },
    'PokemonBlack': {
        nombre: 'Pokémon Black Version',
        consola: 'Nintendo DS',
        descripcion: 'Descubre la región de Unova con nuevos Pokémon en esta aventura épica.',
        enlace: 'https://www.mediafire.com/file/w9ldw1u9dsl2wdp/Pokemon_-_Black_Version.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/PokemonBlack_esES.jpg'
    },
    'PokemonBlackAndWhite2_White': {
        nombre: 'Pokémon White Version 2',
        consola: 'Nintendo DS',
        descripcion: 'La región de Unova evoluciona\n\nRegresa a Unova 2 años después en esta secuela mejorada. Atrapa, entrena y evoluciona Pokémon en una nueva aventura llena de sorpresas y desafíos.\n\n★ Más de 600 Pokémon diferentes\n★ Nuevos Pokémon y evoluciones\n★ Sistema de batalla mejorado\n★ Torres de batalla épicas\n★ Gráficos DS mejorados\n★ Historia emocionante y profunda',
        enlace: 'https://www.mediafire.com/file/vxj5r8um2ucz0mx/Pokemon_White_Version_2.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/PokemonBlackAndWhite2_White_esES_image1600w.jpg'
    },
    'SuperMario64DS': {
        nombre: 'Super Mario 64 DS',
        consola: 'Nintendo DS',
        descripcion: 'El clásico mejorado para portátiles\n\nAcompaña a Mario en su aventura 3D mejorada en Nintendo DS. Nuevos personajes jugables, más niveles y desafíos en esta versión portátil del clásico.\n\n★ Nuevos personajes (Luigi, Wario, Yoshi)\n★ Más niveles y desafíos\n★ Gráficos mejorados para DS\n★ 120+ estrellas\n★ Controles adaptados para DS\n★ La aventura de Mario va contigo',
        enlace: 'https://www.mediafire.com/file/r9c3lg8tf003gja/Super_Mario_64_DS.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/SI_NDS_SuperMario64DS_image1600w.jpg'
    },
    'TheLegendOfZelda': {
        nombre: 'The Legend of Zelda: Spirit Tracks',
        consola: 'Nintendo DS',
        descripcion: 'Link debe restaurar los Spirit Tracks en el reino de Hyrule. Una aventura épica.',
        enlace: 'https://www.mediafire.com/file/xjy5w4liqb4239g/Legend_of_Zelda_-_Spirit_Tracks.rar/file',
        video: 'imagenes/DS.png',
        imagen: 'imagenes/juegos/ds/SI_NDS_TheLegendOfZeldaSpiritTracks_image1600w.jpg'
    },

    // NES
    'castlevania': {
        nombre: 'Castlevania',
        consola: 'NES',
        descripcion: 'El clásico juego de acción en NES. Defiéndete contra los monstruos de la noche.',
        enlace: 'https://www.mediafire.com/file/y7uk0p1p7ayfxmg/Castlevania.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/castlevania.jpg'
    },
    'DonkeyKong': {
        nombre: 'Donkey Kong',
        consola: 'NES',
        descripcion: 'El primer juego de Donkey Kong. Salta sobre barriles y rescata a Pauline.',
        enlace: 'https://www.mediafire.com/file/xr7rmdmtuqm98nm/Donkey_Kong.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/DonkeyKong_image1600w.jpg'
    },
    'Excitebike': {
        nombre: 'Excitebike',
        consola: 'NES',
        descripcion: 'Compite en motos futuristas. Salta obstáculos y alcanza la meta.',
        enlace: 'https://www.mediafire.com/file/0wp7abhplf58iek/Excitebike.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/Excitebike_image1600w.jpg'
    },
    'Final Fantasy': {
        nombre: 'Final Fantasy',
        consola: 'NES',
        descripcion: 'El RPG que empezó una leyenda\n\nSalva el mundo del dominio del caos. Final Fantasy introdujo el juego de rol al mundo occidental con una aventura épica llena de magia y misterio.\n\n★ RPG legendario fundacional\n★ 4 personajes únicos\n★ Sistema de batalla por turnos\n★ Magia elemental\n★ Aventura de 20+ horas\n★ El comienzo de una era dorada',
        enlace: 'https://www.mediafire.com/file/rmgl8cmptox42pt/Final_Fantasy.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/Final_Fantasy.webp'
    },
    'Kirby\'s Adventure': {
        nombre: 'Kirby\'s Adventure',
        consola: 'NES',
        descripcion: 'Kirby aspira enemigos para obtener sus poderes en esta aventura colorida.',
        enlace: 'https://www.mediafire.com/file/fhcfssxd19gq2f8/Kirby%2527s_Adventure.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/KirbysAdventure.jpg'
    },
    'Mega Man': {
        nombre: 'Mega Man',
        consola: 'NES',
        descripcion: 'Mega Man debe derrotar a los Mega Man Masters y absorber sus poderes.',
        enlace: 'https://www.mediafire.com/file/y6u08yfxr7slsvz/Mega_Man.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/Mega_man.jpg'
    },
    'Metroid': {
        nombre: 'Metroid',
        consola: 'NES',
        descripcion: 'Samus descubre un mundo alienígena\n\nExplora el planeta Zebes como Samus Aran en su primera aventura. Obtén armaduras y armas nuevas mientras buscas los Metroides en esta aventura exploratoria pionera.\n\n★ Exploración no lineal revolucionaria\n★ Powerups progresivos\n★ Enemigos desafiantes\n★ Jefe final épico\n★ Música memorable\n★ El comienzo de una saga legendaria',
        enlace: 'https://www.mediafire.com/file/zuikp39evzig83p/Metroid.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/Metroid_image1600w.jpg'
    },
    'Pacman': {
        nombre: 'Pac-Man',
        consola: 'NES',
        descripcion: 'El clásico juego de arcade. Evita fantasmas y come puntos.',
        enlace: 'https://www.mediafire.com/file/n9288eymrpucirx/Pac-Man.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/pacman.webp'
    },
    'Super Mario Bros The Lost Levels': {
        nombre: 'Super Mario Bros 2: The Lost Levels',
        consola: 'NES',
        descripcion: 'Niveles más desafiantes de Super Mario. Rescata a Peach en 8 mundos.',
        enlace: 'https://www.mediafire.com/file/eqb7c914ttwrtr2/Super_Mario_Bros_2.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/Super Mario Bros The Lost Levels.jpg'
    },
    'Super Mario Bros': {
        nombre: 'Super Mario Bros',
        consola: 'NES',
        descripcion: 'El juego que revolucionó la industria. Ayuda a Mario a rescatar a la Princesa Peach.',
        enlace: 'https://www.mediafire.com/file/hsj370mgu6h4k1z/Super_Mario_Bros.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/SuperMarioBros.jpg'
    },
    'Tetris': {
        nombre: 'Tetris',
        consola: 'NES',
        descripcion: 'El clásico juego de bloques. Encaja las piezas para limpiar líneas.',
        enlace: 'https://www.mediafire.com/file/zn7mkrsvv82jx5c/Tetris.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/tetris.png'
    },
    'The Legend of Zelda': {
        nombre: 'The Legend of Zelda',
        consola: 'NES',
        descripcion: 'El juego de aventura que comenzó una saga. Link busca rescatar a Zelda.',
        enlace: 'https://www.mediafire.com/file/t5ppwfpt0cewnc9/Legend_of_Zelda.zip/file',
        video: 'imagenes/NES.jpg',
        imagen: 'imagenes/juegos/nex/the legenad of zelda.jpg'
    },

    // PlayStation 1
    'CrashBandicoot': {
        nombre: 'Crash Bandicoot',
        consola: 'PlayStation',
        descripcion: 'Un marsupial legendario nace\n\nAcompaña a Crash Bandicoot en su aventura de plataformas más épica. Salta sobre obstáculos, destruye cajas y enfrenta a enemigos en niveles coloridos y desafiantes.\n\n★ Plataformas de clase mundial\n★ Movimientos especiales únicos\n★ Enemigos memorables\n★ Jefe final aterradora\n★ Gráficos PS1 revolucionarios\n★ Música pegajosa inolvidable',
        enlace: 'https://www.mediafire.com/file/example1/Crash_Bandicoot.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Crash Bandicoot.webp'
    },
    'CrashTeamRacing': {
        nombre: 'Crash Team Racing',
        consola: 'PlayStation',
        descripcion: 'Carreras emocionantes con Crash y sus amigos en tracks increíbles.',
        enlace: 'https://www.mediafire.com/file/example2/Crash_Team_Racing.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Crash Team Racing.jpg'
    },
    'FinalFantasyVII': {
        nombre: 'Final Fantasy VII',
        consola: 'PlayStation',
        descripcion: 'Una epopeya RPG que cambió la industria\n\nVive la historia legendaria de Cloud, Aerith y Barret. Un RPG épico con batalla estratégica y una trama profunda que marcó generaciones.\n\n★ Aventura RPG de 100+ horas\n★ Personajes memorables y únicos\n★ Sistema de batalla estratégico\n★ Gráficos 3D pioneros\n★ Música épica de Nobuo Uematsu\n★ Historia emocionante definitiva',
        enlace: 'https://www.mediafire.com/file/example3/Final_Fantasy_VII.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Final Fantasy VII.jpg'
    },
    'GranTurismo': {
        nombre: 'Gran Turismo',
        consola: 'PlayStation',
        descripcion: 'El simulador de carreras que define el género\n\nCompite en carreras realistas en los circuitos más icónicos del mundo. Gran Turismo te ofrece una experiencia de racing auténtica y desafiante.\n\n★ Modo Arcade y Simulación\n★ 140+ vehículos diferentes\n★ Más de 30 circuitos reales\n★ Física realista de conducción\n★ Mejoras y tuning de autos\n★ Carreras emocionantes',
        enlace: 'https://www.mediafire.com/file/example4/Gran_Turismo.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/gran turismo.jpg'
    },
    'HarvestMoon': {
        nombre: 'Harvest Moon: Back to Nature',
        consola: 'PlayStation',
        descripcion: 'Cultiva tu granja y construye relaciones en este juego de simulación.',
        enlace: 'https://www.mediafire.com/file/example5/Harvest_Moon.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Harvest Moon Back to Nature.jpg'
    },
    'MetalGearSolidPS1': {
        nombre: 'Metal Gear Solid',
        consola: 'PlayStation',
        descripcion: 'Espionaje táctico revolucionario. Infiltración en Shadow Moses.',
        enlace: 'https://www.mediafire.com/file/example6/Metal_Gear_Solid.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Metal Gear Solid.jpg'
    },
    'ParappaTheRapper': {
        nombre: 'Parappa the Rapper',
        consola: 'PlayStation',
        descripcion: '¡Puedes hacerlo! Un juego musical innovador con Parappa.',
        enlace: 'https://www.mediafire.com/file/example7/Parappa_The_Rapper.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Parappa the Rapper.jpg'
    },
    'ResidentEvilPS1': {
        nombre: 'Resident Evil',
        consola: 'PlayStation',
        descripcion: 'El horror que definió un género\n\nSobrevive en la mansión llena de monstruos. Resuelve misterios, enfrenta enemigos terroríficos y descubre la verdad oscura en este juego revolucionario.\n\n★ Atmósfera de horror genuino\n★ Puzzles complejos y desafiantes\n★ Enemigos aterradores\n★ Múltiples finales diferentes\n★ Gráficos pre-renderizados impresionantes\n★ Sonido y música terrorífica',
        enlace: 'https://www.mediafire.com/file/example8/Resident_Evil.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Resident Evil 1.webp'
    },
    'SpyrotheDragon': {
        nombre: 'Spyro the Dragon',
        consola: 'PlayStation',
        descripcion: 'El pequeño dragón púrpura en una aventura épica de plataformas.',
        enlace: 'https://www.mediafire.com/file/example9/Spyro_The_Dragon.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/spyro the dragon.gif'
    },
    'Tekken3': {
        nombre: 'Tekken 3',
        consola: 'PlayStation',
        descripcion: 'Lucha épica contra los mejores peleadores. Un clásico del fighting.',
        enlace: 'https://www.mediafire.com/file/example10/Tekken_3.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/tekken3.jpg'
    },
    'TombRaiderPS1': {
        nombre: 'Tomb Raider',
        consola: 'PlayStation',
        descripcion: 'Lara Croft explora ruinas antiguas en busca de artefactos valiosos.',
        enlace: 'https://www.mediafire.com/file/example11/Tomb_Raider.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/Tomb_Raider-570681926-large.jpg'
    },
    'TonyHawksPS1': {
        nombre: 'Tony Hawk\'s Pro Skater',
        consola: 'PlayStation',
        descripcion: 'El juego de skateboarding que revolucionó el género.',
        enlace: 'https://www.mediafire.com/file/example12/Tony_Hawks.zip/file',
        video: 'imagenes/PS1.jpg',
        imagen: 'imagenes/juegos/ps1/tonyHawk.jpg'
    },

    // PlayStation 2
    'DragonBallZBudokai3': {
        nombre: 'Dragon Ball Z Budokai 3',
        consola: 'PlayStation 2',
        descripcion: 'Batalla como tus personajes de Dragon Ball favoritos.',
        enlace: 'https://www.mediafire.com/file/example13/DBZ_Budokai_3.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Dragon Ball Z Budokai 3.jpg'
    },
    'GTASanAndreas': {
        nombre: 'Grand Theft Auto: San Andreas',
        consola: 'PlayStation 2',
        descripcion: 'Vuelve a casa por la gloria y por el dinero\n\nCJ regresa a su ciudad natal San Andreas para vengarse de aquellos que lo traicionaron. Vive una aventura abierta épica llena de acción, crimen y drama.\n\n★ Mundo abierto masivo de San Andreas\n★ Vehículos variados para conducir\n★ Misiones emocionantes y variadas\n★ Personajes memorables\n★ Banda sonora de radio increíble\n★ Libertad total para jugar como quieras',
        enlace: 'https://www.mediafire.com/file/example14/GTA_San_Andreas.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/EGS_GrandTheftAutoSanAndreasTheDefinitiveEdition_RockstarGames_S1_2560x1440-3daa3396c39d5310e071d9093689fdde.jpg'
    },
    'GodOfWarsPS2': {
        nombre: 'God of War',
        consola: 'PlayStation 2',
        descripcion: 'Un guerrero sed de venganza\n\nKratos busca venganza contra Ares, el Dios de la Guerra. Una aventura épica de acción brutal en la mitología griega que revoluciona el género.\n\n★ Acción brutal e intensa\n★ Combates épicos contra dioses\n★ Gadgets únicos y poderosos\n★ Puzzles desafiantes\n★ Gráficos PS2 impresionantes\n★ Historia épica de 15+ horas',
        enlace: 'https://www.mediafire.com/file/example15/God_of_War.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/god-of-war.jpg'
    },
    'GuitarHero': {
        nombre: 'Guitar Hero',
        consola: 'PlayStation 2',
        descripcion: 'Sé una leyenda del rock\n\nToca guitarra en tiempo real en este juego revolucionario. Domina canciones clásicas del rock y conviértete en una superestrella musical en escenarios épicos.\n\n★ Periférico guitarra incluido\n★ 50+ canciones de rock legendarias\n★ Modo carrera épico\n★ Multijugador competitivo\n★ Efectos visuales impresionantes\n★ Una experiencia musical inmersiva',
        enlace: 'https://www.mediafire.com/file/example16/Guitar_Hero.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Guitar Hero.webp'
    },
    'KingdomHeartsPS2': {
        nombre: 'Kingdom Hearts',
        consola: 'PlayStation 2',
        descripcion: 'El cruce entre Disney y Final Fantasy. Una aventura mágica.',
        enlace: 'https://www.mediafire.com/file/example17/Kingdom_Hearts.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/kingdom-hearts-iii-re-mind-dlc-pc-juego-steam-cover.jpg'
    },
    'MGS3SnakeEater': {
        nombre: 'Metal Gear Solid 3: Snake Eater',
        consola: 'PlayStation 2',
        descripcion: 'La leyenda de Big Boss comienza\n\nVive la historia de origen en la Guerra Fría. Infiltra la selva soviética en una misión imposible que cambiará tu destino y el del mundo.\n\n★ Stealth action revolucionario\n★ Selva dinámica y viva\n★ Jefes memorables y épicos\n★ Sistema de combate avanzado\n★ Historia profunda y emotiva\n★ Momento final legendario',
        enlace: 'https://www.mediafire.com/file/example18/MGS3.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Metal Gear Solid 3 Snake Eater.png'
    },
    'NFSUnderground': {
        nombre: 'Need for Speed: Underground',
        consola: 'PlayStation 2',
        descripcion: 'Street racing ilegal. Modifica tu coche y gana carreras.',
        enlace: 'https://www.mediafire.com/file/example19/NFS_Underground.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Need_for_Speed_Underground_cover.jpg'
    },
    'MonsterHunter2': {
        nombre: 'Monster Hunter 2',
        consola: 'PlayStation 2',
        descripcion: 'Caza monstruos épicos en esta aventura de acción cooperativa.',
        enlace: 'https://www.mediafire.com/file/example20/Monster_Hunter_2.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Pixel-Sundays-Monster-Hunter-2.webp'
    },
    'ResidentEvil4': {
        nombre: 'Resident Evil 4',
        consola: 'PlayStation 2',
        descripcion: 'Horror y acción en el pueblo europeo. Rescata a Ashley.',
        enlace: 'https://www.mediafire.com/file/example21/Resident_Evil_4.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Resident Evil 4.jpg'
    },
    'Rygar': {
        nombre: 'Rygar: The Legendary Adventure',
        consola: 'PlayStation 2',
        descripcion: 'Aventura de acción épica con combate emocionante.',
        enlace: 'https://www.mediafire.com/file/example22/Rygar.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/RygarTheLegendaryAdventurePS2.jpg'
    },
    'ShadowOfTheColossus': {
        nombre: 'Shadow of The Colossus',
        consola: 'PlayStation 2',
        descripcion: 'Derrota colosos para salvar a tu amada\n\nEnfrenta 16 colosos épicos en una aventura artística única. Escala sus cuerpos gigantescos y derrótalos para salvar a una joven y revelar los misterios del mundo.\n\n★ 16 colosos únicos y memorables\n★ Aventura épica y emotiva\n★ Gráficos artísticos impresionantes\n★ Música envolvente\n★ Gameplay innovador\n★ Experiencia artística sin igual',
        enlace: 'https://www.mediafire.com/file/example23/Shadow_Colossus.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/Shadow of The Colossus.jpg'
    },
    'Tekken5': {
        nombre: 'Tekken 5',
        consola: 'PlayStation 2',
        descripcion: 'Lucha épica con personajes únicos en torneos emocionantes.',
        enlace: 'https://www.mediafire.com/file/example24/Tekken_5.zip/file',
        video: 'imagenes/PS2.jpg',
        imagen: 'imagenes/juegos/ps2/tekken5.jpg'
    },

    // PlayStation Portable
    'MGSPeaceWalker': {
        nombre: 'Metal Gear Solid: Peace Walker',
        consola: 'PlayStation Portable',
        descripcion: 'Big Boss comanda su ejército privado\n\nVive como Big Boss en una misión secreta. Recluta soldados, construye tu base y enfrenta amenazas en esta aventura épica de espionaje en la jungla.\n\n★ Stealth action portátil revolucionario\n★ Base de operaciones customizable\n★ Misiones cooperativas\n★ Jefes memorables\n★ Equipamiento variado\n★ Gráficos PSP impresionantes',
        enlace: 'https://www.mediafire.com/file/example25/MGS_Peace_Walker.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/56_mgspw_gamemain.jpg'
    },
    'DragonBallZShinBudokai': {
        nombre: 'Dragon Ball Z Shin Budokai',
        consola: 'PlayStation Portable',
        descripcion: 'Batalla épica en el universo de Dragon Ball Z.',
        enlace: 'https://www.mediafire.com/file/example26/DBZ_Shin_Budokai.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/dragon ball z shin budokai tenkaichi 2.jpg'
    },
    'DragonBallZTenkaichi2': {
        nombre: 'Dragon Ball Z Tenkaichi 2',
        consola: 'PlayStation Portable',
        descripcion: 'Más personajes y más batalla en este juego de lucha.',
        enlace: 'https://www.mediafire.com/file/example27/DBZ_Tenkaichi_2.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/dragon ball z shin budokai tenkaichi 2.png'
    },
    'GodOfWarChainsOfOlympus': {
        nombre: 'God of War: Chains of Olympus',
        consola: 'PlayStation Portable',
        descripcion: 'Kratos en una aventura épica a través de la mitología griega.',
        enlace: 'https://www.mediafire.com/file/example28/GOW_Chains.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/god of war chains of olympus.jpg'
    },
    'GodOfWarGhostOfSparta': {
        nombre: 'God of War: Ghost of Sparta',
        consola: 'PlayStation Portable',
        descripcion: 'La conclusión de la saga de Kratos en PSP.',
        enlace: 'https://www.mediafire.com/file/example29/GOW_Ghost.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/god of war ghost of sparta .png'
    },
    'GranTurismoP SP': {
        nombre: 'Gran Turismo PSP',
        consola: 'PlayStation Portable',
        descripcion: 'Simulador de carreras portable. Compite en circuitos emocionantes.',
        enlace: 'https://www.mediafire.com/file/example30/GT_PSP.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/gran turismo.webp'
    },
    'GTALibertyCityStories': {
        nombre: 'Grand Theft Auto: Liberty City Stories',
        consola: 'PlayStation Portable',
        descripcion: 'Aventura de acción en Liberty City en tu PSP.',
        enlace: 'https://www.mediafire.com/file/example31/GTA_Liberty.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/Grand_Theft_Auto_Liberty_City_Stories.webp'
    },
    'LittleBigPlanetPSP': {
        nombre: 'LittleBigPlanet PSP',
        consola: 'PlayStation Portable',
        descripcion: 'Crea y juega niveles únicos con Sackboy.',
        enlace: 'https://www.mediafire.com/file/example32/LBP_PSP.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/little bing planet.jpg'
    },
    'KingdomHeartsBirthBySleep': {
        nombre: 'Kingdom Hearts: Birth by Sleep',
        consola: 'PlayStation Portable',
        descripcion: 'El origen de la saga Kingdom Hearts en PSP.',
        enlace: 'https://www.mediafire.com/file/example33/KH_Birth.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/Portadas-KH-Birth-By-Sleep.jpg'
    },
    'SilentHillOrigins': {
        nombre: 'Silent Hill: Origins',
        consola: 'PlayStation Portable',
        descripcion: 'Horror psicológico en Silent Hill. Una precuela terrorífica.',
        enlace: 'https://www.mediafire.com/file/example34/Silent_Hill_Origins.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/silent hill origins .jpg'
    },
    'Tekken6PSP': {
        nombre: 'Tekken 6 PSP',
        consola: 'PlayStation Portable',
        descripcion: 'Batalla portátil con los mejores peleadores.',
        enlace: 'https://www.mediafire.com/file/example35/Tekken_6_PSP.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/teken6.jpg'
    },
    'TombRaiderAnniversary': {
        nombre: 'Tomb Raider: Anniversary',
        consola: 'PlayStation Portable',
        descripcion: 'La aventura clásica de Lara Croft remasterizada.',
        enlace: 'https://www.mediafire.com/file/example36/TR_Anniversary.zip/file',
        video: 'imagenes/PSP.jpg',
        imagen: 'imagenes/juegos/psp/tomb-raider-anniversary-pc-juego-steam-cover.jpg'
    },

    // Sega Genesis
    'AladdinGenesis': {
        nombre: 'Aladdin',
        consola: 'Sega Genesis',
        descripcion: 'Aventura mágica con Aladdin en el desierto.',
        enlace: 'https://www.mediafire.com/file/example37/Aladdin_Genesis.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Aladdin.jpg'
    },
    'ComixZone': {
        nombre: 'Comix Zone',
        consola: 'Sega Genesis',
        descripcion: 'Acción dentro de un cómic. Secuencias épicas de lucha.',
        enlace: 'https://www.mediafire.com/file/example38/Comix_Zone.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Comix Zone.webp'
    },
    'DragonBallZGenesis': {
        nombre: 'Dragon Ball Z Buyuu Retsuden',
        consola: 'Sega Genesis',
        descripcion: 'Batalla en el universo Dragon Ball Z.',
        enlace: 'https://www.mediafire.com/file/example39/DBZ_Genesis.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Dragon Ball Z Buyuu Retsuden.png'
    },
    'EarthwormJim': {
        nombre: 'Earthworm Jim',
        consola: 'Sega Genesis',
        descripcion: 'Un gusano en un traje espacial. Acción absurda y divertida.',
        enlace: 'https://www.mediafire.com/file/example40/Earthworm_Jim.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Earthworm Jim.jpg'
    },
    'GoldenAxe': {
        nombre: 'Golden Axe',
        consola: 'Sega Genesis',
        descripcion: 'Beat em up épico con magia y armas legendarias.',
        enlace: 'https://www.mediafire.com/file/example41/Golden_Axe.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Golden Axe.jpg'
    },
    'MortalKombatII': {
        nombre: 'Mortal Kombat II',
        consola: 'Sega Genesis',
        descripcion: 'Fatalities brutales en los Torneos Mortales.',
        enlace: 'https://www.mediafire.com/file/example42/MK2.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Mortal Kombat II.jpg'
    },
    'SonicAndKnuckles': {
        nombre: 'Sonic and Knuckles',
        consola: 'Sega Genesis',
        descripcion: 'La velocidad de Sonic con la fuerza de Knuckles.',
        enlace: 'https://www.mediafire.com/file/example43/Sonic_Knuckles.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/sonic and knuckles.jpg'
    },
    'SonicTheHedgehog': {
        nombre: 'Sonic the Hedgehog',
        consola: 'Sega Genesis',
        descripcion: 'Una velocidad que lo cambia todo\n\nSonic, el erizo azul más rápido del mundo, se enfrenta a Dr. Robotnik. Corre a través de zonas coloridas a velocidades insuperables en esta aventura revolucionaria.\n\n★ Velocidad sin precedentes\n★ Zonas vibrantes y diversas\n★ Anillos para recolectar\n★ Jefe final épico\n★ Música memorable de Masato Nakamura\n★ El inicio de una leyenda',
        enlace: 'https://www.mediafire.com/file/example44/Sonic_Genesis.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Sonic the Hedgehog.webp'
    },
    'StreetFighterIIGenesis': {
        nombre: 'Street Fighter II',
        consola: 'Sega Genesis',
        descripcion: 'Lucha épica de uno a uno. El legendario juego de pelea.',
        enlace: 'https://www.mediafire.com/file/example45/SF2_Genesis.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Street Fighter II.jpg'
    },
    'StreetsOfRage2': {
        nombre: 'Streets of Rage 2',
        consola: 'Sega Genesis',
        descripcion: 'Beat em up urbano. Pelea por las calles de la ciudad.',
        enlace: 'https://www.mediafire.com/file/example46/Streets_Rage_2.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/Streets of Rage 2.jpg'
    },
    'Vectorman': {
        nombre: 'Vectorman',
        consola: 'Sega Genesis',
        descripcion: 'Acción futurista con gráficos vectoriales innovadores.',
        enlace: 'https://www.mediafire.com/file/example47/Vectorman.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/vectorman.jpg'
    },
    'XMen2CloneWars': {
        nombre: 'X-Men 2: Clone Wars',
        consola: 'Sega Genesis',
        descripcion: 'Juega como los X-Men en esta aventura de acción.',
        enlace: 'https://www.mediafire.com/file/example48/XMen_2.zip/file',
        video: 'imagenes/SGen.jpg',
        imagen: 'imagenes/juegos/sega genesis/X-Men 2 Clone Wars.jpg'
    },

    // Super Nintendo (SNES)
    'CastlevaniaSNES': {
        nombre: 'Castlevania IV',
        consola: 'SNES',
        descripcion: 'El látigo de Simon contra los monstruos de la noche.',
        enlace: 'https://www.mediafire.com/file/example49/Castlevania_SNES.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Castlevania IV.jpg'
    },
    'ChronoTrigger': {
        nombre: 'Chrono Trigger',
        consola: 'SNES',
        descripcion: 'Una aventura temporal que define una era\n\nViaja a través del tiempo en esta epopeya RPG. Cambia el destino del mundo resolviendo el misterio de Lavos en esta obra maestra del género.\n\n★ Aventura RPG de 50+ horas\n★ 13 finales diferentes\n★ Viajes a través del tiempo\n★ Personajes únicos y memorables\n★ Sistema de batalla combinada\n★ Considerado uno de los mejores RPG jamás creados',
        enlace: 'https://www.mediafire.com/file/example50/Chrono_Trigger.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Chrono Trigger.jpg'
    },
    'ContraIII': {
        nombre: 'Contra III: The Alien Wars',
        consola: 'SNES',
        descripcion: 'Acción de disparos épica contra invasores alienígenas.',
        enlace: 'https://www.mediafire.com/file/example51/Contra_III.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Contra III.jpg'
    },
    'DonkeyKongCountry': {
        nombre: 'Donkey Kong Country',
        consola: 'SNES',
        descripcion: 'Los Kongs contra los Kremling\n\nAcompaña a Donkey Kong y Diddy Kong en una aventura épica. Salta, trepa y destruye cajas mientras luchas contra la invasión Kremling.\n\n★ Plataformas innovadoras\n★ Animación CGI revolucionaria\n★ Enemigos variados\n★ Bonificaciones secretas\n★ Música memorable\n★ Aventura desafiante de 10+ horas',
        enlace: 'https://www.mediafire.com/file/example52/DKC.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Donkey Kong Country.jpg'
    },
    'EarthBoundSNES': {
        nombre: 'EarthBound',
        consola: 'SNES',
        descripcion: 'RPG excéntrico y divertido. Salva la tierra de invasores cósmicos.',
        enlace: 'https://www.mediafire.com/file/example53/Earthbound.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/EarthBound.jpg'
    },
    'MegaManXSNES': {
        nombre: 'Mega Man X',
        consola: 'SNES',
        descripcion: 'El cazador de robots en una aventura plataformera épica.',
        enlace: 'https://www.mediafire.com/file/example54/MMX.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Mega Man X.jpg'
    },
    'PunchOutSNES': {
        nombre: 'Punch-Out!!',
        consola: 'SNES',
        descripcion: 'Lucha de boxing contra oponentes memorables.',
        enlace: 'https://www.mediafire.com/file/example55/Punch_Out.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Punch-Out.jpg'
    },
    'StarFoxSNES': {
        nombre: 'Star Fox',
        consola: 'SNES',
        descripcion: 'Acción aérea en vuelo sobre Corneria.',
        enlace: 'https://www.mediafire.com/file/example56/StarFox.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Star Fox.jpg'
    },
    'StreetFighterIISNES': {
        nombre: 'Street Fighter II: The World Warrior',
        consola: 'SNES',
        descripcion: 'El juego de lucha que revolucionó la industria\n\nCompite contra los mejores luchadores del mundo en torneos épicos. Domina combos, especiales y técnicas para vencer a Bison en este clásico indiscutible.\n\n★ 8 personajes únicos con movimientos\n★ Combos y movimientos especiales\n★ Modos Arcade y Versus\n★ Competencia intensa\n★ Gráficos y animación impecables\n★ Banda sonora icónica',
        enlace: 'https://www.mediafire.com/file/example57/SF2_SNES.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Street Fighter II The World Warrior.jpg'
    },
    'MarioAllStars': {
        nombre: 'Super Mario All-Stars',
        consola: 'SNES',
        descripcion: 'Colección de los mejores juegos de Mario remasterizados.',
        enlace: 'https://www.mediafire.com/file/example58/Mario_AllStars.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/super mario all-stars + super mario world.webp'
    },
    'SuperMarioRPG': {
        nombre: 'Super Mario RPG: Legend of the Seven Stars',
        consola: 'SNES',
        descripcion: 'Cuando Mario encontró a Square\n\nMario se aventura en un RPG épico. Batalla a enemigos, resuelve puzzles y descubre los misterios de las Siete Estrellas en esta colaboración legendaria.\n\n★ RPG innovador y único\n★ Sistema de batalla táctico\n★ Personajes únicos\n★ Aventura mágica de 20+ horas\n★ Música épica de Yoko Shimomura\n★ Colaboración Nintendo-Square histórica',
        enlace: 'https://www.mediafire.com/file/example59/Mario_RPG.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Super Mario RPG Legend of the Seven Stars.jpg'
    },
    'ZeldaSNES': {
        nombre: 'The Legend of Zelda: A Link to the Past',
        consola: 'SNES',
        descripcion: 'La aventura clásica que definió una era.',
        enlace: 'https://www.mediafire.com/file/example60/Zelda_ALinkToThePast.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/The Legend of Zelda A Link to the Past.jpg'
    },
    'YoshisIslandSNES': {
        nombre: 'Yoshi\'s Island',
        consola: 'SNES',
        descripcion: 'Yoshi cuida al pequeño Mario\n\nProtege al pequeño Mario mientras lo cargas en tu espalda. Una aventura única con mecánicas innovadoras y arte estilo lápiz en esta joya de SNES.\n\n★ Mecánica de carga de Mario único\n★ Estilo artístico lápiz innovador\n★ Transformaciones especiales\n★ Jefes creativos\n★ Aventura colorida y mágica\n★ Una de las mejores plataformas jamás creadas',
        enlace: 'https://www.mediafire.com/file/example61/Yoshis_Island.zip/file',
        video: 'imagenes/SNES.jpg',
        imagen: 'imagenes/juegos/snex/Yoshi\'s Island.jpg'
    }
};

// Inicializar modal cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalJuego');
    const cerrar = document.querySelector('.cerrar-modal');
    const videoModal = document.getElementById('videoModal');
    const nombreJuego = document.getElementById('nombreJuego');
    const consolaJuego = document.getElementById('consolaJuego');
    const descripcionJuego = document.getElementById('descripcionJuego');
    const enlaceDescarga = document.getElementById('enlaceDescarga');
    const galeriaImagenes = document.getElementById('galeriaImagenes');

    // Obtener todas las imágenes de juegos
    const imagenesJuegos = document.querySelectorAll('.image-grid img');

    // Agregar evento click a cada imagen
    imagenesJuegos.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            e.preventDefault();
            const alt = this.alt;
            const juegoData = juegosDatabase[alt];
            
            if (juegoData) {
                // Actualizar contenido del modal
                nombreJuego.textContent = juegoData.nombre;
                consolaJuego.textContent = juegoData.consola;
                descripcionJuego.textContent = juegoData.descripcion;
                enlaceDescarga.href = juegoData.enlace;
                videoModal.src = juegoData.video;
                
                // Limpiar galería y agregar imagen
                galeriaImagenes.innerHTML = '';
                const imgGaleria = document.createElement('img');
                imgGaleria.src = juegoData.imagen;
                imgGaleria.alt = alt;
                galeriaImagenes.appendChild(imgGaleria);
                
                // Mostrar modal
                modal.style.display = 'flex';
            }
        });
    });

    // Cerrar modal al hacer click en X
    if (cerrar) {
        cerrar.addEventListener('click', function() {
            modal.style.display = 'none';
            videoModal.pause();
        });
    }

    // Cerrar modal al hacer click fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoModal.pause();
        }
    });
});