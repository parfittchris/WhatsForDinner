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

    
    //Render Tree
    const svg = d3.select('#visual').append('svg')
        .attr('width', 950).attr('height', 640)
        .append('g').attr('transform', 'translate(475.5, 320)')

    let data = [{ "id": "Chicken", "parent": "" },
    { "id": "Cheese", "parent": "Chicken" },
    { "id": "Peppers", "parent": "Chicken" },
    { "id": "Salsa", "parent": "Chicken" },
    { "id": "Broccoli", "parent": "Chicken" },
    { "id": "Lobster", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" },
    { "id": "Chocolate", "parent": "Chicken" }
    ];

    const dataStructure = d3.stratify()
        .id(function (d) { return d.id; })
        .parentId(function (d) { return d.parent; })
        (data);

    const clusterLayout = d3.cluster().size([300, 250])
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
        translate(${d.y}, 0)
      `);

    node.append('circle')
        .attr("fill", "#555")
        .attr("r", 5);

    node.append('text')
        .attr('dy', '0.31em')
        .attr('x', 6)
        // .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
        // .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
        .text(d => d.data.id)
        
    
        
    
    
    
    
    
    
    
    
    // const circles = svg.append('g').selectAll('circle')
    //     .data(information.descendants());

    // circles.enter().append('circle')
    //     .attr('r', 10)
    //     .attr("transform", function (d) { return "translate(" + d3.pointRadial(d.x, d.y) + ")"; })
    //     .style("fill", "#69b3a2")
    //     .attr("stroke", "black")
    //     .style("stroke-width", 2)

    // const connections = svg.append("g").selectAll('path')
    //     .data(information.links());

    // const linksGenerator = d3.linkRadial()
    //     .angle(function (d) { return d.x })
    //     .radius(function (d) { return d.y; });

    // connections.enter()
    //     .append('path')
    //     .attr("d", linksGenerator)
    //     .style("fill", 'none')
    //     .attr("stroke", '#ccc')


    // let names = svg.append('g').selectAll('text')
    //     .data(information.descendants());

    // names.enter().append("text")
    //     .attr("dy", ".31em")
    //     .attr("opacity", 1)
    //     .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
    //     .attr("transform", function (d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
    //     .text(function (d) { return d.data.id });

