import json

with open('paris-2024-sites-de-competition.json', 'r') as file:
    data = json.load(file)['results']

dados_traduzidos = []

for item in data:
    item_traduzido = {
        "codigo_do_local": item.get("code_site", ""),
        "nome_do_local": item.get("nom_site", ""),
        "categoria_id": item.get("category_id", "").replace("venue-", "local-"),
        "esportes": item.get("sports", ""),
        "data_de_início": item.get("start_date", ""),
        "data_de_término": item.get("end_date", ""),
        "endereço": item.get("adress", None) if item.get("adress") else "Não disponível",
        "latitude": item.get("latitude", ""),
        "longitude": item.get("longitude", ""),
        "ponto_geográfico": item.get("point_geo", {})
    }
    dados_traduzidos.append(item_traduzido)

with open('agenda_olimpica.json', 'w', encoding='utf-8') as file:
    json.dump(dados_traduzidos, file, ensure_ascii=False, indent=4)

print("Dados traduzidos e salvos com sucesso em 'agenda_olimpica.json'.")
