

move = () => {
        const t = d3.transition().duration(5000).ease(d3.easeLinear);
        
        svg.transition(t)
            // .delay(1500)
            .style("transform", "translate(600px, 370px) rotate(10deg)")
            .transition(t)
            .style("transform", "translate(670px, 390px) rotate(-10deg)")
            .transition(t)
            .style("transform", "translate(690px, 400px) rotate(10deg)")
            .transition(t)
            .style("transform", "translate(650px, 420px) rotate(-10deg)")
            .on('end', move)

}
 draw = () => {
    // Animation code got from https://bl.ocks.org/basilesimon/f164aec5758d16d51d248e41af5428e4
    const t = d3.transition().duration(500).ease(d3.easeLinear);

    let totalLength = link.node().getTotalLength();
    link.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition(t)
        .attr('stroke-dashoffset', 0)
        .style('opacity', 1)
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
