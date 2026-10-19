/* 
=============================================================================
  NOVOTEC ATELIER — CATÁLOGO DE PRODUTOS E LÓGICA DA LOJA
=============================================================================
  CONTEÚDO COMPLETO E OTIMIZADO:
  - Lote 1 ao Lote 9 (roupa1 até roupa89)
  - Correções aplicadas: Roupa 19 (Blusa e descrição ajustada) e Roupa 47 (Conjuntos)
  - Suporte a Lazy Loading (`loading="lazy"`) em todas as imagens
=============================================================================
*/

const products = [
  /* ------------------- LOTE 1 (roupa1 a roupa10) ------------------- */
  {
    id: "calca-baggy-vintage",
    name: "Calça Baggy Jeans Vintage",
    category: "calcas",
    price: 271.28,
    badge: "30% OFF",
    image: "imagens/roupa1.png",
    description: "Modelagem ampla e lavagem vintage com efeito estonado. Perfeita para composições streetwear marcantes e confortáveis."
  },
  {
    id: "calca-wide-leg-acid",
    name: "Calça Wide Leg Acid Wash",
    category: "calcas",
    price: 285.57,
    badge: "30% OFF",
    image: "imagens/roupa2.png",
    description: "Corte wide leg com detalhe de argola metálica e lavagem escura marmorizada. Expressão e atitude para o dia a dia."
  },
  {
    id: "calca-parachute-gorpcore",
    name: "Calça Parachute Sport",
    category: "calcas",
    price: 242.71,
    badge: "30% OFF",
    image: "imagens/roupa3.png",
    description: "Estilo parachute com recortes laterais contrastantes e ajuste na cintura. Leve, funcional e com forte presença urbana."
  },
  {
    id: "calca-flare-y2k",
    name: "Calça Jeans Flare Y2K",
    category: "calcas",
    price: 257.00,
    badge: "30% OFF",
    image: "imagens/roupa4.png",
    description: "Cintura baixa e caimento flare em tom cinza estonado. Inspirada na estética dos anos 2000 para looks autênticos."
  },
  {
    id: "blusa-manga-longa-goth",
    name: "Blusa Manga Longa Gothic Print",
    category: "blusas",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa5.png",
    description: "Modelagem ajustada com decote profundo e estampa estilo gótico/y2k. Tecido confortável e caimento impecável."
  },
  {
    id: "tshirt-oversized-skull",
    name: "Camiseta Oversized Skull Vintage",
    category: "blusas",
    price: 185.57,
    badge: "30% OFF",
    image: "imagens/roupa6.png",
    description: "Camiseta com caimento oversized, tom verde militar estonado e estampa gráfica de caveira estilo grunge."
  },
  {
    id: "tshirt-skun-black",
    name: "Camiseta Skun Streetwear",
    category: "blusas",
    price: 178.43,
    badge: "30% OFF",
    image: "imagens/roupa7.png",
    description: "Camiseta preta de algodão com estampa gráfica prateada e caimento relaxado para compor sobreposições urbanas."
  },
  {
    id: "blusa-manga-longa-cross",
    name: "Blusa Manga Longa Cross Aesthetic",
    category: "blusas",
    price: 192.71,
    badge: "30% OFF",
    image: "imagens/roupa8.png",
    description: "Peça na cor cinza-claro com detalhes de estampas de cruzes e asas nas mangas e decote V. Puro estilo Y2K."
  },
  {
    id: "cinto-goth-studs",
    name: "Cinto Couro Tachas Pyramids",
    category: "acessorios",
    price: 114.14,
    badge: "30% OFF",
    image: "imagens/roupa9.png",
    description: "Cinto em material sintético preto com aplicação de tachas piramidais metálicas e fivela reforçada."
  },
  {
    id: "cinto-skull-rhinestone",
    name: "Cinto Caveira Rhinestone",
    category: "acessorios",
    price: 128.43,
    badge: "30% OFF",
    image: "imagens/roupa10.png",
    description: "Cinto repleto de tachas prateadas com fivela imponente em formato de caveira cravada com pedras brilhantes."
  },

  /* ------------------- LOTE 2 (roupa11 a roupa19) ------------------- */
  {
    id: "vestido-gothic-velvet-lace",
    name: "Vestido Veludo & Renda Nocturna",
    category: "vestidos",
    price: 385.57,
    badge: "30% OFF",
    image: "imagens/roupa11.png",
    description: "Vestido longo em veludo molhado com corpete estruturado vermelho e preto, mangas de renda trabalhada e fenda elegante."
  },
  {
    id: "vestido-velvet-choker-neck",
    name: "Vestido Sereia Veludo Obscuro",
    category: "vestidos",
    price: 357.00,
    badge: "30% OFF",
    image: "imagens/roupa12.png",
    description: "Silhueta ajustada em veludo preto, gola alta estilizada com recorte no colo e rendas florais abertas nas mangas."
  },
  {
    id: "calca-flared-low-rise-vintage",
    name: "Calça Flare Jeans Low-Rise",
    category: "calcas",
    price: 271.28,
    badge: "30% OFF",
    image: "imagens/roupa13.jpeg",
    description: "Corte bootcut/flare de cintura baixa com lavagem azul amarelada estonada e costuras brancas em destaque."
  },
  {
    id: "corset-skirt-goth-bride",
    name: "Conjunto Corset & Saia de Tule Gótico",
    category: "conjuntos",
    price: 414.14,
    badge: "30% OFF",
    image: "imagens/roupa14.jpeg",
    description: "Conjunto dramático composto por corset tomara-que-caia estruturado com amarrações e saia volumosa assimétrica em tule preto."
  },
  {
    id: "look-complete-y2k-street",
    name: "Conjunto Jeans Flare & Blusa Ombro a Ombro Y2K",
    category: "conjuntos",
    price: 314.14,
    badge: "30% OFF",
    image: "imagens/roupa15.jpeg",
    description: "Look Y2K completo composto por calça jeans boca de sino com tiras e fivelas nas coxas, blusa preta de ombro caído, mala e tamancos de plataforma."
  },
  {
    id: "casaco-zip-hoodie-grunge",
    name: "Moletom Zip Hoodie Washed Gray",
    category: "blusas",
    price: 285.57,
    badge: "30% OFF",
    image: "imagens/roupa16.jpeg",
    description: "Moletom cinza estonado com zíper frontal, bolso canguru e bordado estilizado no peito. Caimento urbano confortável."
  },
  {
    id: "top-ombro-a-ombro-drapeado",
    name: "Blusa Ombro a Ombro Drapeada",
    category: "conjuntos",
    price: 157.00,
    badge: "30% OFF",
    image: "imagens/roupa17.jpeg",
    description: "Blusa justa preta de mangas longas com decote assimétrico ombro a ombro e efeito drapeado na lateral."
  },
  {
    id: "set-streetwear-oversized-gray",
    name: "Calça Jogger Cargo Cinza Mescla",
    category: "calcas",
    price: 228.43,
    badge: "30% OFF",
    image: "imagens/roupa18.jpeg",
    description: "Calça de moletom estilo jogger/wide com bolsos cargo laterais e cordão de ajuste na cintura. Conforto e estilo casual."
  },
  {
    id: "blusa-manga-longa-olive-aesthetic",
    name: "Blusa Manga Longa Olive Aesthetic",
    category: "blusas", // corrigido para blusas
    price: 257.00,
    badge: "30% OFF",
    image: "imagens/roupa19.jpeg",
    description: "Blusa ajustada de mangas longas em tom verde-oliva com caimento confortável e visual versátil para sobreposições." // descrição atualizada
  },

  /* ------------------- LOTE 3 (roupa20 a roupa29) ------------------- */
  {
    id: "blusa-henley-verde-militar",
    name: "Blusa Henley Ribbed Olive",
    category: "blusas",
    price: 164.14,
    badge: "30% OFF",
    image: "imagens/roupa20.jpeg",
    description: "Blusa canelada de mangas longas em tom verde-militar com abotoamento frontal em estilo henley acinturado."
  },
  {
    id: "top-manga-longa-renda-black",
    name: "Blusa Henley com Renda Floral",
    category: "blusas",
    price: 185.57,
    badge: "30% OFF",
    image: "imagens/roupa21.jpeg",
    description: "Blusa preta ajustada com botões frontais e detalhe delicado de renda floral nos punhos das mangas."
  },
  {
    id: "sueter-v-neck-tricot-beige",
    name: "Suéter Tricot Decote V Oversized",
    category: "blusas",
    price: 271.28,
    badge: "30% OFF",
    image: "imagens/roupa22.jpeg",
    description: "Suéter aconchegante de tricot bege com decote V profundo, tramas aparentes e modelagem solta."
  },
  {
    id: "top-ombro-caido-grunge-black",
    name: "Blusa Decote Canoa Asymmetric Black",
    category: "blusas",
    price: 149.86,
    badge: "30% OFF",
    image: "imagens/roupa23.jpeg",
    description: "Blusa preta básica com caimento descolado, decote ombro a ombro sutil e tecido leve para sobreposições."
  },
  {
    id: "jaqueta-hoodie-cinza-militar",
    name: "Jaqueta Moletom Washed Olive",
    category: "jaquetas",
    price: 314.14,
    badge: "30% OFF",
    image: "imagens/roupa24.jpeg",
    description: "Jaqueta de moletom com zíper e capuz em tom oliva estonado com estampas nas mangas e caimento relaxed."
  },
  {
    id: "top-cropped-lace-white",
    name: "Regata Cropped Renda Vintage White",
    category: "blusas",
    price: 128.43,
    badge: "30% OFF",
    image: "imagens/roupa25.jpeg",
    description: "Top cropped de alcinha canelado com acabamento delicado em renda no decote. Um clássico da estética vintage."
  },
  {
    id: "calca-jeans-wide-dark-wash",
    name: "Calça Wide Leg Dark Indigo",
    category: "calcas",
    price: 278.43,
    badge: "30% OFF",
    image: "imagens/roupa26.jpeg",
    description: "Jeans escuro de cintura alta com cós duplo decorativo e caimento amplo estilo wide leg de alta presença."
  },
  {
    id: "vestido-mid-vintage-cocktail",
    name: "Vestido Midi Rodado Satin Black",
    category: "vestidos",
    price: 399.86,
    badge: "30% OFF",
    image: "imagens/roupa27.jpeg",
    description: "Vestido midi preto em cetim encorpado, decote coração estruturado com alças largas e saia armada de estilo vintage 50s."
  },
  {
    id: "vestido-longo-satin-off-white",
    name: "Vestido Longo Cetim Champagne",
    category: "vestidos",
    price: 471.28,
    badge: "30% OFF",
    image: "imagens/roupa28.jpeg",
    description: "Vestido longo fluido em cetim pérola/champagne, decote quadrado com mangas curtas bufantes e plissado lateral elegante."
  },
  {
    id: "vestido-longo-chiffon-black",
    name: "Vestido Sereia Chiffon Elegance",
    category: "vestidos",
    price: 428.43,
    badge: "30% OFF",
    image: "imagens/roupa29.jpeg",
    description: "Vestido longo preto ajustado ao corpo com detalhes em chiffon e rendas curtas nos ombros. Sofisticação e mistério."
  },

  /* ------------------- LOTE 4 (roupa30 a roupa39) ------------------- */
  {
    id: "regata-purple-floral-y2k",
    name: "Regata Chiffon Purple Floral",
    category: "blusas",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa30.jpeg",
    description: "Top em chiffon roxo transparente com estampa floral, pedraria central no busto e barra assimétrica pontuda em vibe Y2K."
  },
  {
    id: "regata-sequin-baby-blue",
    name: "Regata Paetês Baby Blue Mermaid",
    category: "blusas",
    price: 199.86,
    badge: "30% OFF",
    image: "imagens/roupa31.jpeg",
    description: "Regata azul-piscina ajustada com bordados delicados em paetês florais e alcinhas finas, estilo sereia vintage."
  },
  {
    id: "bata-peplum-white-vintage",
    name: "Bata Peplum Algodão Bordado White",
    category: "conjuntos",
    price: 185.57,
    badge: "30% OFF",
    image: "imagens/roupa32.jpeg",
    description: "Bata branca em algodão leve com detalhes bordados no peito, acabamento rendado e caimento peplum fluido."
  },
  {
    id: "regata-corset-lace-black",
    name: "Regata Bustiê Renda Black Gothic",
    category: "conjuntos",
    price: 164.14,
    badge: "30% OFF",
    image: "imagens/roupa33.jpeg",
    description: "Top em renda preta trabalhada com modelagem bustiê, alcinhas ajustáveis e laço delicado no decote."
  },
  {
    id: "jaqueta-couro-vintage-distressed",
    name: "Jaqueta Couro Biker Distressed",
    category: "conjuntos",
    price: 414.14,
    badge: "30% OFF",
    image: "imagens/roupa34.jpeg",
    description: "Jaqueta estilo biker em material sintético com lavagem desgastada/marmorizada e zíperes metálicos utilitários."
  },
  {
    id: "jaqueta-couro-marmorizada-brown",
    name: "Conjunto Asymmetric Skull & Short Jeans Set",
    category: "conjuntos",
    price: 414.14,
    badge: "30% OFF",
    image: "imagens/roupa35.jpeg",
    description: "Conjunto estilo grunge/gótico composto por blusa preta de manga longa com ombro caído e estampa de caveira, short jeans cinza e acessórios marcantes."
  },
  {
    id: "camisa-pinstripe-short-sleeve",
    name: "Camisa Risca de Giz Manga Curta",
    category: "conjuntos",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa36.jpeg",
    description: "Camisa acinturada branca com finas listras risca de giz escuras, mangas curtas e gola tradicional de alfaiataria."
  },
  {
    id: "camisa-poplin-white-ruched",
    name: "Camisa Poplin Drapeada White",
    category: "conjuntos",
    price: 178.43,
    badge: "30% OFF",
    image: "imagens/roupa37.jpeg",
    description: "Camisa ajustada branca de mangas curtas com franzido estruturado abaixo do busto e decote acentuado."
  },
  {
    id: "top-cowl-neck-burgundy",
    name: "Top Drapeado Burgundy Cowl Neck",
    category: "conjuntos",
    price: 157.00,
    badge: "30% OFF",
    image: "imagens/roupa38.jpeg",
    description: "Top sem mangas na cor vinho/bordeaux com decote drapeado fluído estilo degagê, trazendo elegância e sensualidade."
  },
  {
    id: "camisa-pinstripe-navy-fitted",
    name: "Camisa Risca de Giz Navy Fitted",
    category: "conjuntos",
    price: 199.86,
    badge: "30% OFF",
    image: "imagens/roupa39.jpeg",
    description: "Camisa de mangas compridas acinturada em azul-marinho com risca de giz branca e punhos dobrados estendidos."
  },

  /* ------------------- LOTE 5 (roupa40 a roupa49) ------------------- */
  {
    id: "calca-jeans-flare-bootcut-vintage",
    name: "Calça Jeans Bootcut Classic Wash",
    category: "calcas",
    price: 264.14,
    badge: "30% OFF",
    image: "imagens/roupa40.jpeg",
    description: "Jeans de cintura média-baixa com lavagem estonada nos bolsos traseiros e barra flare clássica dos anos 2000."
  },
  {
    id: "tshirt-stars-leopard-skirt-set",
    name: "Conjunto Star Aesthetic & Saia Animal Print",
    category: "conjuntos",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa41.jpeg",
    description: "Camiseta preta de ombro caído com estampa de estrelas em patchwork e escritas estilo Y2K, combinada com minisaia jeans em padronagem de leopardo."
  },
  {
    id: "top-goth-offshoulder-denim-skirt",
    name: "Top Off-Shoulder Gothic Graphic Print",
    category: "blusas",
    price: 164.14,
    badge: "30% OFF",
    image: "imagens/roupa42.jpeg",
    description: "Blusa preta acinturada de ombro caído com estampa gráfica de paisagem urbana e tipografias góticas, perfeita para composições Y2K e alt-fashion."
  },
  {
    id: "top-goth-offshoulder-skirt-set",
    name: "Conjunto Suéter Estrelas & Saia Renda",
    category: "conjuntos",
    price: 214.14,
    badge: "30% OFF",
    image: "imagens/roupa43.jpeg",
    description: "Look completo estilo Harajuku/Y2K com suéter preto oversized estampado de estrelas brancas, saia de babados em renda, polainas brancas e acessórios goth."
  },
  {
    id: "frente-unica-burgundy-boho",
    name: "Frente Única Lace & Ring Burgundy",
    category: "conjuntos",
    price: 157.00,
    badge: "30% OFF",
    image: "imagens/roupa44.jpeg",
    description: "Top frente única tom vinho/bordeaux com argola metálica no busto, tecido rendado trabalhado e alças para amarração."
  },
  {
    id: "top-burgundy-lace-biker-set",
    name: "Top Bustiê Bordo com Renda",
    category: "conjuntos",
    price: 142.71,
    badge: "30% OFF",
    image: "imagens/roupa45.jpeg",
    description: "Top ajustado tom bordô acinturado com acabamento rendado no decote e mangas curtas abertas."
  },
  {
    id: "regata-ribbed-red-cargo-set",
    name: "Regata Canelada Red Classic",
    category: "conjuntos",
    price: 114.14,
    badge: "30% OFF",
    image: "imagens/roupa46.jpeg",
    description: "Regata básica canelada em tom vermelho-fechado com alças médias e caimento justo perfeito."
  },
  {
    id: "look-urban-goth-white-shirt",
    name: "Conjunto Urban Goth com Camisa Branca",
    category: "conjuntos", // corrigido para conjuntos
    price: 299.86,
    badge: "30% OFF",
    image: "imagens/roupa47.jpeg",
    description: "Look completo de estilo urbano gótico composto por calça wide leg com lavagem escura estonada e sobreposição marcante."
  },
  {
    id: "top-plum-lace-flared-jeans",
    name: "Top Bustiê Plum Gothic Lace",
    category: "conjuntos",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa48.jpeg",
    description: "Blusa acinturada tom ameixa escuro com decote coração bordado em renda preta e mangas curtas estruturadas."
  },
  {
    id: "sueter-vneck-charcoal-knit",
    name: "Suéter Tricot Decote V Charcoal",
    category: "conjuntos",
    price: 242.71,
    badge: "30% OFF",
    image: "imagens/roupa49.jpeg",
    description: "Blusa de tricot leve tom cinza-grafite com decote V alongado e tramas caneladas clássicas."
  },

  /* ------------------- LOTE 6 (roupa50 a roupa59) ------------------- */
  {
    id: "sueter-vneck-charcoal-bootcut-set",
    name: "Blusa Off-Shoulder Burning Soul Cross",
    category: "blusas",
    price: 235.57,
    badge: "30% OFF",
    image: "imagens/roupa50.jpeg",
    description: "Blusa preta de ombro caído com estampa frontal 'Burning Soul' de cruz com caveira e coroa, detalhes de alças duplas e barra acinturada."
  },
  {
    id: "top-double-layer-red-black-y2k",
    name: "Blusa Sobreposta Layered Red & Black",
    category: "conjuntos",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa51.jpeg",
    description: "Top com efeito de dupla camada trazendo blusa preta de mangas curtas e decote V sobreposta a uma regata vermelha."
  },
  {
    id: "vestido-mini-halter-black-ruffle",
    name: "Vestido Mini Halter Ruffle Black",
    category: "vestidos",
    price: 271.28,
    badge: "30% OFF",
    image: "imagens/roupa52.jpeg",
    description: "Vestido curto preto de decote frente única acentuado, cintura drapeada e saia rodada em babados fluídos."
  },
  {
    id: "vestido-longo-chiffon-layers-white",
    name: "Vestido Longo Chiffon Asymmetrical White",
    category: "vestidos",
    price: 457.00,
    badge: "30% OFF",
    image: "imagens/roupa53.jpeg",
    description: "Vestido longo fluido na cor branca com decote quadrado, alças médias e saia em camadas assimétricas de chiffon."
  },
  {
    id: "regata-camisole-white-lace-boho",
    name: "Regata Camisole White Lace Trim",
    category: "blusas",
    price: 121.28,
    badge: "30% OFF",
    image: "imagens/roupa54.jpeg",
    description: "Regata branca de alcinhas delicadas com acabamento em renda floral no decote e na barra, perfeita para compor o estilo Y2K/Coquette."
  },
  {
    id: "top-striped-longsleeve-lace-collar",
    name: "Blusa Listrada Knit com Renda Decote",
    category: "blusas",
    price: 185.57,
    badge: "30% OFF",
    image: "imagens/roupa55.jpeg",
    description: "Blusa de mangas longas canelada com padronagem de listras em tom marrom e bege, apresentando detalhe interno de renda branca no decote."
  },
  {
    id: "jaqueta-hoodie-zip-slim-gray",
    name: "Moletom Zip Hoodie Fitted Heather Gray",
    category: "jaquetas",
    price: 285.57,
    badge: "30% OFF",
    image: "imagens/roupa56.jpeg",
    description: "Casaco de moletom cinza-mescla acinturado com zíper duplo frontal, capuz amplo e ajustado ao corpo."
  },
  {
    id: "blusa-manga-longa-henley-burgundy-lace",
    name: "Blusa Henley Burgundy com Renda",
    category: "conjuntos",
    price: 178.43,
    badge: "30% OFF",
    image: "imagens/roupa57.jpeg",
    description: "Blusa acinturada em tom vinho com abotoamento henley frontal e aplicação delicada de renda branca no decote arredondado."
  },
  {
    id: "cardigan-oversized-brown-corset-set",
    name: "Cardigan Wool Oversized Espresso Brown",
    category: "conjuntos",
    price: 327.00,
    badge: "30% OFF",
    image: "imagens/roupa58.jpeg",
    description: "Cardigan de tricot encorpado em tom marrom-café com abotoamento frontal, caimento solto e estilo retrô acolhedor."
  },
  {
    id: "regata-rhinestone-bebe-y2k-black",
    name: "Regata Rhinestone Glam Y2K Black",
    category: "conjuntos",
    price: 135.57,
    badge: "30% OFF",
    image: "imagens/roupa59.jpeg",
    description: "Regata preta estilo cavada com aplicação de strass brilhantes no peito, remetendo ao estilo clássico glam das baladas dos anos 2000."
  },

  /* ------------------- LOTE 7 (roupa60 a roupa69) ------------------- */
  {
    id: "jaqueta-hoodie-fur-lined-gray",
    name: "Jaqueta Zip Hoodie Fleece Heather Gray",
    category: "jaquetas",
    price: 342.71,
    badge: "30% OFF",
    image: "imagens/roupa60.jpeg",
    description: "Jaqueta de moletom cinza acinturada com interior do capuz peluciado em fleece, zíper duplo frontal e furos para os polegares nos punhos."
  },
  {
    id: "colecao-tops-lace-henley-aesthetic",
    name: "Blusa Henley Ribbed com Renda Decote",
    category: "blusas",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa61.jpeg",
    description: "Blusa canelada acinturada de mangas longas com abotoamento henley frontal e barra interna de renda delicada."
  },
  {
    id: "regata-camisole-corset-ruched-black",
    name: "Regata Bustiê Drapeada Black Lace",
    category: "blusas",
    price: 142.71,
    badge: "30% OFF",
    image: "imagens/roupa62.jpeg",
    description: "Regata ajustada preta com decote em V bordado em renda, detalhe de lacinho central e corpo levemente drapeado."
  },
  {
    id: "camisa-slim-black-cargo-skirt-set",
    name: "Camisa Alfaiataria Fitted Pitch Black",
    category: "blusas",
    price: 185.57,
    badge: "30% OFF",
    image: "imagens/roupa63.jpeg",
    description: "Camisa de mangas compridas em algodão preto com modelagem acinturada, abotoamento frontal e gola de estrutura clássica."
  },
  {
    id: "look-complete-goth-plum-bootcut",
    name: "Top Bustiê Plum Gothic Velvet",
    category: "conjuntos",
    price: 164.14,
    badge: "30% OFF",
    image: "imagens/roupa64.jpeg",
    description: "Blusa tom ameixa escuro com modelagem bustiê acinturada, decote quadrado com viés rendado e alças estruturadas."
  },
  {
    id: "top-asymmetric-offshoulder-black-cross",
    name: "Blusa Asymmetric Shoulder Pitch Black",
    category: "blusas",
    price: 157.00,
    badge: "30% OFF",
    image: "imagens/roupa65.jpeg",
    description: "Blusa preta de corte fluido com decote assimétrico ombro a ombro e alça fina única, ideal para composições com colares marcantes."
  },
  {
    id: "calca-jeans-bootcut-y2k-lowrise",
    name: "Calça Jeans Bootcut Low-Rise Tinted Wash",
    category: "calcas",
    price: 285.57,
    badge: "30% OFF",
    image: "imagens/roupa66.jpeg",
    description: "Calça jeans de cintura baixa com lavagem azul marmorizada estonada, fivela integrada no cós e barra flare marcante estilo anos 2000."
  },
  {
    id: "jaqueta-biker-leather-fitted-black",
    name: "Jaqueta Biker Couro Fitted Slim",
    category: "jaquetas",
    price: 399.86,
    badge: "30% OFF",
    image: "imagens/roupa67.jpeg",
    description: "Jaqueta estilo biker curta em material sintético preto acinturada, com fechamento por zíper e gola alta com botão de pressão."
  },
  {
    id: "jaqueta-hoodie-zip-black-denim-set",
    name: "Jaqueta Zip Hoodie Waffle Thermal Black",
    category: "jaquetas",
    price: 314.14,
    badge: "30% OFF",
    image: "imagens/roupa68.jpeg",
    description: "Jaqueta de malha térmica waffle preta com capuz, zíper frontal e estampas e bordados temáticos no peito."
  },
  {
    id: "sueter-vneck-offshoulder-knit-gray",
    name: "Suéter Off-Shoulder Knit Charcoal",
    category: "blusas",
    price: 257.00,
    badge: "30% OFF",
    image: "imagens/roupa69.jpeg",
    description: "Suéter em tricot macio tom cinza-mescla com decote V amplo que permite usá-lo de ombro caído sobreposto a regatas e tops."
  },

  /* ------------------- LOTE 8 (roupa70 a roupa79) ------------------- */
  {
    id: "jaqueta-couro-washed-vintage-rocker",
    name: "Jaqueta Couro Washed Olive Biker",
    category: "jaquetas",
    price: 428.43,
    badge: "30% OFF",
    image: "imagens/roupa70.jpeg",
    description: "Jaqueta em couro sintético com acabamento estonado e textura envelhecida em tom oliva/cinza, zíper frontal e estilo rocker imponente."
  },
  {
    id: "colete-pinstripe-tailored-vintage",
    name: "Colete Alfaiataria Pinstripe Vintage",
    category: "blusas",
    price: 199.86,
    badge: "30% OFF",
    image: "imagens/roupa71.jpeg",
    description: "Colete de alfaiataria acinturado com abotoamento frontal e padronagem risca de giz, ideal para sobreposições com camisas e camisetas."
  },
  {
    id: "regata-corset-bustier-black-lace-y2k",
    name: "Regata Bustiê Black Lace Bow",
    category: "conjuntos",
    price: 149.86,
    badge: "30% OFF",
    image: "imagens/roupa72.jpeg",
    description: "Top bustiê justo em malha preta com taças estruturadas e aplicação de renda trabalhada com laço delicado no decote."
  },
  {
    id: "top-henley-longsleeve-burgundy-ribbed",
    name: "Blusa Henley Ribbed Wine Red",
    category: "conjuntos",
    price: 171.28,
    badge: "30% OFF",
    image: "imagens/roupa73.jpeg",
    description: "Blusa acinturada em tom vinho/bordeaux de mangas longas com gola henley de abotoamento delicado e malha canelada."
  },
  {
    id: "jaqueta-windbreaker-oversized-black",
    name: "Jaqueta Windbreaker Cropped Black",
    category: "conjuntos",
    price: 299.86,
    badge: "30% OFF",
    image: "imagens/roupa74.jpeg",
    description: "Jaqueta corta-vento oversized curta em tecido leve preto com zíper frontal, punhos elásticos e visual streetwear despojado."
  },
  {
    id: "top-henley-longsleeve-heather-grey",
    name: "Blusa Henley Fitted Heather Grey",
    category: "conjuntos",
    price: 164.14,
    badge: "30% OFF",
    image: "imagens/roupa75.jpeg",
    description: "Blusa acinturada de mangas longas em malha canelada cinza-mescla com detalhe de gola henley e acabamento interno rendado."
  },
  {
    id: "sueter-fuzzy-knit-charcoal-lace-trim",
    name: "Suéter Textured Knit Grey com Renda",
    category: "blusas",
    price: 264.14,
    badge: "30% OFF",
    image: "imagens/roupa76.jpeg",
    description: "Suéter em tricot felpudo cinza-mescla com decote V profundo alongado e sobreposição interna de renda preta no colo."
  },
  {
    id: "top-striped-vneck-maroon-longsleeve",
    name: "Blusa Listrada V-Neck Maroon",
    category: "conjuntos",
    price: 178.43,
    badge: "30% OFF",
    image: "imagens/roupa77.jpeg",
    description: "Blusa de mangas longas com decote V e estampa de listras horizontais em tom bordô e branco, perfeita para o dia a dia."
  },
  {
    id: "tshirt-vintage-nyc-graphic-cream",
    name: "Camiseta Vintage NYC Graphic Cream",
    category: "blusas",
    price: 142.71,
    badge: "30% OFF",
    image: "imagens/roupa78.jpeg",
    description: "Camiseta em tom creme/off-white com decote canoa e estampa gráfica universitária estilo vintage com efeito desgastado."
  },
  {
    id: "sueter-drapeado-knit-black-coquette",
    name: "Suéter Drapeado Off-Shoulder Black",
    category: "acessorios",
    price: 249.86,
    badge: "30% OFF",
    image: "imagens/roupa79.jpeg",
    description: "Suéter acinturado em tricot preto macio com decote ombro a ombro drapeado e mangas compridas de caimento fluido."
  },

  /* ------------------- LOTE 9 (roupa80 a roupa89) ------------------- */
  {
    id: "kit-acessorios-golden-seashell-pearls",
    name: "Kit Acessórios Golden Seashell & Pearls",
    category: "acessorios",
    price: 128.43,
    badge: "30% OFF",
    image: "imagens/roupa80.jpeg",
    description: "Conjunto praiano elegante banhado a dourado, contendo colar de estrelas e conchas com pérolas, piranha estruturada e anéis combinando."
  },
  {
    id: "kit-presilhas-polka-dot-vintage",
    name: "Kit Presilhas Tic-Tac Polka Dot",
    category: "acessorios",
    price: 57.00,
    badge: "30% OFF",
    image: "imagens/roupa81.jpeg",
    description: "Jogo de presilhas estilo tic-tac retrô com estampa poá (polka dot) nas cores vermelho, preto e branco para um visual vintage/coquette."
  },
  {
    id: "kit-presilhas-stars-silver-y2k",
    name: "Kit Presilhas Metallic Stars Y2K",
    category: "acessorios",
    price: 71.28,
    badge: "30% OFF",
    image: "imagens/roupa82.jpeg",
    description: "Cartela com presilhas e grampos prateados em formatos geométricos de estrelas vazadas e maciças. Estética pura dos anos 2000."
  },
  {
    id: "top-camisole-satin-black-floral",
    name: "Regata Camisole Satin Black Floral",
    category: "blusas",
    price: 142.71,
    badge: "30% OFF",
    image: "imagens/roupa83.jpeg",
    description: "Top acinturado em cetim preto com delicada estampa floral branca, decote V contrastante em off-white e alcinhas ajustáveis."
  },
  {
    id: "kit-pulseiras-boho-mermaid-beach",
    name: "Kit Pulseiras Boho Beach & Shells",
    category: "acessorios",
    price: 92.71,
    badge: "30% OFF",
    image: "imagens/roupa84.jpeg",
    description: "Conjunto de pulseiras artesanais compostas por búzios naturais, pedras turquesa, macramê trançado azul e pingentes metálicos praianos."
  },
  {
    id: "kit-piranhas-flower-clear-blue",
    name: "Kit Piranhas Flower Glass Blue",
    category: "acessorios",
    price: 65.57,
    badge: "30% OFF",
    image: "imagens/roupa85.jpeg",
    description: "Trio de piranhas para cabelo em acrílico translúcido em formato de flor tropical em dégradé azul-piscina e cristal."
  },
  {
    id: "top-peplum-halter-navy-paisley",
    name: "Top Halter Peplum Navy Pattern",
    category: "blusas",
    price: 157.00,
    badge: "30% OFF",
    image: "imagens/roupa86.jpeg",
    description: "Top frente única azul-marinho com decote franzido, estampa abstrata sutil e barra peplum fluida em babados."
  },
  {
    id: "kit-brincos-starfish-golden-summer",
    name: "Kit Brincos & Acessórios Golden Starfish",
    category: "acessorios",
    price: 114.14,
    badge: "30% OFF",
    image: "imagens/roupa87.jpeg",
    description: "Mix variado de brincos, argolas e gargantilhas com texturas metálicas em formatos de estrela-do-mar e conchas banhadas a ouro."
  },
  {
    id: "kit-piranhas-hibiscus-burgundy-black",
    name: "Kit Piranhas Hibiscus Deep Red & Black",
    category: "acessorios",
    price: 61.28,
    badge: "30% OFF",
    image: "imagens/roupa88.jpeg",
    description: "Kit de presilhas/piranhas de cabelo em formato de flor hibisco nas cores bordô marmorizado e preto brilhante."
  },
  {
    id: "kit-acessorios-gold-flower-clasp-rings",
    name: "Kit Semijóias Golden Flower & Charms",
    category: "acessorios",
    price: 121.28,
    badge: "30% OFF",
    image: "imagens/roupa89.jpeg",
    description: "Set elegante contendo piranha metálica dourada floral, pulseira delicada com pingentes de trevo de quatro folhas e anéis minimalistas."
  }
];

/* 
=============================================================================
  FUNÇÕES AUXILIARES E FORMATADORES
=============================================================================
*/

const formatPrice = value =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);

const imageUrl = (product) => {
  if (!product || !product.image) return '';
  return product.image;
};

const storageKey = "novotec-cart";
let cart = [];

try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");

  if (Array.isArray(stored)) {
    cart = stored.filter(item =>
      products.some(product => product.id === item.id) &&
      ["P", "M", "G", "U"].includes(item.size) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= 99
    );
  }
} catch {
  cart = [];
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  } catch {}

  renderCart();
}

function addToCart(id, size = "M") {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id && item.size === size);

  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + 1);
  } else {
    cart.push({ id, size, quantity: 1 });
  }

  saveCart();
  openCart();
}

/* Tema claro e escuro */
const themeButton = document.getElementById("theme-button");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeButton) {
    themeButton.textContent = theme === "light" ? "☾" : "☼";
    themeButton.setAttribute(
      "aria-label",
      theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"
    );
  }

  try {
    localStorage.setItem("novotec-theme", theme);
  } catch {}
}

let savedTheme = "dark";

try {
  savedTheme = localStorage.getItem("novotec-theme") === "light"
    ? "light"
    : "dark";
} catch {}

setTheme(savedTheme);

if (themeButton) {
  themeButton.addEventListener("click", () => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "light" : "dark"
    );
  });
}

/* Controle do Carrinho Drawer */
const drawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("cart-overlay");
let previousFocus = null;

function openCart() {
  if (!drawer || !overlay) return;
  previousFocus = document.activeElement;
  overlay.hidden = false;
  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");
  drawer.classList.add("open");
  document.body.classList.add("cart-open");
  document.getElementById("close-cart")?.focus();
}

function closeCart() {
  if (!drawer || !overlay) return;
  previousFocus?.focus();
  drawer.inert = true;
  drawer.setAttribute("aria-hidden", "true");
  drawer.classList.remove("open");
  overlay.hidden = true;
  document.body.classList.remove("cart-open");
}

document.getElementById("cart-button")?.addEventListener("click", openCart);
document.getElementById("close-cart")?.addEventListener("click", closeCart);
overlay?.addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && drawer?.classList.contains("open")) {
    closeCart();
  }

  if (event.key === "Tab" && drawer?.classList.contains("open")) {
    const buttons = [...drawer.querySelectorAll("button:not(:disabled)")];
    const first = buttons[0];
    const last = buttons[buttons.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(entry => entry.id === item.id);
    return sum + (product ? (product.price * 0.70) * item.quantity : 0);
  }, 0);

  const cartCountEl = document.getElementById("cart-count");
  const cartTotalEl = document.getElementById("cart-total");
  const checkoutBtnEl = document.getElementById("checkout-button");

  if (cartCountEl) cartCountEl.textContent = count;
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
  if (checkoutBtnEl) checkoutBtnEl.disabled = count === 0;

  const container = document.getElementById("cart-items");
  if (!container) return;

  if (!count) {
    container.innerHTML =
      '<p class="cart-empty">Seu carrinho está vazio.<br>Encontre algo que tenha a sua cara.</p>';
    return;
  }

  container.innerHTML = cart.map((item, index) => {
    const product = products.find(entry => entry.id === item.id);
    if (!product) return "";
    const discountedPrice = product.price * 0.70;

    return `
      <div class="cart-line">
        <img src="${imageUrl(product)}" alt="${product.name}" loading="lazy">
        <div class="cart-line-info">
          <h3>${product.name}</h3>
          <p>Tamanho ${item.size}</p>
          <strong>${formatPrice(discountedPrice * item.quantity)}</strong>
          <div class="cart-line-controls">
            <button type="button" data-action="decrease" data-index="${index}"
                    aria-label="Diminuir quantidade">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase" data-index="${index}"
                    aria-label="Aumentar quantidade">+</button>
            <button class="remove" type="button" data-action="remove"
                    data-index="${index}">Remover</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

document.getElementById("cart-items")?.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const index = Number(button.dataset.index);
  if (!cart[index]) return;

  if (button.dataset.action === "remove") {
    cart.splice(index, 1);
  }

  if (button.dataset.action === "increase") {
    cart[index].quantity = Math.min(99, cart[index].quantity + 1);
  }

  if (button.dataset.action === "decrease") {
    cart[index].quantity--;

    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
  }

  saveCart();
});

renderCart();

/* 
=============================================================================
  RENDERIZAÇÃO DO CATÁLOGO E DETALHES DO PRODUTO
=============================================================================
*/

const queryId = new URLSearchParams(window.location.search).get("produto");
const selectedProduct = products.find(product => product.id === queryId);

if (queryId) {
  const homeView = document.getElementById("home-view");
  const detailView = document.getElementById("detail-view");

  if (homeView) homeView.hidden = true;
  if (detailView) detailView.hidden = false;

  if (!selectedProduct) {
    if (detailView) {
      detailView.innerHTML = `
        <h1>Peça não encontrada.</h1>
        <a href="index.html#colecao">Voltar para a coleção</a>
      `;
    }
  } else {
    document.title = `${selectedProduct.name} | NovoTec Atelier`;

    const sizes = (selectedProduct.category === "acessorios" || selectedProduct.category === "conjuntos")
      ? ["U", "P", "M", "G"]
      : ["P", "M", "G"];

    const discountedPrice = selectedProduct.price * 0.70;

    if (detailView) {
      detailView.innerHTML = `
        <a class="back-link" href="index.html#colecao">← VOLTAR PARA A COLEÇÃO</a>
        <div class="detail-layout">
          <img class="detail-image" src="${imageUrl(selectedProduct)}" alt="${selectedProduct.name}" loading="lazy">
          <div class="detail-info">
            <p class="eyebrow accent">
              NOVOTEC ATELIER / ${selectedProduct.category.toUpperCase()}
            </p>
            <h1>${selectedProduct.name}</h1>
            <div class="detail-price">
              <span style="text-decoration: line-through; opacity: 0.6; font-size: 0.9em; margin-right: 8px;">${formatPrice(selectedProduct.price)}</span>
              <strong style="color: #e63946;">${formatPrice(discountedPrice)}</strong>
            </div>
            <p>${selectedProduct.description}</p>
            <div class="size-label">ESCOLHA O TAMANHO</div>
            <div class="size-options">
              ${sizes.map(size => `
                <button class="size-button ${size === "M" ? "selected" : ""}"
                        type="button" data-size="${size}">${size}</button>
              `).join("")}
            </div>
            <button id="detail-add" class="primary-button detail-add" type="button">
              ADICIONAR AO CARRINHO <span>↗</span>
            </button>
            <p class="detail-note">
              Pagamento por Pix ou cartão via Mercado Pago.<br>
              Configure entrega e frete antes de publicar.
            </p>
          </div>
        </div>
      `;

      detailView.querySelectorAll(".size-button").forEach(button => {
        button.addEventListener("click", () => {
          detailView.querySelectorAll(".size-button").forEach(item =>
            item.classList.remove("selected")
          );
          button.classList.add("selected");
        });
      });

      document.getElementById("detail-add")?.addEventListener("click", () => {
        const sizeBtn = detailView.querySelector(".size-button.selected");
        const size = sizeBtn ? sizeBtn.dataset.size : "M";
        addToCart(selectedProduct.id, size);
      });
    }
  }
} else {
  let activeFilter = "todos";
  const search = document.getElementById("search");
  const sort = document.getElementById("sort");
  const grid = document.getElementById("product-grid");

  function renderProducts() {
    if (!grid) return;
    const term = search ? search.value.trim().toLocaleLowerCase("pt-BR") : "";

    const visible = products.filter(product => {
      const matchesCategory =
        activeFilter === "todos" || product.category === activeFilter;

      const matchesSearch =
        product.name.toLocaleLowerCase("pt-BR").includes(term);

      return matchesCategory && matchesSearch;
    });

    if (sort) {
      if (sort.value === "lowest") {
        visible.sort((a, b) => (a.price * 0.7) - (b.price * 0.7));
      }
      if (sort.value === "highest") {
        visible.sort((a, b) => (b.price * 0.7) - (a.price * 0.7));
      }
    }

    grid.innerHTML = visible.map(product => {
      const discountedPrice = product.price * 0.70;
      return `
      <article class="product-card">
        <a class="product-image-wrap"
           href="index.html?produto=${product.id}"
           target="_blank"
           rel="noopener"
           aria-label="Ver ${product.name} em outra aba">
          <img class="product-image" src="${imageUrl(product)}"
               alt="${product.name} em look alternativo" loading="lazy">
          <span class="product-badge" style="background-color: #e63946; color: #fff;">30% OFF</span>
        </a>
        <div class="product-category">${product.category.toUpperCase()}</div>
        <h3>
          <a href="index.html?produto=${product.id}" target="_blank"
             rel="noopener">${product.name}</a>
        </h3>
        <div class="product-price">
          <span style="text-decoration: line-through; opacity: 0.5; font-size: 0.85em; margin-right: 6px;">${formatPrice(product.price)}</span>
          <strong style="color: #e63946;">${formatPrice(discountedPrice)}</strong>
        </div>
        <button class="add-button" type="button" data-add="${product.id}">
          + ADICIONAR AO CARRINHO
        </button>
      </article>
    `}).join("");

    const emptyMsg = document.getElementById("empty-message");
    if (emptyMsg) emptyMsg.hidden = visible.length > 0;
  }

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      document.querySelectorAll(".filter").forEach(item =>
        item.classList.toggle("active", item === button)
      );

      renderProducts();
    });
  });

  grid?.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (!button) return;

    const prodId = button.dataset.add;
    const prod = products.find(p => p.id === prodId);
    const size = prod && prod.category === "acessorios" ? "U" : "M";

    addToCart(prodId, size);
  });

  search?.addEventListener("input", renderProducts);
  sort?.addEventListener("change", renderProducts);
  renderProducts();

  // Animação GSAP
  if (window.gsap &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.from(".hero-copy > *", {
      opacity: 0,
      y: 22,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out"
    });
  }
}

/* Checkout Mercado Pago */
document.getElementById("checkout-button")?.addEventListener("click", async () => {
  if (!cart.length) return;

  const button = document.getElementById("checkout-button");
  const message = document.getElementById("checkout-message");

  button.disabled = true;
  message.textContent = "Conectando ao pagamento seguro...";

  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Não foi possível iniciar o pagamento.");
    }

    const url = new URL(data.checkoutUrl);
    const allowedHosts = [
      "mercadopago.com.br",
      "www.mercadopago.com.br",
      "www.mercadopago.com"
    ];

    if (url.protocol !== "https:" || !allowedHosts.includes(url.hostname)) {
      throw new Error("Endereço de pagamento inválido.");
    }

    window.location.assign(url.href);
  } catch (error) {
    message.textContent = error instanceof SyntaxError
      ? "Inicie o servidor de pagamento para ativar o checkout."
      : error.message;

    button.disabled = false;
  }
});
