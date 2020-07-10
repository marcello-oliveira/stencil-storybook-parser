export const removeMermaidGraph = doc => {
  const graphInitIndex = doc.indexOf('### Graph');
  const graphEndIndex = doc.lastIndexOf('```') + 3;
  if (graphInitIndex === -1 || graphEndIndex === -1) return doc;
  return doc.substr(0, graphInitIndex) + doc.substr(graphEndIndex);
}

export const addPropertiesSubtitle = doc => {
  const eventsIndex = doc.indexOf('## Events');
  const dependenciesIndex = doc.indexOf('## Dependencies');
  const footerIndex = doc.indexOf('----------------------------------------------');

  let propertySubtitleIndex = footerIndex - 1;
  if (eventsIndex !== -1) propertySubtitleIndex = eventsIndex - 1;
  else if (dependenciesIndex !== -1) propertySubtitleIndex = dependenciesIndex - 1;

  const propertiesSubtitle = `
  ##### [*****] required
  `;
  return doc.substring(0, propertySubtitleIndex) + propertiesSubtitle + doc.substring(propertySubtitleIndex);
}

export const format = doc =>
  addPropertiesSubtitle(removeMermaidGraph(doc));
