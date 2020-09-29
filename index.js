export const removeMermaidGraph = doc => {
  const graphInitIndex = doc.indexOf('### Graph');
  const graphEndIndex = doc.lastIndexOf('```') + 3;
  if (graphInitIndex === -1 || graphEndIndex === -1) return doc;
  return doc.substr(0, graphInitIndex) + doc.substr(graphEndIndex);
 }
  
export const addPropertiesSubtitle = doc => {
  return doc.toString().replace(`## Properties`, `## Properties\n##### [*] required`);
}
  
export const format = doc =>
  addPropertiesSubtitle(removeMermaidGraph(doc));