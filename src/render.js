    // function render(data) {
    

    let data = [
        {id: "root", parent: ""},
        {id: "bacon1", parent: "root"},
        { id: "bacon2", parent: "root" },
        { id: "bacon3", parent: "root" },
        { id: "bacon4", parent: "root" },
        { id: "bacon5", parent: "root" },
        { id: "bacon6", parent: "root" },
        { id: "bacon7", parent: "root" },
        { id: "bacon8", parent: "root" },
        { id: "bacon9", parent: "root" },
        { id: "bacon10", parent: "root" },
        { id: "bacon11", parent: "root" },
        { id: "bacon12", parent: "root" },
        { id: "bacon13", parent: "root" },
        { id: "bacon14", parent: "root" },
        { id: "bacon15", parent: "root" },
        { id: "bacon16", parent: "root" },
        { id: "bacon17", parent: "root" },
        { id: "bacon18", parent: "root" },
        { id: "bacon19", parent: "root" },
        { id: "bacon20", parent: "root" },
        { id: "bacon21", parent: "root" },
        { id: "bacon22", parent: "root" },
        { id: "bacon23", parent: "root" },
        { id: "bacon24", parent: "root" },
        { id: "bacon25", parent: "root" },
        { id: "bacon26", parent: "root" },
        { id: "bacon27", parent: "root" },
        { id: "bacon28", parent: "root" },
        { id: "bacon29", parent: "root" },
        { id: "bacon30", parent: "root" },
    ]
    //Render modal
    const aboutBtn = document.getElementById('about-btn');
    const aboutModal = document.getElementById('about-modal');
    const aboutClose = document.getElementById('btn-close');

    window.onclick = function (e) {
        if (e.target == aboutModal) {
            aboutModal.style.display = 'none';
        }
    }

    aboutBtn.onclick = function () {
        aboutModal.style.display = 'block';
    }

    aboutClose.onclick = function () {
        aboutModal.style.display = 'none';
    }


    // Render Ingredient List
    // d3.select('#ingredients-list')
    //    .selectAll('li')
    //    .data(searchTerms)
    //    .enter()
    //    .append('li')
    //    .text(function(d) {return d;});

    //Render Tree

    d3.select('svg').remove()
    const svg = d3.select('#visual').append('svg')
        .classed('svg-container', true)
        .append('g').attr('transform', 'translate(637.5, 440) rotate(0)')
        
  
    const dataStructure = d3.stratify()
        .id(function (d) { return d.id; })
        .parentId(function (d) { return d.parent; })
        (data);
    const clusterLayout = d3.cluster().size([6.25, 250])
    const information = clusterLayout(dataStructure);

    const link = svg.append("g")
        .selectAll("path")
        .data(information.links())
        .enter().append("path")
        .attr("d", d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y));

    const node = svg.append("g")
        .attr('stroke-width', 3)
        .selectAll('g')
        .data(information.descendants())
        .enter().append('g')
        .attr("transform", d => `
            rotate(${d.x * 180 / Math.PI - 90})
            translate(${d.y}, 0)`)


    node.append('circle')
        .attr("fill", "#555")
        .attr("r", 5);

    const text = node.append('text')
        .classed('recipe-link', true)
        .attr('dy', '0.31em')
        .attr("text-anchor", d => d.x >= 3 ? "end" : "start")
        .attr("x", d => d.x >= 3 ?  -6 : 6)
        .attr("transform", d => d.x >= 3 ? "rotate(180)" : null)
        .text(d => d.data.id)
        .on('mouseover', function(d) { changePicture(d.data.image);})
        .on('click', function(d) { window.open(d.data.url);});
    
    
// }
