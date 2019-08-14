
        //Render modal
        const aboutBtn = document.getElementById('about-btn');
        const aboutModal = document.getElementById('about-modal');
        const aboutClose = document.getElementById('btn-close');

        window.onclick = function(e) {
            if (e.target == aboutModal) {
                aboutModal.style.display = 'none';
                }
            } 
            
        aboutBtn.onclick = function() {
                aboutModal.style.display = 'block';
            }

        aboutClose.onclick = function () {
                aboutModal.style.display = 'none';
            }


        //Render Dendrogram
        // const width = 950;
        // const height = 650;

        // const visual = d3.select('#visual').append('svg')
        //         .attr('width', width)
        //         .attr('height', height)
        //         .append('g')
        //         .attr("transform", "translate(40,40)");

    
        // d3.json("./src/data.json")
        // .then(function(data) {
        //     const clusterLayout = d3.cluster()
        //         .size([width * .5, width * .6]);

        //     const root = d3.hierarchy(data, function (d) {
        //         return d.children;
        //     });

        //     clusterLayout(root);
        //     const node = visual.selectAll('g')
        //         .data(root.descendants())
        //         .enter()
        //         .append('g')
        //         .attr('transform', function(d) {
        //             return 'translate(' + d.y + ',' + d.x + ')'
        //         })

        //     node.append('circle')
        //         .attr('r', 5)
        //         .style('fill', 'white')
        //         .style('stroke', 'blue')
        //         .style('stroke-width', 1)

        //     node.append("text")
        //         .attr("dy", 3)
        //         .attr("y", -8)
        //         .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
        //         .text('test');

        //     const link = visual.selectAll('path')
        //         .data(root.descendants().slice(1))
        //         .enter()
        //         .append('path')
        //         .attr("d", function (d) {
        //             return "M" + d.y + "," + d.x
        //                 + "C" + (d.parent.y + 50) + "," + d.x
        //                 + " " + (d.parent.y + 150) + "," + d.parent.x
        //                 + " " + d.parent.y + "," + d.parent.x;
        //         })
            
        //     link.style('fill', 'none')
        //         .attr('stroke', 'blue')
        //         .attr('stroke-width', 3)
        //         .attr('stroke-opacity', .5)

                
        // })