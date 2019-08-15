move = () => {
        const t = d3.transition().duration(5000).ease(d3.easeLinear);

        const boundaries = {
            top: 400,
            bottom: 500,
            left: 600,
            right: 700
        }
        
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