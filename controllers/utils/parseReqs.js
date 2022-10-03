// Parse normally formatted requirements
function parseNormSpecs(specs) {
  console.log(specs);
  // remove extraneous material and map the relevant data into a useful object
  let dataArray1 = specs
    .replace(/[®™\(\)@&]/g, "")
    .replace(/(nvidia):/gi, "$1")
    .replace(/(amd):/gi, "$1")
    .replace(/(intel):/gi, "$1")
    .replace(/(card):/gi, "$1/")
    .replace(/(drivers):/gi, "$1/")
    .match(/([\w ]+:)(<[\/\w]+>)? ?([\w\/,. \-\(\)+;\|]+)</g)
    .map((item) => {
      item = item.replace(/<\/?\w+> ?|[<+]/g, "");
      let split = item.split(":");
      console.log(split);
      if (split[0] !== "") {
        split[0] = split[0].replace(/ /g, "");
        return { [split[0]]: split[1].trim() };
      }
    });
  //   console.log(dataArray1);
  return dataArray1;
}

// Parse requirements from older games
function parseOldSpecs(specs) {
  // grap all the relevant material from the html
  let specs1 = specs.match(/[\w \/\-+]+,| [\w \/\-+]+ ?</g).map((item) => {
    item = item.replace(/[<>+,]/g, "");
    // console.log(item);
    // pull out specific details of relevant requirements
    if (item.match(/processor/i)) {
      return {
        ["Processor"]: item.replace(/ ?(\w+ \w+) proc[\w ]+/i, "$1").trim(),
      };
    }
    if (item.match(/wind/i)) {
      return { ["OS"]: item.replace(/ ?(\w+ \w+) ?/i, "$1").trim() };
    }
    if (item.match(/ram/i)) {
      return { ["Memory"]: item.replace(/ ?(\w+) ?ra[\w ]+/i, "$1").trim() };
    }
    if (item.match(/video card/i)) {
      return { ["Graphics"]: item.replace(/ ?(\w+) ?vid[\w ]+/i, "$1").trim() };
    }
    // we don't need mouse and keyboard info for now . . .
    return "";
  });
  const index = specs1.indexOf("");
  if (index > -1) {
    // only splice array when item is found
    specs1.splice(index); // 2nd parameter means remove one item only
  }
  return specs1;
}

// General parsing hub. takes in system requirements from steam api and returns objectified recommended and minimum requirements
function parseSpecs(requirements) {
  // console.log(requirements);
  let min = [];
  let rec = [];
  // recents games have separate recommended section, old ones don't
  if (requirements.recommended) {
    let specs = requirements.recommended;
    rec = parseNormSpecs(specs);
  }
  if (requirements.minimum) {
    // pull out the recommended section from the minimum
    let specs = requirements.minimum;
    if (specs.match(/Recommended:/)) {
      specs = specs.split(/Recommended:/);
      // console.log(specs);
      min = parseOldSpecs(specs[0]);
      rec = parseOldSpecs(specs[1]);
    } else {
      min = parseNormSpecs(specs);
    }
  }

  console.log(rec);
  console.log(min);
  // finalizeParse(min, parsed);
  // finalizeParse(rec, parsed);
  return { rec, min };
}

// returns json object with rec containing all information from recommended section of steam api in object form and 
// min doing the same for information from minimum section
module.exports = { parseSpecs };
