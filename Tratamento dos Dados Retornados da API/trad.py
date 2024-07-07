import json

# Carrega o JSON a partir do arquivo
with open('agenda_olimpica.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
traducoes_esportes = {
    "Escrime": "Esgrima",
    "Taekwondo": "Taekwondo",
    "Judo": "Judô",
    "Lutte": "Luta",
    "Tennis": "Tênis",
    "Boxe": "Boxe",
    "Surf": "Surfe",
    "Volley-ball": "Voleibol",
    "Natation": "Natação",
    "Aviron": "Remo",
    "Canoë-kayak sprint": "Canoagem de Velocidade",
    "Badminton": "Badminton",
    "Gymnastique rythmique": "Ginástica Rítmica",
    "Basketball": "Basquete",
    "Football": "Futebol",
    "Athlétisme": "Atletismo",
    "Cyclisme": "Ciclismo",
    "Voile": "Vela",
    "Escalade": "Escalada",
    "Golf": "Golfe",
    "Handball": "Handebol",
    "Hockey": "Hóquei",
    "Rugby": "Rugby",
    "Natation artistique": "Natação Artística",
    "Plongeon": "Saltos Ornamentais",
    "Water-polo": "Polo Aquático",
    "BMX Racing": "BMX Racing",
    "Tir": "Tiro",
    "Escalade": "Escalada",
    "Pentathlon moderne": "Pentatlo Moderno",
    "Para Cyclisme sur piste": "Ciclismo de Pista Paralímpico",
    "Natation marathon": "Maratona de Natação",
    "Cyclisme sur route - Contre-la-montre-individuel": "Ciclismo de Estrada - Contra Relógio Individual",
    "Para Equitation": "Equitação Paralímpica",
    "Para Tir à l'arc": "Tiro com Arco Paralímpico",
    "Para-athlétisme (marathon paralympique)": "Atletismo Paralímpico (Maratona)",
    "Tennis fauteuil": "Tênis em Cadeira de Rodas",
    "Para Athlétisme": "Atletismo Paralímpico",
    "Rugby fauteuil": "Rugby em Cadeira de Rodas",
    "Basketball fauteuil": "Basquete em Cadeira de Rodas",
    "Para Natation": "Natação Paralímpica",
    "Cycling Mountain Bike": "Mountain Bike",
    "Athlétisme marche": "Marcha Atlética",
    "Cécifoot": "Futebol de Cegos",
    "Para Tir Sportif": "Tiro Esportivo Paralímpico",
    "Para Cyclisme": "Ciclismo Paralímpico",
    "Volleyball assis": "Voleibol Sentado",
    "Para Natation": "Natação Paralímpica",
    "Para Aviron": "Remo Paralímpico",
    "Para Canoë": "Canoagem Paralímpica",
    "Para Judo": "Judô Paralímpico",
    "Rugby fauteuil": "Rugby em Cadeira de Rodas",
    "Para Equitation": "Equitação Paralímpica",
    "Athlétisme - marche": "Marcha Atlética",
    "Cyclisme sur route": "Ciclismo de Estrada",
    "Cécifoot": "Futebol de 5",
    "Para Athlétisme": "Atletismo Paralímpico",
    "Boccia": "Boccia",
    "Goalball": "Goalball",
    "Para badminton": "Badminton Paralímpico",
    "Para Haltérophilie": "Halterofilismo Paralímpico",
    "Basketball fauteuil": "Basquete em Cadeira de Rodas",
    "Para Tir à l'arc": "Tiro com Arco Paralímpico",
    "Para-athlétisme (marathon paralympique)": "Maratona Paralímpica",
    "Tennis de table": "Tênis de Mesa",
    "Tennis de table para": "Tênis de Mesa Paralímpico",
    "Pentathlon moderne": "Pentatlo Moderno",
    "Cyclisme sur piste": "Ciclismo de Pista",
    "Athlétisme marathon": "Maratona de Atletismo",
    "Tir à l'arc": "Tiro com Arco",
    "Sports équestres": "Esportes Equestres",
    "Escrime fauteuil": "Esgrima em Cadeira de Rodas",
    "Para Taekwondo": "Taekwondo Paralímpico",
    "Tennis fauteuil": "Tênis em Cadeira de Rodas",
    "Athlétisme - course sur route": "Corrida de Rua",
    "Cyclisme sur route - Contre-la-montre-individuel": "Ciclismo de Estrada - Contra Relógio Individual",
    "Skateboard - Street": "Skate Street",
    "Skateboard - Park": "Skate Park",
    "BMX freestyle": "BMX Freestyle",
    "Breaking": "Breaking",
    "Basketball 3x3": "Basquete 3x3",
    "Haltérophilie": "Levantamento de Peso",
    "Canoë-kayak slalom": "Canoagem Slalom"
}
# Atualizando os esportes usando o dicionário de traduções
for item in data:
    esportes_traduzidos = []
    # Processando cada esporte mencionado no item
    for esporte in item['esportes'].split(", "):
        esporte_nome, _, resto = esporte.partition(" (")  # Dividindo no primeiro " ("
        esporte_codigo = resto if resto else ""  # Manter o código, se presente
        esporte_traduzido = traducoes_esportes.get(esporte_nome, esporte_nome)  # Usa a tradução, se disponível
        if esporte_codigo:
            esporte_completo = f"{esporte_traduzido} ({esporte_codigo}"
        else:
            esporte_completo = esporte_traduzido
        esportes_traduzidos.append(esporte_completo)
    item['esportes'] = ", ".join(esportes_traduzidos)

# Salvando os dados atualizados de volta ao arquivo
with open('agenda_olimpica_updated.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print("Esportes traduzidos e dados atualizados com sucesso.")
