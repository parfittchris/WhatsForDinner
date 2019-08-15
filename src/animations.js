move = () => {
        const t = d3.transition().duration(5000).ease(d3.easeLinear);
        
        svg.transition(t)
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
    const t = d3.transition().duration(1000).ease(d3.easeLinear);

    let totalLength = link.node().getTotalLength();

    link.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition(t)
        .attr('stroke-dashoffset', 0)
        .on('end', repeat)
}

