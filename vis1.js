const spec = "vis1.vg.json";
vegaEmbed('#vis1', spec)
  // result.view provides access to the Vega View API
  .then(result => console.log(result))
  .catch(console.warn);
