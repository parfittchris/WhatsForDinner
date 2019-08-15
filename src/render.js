    function render(data) {

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


    //Render Ingredient List
    d3.select('#ingredients-list')
       .selectAll('li')
       .data(searchTerms)
       .enter()
       .append('li')
       .text(function(d) {return d;});

    //Render Tree
    d3.select('svg').remove()
    const svg = d3.select('#visual').append('svg')
        .classed('svg-container', true)
        .append('g').attr('transform', 'translate(637.5, 440)')
  
    const dataStructure = d3.stratify()
        .id(function (d) { return d.id; })
        .parentId(function (d) { return d.parent; })
        (data);

    const clusterLayout = d3.cluster().size([(Math.random() * 300) + 100, 250])
    const information = clusterLayout(dataStructure);

    const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
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
            translate(${d.y}, 0)`
            );

    node.append('circle')
        .attr("fill", "#555")
        .attr("r", 5);

    node.append('text')
        .classed('recipe-link', true)
        .attr('dy', '0.31em')
        .attr('x', 6)
        .text(d => d.data.id)
        .on('hover', function(d) {console.log('hi')})
        .on('click', function(d) { window.open(d.data.url);});


   
}
