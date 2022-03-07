const getAllImagesUrl = (images) => {
  return [images.other["official-artwork"].front_default, images.other.dream_world.front_default, images.front_default]
}

const getFrenchDescription = (texts) => {
  return texts.filter(text => text.language.name === "fr")[0].flavor_text
}

const getAllStats = (stats) => {
  return stats.map(value => ({ name: value.stat.name, value: value.base_stat }))
}

const getAllTypes = (types) => {
  return types.map(value => (value.type.name))
}

const getFrenchName = (names) => {
  return names.filter(value => value.language.name === "fr")[0].name
}

const formatedPokemonInfos = (response1, response2) => {
  return {
    name: getFrenchName(response2.names),
    id: response1.id,
    color: response2.color.name === "white" ? "wheat" : response2.color.name,
    types: getAllTypes(response1.types),
    height: response1.height,
    weight: response1.weight,
    stats: getAllStats(response1.stats),
    description: getFrenchDescription(response2.flavor_text_entries),
    images: getAllImagesUrl(response1.sprites),
    price: Math.floor((response1.height * response1.weight * 2) / (response1.height * 5))
  }
}

export default formatedPokemonInfos;