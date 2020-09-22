import chroma from 'chroma-js';

// finding levels
const levels = [50,100,200,300,400,500,600,700,800,900]

// generating a palette
function generatePalette(starterPalette)
{
    // creating a new colorPalette
    let newPalette ={
        paletteName : starterPalette.paletteName,
        id : starterPalette.id,
        emoji : starterPalette.emoji,
        colors : {}
    };

    // creating fields inside the color objects such as color{ 50 : [], 100 : [] ...}
    for(let level of levels)
    {
        newPalette.colors[level] = [];
    };

    for(let color of starterPalette.colors)
    {
        let scale = generateScale(color.color, 10).reverse();
        for(let i in scale)
        {
            newPalette.colors[levels[i]].push({
                name : `${color.name} ${levels[i]}`,
                id : color.name.toLowerCase().replace(/ /g,"-"),
                hex : scale[i],
                rgb : chroma(scale[i]).css(),
                rgba : chroma(scale[i]).css().replace('rgb','rgba').replace(')',  ",1.0)")
            })
        }
    }
    return newPalette;
}

function getRange(hexColor)
{
    const end = "#fff";
    return [
        chroma(hexColor).darken(1.4),
        hexColor,
        end
    ]
}

function generateScale(hexColor, noOfColors)
{
    return chroma.scale(getRange(hexColor)).mode("lab").colors(noOfColors)
}


export {generatePalette}