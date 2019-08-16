render = (data) => {


    //**************/Render Ingredient List****************
    // searchTerms = ['bacon']
    document.getElementById('input').value = ""

    d3.select('#ingredients-list')
       .selectAll('li')
       .data(searchTerms)
       .enter()
       .append('li')
       .classed('ingredient-item', true)
       .text(function(d) {return d;})
       .on('click', function(d) {
            let index = searchTerms.indexOf(d);
            searchTerms.splice(index, 1);
            d3.select('#ingredients-list')
              .select('li').remove();
       getRecipes();
       });
       

    //****************/Render Tree*************************
    
    let width = window.innerWidth * .40;
    let height = window.innerHeight * .50;

    d3.select('svg').remove()
    const svg = d3.select('#visual').append('svg')
        .classed('svg-container', true)
        // .classed('draggable', true)
        .append('g').attr('transform', `translate(${width}, ${height}) rotate(0)`)
        
  
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
        .radius(d => d.y))
        .style('opacity', 0)
        .classed('link', true)
    
    const node = svg.append("g")
        .classed('node', true)
        .attr('stroke-width', 3)
        .selectAll('g')
        .data(information.descendants())
        .enter().append('g')
        .attr("transform", d => `
            rotate(${d.x * 180 / Math.PI - 90})
            translate(${d.y}, 0)`)
        .style('opacity', 0)


    node.append('circle')
        .attr("fill", "#555")
        .attr("r", 5);

    const text = node.append('text')
        .classed('recipe-link', true)
        .attr('dy', '0.31em')
        .attr("text-anchor", d => d.x >= 3 ? "end" : "start")
        .attr("x", d => d.x >= 3 ?  -6 : 6)
        .attr("transform", d => d.x >= 3 ? "rotate(180)" : null)
        .text(d => d.data.name)
        .style('opacity', 0)
        .on('mouseover', function(d) { changePicture(d.data.image);})
        .on('click', function(d) { window.open(d.data.url);});

   //********************** */Animations ***********************************
   
    move = () => {
        const t = d3.transition().duration(5000).ease(d3.easeLinear);

        svg.transition(t)
            // .delay(1500)
            .style("transform", `translate(${width-50}px, ${height+10}px) rotate(10deg)`)
            .transition(t)
            .style("transform", `translate(${width+30}px, ${height-40}px) rotate(-10deg)`)
            .transition(t)
            .style("transform", `translate(${ width+50}px, ${height+10}px) rotate(10deg`)
            .transition(t)
            .style("transform", `translate(${ width+5}px, ${height+30}px) rotate(-10deg)`)
            .on('end', move)

    }

    draw = () => {
            // Animation code got from https://bl.ocks.org/basilesimon/f164aec5758d16d51d248e41af5428e4
            const t = d3.transition().duration(500).ease(d3.easeLinear);
            if (link.node()) {
            let totalLength = link.node().getTotalLength();
                link.attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition(t)
                    .attr('stroke-dashoffset', 0)
                    .style('opacity', 1)
                } else {
                    resetSearch();
                }
    }

    fadeIn = () => {
        const t = d3.transition().duration(500).ease(d3.easeLinear);

        node.transition(t)
            .delay(500)
            .style('opacity', 1)

        text.transition(t)
            .delay(500)
            .style('opacity', 1)

    }


    // makeDraggable = (event) => {
    //     let ele = event.target

    //     ele.addEventListener('mousedown', startDrag);
    //     ele.addEventListener('mousemove', drag);
    //     ele.addEventListener('mouseup', endDrag);
    //     ele.addEventListener('mouseleave', endDrag);

    //     let selectedElement = false;

    //     function startDrag(event) {
    //         if (event.target.classList.contains('draggable')) {
    //             selectedElement = event.target;
    //             debugger
    //         }
    //     }

    //     function drag(event) {
    //         if (selectedElement) {
    //             event.preventDefault();
    //             let x = parseFloat(selectedElement.getAttributeNS(null, 'x'));
    //             selectedElement.setAttributeNS(null, 'x', x + 0.1);
    //         }
    //     }

    //     function endDrag(event) {
    //         selectedElement = false;
    //     }

    // }

        move(); 
        fadeIn(); 
        draw();
        // makeDraggable();

}
